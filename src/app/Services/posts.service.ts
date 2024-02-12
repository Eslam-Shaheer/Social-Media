import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { IPost } from '../Models/ipost';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl = `${environment.baseUrl}/posts`;
  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.baseUrl);
  }
  addPost(post: IPost): Observable<IPost> {
    return this.httpClient.post<IPost>(this.baseUrl, post);
  }
  getUserPosts() {}

  getPostById(postId: string): Observable<IPost> {
    return this.httpClient.get<IPost>(`${this.baseUrl}/${postId}`);
  }
  editPost(postId: string, post: IPost): Observable<IPost> {
    return this.httpClient.patch<IPost>(`${this.baseUrl}/${postId}`, post);
  }

  deletePost(postId: string): Observable<any> {
    return this.httpClient.delete<IPost>(`${this.baseUrl}/${postId}`);
  }
}
