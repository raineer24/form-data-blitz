import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsRoutingModule } from "./posts-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PostListComponent } from "./pages/";
import { PostsComponent } from "./posts.component";

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
    MatMenuModule
  ],
  declarations: [PostListComponent, PostsComponent],
  entryComponents: []
})
export class PostsModule {}
