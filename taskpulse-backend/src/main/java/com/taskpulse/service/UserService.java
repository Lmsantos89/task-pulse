package com.taskpulse.service;

import com.taskpulse.entity.User;
import com.taskpulse.enums.Role;
import com.taskpulse.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;

}
