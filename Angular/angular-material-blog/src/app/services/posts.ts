import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post.model';

const INITIAL_POSTS: Post[] = [
  {
    title: 'Introducción a Angular Material',
    category: 'Web Development',
    datePosted: new Date(),
    body: 'Post de ejemplo 1',
  },
  {
    title: 'Componentes standalone en Angular',
    category: 'Angular',
    datePosted: new Date(),
    body: 'Post de ejemplo 2',
  },
];

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private postsSubject = new BehaviorSubject<Post[]>(INITIAL_POSTS);

  posts$ = this.postsSubject.asObservable();

  addPost(post: Post) {
    const current = this.postsSubject.value;
    this.postsSubject.next([...current, post]);
  }

  deletePost(index: number) {
    const current = this.postsSubject.value;
    this.postsSubject.next([
      ...current.slice(0, index),
      ...current.slice(index + 1),
    ]);
  }
}
