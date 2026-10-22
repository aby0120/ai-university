import {categories,publishedVolumes} from "../lib/library";
import {useApp} from "../lib/state";
import { collections } from "../../../../packages/content";
import { useCurriculum } from "../lib/curriculum";
import { routeHref } from "../lib/navigation";
export function VolumeSwitcher({ path }: { path: string }) {
  const { book } = useCurriculum();
  const {route}=useApp();
  const selected=path==="downloads"&&publishedVolumes.some(v=>v.id===route.params.get("book"))?route.params.get("book")!:book.id;
  return (
    <div className="volume-switcher">
      <span>当前教材</span>
      <label>
        <span className="sr-only">切换教材</span>
        <select
          aria-label="切换教材"
          value={selected}
          onChange={(e) => {
            location.hash = routeHref(path, { book: e.target.value });
          }}
        >
          {path==="downloads"?categories.map(category=><optgroup key={category.id} label={category.title}>{publishedVolumes.filter(v=>v.categoryId===category.id).map(v=><option key={v.id} value={v.id}>{v.title}</option>)}</optgroup>):collections.map((c) => (
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
