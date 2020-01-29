import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-post-create-modal",
  templateUrl: "./p-create-modal.component.html",
  styleUrls: ["./p-create-modal.component.scss"]
})
export class PostCreateModalComponent implements OnInit {
  modalRef: BsModalRef;
  title;
  closeBtnName: string;
  postForm: FormGroup;
  fd = new FormData();

  constructor(public bsModalRef: BsModalRef, private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {}

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
