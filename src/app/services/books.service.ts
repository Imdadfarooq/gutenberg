import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
  fetchBooks(searchText: string = '') {
    return this.http.get(`http://gutendex.com/books/`, {
      params: { search: searchText }
    });
  }
}
