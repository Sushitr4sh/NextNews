import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/111">First News Item</Link>
        </li>
        <li>
          <Link href="/news/222">Second News Item</Link>
        </li>
        <li>
          <Link href="/news/333">Third News Item</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
