import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsComponent } from "./posts.component";
// import { LayoutComponent } from "../shared/layout/layout.component";
// import { PostListComponent } from "./post-list/post-list.component";

const routes: Routes = [
  // {
  //   path: "",
  //   component: LayoutComponent,
  //   children: [{ path: "", component: PostListComponent }]
  // }
  { path: "posts", component: PostsComponent },
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
