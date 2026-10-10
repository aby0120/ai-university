# 产品与内容架构

AI University 的 AI 位于制作流程，而不位于读者运行时。每卷的固定 JSON 内容经过生成、复核和版本发布，再由静态网站呈现。读者不必拥有 AI key；托管方也不用部署模型服务。

## 数据流

```text
课程范围 → 先修图 → AI 编写 learning objects → 条件/解答复核
                                  ↓
                       schema + math + rendering checks
                                  ↓
                  同版网站 + Markdown + 完整打印 HTML
                                  ↓
                       静态托管 / GitHub Release
```

## Canonical 数据

`book.json` 声明卷、章节、节顺序、来源与生成状态。章节文件与 `learning-object.schema.json` 相符。先修边只指向已定义、已出现的知识点。`supplements.json` 包括章末回顾、综合测试、术语索引与证明补充。

正文中的 `$...$` 是行内数学，`$$...$$` 是独立数学；独立公式字段为原始 LaTeX。构建时 KaTeX 严格解析检查；客户端关闭 KaTeX 的 trust，不执行内容里的 HTML。

## 可视化体系

`interactiveVisual.kind` 选择图的语义，`function` 选择确定的数学模型。模型提供函数、导数、图窗和孔洞信息。SVG 统一坐标轴、图窗裁切、采样、点、线和区域；组件再加入滑块与演示状态。

支持 20 种图示模式：函数、平移、极限、ε–δ、导数、链式、相关变化率、线性化、中值、优化、牛顿、原函数、黎曼和、带符号面积、累积、换元、曲线间面积、圆盘、壳层、弧长。它们覆盖 35 节；部分相关节共用相同模式，参数与解释随节变化。

图窗有限，曲线不被暗示为窗口外终止。孔洞保留空心标记。动画默认暂停，用户控制开始与停止，组件卸载时取消；隐藏标签页时暂停。数值积分和折线长度明确标为近似。

## 网站路由与本地状态

使用分层 hash 路由，例如 `/#/book/calculus-1`、`/#/chapter/limits`、`/#/lesson/limit-intuition?view=visual`（兼容旧知识点地址），因此任意静态服务器无需 SPA 重写规则。`base: './'` 支持 GitHub Pages 子目录。整本阅读文件是普通 HTML，即使 JavaScript 关闭也能读完教材。

练习草稿为本次会话状态；“已理解/需回顾”记录保存在 localStorage，标注自评或数值检查。阅读状态、收藏和最近阅读在独立的本地记录中维护。记录可导出、合并导入和清空，没有远程同步。浏览器不允许存储时仍可正常阅读。

## 扩展下一本

完成本卷后，新增独立的卷目录、完整课程范围与依赖图，再逐章完成。后续需要多卷选择器与共享学习对象标识命名空间。此版不伪装成已有 Calculus II、Linear Algebra 或 Differential Equations 全卷。

## 网站页面与阅读组件（v0.2.0）

- `App.tsx`：全局导航、路由与状态保存。
- `pages/Home.tsx`：网站首页与即时导数演示。
- `pages/BookPages.tsx`：书库、教材目录、章节概览。
- `pages/LessonPage.tsx`：正文、演示、练习、先修连接与上下节。
- `pages/ExplorePage.tsx`：实验室与练习筛选、分页、章末与综合练习。
- `pages/Resources.tsx`：索引、学习记录、全文搜索、指南和下载。
- `pages/AboutPage.tsx`：项目、贡献、版本、隐私与数据管理。
- `components/UI.tsx`：共享导航链接、页标题、目录行、筛选和分页。
- `components/SiteChrome.tsx`：页脚与可键盘操作的搜索对话框。
- `components/BookSidebar.tsx`：桌面教材目录、手机抽屉与焦点循环。
- `lib/navigation.ts`：地址解析、参数和边界安全的分页计算。
- `lib/catalog.ts`：教材路径、标题与全文搜索。
- `lib/state.tsx`：本地记录校验及共享状态契约。

实验室每页六个模型预览，索引每页七项，搜索每页八个结果。过滤与分页进入 URL，刷新和分享保留当前页面。知识点的阅读、演示、练习、连接也有各自地址。全文搜索涵盖正文、定义、例题和练习；结果链接返回完整讲解。


## 数学系列展示

`packages/content/library.json` 是系列方向、教材元数据与出版状态的统一目录，由 `schemas/library.schema.json` 和构建时关联检查校验。首页与书库通过 `lib/library.ts` 读取，`components/Series.tsx` 渲染方向卡、已出版教材和规划卡。`library?area=<id>&status=all|published|planned` 表达书库筛选状态，支持复制链接和浏览器返回。规划卡不创建教材路由。下一本教材的实际加载、路由与记录接入要求见 [LIBRARY](LIBRARY.md)。
