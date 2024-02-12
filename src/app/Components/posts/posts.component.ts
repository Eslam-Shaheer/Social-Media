import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { PostsService } from '../../Services/posts.service';
import { IPost } from '../../Models/ipost';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SinglepostComponent } from '../singlepost/singlepost.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [DatePipe, RouterModule, SinglepostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit, OnChanges {
  @Input() newPosts!: IPost;

  posts: IPost[] = [];

  constructor(private postsService: PostsService) {}

  ngOnChanges(): void {
    console.log(this.newPosts);

    this.posts.unshift(this.newPosts);
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  handleDeletePost(id: string) {
    this.posts = this.posts.filter((post) => post.id !== id);
  }
}
