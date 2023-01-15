package com.sdaerdoog.sdaerdoog.service;

import com.sdaerdoog.sdaerdoog.model.Book;
import com.sdaerdoog.sdaerdoog.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book insert(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Integer id) {
        return bookRepository.findById(id);
    }

    public List<Book> getAllBooksByGenre(String genre){
        return bookRepository.findAllBookByGenre(genre);
    }
}
