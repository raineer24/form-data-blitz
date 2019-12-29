import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "posts",
    loadChildren: "./posts/posts.module#PostsModule"
  },
  {
    path: "users",
    loadChildren: "./users/users.module#UsersModule"
  },
  {
    path: "shared",
    loadChildren: "./shared/shared.module#SharedModule"
  },
  {
    path: "**",
    redirectTo: "posts",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
