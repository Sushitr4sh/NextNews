import React from "react";

type NewsDetailProps = {
  params: { id: number | string };
};

const NewsDetail = ({ params }: NewsDetailProps) => {
  return <h1>News Detail Page #{params.id}</h1>;
};

export default NewsDetail;
