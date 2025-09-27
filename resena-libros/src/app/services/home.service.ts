import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  summary: string;
}

export interface Review {
  id: number;
  bookId: number;
  username: string;
  rating: number;
  comment: string;
  date: number;
}

@Injectable({ providedIn: 'root' })


export class HomeService {
  private booksUrl = 'http://localhost:3000/books';
  private reviewsUrl = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getReviews(bookId: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.reviewsUrl}/${bookId}`);
  }

  addReview(review: { bookId: number; rating: number; comment: string }): Observable<Review> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.post<Review>(this.reviewsUrl, review, { headers });
  }

  
}
