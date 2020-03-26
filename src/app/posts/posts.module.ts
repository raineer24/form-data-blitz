import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsRoutingModule } from "./posts-routing.module";
import { SharedModule } from "../shared/shared.module";
import {
  PostListComponent,
  PostCreateComponent,
  PostCreateModalComponent,
  FileUploadComponent,
  ProgressComponent
} from "./pages/";
import { PostsComponent } from "./posts.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
} from "@angular/material";

import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    PostListComponent,
    PostsComponent,
    PostCreateComponent,
    PostCreateModalComponent,
    FileUploadComponent,
    ProgressComponent
  ],
  entryComponents: [PostCreateModalComponent]
})
export class PostsModule {}
