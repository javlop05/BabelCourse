import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Post } from "../../models/post";

@Component({
    templateUrl: "user-posts.component.html",
    styleUrls: ["user-posts.component.css"]
})
export class UserPostsComponent implements OnInit {

    posts: Post[];

    constructor(private _activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this._activatedRoute.data.forEach((data: { posts: Post[] }) => this.posts = data.posts);
        window.scrollTo(0, 0);
    }
}
