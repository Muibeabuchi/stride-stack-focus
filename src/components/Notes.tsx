
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Notes = () => {
  // TODO: Students should implement state management for notes
  // They should add:
  // - useState for current note text
  // - useState for saved notes array
  // - Functions to save, edit, and delete notes

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // TODO: Implement textarea change handler
    console.log('Note text changed:', e.target.value);
  };

  const handleSaveNote = () => {
    // TODO: Implement save note functionality
    console.log('Save note clicked');
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-900">Notes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Textarea 
            placeholder="Write your notes here..." 
            className="min-h-[120px] resize-none"
            onChange={handleTextareaChange}
            value="" // TODO: Connect to state
          />
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">Auto-saved</span>
            <Button variant="outline" size="sm" onClick={handleSaveNote}>Save Note</Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">Recent Notes</h3>
          
          {/* TODO: Students should make this dynamic based on saved notes state */}
          <div className="space-y-2">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-blue-900">Meeting Notes - Q4 Planning</h4>
                <span className="text-xs text-blue-600">2 hours ago</span>
              </div>
              <p className="text-sm text-blue-800">
                Discussed upcoming features and resource allocation for next quarter...
              </p>
            </div>
            
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-green-900">Ideas for App Improvement</h4>
                <span className="text-xs text-green-600">1 day ago</span>
              </div>
              <p className="text-sm text-green-800">
                User feedback suggests adding dark mode and better mobile navigation...
              </p>
            </div>
            
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-yellow-900">Research Notes</h4>
                <span className="text-xs text-yellow-600">3 days ago</span>
              </div>
              <p className="text-sm text-yellow-800">
                Investigating new frameworks and tools for performance optimization...
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Notes;
