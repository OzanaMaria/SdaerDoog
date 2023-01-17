package com.sdaerdoog.sdaerdoog.controller;

import com.sdaerdoog.sdaerdoog.model.User;
import com.sdaerdoog.sdaerdoog.model.dto.UserForm;
import com.sdaerdoog.sdaerdoog.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Log4j2
@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    UserService userService;

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity insertUser(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.insert(user));
    }

    @CrossOrigin
    @PostMapping("/form")
    public ResponseEntity addUserFavs(@RequestBody UserForm form) {
        log.info("Received form with payload {}", form);
        return ResponseEntity.status(HttpStatus.OK).body(userService.addFavorites(form));
    }

    @CrossOrigin
    @GetMapping("/recommendations")
    private ResponseEntity getRecommendations(@RequestParam("book") String book) {
        String url = "http://localhost:5000/recommendations?book=" + book;
        RestTemplate restTemplate = new RestTemplate();
        List<HttpMessageConverter<?>> messageConverters = new ArrayList<HttpMessageConverter<?>>();
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();

        converter.setSupportedMediaTypes(Collections.singletonList(MediaType.ALL));
        messageConverters.add(converter);
        restTemplate.setMessageConverters(messageConverters);

        Object[] books = restTemplate.getForObject(url, Object[].class);
        if (books != null) {
            return ResponseEntity.status(HttpStatus.OK).body(Arrays.asList(books));
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No recommendations for this book");
    }
}
