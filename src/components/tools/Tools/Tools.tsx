import { Slider } from "@/components/shared/Slider/Slider";
import { getTools } from "@/content/tools";
import React from "react";
import styles from "./Tools.module.scss";

export const Tools: React.FC = () => {
  const tools = getTools();

  if (!tools || tools.length === 0) {
    return null;
  }

  return (
    <Slider label="Work with">
      {tools.map((tool, key) => (
        <p key={key} className={styles.tool}>
          {tool}
        </p>
      ))}
    </Slider>
  );
};
