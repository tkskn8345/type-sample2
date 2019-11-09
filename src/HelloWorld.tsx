import * as React from 'react';

interface Props {
  text: string;
}

export const Hello2: React.FC < Props > = ({ text }) => {
  return (
    <>
      <h1>こんにちは</h1>
      <div>{text}</div>
    </>
  );
}
