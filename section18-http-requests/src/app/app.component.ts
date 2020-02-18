import { Component, OnInit } from '@angular/core';

import { Post } from './post.model';
import { PostService } from './post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedPosts: Post[] = [];
  isLoading = false;

  constructor(private ps: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts() {
    this.isLoading = true;
    this.ps.fetchPosts().subscribe( (myPosts) => {
      this.loadedPosts = myPosts;
      this.isLoading = false;
    });
  }

  onCreatePost(postData: Post) {
    this.ps.createAndStorePost(postData);
  }

  onFetchPosts() {
   this.fetchPosts(); 
  }

  onClearPosts() {
    // Send Http request
  }
}
