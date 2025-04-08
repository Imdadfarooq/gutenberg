import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { debounceTime, distinctUntilChanged, Subject, switchMap, takeUntil, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiction',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './fiction.component.html',
  styleUrl: './fiction.component.scss'
})
export class FictionComponent {
  searchText: string = '';
  booksData: any = [];
  isFocused: boolean = false;
  isLoading: boolean = false;
  errorMessage: string | null = null;

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private booksService: BooksService, private router: Router) { }

  ngOnInit() {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchText) => {
          this.isLoading = true;
          this.errorMessage = null;
          return this.booksService.fetchBooks(searchText).pipe(
            catchError(error => {
              this.errorMessage = error.message || 'Failed to fetch books';
              return of([]);
            })
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((res: any) => {
        this.booksData = res;
        this.isLoading = false;
      });

    this.fetchBooks();
  }

  fetchBooks() {
    this.searchSubject.next(this.searchText);
  }

  onInputChange() {
    this.searchSubject.next(this.searchText);
  }

  clearSearch() {
    this.searchText = '';
    this.searchSubject.next('');
    this.errorMessage = null;
  }

  handleImageError(event: any) {
    event.target.src = '/assets/images/Drama.svg';
  }

  onBookClick(book: any) {
    const preferredFormats = ['text/html', 'application/pdf', 'text/plain'];
    let selectedUrl: string | null = null;
    for (const format of preferredFormats) {
      if (book.formats[format]) {
        selectedUrl = book.formats[format];
        break;
      }
    }
    if (selectedUrl) {
      window.open(selectedUrl, '_blank');
    } else {
      alert('No suitable format available for this book.');
    }
  }
  back() {
    this.router.navigateByUrl('')
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}