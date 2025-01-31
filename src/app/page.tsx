import React from "react";
import texts from "@/../public/locales/ja.json";

const HomePage = () => {
  return (
    <div>
      <h1>{texts.home.title}</h1>
      <p>{texts.home.description}</p>
      <a href="/ssr">{texts.home.ssr}</a>
      <a href="/ssg">{texts.home.ssg}</a>
    </div>
  );
};

export default HomePage;
