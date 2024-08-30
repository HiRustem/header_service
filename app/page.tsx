import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js App</h1>
      <iframe
        src="/HeaderPage?title=Example of counter"
        style={{ width: "100%", border: "none", height: "500px" }}
      ></iframe>
    </div>
  );
};

export default HomePage;
