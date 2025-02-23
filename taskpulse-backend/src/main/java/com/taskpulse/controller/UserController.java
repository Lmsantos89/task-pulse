package com.taskpulse.controller;


import com.taskpulse.controller.dto.UserRequest;
import com.taskpulse.entity.User;
import com.taskpulse.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<User> createOrGetUser(@RequestBody UserRequest request) {
        User user = userService.createOrGetUser(request);
        return ResponseEntity.ok(user); // Returns user with userId
    }

}