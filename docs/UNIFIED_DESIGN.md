# v0.5.0 — 整站设计检查与修订

2026-10-10。使用 Product Design 的截图检查流程与 Sites 的发布流程。目标：保留数学展览馆首页，将相同的视觉语言贯穿选书、阅读、演示、练习和辅助页面，并减少首页的重复信息。数学内容继续为 v0.2.0。

## 检查结论

v0.4.0 的首页已有明确方向，书库和阅读页也已部分改进。但其余页面的紫色按钮、浅紫卡片、蓝色书封、手机菜单和白色导航仍属于旧设计。此次以深墨绿、薄荷绿与暖白建立共同样式；正文保留明亮底色，数学曲线和三维模型的颜色继续承担变量和对象识别作用。

## 1. 首页：从展示走向阅读

保留可旋转的曲面、环面、螺旋和本地参数控制。副文案直接说明这是 AI 编写的数学教材。已出版的书提前到数学方向索引之前；保留六个方向的系列定位和明确的规划状态。

移除书架下重复的来源说明、结尾的大型口号与重复阅读按钮，改为阅读、演示、练习的三个实际入口。滚入动画不再控制文字可见性。

![首页旧版](images/unified/before-home.jpg)
![首页新版](images/unified/final-home.jpg)
![新版书架与系列索引](images/unified/final-home-shelf.jpg)
![新版互动展示](images/unified/final-home-hands.jpg)

## 2. 书库与教材：同一本书的身份保持一致

导航、筛选、书封、教材页与章节页采用共同色彩和边线。书封在首页、书库和教材页共用同一个组件，修正小尺寸封面的内容挤压。已出版教材与规划条目继续分开呈现，规划教材不生成空白阅读页。

![书库旧版](images/unified/before-library.jpg)
![书库新版](images/unified/final-library.jpg)
![教材主页](images/unified/final-book-calculus-1.jpg)
![章节主页](images/unified/final-chapter-limits.jpg)

## 3. 阅读：把导航与纸面分开

深色目录与页头围绕暖白正文。绿色贯穿阅读标签、概念检查、定义、推导序号、例题与练习状态。修正章节页说明的对比度和已收藏图标的可见性；保留专注阅读、字号、知识连接、提示与完整解答。

![阅读旧版](images/unified/before-lesson-limit-intuition.jpg)
![阅读新版](images/unified/final-lesson-limit-intuition.jpg)

## 4. 演示与练习：统一操作语言

实验室采用共同页头与纸面图表，练习采用较宽的双列任务卡与深色章节编号。统一滑块、播放、比较按钮、数值反馈、题目导航与分页；演示/题目按钮采用至少 44 px 的主要操作尺寸。图形的计算模型保持不变。

![实验室旧版](images/unified/before-lab.jpg)
![实验室新版](images/unified/final-lab.jpg)
![练习旧版](images/unified/before-practice.jpg)
![练习新版](images/unified/final-practice.jpg)
![综合测试](images/unified/final-practice-exam.jpg)

## 5. 资源与手机：覆盖辅助流程

知识索引、学习记录、下载、指南、项目资料、搜索弹窗和页脚沿用共同样式。页脚去掉重复的书库链接，补上已有的教学研究资料。手机菜单与教材抽屉也采用深色体系；长标题与分页继续适应小屏。

![下载旧版](images/unified/before-downloads.jpg)
![下载新版](images/unified/final-downloads.jpg)
![阅读指南](images/unified/final-guide.jpg)
![知识索引](images/unified/final-reference.jpg)
![学习记录](images/unified/final-learning.jpg)
![项目资料](images/unified/final-about.jpg)
![教学研究](images/unified/final-about-research.jpg)
![手机首页](images/unified/final-mobile-home.jpg)
![手机阅读](images/unified/final-mobile-lesson-limit-intuition.jpg)
![手机菜单](images/unified/after-mobile-nav.jpg)
![手机目录](images/unified/after-mobile-drawer.jpg)

## 验证

- `npm run check`：生产构建、类型检查、内容校验和 24 个测试通过；474 个数学公式可渲染。
- 62 个路由与分页状态 × 1440、768、390 px 三种宽度，共 186 次浏览器检查：标题存在，无整页横向溢出，无 KaTeX 错误。包括全部 35 节正文和 7 个章节页。记录在 [routes.json](images/unified/routes.json)。
- 实际操作检查：方向筛选、未出版空状态、搜索与 Esc 恢复焦点、练习下一页、题目切换、展开完整解答、数值检查、专注模式、手机菜单与目录、目录 Esc 恢复焦点。
- 首页三种形态可切换；环面参数最大值与螺旋参数最小值可由键盘操作，重置正常。三维与二维数学模型继续通过原有独立计算测试。
- 关键页面截图均来自本次浏览器检查，保存后再查看。不是设计稿或生成图片。

浏览器检查使用 Codex 内置浏览器；未覆盖所有浏览器、屏幕阅读器和设备，也不构成完整 WCAG 合规认证。动态动画支持暂停和减少动画偏好；此次不修改教材的数学论证。
