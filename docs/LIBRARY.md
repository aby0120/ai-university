# 数学系列与书库

首页面向完整数学系列。目前已出版 Calculus I（7 章 35 节）、Calculus II（8 章 35 节）、Calculus III（9 章 40 节）和 Linear Algebra（10 章 50 节）。其他方向仍标为规划，不创建空白正文。

`packages/content/library.json` 维护展示目录；`packages/content/index.ts` 的 `collections` 注册真实教材。出版状态必须和已实现的教材集合完全一致，计数由 canonical 内容核对。

## 教材隔离与兼容

- 第一卷保留 `book.json`、`lessons/`、`supplements.json`，旧阅读链接不变。
- 第二卷放在 `calculus-2/`，小节与章节使用 `c2-` 前缀，练习 ID 也唯一。跨卷先修边可以回到第一卷具体知识点。
- 教材主页是 `#/book/<book-id>`；章节和知识点通过唯一 ID 确定所属书。共享工具页以 `?book=calculus-2` 选择教材，并提供显式切换。
- 搜索覆盖四卷，并在结果中标出所属书；上下节翻页限制在当前卷，最后一节进入本卷综合题。
- 学习记录使用唯一知识点和题目 ID 区分。旧本地存储键保留以兼容既有记录；新导出格式 v3 包含教材集合，仍接受第一卷 v2 备份。
- 四卷分别生成 Markdown 和预排版 HTML，保留第一卷 `book.html`；第二卷为 `calculus-2.html`。

第三卷放在 calculus-3/，章节、小节和题目使用 c3- 唯一前缀。跨卷先修可回到前两卷。第三卷打印产物为 calculus-3.html 与 Calculus-III.md。

线性代数放在 linear-algebra/，使用 la- 前缀；打印产物为 linear-algebra.html 与 Linear-Algebra.md。它从初等代数开始，没有微积分先修边，也不显示前一卷入口。

## 出版下一本

先写完该书全部目录、正文、推导、条件、例题、习题答案、教学预设、演示与附录。然后加入内容加载器和 `scripts/content-utils.mjs`，接入独立打印产物，最后再把目录标为 published。校验遍历每卷及跨卷先修顺序，拒绝未列文件、重复题目 ID 和没有真实模型的图示。

运行 `npm run check`，检查桌面与手机的阅读、实验、练习、搜索、下载和记录隔离；按发布流程发布同一提交。规划条目依旧不提供阅读链接或虚构完成数量。
