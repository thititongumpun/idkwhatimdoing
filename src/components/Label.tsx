
import React, { useState } from 'react';
interface Props {
  title: string;
  content: string;
}

export const Label: React.FC<Props> = ({ title, content }) => {

  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <p>{title}</p>
      <button onClick={() => setExpanded(!expanded)}>{content}</button>
    </div>
  );
}
