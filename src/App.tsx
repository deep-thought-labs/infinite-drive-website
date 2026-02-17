import { NetworkCanvas } from "./components/NetworkCanvas";
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
  Outlet,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Project42Page } from "./pages/Project42Page";
import { BlockchainPage } from "./pages/BlockchainPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { Menu, X } from "lucide-react";
import {
  defaultLocale,
  supportedLocales,
  pathWithLocale,
  BASE_PATHS,
  getContent,
  getPreferredLocale,
  getBasePathFromPathname,
  setPreferredLocale,
} from "@/content/i18n";
import { LocaleGuard } from "./components/layout/LocaleGuard";
import { LocaleProvider } from "./contexts/LocaleContext";

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

/**
 * Selector de idioma: EN | ES. Navega a la misma ruta con el nuevo locale y persiste.
 */
function LocaleSelector({
  currentLocale,
  onNavigateLocale,
  onMobileSelect,
  variant = "desktop",
}: {
  currentLocale: string;
  onNavigateLocale: (locale: "en" | "es") => void;
  onMobileSelect?: () => void;
  variant?: "desktop" | "mobile";
}) {
  const isMobile = variant === "mobile";
  const linkStyle = isMobile
    ? {
        display: "block" as const,
        padding: "0.5rem 1rem",
        fontFamily: "monospace",
        fontSize: "0.9rem",
        letterSpacing: "0.05em",
        color: "#8b949e",
        textDecoration: "none" as const,
        border: "none",
        background: "none",
        cursor: "pointer" as const,
        width: "100%",
        textAlign: "left" as const,
      }
    : {
        fontFamily: "monospace" as const,
        fontSize: "0.85rem",
        letterSpacing: "0.05em",
        color: "#8b949e",
        textDecoration: "none" as const,
        padding: "0.25rem 0.5rem",
        border: "none",
        background: "none",
        cursor: "pointer" as const,
      };

  const activeStyle = { color: "#00d9ff" };

  const handleClick = (locale: "en" | "es") => {
    setPreferredLocale(locale);
    onNavigateLocale(locale);
    onMobileSelect?.();
  };

  return (
    <div
      className={isMobile ? "flex flex-col gap-1" : "flex items-center gap-1"}
      style={isMobile ? { padding: "0 1rem" } : undefined}
    >
      {(["en", "es"] as const).map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => handleClick(locale)}
          style={{
            ...linkStyle,
            ...(currentLocale === locale ? activeStyle : {}),
          }}
          onMouseEnter={(e) => {
            if (currentLocale !== locale) e.currentTarget.style.color = "#c9d1d9";
          }}
          onMouseLeave={(e) => {
            if (currentLocale !== locale) e.currentTarget.style.color = "#8b949e";
          }}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/**
 * Shell con nav, footer y Outlet. Lee el locale de useParams (undefined = default).
 */
function AppShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { locale: paramLocale } = useParams<"locale">();
  const currentLocale = paramLocale ?? defaultLocale;
  const pathname = location.pathname;

  const basePath = getBasePathFromPathname(pathname);
  const preferred = getPreferredLocale();
  const shouldRedirectToPreferred =
    !paramLocale && preferred && preferred !== defaultLocale;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Fase 7: lang y hreflang para SEO por idioma
  useEffect(() => {
    document.documentElement.lang = currentLocale;
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const dataAttr = "data-infinite-drive-hreflang";
    document.querySelectorAll(`link[${dataAttr}]`).forEach((el) => el.remove());
    if (origin) {
      supportedLocales.forEach((locale) => {
        const path = pathWithLocale(locale, basePath) || "/";
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hreflang = locale;
        link.href = `${origin}${path}`;
        link.setAttribute(dataAttr, "true");
        document.head.appendChild(link);
      });
      const defaultPath = pathWithLocale(defaultLocale, basePath) || "/";
      const xDefault = document.createElement("link");
      xDefault.rel = "alternate";
      xDefault.hreflang = "x-default";
      xDefault.href = `${origin}${defaultPath}`;
      xDefault.setAttribute(dataAttr, "true");
      document.head.appendChild(xDefault);
    }
    return () => {
      document.querySelectorAll(`link[${dataAttr}]`).forEach((el) => el.remove());
    };
  }, [currentLocale, basePath]);

  if (shouldRedirectToPreferred && preferred) {
    return <Navigate to={pathWithLocale(preferred, basePath)} replace />;
  }

  const handleNavigate = (path: string) => {
    navigate(pathWithLocale(currentLocale, path));
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLocaleChange = (locale: "en" | "es") => {
    navigate(pathWithLocale(locale, basePath));
    setMobileMenuOpen(false);
  };

  const homePath = pathWithLocale(currentLocale, BASE_PATHS.home);
  const privacyPath = pathWithLocale(currentLocale, BASE_PATHS.privacy);
  const routesContent = getContent(currentLocale).routes;
  const navRoutes = routesContent.navRoutes;
  const privacyLabel =
    routesContent.routeDefs.find((r) => r.path === BASE_PATHS.privacy)?.label ?? "Privacy";

  return (
    <LocaleProvider locale={currentLocale}>
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
            to={homePath}
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

          <div className="hidden md:flex gap-6 items-center">
            {navRoutes.map(({ path, label }) => {
              const to = pathWithLocale(currentLocale, path);
              return (
                <NavLink key={to} to={to} isActive={pathname === to}>
                  {label}
                </NavLink>
              );
            })}
            <LocaleSelector
              currentLocale={currentLocale}
              onNavigateLocale={handleLocaleChange}
              variant="desktop"
            />
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
              {navRoutes.map(({ path, label }) => {
                const to = pathWithLocale(currentLocale, path);
                return (
                  <MobileNavLink
                    key={to}
                    to={to}
                    isActive={pathname === to}
                    onNavigate={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </MobileNavLink>
                );
              })}
              <div
                className="pt-2 mt-2"
                style={{ borderTop: "1px solid rgba(0, 217, 255, 0.1)" }}
              >
                <span className="font-mono text-xs px-4" style={{ color: "#8b949e" }}>
                  {currentLocale === "es" ? "Idioma" : "Language"}
                </span>
                <LocaleSelector
                  currentLocale={currentLocale}
                  onNavigateLocale={handleLocaleChange}
                  variant="mobile"
                  onMobileSelect={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="flex-1 relative" style={{ zIndex: 1, marginTop: "80px" }}>
        <Outlet context={{ onNavigate: handleNavigate }} />
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
                to={privacyPath}
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
                {privacyLabel}
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
    </LocaleProvider>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Sin prefijo de locale: idioma por defecto */}
      <Route path="/" element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="project42" element={<Project42Page />} />
        <Route path="blockchain" element={<BlockchainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="privacy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Con prefijo de locale: /en, /es, ... */}
      <Route path="/:locale" element={<LocaleGuard />}>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="project42" element={<Project42Page />} />
          <Route path="blockchain" element={<BlockchainPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>
    </Routes>
  );
}
