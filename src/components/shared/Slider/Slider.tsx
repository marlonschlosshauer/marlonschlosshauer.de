import React, { Children, PropsWithChildren } from "react";
import styles from "./Slider.module.scss";

export interface SliderProps {
  label?: string;
}

export const Slider: React.FC<PropsWithChildren<SliderProps>> = ({
  label,
  children,
}) => {
  const items = Children.toArray(children);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={styles.container}>
      {label && <h2 className={styles.label}>{label}:</h2>}
      {items && (
        <div className={styles.slider}>
          {items.map((item, key) => (
            <div key={key} className={styles.slide}>
              {item}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
