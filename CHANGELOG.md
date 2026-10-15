# Changelog

## 0.9.0 · 2026-10-14

- 完整发布 Calculus II v0.1.0：8 章 35 节、70 个例题、178 道练习与解答、术语和证明补充。
- 新增积分技巧与误差、反常积分、级数、Taylor、参数/极坐标与一阶方程的交互模型及 105 个引导预设。
- 接入按教材区分的目录、翻页、练习、索引、下载和本地记录；全文搜索跨两卷标注来源。
- 保留 Calculus I canonical 内容 v0.3.1、旧链接与既有学习记录；同时生成两卷完整书稿与打印页。
- 维持纯静态、无模型 API、无账号；新增数学模型与整卷结构回归检查。


## 0.8.2 · 2026-10-14

- 极限与导数动画到最小正距离 0.0001 再停止，修正统一 8 秒导致的提前截断。
- 矩形和与弧长细分到 80；参数扫描到本次区间终点后停止，不再绕回零点。
- 动画结束时注明有限距离或有限分割，避免把画面重合当作精确极限。
- 保留自动暂停、手动操作和数学条件；教材内容仍为 v0.3.1。
- 修正手机观察说明的公式与文字被挤成窄列的问题。

## 0.8.1 · 2026-10-14

- 深色面板的滑块圆点改为亮色、白色边框与 22 px 尺寸，避免与轨道混在一起。
- 统一二维、三维与首页滑块，增加悬停/按下/键盘聚焦提示及 36 px 操作区域。
- 教材内容保持 v0.3.1；拖动、精确输入与数值范围不变。

## 0.8.0 · 2026-10-14

- 精修全站视觉层次：统一面板、边框、阴影、圆角与操作状态。
- 首页保留数学曲面，增加清晰的形态选择与控制台层次。
- 二维与三维演示统一实验台外框，数学图形保留浅色坐标纸，读数与参数更易辨认。
- 阅读页改用带图标的内容切换，强调核心解释、步骤与例题；教材库与资源页同步。
- 支持窄屏与减少动态效果偏好；保持纯静态运行，教材版本仍为 v0.3.1。

## 0.7.0 · 2026-10-12

- Textbook v0.3.1: author 35 alternate explanations and 105 bounded, replayable guided experiment states in the canonical schema and printed manuscript.
- Connect prediction, controls, observation and checking; distinguish changed parameters from the original preset observation. Keep free exploration and local 2D/3D models.
- Use editable, validated parameter controls across planar, spatial and supplementary diagrams; clarify curve/line/area legends and correct the antiderivative legend.
- Reduce repeated headings, fix hard-coded question/example labels and collapse secondary models until requested.
- Add staged hints and topic-specific feedback; successful numeric matching no longer automatically claims conceptual understanding.
- Verify experiment-to-control mappings, mathematical counterexamples and exact known readouts before publication.

## 0.6.0 · 2026-10-12

- Canonical textbook v0.3.0: retain 7 chapters / 35 lessons; expand to 79 worked examples, 153 section exercises, 24 chapter-review questions and 14 exam questions (191 exercises total).
- Complete integral mean-value conditions, implicit second derivatives, general section volumes, cone related rates, pumping work and hydrostatic gate force. Supply usable basic antiderivatives and method-boundary counterexamples.
- Add browser-local average-height, section-shape, pumping and pressure diagrams, with independent geometry/physics checks.
- Replace generic review hints, recalibrate practice difficulty and remove unrelated misconception tags. Require local inverse-function conditions and restore a silently hidden percent sign.
- Derive displayed publication counts from canonical content; reject unescaped TeX comments before publishing.

## 0.5.1 · 统一数学排版

- 为全书 35 节、概念检查、例题、175 道练习与附录补齐显式数学标记；分数、根号、上下标及不等式使用 KaTeX。
- 补齐标题、目录、知识连接、搜索结果、图示说明和模型读数的渲染入口，网页与打印版共用分段规则。
- 改进公式基线、选项布局、单位正体与长公式滚动；增加内容排版检查及回归测试。
- 教材修订为 v0.2.1；章末题的“正弦基本极限”明确写出取极限过程，避免误写为恒等式。

## 0.5.0 · 整站视觉统一与首页精简

- 统一深墨绿、薄荷绿和暖白的导航、页头、书封、阅读目录、控件、搜索与页脚。
- 覆盖书库、教材与章节、35 节阅读、实验室、练习、知识索引、学习记录和全部辅助页面。
- 首页先展示可读教材，再展开系列；移除重复说明和大型结尾宣传区，增加阅读、演示与练习入口。
- 提高小字与图表标注的对比度，扩大演示和题目按钮；内容不再等待滚入动画才显示。
- 数学正文与演示模型保持教材 v0.2.0；继续纯静态运行。

## 0.4.0 · 数学展览馆

- 整屏数学场景：真实波面、环面、螺旋，连续形态过渡、参数、旋转视角、暂停和恢复。
- 数学方向改为连续索引；已出版书架和互动演示区形成完整浏览过程。
- 重做书库和阅读页排版，加入专注模式；手机目录在专注状态仍可打开。
- 新增四项独立数学模型检查；保留固定教材 v0.2.0 的全部 35 节。


## 0.3.0 · 教材内容 0.2.0

- 重写 Calculus I 全部 35 节的核心说明、直觉与三个正文问题，去掉重复引导。
- 加入 35 个概念检查、35 个演示预测问题，例题解法可按需展开；保留 70 例题与 175 练习解答。
- Three.js 本地 3D：圆盘、圆环、圆柱壳、旋转曲面；二维轮廓、视角、缩放、旋转角度、截面同步和回退。
- 极限与导数加入跳跃、尖角反例；二维与三维动画均提供速度和暂停。
- 深色数学演示与系列首页、浅色长文阅读；增加教学研究、补充阅读、来源用途与三维许可证。
- 修正壳层例题的区域描述和曲线凹性演示说明。


## 0.2.1

- 首页改为开放数学教科书系列入口，六个数学方向置于已出版书架之前。
- 统一系列目录驱动首页与书库，区分已出版和规划中，支持方向与状态筛选。
- Calculus I 保持为首本已出版教材；规划条目不生成空白正文或假阅读链接。
- 增加目录 schema、出版数据校验和后续教材接入说明。

## 0.2.0 — 2026-10-10

- 重建整站信息结构：书库、教材与章节主页、实验室、分页练习、全文搜索、学习记录与支持页面。
- 重做正文、定义、推导、例题、演示与逐题练习排版。
- 增加收藏、已读标记、较大字号、记录导出与导入；保留 v1 练习记录兼容。
- 为数学模型生成实验室预览，并修正导数演示中切线颜色说明。
- 保持全部内容和互动在静态客户端运行。


## 0.1.0 — 2026-10-10

- 完成 Calculus I 第一版全部 7 章 35 节，从函数基础到积分应用。
- 70 道逐步例题、140 道节内练习、21 道章末题和 14 道综合题，均附答案与解法。
- 静态阅读网站、20 种本地 SVG 图示模式、数值练习检查与自评记录。
- 完整 Markdown、无 JavaScript 依赖的整本打印 HTML、术语与公式索引。
- 内容 schema、先修 DAG 校验、数学模型测试与公开生成来源。
- MIT 软件许可、CC0 原创教材内容、贡献与静态部署流程。

完整第一版仍为 AI 生成内容，尚未逐节人工审校。
