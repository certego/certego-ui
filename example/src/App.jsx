import React from "react";
import { HashRouter } from "react-router-dom";

import { AppHeader, AppMain } from "./layouts";

export default function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <header className="px-5 mb-4">
          <AppHeader />
        </header>
        <main role="main" className="px-5 mx-auto">
          <AppMain />
        </main>
      </HashRouter>
    </React.StrictMode>
  );
}
