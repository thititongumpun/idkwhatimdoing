import React from 'react';
interface Props {
  title: string;
  content: string;
}

export const Label: React.FC<Props> = ({ title, content }) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
