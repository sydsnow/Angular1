import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular - Assigment 1';
  date: string | null = null;
  author: string | null = null;
  categories: Category[] | undefined;
  tags: Tag[] | undefined;
  projects: Project[] | undefined;
  categoryFilter: Category | undefined;
  tagFilter: Tag | undefined;

  setCategoryFilter(category: Category): void {
    this.categoryFilter = category;
  }

  setTagFilter(tag: Tag): void {
    this.tagFilter = tag;
  }

  clearFilters(): void {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}

export class Category {
  id!: number;
  name!: string;
  slug!: string;
}

export class Tag {
  id!: number;
  name!: string;
  slug!: string;
  pivot?: any;
}

export class Project {
  'id': number;
  'title': string;
  'slug': string;
  'excerpt': string;
  'body': string;
  'url': string | null;
  'published_date': string | null;
  'image': string | null;
  'thumb': string | null;
  'category_id': number | null;
  'created_at': string;
  'updated_at': string;
  'category': Category | null;
  'tags': Tag[] | undefined;
}
