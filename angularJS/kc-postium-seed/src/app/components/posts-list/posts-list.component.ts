import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from "../../models/post";
import { User } from '../../models/user';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../../services/post.service';

@Component({
    selector: "posts-list",
    templateUrl: "posts-list.component.html"
})
export class PostsListComponent implements OnDestroy {

    @Input() posts: Post[];

    private _postSubscription: Subscription;

    constructor(private _router: Router,
                private _postService: PostService) { }

    ngOnDestroy(): void {
        this._unsubscribePostCreation();
    }

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~                                                                                                 |
     |------------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección del autor de un post y navega a la  |
     | dirección correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app. |
     | La ruta a navegar es '/posts/users', pasando como parámetro el identificador del autor.                          |
     |------------------------------------------------------------------------------------------------------------------*/

     showPostsOfAuthor(author: User) {
         this._router.navigate([`posts/users/${author.id}`]);
     }

    /*-----------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~                                                                                              |
     |-----------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección de un post y navega a la dirección |
     | correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app.  La ruta |
     | a navegar es '/posts', pasando como parámetro el identificador del post.                                        |
     |-----------------------------------------------------------------------------------------------------------------*/
     showPostDetails(post: Post) {
         this._router.navigate([`posts/${post.id}`]);
     }

     showPostEdition(post: Post) {
         this._router.navigate([`edit-story/${post.id}`])
     }

     likePost(post: Post) {
        this._unsubscribePostCreation();
        post.likes.push(User.getLoggedUser().email);
        this._postSubscription = this._postService.editPost(post).subscribe(() => this._router.navigate(["/"]));
     }

     dislikePost(post: Post) {
        this._unsubscribePostCreation();
        const index = post.likes.indexOf(User.getLoggedUser().email);
        // The condition will be true 
        if (index > -1) post.likes.splice(index, 1);
        this._postSubscription = this._postService.editPost(post).subscribe(() => this._router.navigate(["/"]));
     }

    private _unsubscribePostCreation(): void {
        if (this._postSubscription) {
            this._postSubscription.unsubscribe();
        }
    }

}
