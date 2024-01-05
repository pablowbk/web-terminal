import { Dispatch, SetStateAction } from 'react';

const commands: {
  [key: string]: (
    setOutput: Dispatch<SetStateAction<string[]>>,
    args?: string,
  ) => void;
} = {
  hello(setOutput) {
    setOutput((prev) => [...prev, 'Hi']);
  },
  install(setOutput, args) {
    let output = '';
    if (args) {
      output = `Installing... ${JSON.stringify(args)}`;
    } else {
      output = '"install" requires at least one argument.';
    }
    setOutput((prev) => [...prev, output || '']);
  },
  clear(setOutput) {
    setOutput([]);
  },
  help(setOutput) {
    const output = `These are all the available commands:\n
      hello: prints a reply greeting to the console.\n
      install: <args> installs the specified program.\n
      clear: Resets terminal.\n 
    `;
    setOutput((prev) => [...prev, output || '']);
  },
};

export default commands;
