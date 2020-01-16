import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
@Component({
  selector: "app-post-create-modal",
  templateUrl: "./p-create-modal.component.html",
  styleUrls: ["./p-create-modal.component.scss"]
})
export class PostCreateModalComponent implements OnInit {
  modalRef: BsModalRef;
  title;
  closeBtnName: string;
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}
}
