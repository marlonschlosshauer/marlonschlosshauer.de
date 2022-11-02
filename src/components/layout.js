import PropTypes from "prop-types";
import * as React from "react";
import { Header } from "./header/header";
import "./layout.css";

const Layout = ({ current, children }) => (
  <>
    <Header current={current} />
    <div className="content-wrapper">
      <main style={{ paddingTop: '128px' }}>{children}</main>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
