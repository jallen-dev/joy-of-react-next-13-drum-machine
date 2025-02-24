import React from "react";

import Header from "../components/Header";

import "./styles.css";
import { Sound } from "./Sound";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Sound>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </Sound>
      </body>
    </html>
  );
}

export default RootLayout;
