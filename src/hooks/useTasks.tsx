
import { useState } from 'react';

export interface Task {
  id: string;
  text: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

export const useTasks = () => {
  // TODO: Implement state management for tasks
  // Students should implement:
  // - useState for tasks array
  // - addTask function
  // - toggleTask function
  // - computed values for totalCount and completedCount
  
  const tasks: Task[] = [
    {
      id: '1',
      text: 'Complete project documentation',
      priority: 'High',
      completed: false,
    },
    {
      id: '2',
      text: 'Review code changes',
      priority: 'Medium',
      completed: false,
    },
    {
      id: '3',
      text: 'Setup development environment',
      priority: 'Low',
      completed: true,
    },
  ];

  const addTask = (text: string, priority: 'High' | 'Medium' | 'Low') => {
    // TODO: Implement add task functionality
    console.log('Add task:', text, priority);
  };

  const toggleTask = (id: string) => {
    // TODO: Implement toggle task functionality
    console.log('Toggle task:', id);
  };

  return {
    tasks,
    addTask,
    toggleTask,
    totalCount: 0, // TODO: Calculate from tasks array
    completedCount: 0, // TODO: Calculate completed tasks
  };
};
