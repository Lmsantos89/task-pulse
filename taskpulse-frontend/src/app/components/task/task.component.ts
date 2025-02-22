import { Component } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task: Task = {
    title: '',
    description: '',
    status: 'TODO', // Default value
    priority: 'MEDIUM', // Default value
    createdBy: 0, // Placeholder, replace with actual user ID in practice
    assignedTo: undefined,
    dueDate: undefined,
  };

  constructor(private taskService: TaskService) {}

  onSubmit() {
    this.taskService.createTask(this.task).subscribe(
      (response) => console.log('Task created:', response),
      (error) => console.error('Error:', error)
    );
  }

  private resetForm() {
    this.task = {
      title: '',
      description: '',
      status: 'TODO',
      priority: 'MEDIUM',
      createdBy: 0,
      assignedTo: undefined,
      dueDate: undefined,
    };
  }
}
