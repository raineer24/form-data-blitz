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

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreateComponent implements OnInit {
  url: any = null;
  constructor() {}

  ngOnInit() {}

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = event => {
        // called once readAsDataURL is completed
        this.url = reader.result;
      };
    }
  }
  public delete() {
    this.url = null;
  }
}
