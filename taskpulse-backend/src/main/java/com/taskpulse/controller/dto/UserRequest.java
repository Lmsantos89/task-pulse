package com.taskpulse.controller.dto;

import lombok.Data;

@Data
public class UserRequest {
    private String cognitoSub;
    private String email;
    private String username;
}
