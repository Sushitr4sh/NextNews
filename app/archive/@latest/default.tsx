import React from "react";
import { getLatestNews } from "../../../lib/news";
import NewsList from "../../../components/news-list";

const LatestNewsPage = () => {
  const latesNest = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latesNest} />
    </>
  );
};

export default LatestNewsPage;
