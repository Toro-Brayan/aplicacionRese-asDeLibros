import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeService, Book, Review } from '../../services/home.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports:  [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  selectedBook?: Book;
  reviews: Review[] = [];
  searchText: string = '';

  rating: number = 5;
  comment: string = '';
  username: string = 'UsuarioPrueba';

  constructor(private homeService: HomeService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.homeService.getBooks().subscribe(books => this.books = books);
  }

  viewDetails(book: Book) {
    this.selectedBook = book;
    this.homeService.getReviews(book.id).subscribe(reviews => this.reviews = reviews);
  }

  addReview() {
    if (!this.selectedBook) return;
    const review = {
      bookId: this.selectedBook.id,
      rating: this.rating,
      comment: this.comment
    };
    this.homeService.addReview(review).subscribe(r => {
      this.reviews.unshift(r);
      this.rating = 5;
      this.comment = '';
    });
  }

  get filteredBooks() {
    const txt = this.removeAccents(this.searchText.toLowerCase());
    return this.books.filter(book =>
      this.removeAccents(book.title.toLowerCase()).includes(txt) ||
      this.removeAccents(book.author.toLowerCase()).includes(txt) ||
      this.removeAccents(book.category.toLowerCase()).includes(txt)
    );
  }

  removeAccents(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  get isLogged() {
    return !!localStorage.getItem('token');
  }

  logout() {
  this.authService.logout();       // limpia el token
  this.router.navigate(['/login']); // redirige al login
}

}
