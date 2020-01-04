import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
} from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostsService } from "../../../core/services/posts.service";
import { Subscription, Subject, Observable } from "rxjs";
import { Posts } from "../../../core/models/posts";

import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType
} from "@angular/common/http";
@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
  fileData: File = null;
  url: any = null;
  postForm: FormGroup;

  percentDone: number;
  uploadSuccess: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    return (this.postForm = this.fb.group({
      image: [null, Validators.required]
    }));
  }

  onSelectFile(event) {
    this.fileData = <File>event.target.files[0];
    this.postForm.get("image").setValue(this.fileData);
    if (this.fileData) {
      const reader = new FileReader();

      reader.readAsDataURL(this.fileData); // read file as data url

      reader.onload = event => {
        // called once readAsDataURL is completed
        this.url = reader.result;
      };
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("image", this.fileData);

    this.http
      .post("https://file.io", formData, {
        reportProgress: true,
        observe: "events"
      })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }
  public delete() {
    this.url = null;
  }
}
