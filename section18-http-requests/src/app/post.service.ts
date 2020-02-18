import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) {}

    createAndStorePost(post: Post) {

        return this.http
        .post<{ name: string }>(
          'https://udemy-angular-course-3f0ca.firebaseio.com/posts.json',
          post
        );
    }

    fetchPosts():Observable<any> {

        return this.http
          .get<{ [param: string]: Post }>('https://udemy-angular-course-3f0ca.firebaseio.com/posts.json')
          .pipe(map((myData) => {
            const postArray: Post[] = [];
            for (const key in myData) {
              // postArray.push(myData[key]);
              postArray.push({ ...myData[key], id: key });
            }
            return postArray;
          }))

    }

    deletePost(id: string) {

        const url = `https://udemy-angular-course-3f0ca.firebaseio.com/posts/${id}.json`;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
        return this.http.delete(url);
        
    }

    deleteAllPosts() {

        return this.http
        .delete('https://udemy-angular-course-3f0ca.firebaseio.com/posts.json');

    }
}