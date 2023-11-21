import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log(e);
    // const allowedKeys = /^[a-zA-Z0-9.,\s]+$/; // pattern to allow letters, numbers, dot, comma, and space
    // if (!allowedKeys.test(e.key)) return; // if the pressed key doesn't match the pattern, return

    if (e.key === 'Backspace') {
      setInput((prev) => prev.split('').slice(0, -1).join(''));
      return;
    }

    if (e.key === 'Enter') {
      setOutput((prev) => [...prev, input || '']);
      setInput('');
      return;
    }

    setInput((prev) => prev + e.key);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [input]);

  return (
    <main className="p-8 flex flex-col gap-2 items-start text-white h-screen overflow-hidden">
      <h2>Welcome, friend</h2>

      {/* Output */}
      <div className="output-container">
        {output?.map((line, i) => (
          <p key={i} className="output-line">
            {line}
          </p>
        ))}
      </div>

      {/* Input */}
      <div className="relative input-container">
        <span className="terminal-input">{input}</span>
        <span className="input-caret"></span>
      </div>
    </main>
  );
}

export default App;
