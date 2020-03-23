import { Component, OnInit } from "@angular/core";
import { Posts } from "../../../core/models/posts";
import { ActivatedRoute, Router } from "@angular/router";
import { PostsService } from "../../../core/services/posts.service";
@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"]
})
export class PostListComponent implements OnInit {
  posts: Posts[] = [];

  constructor(
    public postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.postsService.refreshNeed$.subscribe(() => {
      this.getAllPosts();
    });

    this.getAllPosts();
  }

  private getAllPosts() {
    this.postsService.getPosts().subscribe((posts: Posts[]) => {
      this.posts = posts;

      console.log(posts["blogs"]);
    });
  }
}
