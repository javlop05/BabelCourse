import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Post } from "../../models/post";
import { User } from '../../models/user';
import { Category } from '../../models/category';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../../services/post.service';

@Component({
    templateUrl: "post-details.component.html",
    styleUrls: ["post-details.component.css"]
})
export class PostDetailsComponent implements OnInit, OnDestroy {

    private _postSubscription: Subscription;
    editable: boolean = false;
    post: Post;

    iLike: boolean = false;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _postService: PostService
    ) { }

    ngOnInit(): void {
        this._activatedRoute.data.forEach((data: { post: Post }) => this.post = data.post);
        window.scrollTo(0, 0);
        this.editable = (this.post.author.id == User.defaultUser().id);
        this.iLike =
            (this.post.likes.findIndex(
                (element) => {
                    return element === User.defaultUser().email;
                }
            ) !== -1);
    }

    ngOnDestroy(): void {
        this._unsubscribePostCreation();
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                              |
     |---------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts del autor indicado. Recuerda que    |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/users', |
     | pasando como parámetro el identificador del autor.                                                            |
     |---------------------------------------------------------------------------------------------------------------*/

    showPostsOfAuthor() {
        this._router.navigate([`posts/users/${this.post.author.id}`]);
    }

    /*--------------------------------------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~                                                                                                |
     |--------------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts de la categoría indicada. Recuerda que   |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/categories', |
     | pasando como parámetro el identificador de la categoría.                                                           |
     |--------------------------------------------------------------------------------------------------------------------*/

    showCategory(category: Category) {
        this._router.navigate([`posts/categories/${category.id}`]);
    }

    editPost() {
        this._router.navigate([`edit-story/${this.post.id}`]);
    }

    likePost() {
        this.iLike = true;
        this._unsubscribePostCreation();
        this.post.likes.push(User.defaultUser().email);
        this._postSubscription = this._postService.editPost(this.post).subscribe();
    }

    dislikePost() {
        this.iLike = false;
        this._unsubscribePostCreation();
        const index = this.post.likes.indexOf(User.defaultUser().email);
        // The condition will be true 
        if (index > -1) this.post.likes.splice(index, 1);
        this._postSubscription = this._postService.editPost(this.post).subscribe();
    }

    private _unsubscribePostCreation(): void {
        if (this._postSubscription) {
            this._postSubscription.unsubscribe();
        }
    }

}
