import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MatTableModule,
  MatTableDataSource,
} from '@angular/material/table';
import { Subscription } from 'rxjs';
import { PostsService } from '../../services/posts';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnDestroy {
  displayedColumns = ['datePosted', 'title', 'category', 'delete'];
  dataSource = new MatTableDataSource<Post>([]);
  private sub = new Subscription();

  constructor(private postsService: PostsService) {
    this.sub = this.postsService.posts$.subscribe((posts) => {
      this.dataSource.data = posts;
    });
  }

  addFakePost() {
    const post: Post = {
      title: 'Nuevo post ' + (this.dataSource.data.length + 1),
      category: 'Demo',
      datePosted: new Date(),
      body: 'Contenido de ejemplo',
    };
    this.postsService.addPost(post);
  }

  deleteRow(index: number) {
    this.postsService.deletePost(index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
