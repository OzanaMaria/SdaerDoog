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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password", nullable = false)
    private String password;
    @Column(name = "favorite_author")
    private String favoriteAuthor;
    @Column(name = "favorite_genre")
    private String favoriteGenre;

    @OneToMany(mappedBy = "user")
    Set<UserBook> ratings;
}
