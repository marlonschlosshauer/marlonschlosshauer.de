import React from "react";
import styles from "./Project.module.scss";
import { ProjectDto } from "@/types/dto/project";
import { Linkable } from "@/components/shared/Linkable/Linkable";

export const Project: React.FC<ProjectDto> = ({
  title,
  motto,
  position,
  periodStart,
  periodEnd,
  link,
  slug,
}) => (
  <Linkable
    className={styles.container}
    href={link || (slug && `/projects/${slug}`)}
    inNewTab={!!link}
  >
    <p className={styles.title}>{title}</p>
    {motto && <p className={styles.text}>{motto}</p>}
    {position && <p className={styles.text}>Position: {position}</p>}
    {periodStart && (
      <p className={styles.text}>
        {periodStart} - {periodEnd ? periodEnd : "Current"}
      </p>
    )}
  </Linkable>
);
