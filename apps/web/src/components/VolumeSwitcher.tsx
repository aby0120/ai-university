import { collections } from "../../../../packages/content";
import { useCurriculum } from "../lib/curriculum";
import { routeHref } from "../lib/navigation";
export function VolumeSwitcher({ path }: { path: string }) {
  const { book } = useCurriculum();
  return (
    <div className="volume-switcher">
      <span>当前教材</span>
      <label>
        <span className="sr-only">切换教材</span>
        <select
          aria-label="切换教材"
          value={book.id}
          onChange={(e) => {
            location.hash = routeHref(path, { book: e.target.value });
          }}
        >
          {collections.map((c) => (
            <option key={c.book.id} value={c.book.id}>
              {c.book.titleZh} · {c.book.title}
            </option>
          ))}
        </select>
      </label>
      <span>完整教材 · 固定版本</span>
    </div>
  );
}
