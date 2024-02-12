import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IPost } from '../../Models/ipost';
import { DatePipe } from '@angular/common';
import { UserService } from '../../Services/user.service';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../Services/posts.service';

@Component({
  selector: 'app-singlepost',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './singlepost.component.html',
  styleUrl: './singlepost.component.scss',
})
export class SinglepostComponent implements OnChanges {
  isAuther!: Boolean;
  @Input() post!: IPost;

  @Output() handleDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private userService: UserService,
    private postsService: PostsService
  ) {
    console.log(this.post);
  }

  ngOnChanges(): void {
    this.userService.globalUserSubject.subscribe((user) => {
      console.log(this.post, 'ss');
      this.isAuther = user?.id == this.post.author?.id;
    });
  }

  deletePost() {
    this.postsService.deletePost(this.post.id || '').subscribe((data) => {
      this.handleDelete.emit(data.id);
    });
  }
}
