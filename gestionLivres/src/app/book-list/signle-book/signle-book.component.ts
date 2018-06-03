import { Component, OnInit } from '@angular/core';
import {Book} from '../../Models/Book.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../services/books.service';

@Component({
  selector: 'app-signle-book',
  templateUrl: './signle-book.component.html',
  styleUrls: ['./signle-book.component.scss']
})
export class SignleBookComponent implements OnInit {

  book: Book;

  constructor(private  route: ActivatedRoute , private  bookService: BooksService , private  router: Router) { }

  ngOnInit() {
    this.book = new Book('', '') ;
    const id = this.route.snapshot.params['id'];
    this.bookService.getSingleBook(+id).then(
      (book: Book) => {
        this.book = book ;
      }
    );
  }

  onBack() {
     this.router.navigate(['/books']);
  }

}
