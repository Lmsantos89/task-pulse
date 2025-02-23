package com.taskpulse.controller.dto;

import lombok.Data;

@Data
public class TaskRequest {
    private String title;
    private String description;
    private String status; 
    private String priority; // e.g., "LOW", "MEDIUM", "HIGH"
    private Long createdBy; // User ID
    private Long assignedTo; // User ID (optional)
    private String dueDate; // ISO format, e.g., "2025-03-01T12:00:00Z"
}
