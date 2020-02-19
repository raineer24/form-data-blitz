import { Component, Input } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  ControlContainer,
  FormControl
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
    <input type="file" (change)="upload($event.target.files)" /> {{ progress }}%
  `,
  styleUrls: ["./file-upload.component.scss"]
})
export class FileUploadComponent {
  public progress: number;
  private _control: FormControl;

  constructor(
    private readonly container: ControlContainer,
    public postsService: PostsService
  ) {}

  @Input() set control(value: FormControl) {
    this._control = value;
  }

  @Input() set controlName(title: string) {
    this._control = this.container.control.get(title) as FormControl;
  }

  upload(files: FileList) {
    // set it to nothing since we're about to upload a new value
    // also this means that it'll be validated correctly
    this._control.setValue(null);

    this.postsService.uploadAndProgress(files).subscribe(event => {
      console.log(files);
      console.log(event);
      

      if (event.type === HttpEventType.UploadProgress) {
        this.progress = this.postsService.calcProgressPercent(event);
      } else if (event instanceof HttpResponse) {
        // the actual should be returned as something like
        // this._control.setValue(event.body.url)
        console.log(event.body);

        this._control.setValue("some url");
      }
    });
  }
}
