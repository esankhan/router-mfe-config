// @ts-nocheck
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Routes,
  Route,
  BrowserRouter,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";

// @ts-ignore
const Remote1App = React.lazy(() => import("remote1/App"));
// @ts-ignore
const Remote2App = React.lazy(() => import("remote2/App"));
// @ts-ignore
const Remote3App = React.lazy(() => import("remote3/App"));

const SubNavigation: React.FC = () => {
  const location = useLocation();

  // Define sub-navigation for each remote app
  const subNavs = {
    "/remote1": [
      { to: "/remote1", label: "Dashboard" },
      { to: "/remote1/profile", label: "Profile" },
    ],
    "/remote2": [
      { to: "/remote2", label: "Products" },
      { to: "/remote2/orders", label: "Orders" },
    ],
    "/remote3": [
      { to: "/remote3", label: "Settings" },
      { to: "/remote3/analytics", label: "Analytics" },
    ],
  };

  // Find which remote app is active
  const activeRemote = Object.keys(subNavs).find((remote) =>
    location.pathname.startsWith(remote)
  );

  if (!activeRemote) return null;

  return (
    <div
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {subNavs[activeRemote as keyof typeof subNavs].map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              style={{
                textDecoration: "none",
                color: location.pathname === item.to ? "#007bff" : "#666",
                fontWeight: location.pathname === item.to ? "bold" : "normal",
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                backgroundColor:
                  location.pathname === item.to ? "#e3f2fd" : "transparent",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <h1>Host App (React Router v7.9.1)</h1>
          <ul
            style={{
              display: "flex",
              gap: "1rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/remote1">Remote 1</Link>
            </li>
            <li>
              <Link to="/remote2">Remote 2</Link>
            </li>
            <li>
              <Link to="/remote3">Remote 3</Link>
            </li>
          </ul>
        </nav>

        {/* Sub-navigation for active remote apps */}
        <SubNavigation />

        <main style={{ padding: "1rem" }}>
          <React.Suspense fallback="Loading">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/remote1/*" element={<Remote1App />} />
              <Route path="/remote2/*" element={<Remote2App />} />
              <Route path="/remote3/*" element={<Remote3App />} />
            </Routes>
          </React.Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
