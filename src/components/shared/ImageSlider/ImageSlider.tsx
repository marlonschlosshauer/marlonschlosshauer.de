import React from "react";
import { Slider } from "../Slider/Slider";
import Image from "next/image";
import styles from "./ImageSlider.module.scss";

export interface ImageSliderProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Slider>
      {images.map(({ url, alt }, key) => (
        <div key={key} className={styles.wrapper}>
          <Image
            key={key}
            src={url}
            alt={alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </Slider>
  );
};
