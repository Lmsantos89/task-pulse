package com.taskpulse.service;

import com.taskpulse.controller.dto.UserRequest;
import com.taskpulse.entity.User;
import com.taskpulse.enums.Role;
import com.taskpulse.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User createOrGetUser(UserRequest request) {
        return userRepository.findByCognitoSub(request.getCognitoSub())
                .orElseGet(() -> {
                    User user = new User();
                    user.setCognitoSub(request.getCognitoSub());
                    user.setEmail(request.getEmail());
                    user.setUsername(request.getUsername());
                    user.setRole(Role.USER);
                    return userRepository.save(user);
                });
    }
}
