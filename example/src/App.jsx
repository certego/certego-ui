import React from "react";
import { HashRouter } from "react-router-dom";

import { AppHeader, AppMain, AppFooter } from "./layouts";

export default function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <header className="fixed-top">
          <AppHeader />
        </header>
        <main role="main" className="px-5 mx-auto">
          <AppMain />
        </main>
        <footer>
          <AppFooter />
        </footer>
      </HashRouter>
    </React.StrictMode>
  );
}
