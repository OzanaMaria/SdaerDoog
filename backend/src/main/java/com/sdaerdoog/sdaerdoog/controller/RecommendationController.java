package com.sdaerdoog.sdaerdoog.controller;

import com.sdaerdoog.sdaerdoog.model.User;
import com.sdaerdoog.sdaerdoog.service.RecommendationService;
import com.sdaerdoog.sdaerdoog.service.UserService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequestMapping("/recommend")
public class RecommendationController {
    @Autowired
    RecommendationService service;

    @CrossOrigin
    @GetMapping("/{book}")
    public ResponseEntity getRecommendations(@PathVariable String book) {
        return ResponseEntity.status(HttpStatus.OK).body(service.getRecommendations(book));
    }
}
