package com.sdaerdoog.sdaerdoog.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Setter
@NoArgsConstructor
@Getter
@ToString
@Entity
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "author", nullable = false)
    private String author;
    @Column(name = "photo", nullable = false)
    private String photo;
    @Column(name = "genre", nullable = false)
    private String genre;

    @OneToMany(mappedBy = "book")
    Set<UserBook> ratings;
}
