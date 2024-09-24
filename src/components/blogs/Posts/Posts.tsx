import { Slider } from "@/components/shared/Slider/Slider";
import { getPosts } from "@/content/blog";
import React from "react";
import { Post } from "../Post/Post";

export const Posts: React.FC = () => {
  const posts = getPosts();

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <Slider label="Written about">
      {posts.map((post, key) => (
        <Post key={key} {...post} />
      ))}
    </Slider>
  );
};
