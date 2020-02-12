import { Component, Input } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostsService } from "../../../../../core/services/posts.service";

import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType
} from "@angular/common/http";
@Component({
  selector: "file-upload",
  template: `
    <input type="file" />
  `,
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent {
  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    public postsService: PostsService
  ) {}
}
