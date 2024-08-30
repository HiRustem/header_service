"use client";

import React, { FC, useState } from "react";

interface IHeader {
  title?: string;
}

export const Header: FC<IHeader> = ({ title }) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <header
      style={{ backgroundColor: "#282c34", padding: "20px", color: "white" }}
    >
      <h1>
        {title} {counter}
      </h1>

      <div
        style={{ backgroundColor: "#282c34", padding: "20px", color: "white" }}
      >
        <p>Счетчик для демонстрации, что это клиентский компонент</p>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        <p>минус я не сделал, извините</p>
      </div>
    </header>
  );
};
