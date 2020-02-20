import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostsService } from "../../../../core/services/posts.service";
import { requiredFileType } from "./upload-file-validators";

import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType
} from "@angular/common/http";
@Component({
  selector: "app-post-create-modal",
  templateUrl: "./p-create-modal.component.html",
  styleUrls: ["./p-create-modal.component.scss"]
})
export class PostCreateModalComponent implements OnInit {
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
    // this.submitted = true;
    // const formData = new FormData();
    // formData.append("image", this.fileData);
    // formData.append("title", this.postForm.value.title);
    // formData.append("content", this.postForm.value.content);
    // return this.postsService.upload(formData).subscribe(data => {
    //   console.log("sent");
    //   console.log(data);
    //   if (data.type === HttpEventType.UploadProgress) {
    //     this.percentDone = Math.round((100 * data.loaded) / data.total);
    //   } else if (event instanceof HttpResponse) {
    //     this.uploadSuccess = true;
    //   }
    //   this.postForm.reset();
    // });
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
      title: ["", Validators.compose([Validators.required])],
      content: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      image: ["", Validators.required, requiredFileType("png")]
    }));
  }
}
