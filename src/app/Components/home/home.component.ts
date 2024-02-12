import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../Services/posts.service';
import { IPost } from '../../Models/ipost';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  post: IPost = { title: '', body: '' };

  constructor(
    private postsService: PostsService,
    private userService: UserService
  ) {}

  newPost!: IPost;

  addPost() {
    const newPost: IPost = {
      ...this.post,
      author: this.userService.getUser(),
      timestamp: Date.now(),
    };

    this.postsService.addPost(newPost).subscribe((data) => {
      this.newPost = data;
    });
  }
}
