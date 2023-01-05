package com.sdaerdoog.sdaerdoog.service;

import com.sdaerdoog.sdaerdoog.model.User;
import com.sdaerdoog.sdaerdoog.model.dto.UserForm;
import com.sdaerdoog.sdaerdoog.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    public User insert(User user) {
        return repository.save(user);
    }

    public User addFavorites(UserForm userForm) {
        User user = repository.findByEmail(userForm.getEmail());
        user.setFavoriteAuthor(userForm.getAuthor());
        user.setFavoriteGenre(userForm.getGenre());
        return repository.save(user);
    }
}
