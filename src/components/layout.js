import React from "react";
import { Header } from "./header/header";
import "./layout.css";

const Layout = ({ current, children }) => (
  <>
    <Header current={current} />
    <div className="content-wrapper">
      <div className="main">{children}</div>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
      </footer>
    </div>
  </>
)

export default Layout
