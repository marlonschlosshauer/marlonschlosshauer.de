import { PostDto } from "@/types/dto/blog";
import React from "react";
import styles from "./Post.module.scss";
import { Linkable } from "@/components/shared/Linkable/Linkable";
import { trail } from "@/lib/format";

export const Post: React.FC<PostDto> = ({ title, description, date, slug }) => (
  <Linkable className={styles.container} href={`/blog/${slug}`}>
    {title && <h3 className={styles.title}>{title}</h3>}
    {description && <p className={styles.text}>{trail(description, 80)}</p>}
    {date && (
      <>
        <br />
        <p className={styles.text}>{date}</p>
      </>
    )}
  </Linkable>
);
