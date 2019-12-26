import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./posts/posts.module#PostsModule"
  },
  {
    path: "posts",
    loadChildren: "./posts/posts.module#PostsModule"
  },
  {
    path: "users",
    loadChildren: "./users/users.module#UsersModule"
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
