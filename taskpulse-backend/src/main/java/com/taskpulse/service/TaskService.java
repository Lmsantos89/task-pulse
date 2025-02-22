package com.taskpulse.service;

import com.taskpulse.controller.dto.TaskRequest;
import com.taskpulse.entity.Task;
import com.taskpulse.entity.User;
import com.taskpulse.enums.TaskPriority;
import com.taskpulse.enums.TaskStatus;
import com.taskpulse.repository.TaskRepository;
import com.taskpulse.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public List<Task> findTasksByUserId(Long userId) {
        return taskRepository.findByCreatedByUserId(userId);
    }

    // Add a new task
    public Task createTask(TaskRequest taskRequest) {
        Task task = new Task();
        task.setTitle(taskRequest.getTitle());
        task.setDescription(taskRequest.getDescription());
        task.setStatus(TaskStatus.valueOf(taskRequest.getStatus()));
        task.setPriority(TaskPriority.valueOf(taskRequest.getPriority()));

        // Set creator
        User createdBy = userRepository.findById(taskRequest.getCreatedBy())
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + taskRequest.getCreatedBy()));
        task.setCreatedBy(createdBy);

        // Set assignee (optional)
        if (taskRequest.getAssignedTo() != null) {
            User assignedTo = userRepository.findById(taskRequest.getAssignedTo())
                    .orElseThrow(() -> new IllegalArgumentException("User not found: " + taskRequest.getAssignedTo()));
            task.setAssignedTo(assignedTo);
        }

        // Set due date (if provided)
        if (taskRequest.getDueDate() != null) {
            task.setDueDate(LocalDateTime.parse(taskRequest.getDueDate()));
        }

        return taskRepository.save(task);

    }
}
