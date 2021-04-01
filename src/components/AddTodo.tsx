import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form>
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={e => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        AddTodo
      </button>
    </form>
  );
}