
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TaskManager = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Task Manager</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input 
            placeholder="Add a new task..." 
            className="flex-1"
          />
          <Button>Add Task</Button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-700">Complete project documentation</span>
            </div>
            <Badge variant="secondary">High</Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-700">Review code changes</span>
            </div>
            <Badge variant="outline">Medium</Badge>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-gray-500 line-through">Setup development environment</span>
            </div>
            <Badge variant="outline">Low</Badge>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>3 total tasks</span>
            <span>1 completed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskManager;
