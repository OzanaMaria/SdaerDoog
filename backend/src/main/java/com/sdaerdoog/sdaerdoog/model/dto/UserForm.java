package com.sdaerdoog.sdaerdoog.model.dto;

import lombok.Data;

import java.util.List;

@Data
public class UserForm {
    String email;
    String author;
    String genre;
    List<String> recommendBooks;
    List<String> readBooks;
}
