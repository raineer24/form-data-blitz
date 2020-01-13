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
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
