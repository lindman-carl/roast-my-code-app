import { useState } from "react";
import CodeInput from "./components/CodeInput";
import Header from "./components/Header";
import RoastButton from "./components/RoastButton";

const App = () => {
  const [textInput, setTextInput] = useState<string>(
    "function (x) {\n  return x*x/x\n}\n",
  );

  const handleSubmit = async () => {
    console.log("submit");
    const res = await fetch("http://localhost:8888/roast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: textInput.trim() }),
    });

    console.log(res);
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);

    // disable newlines after 10 lines
    if (e.target.value.split("\n").length > 10) {
      return;
    }

    setTextInput(e.target.value);
  };

  return (
    <div
      id="app-contianer"
      className="flex h-screen w-full items-center justify-center bg-teal-600 text-white"
    >
      <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-y-8 bg-cyan-900 p-16 py-12 shadow-lg">
        <Header />
        <CodeInput
          active={true}
          value={textInput}
          handleChange={handleTextInputChange}
        />
        <RoastButton onClick={() => handleSubmit()} />
      </div>
    </div>
  );
};

export default App;
