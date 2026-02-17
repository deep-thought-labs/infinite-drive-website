/**
 * Table with token-based background, borders, and text colors.
 * Use either columns+rows for data tables or children for full control.
 */
const cellStyle = "py-3 px-4";
const thStyle = "text-left font-mono text-sm";
const headerBorder = "2px solid var(--id-border)";
const rowBorder = "1px solid var(--id-border-subtle)";

export function SiteTable({
  columns,
  rows,
  children,
  className = "",
  tableClassName = "",
}: {
  columns?: { key: string; label: string }[];
  rows?: Record<string, React.ReactNode>[];
  children?: React.ReactNode;
  className?: string;
  tableClassName?: string;
}) {
  const tableStyle: React.CSSProperties = {
    backgroundColor: "var(--id-bg-card)",
    minWidth: columns != null ? "400px" : undefined,
  };

  if (children != null) {
    return (
      <div className={`overflow-x-auto ${className}`.trim()}>
        <table className={`w-full border-collapse ${tableClassName}`.trim()} style={tableStyle}>
          {children}
        </table>
      </div>
    );
  }

  if (columns == null || rows == null) return null;

  return (
    <div className={`overflow-x-auto ${className}`.trim()}>
      <table className={`w-full border-collapse ${tableClassName}`.trim()} style={tableStyle}>
        <thead>
          <tr style={{ borderBottom: headerBorder }}>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`${cellStyle} ${thStyle}`}
                style={{ color: "var(--id-text-muted)" }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                borderBottom: i < rows.length - 1 ? rowBorder : undefined,
              }}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={cellStyle}
                  style={{ color: "var(--id-text-secondary)" }}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
