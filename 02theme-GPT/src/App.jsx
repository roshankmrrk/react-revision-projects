import ThemeBtn from "./component/ThemeBtn";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="text-center space-y-4">
        <ThemeBtn />
        <h1 className="text-2xl font-bold">Is Dark Mode Working </h1>
      </div>
    </div>
  );
}

export default App;