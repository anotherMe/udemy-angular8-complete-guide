import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts() {

    this.isLoading = true;
    this.http
      .get<{ [param: string]: Post }>('https://udemy-angular-course-3f0ca.firebaseio.com/posts.json')
      .pipe(map((myData) => {
        const postArray: Post[] = [];
        for (const key in myData) {
          // postArray.push(myData[key]);
          postArray.push({ ...myData[key], id: key });
        }
        return postArray;
      }))
      .subscribe( (myPosts) => {
        this.isLoading = false;
        this.loadedPosts = myPosts;
      });    
  }

  onCreatePost(postData: Post) {

    this.http
      .post<{ name: string }>(
        'https://udemy-angular-course-3f0ca.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
