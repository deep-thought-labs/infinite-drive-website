import { NetworkCanvas } from "./components/NetworkCanvas";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Project42Page } from "./pages/Project42Page";
import { BlockchainPage } from "./pages/BlockchainPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { Menu, X } from "lucide-react";
import { ROUTES, navRoutes } from "@/content/routes";

function NavLink({
  to,
  children,
  isActive,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link
      to={to}
      className="text-sm font-mono transition-all duration-200"
      style={{
        color: isActive ? "#00d9ff" : "#8b949e",
        borderBottomWidth: "2px",
        borderBottomStyle: "solid",
        borderBottomColor: isActive ? "#00d9ff" : "transparent",
        paddingBottom: "0.25rem",
        letterSpacing: "0.05em",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.color = "#c9d1d9";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.color = "#8b949e";
      }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  to,
  children,
  isActive,
  onNavigate,
}: {
  to: string;
  children: React.ReactNode;
  isActive: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="text-left font-mono transition-all duration-200 px-4 py-2 rounded block"
      style={{
        color: isActive ? "#00d9ff" : "#8b949e",
        background: isActive ? "rgba(0, 217, 255, 0.1)" : "transparent",
        border: "none",
        cursor: "pointer",
        letterSpacing: "0.05em",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0d1117", color: "#e6edf3" }}
    >
      <NetworkCanvas />

      <nav
        className="fixed top-0 left-0 right-0 transition-all duration-300"
        style={{
          zIndex: 100,
          backgroundColor: "rgba(13, 17, 23, 0.95)",
          borderBottom: "1px solid rgba(0, 217, 255, 0.2)",
          backdropFilter: "blur(10px)",
          padding: "1rem 2rem",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to={ROUTES.home}
            className="font-mono hover:opacity-80 transition-opacity"
            style={{
              color: "#e6edf3",
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            INFINITE DRIVE
          </Link>

          <div className="hidden md:flex gap-6">
            {navRoutes.map(({ path, label }) => (
              <NavLink key={path} to={path} isActive={pathname === path}>
                {label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#00d9ff",
              padding: "0.5rem",
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden mt-4 pb-4"
            style={{
              borderTop: "1px solid rgba(0, 217, 255, 0.1)",
              paddingTop: "1rem",
            }}
          >
            <div className="flex flex-col gap-4">
              {navRoutes.map(({ path, label }) => (
                <MobileNavLink
                  key={path}
                  to={path}
                  isActive={pathname === path}
                  onNavigate={() => setMobileMenuOpen(false)}
                >
                  {label}
                </MobileNavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="flex-1 relative" style={{ zIndex: 1, marginTop: "80px" }}>
        <Routes>
          <Route
            path={ROUTES.home}
            element={<HomePage onNavigate={handleNavigate} />}
          />
          <Route path={ROUTES.project42} element={<Project42Page />} />
          <Route path={ROUTES.blockchain} element={<BlockchainPage />} />
          <Route
            path={ROUTES.services}
            element={<ServicesPage onNavigate={handleNavigate} />}
          />
          <Route path={ROUTES.privacy} element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Routes>
      </div>

      <footer
        className="px-4 md:px-8 py-6 relative"
        style={{
          zIndex: 1,
          borderTop: "1px solid rgba(0, 217, 255, 0.2)",
          backgroundColor: "rgba(13, 17, 23, 0.95)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left" style={{ opacity: 0.7 }}>
              <a
                href="https://deep-thought.computer"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "transparent",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderBottomColor = "#00d9ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderBottomColor = "transparent")
                }
              >
                Deep Thought Labs
              </a>
              {" • "}
              <Link
                to={ROUTES.privacy}
                className="transition-colors font-mono"
                style={{
                  color: "inherit",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "transparent",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00d9ff";
                  e.currentTarget.style.borderBottomColor = "#00d9ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "inherit";
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                Privacy
              </Link>
              {" • 2025"}
            </p>

            <div className="flex flex-wrap items-center justify-center text-sm">
              <a
                href="https://t.me/+nt8ysid_-8VlMDVh"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors font-mono"
                style={{
                  color: "#00d9ff",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "transparent",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderBottomColor = "#00d9ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderBottomColor = "transparent")
                }
              >
                Join Telegram →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
