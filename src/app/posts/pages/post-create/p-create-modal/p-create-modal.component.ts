import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType,
  HttpEvent
} from "@angular/common/http";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { filter, map, tap } from "rxjs/operators";
import { pipe } from "rxjs";
import { PostsService } from "../../../../core/services/posts.service";
import { requiredFileType } from "./upload-file-validators";

export function UploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((100 * event.loaded) / event.total));
    }
  });
}

export function toResponseBody<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
    map((res: HttpResponse<T>) => res.body)
  );
}

@Component({
  selector: "app-post-create-modal",
  templateUrl: "./p-create-modal.component.html",
  styleUrls: ["./p-create-modal.component.scss"]
})
export class PostCreateModalComponent implements OnInit {
  progress = 0;
  fileData: File = null;
  modalRef: BsModalRef;
  title;
  closeBtnName: string;
  postForm: FormGroup;
  fd = new FormData();
  previewUrl: any = null;
  submitted = false;

  percentDone: number;
  uploadSuccess: boolean;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    public postsService: PostsService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.postForm.controls;
  }

  onSubmit() {
    this.submitted = false;
    if (!this.postForm.valid) {
      markAllAsDirty(this.postForm);
      return;
    }

    return this.postsService
      .upload(this.postForm.value)
      .pipe(
        UploadProgress(progress => (this.progress = progress)),
        toResponseBody()
      )
      .subscribe(data => {
        this.progress = 0;
        this.submitted = true;
        this.postForm.reset;
      });
  }

  hasError(field: string, error: string) {
    const control = this.postForm.get(field);

    return control.dirty && control.hasError(error);
  }

  getErrorMessage() {
    return this.postForm.value.hasError("required") ? "Required" : "";
  }

  onFileChange(event) {
    this.fileData = <File>event.target.files[0];
    this.preview();
  }

  preview() {
    // show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }

  initForm() {
    return (this.postForm = this.fb.group({
      title: ["", Validators.required],
      content: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      image: new FormControl(null, [
        Validators.required,
        requiredFileType("png" && "jpg")
      ])
    }));
  }
}

export function markAllAsDirty(form: FormGroup) {
  for (const control of Object.keys(form.controls)) {
    form.controls[control].markAsDirty();
  }
}

export function toFormData<T>(formValue: T) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }
}
