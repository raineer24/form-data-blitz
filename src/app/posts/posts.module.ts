import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsRoutingModule } from "./posts-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PostListComponent, PostCreateComponent } from "./pages/";
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
    ReactiveFormsModule
  ],
  declarations: [PostListComponent, PostsComponent, PostCreateComponent],
  entryComponents: []
})
export class PostsModule {}
