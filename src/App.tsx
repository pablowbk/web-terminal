import { useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      setOutput((prev) => [...prev, input]);
      setInput('');
    }
  };

  return (
    <main className="p-8 flex flex-col gap-2 items-start bg-black text-white h-screen overflow-hidden">
      <div>{output?.map((line, i) => <p key={i}>{line}</p>)}</div>

      <div className="pl-4 relative input-container">
        <textarea
          className="terminal-input"
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          value={input}
        />
        <span>{'>'}</span>
      </div>
    </main>
  );
}

export default App;
