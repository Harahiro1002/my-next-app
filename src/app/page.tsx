import React from "react";
import Link from "next/link";
import texts from "@/../public/locales/ja.json";

const HomePage = () => {
  return (
    <div>
      <h1>{texts.home.title}</h1>
      <p>{texts.home.description}</p>
      <Link href="/ssr">
        <a>{texts.home.ssr}</a>
      </Link>
      <Link href="/ssg">
        <a>{texts.home.ssg}</a>
      </Link>
    </div>
  );
};

export default HomePage;
