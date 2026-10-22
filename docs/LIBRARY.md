# 分类与书库

顶层分类由 `packages/content/library.json` 的 `categories` 定义：

- **数学**：微积分 I、II、III，线性代数，常微分方程，概率与统计，离散数学；后续数学规划也归此类。
- **其他**：Python 编程入门、《带着 AI 做项目》，暂不另建编程分类。

首页按分类切换已出版教材，书库支持分类、出版状态及数学方向筛选。分类与方向分别由 `categoryId`、`areaId` 标识，校验拒绝不一致的归属。共有 9 本已出版教材，规划不冒充已出版内容。

数学 canonical 集合由 `packages/content/index.ts` 和 `scripts/content-utils.mjs` 注册；编程教材由 `packages/content/programming.json` 和 `scripts/programming-utils.mjs` 注册。两个 schema 各自验证本学科语义，统一向书库提供真实计数、搜索索引与出版产物。

编程两卷使用 `#/book/python-introduction[/<lesson-id>]`、`#/book/ai-development[/<lesson-id>]`；旧投稿路由解析为新入口。局部 ID 允许同名，搜索结果以书 ID 为命名空间，避免 debugging、testing 等跨书冲突。

编程正文、例题、练习、术语及项目代码同步生成 Markdown 和打印 HTML；共享下载页按顶层分类列出全部教材。搜索同时覆盖七卷并标出所属书。程序回放、Git 台和任务卡是离线教学组件，不提供实时聊天。

## 原有数学教材的兼容



- 第一卷保留 `book.json`、`lessons/`、`supplements.json`，旧阅读链接不变。
- 第二卷放在 `calculus-2/`，小节与章节使用 `c2-` 前缀，练习 ID 也唯一。跨卷先修边可以回到第一卷具体知识点。
- 教材主页是 `#/book/<book-id>`；章节和知识点通过唯一 ID 确定所属书。共享工具页以 `?book=calculus-2` 选择教材，并提供显式切换。
- 搜索覆盖五卷，并在结果中标出所属书；上下节翻页限制在当前卷，最后一节进入本卷综合题。
- 学习记录使用唯一知识点和题目 ID 区分。旧本地存储键保留以兼容既有记录；新导出格式 v3 包含教材集合，仍接受第一卷 v2 备份。
- 五卷分别生成 Markdown 和预排版 HTML，保留第一卷 `book.html`；第二卷为 `calculus-2.html`。

第三卷放在 calculus-3/，章节、小节和题目使用 c3- 唯一前缀。跨卷先修可回到前两卷。第三卷打印产物为 calculus-3.html 与 Calculus-III.md。

线性代数放在 linear-algebra/，使用 la- 前缀；打印产物为 linear-algebra.html 与 Linear-Algebra.md。它从初等代数开始，没有微积分先修边，也不显示前一卷入口。

## 出版下一本

先写完该书全部目录、正文、推导、条件、例题、习题答案、教学预设、演示与附录。然后加入内容加载器和 `scripts/content-utils.mjs`，接入独立打印产物，最后再把目录标为 published。校验遍历每卷及跨卷先修顺序，拒绝未列文件、重复题目 ID 和没有真实模型的图示。

运行 `npm run check`，检查桌面与手机的阅读、实验、练习、搜索、下载和记录隔离；按发布流程发布同一提交。规划条目依旧不提供阅读链接或虚构完成数量。

常微分方程以 `ordinary-differential-equations` 为卷 ID，`ode-` 为知识点前缀；归入微分方程方向。偏微分方程仍是独立后续课程，不使用空章节占位。

概率与统计放在 `probability-statistics/`，使用 `ps-` 前缀；打印文件为 `Probability-Statistics.md` 和 `probability-statistics.html`。`packages/visuals/statistics.mjs` 为数值核，`probability.mjs` 与两份 registry 保存五十节模型、控件与绘图数据。

离散数学使用 `discrete-math/` 与 `dm-` 前缀，完整书稿为 `Discrete-Mathematics.md`，打印版为 `discrete-math.html`。交互 registry 为 `packages/visuals/discrete-models.json`，算法与绘图数据为 `discrete.mjs`。实分析为目前书单中唯一未出版的卷。
