import { Header } from "@/components/Header/Header";
import { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import ReactDOMServer from "react-dom/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const title = req.query.title || "Default Title";

  // Рендерим React-компонент в строку
  const headerHtml = ReactDOMServer.renderToString(
    <Header title={String(title)} />
  );

  // Возвращаем сгенерированный HTML
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(headerHtml);
}
