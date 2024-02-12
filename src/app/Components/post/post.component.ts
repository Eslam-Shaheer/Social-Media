import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../Services/posts.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IPost } from '../../Models/ipost';
import { DatePipe } from '@angular/common';
import { SinglepostComponent } from '../singlepost/singlepost.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    DatePipe,
    SinglepostComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  currentPost!: IPost;

  formGroup!: FormGroup;

  constructor(
    private postService: PostsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });

    this.router.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('id') || '';
      this.postService.getPostById(id).subscribe((post) => {
        this.currentPost = post;

        this.formGroup.patchValue(post);
      });
    });
  }
  handleEdit() {
    this.postService
      .editPost(this.currentPost.id || '', this.formGroup.value)
      .subscribe((post) => {
        console.log(post);
      });
  }
}
