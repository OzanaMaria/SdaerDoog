package com.sdaerdoog.sdaerdoog.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Setter
@NoArgsConstructor
@Getter
@ToString
@Embeddable
public class UserBookKey implements Serializable {
    @Column(name = "user_id")
    int userId;

    @Column(name = "book_id")
    int bookId;
}
