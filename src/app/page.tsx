import { Projects } from "@/components/projects/Projects/Projects";
import styles from "./page.module.scss";
import { LabelLink } from "@/components/shared/LabeledLink/LabeledLink";
import { Posts } from "@/components/blogs/Posts/Posts";
import { Tools } from "@/components/tools/Tools/Tools";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <LabelLink
            className={styles.link}
            label="Design engineer"
            href="https://en.wikipedia.org/wiki/Design_engineer"
            inNewTab
          />
          <p className={styles.text}>+</p>
          <LabelLink
            className={styles.link}
            label="Pareto Principle"
            href="https://en.wikipedia.org/wiki/Pareto_principle"
            inNewTab
          />
          <p className={styles.text}>=</p>
          <LabelLink
            className={styles.text}
            label="Marlon Schlosshauer"
            href="https://github.com/marlonschlosshauer"
            inNewTab
          />
        </div>
      </div>
      <div className={styles.sliders}>
        <Projects />
        <Posts />
        <Tools />
      </div>
    </div>
  );
}
