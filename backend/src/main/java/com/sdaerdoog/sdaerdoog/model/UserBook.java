package com.sdaerdoog.sdaerdoog.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Setter
@NoArgsConstructor
@Getter
@ToString
@Entity
@Table(name = "user-book")
public class UserBook {
    @EmbeddedId
    UserBookKey id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @MapsId("bookId")
    @JoinColumn(name = "book_id")
    Book book;

    int rating;
}
