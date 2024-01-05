import { useEffect, useState } from 'react';
import './App.css';
import invalidKeys from './constants/invalidKeys';
import commands from './constants/commands';

function App() {
  const [output, setOutput] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const validateInput = () => {
    const [command, args] = input.split(' ');
    if (commands[command as keyof typeof commands]) {
      console.log({ command, args });
      commands[command](setOutput, args);
    } else {
      const commandNotFound = `Unknown command "${command}"`;
      setOutput((prev) => [...prev, commandNotFound]);
    }
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (invalidKeys.has(e.key)) return; // if the pressed key doesn't match the pattern, return

    if (e.key === 'Backspace') {
      setInput((prev) => prev.split('').slice(0, -1).join(''));
      return;
    }

    if (e.key === 'Enter') {
      validateInput();
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
