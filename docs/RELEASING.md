# GitHub 开源发布流程

所有版本都要把网站、书稿和 canonical 内容绑定到同一提交。

1. `npm ci && npm run check`，完成浏览器 QA。
2. 修改 `package.json`、实际修改教材的元数据与各章节 provenance 版本，更新 CHANGELOG。修订后重新构建书稿。
3. 提交源码与 `book/Calculus-I.md` 与 `book/Calculus-II.md`；不要提交 node_modules、凭据或 dist。
4. 推送 main，等待 CI 通过；有改动审查时先开 PR。
5. 建立版本 tag，例如 `v0.1.0`，发布 GitHub Release，附整本 Markdown 与静态网站 zip。
6. 如启用 Pages，运行独立部署工作流，确认 URL 返回成功，再在 README 写入真实地址。

```sh
git tag v0.1.0
git push github main --tags
gh release create v0.1.0 --title 'Calculus I · 完整第一版' \
  --notes-file docs/RELEASE_NOTES.md book/Calculus-I.md
```

发布说明必须区分“完整课程范围已经写完”和“内容已无数学错误”。描述实际检查与限制，不声称人工审定、学历认证或学校教材采用。

后续卷按完整项目推进：课程边界 → 整章正文 → 解答与图示 → 整卷检查 → 固定版本发布。不以演示几节代替整卷。
