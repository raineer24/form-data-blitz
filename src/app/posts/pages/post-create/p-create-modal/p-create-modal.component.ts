import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostsService } from "../../../../core/services/posts.service";
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

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const formData = new FormData();
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
      image: [null, Validators.required]
    }));
  }
}
