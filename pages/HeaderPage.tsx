import React from "react";
import { Header } from "../components/Header/Header";
import { useSearchParams } from "next/navigation";

const HeaderPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams?.get("title");

  return <>{title && <Header title={title} />}</>;
};

export default HeaderPage;
