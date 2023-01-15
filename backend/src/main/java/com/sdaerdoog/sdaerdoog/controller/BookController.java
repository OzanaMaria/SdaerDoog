package com.sdaerdoog.sdaerdoog.controller;

import com.sdaerdoog.sdaerdoog.model.Book;
import com.sdaerdoog.sdaerdoog.model.User;
import com.sdaerdoog.sdaerdoog.service.BookService;
import com.sdaerdoog.sdaerdoog.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/")
public class BookController {

    @Autowired
    BookService bookService;

    @CrossOrigin
    @PostMapping("/addBook")
    public ResponseEntity insertBook(@RequestBody Book book) {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.insert(book));
    }

    @CrossOrigin
    @GetMapping("/books")
    public ResponseEntity getAllBook() {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.getAllBooks());
    }

    @CrossOrigin
    @GetMapping("/book")
    public ResponseEntity getBookById(@RequestParam Integer id) {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.getBookById(id));
    }

    @CrossOrigin
    @GetMapping("/books/genre")
    public ResponseEntity getAllBookByGenre(@RequestParam String genre) {
        return ResponseEntity.status(HttpStatus.OK).body(bookService.getAllBooksByGenre(genre));
    }
}
