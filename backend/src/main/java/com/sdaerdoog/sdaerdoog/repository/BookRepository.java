package com.sdaerdoog.sdaerdoog.repository;

import com.sdaerdoog.sdaerdoog.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {
    List<Book> findAllBookByGenre(String genre);
}
