# Python 编程入门

完整教材 v0.2.1，5 章 20 节、40 个例题、94 道练习及回顾。AI 编写，投稿贡献者为 [aby0120](https://github.com/aby0120)。正式分类为“其他”；无需实时模型或服务端。

## 唯一事实来源

- `book.json`：课程边界、章节顺序、版本、来源、许可与贡献记录。
- `lessons/*.json`：正文、概念检查、互动任务、例题、练习与先修关系。
- `supplements.json`：章末回顾、综合题与术语。
- `project/`：可在本机运行的完整项目与测试。
- `learning-object.schema.json`：独立编程教材 schema，代码不经过数学排版。
- `tools/`：结构校验、实际执行或状态对照测试、整本生成。

生成的 Markdown、项目打包与网页均从上述内容派生，不能直接修改生成文件。原始投稿说明与 QA 保留为历史记录；本次正式接入见仓库 `docs/PROGRAMMING_INTEGRATION.md`。

## 阅读与更新

正式入口 `#/book/python-introduction`。旧入口 `#/python` 保持兼容。全站书库、搜索和下载已接入；每本提供独立的打印版。

```sh
npm run build:python
npm run check
npm run dev
```

完整 `check` 自动包含两本新书的校验与测试。代码片段仅执行经过查看的固定教材示例；临时目录不是不可信代码的安全沙箱。内容 CC0，工具和项目 MIT，尚未声称经过人工审校。

Python 回放构建要求 **CPython 3.14**；例题采用的语法基线另见 `book.json`。网页只回放 195 个固定参数组合，能逐行前进、回退和比较变量；任意新代码在本机解释器运行。
