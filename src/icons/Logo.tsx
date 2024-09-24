import { PropsWithClassName } from "@/types/app/style";
import React from "react";

export const Logo: React.FC<PropsWithClassName> = (props) => (
  <svg fill="none" viewBox="0 0 36 34" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M26.885 24.432c.312-.376.482-.85.48-1.34.002-.24-.038-.48-.117-.707l-.038-.102-.742-2.056c3.4 1.055 5.397 2.614 5.397 3.806 0 1.984-5.53 4.986-13.865 4.986S4.135 26.017 4.135 24.033c0-1.235 2.143-2.864 5.77-3.918l-.725 2.312a2.086 2.086 0 0 0 .4 1.984 2.059 2.059 0 0 0 2.665.411c.42-.264.732-.67.88-1.144l1.394-4.45a33 33 0 0 1 3.481-.18c1.31 0 2.552.074 3.714.206l1.64 4.556c.166.46.488.847.91 1.092a2.06 2.06 0 0 0 2.62-.47m-2.12-8.923C31.48 16.813 36 20.05 36 24.033c0 5.212-7.74 9.143-18 9.143-10.263 0-18-3.93-18-9.143 0-4.009 4.576-7.26 11.357-8.547l4.391-14.004v-.034c.131-.413.387-.775.733-1.035a2.06 2.06 0 0 1 3.18.956l.03.087zm-8.904-.562 2.004-6.389 2.3 6.391a39 39 0 0 0-4.304-.002"
      clipRule="evenodd"
    />
  </svg>
);
