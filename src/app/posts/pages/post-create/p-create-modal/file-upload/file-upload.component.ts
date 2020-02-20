import { Component, Input, ElementRef, HostListener } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  ControlContainer,
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
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
    <div class="file-drop-area">
      <span class="fake-btn">Choose File</span>
      <span class="file-msg">{{
        file ? file.name : "or drag and drop file here"
      }}</span>
      <input class="file-input" type="file" />
    </div>
    <app-progress [progress]="progress"></app-progress>
  `,
  styleUrls: ["./file-upload.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent {
  @Input() progress;
  onChange: Function;
  private file: File | null = null;

  @HostListener("change", ["$event.target.files"]) emitFiles(event) {
    const file = event && event.item(0);
    this.file = file;
    console.log(this.file);
  }

  constructor(private host: ElementRef<HTMLInputElement>) {}

  writeValue(value: null) {
    // clear file input
    this.host.nativeElement.value = "";
    this.file = null;
  }

  registerOnChange(fn: Function) {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function) {}
}
