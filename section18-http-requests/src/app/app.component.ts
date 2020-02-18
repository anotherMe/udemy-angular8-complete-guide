import { Component, OnInit } from '@angular/core';

import { Post } from './post.model';
import { PostService } from './post.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];
  isLoading = false;
  errorMsg = '';

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts() {

    this.isLoading = true;

    this.ps.fetchPosts().subscribe( (payload) => {

      this.isLoading = false;
      this.loadedPosts = payload;
      this.errorMsg = '';

    }, (payload:HttpErrorResponse) => {

      this.isLoading = false;
      this.errorMsg = payload.message;
    });
  }

  onCreatePost(postData: Post) {
    
    this.ps
    .createAndStorePost(postData)
    .subscribe(responseData => {
      console.log(responseData);
      this.fetchPosts();
    });
  }

  onFetchPosts() {
   this.fetchPosts();
  }

  onClearPosts() {
    this.ps
    .deleteAllPosts()
    .subscribe( responseData => {
      console.log(responseData);
      this.fetchPosts();
    });
  }

  onBtnDelete(post: Post) {

    this.ps
    .deletePost(post.id)
    .subscribe(responseData => {
      console.log(responseData);
      this.fetchPosts();
    });
  }

}
