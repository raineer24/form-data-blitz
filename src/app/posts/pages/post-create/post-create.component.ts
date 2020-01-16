import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  TemplateRef
} from "@angular/core";
import { NgForm, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { PostsService } from "../../../core/services/posts.service";
import { Subscription, Subject, Observable, fromEventPattern } from "rxjs";
import { Posts } from "../../../core/models/posts";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { PostCreateModalComponent } from "../post-create/p-create-modal/p-create-modal.component";

import {
  HttpClientModule,
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpEventType,
  HttpBackend,
  HttpHeaderResponse,
  HttpEvent
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
  showImg: boolean;
  data: any;
  bsModalRef: BsModalRef;

  percentDone: number;
  uploadSuccess: boolean;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public postsService: PostsService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.initForm();
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

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }

  openModal() {
    console.log("clicked");
  }

  openModalWithComponent() {
    const initialState = {
      // list: [
      //   'Open a modal with component',
      //   'Pass your data',
      //   'Do something else',
      //   '...'
      // ],
      title: "Post Create Modal"
    };
    this.bsModalRef = this.modalService.show(PostCreateModalComponent, {
      initialState
    });
    this.bsModalRef.content.closeBtnName = "Close";
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
    formData.append("title", this.postForm.value.title);
    formData.append("content", this.postForm.value.content);
    console.log(formData);

    // this.http
    //   .post("https://file.io", formData, {
    //     reportProgress: true,
    //     observe: "events"
    //   })
    //   .subscribe(event => {
    //     if (event.type === HttpEventType.UploadProgress) {
    //       this.percentDone = Math.round((100 * event.loaded) / event.total);
    //     } else if (event instanceof HttpResponse) {
    //       this.uploadSuccess = true;
    //     }
    //   });

    return this.postsService
      .upload(formData)
      .subscribe((event: HttpEvent<any>) => {
        console.log(event);
        // if (data.type === HttpEventType.UploadProgress) {
        //   this.percentDone = Math.round((100 * data.loaded) / data.total);
        // } else if (data instanceof HttpResponse) {
        //   this.uploadSuccess = true;
        // }

        switch (event.type) {
          case HttpEventType.Response:
            this.data = event.body;
            if (this.data.message === "Saved") {
              this.showImg = true;
            }

            break;
        }

        this.postForm.reset();
      });
  }
  public delete() {
    this.url = null;
  }
}
