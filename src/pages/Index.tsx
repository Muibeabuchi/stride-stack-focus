
import Header from "@/components/Header";
import TaskManager from "@/components/TaskManager";
import Notes from "@/components/Notes";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <TaskManager />
          </div>
          <div className="space-y-6">
            <Notes />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
