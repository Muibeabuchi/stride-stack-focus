
import { useState } from 'react';

export interface Task {
  id: string;
  text: string;
  priority: 'High' | 'Medium' | 'Low';
  completed: boolean;
}

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
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
  ]);

  const addTask = (text: string, priority: 'High' | 'Medium' | 'Low') => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      priority,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return {
    tasks,
    addTask,
    toggleTask,
    totalCount: tasks.length,
    completedCount,
  };
};
