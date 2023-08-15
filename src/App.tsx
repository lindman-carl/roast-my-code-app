import {} from "react";
import CodeInput from "./components/CodeInput";
import Header from "./components/Header";
import RoastButton from "./components/RoastButton";

const App = () => {
  const handleSubmit = () => {};

  return (
    <div
      id="app-contianer"
      className="flex h-screen w-full items-center justify-center bg-teal-600 text-white"
    >
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-y-8 bg-cyan-900 p-16 py-12 shadow-lg">
        <Header />
        <CodeInput active={true} />
        <RoastButton onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default App;
