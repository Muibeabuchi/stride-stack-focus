
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTasks } from "@/hooks/useTasks";

const TaskManager = () => {
  const { tasks, addTask, toggleTask, totalCount, completedCount } = useTasks();
  
  // TODO: Implement state for form inputs
  // Students should add:
  // - useState for newTaskText
  // - useState for newTaskPriority
  const newTaskText = "";
  const newTaskPriority = 'Medium';

  const handleAddTask = () => {
    // TODO: Implement add task logic
    // Students should:
    // - Validate input
    // - Call addTask function
    // - Reset form
    console.log('Handle add task');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // TODO: Implement enter key handling
    console.log('Key pressed:', e.key);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: Implement input change handler
    console.log('Input changed:', e.target.value);
  };

  const handlePriorityChange = (value: 'High' | 'Medium' | 'Low') => {
    // TODO: Implement priority change handler
    console.log('Priority changed:', value);
  };

  const handleToggleTask = (id: string) => {
    // TODO: Implement task toggle handler
    console.log('Toggle task:', id);
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'secondary';
      case 'Medium':
        return 'outline';
      case 'Low':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Task Manager</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input 
              placeholder="Add a new task..." 
              className="flex-1"
              value={newTaskText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <Select value={newTaskPriority} onValueChange={handlePriorityChange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High">High</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>
        </div>
        
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  className="rounded" 
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span className={`text-gray-700 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                  {task.text}
                </span>
              </div>
              <Badge variant={getPriorityVariant(task.priority)}>{task.priority}</Badge>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{totalCount} total tasks</span>
            <span>{completedCount} completed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskManager;
