package com.sdaerdoog.sdaerdoog.controller;

import com.sdaerdoog.sdaerdoog.model.User;
import com.sdaerdoog.sdaerdoog.model.dto.UserForm;
import com.sdaerdoog.sdaerdoog.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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


}
