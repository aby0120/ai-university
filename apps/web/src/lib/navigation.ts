export type Route = { path: string; params: URLSearchParams };
export function parseRoute(hash: string): Route {
  let raw = hash.replace(/^#\/?/, "");
  try {
    raw = decodeURI(raw);
  } catch {
    return { path: "not-found", params: new URLSearchParams() };
  }
  const [name, query = ""] = raw.split("?");
  let path = name || "home";
  if (path === "exam") path = "practice/exam";
  if (path.startsWith("review-")) path = "practice/review/" + path.slice(7);
  return { path, params: new URLSearchParams(query) };
}
export function routeHref(
  path: string,
  values: Record<string, string | number | undefined> = {},
) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(values))
    if (value !== undefined && value !== "") query.set(key, String(value));
  return "#/" + path + (query.size ? "?" + query : "");
}
export function pageWindow(total: number, raw: string | null, size: number) {
  const pages = Math.max(1, Math.ceil(total / size));
  const page = Math.max(1, Math.min(pages, Math.floor(Number(raw)) || 1));
  return {
    page,
    pages,
    start: (page - 1) * size,
    end: Math.min(total, page * size),
  };
}
