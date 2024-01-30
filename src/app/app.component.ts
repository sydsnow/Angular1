import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import CATEGORIES from '../data/categories.json';
import PROJECTS from '../data/projects.json';
import TAGS from '../data/tags.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular - Assignment 1';
  date: string | null = null;
  author: string | null = null;
  categories: Category[] | undefined;
  projects: Project[] | undefined;
  tags: Tag[] | undefined;
  categoryFilter: Category | undefined;
  filteredProjects: Project[] | undefined;

  setCategoryFilter(category: Category): void {
    if (this.categoryFilter === category) {
      this.categoryFilter = undefined;
    } else {
      this.categoryFilter = category;
    }
    this.applyFilters();
  }

  isCategoryFilterActive(category: Category): boolean {
    return this.categoryFilter === category;
  }

  clearFilters(): void {
    this.categoryFilter = undefined;
    this.applyFilters();
  }

  applyFilters(): void {
    // Apply filters to projects based on the category filter
    this.filteredProjects = this.projects?.filter(project => {
      const categoryFilterMatch = !this.categoryFilter || project.category?.id === this.categoryFilter.id;
      return categoryFilterMatch;
    });
  }

  constructor() {
    this.author = 'Sydnee & Eunice';
    this.date = '2021-09-20';
    this.categories = CATEGORIES;
    this.projects = PROJECTS;
    this.filteredProjects = this.projects;
    this.tags = TAGS;
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
  'tags': Tag[];
}
