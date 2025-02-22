export interface Task {
  title: string;
  description?: string; // Optional, matches TaskRequest
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'; // Literal union type
  priority: 'LOW' | 'MEDIUM' | 'HIGH'; // Literal union type
  createdBy: number; // User ID
  assignedTo?: number; // Optional User ID
  dueDate?: string; // ISO string, e.g., "2025-03-01T12:00:00Z"
}
