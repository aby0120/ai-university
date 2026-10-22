# 带着 AI 做项目

完整教材 v0.1.1，6 章 18 节、36 个例题、88 道练习及回顾。AI 编写，投稿贡献者为 [aby0120](https://github.com/aby0120)。正式分类为“其他”；无需实时模型或服务端。

## 唯一事实来源

- `book.json`：课程边界、章节顺序、版本、来源、许可与贡献记录。
- `lessons/*.json`：正文、概念检查、互动任务、例题、练习与先修关系。
- `supplements.json`：章末回顾、综合题与术语。
- `project/`：可在本机运行的完整项目与测试。
- `learning-object.schema.json`：独立编程教材 schema，代码不经过数学排版。
- `tools/`：结构校验、实际执行或状态对照测试、整本生成。

生成的 Markdown、项目打包与网页均从上述内容派生，不能直接修改生成文件。原始投稿说明与 QA 保留为历史记录；本次正式接入见仓库 `docs/PROGRAMMING_INTEGRATION.md`。

## 阅读与更新

正式入口 `#/book/ai-development`。旧入口 `#/ai-development` 保持兼容。全站书库、搜索和下载已接入；每本提供独立的打印版。

```sh
npm run build:ai-development
npm run check
npm run dev
```

完整 `check` 自动包含两本新书的校验与测试。代码片段仅执行经过查看的固定教材示例；临时目录不是不可信代码的安全沙箱。内容 CC0，工具和项目 MIT，尚未声称经过人工审校。

互动含固定情境题、Git 单文件教学状态机与六栏任务卡。它们不会运行任意 Git 命令，也不自动评价自由文字。贯穿项目是本地学习清单，可下载、测试和备份数据。
