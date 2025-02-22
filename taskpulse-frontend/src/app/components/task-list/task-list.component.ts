import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: Task[] = [];
  userId: number = 0; // Default, replace with dynamic ID later

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get userId from route params (e.g., /tasks/user/1)
    this.route.paramMap.subscribe((params) => {
      const id = params.get('userId');
      this.userId = id ? +id : 0; // Convert string to number, default to 0
      this.loadTasks();
    });
  }

  loadTasks() {
    this.taskService.getTasksByUser(this.userId).subscribe(
      (tasks: Task[]) => (this.tasks = tasks),
      (error) => console.error('Error fetching tasks:', error)
    );
  }
}
