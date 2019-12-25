import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsRoutingModule } from "./posts-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PostListComponent } from "./post-list/post-list.component";

@NgModule({
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  declarations: [PostListComponent],
  entryComponents: []
})
export class PostsModule {}
