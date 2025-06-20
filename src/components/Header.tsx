
const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Stride</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Stay organized, stay productive</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
