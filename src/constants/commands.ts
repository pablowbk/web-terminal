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
    const input = `Installing... ${JSON.stringify(args)}`;
    setOutput((prev) => [...prev, input || '']);
  },
  clear(setOutput) {
    setOutput([]);
  },
};

export default commands;
