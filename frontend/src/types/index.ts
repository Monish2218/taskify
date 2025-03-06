export interface User {
    id: string;
    email: string;
    name: string;
    role: 'ADMIN' | 'USER';
    organizationId?: string;
  }
  
  export interface Task {
    id: string;
    title?: string;
    description?: string;
    completed?: boolean;
    projectId?: string;
    userId?: string;
    assignedTo?: string;
    dueDate?: string;
    status?: "todo" | "in-progress" | "completed";
    priority?: "low" | "medium" | "high";
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    userId: string;
    startDate: Date;
    endDate?: Date;
    status: 'ACTIVE' | 'COMPLETED' | 'CANCELLED';
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
  }