import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsRoutingModule } from "./posts-routing.module";
import { SharedModule } from "../shared/shared.module";
import { PostListComponent } from "./pages/";
import { PostsComponent } from "./posts.component";

@NgModule({
  imports: [CommonModule, PostsRoutingModule, SharedModule],
  declarations: [PostListComponent, PostsComponent],
  entryComponents: []
})
export class PostsModule {}
