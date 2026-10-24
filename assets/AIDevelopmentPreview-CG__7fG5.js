import{c as q,r as d,j as n,D as _,X as F,L as W,A as T,C as A,a as f,B as G}from"./index-B_WvA-eF.js";import{C as Y}from"./copy-5CxxilXX.js";import"./react-D-vXKkXw.js";import"./math-BvXWHf-j.js";const P=q("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);const K=q("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),X="acceptance",Z="chapter-1",Q="1.3",nn="先说清楚怎样算完成",en="把“好用”写成能亲手检查的结果。",tn="验收标准是一组具体输入、操作和预期结果；它们让你和 Agent 对完成有相同理解。",sn="订蛋糕时说“不要太甜”容易误会；说明尺寸、口味和交付日期就更容易检查。",on=["写明检查的起点、动作和预期结果。","用自己的检查结果判断是否完成，而非只听 Agent 报告。"],rn=[{title:"三句话写一个检查",text:"用“给定……当……那么……”描述行为。给定清单为空，当输入“练习 Git”并点击添加，那么出现一条未完成项。它比“添加功能正常”具体，因为你知道起点、动作和结果。先写标准再写代码，可以避免跟着当前实现反过来降低要求。"},{title:"边界决定有没有漏掉问题",text:"正常输入只能证明正常路径。全空格、重复标题、刷新、存储失败是另一类情况。首版明确允许重复标题，每条用独立 ID 区分；全空格必须拒绝。标题上限是去空白后 80 个 UTF-16 代码单元，少数符号会占多个；不要随口把代码的 length 说成所有语言里的“字符数”。"},{title:"功能、体验和限制分开写清",text:"功能标准描述正确结果；体验标准包括键盘可提交、手机不横向溢出；限制说明包括不跨设备同步。限制不是测试失败的借口：如果标准要求刷新保留，不能在验收时改口说本地只是演示。需要改目标时，与原始目的一起重新确认。"}],cn={text:"验收标准是一组具体输入、操作和预期结果；它们让你和 Agent 对完成有相同理解。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},an=["写明检查的起点、动作和预期结果。","至少加入一个边界或失败输入。","用自己的检查结果判断是否完成，而非只听 Agent 报告。"],ln=[{title:"验收空输入",problem:"怎么检查“不能添加空计划”？",steps:["从空清单开始。","输入三个空格，点击添加。","确认数量没变且显示可理解提示。"],answer:"给定 0 项，当提交全空格，那么仍为 0 项，提示“请先写一项学习计划”。不要仅检查按钮是否能点。"},{title:"验收重复标题",problem:"两条都叫“学 Git”，删除第二条应发生什么？",steps:["先添加两条同标题记录。","确认它们有不同 ID。","删除第二条，观察第一条仍在。"],answer:"剩下第一条，而不是全部删除。验收动作只针对所选记录；重复标题是允许输入，不应依靠标题定位。"}],dn=[{claim:"“页面没报错”就是完成。",correction:"还要对照具体输入与结果；错误可以表现为静默丢数据。"},{claim:"所有测试绿了就一定满足需求。",correction:"如果缺少刷新或空白案例，绿色只支持已有案例，不补上缺失标准。"}],pn=[{id:"acceptance-p1",difficulty:2,problem:"为完成勾选写一条标准。",hint:"给出初始状态和点击结果。",answer:"给定一条未完成项，勾选后它显示已完成；再次取消则恢复未完成。",solution:["先约定单次变化。","再检查反向操作避免只能完成不能取消。"]},{id:"acceptance-p2",difficulty:2,problem:"“界面高级”怎样改得可检查？",hint:"关注阅读、屏幕和操作。",answer:"在 390px 宽度下标题可换行，没有横向滚动；所有按钮可用键盘聚焦。",solution:["把审美偏好补成具体布局要求。","高级本身不作为唯一验收标准。"]},{id:"acceptance-p3",difficulty:2,problem:"挑出缺失案例：普通添加、普通删除、普通勾选。",hint:"查看用户第二天会做什么。",answer:"缺少刷新保留、全空格拒绝和重复标题删除等案例。",solution:["对照跨天使用。","加入错误与歧义输入，不只检查顺利路径。"]},{id:"acceptance-p4",difficulty:2,problem:"Agent 给出了“测试通过”，你还需要什么？",hint:"通过的是哪些检查？",answer:"运行命令、实际结果、覆盖的案例、未检查的项目；再自己验收关键动作。",solution:["要求证据与范围。","不把一句结论当作全部功能的保证。"]}],mn={question:"哪一条能直接执行验收？",choices:["功能稳定","空白提交后数量不变并有提示","测试尽量多"],correctIndex:1,feedback:["缺少输入和结果。","有操作和预期，可直接检查。","数量本身不说明覆盖什么。"]},un={kind:"decision",prediction:"如果只检查普通输入，会漏掉什么？",steps:[{question:"输入三个空格。首版应？",choices:["新增空项","不新增，显示提示","崩溃后重开"],correctIndex:1,feedback:["空项无法表达计划。","符合拒绝空白的标准。","预期错误应被处理并解释。"]},{question:"两条同标题，删一条后全没了。",choices:["符合简化逻辑","属于验收失败","只改文案"],correctIndex:1,feedback:["允许重复就不能按标题全删。","按独立 ID 定位才符合所选记录的行为。","文案不能修复数据错误。"]},{question:"所有已写测试通过，但没有测试刷新。",choices:["宣称刷新已验证","记录未验证，亲自刷新检查","撤掉保存要求"],correctIndex:1,feedback:["没有证据支持这项结论。","补齐验收证据才知道跨天场景是否成立。","不能迁就实现改变核心目标。"]}],followUp:"挑选自己的一个功能，写正常、边界、失败三条验收案例。"},hn=["small-scope"],gn=1,fn=["acceptance-guess","acceptance-evidence"],xn=["mdn-start","node-test"],bn={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},kn={id:X,chapterId:Z,number:Q,title:nn,subtitle:en,concept:tn,intuition:sn,objectives:on,body:rn,formalDefinition:cn,workflow:an,workedExamples:ln,commonMistakes:dn,practice:pn,learningCheck:mn,interactiveVisual:un,prerequisites:hn,difficulty:gn,misconceptionTags:fn,sources:xn,provenance:bn},jn="agent-context",vn="chapter-4",An="4.1",wn="先让 Agent 了解真实项目",yn="用文件事实替代脑补。",$n="给 Agent 用户目标、当前项目、相关文件、运行方式和边界；让它把事实、假设与未知分开。",En="请新同事接手厨房，需要给菜单和设备位置，而不是只说“你是顶级大厨”。",In=["提供当前需求、真实文件位置、运行方法和边界。","对照文件确认计划，再把稳定约定写入项目说明。"],Cn=[{title:"给相关材料，不倒入所有内容",text:"提供当前需求、README、相关文件路径和错误原文，说明文件是你提供的还是 Agent 已实际读取的。不要让它说“我已看过仓库”却只看见一段截图。上下文是完成当前任务所需信息，几十页聊天并不一定有用；把已经确认的约定写成一页项目说明，减少反复遗忘。"},{title:"先形成可以核对的地图",text:"请 Agent 先指出入口、现有实现、可能要改的文件和验证命令，再做改动。你对照文件检查它的理解。对于明确而小的修改，不必每一步都停下来审批；对于是否同步、是否删数据这类改变方向的未知，要求先问清楚，不能默默假设。"},{title:"给文档准确的地位",text:"不同工具可能支持 AGENTS.md、其他约定文件或自己的配置；本书不假设所有工具自动读同一种文件。可以把 README、范围和验收做成项目说明，在会话中明确要求读取。文件里的指令也需要符合你的真实授权；第三方文档要求上传密钥不因为被读取就合法。"}],Dn={text:"给 Agent 用户目标、当前项目、相关文件、运行方式和边界；让它把事实、假设与未知分开。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Sn=["提供当前需求、真实文件位置、运行方法和边界。","要求把已经读取的事实、推测与关键未知分开。","对照文件确认计划，再把稳定约定写入项目说明。"],Rn=[{title:"第一次接手项目",problem:"怎样请 Agent 先理解学习清单？",steps:["给出用户场景和首版范围。","指出 README、package.json 和入口文件。","要求返回文件职责与验证命令。"],answer:"先阅读 README.md、package.json、index.html、app.mjs、tasks.mjs。当前是个人单浏览器学习清单，不做账号和同步。请列出已读取的文件、一次添加的数据路径、现有测试命令和你仍不确定的地方。暂不改代码。"},{title:"区分事实和假设",problem:"Agent 说“这是 React 项目”，但文件没有 React 依赖。",steps:["查 package.json 和 HTML 入口。","指出事实是原生模块，不是 React。","要求更新方案，避免无缘由引入框架。"],answer:"请引用判断所用文件。当前 index.html 用 type=module 加载 app.mjs，配置没有 React。按现有结构完成任务；如果认为需新增框架，先说明具体必要性及成本。"}],Tn=[{claim:"提示词越长越容易正确。",correction:"相关事实比长度有用，重复旧讨论还可能冲突。"},{claim:"角色写得厉害就不需要项目资料。",correction:"角色描述不能替代真实文件、约束与验收。"}],Nn=[{id:"agent-context-p1",difficulty:2,problem:"修保存问题，至少提供哪些材料？",hint:"沿保存路径找相关事实。",answer:"刷新复现步骤、网址、错误原文、app.mjs 保存读取逻辑、README 范围和测试方式。",solution:["让 Agent 知道哪里坏了。","不需要默认提供所有私人文件。"]},{id:"agent-context-p2",difficulty:2,problem:"AI 声称读过文件，如何核对？",hint:"让结论能回到具体位置。",answer:"要求给出已读文件列表和相关实现说明，再对照真实文件。",solution:["不要只问有没有读。","检查它说的入口或函数是否确实存在。"]},{id:"agent-context-p3",difficulty:2,problem:"哪些未知必须先确认？",hint:"会改变数据、权限或范围的。",answer:"是否允许替换旧数据、是否需要同步、能否新增外部服务等。",solution:["小实现细节可自主解决。","方向性未知不能默默猜。"]},{id:"agent-context-p4",difficulty:1,problem:"AGENTS.md 是否所有工具都自动生效？",hint:"工具能力不同。",answer:"不是；查所用工具约定，并明确要求读取项目说明。",solution:["文件名不构成通用魔法。","重要约定在当前会话也说清楚。"]}],Bn={question:"最有用的上下文是？",choices:["你是世界最强工程师","相关文件、现状、目标和验收","所有聊天历史不加整理"],correctIndex:1,feedback:["角色不能提供项目事实。","能帮助识别正确改动位置与验证方式。","无关材料可能掩盖当前任务。"]},Mn={kind:"prompt",prediction:"Agent 的理解图有一条错误，继续写代码会怎样？",steps:[{question:"它猜用了 React。你先？",choices:["让它依据配置和入口重新核对","接受猜测","加入 React 证明它对"],correctIndex:0,feedback:["先纠正事实才能减少无关改动。","方案可能建立在不存在的结构上。","实现不应为证明猜测而改变。"]},{question:"要不要跨设备同步尚未决定。",choices:["默认为需要","向你确认，记录范围","假装已实现"],correctIndex:1,feedback:["这个决定影响架构和权限。","关键未知需要你的方向判断。","结论没有实现和证据。"]},{question:"最后应记录哪种材料？",choices:["稳定的范围、运行方式与约定","所有模型闲聊","真实密钥"],correctIndex:0,feedback:["这些内容可帮助下一次会话接手。","闲聊会增加噪声。","秘密不能为了上下文写进项目。"]}],followUp:"在提示词练习台写一份接手任务，逐项核对是否有对应项目事实。"},qn=["git-recovery"],_n=3,Gn=["agent-context-guess","agent-context-evidence"],Pn=["prompt","mdn-start"],Un={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Ln={goal:"先了解项目，暂不修改代码。",context:"个人单浏览器学习清单。请读 README.md、package.json、index.html、app.mjs、tasks.mjs。",scope:"不做账号或同步；不上传私人内容，不引入新框架。",acceptance:"列出已读文件和职责；用一次添加解释数据路径；将事实、假设与未知分开。",verification:"对照实际文件；核对 npm start 与 npm test 对应的脚本，未执行请说明。",delivery:"项目地图、拟改位置、验证方式及需要我确认的问题。"},Hn={id:jn,chapterId:vn,number:An,title:wn,subtitle:yn,concept:$n,intuition:En,objectives:In,body:Cn,formalDefinition:Dn,workflow:Sn,workedExamples:Rn,commonMistakes:Tn,practice:Nn,learningCheck:Bn,interactiveVisual:Mn,prerequisites:qn,difficulty:_n,misconceptionTags:Gn,sources:Pn,provenance:Un,promptTemplate:Ln},zn="capstone",On="chapter-6",Vn="6.3",Jn="你来带着 AI 完成一轮开发",Fn="从提出想法到判断结果，自己掌握方向。",Wn="一轮完整开发是明确问题、限定范围、制定验收、小步实现、验证、记录和交付，而不是一次许愿。",Yn="你可以让助手准备食材和烹饪，但菜单、口味判断与是否上桌仍需要你负责。",Kn=["先写一页计划和三类验收，再把一个小任务交给 Agent。","交付可复现成果，独立解释关键行为、限制和下一步学习方向。"],Xn=[{title:"先自己交一页计划",text:"把学习清单当作练习项目，先不看参考实现。写用户场景、首版与后续、文件职责草图、数据字段和三类验收。选一个小任务写任务卡给 Agent；你可用本书项目作参考对照，但不把参考代码存在视作自己已经理解。每一步至少能用自己的话说明目的与检查。"},{title:"按关卡完成而非盲目堆功能",text:"关卡一：页面与添加；关卡二：完成和删除；关卡三：保存与备份；关卡四：测试、排错与说明。每关卡都读差异、跑相关检查、在浏览器验收，再提交。AI 提议加入聊天、支付或同步时，回看首版决定，不因为看起来先进就扩大任务。"},{title:"用解释能力决定下一步",text:"最后请另一人按 README 运行，并让自己回答：数据在哪里？提交会记录哪份内容？空白为何不新增？刷新失效怎么定位？谁能看到数据？测试还没覆盖什么？回答不出来就回到对应章节。完成本书代表能带着框架开展小项目，继续学习语言、HTTP、数据与安全仍有价值。"}],Zn={text:"一轮完整开发是明确问题、限定范围、制定验收、小步实现、验证、记录和交付，而不是一次许愿。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Qn=["先写一页计划和三类验收，再把一个小任务交给 Agent。","每一关读差异、验证、修正并做目的明确的小步记录。","交付可复现成果，独立解释关键行为、限制和下一步学习方向。"],ne=[{title:"一轮添加功能",problem:"从需求到提交，怎样走一圈？",steps:["场景：晚上记录明天的学习计划。","任务：添加非空标题，空白拒绝，暂不实现保存。","读差异、跑规则测试、亲自试两种输入，再提交。"],answer:"完成记录：实现添加与空白拒绝，测试真实通过，页面普通/空白输入已验收；刷新保存尚未实现，下一关补齐。不要把局部关卡说成整项目完成。"},{title:"选择下一步",problem:"已经完成个人清单，想增加搜索还是多人同步？",steps:["先问当前麻烦：项多了找不到，还是必须共享？","搜索主要扩展本地筛选；同步改变数据位置和权限。","选与真实问题对应的一项，重新写边界和验收。"],answer:"若麻烦是计划多难找，先做搜索并检查空关键词、大小写和完成项处理。若确实需要多人共享，先设计权限与冲突规则，不能把它当同样小的任务。"}],ee=[{claim:"学完就不需要理解代码。",correction:"至少应理解项目关键路径；继续学语言能让判断更准确。"},{claim:"好开发者必须完全不用 AI。",correction:"可以用 AI 实现与解释，关键是你能确定目标、核对结果和承担决定。"}],te=[{id:"capstone-p1",difficulty:2,problem:"写出一轮协作的七步。",hint:"从问题到交付。",answer:"问题 → 范围 → 验收 → 小步实现 → 验证修正 → Git 记录 → 交付说明。",solution:["每步产物为下一步提供依据。","不只强调提示词。"]},{id:"capstone-p2",difficulty:2,problem:"第一关只实现添加，能写全书项目已完成吗？",hint:"区分局部成果与首版目标。",answer:"不能。记录已验收添加，保存等关卡仍待完成。",solution:["状态应准确。","未完成项保留在计划中。"]},{id:"capstone-p3",difficulty:2,problem:"找不到一条计划，是先加搜索还是同步？",hint:"先确认原因。",answer:"若项多难定位，可考虑搜索；若计划在另一设备，涉及同步。先复现并确认用户问题。",solution:["同一句现象可能有不同原因。","选择解决当前麻烦的方案。"]},{id:"capstone-p4",difficulty:3,problem:"怎样判断自己开始掌握框架？",hint:"尝试不用原文解释。",answer:"能写任务卡、指出数据位置、解释暂存提交、选择边界测试、报告验证限制，并带另一人运行。",solution:["用独立解释与实际操作判断。","不以记住术语数量评价学习。"]}],se={question:"你在 AI 辅助开发中最需要掌握什么？",choices:["不断扩大许愿清单","目标、边界、判断依据与交付责任","每次都选最复杂框架"],correctIndex:1,feedback:["更多想法不能自动转成可验证项目。","这让 AI 的工作始终服务于你的方向。","复杂度不代表更符合需求。"]},ie={kind:"decision",prediction:"如果下一次没有参考答案，你会怎样开始？",steps:[{question:"第一份材料是什么？",choices:["全部功能许愿","用户场景、首版与验收","模型排行榜"],correctIndex:1,feedback:["无法判断范围与完成。","给协作一个可核对的起点。","不能替你决定用户目的。"]},{question:"Agent 报告完成。你？",choices:["看差异、测试证据并亲自验收","立即接受全部","只比较行数"],correctIndex:0,feedback:["你依据结果决定是否接受。","缺少判断与验证。","行数不等于用户价值。"]},{question:"交付结束应留下？",choices:["源码、运行说明、版本、验证与限制","只有截图","只有一句成功"],correctIndex:0,feedback:["另一人能接手和复现。","截图不能运行或恢复。","缺少实际材料。"]}],followUp:"独立完成附录项目或等范围新项目，并填写综合实作的交付材料。"},oe=["release"],re=4,ce=["capstone-guess","capstone-evidence"],ae=["mdn-start","node-test","git-record"],le={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},de={id:zn,chapterId:On,number:Vn,title:Jn,subtitle:Fn,concept:Wn,intuition:Yn,objectives:Kn,body:Xn,formalDefinition:Zn,workflow:Qn,workedExamples:ne,commonMistakes:ee,practice:te,learningCheck:se,interactiveVisual:ie,prerequisites:oe,difficulty:re,misconceptionTags:ce,sources:ae,provenance:le},pe="data-design",me="chapter-6",ue="6.1",he="先决定数据怎样留下来",ge="用简单方案，但知道什么时候不够。",fe="选择存储方案要考虑谁读写、需要保留多久、如何恢复和将来怎样改变格式。",xe="把笔记留在一台电脑还是共享云文档，决定了谁能看到、怎样找回和怎样协作。",be=["写清字段、类型、唯一身份与允许输入。","演练有效恢复与无效拒绝，格式变化时明确版本处理。"],ke=[{title:"先给数据一个明确形状",text:"本案例每条有 id、title、done 三个字段。id 标识是哪一条，title 给人阅读，done 是完成状态。备份外层有 version 和 tasks；版本用来识别格式，不是为了显得专业。同标题可以存在，但 ID 不能重复。字段约定会影响添加、显示、删除、测试与恢复，不能只在一处随意改名。"},{title:"本地存储也有失败条件",text:"localStorage 以字符串保存，在同一个源中跨页面加载保留，但可能被用户清理、被浏览器限制或写入失败。容量有限，不适合大文件。浏览器两个标签页也可能彼此覆盖，本案例没有并发协调。它适合个人学习清单的首版，不能宣称是多人可靠数据库。"},{title:"备份必须能恢复才有意义",text:"导出 JSON 后要实际做一次恢复演练。坏数据应拒绝，不覆盖原清单；写入失败应报告未保存；读取损坏时先暂停写入，避免把空列表写回覆盖旧内容。格式升级应识别版本，明确迁移或拒绝，不能静默误读。本书没有实现复杂迁移，版本不是 1 时会拒绝。"}],je={text:"选择存储方案要考虑谁读写、需要保留多久、如何恢复和将来怎样改变格式。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},ve=["写清字段、类型、唯一身份与允许输入。","说明数据位置、持久性和失败条件。","演练有效恢复与无效拒绝，格式变化时明确版本处理。"],Ae=[{title:"为什么不用标题做 ID",problem:"两条都叫“练习 Git”，怎样只完成第二条？",steps:["给每条独立 ID。","界面动作传对应 ID。","逻辑按 ID 定位，而不是按标题全匹配。"],answer:"标题服务阅读，ID 服务定位。两条相同标题可以有不同完成状态；这就是需要身份字段的具体理由。"},{title:"为什么带版本",problem:"新版备份把 done 改成 status，旧程序能读吗？",steps:["现有程序期待布尔 done。","未知格式可能产生错误显示。","识别版本后明确迁移或拒绝。"],answer:"当前程序只接受 version: 1 及 id/title/done。未知版本拒绝并保留原清单；以后升级须另写迁移规则与测试，不直接假设兼容。"}],we=[{claim:"本地保存等于永远不会丢。",correction:"清理、存储异常、换设备或换源都会影响数据；保留可恢复备份。"},{claim:"备份下载按钮出现就说明备份可靠。",correction:"还要下载有效文件并实际恢复，检查完整内容与状态。"}],ye=[{id:"data-design-p1",difficulty:2,problem:"给记录写一份字段说明。",hint:"名字、类型、用途。",answer:"id 非空唯一字符串；title 去空白后 1–80 代码单元；done 布尔值。",solution:["按用途区分身份与显示。","写允许边界支持校验。"]},{id:"data-design-p2",difficulty:2,problem:"localhost 与 127.0.0.1 同端口共用数据吗？",hint:"主机不同就不是同一源。",answer:"不共用同一 localStorage；协议、主机、端口共同决定源。",solution:["不要误以为同一电脑就同一空间。","需要备份恢复来迁移，不能自动假设。"]},{id:"data-design-p3",difficulty:2,problem:"读取损坏后为何不马上写空列表？",hint:"旧内容可能还能排查或恢复。",answer:"这样会覆盖旧数据；应暂停写入并提示，使用有效备份明确恢复。",solution:["保留故障证据。","不把读失败解释成用户本来没有数据。"]},{id:"data-design-p4",difficulty:2,problem:"多人同时编辑是否可直接沿用首版？",hint:"首版未处理并发、权限与共享。",answer:"不宜，需要共享存储、身份权限和冲突处理等设计，重新确认需求。",solution:["简单方案有边界。","不是仅换域名或加按钮。"]}],$e={question:"为什么清单使用 ID 而不只用标题？",choices:["让代码看起来专业","准确定位同标题中的一条","保证所有设备同步"],correctIndex:1,feedback:["身份字段有具体用途。","标题可重复，ID 区分记录。","ID 不提供共享存储。"]},Ee={kind:"decision",prediction:"备份读得进来与恢复可靠，是同一件事吗？",steps:[{question:"当前清单读取失败。",choices:["立即保存空列表","暂停写入，保留旧数据并提示","显示保存成功"],correctIndex:1,feedback:["会覆盖可能有用的原内容。","保留数据与故障线索。","与实际状态矛盾。"]},{question:"未知版本备份。",choices:["明确拒绝，待设计迁移","忽略版本强行加载","默认 done 都为真"],correctIndex:0,feedback:["防止误读字段含义。","格式可能已变，强读会损坏数据。","会改变记录真实状态。"]},{question:"恢复演练应该核对？",choices:["只有文件能下载","每条身份、标题和完成状态","只有文件大小"],correctIndex:1,feedback:["下载成功不等于内容可恢复。","完整数据结果支持恢复结论。","大小不能证明语义正确。"]}],followUp:"在项目页观察数据样例，再运行备份往返测试并实际恢复。"},Ie=["security"],Ce=4,De=["data-design-guess","data-design-evidence"],Se=["mdn-storage","node-test"],Re={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Te={id:pe,chapterId:me,number:ue,title:he,subtitle:ge,concept:fe,intuition:xe,objectives:be,body:ke,formalDefinition:je,workflow:ve,workedExamples:Ae,commonMistakes:we,practice:ye,learningCheck:$e,interactiveVisual:Ee,prerequisites:Ie,difficulty:Ce,misconceptionTags:De,sources:Se,provenance:Re},Ne="data-flow",Be="chapter-2",Me="2.2",qe="跟着一条数据走",_e="理解浏览器、服务器、API 和存储的区别。",Ge="沿输入、处理、保存、显示追踪数据，才能判断问题出在哪一段，以及是否需要服务端。",Pe="寄快递时分清寄件、运输和签收；看到包裹没到，就能查哪一段停住了。",Ue=["写出一次动作的输入、处理、保存、显示四段。","先解释需求是否需要共享数据，再决定是否引入服务端。"],Le=[{title:"先走完本案例的路径",text:"输入框得到文字，app.mjs 接住提交事件，tasks.mjs 检查并生成新清单，app.mjs 把它写入 localStorage，再显示列表。这里没有把计划发送到服务器。启动的本地服务器只是把 HTML、CSS、JS 文件送到浏览器；不能因为有 server.mjs 就说有云端数据库。"},{title:"给术语一个用途",text:"前端是在浏览器里呈现与交互的部分。后端通常在服务器处理共享数据、权限或业务。API 是程序之间约定的接口，例如某服务规定向 /tasks 发送什么字段、返回什么结果。数据库是组织并保存数据的工具。它们不是每个小项目都必须有的一套套餐。"},{title:"用问题决定结构",text:"个人单浏览器清单可以从本地存储开始。如果必须两台设备看到同一份数据，就需要一个可访问的共享数据位置和身份权限方案。部署静态文件只让别人拿到程序，不会让他们自动拿到你的浏览器数据。先确认数据要在哪里、谁能读写，再选实现。"}],He={text:"沿输入、处理、保存、显示追踪数据，才能判断问题出在哪一段，以及是否需要服务端。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},ze=["写出一次动作的输入、处理、保存、显示四段。","确认保存位置以及谁能访问它。","先解释需求是否需要共享数据，再决定是否引入服务端。"],Oe=[{title:"定位保存失败",problem:"点击后看到新项，刷新却没了，先查哪里？",steps:["添加与显示已经有可见结果。","检查保存是否报错、使用哪个键。","确认刷新前后网址协议、主机和端口相同。"],answer:"优先查存储与读取路径。localStorage 按源区分，http://127.0.0.1:5180 和另一端口不会共用同一份数据；不要先重写整个界面。"},{title:"解释公开网址",problem:"把项目放到公开静态网站后，同学会看到我的清单吗？",steps:["区分程序文件与用户数据。","数据只在自己的浏览器同源存储。","说明没有账号和共享服务。"],answer:"同学会得到相同程序，但用自己的浏览器存储。你的本地清单不会被静态发布自动上传，也不会自动迁移到新网址。"}],Ve=[{claim:"有服务器文件就一定有后端业务。",correction:"本案例服务器只提供静态文件，不处理清单业务。"},{claim:"上线网页等于所有设备同步数据。",correction:"共享网址与共享用户数据是两件事；同步要另行设计。"}],Je=[{id:"data-flow-p1",difficulty:1,problem:"本案例数据经过哪些环节？",hint:"从输入框开始。",answer:"输入框 → app.mjs 事件 → tasks.mjs 规则 → localStorage 保存 → 页面显示。",solution:["指出每段作用。","保存失败应反馈，不应宣称已保存。"]},{id:"data-flow-p2",difficulty:2,problem:"什么需求会改变本地存储方案？",hint:"考虑两个人或两台设备。",answer:"跨设备同步、多人共享或权限管理，需要重新设计共享数据与身份方案。",solution:["先确认读写者。","不要只把 localStorage 换名字就说完成同步。"]},{id:"data-flow-p3",difficulty:2,problem:"页面正常但手机没有旧数据，一定是 bug 吗？",hint:"回看“不跨设备同步”的范围。",answer:"不一定。本地方案不同设备各有存储；若需求要求同步，则当前方案不满足。",solution:["依据明确需求判断。","给用户准确的限制说明。"]},{id:"data-flow-p4",difficulty:2,problem:"API 返回数据，不等于什么？",hint:"程序仍要校验和显示。",answer:"不等于界面已经正确显示，也不等于客户端输入可以完全信任。",solution:["分清接口、处理与呈现。","发生错误时逐段定位。"]}],Fe={question:"静态发布会自动上传浏览器里的清单吗？",choices:["会，网址相同即可","不会，需要额外数据方案","会，改端口即可"],correctIndex:1,feedback:["静态文件发布不读取你的本地数据。","程序文件与用户数据分开。","端口变化反而会改变同源存储空间。"]},We={kind:"decision",prediction:"同学打开新网址，清单为空。你应如何判断？",steps:[{question:"先问什么？",choices:["是否本来就要求共享数据","要换哪个动画","是否重写 CSS"],correctIndex:0,feedback:["需求决定空清单是否属于错误。","动画与数据位置无关。","外观不能解释存储位置。"]},{question:"当前实现只有 localStorage。",choices:["宣称同步已完成","说明各浏览器独立保存","加入一个同步图标"],correctIndex:1,feedback:["没有共享数据证据。","准确说明当前行为。","图标不会产生共享服务。"]},{question:"用户确实要两台设备同步。",choices:["继续保留原范围却称完成","重新确认账号、数据位置与权限","复制 CSS"],correctIndex:1,feedback:["方案已无法满足新需求。","先决定谁的数据和访问边界再实现。","样式不会提供同步。"]}],followUp:"画一条你自己的项目数据路径，标明数据停在哪里。"},Ye=["project-map"],Ke=2,Xe=["data-flow-guess","data-flow-evidence"],Ze=["mdn-flow","mdn-storage"],Qe={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},nt={id:Ne,chapterId:Be,number:Me,title:qe,subtitle:_e,concept:Ge,intuition:Pe,objectives:Ue,body:Le,formalDefinition:He,workflow:ze,workedExamples:Oe,commonMistakes:Ve,practice:Je,learningCheck:Fe,interactiveVisual:We,prerequisites:Ye,difficulty:Ke,misconceptionTags:Xe,sources:Ze,provenance:Qe},et="debugging",tt="chapter-5",st="5.2",it="报错时先复现，再猜原因",ot="把模糊抱怨变成排错材料。",rt="记录环境、操作、实际结果和预期，稳定复现后沿数据路径缩小问题，再做最小修复。",ct="水龙头没水时先检查是否只有这一个龙头没水，再决定查开关还是供水；不是先拆整栋房子。",at=["写清环境、步骤、实际结果、预期结果和错误原文。","修复后复测原案例和邻近边界，留下根因与验证记录。"],lt=[{title:"保留第一次错误",text:"记录所在目录、运行命令、网址、输入与完整错误。页面问题还可以查看浏览器开发者工具的 Console（控制台）与 Network（网络），分别了解脚本错误和请求。截图能补充现象，但文本错误与步骤更便于搜索和复现。日志中可能含隐私或凭据，分享前用占位说明替换秘密。"},{title:"让猜测接受一次检查",text:"“刷新丢了”可能是未保存、读取失败或换了源。一次只检查一个假设：确认是否同一网址，看保存是否抛错，看存储键是否一致。给 Agent 这些证据，请它指出下一项最能区分原因的检查。若同时改十处，即使好了也难以知道原因，还可能引入新错。"},{title:"修复后检查原场景和邻近边界",text:"最小修复之后重走原步骤，再检查相邻情况：普通标题能保存、全空白仍拒绝、坏备份不会覆盖。记录根因、修法、验证和剩余问题。排错不是坚持第一猜测；如果证据不支持它，就换假设。也不要把“吞掉异常”当修好：用户仍应知道数据没有保存。"}],dt={text:"记录环境、操作、实际结果和预期，稳定复现后沿数据路径缩小问题，再做最小修复。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},pt=["写清环境、步骤、实际结果、预期结果和错误原文。","按数据路径提出一个可检验假设，先缩小范围。","修复后复测原案例和邻近边界，留下根因与验证记录。"],mt=[{title:"刷新丢数据",problem:"给 Agent 怎样的排错材料？",steps:["说明网址和浏览器。","记录添加后可见、刷新后空的步骤。","写预期保留和控制台实际错误。"],answer:"环境：本机 http://127.0.0.1:5180。步骤：添加“学 Git”，确认出现，刷新。实际：清单空；预期：保留。控制台错误原文另附。请先区分保存失败、读取失败和同源变化，不直接重写整站。"},{title:"存储被禁止",problem:"保存抛错后，应该只 catch 然后显示成功吗？",steps:["观察数据没有持久保存。","保留之前可靠状态并显示未保存。","恢复可用后重新验证刷新。"],answer:"不能显示已保存。错误处理应告诉用户保存失败，并避免把内存变化当作已持久化成果。本案例写入成功后才更新可见清单，失败会保留原状态。"}],ut=[{claim:"修不好就全量重写。",correction:"先复现并缩小原因，全量重写会丢掉已经验证的行为。"},{claim:"把报错藏起来就稳定了。",correction:"隐藏异常可能静默丢数据；应有可理解反馈。"}],ht=[{id:"debugging-p1",difficulty:2,problem:"补全 bug 报告：保存坏了。",hint:"给四项材料。",answer:"网址与环境、逐步操作、实际/预期、错误原文。",solution:["能让另一人按步骤复现。","不只给一个结论。"]},{id:"debugging-p2",difficulty:2,problem:"换端口后清单空，最先检验什么？",hint:"存储按什么隔离？",answer:"检查源是否变化；不同端口使用不同 localStorage，不自动迁移。",solution:["确认原因再修改。","不要把预期隔离误当作所有保存逻辑损坏。"]},{id:"debugging-p3",difficulty:2,problem:"一口气改五处后好了，有什么不足？",hint:"难确定哪处解决问题。",answer:"根因难确认，其他改动可能有副作用；应缩小差异并分别验证。",solution:["优先能解释的修复。","不能只凭现象暂时消失收工。"]},{id:"debugging-p4",difficulty:2,problem:"修保存后还查什么？",hint:"原场景与相邻错误。",answer:"原刷新步骤、普通添加、空白拒绝、存储失败反馈以及无效恢复不覆盖。",solution:["防止修一处破另一处。","选择与改动相关的边界。"]}],gt={question:"最有用的排错请求是？",choices:["又坏了，你再想想","环境、步骤、实际/预期与错误原文","全部重写"],correctIndex:1,feedback:["没有新的判断依据。","可复现并缩小原因。","尚未定位，改动范围过大。"]},ft={kind:"decision",prediction:"刷新丢失有三个可能原因，怎样减少猜测？",steps:[{question:"刷新前后端口不同。先？",choices:["核对同源存储差异","改所有 JS","隐藏错误"],correctIndex:0,feedback:["端口变化本身可能解释空数据。","没有证据支持全量改。","隐藏信息会妨碍排错。"]},{question:"保存明确抛错。页面应？",choices:["显示成功","显示未保存并保留可靠状态","悄悄清空"],correctIndex:1,feedback:["成功提示与事实矛盾。","反馈失败，避免误导用户。","会损坏已有工作。"]},{question:"一个修复已生效。下一步？",choices:["复测原步骤和相关边界","立刻扩大功能","删复现记录"],correctIndex:0,feedback:["确认修复并观察副作用。","先结束当前问题。","记录能帮助下一次接手。"]}],followUp:"在项目里选择一个可重复的问题，写报告并标明已证实与待确认。"},xt=["testing"],bt=3,kt=["debugging-guess","debugging-evidence"],jt=["mdn-storage","node-test"],vt={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},At={id:et,chapterId:tt,number:st,title:it,subtitle:ot,concept:rt,intuition:ct,objectives:at,body:lt,formalDefinition:dt,workflow:pt,workedExamples:mt,commonMistakes:ut,practice:ht,learningCheck:gt,interactiveVisual:ft,prerequisites:xt,difficulty:bt,misconceptionTags:kt,sources:jt,provenance:vt},wt="git-collaboration",yt="chapter-3",$t="3.2",Et="分支、推送和 PR 各做什么",It="让一项改动有自己的位置和审阅过程。",Ct="分支给改动一条独立记录线，推送更新远端分支，PR 提议把一条分支的改动合入另一条。它们都不自动表示上线。",Dt="在自己的稿件副本上修订，把稿件交出去，再请编辑收录，是不同步骤。",St=["确认工作区状态，为一个具体改动创建分支。","在 PR 说明触发问题、改动结果与验证；区分提交、推送、合并和发布。"],Rt=[{title:"先在小分支上做一件事",text:"工作区干净时，用 git switch -c feature/empty-title 新建并切换分支，再修空白标题。在分支上提交，main 不会因为这次提交自动前进。分支不是完全隔离的文件夹：未提交改动有时会随切换保留，有时阻止切换，所以切换前先 status 并保存好工作。"},{title:"远端是另一个仓库位置",text:"git remote -v 看配置的远端名称与地址，origin 只是常见名称，不是固定服务。git push -u origin feature/empty-title 上传这条分支的提交，并设置上游关联。推送需要对应仓库权限；没有原仓库权限时通常先 fork 到自己的账号，再从 fork 提交 PR。远端凭据应走受支持的登录方式，不写进源码。"},{title:"PR 是带证据的修改建议",text:"PR 中写原来在什么输入下出了问题、现在的行为、改了什么、怎么验证、还有什么限制。评审者可以看差异并要求修改。创建 PR、通过检查和合并是不同状态；合并之后网站是否更新，还取决于仓库的构建与发布配置。有些项目必须手动部署。"},{title:"第一次分享与后续更新",text:"如果从 ZIP 新建仓库，尚没有 origin：在选定托管服务建立你自己的空仓库，复制其地址，再用 git remote add origin 后接该实际地址；不要照抄占位词。已有仓库则用 git clone 后接真实地址，在复制出的目录按 README 运行。更新时先 status，整理好本地工作；git fetch origin 获取远端记录，不自动合入当前分支。已设置上游且工作区干净时，git pull --ff-only 只接受快进更新；若历史分叉会拒绝，先阅读两边改动、按项目约定处理，不改用强制推送掩盖问题。"}],Tt={text:"分支给改动一条独立记录线，推送更新远端分支，PR 提议把一条分支的改动合入另一条。它们都不自动表示上线。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Nt=["确认工作区状态，为一个具体改动创建分支。","核对远端与权限，验证后推送相应分支。","在 PR 说明触发问题、改动结果与验证；区分提交、推送、合并和发布。"],Bt=[{title:"修空白标题后分享",problem:"在已配置 origin 的个人练习仓库里怎样分享分支？",steps:["干净状态新建分支。","改动、运行对应测试、审阅并提交。","核对 remote 后推送，在托管服务打开 PR。"],answer:"前提：工作区干净、文件名匹配项目，origin 已配置为你有权限的目标；PR 在托管服务创建。这些命令不自动创建 PR 或发布网站。",code:`git status
git switch -c feature/empty-title
# 编辑并验证，然后：
git add tasks.mjs tasks.test.mjs
git diff --staged
git commit -m "拒绝全空格计划"
git remote -v
git push -u origin feature/empty-title`},{title:"写一份有用的 PR 描述",problem:"怎么描述空白标题修正？",steps:["写触发输入与旧行为。","写新行为及用户结果。","列实际测试和未覆盖范围。"],answer:"原来提交三个空格会新增不可读空项。现在清理两端空白后拒绝空标题并显示提示。新增空白与普通标题测试；本机 npm test 通过，浏览器已检查提交提示。尚未检查其他浏览器。"}],Mt=[{claim:"推送完成，原项目就上线了。",correction:"推送只更新目标远端分支；还需评审、合并及发布步骤。"},{claim:"PR 就是直接改别人主分支。",correction:"PR 是合并建议，是否接受由项目维护流程决定。"}],qt=[{id:"git-collaboration-p1",difficulty:1,problem:"本地 commit 后朋友能看到吗？",hint:"有没有把记录送到远端？",answer:"通常不能；需推送到朋友可访问的远端，再给出分支或 PR 链接。",solution:["本地与远端独立。","确认链接访问权限。"]},{id:"git-collaboration-p2",difficulty:1,problem:"origin 是不是永远指朋友原仓库？",hint:"它是配置名称。",answer:"不是，git remote -v 才显示实际地址，fork 项目可能指自己的仓库。",solution:["先核对目标。","不要凭名称猜所有者。"]},{id:"git-collaboration-p3",difficulty:2,problem:"main 干净，新建 feature 分支并提交后 main 会自动改变吗？",hint:"分支各指向自己的顶端。",answer:"不会因 feature 的提交自动前进；需要明确合并或更新。",solution:["比较各分支记录。","未提交工作区另有规则，不混同于提交。"]},{id:"git-collaboration-p4",difficulty:2,problem:"PR 合并了但网站没变，需要查什么？",hint:"仓库发布方式。",answer:"查看发布工作流、构建结果、部署目标与对应提交；可能需要维护者手动发布。",solution:["先确认合并版本。","再确认运行网站实际部署了哪个版本。"]}],_t={question:"朋友现在能审阅什么，取决于哪一步？",choices:["只保存在本机","已推送且有可访问 PR","我说已完成"],correctIndex:1,feedback:["本地内容没有共享。","共享的提交与差异可被审阅。","口头结论没有给出材料。"]},Gt={kind:"git",prediction:"分支推送了，正式网站一定变了吗？",steps:[{question:"feature 分支刚有新提交，main 会？",choices:["自动相同","保留原顶端，直到明确更新","自动删除"],correctIndex:1,feedback:["两条记录线不自动一起前进。","提交发生在当前 feature 分支。","提交不会自动删 main。"]},{question:"push 成功表示？",choices:["远端分支已更新","PR 已合并","网站已部署"],correctIndex:0,feedback:["它把本地提交送到目标远端分支。","合并是另一操作。","部署由项目配置与流程决定。"]},{question:"PR 最有用的说明是？",choices:["代码很棒","触发场景、新行为和验证结果","模型名称就足够"],correctIndex:1,feedback:["无法帮助评审者判断结果。","提供可复查的修改依据。","生成工具不能证明改动正确。"]}],followUp:"用练习台建分支、提交、推送，比较 main、本地 feature 与远端位置。"},Pt=["git-snapshot"],Ut=2,Lt=["git-collaboration-guess","git-collaboration-evidence"],Ht=["git-branch","git-push","github-pr","git-fetch","git-pull"],zt={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Ot={id:wt,chapterId:yt,number:$t,title:Et,subtitle:It,concept:Ct,intuition:Dt,objectives:St,body:Rt,formalDefinition:Tt,workflow:Nt,workedExamples:Bt,commonMistakes:Mt,practice:qt,learningCheck:_t,interactiveVisual:Gt,prerequisites:Pt,difficulty:Ut,misconceptionTags:Lt,sources:Ht,provenance:zt},Vt="git-recovery",Jt="chapter-3",Ft="3.3",Wt="改错时先分清要撤销什么",Yt="不要把所有撤销都交给一个危险命令。",Kt="撤销前先区分取消暂存、丢弃工作区改动、撤销已提交变化和处理冲突，选择对应动作。",Xt="把信封里的稿件拿出来、丢掉桌面草稿、再寄一封更正信，代价不同。",Zt=["先查看工作区、暂存区和日志，确认要撤销哪种状态。","撤销或解决冲突后重新读差异并验证，记录发生了什么。"],Qt=[{title:"先保存证据，别急着清空",text:"先 git status，看 git diff 和 git diff --staged。想取消某文件暂存而保留编辑，用 git restore --staged README.md。想丢弃工作区相对暂存区的改动，git restore README.md 会覆盖那些编辑，应确认内容已另行保存且确实不要。Git 不保证找回从未记录的草稿；不要让 Agent 遇错就 reset --hard 或 clean -fd。"},{title:"已分享的记录用更正提交",text:"对于已提交并分享的普通提交，通常用 git revert 指定提交生成反向变化的新提交，保留历史。先保证工作区干净并识别正确提交。revert 也可能冲突，需要解决；撤销合并提交更复杂，本书不展开。暂时切走时可用 stash 保存，默认不含未跟踪文件；-u 才包含这类文件，应用回来也可能冲突，不是永久备份。"},{title:"冲突需要理解两边意图",text:"两条分支对同一段做了不同修改，Git 可能无法自动决定结果。冲突标记展示两边内容，你要回看需求、读取两边意图、写成最终内容，移除标记，再测试、暂存和完成合并。不要只让 Agent 随机选“我们的”或“他们的”。暂不继续可按当前操作使用 merge --abort 或 revert --abort；先查看状态，避免用错上下文。"}],ns={text:"撤销前先区分取消暂存、丢弃工作区改动、撤销已提交变化和处理冲突，选择对应动作。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},es=["先查看工作区、暂存区和日志，确认要撤销哪种状态。","保存需要保留的内容，再选择影响最小的对应操作。","撤销或解决冲突后重新读差异并验证，记录发生了什么。"],ts=[{title:"只想取消暂存",problem:"README 改动还要保留，但这次不提交。",steps:["用 status 确认它已暂存。","使用 --staged，避免丢弃工作区编辑。","再看状态与文件确认编辑仍在。"],answer:"取消暂存不等于删掉编辑；在练习台对比普通 restore 的不同结果。仅在已有提交的练习仓库里操作对应文件。",code:`git restore --staged README.md
git status
git diff`},{title:"合并中的标题限制冲突",problem:"一边写 80、一边写 100，能随便保留任一边吗？",steps:["查当前约定到底是 80 还是新要求 100。","同步规则、提示与边界测试。","移除冲突标记，测试后完成合并。"],answer:"若尚未确认改变要求，先询问或回看需求；不能把“没有冲突标记”当作正确。最后内容必须与已确认限制一致，80/81 或 100/101 的边界应跟着规则走。"}],ss=[{claim:"撤销命令肯定都能找回。",correction:"从未记录的工作区编辑可能无法恢复；先检查与保存。"},{claim:"冲突解决就是删除几行符号。",correction:"符号消失只说明文本可合并，还需判断最终行为是否符合需求。"}],is=[{id:"git-recovery-p1",difficulty:1,problem:"取消暂存又保留编辑，应选什么？",hint:"目标只影响暂存区。",answer:"git restore --staged README.md。",solution:["暂存回到 HEAD 对应内容。","工作区编辑保留，再用 status 检查。"]},{id:"git-recovery-p2",difficulty:2,problem:"普通 git restore README.md 从哪里取内容？",hint:"默认不是远端。",answer:"默认从暂存区恢复工作区，丢掉该文件未暂存的修改。",solution:["比较暂存与工作区。","若需要原草稿，先另存再操作。"]},{id:"git-recovery-p3",difficulty:2,problem:"已推送的普通坏提交，希望保留历史，怎么处理？",hint:"增加反向记录。",answer:"干净工作区中识别正确提交，用 git revert 生成撤销提交，解决可能冲突并验证后再推送。",solution:["不随意改写已分享历史。","普通提交与合并提交规则不同。"]},{id:"git-recovery-p4",difficulty:2,problem:"stash 默认能保存新建未跟踪文件吗？",hint:"区分 tracked 和 untracked。",answer:"默认不保存；需要明确 -u 才包括未跟踪文件，仍不替代永久备份。",solution:["先 status 查看文件类别。","恢复也可能冲突，先保留 stash 与记录。"]}],os={question:"只是取消暂存、保留编辑，选哪个？",choices:["git restore --staged README.md","git restore README.md","删除整个目录"],correctIndex:0,feedback:["只把暂存区恢复到 HEAD 内容。","会覆盖未暂存编辑，不符合保留目标。","破坏范围远大于目标。"]},rs={kind:"git",prediction:"暂存 v2、工作区 v3，两种 restore 的结果相同吗？",steps:[{question:"希望 v3 留在文件，先取消暂存。",choices:["restore --staged","restore 文件","reset --hard"],correctIndex:0,feedback:["只动暂存，保留工作区 v3。","会让工作区回到暂存内容。","会丢弃更大范围的未保存变化。"]},{question:"确实不要 v3，暂存 v2 已确认保存。普通 restore 后？",choices:["工作区 v2","工作区 v1","远端 v3"],correctIndex:0,feedback:["默认从暂存区恢复工作区。","只有暂存也为 v1 才会得到 v1。","此操作不上传远端。"]},{question:"AI 说“先清空所有改动再排错”。",choices:["要求它先读状态和差异，保存有用工作","直接执行","删除测试"],correctIndex:0,feedback:["先弄清哪些工作会丢失。","可能丢掉从未记录的内容。","测试不是错误证据的替代目标。"]}],followUp:"在练习台分别使用取消暂存与丢弃编辑，写下每列变化。"},cs=["git-collaboration"],as=2,ls=["git-recovery-guess","git-recovery-evidence"],ds=["git-restore","git-revert","git-stash","git-branch"],ps={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},ms={id:Vt,chapterId:Jt,number:Ft,title:Wt,subtitle:Yt,concept:Kt,intuition:Xt,objectives:Zt,body:Qt,formalDefinition:ns,workflow:es,workedExamples:ts,commonMistakes:ss,practice:is,learningCheck:os,interactiveVisual:rs,prerequisites:cs,difficulty:as,misconceptionTags:ls,sources:ds,provenance:ps},us="git-snapshot",hs="chapter-3",gs="3.1",fs="保存文件不等于 Git 提交",xs="用工作区、暂存区、提交三个位置理解记录。",bs="编辑保存改变工作区，git add 选择当时的内容放入暂存区，git commit 把暂存内容记录为本地提交。",ks="桌面上的草稿、装进信封的版本、已经寄出的信不是同一个位置；继续改草稿不会自动改信封。",js=["用 status 确认分支及文件状态，阅读相关 diff。","完成对应验证后创建有明确目的的本地提交。"],vs=[{title:"先知道在哪个仓库",text:"Git 是版本记录工具，GitHub 是可以托管仓库的服务。仓库记录文件历史。新练习目录可用 git init -b main 建立仓库；复制别人的项目通常用 git clone 获取仓库，别在已有仓库内再随意 init。先用 git status 看当前分支和改动。提交身份可在练习仓库用 git config user.name 和 user.email 设置，只影响这里；邮箱可能随公开提交被看到。"},{title:"三处内容可以不同",text:"工作区是现在编辑的文件；暂存区是你准备放进下次提交的内容；HEAD 指当前检出的提交，通常是当前分支顶端。git add README.md 后继续编辑 README，暂存区仍保留刚才 add 的版本。git diff 看工作区与暂存区之差；git diff --staged 看暂存区与 HEAD 之差。新建且未暂存的文件通常不在普通 diff 中，要一起看 status 和文件。"},{title:"每次提交只说明一个目的",text:"读过差异、完成本次检查后，明确 add 需要的文件，再 commit。提交说明写为什么改，例如“拒绝全空格计划”，而不是“改了很多”。.gitignore 排除不应纳入的新文件，例如依赖目录和本地秘密文件；它不能移除已经跟踪的内容，更不能清除历史中已泄露的秘密。"}],As={text:"编辑保存改变工作区，git add 选择当时的内容放入暂存区，git commit 把暂存内容记录为本地提交。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},ws=["用 status 确认分支及文件状态，阅读相关 diff。","只暂存本次需要的文件，再检查 staged diff。","完成对应验证后创建有明确目的的本地提交。"],ys=[{title:"第一次练习提交",problem:"在新建 learning-list 练习目录里记录 README。",steps:["先建立 main 仓库并设置此仓库身份。","保存 README.md，检查并暂存。","阅读暂存差异后提交，查看日志。"],answer:"只在新的练习仓库执行 init；已有项目从 status 开始。README.md 需要先创建并保存，邮箱使用你选择公开的提交地址。",code:`git init -b main
git config user.name "你的名字"
git config user.email "你选择公开的邮箱"
git status
git add README.md
git diff --staged
git commit -m "说明学习清单的运行方式"
git log --oneline`},{title:"解释暂存后又编辑",problem:"文件 v1 已提交；编辑成 v2 并 add；再编辑成 v3。不再次 add，commit 记录什么？",steps:["HEAD 是 v1，暂存区是 v2，工作区是 v3。","普通 diff 显示 v2 到 v3。","staged diff 显示 v1 到 v2。"],answer:"commit 记录 v2，工作区仍为 v3 且有未暂存改动。若本次要提交 v3，先审阅再 add；不要把 commit 想成自动抓取所有当前文件。"}],$s=[{claim:"点保存就有可回退的提交了。",correction:"编辑器保存只写工作区，还需要明确暂存与提交。"},{claim:"git add . 总是最简单也最合适。",correction:"它可能包含无关文件；先查看状态，初学时明确列文件。"}],Es=[{id:"git-snapshot-p1",difficulty:2,problem:"工作区 v3、暂存 v2、HEAD v1，不再 add 的提交结果？",hint:"commit 读取哪个位置？",answer:"新 HEAD 为 v2；工作区仍 v3，未暂存差异仍存在。",solution:["暂存内容进入提交。","提交不自动覆盖你的工作区编辑。"]},{id:"git-snapshot-p2",difficulty:2,problem:"普通 diff 为空，是否一定没有可提交内容？",hint:"查看暂存区与 HEAD。",answer:"不一定，改动可能已暂存；还要看 git diff --staged 与 status。",solution:["比较对象不同。","新文件也要结合 status 判断。"]},{id:"git-snapshot-p3",difficulty:1,problem:"只提交说明文件，应该怎样 add？",hint:"使用明确路径。",answer:"git add README.md，再 git diff --staged 检查没有别的内容。",solution:["避免无关改动。","检查暂存范围后再提交。"]},{id:"git-snapshot-p4",difficulty:2,problem:".env 已经进入公开历史，加入 ignore 是否解决泄露？",hint:"历史仍在。",answer:"没有。先撤销或轮换泄露凭据，再按维护流程清理跟踪与历史。",solution:["停止使用旧秘密是优先动作。","ignore 只防止符合规则的未跟踪文件被正常添加。"]}],Is={question:"add 后又改文件，commit 默认记录？",choices:["最后保存的所有内容","暂存时的内容","GitHub 上的版本"],correctIndex:1,feedback:["commit 不自动重新 add。","暂存区是下次提交的来源。","本地提交不读取远端网页内容。"]},Cs={kind:"git",prediction:"先预测：暂存 v2 后编辑成 v3，再提交会发生什么？",steps:[{question:"哪个命令先了解当前情况？",choices:["git status","git push --force","删除 .git"],correctIndex:0,feedback:["先看分支和改动状态。","推送不能解释本地暂存情况。","删除记录会失去历史。"]},{question:"暂存 v2 后工作区 v3，普通 diff 比较？",choices:["v1 与 v2","v2 与 v3","远端与 v3"],correctIndex:1,feedback:["这是 staged diff 的比较。","普通 diff 比较暂存和工作区。","远端不是默认比较对象。"]},{question:"现在 commit，没有再次 add，提交保存？",choices:["v3","v2","v1"],correctIndex:1,feedback:["v3 没进入暂存区。","提交记录暂存的 v2。","v1 是提交前 HEAD。"]}],followUp:"在练习台重现这个过程，观察三列内容和两种差异。"},Ds=["run-environment"],Ss=2,Rs=["git-snapshot-guess","git-snapshot-evidence"],Ts=["git-record","git-diff","secrets","git-init"],Ns={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Bs={id:us,chapterId:hs,number:gs,title:fs,subtitle:xs,concept:bs,intuition:ks,objectives:js,body:vs,formalDefinition:As,workflow:ws,workedExamples:ys,commonMistakes:$s,practice:Es,learningCheck:Is,interactiveVisual:Cs,prerequisites:Ds,difficulty:Ss,misconceptionTags:Rs,sources:Ts,provenance:Ns},Ms="project-map",qs="chapter-2",_s="2.1",Gs="看懂文件夹里的分工",Ps="先找入口，再看每个文件为什么存在。",Us="项目是一组协作的文件。读 README 找运行方法，再沿入口找到界面、逻辑、配置和测试。",Ls="餐馆有菜单、厨房和账本；把它们全部堆在一张纸上，会很难修改。",Hs=["先读 README 和配置，确认入口与运行命令。","沿一个用户动作找到涉及的文件，不随意删除陌生文件。"],zs=[{title:"从说明文件开始",text:"打开一个陌生项目，先找 README。它应说明用途、运行步骤和限制。再看 package.json：这是 Node 项目的配置，scripts 是命令的短名字，dependencies 是需要安装的外部包。本案例没有第三方依赖；不要因此断言所有网页项目都不需要安装。"},{title:"沿入口看四类文件",text:"index.html 给浏览器页面结构，并引用 style.css 和 app.mjs。CSS 改外观，app.mjs 把按钮和数据连起来，tasks.mjs 保存添加、切换、删除等规则。tasks.test.mjs 检查规则。server.mjs 只在本机提供这些文件，README 解释怎么运行。先能指出责任，再考虑框架。"},{title:"读到能解释行为的程度",text:"你暂时不用理解每个语法细节，但要知道点击添加时谁接收输入、谁验证、谁保存、谁画页面。看到不懂的一行可以让 Agent 用具体输入解释，再自己对照文件。问“这一行删除前为什么要检查 ID？”比“把整个项目讲一下”更容易获得可验证回答。"}],Os={text:"项目是一组协作的文件。读 README 找运行方法，再沿入口找到界面、逻辑、配置和测试。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Vs=["先读 README 和配置，确认入口与运行命令。","把界面、逻辑、测试和工具文件分别指出来。","沿一个用户动作找到涉及的文件，不随意删除陌生文件。"],Js=[{title:"只改外观",problem:"希望按钮更大，优先看哪些文件？",steps:["找 CSS 中 button 的规则。","确认 HTML/JS 给按钮的结构与类名。","改后用窄屏和键盘检查。"],answer:"主要看 style.css；必要时核对 index.html 和 app.mjs。不要为了按钮大小去改数据结构或删除测试。"},{title:"只改标题限制",problem:"标题上限从 80 改为 100，影响哪里？",steps:["tasks.mjs 存在校验常量。","测试中存在 80 与 81 的边界。","说明与输入反馈也写了上限。"],answer:"先确认需求，然后同步修改规则、边界测试和 README；只改页面提示会让真正校验仍停在 80。"}],Fs=[{claim:"看不懂的文件删掉就清爽了。",correction:"先查引用和用途，配置、锁文件与测试可能是运行必需。"},{claim:"AI 能改就不用知道入口。",correction:"理解入口能让你判断改动位置是否符合目标，也能帮助排错。"}],Ws=[{id:"project-map-p1",difficulty:1,problem:"CSS 和 tasks.mjs 分别管什么？",hint:"一个管外观，一个管数据规则。",answer:"CSS 管样式，tasks.mjs 管添加、切换、删除和备份格式。",solution:["按职责而非扩展名记忆功能。","规则改变应有测试，样式改变需看页面。"]},{id:"project-map-p2",difficulty:1,problem:"如何查 npm start 实际执行什么？",hint:"看配置里的 scripts。",answer:"读取 package.json 的 scripts.start；本项目是 node server.mjs。",solution:["命令别名并不固定。","不要假设所有项目 start 都相同。"]},{id:"project-map-p3",difficulty:1,problem:"下载了项目，却找不到打开方式，第一步？",hint:"先找说明，不猜命令。",answer:"读 README，核对工具版本和所在目录；缺失时请 Agent 查文件并补说明。",solution:["依据项目事实。","避免凭空运行不相关的命令。"]},{id:"project-map-p4",difficulty:2,problem:"标题限制改了，为什么测试也可能要改？",hint:"测试约定了边界。",answer:"如果新需求确实改变上限，需要把正常和拒绝边界一起更新；不能只删失败断言。",solution:["先确认标准改变。","让测试反映新规则，保留拒绝输入的能力。"]}],Ys={question:"想改按钮颜色，第一处应看？",choices:["style.css","所有文件全部重写","备份数据"],correctIndex:0,feedback:["样式职责与目标对应。","扩大改动会让审阅更困难。","数据和颜色无关。"]},Ks={kind:"decision",prediction:"改动目标只是一处颜色，Agent 的文件列表合理吗？",steps:[{question:"计划先读 README 和 CSS。",choices:["合理，知道运行和样式位置","浪费时间","直接删除配置"],correctIndex:0,feedback:["先理解入口和样式有助于小范围修改。","这能避免改错地方。","配置可能是运行必要部分。"]},{question:"它还要重写 tasks.mjs。",choices:["要求说明与颜色的关系","直接接受","删测试配合"],correctIndex:0,feedback:["无关逻辑变更应解释或移除。","可能改变数据行为。","削弱检查会掩盖错误。"]},{question:"最后交付什么证据？",choices:["“已改好”","修改文件与窄屏、键盘检查结果","模型很有自信"],correctIndex:1,feedback:["缺少实际证据。","它们对应改动范围与体验标准。","自信程度不能替代页面检查。"]}],followUp:"在项目附录里画出文件分工图，并指出一次添加涉及哪些文件。"},Xs=["acceptance"],Zs=2,Qs=["project-map-guess","project-map-evidence"],ni=["mdn-start","node-test"],ei={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},ti={id:Ms,chapterId:qs,number:_s,title:Gs,subtitle:Ps,concept:Us,intuition:Ls,objectives:Hs,body:zs,formalDefinition:Os,workflow:Vs,workedExamples:Js,commonMistakes:Fs,practice:Ws,learningCheck:Ys,interactiveVisual:Ks,prerequisites:Xs,difficulty:Zs,misconceptionTags:Qs,sources:ni,provenance:ei},si="release",ii="chapter-6",oi="6.2",ri="交付之前查的是哪个版本",ci="本机成功、构建成功和公开上线分别验证。",ai="交付要提供可运行步骤、已验证版本、测试证据、限制与恢复办法；上线后在真实网址再检查。",li="样品在工作室能用，不代表送到客户现场就能用；要知道送去的是哪一版。",di=["准备运行说明、版本、验证结果与已知限制。","留下上个可用版本与数据恢复说明，区分代码回退和数据迁移。"],pi=[{title:"先把交付材料凑齐",text:"README 应让另一人知道工具要求、运行命令、功能范围和限制。提交记录与版本说明对应本次成果，附实际测试结果。依赖项目按锁文件安装并跑构建；本案例无需打包构建，只需要发布 HTML、CSS、app.mjs 和 tasks.mjs 四个静态文件。测试和本地服务器文件不是用户页面入口。"},{title:"公开网址需要重新验收",text:"开发服务器只在本机运行。部署是把可供用户运行的产物放到指定服务。访问公开网址后检查文件请求、页面动作、键盘、窄屏和保存；本机 localhost 的清单不会自动出现在新源。多种托管方式有不同路径与配置，先读目标项目部署说明，不在本教材替读者注册账号或付费。"},{title:"回退代码与回退数据分开",text:"记录上一个可用的代码版本和发布方式；失败时恢复可用产物再验证。代码回退不必然能读新版数据，格式变更还需备份与迁移计划。本案例不做格式升级，仍应明确恢复会替换数据。发布后保留错误反馈渠道，不把一次上线当成永久完工。"}],mi={text:"交付要提供可运行步骤、已验证版本、测试证据、限制与恢复办法；上线后在真实网址再检查。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},ui=["准备运行说明、版本、验证结果与已知限制。","核对发布产物和目标，授权后再发布并在真实网址验收。","留下上个可用版本与数据恢复说明，区分代码回退和数据迁移。"],hi=[{title:"交给朋友运行",problem:"交付文件除了源码，还需要什么？",steps:["写工具版本与所在目录。","列测试、启动和网址。","说明数据本地、不同步和如何备份。"],answer:"README：Node.js 22.12+；项目目录 npm test，再 npm start；访问本地 5180。说明当前版本、实际验证结果、备份恢复、未检查环境。朋友照着运行后再记录他的结果。"},{title:"公开后数据空了",problem:"为什么本机有清单，公开站点却为空？",steps:["比较两个网址的源。","它们使用不同 localStorage。","通过有效备份确认恢复而非假装自动迁移。"],answer:"这是本地数据位置改变的预期结果。先导出本机数据，再在目标网址按恢复说明校验和确认。不公开发布用户备份文件来“解决”迁移。"}],gi=[{claim:"本机打开过就可以宣称上线验证了。",correction:"必须区分本机与真实部署地址，记录各自检查结果。"},{claim:"旧代码能直接修复所有新数据问题。",correction:"格式可能不兼容，代码与数据有各自的恢复流程。"}],fi=[{id:"release-p1",difficulty:1,problem:"本案例要发布哪些页面文件？",hint:"服务器和测试不是页面运行所需。",answer:"index.html、style.css、app.mjs、tasks.mjs；保留相对目录关系。",solution:["浏览器加载入口和引用资源。","托管服务提供文件，本地 server.mjs 不成为业务后端。"]},{id:"release-p2",difficulty:2,problem:"公网与本机测试应分别记录什么？",hint:"环境和实际版本。",answer:"网址、部署/提交版本、检查动作、结果与未验证项。",solution:["知道验证的是哪份产物。","不能把本机结果复制成公网证据。"]},{id:"release-p3",difficulty:3,problem:"代码回退后新备份读不进，说明什么？",hint:"程序与格式可能不兼容。",answer:"还需要数据版本处理或恢复兼容备份；不能只回退代码声称已恢复。",solution:["区分代码状态和数据状态。","先保留当前数据再按明确流程处理。"]},{id:"release-p4",difficulty:2,problem:"发布前最后一项关键确认是什么？",hint:"目标和后果。",answer:"确认发布授权、目标仓库或网址、产物版本与不含秘密，准备恢复办法。",solution:["不是重新确认所有可逆小编辑。","公开、真实数据操作有独立后果。"]}],xi={question:"哪项能支持“公开版本已验证”？",choices:["本机截图","真实网址及对应版本的检查记录","PR 标题"],correctIndex:1,feedback:["不能支持公网运行结论。","证据对应实际部署。","PR 不说明是否已上线。"]},bi={kind:"decision",prediction:"项目交出去了，哪些状态不能混为一谈？",steps:[{question:"npm test 通过但页面未打开。",choices:["全站已验收","规则已验证，页面待查","网站已发布"],correctIndex:1,feedback:["规则测试不覆盖界面。","证据范围准确。","测试不会自动部署。"]},{question:"代码已合并。正式网址是否更新？",choices:["一定更新","查部署流程与当前版本","所有旧数据自动迁移"],correctIndex:1,feedback:["取决于发布配置。","核对实际产物后才能判断。","数据迁移是另一问题。"]},{question:"新版本改变数据格式。回退前应？",choices:["只回退代码","保留数据备份并检查兼容/迁移方案","清空所有数据"],correctIndex:1,feedback:["旧程序可能无法读新版数据。","把恢复后果纳入计划。","会扩大损失。"]}],followUp:"为自己的项目写一张交付清单，明确本机、合并、发布分别完成了什么。"},ki=["data-design"],ji=4,vi=["release-guess","release-evidence"],Ai=["mdn-start","mdn-storage","github-pr"],wi={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},yi={id:si,chapterId:ii,number:oi,title:ri,subtitle:ci,concept:ai,intuition:li,objectives:di,body:pi,formalDefinition:mi,workflow:ui,workedExamples:hi,commonMistakes:gi,practice:fi,learningCheck:xi,interactiveVisual:bi,prerequisites:ki,difficulty:ji,misconceptionTags:vi,sources:Ai,provenance:wi},$i="review-changes",Ei="chapter-4",Ii="4.3",Ci="用小改动和证据结束一次协作",Di="从“AI 说完成”走到“我知道为什么接受”。",Si="审阅差异、对照验收并查看验证证据，决定接受、修正或拆回更小任务。",Ri="装修验收时你会看实际房间，不只看施工队发来的“已完成”。",Ti=["阅读文件列表与关键差异，解释它们和目标的关系。","接受后记录小步提交和接手说明；有问题则回传具体证据。"],Ni=[{title:"读差异从问题出发",text:"先看改了哪些文件，再看关键差异。增加标题校验，应能找到清理、拒绝和错误反馈；测试应覆盖对应案例。如果同时出现新框架、大量重命名和锁文件变动，要求解释为什么是本次必要范围。你不懂某段语法时，要求用具体输入描述分支和结果，再自己试验。"},{title:"测试不能迁就错误实现",text:"如果上限仍是 80，而 Agent 把 81 的拒绝测试删除来获得绿色，这不是修复。标准确实改变时可以更新测试，但需要把新边界完整补上。避免反复发“还是不行，再修”：把输入、实际结果、预期结果和复现步骤给出去，让下一次修改有新的证据。"},{title:"结束时留下接手记录",text:"接受后做目的明确的提交，记录做了什么、运行了什么、还没验证什么。下一会话读取这些材料而非重复猜你意图。每完成一个小任务更新清单：已验收、待检查、后续候选。读过、测试过和上线过分别记录，不能用一个“完成”掩盖所有状态。"}],Bi={text:"审阅差异、对照验收并查看验证证据，决定接受、修正或拆回更小任务。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Mi=["阅读文件列表与关键差异，解释它们和目标的关系。","按预先写的验收操作，核对真实测试及未验证项。","接受后记录小步提交和接手说明；有问题则回传具体证据。"],qi=[{title:"审阅空白标题修复",problem:"差异多出一个大型依赖，合理吗？",steps:["检查功能是否可由 trim 与校验完成。","问新依赖的必要性及维护成本。","若无必要，要求移除无关变更再验证。"],answer:"当前规则可以在现有函数中完成。请说明新增依赖解决的具体问题；若没有必要，保持原依赖结构。重新运行原有测试，报告结果，而不是为了少文件删测试。"},{title:"给出有用的修正消息",problem:"刷新后任务又不见了，怎样反馈？",steps:["写输入与操作顺序。","写实际与预期。","提供网址、控制台信息与已测范围。"],answer:"在 http://127.0.0.1:5180 输入“学 Git”，添加后出现；刷新后变空。预期刷新保留。请检查保存/读取路径与错误处理，先解释原因再做最小修复，不新增同步服务。"}],_i=[{claim:"看不懂 diff 就直接全部接受。",correction:"选关键行为，用具体输入让 Agent 解释，再自己核对。"},{claim:"测试失败就删掉那条测试。",correction:"先判断是实现违反需求还是标准已被确认修改；不能只追求绿色。"}],Gi=[{id:"review-changes-p1",difficulty:2,problem:"改动 20 个文件但目标是颜色，先做什么？",hint:"范围是否对应目的？",answer:"查看文件列表与差异，要求说明无关变更，拆回样式必要范围。",solution:["缩小审阅对象。","不是文件多一定错，而是每项都应有理由。"]},{id:"review-changes-p2",difficulty:2,problem:"如何让 Agent 解释看不懂的条件语句？",hint:"提供一个具体输入。",answer:"用三个空格和普通标题分别走这段分支，指出每步值和最终是否新增。",solution:["让解释能被运行验证。","不要只接受抽象评价。"]},{id:"review-changes-p3",difficulty:2,problem:"标准是 80，上限测试被删，能接受吗？",hint:"标准有没有明确变更？",answer:"不能仅因全绿接受；恢复边界覆盖并修实现，除非先确认新标准且补齐新测试。",solution:["对照原验收。","测试是证据，不是结果装饰。"]},{id:"review-changes-p4",difficulty:2,problem:"写一条接手记录。",hint:"说明已做、已测、未测。",answer:"已修空白输入并提交；npm test 通过，页面空白提示已查；其他浏览器与多标签页并发未验证。",solution:["明确证据范围。","下一任务可据此继续。"]}],Pi={question:"哪项能支持你接受改动？",choices:["Agent 自信","相关 diff、验收结果和真实测试","代码行数更多"],correctIndex:1,feedback:["信心不能替代验证。","能对照目标复查。","行数与用户结果无直接关系。"]},Ui={kind:"prompt",prediction:"测试通过了，是否还需看差异？",steps:[{question:"为颜色修改加入数据迁移。",choices:["先要求解释必要性","立刻接受","不看文件列表"],correctIndex:0,feedback:["数据变化与样式目标关系不明。","可能无意改变已有数据。","你会失去范围判断。"]},{question:"测试被删但绿色。",choices:["已完成","对照验收恢复必要覆盖","增加模型赞美"],correctIndex:1,feedback:["绿色可能来自降低标准。","标准与证据都要保留。","赞美不能产生正确行为。"]},{question:"你发现刷新错误，怎样继续？",choices:["重复“你再想想”","给复现步骤、实际与预期","推倒重写"],correctIndex:1,feedback:["没有新增排错证据。","让后续修改针对具体问题。","重写前应先定位。"]}],followUp:"在练习台填写一张修正任务卡，用证据替代“还是不行”。"},Li=["task-prompts"],Hi=3,zi=["review-changes-guess","review-changes-evidence"],Oi=["git-diff","node-test"],Vi={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Ji={goal:"定位并修复刷新后清单丢失，保持原范围。",context:"http://127.0.0.1:5180 添加“学 Git”后出现，刷新后变空。预期刷新保留。错误原文由我另附。",scope:"先检查保存/读取与同源，不重写全站，不新增服务，不覆盖旧数据。",acceptance:"同一网址普通添加刷新保留；全空格仍拒绝；写入失败明确提示未保存。",verification:"重走复现步骤、跑规则测试、查相关错误；无法执行时说明。",delivery:"根因与证据、最小修复、真实验证、剩余风险。"},Fi={id:$i,chapterId:Ei,number:Ii,title:Ci,subtitle:Di,concept:Si,intuition:Ri,objectives:Ti,body:Ni,formalDefinition:Bi,workflow:Mi,workedExamples:qi,commonMistakes:_i,practice:Gi,learningCheck:Pi,interactiveVisual:Ui,prerequisites:Li,difficulty:Hi,misconceptionTags:zi,sources:Oi,provenance:Vi,promptTemplate:Ji},Wi="run-environment",Yi="chapter-2",Ki="2.3",Xi="让项目在本机跑起来",Zi="分清终端、目录、运行工具与依赖。",Qi="按项目说明，在正确目录用合适的工具执行命令；读懂报错，再决定下一步。",no="菜谱写“放入烤箱”时，先确认你拿的是烤箱、温度合适，而且放的是这道菜。",eo=["进入独立练习目录，核对 README 和工具版本。","保留错误信息并解释它发生在环境、安装还是运行阶段。"],to=[{title:"终端是输入命令的地方",text:"编辑器改文件；终端执行命令。先建立独立练习目录，把附录项目文件按名字保存进去，在编辑器打开这个目录，再打开集成终端。许多编辑器让终端从所打开目录开始；不确定时看路径。cd 表示进入目录，例如 cd learning-list；带空格的路径需要引号。错误目录会让命令找不到配置或文件。"},{title:"先检查工具再运行",text:"安装 Git 和 Node.js 时使用本节来源中的官方入口，按自己的系统选择安装方式。终端输入 git --version、node --version 和 npm --version，确认能找到工具。本案例要求 Node.js 22.12+，有 npm start 和 npm test。进入项目目录后先测试，再启动；看到本地网址后在浏览器打开，终端要保持运行，Ctrl+C 停止服务器。"},{title:"依赖不是遇错就乱装",text:"有 dependencies 的 Node 项目通常要安装外部包。若 README 要求且已有匹配的 package-lock.json，npm ci 会按锁文件安装并在不一致时失败；它会重建 node_modules。本案例无外部依赖，不需要安装。遇到报错保留原文与执行目录，不要让 Agent 无理由删除锁文件、降级所有包或反复复制陌生脚本。"}],so={text:"按项目说明，在正确目录用合适的工具执行命令；读懂报错，再决定下一步。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},io=["进入独立练习目录，核对 README 和工具版本。","执行该项目的测试与启动命令，观察实际结果。","保留错误信息并解释它发生在环境、安装还是运行阶段。"],oo=[{title:"运行贯穿项目",problem:"怎样启动学习清单？",steps:["把项目文件保存到 learning-list 并在此目录开终端。","node --version 确认版本，npm test 验证规则。","npm start 后打开本地网址，终端保持运行。"],answer:"预期：测试通过；终端显示 http://127.0.0.1:5180。浏览器打开该网址，终端保持运行，Ctrl+C 停止。本案例无外部包，无需 npm install。",code:`node --version
npm test
npm start`},{title:"处理端口被占用",problem:"看到 EADDRINUSE，应该升级全部依赖吗？",steps:["记录命令 npm start 与完整错误。","这是地址/端口已经被占用。","找到自己的旧服务器并停止，或明确修改端口与访问地址。"],answer:"先在旧终端 Ctrl+C 停止自己启动的服务，再启动。不要随意杀未知进程。换端口后属于另一个源，原 localStorage 数据不会自动出现在新端口。"}],ro=[{claim:"所有项目都输入同一组命令。",correction:"命令由项目配置与 README 决定；先查再运行。"},{claim:"报错时删锁文件最省事。",correction:"锁文件支持可重复安装，删除会改变依赖版本；先查具体原因。"}],co=[{id:"run-environment-p1",difficulty:1,problem:"终端找不到 package.json，先检查什么？",hint:"文件在哪，终端在哪？",answer:"检查当前目录是否项目根目录，配置是否保存到正确名字和位置。",solution:["先验证路径。","不要在错误目录随机安装包。"]},{id:"run-environment-p2",difficulty:1,problem:"node --version 不存在怎么办？",hint:"先解决工具可用性。",answer:"按 Node 官网安装说明安装或检查 PATH，然后重开终端再核对版本。",solution:["工具缺失不是业务代码错误。","先使运行环境满足 README。"]},{id:"run-environment-p3",difficulty:2,problem:"npm ci 因锁文件不匹配失败，应怎么办？",hint:"失败指出了配置与记录不一致。",answer:"核对分支、package.json 和锁文件；按维护者约定更新并审阅依赖变化，不直接删锁文件绕过。",solution:["确认失败原因。","变更依赖时一起提交匹配的文件。"]},{id:"run-environment-p4",difficulty:1,problem:"本机网址关闭终端后打不开，为什么？",hint:"谁在提供文件？",answer:"本地服务器已停止；重新在正确目录启动。文件保存与服务运行是两个状态。",solution:["观察终端进程。","启动成功后再在浏览器访问。"]}],ao={question:"EADDRINUSE 最直接表示什么？",choices:["所有代码都坏了","请求监听的地址或端口被占用","Git 提交失败"],correctIndex:1,feedback:["错误尚未指向业务代码。","先检查自己的旧服务器。","它属于运行环境，与 Git 提交不同。"]},lo={kind:"decision",prediction:"启动失败时，哪个下一步能减少猜测？",steps:[{question:"找不到 package.json。",choices:["核对目录和文件位置","删所有测试","改按钮颜色"],correctIndex:0,feedback:["命令很可能在错误目录运行。","测试与配置位置无关。","样式不会影响命令找到文件。"]},{question:"端口 5180 已占用。",choices:["随便杀系统进程","检查并停止自己的旧服务","重新安装全部包"],correctIndex:1,feedback:["不知道用途时杀进程会破坏其他工作。","先处理已经运行的同一项目。","依赖安装不能释放端口。"]},{question:"现在页面能打开，你写什么记录？",choices:["环境版本、命令、网址和结果","只有“成功”","保证所有机器都成功"],correctIndex:0,feedback:["别人可以据此复现。","缺少环境与操作信息。","一次本机成功不能证明所有平台。"]}],followUp:"按附录运行项目，写下版本、目录、命令、结果四项。"},po=["data-flow"],mo=2,uo=["run-environment-guess","run-environment-evidence"],ho=["npm-ci","mdn-start","mdn-storage","git-install","node-install"],go={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},fo={id:Wi,chapterId:Yi,number:Ki,title:Xi,subtitle:Zi,concept:Qi,intuition:no,objectives:eo,body:to,formalDefinition:so,workflow:io,workedExamples:oo,commonMistakes:ro,practice:co,learningCheck:ao,interactiveVisual:lo,prerequisites:po,difficulty:mo,misconceptionTags:uo,sources:ho,provenance:go},xo="security",bo="chapter-5",ko="5.3",jo="把数据与权限当成项目的一部分",vo="知道哪些事情不能交给 AI 猜着做。",Ao="区分公开代码、用户输入和秘密；只给完成任务所需权限，对删除、上传和覆盖明确边界。",wo="把钥匙交给修门师傅，不等于把全部房间和保险柜也授权给他。",yo=["识别秘密、用户数据与公开文件，不把秘密写进浏览器或提交。","明确删除、覆盖、上传和发布的授权边界，验证后执行。"],$o=[{title:"秘密不能藏在浏览器代码里",text:"API 密钥、令牌和密码属于秘密；浏览器收到的 HTML 与 JS 可被用户查看，写进去就不能认为是隐藏的。本地 .env 是否会进入打包结果取决于工具，文件名本身不保证安全。泄露后先撤销或轮换，再按项目流程处理历史。AI 上下文也只给任务必需材料，别复制真实凭据或私人数据。"},{title:"把输入当作输入",text:"用户输入“<img ...>”应只是清单标题，不变成页面代码。本案例用 textContent 显示文字，备份解析后校验字段、类型、数量、唯一 ID 和版本。JSON.parse 成功只说明语法能解析，不说明内容符合业务。无效备份整份拒绝，避免部分恢复误覆盖。"},{title:"有后果的动作说清楚",text:"删除自己的练习文件与删除线上数据库差别很大。任务卡明确能修改的目录，默认不上传私有内容，不部署，不修改真实数据。恢复备份会替换整份当前清单，因此先验证、给数量、由用户明确点击确认。权限按任务需要分配，允许读取项目不等于授权向任意服务上传。"}],Eo={text:"区分公开代码、用户输入和秘密；只给完成任务所需权限，对删除、上传和覆盖明确边界。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Io=["识别秘密、用户数据与公开文件，不把秘密写进浏览器或提交。","为输入和备份做格式与业务校验，按文本呈现。","明确删除、覆盖、上传和发布的授权边界，验证后执行。"],Co=[{title:"密钥已推送",problem:"只删当前文件里的密钥够吗？",steps:["历史可能仍能查看，密钥可能已被复制。","先在凭据提供方撤销或轮换。","再按维护流程清理代码与历史并检查使用记录。"],answer:"不够。移除代码不会让旧秘密失效；优先停用旧凭据，再处理仓库与日志。不要把真实密钥贴给 Agent 让它判断。"},{title:"坏备份导入",problem:'JSON 可解析，done 却是字符串 "false"，能接受吗？',steps:["格式语法正常不代表字段类型正常。","约定 done 必须布尔值。","拒绝整份且不替换原清单。"],answer:'拒绝。字符串 "false" 在很多条件判断中仍为真，可能错误显示完成。先验证所有记录，只有整份有效且用户确认才替换。'}],Do=[{claim:"AI 建议的命令可以不看用途直接执行。",correction:"先弄清影响路径、数据与权限；关键后果不能靠猜。"},{claim:"前端源码里的密钥用变量名藏起来就安全。",correction:"客户端可查看收到的代码，换名字不构成秘密保护。"}],So=[{id:"security-p1",difficulty:1,problem:"真实 token 出现在公开提交，第一动作？",hint:"让旧秘密不再能使用。",answer:"去凭据提供方撤销或轮换，再处理仓库历史和使用记录。",solution:["删除文本不使 token 失效。","别继续把它转发给 AI。"]},{id:"security-p2",difficulty:1,problem:"用户标题像 HTML，怎样显示？",hint:"把它作为文字。",answer:"使用 textContent 或等价的安全文本呈现，不把输入拼进 HTML。",solution:["不依赖外观是否像代码。","输入内容不能获得执行权限。"]},{id:"security-p3",difficulty:2,problem:"解析成功但缺少 id，备份能替换吗？",hint:"业务格式有约定。",answer:"不能，拒绝整份并保留旧数据，告知记录格式无效。",solution:["验证字段与类型。","不要部分导入后覆盖原数据。"]},{id:"security-p4",difficulty:2,problem:"让 Agent 修 CSS 是否也授权它部署？",hint:"修改和公开是不同动作。",answer:"没有。任务范围只允许样式修改，部署、上传和真实数据操作需明确授权。",solution:["权限跟任务走。","工具能力不等于用户授权。"]}],Ro={question:"密钥写在网页 JS 里意味着？",choices:["只有自己能看到","客户端可查看，不应当作秘密","变量名复杂就安全"],correctIndex:1,feedback:["浏览器收到的代码可被查看。","应选择合适的秘密存放和权限方案。","名字复杂不能限制读取。"]},To={kind:"decision",prediction:"导入与上传动作，在哪一步需要判断？",steps:[{question:"备份解析成功但 done 为字符串。",choices:["全部接受","按约定类型拒绝且保留原数据","悄悄改所有字段"],correctIndex:1,feedback:["会让错误内容进入状态。","语法检查与业务校验不同。","未经明确规则的自动修正可能误解用户数据。"]},{question:"Agent 要把日志上传到外部服务。",choices:["先查秘密、目的与授权","直接同意所有上传","贴全部密码帮助它"],correctIndex:0,feedback:["读取权限不自动包括外传。","日志可能有私人信息或秘密。","秘密不应暴露在上下文。"]},{question:"有效备份替换当前清单。",choices:["直接覆盖","先说明数量、提醒备份并确认","把两个数组随机拼接"],correctIndex:1,feedback:["用户可能失去现有数据。","明确后果，再按确认执行。","随机合并可能造成重复 ID 与数据错乱。"]}],followUp:"给自己的项目写一条输入规则和一条 Agent 权限边界。"},No=["debugging"],Bo=3,Mo=["security-guess","security-evidence"],qo=["secrets","mdn-text"],_o={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Go={id:xo,chapterId:bo,number:ko,title:jo,subtitle:vo,concept:Ao,intuition:wo,objectives:yo,body:$o,formalDefinition:Eo,workflow:Io,workedExamples:Co,commonMistakes:Do,practice:So,learningCheck:Ro,interactiveVisual:To,prerequisites:No,difficulty:Bo,misconceptionTags:Mo,sources:qo,provenance:_o},Po="small-scope",Uo="chapter-1",Lo="1.2",Ho="把首版缩到能做完",zo="用最小的一圈功能验证想法。",Oo="首版只实现足以走通使用场景的功能，额外想法记录为后续候选。",Vo="先做一条能骑的自行车，再决定需不需要加篮子；不要同时订造整套交通系统。",Jo=["列出能走通使用场景的一圈必要功能。","为每次小改动安排一个立即可做的检查。"],Fo=[{title:"画出最小的一圈",text:"学习清单的首版是一圈：添加计划 → 在清单里看到 → 完成或删除 → 下次回来仍能找到。缺少显示就看不到新增，缺少保存就难以跨天使用。我们保留这一圈，暂时不做账号、排行、提醒和跨设备同步。这是明确的选择，不是忘记了功能。"},{title:"把想法分为现在和以后",text:"写两列：本次必须做、以后考虑。必须做的每项都能回答“少了它，用户还能完成当前场景吗？”如果答案是能，先放到以后。改变主意是允许的，但需要承认范围变了，并更新计划与验收，不能一边说首版不变一边加入所有建议。"},{title:"一次只交付一块可检查的变化",text:"把首版拆成小任务：先显示空清单，再添加，再勾选，再保存。每项任务都带一个检查动作。不要把“完成整站”当作唯一任务，否则等到最后才会发现前面的数据结构或保存方式不合适。小步是为了尽早看到错误，不只是为了写更短提示词。"}],Wo={text:"首版只实现足以走通使用场景的功能，额外想法记录为后续候选。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Yo=["列出能走通使用场景的一圈必要功能。","把不影响这一圈的想法移到后续清单。","为每次小改动安排一个立即可做的检查。"],Ko=[{title:"决定是否做登录",problem:"个人单浏览器首版需要登录吗？",steps:["回看用户只有自己。","当前不要求跨设备共享。","用本地保存走通场景，并写明限制。"],answer:"首版不做登录，数据保存在当前浏览器。换设备不会同步；若以后需要同步，再重新设计账号与存储。"},{title:"把大任务拆小",problem:"任务“做完学习清单”怎样拆？",steps:["先只显示页面与空状态。","加入添加、完成和删除，每一步检查动作。","再保存和备份，检查刷新与恢复。"],answer:"任务 1：显示空清单。任务 2：添加非空计划并拒绝空白。任务 3：按 ID 切换和删除。任务 4：刷新保存与 JSON 备份。每一步单独验证，失败就先修这一块。"}],Xo=[{claim:"首版越多越有诚意。",correction:"首版先验证一件事情有用，过多功能增加等待和误解。"},{claim:"拆任务就是按文件分工。",correction:"优先按可验证行为拆分；一个小行为可能涉及多个文件。"}],Zo=[{id:"small-scope-p1",difficulty:1,problem:"提醒、排行榜、添加计划，哪项先做？",hint:"用用户场景筛选。",answer:"先添加计划。另两项不是个人清单场景的必要条件。",solution:["先保证能记录和找回。","把其余想法写入以后清单。"]},{id:"small-scope-p2",difficulty:2,problem:"不做云同步应怎样告诉用户？",hint:"说明换设备会发生什么。",answer:"只保存在此浏览器，换设备或清除数据后不能直接找回；请下载备份。",solution:["范围选择会影响体验。","限制要写在说明中，不能只藏在开发计划里。"]},{id:"small-scope-p3",difficulty:2,problem:"把“把页面做完”改成一个小任务。",hint:"选一个可直接点击验证的行为。",answer:"添加非空标题后显示新项；空白输入显示提示且不新增。",solution:["指定触发操作。","同时约定正常与错误结果。"]},{id:"small-scope-p4",difficulty:3,problem:"中途必须加入多人同步，如何处理？",hint:"这会改变数据位置与权限。",answer:"暂停原计划，确认共享方式与权限，重写范围和验收，重新估算任务。",solution:["承认这是需求变更。","不要在个人清单方案上假装只加一个按钮就够了。"]}],Qo={question:"哪项适合首版？",choices:["个人清单加自动支付","添加、完成、删除和本地保存","同时做社区、排行榜和同步"],correctIndex:1,feedback:["支付引入新的业务与风险。","能够走通最初场景且范围明确。","多个新场景会让首版难以完成。"]},nr={kind:"decision",prediction:"四个额外建议都很诱人，哪些值得现在加入？",steps:[{question:"Agent 提议加入账号。当前只有自己使用。",choices:["直接加入","写到后续，保留本地限制说明","删掉保存功能"],correctIndex:1,feedback:["加入账号会扩大首版。","范围保持明确，用户也知道代价。","这会破坏跨天找回计划的场景。"]},{question:"你发现刷新会丢失清单。",choices:["是首版需要修的缺口","无所谓，先排行榜","只改标题"],correctIndex:0,feedback:["持久保存是当前场景的一部分。","新功能不能弥补核心场景失败。","标题变化不解决数据丢失。"]},{question:"一次提交包括添加、登录、支付，怎么调整？",choices:["更长提示词一次做完","拆开，先验证添加","不检查直接接受"],correctIndex:1,feedback:["描述更长也不能降低改动范围。","小范围更容易理解和验证。","没有证据就无法判断首版可靠。"]}],followUp:"给自己的项目写“本次必须做 / 以后考虑”，每项说明理由。"},er=["user-problem"],tr=1,sr=["small-scope-guess","small-scope-evidence"],ir=["mdn-start"],or={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},rr={id:Po,chapterId:Uo,number:Lo,title:Ho,subtitle:zo,concept:Oo,intuition:Vo,objectives:Jo,body:Fo,formalDefinition:Wo,workflow:Yo,workedExamples:Ko,commonMistakes:Xo,practice:Zo,learningCheck:Qo,interactiveVisual:nr,prerequisites:er,difficulty:tr,misconceptionTags:sr,sources:ir,provenance:or},cr="task-prompts",ar="chapter-4",lr="4.2",dr="写一张能执行的任务卡",pr="精确来自目标与证据，而不来自咒语。",mr="任务卡说明目标、事实、范围、验收、验证与交付；写法可以简单，内容必须能指导行动。",ur="把任务交给同事时，说明“改哪里、为什么、做到什么样、怎么检查”，通常比不断催促有用。",hr=["用一句话限定本次行为变化，并给相关现状。","要求提供可复查的验证结果、改动说明和未验证项。"],gr=[{title:"一张卡只做一件事",text:"任务不是“把整个网站优化到专业水平”，而是“拒绝全空格标题，并保留有效标题两端清理行为”。写当前现象、相关文件和已确认条件。告诉 Agent 能自主修改的范围，以及需要先问的变化，例如新增依赖、改数据格式或接入服务。不要把所有动作都变成必须审批，但让它知道哪里会改变你的决定。"},{title:"把形容词换成例子",text:"“健壮”“优雅”“高质量”可以表达偏好，却不能单独验收。加上具体例子：输入三个空格不新增；输入两端有空白的“练习 Git”新增为清理后的标题；80 个代码单元接受、81 个拒绝。这些标准不是某模型专有技巧，任何合作的人都能理解。"},{title:"验证要能复查",text:"要求列实际改动、运行命令与结果、未验证事项。Agent 如果没有环境执行，应该说未运行，并提供你可执行的步骤。不要要求它无论如何保证全绿，否则可能得到虚假的测试结论。模板是提醒缺漏的工具，填满六栏并不等于内容正确；你仍要检查字段是否具体和相互一致。"}],fr={text:"任务卡说明目标、事实、范围、验收、验证与交付；写法可以简单，内容必须能指导行动。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},xr=["用一句话限定本次行为变化，并给相关现状。","写正常、边界和失败结果，以及不可默默扩大的范围。","要求提供可复查的验证结果、改动说明和未验证项。"],br=[{title:"空白标题任务卡",problem:"把“修好输入”改成可执行任务。",steps:["指出三个空格目前会变成一项。","给出允许与拒绝案例。","限制改动范围并要求测试与浏览器验证。"],answer:`目标：拒绝全空格计划。
现状：请读 tasks.mjs、app.mjs 和测试。
范围：不改存储格式，不新增依赖。
验收：三个空格不新增并有提示；“  学 Git  ”保存为“学 Git”。
验证：运行 npm test；检查页面输入与反馈，做不到就列未验证。
交付：说明文件变化、命令结果与限制。`},{title:"修改模糊风格要求",problem:"“按钮高级一点”怎样变得可合作？",steps:["给视觉偏好或可使用参考，说明用途。","限定只改样式。","加入窄屏与键盘标准。"],answer:"请把添加按钮做成深绿色、圆角，沿用当前排版；只调整样式。390px 宽度不横向滚动，焦点可见，文字不被裁切。提供改动位置与实际页面检查结果。不能仅凭形容词保证所有人都喜欢。"}],kr=[{claim:"精确提示词必须使用很多专业名词。",correction:"用普通话写清输入和结果也能精确，误用术语会增加误解。"},{claim:"模板填满就自动得到满分提示词。",correction:"只说明结构齐全；目标是否正确、上下文是否真实仍需判断。"}],jr=[{id:"task-prompts-p1",difficulty:2,problem:"改写“优化所有代码”。",hint:"选一个已观察到的问题。",answer:"本次只修全空格标题被添加的问题，保持其他行为与数据格式。",solution:["收缩行为范围。","补正常、边界和错误验收。"]},{id:"task-prompts-p2",difficulty:2,problem:"能否要求 AI 不惜一切保证测试通过？",hint:"想想它会不会降低标准。",answer:"不宜；要求按约定修复，并说明真实结果、失败原因和未执行事项。",solution:["目标是正确行为。","不能允许删断言、跳过检查或虚报结果。"]},{id:"task-prompts-p3",difficulty:2,problem:"任务卡缺少现状会怎样？",hint:"Agent 必须猜哪些事实？",answer:"可能选错文件、重复实现已有功能或引入不必要结构。",solution:["给出相关路径与已读事实。","关键未知要求先确认。"]},{id:"task-prompts-p4",difficulty:2,problem:"新依赖何时需要讨论？",hint:"它是否改变你已确认的边界？",answer:"任务明确不新增依赖时，先解释现有方式为何不够、收益与维护代价，再由你决定。",solution:["不是所有依赖都坏。","但不能为小修改默默扩大成本。"]}],vr={question:"哪句话最能减少误解？",choices:["务必极其专业","三个空格不新增，提示可理解","越多文件越好"],correctIndex:1,feedback:["没有定义结果。","具体输入与结果可以直接验收。","文件数不能代表质量。"]},Ar={kind:"prompt",prediction:"这张任务卡是否能让你判断结果？",steps:[{question:"目标只写“完善网站”。",choices:["已经很清楚","补一个具体行为变化","加更多角色称号"],correctIndex:1,feedback:["没有判断完成的标准。","先明确本次做什么。","称号不能限定行为。"]},{question:"验收只写“体验好”。",choices:["写输入、动作和结果","不用验收","让 AI 自己定全部标准"],correctIndex:0,feedback:["把偏好转成可检查内容。","没有标准就难判断改动。","你应确认标准与用户目的相符。"]},{question:"Agent 无浏览器，如何报告？",choices:["声称页面检查已过","列未验证项及你的检查步骤","隐藏限制"],correctIndex:1,feedback:["会制造虚假证据。","准确报告能力和证据边界。","限制会影响你是否接受成果。"]}],followUp:"把自己的模糊请求写进练习台；读生成任务卡，逐项问“我能检查这句话吗”。"},wr=["agent-context"],yr=3,$r=["task-prompts-guess","task-prompts-evidence"],Er=["prompt"],Ir={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Cr={goal:"拒绝全空格计划，保留有效标题清理两端空白。",context:"请读 tasks.mjs、app.mjs、tasks.test.mjs；现有个人清单，无第三方依赖。",scope:"不改备份格式，不新增依赖或同步服务。",acceptance:"三个空格不新增且有提示；“  学 Git  ”保存为“学 Git”；80 接受，81 拒绝（UTF-16 代码单元）。",verification:"运行 npm test；亲自检查页面输入与提示，无浏览器则列未验证及步骤。",delivery:"修改文件、关键差异、实际命令结果、页面检查和未验证项。"},Dr={id:cr,chapterId:ar,number:lr,title:dr,subtitle:pr,concept:mr,intuition:ur,objectives:hr,body:gr,formalDefinition:fr,workflow:xr,workedExamples:br,commonMistakes:kr,practice:jr,learningCheck:vr,interactiveVisual:Ar,prerequisites:wr,difficulty:yr,misconceptionTags:$r,sources:Er,provenance:Ir,promptTemplate:Cr},Sr="testing",Rr="chapter-5",Tr="5.1",Nr="自己选择值得检查的案例",Br="让测试回答用户关心的问题。",Mr="测试用给定输入核对预期结果；选择正常、边界和失败案例比单纯增加测试数量重要。",qr="试雨伞不能只在晴天撑开，还要检查下雨和风大时会怎样。",_r=["从验收中选择正常、边界和失败案例。","报告运行命令、结果、覆盖范围与仍需检查的行为。"],Gr=[{title:"先从验收挑案例",text:"针对添加计划，选择普通文字、全空格、80 和 81 代码单元、重复标题及容量上限。预期结果来自已确认需求，不从现有函数结果自动抄一遍。数据规则测试可以快速运行；页面提示、刷新、键盘和窄屏则需要浏览器检查。两类证据互相补充。"},{title:"读一条测试就够开始",text:"本案例用 Node 内置测试工具。test 给案例取名，assert.equal 比较值，assert.throws 检查确实拒绝错误输入。npm test 实际运行 node --test tasks.test.mjs。你不必先掌握测试框架大全，先能说明这条测试给了什么输入、期望什么以及为什么值得检查。"},{title:"别让实现和答案一起猜",text:"如果测试只断言“结果等于同一算法再算一遍”，两边可能一起错。先用手工简单案例、前后对比或另一种检查方式确定预期。例如删两条同标题中的第二条，应手工确认剩第一条。测试通过支持这些案例，不意味着安全、浏览器体验和所有输入都已经验证。"}],Pr={text:"测试用给定输入核对预期结果；选择正常、边界和失败案例比单纯增加测试数量重要。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},Ur=["从验收中选择正常、边界和失败案例。","用独立预期检查规则，再在浏览器检查交互。","报告运行命令、结果、覆盖范围与仍需检查的行为。"],Lr=[{title:"读空白输入测试",problem:'assert.throws(() => addTask([], "   ", "a")) 检查什么？',steps:["输入是空数组、三个空格和一个 ID。","预期 addTask 抛出可处理的错误。","页面层还应捕获错误并显示提示。"],answer:"这条测试支持数据规则拒绝空白；它没有证明用户能看到提示，因为没有运行页面事件和渲染。需要另做浏览器验收。"},{title:"选择删除测试",problem:"两个同标题记录，怎样独立验证删除？",steps:["创建 ID a 与 b 的同标题记录。","删除 b。","预期数组只含 a，且 a 原状态不变。"],answer:"用明确的剩余记录比较结果，不只检查长度变成 1。否则实现删错对象也可能过关。"}],Hr=[{claim:"测试越多就一定越可靠。",correction:"重复同一路径可能掩盖关键缺口，先关注风险与边界。"},{claim:"AI 写了测试就已验证。",correction:"测试必须实际运行，预期也需要对照需求。"}],zr=[{id:"testing-p1",difficulty:2,problem:"列出添加规则的三类案例。",hint:"顺利路径、临界点、应拒绝。",answer:"正常“学 Git”；80 接受与 81 拒绝；全空格拒绝。",solution:["覆盖三种行为。","同时说明每项预期。"]},{id:"testing-p2",difficulty:2,problem:"数组长度从 2 到 1 能证明删除正确对象吗？",hint:"可能删错。",answer:"不能，还需确认剩余 ID 和内容正确。",solution:["长度只支持数量。","对象身份决定删的是哪条。"]},{id:"testing-p3",difficulty:2,problem:"规则测试通过，刷新保存是否已证明？",hint:"测试是否访问浏览器存储？",answer:"没有；规则测试不覆盖 app.mjs 与实际存储，应在浏览器添加、刷新并检查。",solution:["区分数据函数和页面集成。","补充对应环境的证据。"]},{id:"testing-p4",difficulty:1,problem:"Agent 不能运行测试，怎样写报告？",hint:"证据要真实。",answer:"说明未运行及原因，列命令和预期；不写“通过”。你随后实际执行并记录结果。",solution:["代码存在不等于执行成功。","未验证项应影响接受决定。"]}],Or={question:"删除正确性的好测试是？",choices:["只检查数组变短","检查留下指定 ID 与原内容","只看页面没崩溃"],correctIndex:1,feedback:["可能删错对象。","直接对应所选条目。","缺少数据结果检查。"]},Vr={kind:"decision",prediction:"三类检查中，哪一类支持哪一种结论？",steps:[{question:"纯函数测试空白拒绝通过。能证明？",choices:["数据规则拒绝此输入","页面提示一定可见","全部浏览器兼容"],correctIndex:0,feedback:["断言覆盖该规则。","页面未执行，仍需检查。","案例没有涉及所有浏览器。"]},{question:"两条同标题删一条，测试只查长度。",choices:["足够了","增加剩余 ID 与内容断言","删除重复标题标准"],correctIndex:1,feedback:["可能删错条目仍过。","用身份检查对应行为。","不能为了弱测试缩减既定允许输入。"]},{question:"只运行 Node 测试，报告该写？",choices:["全站已验证","列规则已测，浏览器待查","直接上线不看页面"],correctIndex:1,feedback:["夸大证据范围。","准确说明支持的结论。","页面可能仍有交互问题。"]}],followUp:"亲自读一条项目测试，写输入、预期和它没有检查的部分。"},Jr=["review-changes"],Fr=3,Wr=["testing-guess","testing-evidence"],Yr=["node-test"],Kr={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},Xr={id:Sr,chapterId:Rr,number:Tr,title:Nr,subtitle:Br,concept:Mr,intuition:qr,objectives:_r,body:Gr,formalDefinition:Pr,workflow:Ur,workedExamples:Lr,commonMistakes:Hr,practice:zr,learningCheck:Or,interactiveVisual:Vr,prerequisites:Jr,difficulty:Fr,misconceptionTags:Wr,sources:Yr,provenance:Kr},Zr="user-problem",Qr="chapter-1",nc="1.1",ec="先找到一个真实问题",tc="把“做个厉害的产品”换成一个可以观察的场景。",sc="开工前写清谁在什么情况下遇到什么麻烦，以及做完后希望发生什么变化。",ic="朋友说“帮我买点好吃的”时，你会先问谁吃、在哪里吃、有什么限制。软件也需要这些信息。",oc=["写出一个用户、一个时刻和一个具体麻烦。","用一句话说明怎样观察问题得到改善。"],rc=[{title:"从一次小麻烦开始",text:"小林晚上想学东西，却常忘记昨天打算学什么。他需要打开页面就看到未完成的计划。这里的用户是小林，场景是每天开始学习前，问题是计划散落在聊天记录里。先描述这次麻烦，再考虑按钮和技术。不要把“我要一个很酷的网站”当作已经解释了用途。"},{title:"用户动作比功能名具体",text:"把“清单管理”翻译成动作：输入一项计划，点击添加；做完一项，勾选完成；不再需要，删除。这些动作能让你画出最简单的页面。你不必一开始就会写代码，但需要知道每个动作为什么值得存在。"},{title:"给 AI 一个可核对的起点",text:"你可以让 Agent 补充问题，但不要让它替你决定目标用户。先交给它一段使用场景，请它指出缺失信息。例如“计划要在刷新后保留吗？”是关键问题；“要不要酷炫粒子效果？”此时并不能解决忘记计划的麻烦。"}],cc={text:"开工前写清谁在什么情况下遇到什么麻烦，以及做完后希望发生什么变化。",conditions:["面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。","本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。"]},ac=["写出一个用户、一个时刻和一个具体麻烦。","列出用户为了完成目的必须做的动作。","用一句话说明怎样观察问题得到改善。"],lc=[{title:"从许愿到场景",problem:"原话：给我做一个学习神器。怎样改成可开工的描述？",steps:["选定自己而非“所有学习者”。","指出每天开始学习前找不到计划。","定义打开页面看到未完成项这个变化。"],answer:"我每天开始学习前，想知道昨天留下的计划。做一个学习清单页，让我能添加计划、勾选完成、删除无用项。先只供我在自己的浏览器使用。"},{title:"识别需要追问的信息",problem:"朋友说“做一个全班共用的学习清单”，能照着个人清单直接做吗？",steps:["找出“共用”意味着多个读者和写入者。","追问是否每人有独立清单、能否改别人内容。","先确认范围，再讨论账号与服务端。"],answer:"先问：大家看同一份清单还是各自的清单？谁能编辑？是否必须跨设备同步？这些答案会改变项目结构，不能用个人浏览器存储冒充多人共享。"}],dc=[{claim:"技术选好了，需求就清楚了。",correction:"框架名称描述实现方式。它不能回答用户到底要完成什么动作。"},{claim:"AI 应该自己猜出我的真实想法。",correction:"让它列出假设与问题；你负责确认会改变项目方向的答案。"}],pc=[{id:"user-problem-p1",difficulty:2,problem:"把“我要一个效率工具”改成一条使用场景。",hint:"补上用户、时刻和麻烦。",answer:"我在晚饭后开始学习时，总要翻聊天记录找计划；希望打开一个页面就看到未完成项。",solution:["先选定自己作为用户。","描述已有行为和麻烦，避免用“高效”代替具体变化。"]},{id:"user-problem-p2",difficulty:1,problem:"“采用 React”属于用户问题还是实现选择？",hint:"用户不必知道框架名也能描述目标。",answer:"属于实现选择。用户问题可以是刷新后计划丢失。",solution:["区分目的与手段。","先说明数据要保留，再讨论实现。"]},{id:"user-problem-p3",difficulty:2,problem:"多人共用清单还缺哪些关键信息？",hint:"想一想谁能看到和改动。",answer:"是否共享同一份、谁有编辑权、是否需要同步和登录。",solution:["列出影响权限与数据位置的问题。","确认答案后再决定是否加入服务端。"]},{id:"user-problem-p4",difficulty:1,problem:"写出本案例最简单的成功观察。",hint:"用一个动作和一个看得见的结果。",answer:"输入“练习 Git”后，它出现在清单中，下一次打开仍能找到。",solution:["行为是添加计划。","结果是能看到并再次找到；具体保存条件将在后续明确。"]}],mc={question:"准备开始写代码，哪一句最有用？",choices:["做一个顶级学习平台","让我每天能找到未完成计划","用最先进的技术栈"],correctIndex:1,feedback:["没有具体使用场景，难以判断完成。","说明了用户目的，接下来能拆成动作。","技术选择仍没有说明要解决的问题。"]},uc={kind:"decision",prediction:"假如 AI 一上来就提出排行榜，你会接受吗？",steps:[{question:"Agent 提出先做排行榜。你怎么回应？",choices:["先做，比清单酷","先确认它怎样帮助我找到计划","全部功能都做"],correctIndex:1,feedback:["会把首版注意力转移到另一个问题。","把建议拉回用户目的，再决定去留。","范围会增长，验证也更困难。"]},{question:"它问“刷新后要不要保留”。你选哪一个？",choices:["这会影响使用，明确需要","随便猜","先调按钮颜色"],correctIndex:0,feedback:["保存关系到第二天还能找到计划，应明确回答。","核心行为不能依靠未确认的假设。","外观不能回答保存需求。"]},{question:"现在最值得保留的材料是？",choices:["框架排名","用户场景和三个必要动作","所有未来想法"],correctIndex:1,feedback:["排名不能用来验收用户问题。","它们为后续范围与验收提供起点。","未来想法可以另记，不应盖过首版。"]}],followUp:"换成你自己的一个麻烦，写出用户、时刻、动作与结果。"},hc=[],gc=1,fc=["user-problem-guess","user-problem-evidence"],xc=["mdn-start"],bc={author:"AI-generated",version:"0.1.1",status:"first-edition",humanReviewed:!1},kc={id:Zr,chapterId:Qr,number:nc,title:ec,subtitle:tc,concept:sc,intuition:ic,objectives:oc,body:rc,formalDefinition:cc,workflow:ac,workedExamples:lc,commonMistakes:dc,practice:pc,learningCheck:mc,interactiveVisual:uc,prerequisites:hc,difficulty:gc,misconceptionTags:fc,sources:xc,provenance:bc},jc="用过 AI 写代码，但对项目开发缺少整体认识的人。不要求先学完 Python，不要求已有 Git 或终端经验。",vc="工具中立，以个人学习清单网页为贯穿案例。先在教材里练习判断，再在独立练习目录里动手。命令使用 Git 2.28+ 和 Node.js 22.12+ 的通用能力；实际验证环境见 QA.md。",Ac=["成为职业工程师所需的完整算法与语言训练","多人实时同步、支付、身份验证和生产数据库实现","云平台账号注册、收费服务选型与自动部署","高级 Git 历史改写、复杂 rebase 与合并提交撤销","提示词效果保证、任意代码执行或运行时模型服务"],wc=[{id:"chapter-1",title:"先想清楚要解决什么",objective:"写出一个真实使用场景，缩小首版，并约定可检查的完成标准。",lessons:["user-problem","small-scope","acceptance"]},{id:"chapter-2",title:"看懂项目怎样运行",objective:"找到项目入口、画出数据路径，按说明在本机运行。",lessons:["project-map","data-flow","run-environment"]},{id:"chapter-3",title:"用 Git 留下可回退的记录",objective:"区分工作区、暂存区与提交，理解分支、远端、PR 和恢复。",lessons:["git-snapshot","git-collaboration","git-recovery"]},{id:"chapter-4",title:"把 Agent 变成合作伙伴",objective:"提供真实上下文，拆成小任务，审阅改动并要求验证证据。",lessons:["agent-context","task-prompts","review-changes"]},{id:"chapter-5",title:"判断改动是否可靠",objective:"自己选择测试案例，复现错误，守住数据与权限边界。",lessons:["testing","debugging","security"]},{id:"chapter-6",title:"完成并交付一个小项目",objective:"选择合适的存储方案，检查发布版本，交付可运行、可说明的成果。",lessons:["data-design","release","capstone"]}],yc=[{id:"mdn-start",title:"MDN：第一个网站",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website",purpose:"核对网页组成与从计划到发布的过程。"},{id:"mdn-flow",title:"MDN：客户端与服务器",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview",purpose:"核对请求、响应与客户端/服务器职责。"},{id:"mdn-storage",title:"MDN：localStorage",url:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",purpose:"核对同源持久化、字符串存储及存储异常。"},{id:"mdn-text",title:"MDN：textContent",url:"https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent",purpose:"核对将输入作为文本插入的行为。"},{id:"git-record",title:"Pro Git：记录变更",url:"https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository",purpose:"核对工作区、暂存与提交的区别。"},{id:"git-diff",title:"Git：diff",url:"https://git-scm.com/docs/git-diff",purpose:"核对未暂存与已暂存差异的比较对象。"},{id:"git-branch",title:"Pro Git：分支与合并",url:"https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",purpose:"核对分支与冲突处理。"},{id:"git-push",title:"Git：push",url:"https://git-scm.com/docs/git-push",purpose:"核对推送、远端分支与上游关系。"},{id:"git-restore",title:"Git：restore",url:"https://git-scm.com/docs/git-restore",purpose:"核对取消暂存与丢弃工作区改动的不同影响。"},{id:"git-revert",title:"Git：revert",url:"https://git-scm.com/docs/git-revert",purpose:"核对以新提交撤销普通提交；不展开合并提交撤销。"},{id:"git-stash",title:"Git：stash",url:"https://git-scm.com/docs/git-stash",purpose:"核对临时保存及未跟踪文件选项。"},{id:"github-pr",title:"GitHub：Pull requests",url:"https://docs.github.com/en/pull-requests/reference/pull-requests",purpose:"核对评审与合并请求的概念。"},{id:"npm-ci",title:"npm：ci",url:"https://docs.npmjs.com/cli/v11/commands/npm-ci/",purpose:"核对有锁文件时的干净安装及文件不一致的失败行为。"},{id:"node-test",title:"Node.js：测试运行器",url:"https://nodejs.org/api/test.html",purpose:"核对 node --test 与断言的使用。"},{id:"prompt",title:"Anthropic：提示词实践",url:"https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices",purpose:"仅核对明确任务、相关上下文及例子的通用方向；本书任务卡与协作流程为原创教学设计，不承诺模型效果。"},{id:"secrets",title:"OWASP：秘密管理",url:"https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",purpose:"核对秘密生命周期、最小权限与泄露后的撤销轮换。"},{id:"git-fetch",title:"Git：fetch",url:"https://git-scm.com/docs/git-fetch",purpose:"核对获取远端记录与合入当前分支的区别。"},{id:"git-pull",title:"Git：pull",url:"https://git-scm.com/docs/git-pull",purpose:"核对 --ff-only 的快进与分叉拒绝行为。"},{id:"git-init",title:"Git：init",url:"https://git-scm.com/docs/git-init",purpose:"核对指定初始分支与新仓库创建。"},{id:"git-install",title:"Git：安装",url:"https://git-scm.com/install/",purpose:"提供安装工具的官方入口。"},{id:"node-install",title:"Node.js：下载",url:"https://nodejs.org/en/download",purpose:"提供运行环境安装的官方入口。"}],g={audience:jc,baseline:vc,outOfScope:Ac,chapters:wc,sources:yc},$c=[{chapterId:"chapter-1",questions:[{problem:"“做个学习神器，加所有功能”怎样变成首版？",hint:"回到一个人一次使用的麻烦。",answer:"用户是自己；场景是晚上找学习计划；首版添加、完成、删除、保存；账号与同步后续再议。",solution:["确定使用者与目的。","筛出能走通这一圈的功能。","为普通、空白和刷新各写一条标准。"]},{problem:"“添加功能正常”怎样验收？",hint:"明确起点、动作和结果。",answer:"空清单提交“学 Git”后出现未完成项；全空格不新增；两端空白被清理。",solution:["写正常结果。","写拒绝输入。","说明结果可观察而不只看有没有报错。"]}]},{chapterId:"chapter-2",questions:[{problem:"绘制一次添加的数据路径，说明服务器做什么。",hint:"区分送文件与保存业务。",answer:"输入 → app.mjs 事件 → tasks.mjs 规则 → localStorage → 渲染。server.mjs 只提供静态文件。",solution:["读入口引用。","沿提交处理找到规则和保存。","确认没有共享清单 API。"]},{problem:"npm start 失败，至少给 Agent 什么材料？",hint:"能让对方复现。",answer:"当前目录、工具版本、运行命令和完整错误；必要时给配置文件。",solution:["先确定环境满足说明。","按错误区分目录、工具与端口。","不随意删除依赖记录。"]}]},{chapterId:"chapter-3",questions:[{problem:"HEAD v1、暂存 v2、工作区 v3，提交并推送会分享什么？",hint:"推送分享提交，不直接分享工作区。",answer:"提交 v2，推送更新远端到该提交；v3 仍是本地未暂存编辑。",solution:["commit 读取暂存。","push 上传分支记录。","要分享 v3 必须重新审阅、暂存、提交和推送。"]},{problem:"取消暂存、丢弃编辑与撤销已推送提交怎么区分？",hint:"看状态和影响。",answer:"restore --staged 保留编辑；普通 restore 覆盖工作区未暂存内容；普通已分享提交可用 revert 产生新记录。",solution:["先 status 与 diff。","备份需要保留的内容。","选择对应操作并重新验证。"]}]},{chapterId:"chapter-4",questions:[{problem:"写“修好刷新丢数据”的任务卡。",hint:"现状、范围、标准和证据。",answer:"目标刷新保留；提供网址、步骤、实际/预期和相关保存读取文件；先定位，不接同步；要求测试和浏览器实际证据。",solution:["明确问题能复现。","限制无关结构变更。","交付命令结果与未验证项。"]},{problem:"Agent 改 20 文件但目标是按钮颜色，怎样审阅？",hint:"每项变化能否解释为必要。",answer:"看文件列表与 diff，要求无关变化的理由，拆回样式范围，检查窄屏和键盘。",solution:["不是单靠文件数判错。","查数据、依赖变更是否必要。","接受后留下验证记录。"]}]},{chapterId:"chapter-5",questions:[{problem:"自动测试全绿，为什么仍不能说“全站验证”？",hint:"测试实际执行了什么。",answer:"规则测试没有运行浏览器事件、存储和布局；需相应页面检查，报告未验证范围。",solution:["列测试覆盖。","补正常、边界、失败的交互验收。","结论只覆盖已有证据。"]},{problem:"备份是有效 JSON 却字段错误，应怎样处理？",hint:"语法与业务规则不同。",answer:"整份拒绝，不替换当前清单；校验版本、字段、类型、ID 与上限。",solution:["先解析。","再验证所有记录。","只有有效且确认才写入。"]}]},{chapterId:"chapter-6",questions:[{problem:"交付个人清单项目需要哪些东西？",hint:"让另一人能够运行与理解。",answer:"源码、运行要求、命令、版本、验收记录、限制、备份恢复说明与后续候选。",solution:["先准备可运行材料。","核对交付版本与实际检查。","说明数据在哪里和怎样恢复。"]},{problem:"想从个人清单升级多人同步，应怎样开始？",hint:"新场景会影响共享和权限。",answer:"先确认各自/共用数据、读写权限、冲突与恢复，再重新写范围和验收。",solution:["不能把同步当图标。","原本地存储方案有边界。","新的实现应围绕确认过的场景。"]}]}],Ec=[{problem:"综合实作：独立交付一个个人学习清单。",hint:"按本书四个关卡进行。",answer:"提交一页计划、至少 6 条验收、数据与文件图、2 张任务卡、至少 3 次有目的的提交记录、测试与浏览器结果、README 和可运行源码。",solution:["说明用户与首版，排除同步。","验收包括普通添加、空白拒绝、重复标题、勾选、刷新、有效/无效恢复。","按添加、操作、存储、交付关卡实现；每关读差异和验证。","参考附录对照，不只复制；记录未验证环境与限制。"]},{problem:"综合判断：AI 添加云服务并把密钥写入网页，以实现一个按钮颜色变化。",hint:"检查目标、范围与秘密。",answer:"拒绝无关云服务和客户端秘密；若凭据已经暴露先撤销/轮换，缩回样式范围并重新检查。",solution:["变化不对应颜色目标。","读取或修改权限不包括新增外传服务。","检查 diff、锁文件与生成产物，验收键盘和窄屏。"]},{problem:"综合判断：修复后测试被删、界面显示保存成功但刷新丢失。",hint:"绿色与成功提示都可能不真实。",answer:"不能接受；恢复需求对应检查，复现保存问题，区分写入/读取/同源变化，修复后重测。",solution:["先保存错误与版本信息。","不靠隐藏异常获得成功提示。","对照原验收决定是否完成。"]},{problem:"综合判断：代码已推送，Agent 宣称正式上线且所有人的清单同步。",hint:"区分远端代码、部署和用户数据。",answer:"要求可访问分支/PR、部署网址和版本证据；localStorage 不提供多人同步，重新确认需求。",solution:["push 只更新目标远端分支。","公开网页需要独立部署与验收。","共享用户数据需要额外架构与权限设计。"]}],Ic=[{term:"Agent",definition:"能结合上下文并可能使用工具执行任务的 AI 助手；能力不等于已获得所有操作授权。"},{term:"用户场景",definition:"某人在某个时刻为了一个目的进行的动作，用于解释为什么做功能。"},{term:"首版",definition:"为当前场景约定的一圈必要功能，不是全部未来想法。"},{term:"验收标准",definition:"具体输入、动作与预期结果，用来决定任务是否完成。"},{term:"终端",definition:"输入和执行命令的窗口；所在目录会影响命令操作的文件。"},{term:"运行环境",definition:"代码需要的工具、版本、系统与配置。"},{term:"依赖",definition:"项目使用的外部包或工具，需要管理版本与维护成本。"},{term:"锁文件",definition:"记录精确依赖解析结果，帮助可重复安装；不是遇错就随意删除的文件。"},{term:"入口",definition:"程序开始加载或执行的位置，帮助沿行为查文件。"},{term:"前端",definition:"浏览器等客户端中的呈现和交互部分。"},{term:"后端",definition:"通常在服务器处理数据、权限与业务的部分。"},{term:"API",definition:"程序之间约定的调用接口，包括输入和返回含义。"},{term:"localStorage",definition:"同源浏览器字符串存储，会受清理、权限和容量等条件影响。"},{term:"数据结构",definition:"字段、类型和关系的安排，决定如何读取、修改和校验。"},{term:"ID",definition:"区分记录的身份，不应与可重复的显示标题混为一谈。"},{term:"Git 仓库",definition:"存储文件版本记录的位置；不是托管网站本身。"},{term:"工作区",definition:"现在正在编辑的文件内容。"},{term:"暂存区",definition:"已选择准备进入下次提交的内容，可能不同于当前文件。"},{term:"提交",definition:"一份本地版本快照及其记录；保存文件不自动创建它。"},{term:"HEAD",definition:"当前检出的提交位置，通常跟随当前分支顶端。"},{term:"分支",definition:"指向一条记录线顶端的名字，用来组织不同目的的改动。"},{term:"远端",definition:"配置的另一个仓库位置；origin 只是常见名称。"},{term:"推送",definition:"把本地分支提交更新到目标远端分支。"},{term:"PR",definition:"提议将分支改动合入目标分支的审阅材料，不自动意味着合并或上线。"},{term:"差异 / diff",definition:"比较两个状态有哪些文本变化，用来核对范围和关键行为。"},{term:"冲突",definition:"自动合并不能决定结果，需要理解两边意图并手动确认。"},{term:"任务卡",definition:"本书使用的目标、事实、范围、验收、验证、交付六栏协作材料。"},{term:"断言",definition:"测试里检查某个预期是否成立的表达。"},{term:"回归检查",definition:"修复之后再次检查原行为及相关边界，防止改坏已有功能。"},{term:"秘密",definition:"密钥、令牌和密码等不可公开的凭据；泄露后需撤销或轮换。"},{term:"部署",definition:"把能运行的产物放到用户访问的目标环境。"},{term:"回退",definition:"恢复可用的代码或数据状态；两者需要分别考虑。"}],Cc=[{title:"关卡一：能记录一项计划",task:"搭建页面和添加逻辑；普通输入出现，全空格拒绝；暂不保存。",evidence:["规则测试普通/空白/80/81","浏览器提交与反馈","审阅 diff 并记录提交"]},{title:"关卡二：能操作正确的一项",task:"按 ID 完成和删除；同标题互不影响。",evidence:["完成两次恢复","删除后剩余 ID 正确","键盘操作与空清单"]},{title:"关卡三：能保存与恢复",task:"刷新保留、JSON 备份、校验后确认恢复；失败有反馈。",evidence:["刷新相同网址","有效备份恢复内容与完成状态","无效备份拒绝且原数据不变"]},{title:"关卡四：能让别人接手",task:"完善 README、验收记录、版本与已知限制。",evidence:["另一人或干净目录按说明运行","窄屏、键盘与页面资源","本机/远端/发布状态分别记录"]}],w={chapterReviews:$c,exam:Ec,glossary:Ic,projectPlan:Cc},Dc=`# 带着 AI 做项目 / Building Projects with AI

从会提需求，到会判断、验证与交付

版本 0.1.1 · 完整教材 · 2026-10-11

AI 生成，尚未人工审校。内容 CC0-1.0；工具与项目 MIT。

投稿贡献：[aby0120](https://github.com/b1n9ui/ai-university/pull/5)

## 读者与课程边界

用过 AI 写代码，但对项目开发缺少整体认识的人。不要求先学完 Python，不要求已有 Git 或终端经验。

工具中立，以个人学习清单网页为贯穿案例。先在教材里练习判断，再在独立练习目录里动手。命令使用 Git 2.28+ 和 Node.js 22.12+ 的通用能力；实际验证环境见 QA.md。

- 把想法写成用户场景、首版边界和验收案例
- 解释文件、数据、浏览器与服务器各自负责什么
- 用 Git 留下小步提交，并说明本地提交、推送、PR 和上线的区别
- 给 Agent 真实上下文和清晰任务，读懂关键改动
- 通过复现、边界测试和对照需求决定是否接受结果
- 交付可运行、可备份、可回退并写清限制的小项目

本卷不展开：

- 成为职业工程师所需的完整算法与语言训练
- 多人实时同步、支付、身份验证和生产数据库实现
- 云平台账号注册、收费服务选型与自动部署
- 高级 Git 历史改写、复杂 rebase 与合并提交撤销
- 提示词效果保证、任意代码执行或运行时模型服务

## 怎样使用这本书

围绕“个人学习清单”贯穿学习。先写自己的答案，再看例题或反馈；每节完成一个具体判断，并留下你的理由。网页情境题只比较已编写的选项，不自动评价自由文字。Git 台是单文件教学模型，不能操作真实仓库；提示词台只整理你填写的六栏，不能证明语义正确。复制到真实项目之前先核对路径、权限和数据后果。

第一次用终端：在编辑器打开独立 learning-list 练习目录并开集成终端；核对 README，检查工具版本。macOS/Linux 与 PowerShell 均可使用本书 git、node、npm 命令；含空格的路径用引号。命令中的示例名字需换成你的实际路径。不要把输出说明一起当命令复制。

本机、提交、推送、PR、合并与发布分别记录；本书只提供学习稿与本地预览，不自动公开你的项目。

## 全书目录

**先想清楚要解决什么**：写出一个真实使用场景，缩小首版，并约定可检查的完成标准。

- 1.1 先找到一个真实问题
- 1.2 把首版缩到能做完
- 1.3 先说清楚怎样算完成

**看懂项目怎样运行**：找到项目入口、画出数据路径，按说明在本机运行。

- 2.1 看懂文件夹里的分工
- 2.2 跟着一条数据走
- 2.3 让项目在本机跑起来

**用 Git 留下可回退的记录**：区分工作区、暂存区与提交，理解分支、远端、PR 和恢复。

- 3.1 保存文件不等于 Git 提交
- 3.2 分支、推送和 PR 各做什么
- 3.3 改错时先分清要撤销什么

**把 Agent 变成合作伙伴**：提供真实上下文，拆成小任务，审阅改动并要求验证证据。

- 4.1 先让 Agent 了解真实项目
- 4.2 写一张能执行的任务卡
- 4.3 用小改动和证据结束一次协作

**判断改动是否可靠**：自己选择测试案例，复现错误，守住数据与权限边界。

- 5.1 自己选择值得检查的案例
- 5.2 报错时先复现，再猜原因
- 5.3 把数据与权限当成项目的一部分

**完成并交付一个小项目**：选择合适的存储方案，检查发布版本，交付可运行、可说明的成果。

- 6.1 先决定数据怎样留下来
- 6.2 交付之前查的是哪个版本
- 6.3 你来带着 AI 完成一轮开发

## 第 1 章 先想清楚要解决什么

写出一个真实使用场景，缩小首版，并约定可检查的完成标准。

### 1.1 先找到一个真实问题

把“做个厉害的产品”换成一个可以观察的场景。

核心意思：开工前写清谁在什么情况下遇到什么麻烦，以及做完后希望发生什么变化。

直觉：朋友说“帮我买点好吃的”时，你会先问谁吃、在哪里吃、有什么限制。软件也需要这些信息。

#### 学习目标

- 写出一个用户、一个时刻和一个具体麻烦。
- 用一句话说明怎样观察问题得到改善。

#### 从一次小麻烦开始

小林晚上想学东西，却常忘记昨天打算学什么。他需要打开页面就看到未完成的计划。这里的用户是小林，场景是每天开始学习前，问题是计划散落在聊天记录里。先描述这次麻烦，再考虑按钮和技术。不要把“我要一个很酷的网站”当作已经解释了用途。

#### 用户动作比功能名具体

把“清单管理”翻译成动作：输入一项计划，点击添加；做完一项，勾选完成；不再需要，删除。这些动作能让你画出最简单的页面。你不必一开始就会写代码，但需要知道每个动作为什么值得存在。

#### 给 AI 一个可核对的起点

你可以让 Agent 补充问题，但不要让它替你决定目标用户。先交给它一段使用场景，请它指出缺失信息。例如“计划要在刷新后保留吗？”是关键问题；“要不要酷炫粒子效果？”此时并不能解决忘记计划的麻烦。

#### 定义与适用条件

开工前写清谁在什么情况下遇到什么麻烦，以及做完后希望发生什么变化。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 写出一个用户、一个时刻和一个具体麻烦。
2. 列出用户为了完成目的必须做的动作。
3. 用一句话说明怎样观察问题得到改善。

#### 例题 1：从许愿到场景

原话：给我做一个学习神器。怎样改成可开工的描述？

1. 选定自己而非“所有学习者”。
2. 指出每天开始学习前找不到计划。
3. 定义打开页面看到未完成项这个变化。

参考结果：

我每天开始学习前，想知道昨天留下的计划。做一个学习清单页，让我能添加计划、勾选完成、删除无用项。先只供我在自己的浏览器使用。

#### 例题 2：识别需要追问的信息

朋友说“做一个全班共用的学习清单”，能照着个人清单直接做吗？

1. 找出“共用”意味着多个读者和写入者。
2. 追问是否每人有独立清单、能否改别人内容。
3. 先确认范围，再讨论账号与服务端。

参考结果：

先问：大家看同一份清单还是各自的清单？谁能编辑？是否必须跨设备同步？这些答案会改变项目结构，不能用个人浏览器存储冒充多人共享。

#### 概念检查

准备开始写代码，哪一句最有用？

- A. 做一个顶级学习平台
- B. 让我每天能找到未完成计划
- C. 用最先进的技术栈

参考选择：B

- A：没有具体使用场景，难以判断完成。
- B：说明了用户目的，接下来能拆成动作。
- C：技术选择仍没有说明要解决的问题。

#### 互动判断

假如 AI 一上来就提出排行榜，你会接受吗？

##### 情境 1

Agent 提出先做排行榜。你怎么回应？

- A. 先做，比清单酷
- B. 先确认它怎样帮助我找到计划
- C. 全部功能都做

参考选择：B

- A：会把首版注意力转移到另一个问题。
- B：把建议拉回用户目的，再决定去留。
- C：范围会增长，验证也更困难。

##### 情境 2

它问“刷新后要不要保留”。你选哪一个？

- A. 这会影响使用，明确需要
- B. 随便猜
- C. 先调按钮颜色

参考选择：A

- A：保存关系到第二天还能找到计划，应明确回答。
- B：核心行为不能依靠未确认的假设。
- C：外观不能回答保存需求。

##### 情境 3

现在最值得保留的材料是？

- A. 框架排名
- B. 用户场景和三个必要动作
- C. 所有未来想法

参考选择：B

- A：排名不能用来验收用户问题。
- B：它们为后续范围与验收提供起点。
- C：未来想法可以另记，不应盖过首版。

继续练习：换成你自己的一个麻烦，写出用户、时刻、动作与结果。

#### 常见误区

- 错误想法：技术选好了，需求就清楚了。
  纠正：框架名称描述实现方式。它不能回答用户到底要完成什么动作。

- 错误想法：AI 应该自己猜出我的真实想法。
  纠正：让它列出假设与问题；你负责确认会改变项目方向的答案。

#### 独立练习

##### 练习 1（难度 2/6）

把“我要一个效率工具”改成一条使用场景。

提示：补上用户、时刻和麻烦。

##### 完整解答

1. 先选定自己作为用户。
2. 描述已有行为和麻烦，避免用“高效”代替具体变化。

我在晚饭后开始学习时，总要翻聊天记录找计划；希望打开一个页面就看到未完成项。

##### 练习 2（难度 1/6）

“采用 React”属于用户问题还是实现选择？

提示：用户不必知道框架名也能描述目标。

##### 完整解答

1. 区分目的与手段。
2. 先说明数据要保留，再讨论实现。

属于实现选择。用户问题可以是刷新后计划丢失。

##### 练习 3（难度 2/6）

多人共用清单还缺哪些关键信息？

提示：想一想谁能看到和改动。

##### 完整解答

1. 列出影响权限与数据位置的问题。
2. 确认答案后再决定是否加入服务端。

是否共享同一份、谁有编辑权、是否需要同步和登录。

##### 练习 4（难度 1/6）

写出本案例最简单的成功观察。

提示：用一个动作和一个看得见的结果。

##### 完整解答

1. 行为是添加计划。
2. 结果是能看到并再次找到；具体保存条件将在后续明确。

输入“练习 Git”后，它出现在清单中，下一次打开仍能找到。

先修：无需编程先修。相对难度 1/6。

来源：[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

### 1.2 把首版缩到能做完

用最小的一圈功能验证想法。

核心意思：首版只实现足以走通使用场景的功能，额外想法记录为后续候选。

直觉：先做一条能骑的自行车，再决定需不需要加篮子；不要同时订造整套交通系统。

#### 学习目标

- 列出能走通使用场景的一圈必要功能。
- 为每次小改动安排一个立即可做的检查。

#### 画出最小的一圈

学习清单的首版是一圈：添加计划 → 在清单里看到 → 完成或删除 → 下次回来仍能找到。缺少显示就看不到新增，缺少保存就难以跨天使用。我们保留这一圈，暂时不做账号、排行、提醒和跨设备同步。这是明确的选择，不是忘记了功能。

#### 把想法分为现在和以后

写两列：本次必须做、以后考虑。必须做的每项都能回答“少了它，用户还能完成当前场景吗？”如果答案是能，先放到以后。改变主意是允许的，但需要承认范围变了，并更新计划与验收，不能一边说首版不变一边加入所有建议。

#### 一次只交付一块可检查的变化

把首版拆成小任务：先显示空清单，再添加，再勾选，再保存。每项任务都带一个检查动作。不要把“完成整站”当作唯一任务，否则等到最后才会发现前面的数据结构或保存方式不合适。小步是为了尽早看到错误，不只是为了写更短提示词。

#### 定义与适用条件

首版只实现足以走通使用场景的功能，额外想法记录为后续候选。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 列出能走通使用场景的一圈必要功能。
2. 把不影响这一圈的想法移到后续清单。
3. 为每次小改动安排一个立即可做的检查。

#### 例题 1：决定是否做登录

个人单浏览器首版需要登录吗？

1. 回看用户只有自己。
2. 当前不要求跨设备共享。
3. 用本地保存走通场景，并写明限制。

参考结果：

首版不做登录，数据保存在当前浏览器。换设备不会同步；若以后需要同步，再重新设计账号与存储。

#### 例题 2：把大任务拆小

任务“做完学习清单”怎样拆？

1. 先只显示页面与空状态。
2. 加入添加、完成和删除，每一步检查动作。
3. 再保存和备份，检查刷新与恢复。

参考结果：

任务 1：显示空清单。任务 2：添加非空计划并拒绝空白。任务 3：按 ID 切换和删除。任务 4：刷新保存与 JSON 备份。每一步单独验证，失败就先修这一块。

#### 概念检查

哪项适合首版？

- A. 个人清单加自动支付
- B. 添加、完成、删除和本地保存
- C. 同时做社区、排行榜和同步

参考选择：B

- A：支付引入新的业务与风险。
- B：能够走通最初场景且范围明确。
- C：多个新场景会让首版难以完成。

#### 互动判断

四个额外建议都很诱人，哪些值得现在加入？

##### 情境 1

Agent 提议加入账号。当前只有自己使用。

- A. 直接加入
- B. 写到后续，保留本地限制说明
- C. 删掉保存功能

参考选择：B

- A：加入账号会扩大首版。
- B：范围保持明确，用户也知道代价。
- C：这会破坏跨天找回计划的场景。

##### 情境 2

你发现刷新会丢失清单。

- A. 是首版需要修的缺口
- B. 无所谓，先排行榜
- C. 只改标题

参考选择：A

- A：持久保存是当前场景的一部分。
- B：新功能不能弥补核心场景失败。
- C：标题变化不解决数据丢失。

##### 情境 3

一次提交包括添加、登录、支付，怎么调整？

- A. 更长提示词一次做完
- B. 拆开，先验证添加
- C. 不检查直接接受

参考选择：B

- A：描述更长也不能降低改动范围。
- B：小范围更容易理解和验证。
- C：没有证据就无法判断首版可靠。

继续练习：给自己的项目写“本次必须做 / 以后考虑”，每项说明理由。

#### 常见误区

- 错误想法：首版越多越有诚意。
  纠正：首版先验证一件事情有用，过多功能增加等待和误解。

- 错误想法：拆任务就是按文件分工。
  纠正：优先按可验证行为拆分；一个小行为可能涉及多个文件。

#### 独立练习

##### 练习 1（难度 1/6）

提醒、排行榜、添加计划，哪项先做？

提示：用用户场景筛选。

##### 完整解答

1. 先保证能记录和找回。
2. 把其余想法写入以后清单。

先添加计划。另两项不是个人清单场景的必要条件。

##### 练习 2（难度 2/6）

不做云同步应怎样告诉用户？

提示：说明换设备会发生什么。

##### 完整解答

1. 范围选择会影响体验。
2. 限制要写在说明中，不能只藏在开发计划里。

只保存在此浏览器，换设备或清除数据后不能直接找回；请下载备份。

##### 练习 3（难度 2/6）

把“把页面做完”改成一个小任务。

提示：选一个可直接点击验证的行为。

##### 完整解答

1. 指定触发操作。
2. 同时约定正常与错误结果。

添加非空标题后显示新项；空白输入显示提示且不新增。

##### 练习 4（难度 3/6）

中途必须加入多人同步，如何处理？

提示：这会改变数据位置与权限。

##### 完整解答

1. 承认这是需求变更。
2. 不要在个人清单方案上假装只加一个按钮就够了。

暂停原计划，确认共享方式与权限，重写范围和验收，重新估算任务。

先修：user-problem。相对难度 1/6。

来源：[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

### 1.3 先说清楚怎样算完成

把“好用”写成能亲手检查的结果。

核心意思：验收标准是一组具体输入、操作和预期结果；它们让你和 Agent 对完成有相同理解。

直觉：订蛋糕时说“不要太甜”容易误会；说明尺寸、口味和交付日期就更容易检查。

#### 学习目标

- 写明检查的起点、动作和预期结果。
- 用自己的检查结果判断是否完成，而非只听 Agent 报告。

#### 三句话写一个检查

用“给定……当……那么……”描述行为。给定清单为空，当输入“练习 Git”并点击添加，那么出现一条未完成项。它比“添加功能正常”具体，因为你知道起点、动作和结果。先写标准再写代码，可以避免跟着当前实现反过来降低要求。

#### 边界决定有没有漏掉问题

正常输入只能证明正常路径。全空格、重复标题、刷新、存储失败是另一类情况。首版明确允许重复标题，每条用独立 ID 区分；全空格必须拒绝。标题上限是去空白后 80 个 UTF-16 代码单元，少数符号会占多个；不要随口把代码的 length 说成所有语言里的“字符数”。

#### 功能、体验和限制分开写清

功能标准描述正确结果；体验标准包括键盘可提交、手机不横向溢出；限制说明包括不跨设备同步。限制不是测试失败的借口：如果标准要求刷新保留，不能在验收时改口说本地只是演示。需要改目标时，与原始目的一起重新确认。

#### 定义与适用条件

验收标准是一组具体输入、操作和预期结果；它们让你和 Agent 对完成有相同理解。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 写明检查的起点、动作和预期结果。
2. 至少加入一个边界或失败输入。
3. 用自己的检查结果判断是否完成，而非只听 Agent 报告。

#### 例题 1：验收空输入

怎么检查“不能添加空计划”？

1. 从空清单开始。
2. 输入三个空格，点击添加。
3. 确认数量没变且显示可理解提示。

参考结果：

给定 0 项，当提交全空格，那么仍为 0 项，提示“请先写一项学习计划”。不要仅检查按钮是否能点。

#### 例题 2：验收重复标题

两条都叫“学 Git”，删除第二条应发生什么？

1. 先添加两条同标题记录。
2. 确认它们有不同 ID。
3. 删除第二条，观察第一条仍在。

参考结果：

剩下第一条，而不是全部删除。验收动作只针对所选记录；重复标题是允许输入，不应依靠标题定位。

#### 概念检查

哪一条能直接执行验收？

- A. 功能稳定
- B. 空白提交后数量不变并有提示
- C. 测试尽量多

参考选择：B

- A：缺少输入和结果。
- B：有操作和预期，可直接检查。
- C：数量本身不说明覆盖什么。

#### 互动判断

如果只检查普通输入，会漏掉什么？

##### 情境 1

输入三个空格。首版应？

- A. 新增空项
- B. 不新增，显示提示
- C. 崩溃后重开

参考选择：B

- A：空项无法表达计划。
- B：符合拒绝空白的标准。
- C：预期错误应被处理并解释。

##### 情境 2

两条同标题，删一条后全没了。

- A. 符合简化逻辑
- B. 属于验收失败
- C. 只改文案

参考选择：B

- A：允许重复就不能按标题全删。
- B：按独立 ID 定位才符合所选记录的行为。
- C：文案不能修复数据错误。

##### 情境 3

所有已写测试通过，但没有测试刷新。

- A. 宣称刷新已验证
- B. 记录未验证，亲自刷新检查
- C. 撤掉保存要求

参考选择：B

- A：没有证据支持这项结论。
- B：补齐验收证据才知道跨天场景是否成立。
- C：不能迁就实现改变核心目标。

继续练习：挑选自己的一个功能，写正常、边界、失败三条验收案例。

#### 常见误区

- 错误想法：“页面没报错”就是完成。
  纠正：还要对照具体输入与结果；错误可以表现为静默丢数据。

- 错误想法：所有测试绿了就一定满足需求。
  纠正：如果缺少刷新或空白案例，绿色只支持已有案例，不补上缺失标准。

#### 独立练习

##### 练习 1（难度 2/6）

为完成勾选写一条标准。

提示：给出初始状态和点击结果。

##### 完整解答

1. 先约定单次变化。
2. 再检查反向操作避免只能完成不能取消。

给定一条未完成项，勾选后它显示已完成；再次取消则恢复未完成。

##### 练习 2（难度 2/6）

“界面高级”怎样改得可检查？

提示：关注阅读、屏幕和操作。

##### 完整解答

1. 把审美偏好补成具体布局要求。
2. 高级本身不作为唯一验收标准。

在 390px 宽度下标题可换行，没有横向滚动；所有按钮可用键盘聚焦。

##### 练习 3（难度 2/6）

挑出缺失案例：普通添加、普通删除、普通勾选。

提示：查看用户第二天会做什么。

##### 完整解答

1. 对照跨天使用。
2. 加入错误与歧义输入，不只检查顺利路径。

缺少刷新保留、全空格拒绝和重复标题删除等案例。

##### 练习 4（难度 2/6）

Agent 给出了“测试通过”，你还需要什么？

提示：通过的是哪些检查？

##### 完整解答

1. 要求证据与范围。
2. 不把一句结论当作全部功能的保证。

运行命令、实际结果、覆盖的案例、未检查的项目；再自己验收关键动作。

先修：small-scope。相对难度 1/6。

来源：[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)；[Node.js：测试运行器](https://nodejs.org/api/test.html)

### 章末回顾

#### 回顾 1

“做个学习神器，加所有功能”怎样变成首版？

提示：回到一个人一次使用的麻烦。

##### 完整解答

1. 确定使用者与目的。
2. 筛出能走通这一圈的功能。
3. 为普通、空白和刷新各写一条标准。

用户是自己；场景是晚上找学习计划；首版添加、完成、删除、保存；账号与同步后续再议。

#### 回顾 2

“添加功能正常”怎样验收？

提示：明确起点、动作和结果。

##### 完整解答

1. 写正常结果。
2. 写拒绝输入。
3. 说明结果可观察而不只看有没有报错。

空清单提交“学 Git”后出现未完成项；全空格不新增；两端空白被清理。

## 第 2 章 看懂项目怎样运行

找到项目入口、画出数据路径，按说明在本机运行。

### 2.1 看懂文件夹里的分工

先找入口，再看每个文件为什么存在。

核心意思：项目是一组协作的文件。读 README 找运行方法，再沿入口找到界面、逻辑、配置和测试。

直觉：餐馆有菜单、厨房和账本；把它们全部堆在一张纸上，会很难修改。

#### 学习目标

- 先读 README 和配置，确认入口与运行命令。
- 沿一个用户动作找到涉及的文件，不随意删除陌生文件。

#### 从说明文件开始

打开一个陌生项目，先找 README。它应说明用途、运行步骤和限制。再看 package.json：这是 Node 项目的配置，scripts 是命令的短名字，dependencies 是需要安装的外部包。本案例没有第三方依赖；不要因此断言所有网页项目都不需要安装。

#### 沿入口看四类文件

index.html 给浏览器页面结构，并引用 style.css 和 app.mjs。CSS 改外观，app.mjs 把按钮和数据连起来，tasks.mjs 保存添加、切换、删除等规则。tasks.test.mjs 检查规则。server.mjs 只在本机提供这些文件，README 解释怎么运行。先能指出责任，再考虑框架。

#### 读到能解释行为的程度

你暂时不用理解每个语法细节，但要知道点击添加时谁接收输入、谁验证、谁保存、谁画页面。看到不懂的一行可以让 Agent 用具体输入解释，再自己对照文件。问“这一行删除前为什么要检查 ID？”比“把整个项目讲一下”更容易获得可验证回答。

#### 定义与适用条件

项目是一组协作的文件。读 README 找运行方法，再沿入口找到界面、逻辑、配置和测试。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 先读 README 和配置，确认入口与运行命令。
2. 把界面、逻辑、测试和工具文件分别指出来。
3. 沿一个用户动作找到涉及的文件，不随意删除陌生文件。

#### 例题 1：只改外观

希望按钮更大，优先看哪些文件？

1. 找 CSS 中 button 的规则。
2. 确认 HTML/JS 给按钮的结构与类名。
3. 改后用窄屏和键盘检查。

参考结果：

主要看 style.css；必要时核对 index.html 和 app.mjs。不要为了按钮大小去改数据结构或删除测试。

#### 例题 2：只改标题限制

标题上限从 80 改为 100，影响哪里？

1. tasks.mjs 存在校验常量。
2. 测试中存在 80 与 81 的边界。
3. 说明与输入反馈也写了上限。

参考结果：

先确认需求，然后同步修改规则、边界测试和 README；只改页面提示会让真正校验仍停在 80。

#### 概念检查

想改按钮颜色，第一处应看？

- A. style.css
- B. 所有文件全部重写
- C. 备份数据

参考选择：A

- A：样式职责与目标对应。
- B：扩大改动会让审阅更困难。
- C：数据和颜色无关。

#### 互动判断

改动目标只是一处颜色，Agent 的文件列表合理吗？

##### 情境 1

计划先读 README 和 CSS。

- A. 合理，知道运行和样式位置
- B. 浪费时间
- C. 直接删除配置

参考选择：A

- A：先理解入口和样式有助于小范围修改。
- B：这能避免改错地方。
- C：配置可能是运行必要部分。

##### 情境 2

它还要重写 tasks.mjs。

- A. 要求说明与颜色的关系
- B. 直接接受
- C. 删测试配合

参考选择：A

- A：无关逻辑变更应解释或移除。
- B：可能改变数据行为。
- C：削弱检查会掩盖错误。

##### 情境 3

最后交付什么证据？

- A. “已改好”
- B. 修改文件与窄屏、键盘检查结果
- C. 模型很有自信

参考选择：B

- A：缺少实际证据。
- B：它们对应改动范围与体验标准。
- C：自信程度不能替代页面检查。

继续练习：在项目附录里画出文件分工图，并指出一次添加涉及哪些文件。

#### 常见误区

- 错误想法：看不懂的文件删掉就清爽了。
  纠正：先查引用和用途，配置、锁文件与测试可能是运行必需。

- 错误想法：AI 能改就不用知道入口。
  纠正：理解入口能让你判断改动位置是否符合目标，也能帮助排错。

#### 独立练习

##### 练习 1（难度 1/6）

CSS 和 tasks.mjs 分别管什么？

提示：一个管外观，一个管数据规则。

##### 完整解答

1. 按职责而非扩展名记忆功能。
2. 规则改变应有测试，样式改变需看页面。

CSS 管样式，tasks.mjs 管添加、切换、删除和备份格式。

##### 练习 2（难度 1/6）

如何查 npm start 实际执行什么？

提示：看配置里的 scripts。

##### 完整解答

1. 命令别名并不固定。
2. 不要假设所有项目 start 都相同。

读取 package.json 的 scripts.start；本项目是 node server.mjs。

##### 练习 3（难度 1/6）

下载了项目，却找不到打开方式，第一步？

提示：先找说明，不猜命令。

##### 完整解答

1. 依据项目事实。
2. 避免凭空运行不相关的命令。

读 README，核对工具版本和所在目录；缺失时请 Agent 查文件并补说明。

##### 练习 4（难度 2/6）

标题限制改了，为什么测试也可能要改？

提示：测试约定了边界。

##### 完整解答

1. 先确认标准改变。
2. 让测试反映新规则，保留拒绝输入的能力。

如果新需求确实改变上限，需要把正常和拒绝边界一起更新；不能只删失败断言。

先修：acceptance。相对难度 2/6。

来源：[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)；[Node.js：测试运行器](https://nodejs.org/api/test.html)

### 2.2 跟着一条数据走

理解浏览器、服务器、API 和存储的区别。

核心意思：沿输入、处理、保存、显示追踪数据，才能判断问题出在哪一段，以及是否需要服务端。

直觉：寄快递时分清寄件、运输和签收；看到包裹没到，就能查哪一段停住了。

#### 学习目标

- 写出一次动作的输入、处理、保存、显示四段。
- 先解释需求是否需要共享数据，再决定是否引入服务端。

#### 先走完本案例的路径

输入框得到文字，app.mjs 接住提交事件，tasks.mjs 检查并生成新清单，app.mjs 把它写入 localStorage，再显示列表。这里没有把计划发送到服务器。启动的本地服务器只是把 HTML、CSS、JS 文件送到浏览器；不能因为有 server.mjs 就说有云端数据库。

#### 给术语一个用途

前端是在浏览器里呈现与交互的部分。后端通常在服务器处理共享数据、权限或业务。API 是程序之间约定的接口，例如某服务规定向 /tasks 发送什么字段、返回什么结果。数据库是组织并保存数据的工具。它们不是每个小项目都必须有的一套套餐。

#### 用问题决定结构

个人单浏览器清单可以从本地存储开始。如果必须两台设备看到同一份数据，就需要一个可访问的共享数据位置和身份权限方案。部署静态文件只让别人拿到程序，不会让他们自动拿到你的浏览器数据。先确认数据要在哪里、谁能读写，再选实现。

#### 定义与适用条件

沿输入、处理、保存、显示追踪数据，才能判断问题出在哪一段，以及是否需要服务端。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 写出一次动作的输入、处理、保存、显示四段。
2. 确认保存位置以及谁能访问它。
3. 先解释需求是否需要共享数据，再决定是否引入服务端。

#### 例题 1：定位保存失败

点击后看到新项，刷新却没了，先查哪里？

1. 添加与显示已经有可见结果。
2. 检查保存是否报错、使用哪个键。
3. 确认刷新前后网址协议、主机和端口相同。

参考结果：

优先查存储与读取路径。localStorage 按源区分，http://127.0.0.1:5180 和另一端口不会共用同一份数据；不要先重写整个界面。

#### 例题 2：解释公开网址

把项目放到公开静态网站后，同学会看到我的清单吗？

1. 区分程序文件与用户数据。
2. 数据只在自己的浏览器同源存储。
3. 说明没有账号和共享服务。

参考结果：

同学会得到相同程序，但用自己的浏览器存储。你的本地清单不会被静态发布自动上传，也不会自动迁移到新网址。

#### 概念检查

静态发布会自动上传浏览器里的清单吗？

- A. 会，网址相同即可
- B. 不会，需要额外数据方案
- C. 会，改端口即可

参考选择：B

- A：静态文件发布不读取你的本地数据。
- B：程序文件与用户数据分开。
- C：端口变化反而会改变同源存储空间。

#### 互动判断

同学打开新网址，清单为空。你应如何判断？

##### 情境 1

先问什么？

- A. 是否本来就要求共享数据
- B. 要换哪个动画
- C. 是否重写 CSS

参考选择：A

- A：需求决定空清单是否属于错误。
- B：动画与数据位置无关。
- C：外观不能解释存储位置。

##### 情境 2

当前实现只有 localStorage。

- A. 宣称同步已完成
- B. 说明各浏览器独立保存
- C. 加入一个同步图标

参考选择：B

- A：没有共享数据证据。
- B：准确说明当前行为。
- C：图标不会产生共享服务。

##### 情境 3

用户确实要两台设备同步。

- A. 继续保留原范围却称完成
- B. 重新确认账号、数据位置与权限
- C. 复制 CSS

参考选择：B

- A：方案已无法满足新需求。
- B：先决定谁的数据和访问边界再实现。
- C：样式不会提供同步。

继续练习：画一条你自己的项目数据路径，标明数据停在哪里。

#### 常见误区

- 错误想法：有服务器文件就一定有后端业务。
  纠正：本案例服务器只提供静态文件，不处理清单业务。

- 错误想法：上线网页等于所有设备同步数据。
  纠正：共享网址与共享用户数据是两件事；同步要另行设计。

#### 独立练习

##### 练习 1（难度 1/6）

本案例数据经过哪些环节？

提示：从输入框开始。

##### 完整解答

1. 指出每段作用。
2. 保存失败应反馈，不应宣称已保存。

输入框 → app.mjs 事件 → tasks.mjs 规则 → localStorage 保存 → 页面显示。

##### 练习 2（难度 2/6）

什么需求会改变本地存储方案？

提示：考虑两个人或两台设备。

##### 完整解答

1. 先确认读写者。
2. 不要只把 localStorage 换名字就说完成同步。

跨设备同步、多人共享或权限管理，需要重新设计共享数据与身份方案。

##### 练习 3（难度 2/6）

页面正常但手机没有旧数据，一定是 bug 吗？

提示：回看“不跨设备同步”的范围。

##### 完整解答

1. 依据明确需求判断。
2. 给用户准确的限制说明。

不一定。本地方案不同设备各有存储；若需求要求同步，则当前方案不满足。

##### 练习 4（难度 2/6）

API 返回数据，不等于什么？

提示：程序仍要校验和显示。

##### 完整解答

1. 分清接口、处理与呈现。
2. 发生错误时逐段定位。

不等于界面已经正确显示，也不等于客户端输入可以完全信任。

先修：project-map。相对难度 2/6。

来源：[MDN：客户端与服务器](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview)；[MDN：localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### 2.3 让项目在本机跑起来

分清终端、目录、运行工具与依赖。

核心意思：按项目说明，在正确目录用合适的工具执行命令；读懂报错，再决定下一步。

直觉：菜谱写“放入烤箱”时，先确认你拿的是烤箱、温度合适，而且放的是这道菜。

#### 学习目标

- 进入独立练习目录，核对 README 和工具版本。
- 保留错误信息并解释它发生在环境、安装还是运行阶段。

#### 终端是输入命令的地方

编辑器改文件；终端执行命令。先建立独立练习目录，把附录项目文件按名字保存进去，在编辑器打开这个目录，再打开集成终端。许多编辑器让终端从所打开目录开始；不确定时看路径。cd 表示进入目录，例如 cd learning-list；带空格的路径需要引号。错误目录会让命令找不到配置或文件。

#### 先检查工具再运行

安装 Git 和 Node.js 时使用本节来源中的官方入口，按自己的系统选择安装方式。终端输入 git --version、node --version 和 npm --version，确认能找到工具。本案例要求 Node.js 22.12+，有 npm start 和 npm test。进入项目目录后先测试，再启动；看到本地网址后在浏览器打开，终端要保持运行，Ctrl+C 停止服务器。

#### 依赖不是遇错就乱装

有 dependencies 的 Node 项目通常要安装外部包。若 README 要求且已有匹配的 package-lock.json，npm ci 会按锁文件安装并在不一致时失败；它会重建 node_modules。本案例无外部依赖，不需要安装。遇到报错保留原文与执行目录，不要让 Agent 无理由删除锁文件、降级所有包或反复复制陌生脚本。

#### 定义与适用条件

按项目说明，在正确目录用合适的工具执行命令；读懂报错，再决定下一步。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 进入独立练习目录，核对 README 和工具版本。
2. 执行该项目的测试与启动命令，观察实际结果。
3. 保留错误信息并解释它发生在环境、安装还是运行阶段。

#### 例题 1：运行贯穿项目

怎样启动学习清单？

1. 把项目文件保存到 learning-list 并在此目录开终端。
2. node --version 确认版本，npm test 验证规则。
3. npm start 后打开本地网址，终端保持运行。

\`\`\`sh
node --version
npm test
npm start
\`\`\`

参考结果：

预期：测试通过；终端显示 http://127.0.0.1:5180。浏览器打开该网址，终端保持运行，Ctrl+C 停止。本案例无外部包，无需 npm install。

#### 例题 2：处理端口被占用

看到 EADDRINUSE，应该升级全部依赖吗？

1. 记录命令 npm start 与完整错误。
2. 这是地址/端口已经被占用。
3. 找到自己的旧服务器并停止，或明确修改端口与访问地址。

参考结果：

先在旧终端 Ctrl+C 停止自己启动的服务，再启动。不要随意杀未知进程。换端口后属于另一个源，原 localStorage 数据不会自动出现在新端口。

#### 概念检查

EADDRINUSE 最直接表示什么？

- A. 所有代码都坏了
- B. 请求监听的地址或端口被占用
- C. Git 提交失败

参考选择：B

- A：错误尚未指向业务代码。
- B：先检查自己的旧服务器。
- C：它属于运行环境，与 Git 提交不同。

#### 互动判断

启动失败时，哪个下一步能减少猜测？

##### 情境 1

找不到 package.json。

- A. 核对目录和文件位置
- B. 删所有测试
- C. 改按钮颜色

参考选择：A

- A：命令很可能在错误目录运行。
- B：测试与配置位置无关。
- C：样式不会影响命令找到文件。

##### 情境 2

端口 5180 已占用。

- A. 随便杀系统进程
- B. 检查并停止自己的旧服务
- C. 重新安装全部包

参考选择：B

- A：不知道用途时杀进程会破坏其他工作。
- B：先处理已经运行的同一项目。
- C：依赖安装不能释放端口。

##### 情境 3

现在页面能打开，你写什么记录？

- A. 环境版本、命令、网址和结果
- B. 只有“成功”
- C. 保证所有机器都成功

参考选择：A

- A：别人可以据此复现。
- B：缺少环境与操作信息。
- C：一次本机成功不能证明所有平台。

继续练习：按附录运行项目，写下版本、目录、命令、结果四项。

#### 常见误区

- 错误想法：所有项目都输入同一组命令。
  纠正：命令由项目配置与 README 决定；先查再运行。

- 错误想法：报错时删锁文件最省事。
  纠正：锁文件支持可重复安装，删除会改变依赖版本；先查具体原因。

#### 独立练习

##### 练习 1（难度 1/6）

终端找不到 package.json，先检查什么？

提示：文件在哪，终端在哪？

##### 完整解答

1. 先验证路径。
2. 不要在错误目录随机安装包。

检查当前目录是否项目根目录，配置是否保存到正确名字和位置。

##### 练习 2（难度 1/6）

node --version 不存在怎么办？

提示：先解决工具可用性。

##### 完整解答

1. 工具缺失不是业务代码错误。
2. 先使运行环境满足 README。

按 Node 官网安装说明安装或检查 PATH，然后重开终端再核对版本。

##### 练习 3（难度 2/6）

npm ci 因锁文件不匹配失败，应怎么办？

提示：失败指出了配置与记录不一致。

##### 完整解答

1. 确认失败原因。
2. 变更依赖时一起提交匹配的文件。

核对分支、package.json 和锁文件；按维护者约定更新并审阅依赖变化，不直接删锁文件绕过。

##### 练习 4（难度 1/6）

本机网址关闭终端后打不开，为什么？

提示：谁在提供文件？

##### 完整解答

1. 观察终端进程。
2. 启动成功后再在浏览器访问。

本地服务器已停止；重新在正确目录启动。文件保存与服务运行是两个状态。

先修：data-flow。相对难度 2/6。

来源：[npm：ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/)；[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)；[MDN：localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)；[Git：安装](https://git-scm.com/install/)；[Node.js：下载](https://nodejs.org/en/download)

### 章末回顾

#### 回顾 1

绘制一次添加的数据路径，说明服务器做什么。

提示：区分送文件与保存业务。

##### 完整解答

1. 读入口引用。
2. 沿提交处理找到规则和保存。
3. 确认没有共享清单 API。

输入 → app.mjs 事件 → tasks.mjs 规则 → localStorage → 渲染。server.mjs 只提供静态文件。

#### 回顾 2

npm start 失败，至少给 Agent 什么材料？

提示：能让对方复现。

##### 完整解答

1. 先确定环境满足说明。
2. 按错误区分目录、工具与端口。
3. 不随意删除依赖记录。

当前目录、工具版本、运行命令和完整错误；必要时给配置文件。

## 第 3 章 用 Git 留下可回退的记录

区分工作区、暂存区与提交，理解分支、远端、PR 和恢复。

### 3.1 保存文件不等于 Git 提交

用工作区、暂存区、提交三个位置理解记录。

核心意思：编辑保存改变工作区，git add 选择当时的内容放入暂存区，git commit 把暂存内容记录为本地提交。

直觉：桌面上的草稿、装进信封的版本、已经寄出的信不是同一个位置；继续改草稿不会自动改信封。

#### 学习目标

- 用 status 确认分支及文件状态，阅读相关 diff。
- 完成对应验证后创建有明确目的的本地提交。

#### 先知道在哪个仓库

Git 是版本记录工具，GitHub 是可以托管仓库的服务。仓库记录文件历史。新练习目录可用 git init -b main 建立仓库；复制别人的项目通常用 git clone 获取仓库，别在已有仓库内再随意 init。先用 git status 看当前分支和改动。提交身份可在练习仓库用 git config user.name 和 user.email 设置，只影响这里；邮箱可能随公开提交被看到。

#### 三处内容可以不同

工作区是现在编辑的文件；暂存区是你准备放进下次提交的内容；HEAD 指当前检出的提交，通常是当前分支顶端。git add README.md 后继续编辑 README，暂存区仍保留刚才 add 的版本。git diff 看工作区与暂存区之差；git diff --staged 看暂存区与 HEAD 之差。新建且未暂存的文件通常不在普通 diff 中，要一起看 status 和文件。

#### 每次提交只说明一个目的

读过差异、完成本次检查后，明确 add 需要的文件，再 commit。提交说明写为什么改，例如“拒绝全空格计划”，而不是“改了很多”。.gitignore 排除不应纳入的新文件，例如依赖目录和本地秘密文件；它不能移除已经跟踪的内容，更不能清除历史中已泄露的秘密。

#### 定义与适用条件

编辑保存改变工作区，git add 选择当时的内容放入暂存区，git commit 把暂存内容记录为本地提交。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 用 status 确认分支及文件状态，阅读相关 diff。
2. 只暂存本次需要的文件，再检查 staged diff。
3. 完成对应验证后创建有明确目的的本地提交。

#### 例题 1：第一次练习提交

在新建 learning-list 练习目录里记录 README。

1. 先建立 main 仓库并设置此仓库身份。
2. 保存 README.md，检查并暂存。
3. 阅读暂存差异后提交，查看日志。

\`\`\`sh
git init -b main
git config user.name "你的名字"
git config user.email "你选择公开的邮箱"
git status
git add README.md
git diff --staged
git commit -m "说明学习清单的运行方式"
git log --oneline
\`\`\`

参考结果：

只在新的练习仓库执行 init；已有项目从 status 开始。README.md 需要先创建并保存，邮箱使用你选择公开的提交地址。

#### 例题 2：解释暂存后又编辑

文件 v1 已提交；编辑成 v2 并 add；再编辑成 v3。不再次 add，commit 记录什么？

1. HEAD 是 v1，暂存区是 v2，工作区是 v3。
2. 普通 diff 显示 v2 到 v3。
3. staged diff 显示 v1 到 v2。

参考结果：

commit 记录 v2，工作区仍为 v3 且有未暂存改动。若本次要提交 v3，先审阅再 add；不要把 commit 想成自动抓取所有当前文件。

#### 概念检查

add 后又改文件，commit 默认记录？

- A. 最后保存的所有内容
- B. 暂存时的内容
- C. GitHub 上的版本

参考选择：B

- A：commit 不自动重新 add。
- B：暂存区是下次提交的来源。
- C：本地提交不读取远端网页内容。

#### 互动判断

先预测：暂存 v2 后编辑成 v3，再提交会发生什么？

##### 情境 1

哪个命令先了解当前情况？

- A. git status
- B. git push --force
- C. 删除 .git

参考选择：A

- A：先看分支和改动状态。
- B：推送不能解释本地暂存情况。
- C：删除记录会失去历史。

##### 情境 2

暂存 v2 后工作区 v3，普通 diff 比较？

- A. v1 与 v2
- B. v2 与 v3
- C. 远端与 v3

参考选择：B

- A：这是 staged diff 的比较。
- B：普通 diff 比较暂存和工作区。
- C：远端不是默认比较对象。

##### 情境 3

现在 commit，没有再次 add，提交保存？

- A. v3
- B. v2
- C. v1

参考选择：B

- A：v3 没进入暂存区。
- B：提交记录暂存的 v2。
- C：v1 是提交前 HEAD。

继续练习：在练习台重现这个过程，观察三列内容和两种差异。

网页附单文件 Git 台：修改工作区、暂存、提交、取消暂存、恢复、创建/切换分支、模拟推送、撤销普通提交。重置只影响练习。远端从初始 main 开始，教学模型不处理网络、认证、未跟踪文件、冲突和复杂历史。

#### 常见误区

- 错误想法：点保存就有可回退的提交了。
  纠正：编辑器保存只写工作区，还需要明确暂存与提交。

- 错误想法：git add . 总是最简单也最合适。
  纠正：它可能包含无关文件；先查看状态，初学时明确列文件。

#### 独立练习

##### 练习 1（难度 2/6）

工作区 v3、暂存 v2、HEAD v1，不再 add 的提交结果？

提示：commit 读取哪个位置？

##### 完整解答

1. 暂存内容进入提交。
2. 提交不自动覆盖你的工作区编辑。

新 HEAD 为 v2；工作区仍 v3，未暂存差异仍存在。

##### 练习 2（难度 2/6）

普通 diff 为空，是否一定没有可提交内容？

提示：查看暂存区与 HEAD。

##### 完整解答

1. 比较对象不同。
2. 新文件也要结合 status 判断。

不一定，改动可能已暂存；还要看 git diff --staged 与 status。

##### 练习 3（难度 1/6）

只提交说明文件，应该怎样 add？

提示：使用明确路径。

##### 完整解答

1. 避免无关改动。
2. 检查暂存范围后再提交。

git add README.md，再 git diff --staged 检查没有别的内容。

##### 练习 4（难度 2/6）

.env 已经进入公开历史，加入 ignore 是否解决泄露？

提示：历史仍在。

##### 完整解答

1. 停止使用旧秘密是优先动作。
2. ignore 只防止符合规则的未跟踪文件被正常添加。

没有。先撤销或轮换泄露凭据，再按维护流程清理跟踪与历史。

先修：run-environment。相对难度 2/6。

来源：[Pro Git：记录变更](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)；[Git：diff](https://git-scm.com/docs/git-diff)；[OWASP：秘密管理](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)；[Git：init](https://git-scm.com/docs/git-init)

### 3.2 分支、推送和 PR 各做什么

让一项改动有自己的位置和审阅过程。

核心意思：分支给改动一条独立记录线，推送更新远端分支，PR 提议把一条分支的改动合入另一条。它们都不自动表示上线。

直觉：在自己的稿件副本上修订，把稿件交出去，再请编辑收录，是不同步骤。

#### 学习目标

- 确认工作区状态，为一个具体改动创建分支。
- 在 PR 说明触发问题、改动结果与验证；区分提交、推送、合并和发布。

#### 先在小分支上做一件事

工作区干净时，用 git switch -c feature/empty-title 新建并切换分支，再修空白标题。在分支上提交，main 不会因为这次提交自动前进。分支不是完全隔离的文件夹：未提交改动有时会随切换保留，有时阻止切换，所以切换前先 status 并保存好工作。

#### 远端是另一个仓库位置

git remote -v 看配置的远端名称与地址，origin 只是常见名称，不是固定服务。git push -u origin feature/empty-title 上传这条分支的提交，并设置上游关联。推送需要对应仓库权限；没有原仓库权限时通常先 fork 到自己的账号，再从 fork 提交 PR。远端凭据应走受支持的登录方式，不写进源码。

#### PR 是带证据的修改建议

PR 中写原来在什么输入下出了问题、现在的行为、改了什么、怎么验证、还有什么限制。评审者可以看差异并要求修改。创建 PR、通过检查和合并是不同状态；合并之后网站是否更新，还取决于仓库的构建与发布配置。有些项目必须手动部署。

#### 第一次分享与后续更新

如果从 ZIP 新建仓库，尚没有 origin：在选定托管服务建立你自己的空仓库，复制其地址，再用 git remote add origin 后接该实际地址；不要照抄占位词。已有仓库则用 git clone 后接真实地址，在复制出的目录按 README 运行。更新时先 status，整理好本地工作；git fetch origin 获取远端记录，不自动合入当前分支。已设置上游且工作区干净时，git pull --ff-only 只接受快进更新；若历史分叉会拒绝，先阅读两边改动、按项目约定处理，不改用强制推送掩盖问题。

#### 定义与适用条件

分支给改动一条独立记录线，推送更新远端分支，PR 提议把一条分支的改动合入另一条。它们都不自动表示上线。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 确认工作区状态，为一个具体改动创建分支。
2. 核对远端与权限，验证后推送相应分支。
3. 在 PR 说明触发问题、改动结果与验证；区分提交、推送、合并和发布。

#### 例题 1：修空白标题后分享

在已配置 origin 的个人练习仓库里怎样分享分支？

1. 干净状态新建分支。
2. 改动、运行对应测试、审阅并提交。
3. 核对 remote 后推送，在托管服务打开 PR。

\`\`\`sh
git status
git switch -c feature/empty-title
# 编辑并验证，然后：
git add tasks.mjs tasks.test.mjs
git diff --staged
git commit -m "拒绝全空格计划"
git remote -v
git push -u origin feature/empty-title
\`\`\`

参考结果：

前提：工作区干净、文件名匹配项目，origin 已配置为你有权限的目标；PR 在托管服务创建。这些命令不自动创建 PR 或发布网站。

#### 例题 2：写一份有用的 PR 描述

怎么描述空白标题修正？

1. 写触发输入与旧行为。
2. 写新行为及用户结果。
3. 列实际测试和未覆盖范围。

参考结果：

原来提交三个空格会新增不可读空项。现在清理两端空白后拒绝空标题并显示提示。新增空白与普通标题测试；本机 npm test 通过，浏览器已检查提交提示。尚未检查其他浏览器。

#### 概念检查

朋友现在能审阅什么，取决于哪一步？

- A. 只保存在本机
- B. 已推送且有可访问 PR
- C. 我说已完成

参考选择：B

- A：本地内容没有共享。
- B：共享的提交与差异可被审阅。
- C：口头结论没有给出材料。

#### 互动判断

分支推送了，正式网站一定变了吗？

##### 情境 1

feature 分支刚有新提交，main 会？

- A. 自动相同
- B. 保留原顶端，直到明确更新
- C. 自动删除

参考选择：B

- A：两条记录线不自动一起前进。
- B：提交发生在当前 feature 分支。
- C：提交不会自动删 main。

##### 情境 2

push 成功表示？

- A. 远端分支已更新
- B. PR 已合并
- C. 网站已部署

参考选择：A

- A：它把本地提交送到目标远端分支。
- B：合并是另一操作。
- C：部署由项目配置与流程决定。

##### 情境 3

PR 最有用的说明是？

- A. 代码很棒
- B. 触发场景、新行为和验证结果
- C. 模型名称就足够

参考选择：B

- A：无法帮助评审者判断结果。
- B：提供可复查的修改依据。
- C：生成工具不能证明改动正确。

继续练习：用练习台建分支、提交、推送，比较 main、本地 feature 与远端位置。

网页附单文件 Git 台：修改工作区、暂存、提交、取消暂存、恢复、创建/切换分支、模拟推送、撤销普通提交。重置只影响练习。远端从初始 main 开始，教学模型不处理网络、认证、未跟踪文件、冲突和复杂历史。

#### 常见误区

- 错误想法：推送完成，原项目就上线了。
  纠正：推送只更新目标远端分支；还需评审、合并及发布步骤。

- 错误想法：PR 就是直接改别人主分支。
  纠正：PR 是合并建议，是否接受由项目维护流程决定。

#### 独立练习

##### 练习 1（难度 1/6）

本地 commit 后朋友能看到吗？

提示：有没有把记录送到远端？

##### 完整解答

1. 本地与远端独立。
2. 确认链接访问权限。

通常不能；需推送到朋友可访问的远端，再给出分支或 PR 链接。

##### 练习 2（难度 1/6）

origin 是不是永远指朋友原仓库？

提示：它是配置名称。

##### 完整解答

1. 先核对目标。
2. 不要凭名称猜所有者。

不是，git remote -v 才显示实际地址，fork 项目可能指自己的仓库。

##### 练习 3（难度 2/6）

main 干净，新建 feature 分支并提交后 main 会自动改变吗？

提示：分支各指向自己的顶端。

##### 完整解答

1. 比较各分支记录。
2. 未提交工作区另有规则，不混同于提交。

不会因 feature 的提交自动前进；需要明确合并或更新。

##### 练习 4（难度 2/6）

PR 合并了但网站没变，需要查什么？

提示：仓库发布方式。

##### 完整解答

1. 先确认合并版本。
2. 再确认运行网站实际部署了哪个版本。

查看发布工作流、构建结果、部署目标与对应提交；可能需要维护者手动发布。

先修：git-snapshot。相对难度 2/6。

来源：[Pro Git：分支与合并](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)；[Git：push](https://git-scm.com/docs/git-push)；[GitHub：Pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests)；[Git：fetch](https://git-scm.com/docs/git-fetch)；[Git：pull](https://git-scm.com/docs/git-pull)

### 3.3 改错时先分清要撤销什么

不要把所有撤销都交给一个危险命令。

核心意思：撤销前先区分取消暂存、丢弃工作区改动、撤销已提交变化和处理冲突，选择对应动作。

直觉：把信封里的稿件拿出来、丢掉桌面草稿、再寄一封更正信，代价不同。

#### 学习目标

- 先查看工作区、暂存区和日志，确认要撤销哪种状态。
- 撤销或解决冲突后重新读差异并验证，记录发生了什么。

#### 先保存证据，别急着清空

先 git status，看 git diff 和 git diff --staged。想取消某文件暂存而保留编辑，用 git restore --staged README.md。想丢弃工作区相对暂存区的改动，git restore README.md 会覆盖那些编辑，应确认内容已另行保存且确实不要。Git 不保证找回从未记录的草稿；不要让 Agent 遇错就 reset --hard 或 clean -fd。

#### 已分享的记录用更正提交

对于已提交并分享的普通提交，通常用 git revert 指定提交生成反向变化的新提交，保留历史。先保证工作区干净并识别正确提交。revert 也可能冲突，需要解决；撤销合并提交更复杂，本书不展开。暂时切走时可用 stash 保存，默认不含未跟踪文件；-u 才包含这类文件，应用回来也可能冲突，不是永久备份。

#### 冲突需要理解两边意图

两条分支对同一段做了不同修改，Git 可能无法自动决定结果。冲突标记展示两边内容，你要回看需求、读取两边意图、写成最终内容，移除标记，再测试、暂存和完成合并。不要只让 Agent 随机选“我们的”或“他们的”。暂不继续可按当前操作使用 merge --abort 或 revert --abort；先查看状态，避免用错上下文。

#### 定义与适用条件

撤销前先区分取消暂存、丢弃工作区改动、撤销已提交变化和处理冲突，选择对应动作。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 先查看工作区、暂存区和日志，确认要撤销哪种状态。
2. 保存需要保留的内容，再选择影响最小的对应操作。
3. 撤销或解决冲突后重新读差异并验证，记录发生了什么。

#### 例题 1：只想取消暂存

README 改动还要保留，但这次不提交。

1. 用 status 确认它已暂存。
2. 使用 --staged，避免丢弃工作区编辑。
3. 再看状态与文件确认编辑仍在。

\`\`\`sh
git restore --staged README.md
git status
git diff
\`\`\`

参考结果：

取消暂存不等于删掉编辑；在练习台对比普通 restore 的不同结果。仅在已有提交的练习仓库里操作对应文件。

#### 例题 2：合并中的标题限制冲突

一边写 80、一边写 100，能随便保留任一边吗？

1. 查当前约定到底是 80 还是新要求 100。
2. 同步规则、提示与边界测试。
3. 移除冲突标记，测试后完成合并。

参考结果：

若尚未确认改变要求，先询问或回看需求；不能把“没有冲突标记”当作正确。最后内容必须与已确认限制一致，80/81 或 100/101 的边界应跟着规则走。

#### 概念检查

只是取消暂存、保留编辑，选哪个？

- A. git restore --staged README.md
- B. git restore README.md
- C. 删除整个目录

参考选择：A

- A：只把暂存区恢复到 HEAD 内容。
- B：会覆盖未暂存编辑，不符合保留目标。
- C：破坏范围远大于目标。

#### 互动判断

暂存 v2、工作区 v3，两种 restore 的结果相同吗？

##### 情境 1

希望 v3 留在文件，先取消暂存。

- A. restore --staged
- B. restore 文件
- C. reset --hard

参考选择：A

- A：只动暂存，保留工作区 v3。
- B：会让工作区回到暂存内容。
- C：会丢弃更大范围的未保存变化。

##### 情境 2

确实不要 v3，暂存 v2 已确认保存。普通 restore 后？

- A. 工作区 v2
- B. 工作区 v1
- C. 远端 v3

参考选择：A

- A：默认从暂存区恢复工作区。
- B：只有暂存也为 v1 才会得到 v1。
- C：此操作不上传远端。

##### 情境 3

AI 说“先清空所有改动再排错”。

- A. 要求它先读状态和差异，保存有用工作
- B. 直接执行
- C. 删除测试

参考选择：A

- A：先弄清哪些工作会丢失。
- B：可能丢掉从未记录的内容。
- C：测试不是错误证据的替代目标。

继续练习：在练习台分别使用取消暂存与丢弃编辑，写下每列变化。

网页附单文件 Git 台：修改工作区、暂存、提交、取消暂存、恢复、创建/切换分支、模拟推送、撤销普通提交。重置只影响练习。远端从初始 main 开始，教学模型不处理网络、认证、未跟踪文件、冲突和复杂历史。

#### 常见误区

- 错误想法：撤销命令肯定都能找回。
  纠正：从未记录的工作区编辑可能无法恢复；先检查与保存。

- 错误想法：冲突解决就是删除几行符号。
  纠正：符号消失只说明文本可合并，还需判断最终行为是否符合需求。

#### 独立练习

##### 练习 1（难度 1/6）

取消暂存又保留编辑，应选什么？

提示：目标只影响暂存区。

##### 完整解答

1. 暂存回到 HEAD 对应内容。
2. 工作区编辑保留，再用 status 检查。

git restore --staged README.md。

##### 练习 2（难度 2/6）

普通 git restore README.md 从哪里取内容？

提示：默认不是远端。

##### 完整解答

1. 比较暂存与工作区。
2. 若需要原草稿，先另存再操作。

默认从暂存区恢复工作区，丢掉该文件未暂存的修改。

##### 练习 3（难度 2/6）

已推送的普通坏提交，希望保留历史，怎么处理？

提示：增加反向记录。

##### 完整解答

1. 不随意改写已分享历史。
2. 普通提交与合并提交规则不同。

干净工作区中识别正确提交，用 git revert 生成撤销提交，解决可能冲突并验证后再推送。

##### 练习 4（难度 2/6）

stash 默认能保存新建未跟踪文件吗？

提示：区分 tracked 和 untracked。

##### 完整解答

1. 先 status 查看文件类别。
2. 恢复也可能冲突，先保留 stash 与记录。

默认不保存；需要明确 -u 才包括未跟踪文件，仍不替代永久备份。

先修：git-collaboration。相对难度 2/6。

来源：[Git：restore](https://git-scm.com/docs/git-restore)；[Git：revert](https://git-scm.com/docs/git-revert)；[Git：stash](https://git-scm.com/docs/git-stash)；[Pro Git：分支与合并](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

### 章末回顾

#### 回顾 1

HEAD v1、暂存 v2、工作区 v3，提交并推送会分享什么？

提示：推送分享提交，不直接分享工作区。

##### 完整解答

1. commit 读取暂存。
2. push 上传分支记录。
3. 要分享 v3 必须重新审阅、暂存、提交和推送。

提交 v2，推送更新远端到该提交；v3 仍是本地未暂存编辑。

#### 回顾 2

取消暂存、丢弃编辑与撤销已推送提交怎么区分？

提示：看状态和影响。

##### 完整解答

1. 先 status 与 diff。
2. 备份需要保留的内容。
3. 选择对应操作并重新验证。

restore --staged 保留编辑；普通 restore 覆盖工作区未暂存内容；普通已分享提交可用 revert 产生新记录。

## 第 4 章 把 Agent 变成合作伙伴

提供真实上下文，拆成小任务，审阅改动并要求验证证据。

### 4.1 先让 Agent 了解真实项目

用文件事实替代脑补。

核心意思：给 Agent 用户目标、当前项目、相关文件、运行方式和边界；让它把事实、假设与未知分开。

直觉：请新同事接手厨房，需要给菜单和设备位置，而不是只说“你是顶级大厨”。

#### 学习目标

- 提供当前需求、真实文件位置、运行方法和边界。
- 对照文件确认计划，再把稳定约定写入项目说明。

#### 给相关材料，不倒入所有内容

提供当前需求、README、相关文件路径和错误原文，说明文件是你提供的还是 Agent 已实际读取的。不要让它说“我已看过仓库”却只看见一段截图。上下文是完成当前任务所需信息，几十页聊天并不一定有用；把已经确认的约定写成一页项目说明，减少反复遗忘。

#### 先形成可以核对的地图

请 Agent 先指出入口、现有实现、可能要改的文件和验证命令，再做改动。你对照文件检查它的理解。对于明确而小的修改，不必每一步都停下来审批；对于是否同步、是否删数据这类改变方向的未知，要求先问清楚，不能默默假设。

#### 给文档准确的地位

不同工具可能支持 AGENTS.md、其他约定文件或自己的配置；本书不假设所有工具自动读同一种文件。可以把 README、范围和验收做成项目说明，在会话中明确要求读取。文件里的指令也需要符合你的真实授权；第三方文档要求上传密钥不因为被读取就合法。

#### 定义与适用条件

给 Agent 用户目标、当前项目、相关文件、运行方式和边界；让它把事实、假设与未知分开。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 提供当前需求、真实文件位置、运行方法和边界。
2. 要求把已经读取的事实、推测与关键未知分开。
3. 对照文件确认计划，再把稳定约定写入项目说明。

#### 例题 1：第一次接手项目

怎样请 Agent 先理解学习清单？

1. 给出用户场景和首版范围。
2. 指出 README、package.json 和入口文件。
3. 要求返回文件职责与验证命令。

参考结果：

先阅读 README.md、package.json、index.html、app.mjs、tasks.mjs。当前是个人单浏览器学习清单，不做账号和同步。请列出已读取的文件、一次添加的数据路径、现有测试命令和你仍不确定的地方。暂不改代码。

#### 例题 2：区分事实和假设

Agent 说“这是 React 项目”，但文件没有 React 依赖。

1. 查 package.json 和 HTML 入口。
2. 指出事实是原生模块，不是 React。
3. 要求更新方案，避免无缘由引入框架。

参考结果：

请引用判断所用文件。当前 index.html 用 type=module 加载 app.mjs，配置没有 React。按现有结构完成任务；如果认为需新增框架，先说明具体必要性及成本。

#### 概念检查

最有用的上下文是？

- A. 你是世界最强工程师
- B. 相关文件、现状、目标和验收
- C. 所有聊天历史不加整理

参考选择：B

- A：角色不能提供项目事实。
- B：能帮助识别正确改动位置与验证方式。
- C：无关材料可能掩盖当前任务。

#### 互动判断

Agent 的理解图有一条错误，继续写代码会怎样？

##### 情境 1

它猜用了 React。你先？

- A. 让它依据配置和入口重新核对
- B. 接受猜测
- C. 加入 React 证明它对

参考选择：A

- A：先纠正事实才能减少无关改动。
- B：方案可能建立在不存在的结构上。
- C：实现不应为证明猜测而改变。

##### 情境 2

要不要跨设备同步尚未决定。

- A. 默认为需要
- B. 向你确认，记录范围
- C. 假装已实现

参考选择：B

- A：这个决定影响架构和权限。
- B：关键未知需要你的方向判断。
- C：结论没有实现和证据。

##### 情境 3

最后应记录哪种材料？

- A. 稳定的范围、运行方式与约定
- B. 所有模型闲聊
- C. 真实密钥

参考选择：A

- A：这些内容可帮助下一次会话接手。
- B：闲聊会增加噪声。
- C：秘密不能为了上下文写进项目。

继续练习：在提示词练习台写一份接手任务，逐项核对是否有对应项目事实。

网页附任务卡台：填写目标、上下文、范围、验收、验证和交付六栏，生成可复制文本。栏目齐全不代表内容可靠；需手动核对事实、边界和证据。

#### 任务卡练习台的同版示例

**本次目标**：先了解项目，暂不修改代码。

**项目事实**：个人单浏览器学习清单。请读 README.md、package.json、index.html、app.mjs、tasks.mjs。

**范围与边界**：不做账号或同步；不上传私人内容，不引入新框架。

**验收标准**：列出已读文件和职责；用一次添加解释数据路径；将事实、假设与未知分开。

**验证方法**：对照实际文件；核对 npm start 与 npm test 对应的脚本，未执行请说明。

**交付要求**：项目地图、拟改位置、验证方式及需要我确认的问题。

#### 常见误区

- 错误想法：提示词越长越容易正确。
  纠正：相关事实比长度有用，重复旧讨论还可能冲突。

- 错误想法：角色写得厉害就不需要项目资料。
  纠正：角色描述不能替代真实文件、约束与验收。

#### 独立练习

##### 练习 1（难度 2/6）

修保存问题，至少提供哪些材料？

提示：沿保存路径找相关事实。

##### 完整解答

1. 让 Agent 知道哪里坏了。
2. 不需要默认提供所有私人文件。

刷新复现步骤、网址、错误原文、app.mjs 保存读取逻辑、README 范围和测试方式。

##### 练习 2（难度 2/6）

AI 声称读过文件，如何核对？

提示：让结论能回到具体位置。

##### 完整解答

1. 不要只问有没有读。
2. 检查它说的入口或函数是否确实存在。

要求给出已读文件列表和相关实现说明，再对照真实文件。

##### 练习 3（难度 2/6）

哪些未知必须先确认？

提示：会改变数据、权限或范围的。

##### 完整解答

1. 小实现细节可自主解决。
2. 方向性未知不能默默猜。

是否允许替换旧数据、是否需要同步、能否新增外部服务等。

##### 练习 4（难度 1/6）

AGENTS.md 是否所有工具都自动生效？

提示：工具能力不同。

##### 完整解答

1. 文件名不构成通用魔法。
2. 重要约定在当前会话也说清楚。

不是；查所用工具约定，并明确要求读取项目说明。

先修：git-recovery。相对难度 3/6。

来源：[Anthropic：提示词实践](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)；[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

### 4.2 写一张能执行的任务卡

精确来自目标与证据，而不来自咒语。

核心意思：任务卡说明目标、事实、范围、验收、验证与交付；写法可以简单，内容必须能指导行动。

直觉：把任务交给同事时，说明“改哪里、为什么、做到什么样、怎么检查”，通常比不断催促有用。

#### 学习目标

- 用一句话限定本次行为变化，并给相关现状。
- 要求提供可复查的验证结果、改动说明和未验证项。

#### 一张卡只做一件事

任务不是“把整个网站优化到专业水平”，而是“拒绝全空格标题，并保留有效标题两端清理行为”。写当前现象、相关文件和已确认条件。告诉 Agent 能自主修改的范围，以及需要先问的变化，例如新增依赖、改数据格式或接入服务。不要把所有动作都变成必须审批，但让它知道哪里会改变你的决定。

#### 把形容词换成例子

“健壮”“优雅”“高质量”可以表达偏好，却不能单独验收。加上具体例子：输入三个空格不新增；输入两端有空白的“练习 Git”新增为清理后的标题；80 个代码单元接受、81 个拒绝。这些标准不是某模型专有技巧，任何合作的人都能理解。

#### 验证要能复查

要求列实际改动、运行命令与结果、未验证事项。Agent 如果没有环境执行，应该说未运行，并提供你可执行的步骤。不要要求它无论如何保证全绿，否则可能得到虚假的测试结论。模板是提醒缺漏的工具，填满六栏并不等于内容正确；你仍要检查字段是否具体和相互一致。

#### 定义与适用条件

任务卡说明目标、事实、范围、验收、验证与交付；写法可以简单，内容必须能指导行动。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 用一句话限定本次行为变化，并给相关现状。
2. 写正常、边界和失败结果，以及不可默默扩大的范围。
3. 要求提供可复查的验证结果、改动说明和未验证项。

#### 例题 1：空白标题任务卡

把“修好输入”改成可执行任务。

1. 指出三个空格目前会变成一项。
2. 给出允许与拒绝案例。
3. 限制改动范围并要求测试与浏览器验证。

参考结果：

目标：拒绝全空格计划。
现状：请读 tasks.mjs、app.mjs 和测试。
范围：不改存储格式，不新增依赖。
验收：三个空格不新增并有提示；“  学 Git  ”保存为“学 Git”。
验证：运行 npm test；检查页面输入与反馈，做不到就列未验证。
交付：说明文件变化、命令结果与限制。

#### 例题 2：修改模糊风格要求

“按钮高级一点”怎样变得可合作？

1. 给视觉偏好或可使用参考，说明用途。
2. 限定只改样式。
3. 加入窄屏与键盘标准。

参考结果：

请把添加按钮做成深绿色、圆角，沿用当前排版；只调整样式。390px 宽度不横向滚动，焦点可见，文字不被裁切。提供改动位置与实际页面检查结果。不能仅凭形容词保证所有人都喜欢。

#### 概念检查

哪句话最能减少误解？

- A. 务必极其专业
- B. 三个空格不新增，提示可理解
- C. 越多文件越好

参考选择：B

- A：没有定义结果。
- B：具体输入与结果可以直接验收。
- C：文件数不能代表质量。

#### 互动判断

这张任务卡是否能让你判断结果？

##### 情境 1

目标只写“完善网站”。

- A. 已经很清楚
- B. 补一个具体行为变化
- C. 加更多角色称号

参考选择：B

- A：没有判断完成的标准。
- B：先明确本次做什么。
- C：称号不能限定行为。

##### 情境 2

验收只写“体验好”。

- A. 写输入、动作和结果
- B. 不用验收
- C. 让 AI 自己定全部标准

参考选择：A

- A：把偏好转成可检查内容。
- B：没有标准就难判断改动。
- C：你应确认标准与用户目的相符。

##### 情境 3

Agent 无浏览器，如何报告？

- A. 声称页面检查已过
- B. 列未验证项及你的检查步骤
- C. 隐藏限制

参考选择：B

- A：会制造虚假证据。
- B：准确报告能力和证据边界。
- C：限制会影响你是否接受成果。

继续练习：把自己的模糊请求写进练习台；读生成任务卡，逐项问“我能检查这句话吗”。

网页附任务卡台：填写目标、上下文、范围、验收、验证和交付六栏，生成可复制文本。栏目齐全不代表内容可靠；需手动核对事实、边界和证据。

#### 任务卡练习台的同版示例

**本次目标**：拒绝全空格计划，保留有效标题清理两端空白。

**项目事实**：请读 tasks.mjs、app.mjs、tasks.test.mjs；现有个人清单，无第三方依赖。

**范围与边界**：不改备份格式，不新增依赖或同步服务。

**验收标准**：三个空格不新增且有提示；“  学 Git  ”保存为“学 Git”；80 接受，81 拒绝（UTF-16 代码单元）。

**验证方法**：运行 npm test；亲自检查页面输入与提示，无浏览器则列未验证及步骤。

**交付要求**：修改文件、关键差异、实际命令结果、页面检查和未验证项。

#### 常见误区

- 错误想法：精确提示词必须使用很多专业名词。
  纠正：用普通话写清输入和结果也能精确，误用术语会增加误解。

- 错误想法：模板填满就自动得到满分提示词。
  纠正：只说明结构齐全；目标是否正确、上下文是否真实仍需判断。

#### 独立练习

##### 练习 1（难度 2/6）

改写“优化所有代码”。

提示：选一个已观察到的问题。

##### 完整解答

1. 收缩行为范围。
2. 补正常、边界和错误验收。

本次只修全空格标题被添加的问题，保持其他行为与数据格式。

##### 练习 2（难度 2/6）

能否要求 AI 不惜一切保证测试通过？

提示：想想它会不会降低标准。

##### 完整解答

1. 目标是正确行为。
2. 不能允许删断言、跳过检查或虚报结果。

不宜；要求按约定修复，并说明真实结果、失败原因和未执行事项。

##### 练习 3（难度 2/6）

任务卡缺少现状会怎样？

提示：Agent 必须猜哪些事实？

##### 完整解答

1. 给出相关路径与已读事实。
2. 关键未知要求先确认。

可能选错文件、重复实现已有功能或引入不必要结构。

##### 练习 4（难度 2/6）

新依赖何时需要讨论？

提示：它是否改变你已确认的边界？

##### 完整解答

1. 不是所有依赖都坏。
2. 但不能为小修改默默扩大成本。

任务明确不新增依赖时，先解释现有方式为何不够、收益与维护代价，再由你决定。

先修：agent-context。相对难度 3/6。

来源：[Anthropic：提示词实践](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)

### 4.3 用小改动和证据结束一次协作

从“AI 说完成”走到“我知道为什么接受”。

核心意思：审阅差异、对照验收并查看验证证据，决定接受、修正或拆回更小任务。

直觉：装修验收时你会看实际房间，不只看施工队发来的“已完成”。

#### 学习目标

- 阅读文件列表与关键差异，解释它们和目标的关系。
- 接受后记录小步提交和接手说明；有问题则回传具体证据。

#### 读差异从问题出发

先看改了哪些文件，再看关键差异。增加标题校验，应能找到清理、拒绝和错误反馈；测试应覆盖对应案例。如果同时出现新框架、大量重命名和锁文件变动，要求解释为什么是本次必要范围。你不懂某段语法时，要求用具体输入描述分支和结果，再自己试验。

#### 测试不能迁就错误实现

如果上限仍是 80，而 Agent 把 81 的拒绝测试删除来获得绿色，这不是修复。标准确实改变时可以更新测试，但需要把新边界完整补上。避免反复发“还是不行，再修”：把输入、实际结果、预期结果和复现步骤给出去，让下一次修改有新的证据。

#### 结束时留下接手记录

接受后做目的明确的提交，记录做了什么、运行了什么、还没验证什么。下一会话读取这些材料而非重复猜你意图。每完成一个小任务更新清单：已验收、待检查、后续候选。读过、测试过和上线过分别记录，不能用一个“完成”掩盖所有状态。

#### 定义与适用条件

审阅差异、对照验收并查看验证证据，决定接受、修正或拆回更小任务。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 阅读文件列表与关键差异，解释它们和目标的关系。
2. 按预先写的验收操作，核对真实测试及未验证项。
3. 接受后记录小步提交和接手说明；有问题则回传具体证据。

#### 例题 1：审阅空白标题修复

差异多出一个大型依赖，合理吗？

1. 检查功能是否可由 trim 与校验完成。
2. 问新依赖的必要性及维护成本。
3. 若无必要，要求移除无关变更再验证。

参考结果：

当前规则可以在现有函数中完成。请说明新增依赖解决的具体问题；若没有必要，保持原依赖结构。重新运行原有测试，报告结果，而不是为了少文件删测试。

#### 例题 2：给出有用的修正消息

刷新后任务又不见了，怎样反馈？

1. 写输入与操作顺序。
2. 写实际与预期。
3. 提供网址、控制台信息与已测范围。

参考结果：

在 http://127.0.0.1:5180 输入“学 Git”，添加后出现；刷新后变空。预期刷新保留。请检查保存/读取路径与错误处理，先解释原因再做最小修复，不新增同步服务。

#### 概念检查

哪项能支持你接受改动？

- A. Agent 自信
- B. 相关 diff、验收结果和真实测试
- C. 代码行数更多

参考选择：B

- A：信心不能替代验证。
- B：能对照目标复查。
- C：行数与用户结果无直接关系。

#### 互动判断

测试通过了，是否还需看差异？

##### 情境 1

为颜色修改加入数据迁移。

- A. 先要求解释必要性
- B. 立刻接受
- C. 不看文件列表

参考选择：A

- A：数据变化与样式目标关系不明。
- B：可能无意改变已有数据。
- C：你会失去范围判断。

##### 情境 2

测试被删但绿色。

- A. 已完成
- B. 对照验收恢复必要覆盖
- C. 增加模型赞美

参考选择：B

- A：绿色可能来自降低标准。
- B：标准与证据都要保留。
- C：赞美不能产生正确行为。

##### 情境 3

你发现刷新错误，怎样继续？

- A. 重复“你再想想”
- B. 给复现步骤、实际与预期
- C. 推倒重写

参考选择：B

- A：没有新增排错证据。
- B：让后续修改针对具体问题。
- C：重写前应先定位。

继续练习：在练习台填写一张修正任务卡，用证据替代“还是不行”。

网页附任务卡台：填写目标、上下文、范围、验收、验证和交付六栏，生成可复制文本。栏目齐全不代表内容可靠；需手动核对事实、边界和证据。

#### 任务卡练习台的同版示例

**本次目标**：定位并修复刷新后清单丢失，保持原范围。

**项目事实**：http://127.0.0.1:5180 添加“学 Git”后出现，刷新后变空。预期刷新保留。错误原文由我另附。

**范围与边界**：先检查保存/读取与同源，不重写全站，不新增服务，不覆盖旧数据。

**验收标准**：同一网址普通添加刷新保留；全空格仍拒绝；写入失败明确提示未保存。

**验证方法**：重走复现步骤、跑规则测试、查相关错误；无法执行时说明。

**交付要求**：根因与证据、最小修复、真实验证、剩余风险。

#### 常见误区

- 错误想法：看不懂 diff 就直接全部接受。
  纠正：选关键行为，用具体输入让 Agent 解释，再自己核对。

- 错误想法：测试失败就删掉那条测试。
  纠正：先判断是实现违反需求还是标准已被确认修改；不能只追求绿色。

#### 独立练习

##### 练习 1（难度 2/6）

改动 20 个文件但目标是颜色，先做什么？

提示：范围是否对应目的？

##### 完整解答

1. 缩小审阅对象。
2. 不是文件多一定错，而是每项都应有理由。

查看文件列表与差异，要求说明无关变更，拆回样式必要范围。

##### 练习 2（难度 2/6）

如何让 Agent 解释看不懂的条件语句？

提示：提供一个具体输入。

##### 完整解答

1. 让解释能被运行验证。
2. 不要只接受抽象评价。

用三个空格和普通标题分别走这段分支，指出每步值和最终是否新增。

##### 练习 3（难度 2/6）

标准是 80，上限测试被删，能接受吗？

提示：标准有没有明确变更？

##### 完整解答

1. 对照原验收。
2. 测试是证据，不是结果装饰。

不能仅因全绿接受；恢复边界覆盖并修实现，除非先确认新标准且补齐新测试。

##### 练习 4（难度 2/6）

写一条接手记录。

提示：说明已做、已测、未测。

##### 完整解答

1. 明确证据范围。
2. 下一任务可据此继续。

已修空白输入并提交；npm test 通过，页面空白提示已查；其他浏览器与多标签页并发未验证。

先修：task-prompts。相对难度 3/6。

来源：[Git：diff](https://git-scm.com/docs/git-diff)；[Node.js：测试运行器](https://nodejs.org/api/test.html)

### 章末回顾

#### 回顾 1

写“修好刷新丢数据”的任务卡。

提示：现状、范围、标准和证据。

##### 完整解答

1. 明确问题能复现。
2. 限制无关结构变更。
3. 交付命令结果与未验证项。

目标刷新保留；提供网址、步骤、实际/预期和相关保存读取文件；先定位，不接同步；要求测试和浏览器实际证据。

#### 回顾 2

Agent 改 20 文件但目标是按钮颜色，怎样审阅？

提示：每项变化能否解释为必要。

##### 完整解答

1. 不是单靠文件数判错。
2. 查数据、依赖变更是否必要。
3. 接受后留下验证记录。

看文件列表与 diff，要求无关变化的理由，拆回样式范围，检查窄屏和键盘。

## 第 5 章 判断改动是否可靠

自己选择测试案例，复现错误，守住数据与权限边界。

### 5.1 自己选择值得检查的案例

让测试回答用户关心的问题。

核心意思：测试用给定输入核对预期结果；选择正常、边界和失败案例比单纯增加测试数量重要。

直觉：试雨伞不能只在晴天撑开，还要检查下雨和风大时会怎样。

#### 学习目标

- 从验收中选择正常、边界和失败案例。
- 报告运行命令、结果、覆盖范围与仍需检查的行为。

#### 先从验收挑案例

针对添加计划，选择普通文字、全空格、80 和 81 代码单元、重复标题及容量上限。预期结果来自已确认需求，不从现有函数结果自动抄一遍。数据规则测试可以快速运行；页面提示、刷新、键盘和窄屏则需要浏览器检查。两类证据互相补充。

#### 读一条测试就够开始

本案例用 Node 内置测试工具。test 给案例取名，assert.equal 比较值，assert.throws 检查确实拒绝错误输入。npm test 实际运行 node --test tasks.test.mjs。你不必先掌握测试框架大全，先能说明这条测试给了什么输入、期望什么以及为什么值得检查。

#### 别让实现和答案一起猜

如果测试只断言“结果等于同一算法再算一遍”，两边可能一起错。先用手工简单案例、前后对比或另一种检查方式确定预期。例如删两条同标题中的第二条，应手工确认剩第一条。测试通过支持这些案例，不意味着安全、浏览器体验和所有输入都已经验证。

#### 定义与适用条件

测试用给定输入核对预期结果；选择正常、边界和失败案例比单纯增加测试数量重要。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 从验收中选择正常、边界和失败案例。
2. 用独立预期检查规则，再在浏览器检查交互。
3. 报告运行命令、结果、覆盖范围与仍需检查的行为。

#### 例题 1：读空白输入测试

assert.throws(() => addTask([], "   ", "a")) 检查什么？

1. 输入是空数组、三个空格和一个 ID。
2. 预期 addTask 抛出可处理的错误。
3. 页面层还应捕获错误并显示提示。

参考结果：

这条测试支持数据规则拒绝空白；它没有证明用户能看到提示，因为没有运行页面事件和渲染。需要另做浏览器验收。

#### 例题 2：选择删除测试

两个同标题记录，怎样独立验证删除？

1. 创建 ID a 与 b 的同标题记录。
2. 删除 b。
3. 预期数组只含 a，且 a 原状态不变。

参考结果：

用明确的剩余记录比较结果，不只检查长度变成 1。否则实现删错对象也可能过关。

#### 概念检查

删除正确性的好测试是？

- A. 只检查数组变短
- B. 检查留下指定 ID 与原内容
- C. 只看页面没崩溃

参考选择：B

- A：可能删错对象。
- B：直接对应所选条目。
- C：缺少数据结果检查。

#### 互动判断

三类检查中，哪一类支持哪一种结论？

##### 情境 1

纯函数测试空白拒绝通过。能证明？

- A. 数据规则拒绝此输入
- B. 页面提示一定可见
- C. 全部浏览器兼容

参考选择：A

- A：断言覆盖该规则。
- B：页面未执行，仍需检查。
- C：案例没有涉及所有浏览器。

##### 情境 2

两条同标题删一条，测试只查长度。

- A. 足够了
- B. 增加剩余 ID 与内容断言
- C. 删除重复标题标准

参考选择：B

- A：可能删错条目仍过。
- B：用身份检查对应行为。
- C：不能为了弱测试缩减既定允许输入。

##### 情境 3

只运行 Node 测试，报告该写？

- A. 全站已验证
- B. 列规则已测，浏览器待查
- C. 直接上线不看页面

参考选择：B

- A：夸大证据范围。
- B：准确说明支持的结论。
- C：页面可能仍有交互问题。

继续练习：亲自读一条项目测试，写输入、预期和它没有检查的部分。

#### 常见误区

- 错误想法：测试越多就一定越可靠。
  纠正：重复同一路径可能掩盖关键缺口，先关注风险与边界。

- 错误想法：AI 写了测试就已验证。
  纠正：测试必须实际运行，预期也需要对照需求。

#### 独立练习

##### 练习 1（难度 2/6）

列出添加规则的三类案例。

提示：顺利路径、临界点、应拒绝。

##### 完整解答

1. 覆盖三种行为。
2. 同时说明每项预期。

正常“学 Git”；80 接受与 81 拒绝；全空格拒绝。

##### 练习 2（难度 2/6）

数组长度从 2 到 1 能证明删除正确对象吗？

提示：可能删错。

##### 完整解答

1. 长度只支持数量。
2. 对象身份决定删的是哪条。

不能，还需确认剩余 ID 和内容正确。

##### 练习 3（难度 2/6）

规则测试通过，刷新保存是否已证明？

提示：测试是否访问浏览器存储？

##### 完整解答

1. 区分数据函数和页面集成。
2. 补充对应环境的证据。

没有；规则测试不覆盖 app.mjs 与实际存储，应在浏览器添加、刷新并检查。

##### 练习 4（难度 1/6）

Agent 不能运行测试，怎样写报告？

提示：证据要真实。

##### 完整解答

1. 代码存在不等于执行成功。
2. 未验证项应影响接受决定。

说明未运行及原因，列命令和预期；不写“通过”。你随后实际执行并记录结果。

先修：review-changes。相对难度 3/6。

来源：[Node.js：测试运行器](https://nodejs.org/api/test.html)

### 5.2 报错时先复现，再猜原因

把模糊抱怨变成排错材料。

核心意思：记录环境、操作、实际结果和预期，稳定复现后沿数据路径缩小问题，再做最小修复。

直觉：水龙头没水时先检查是否只有这一个龙头没水，再决定查开关还是供水；不是先拆整栋房子。

#### 学习目标

- 写清环境、步骤、实际结果、预期结果和错误原文。
- 修复后复测原案例和邻近边界，留下根因与验证记录。

#### 保留第一次错误

记录所在目录、运行命令、网址、输入与完整错误。页面问题还可以查看浏览器开发者工具的 Console（控制台）与 Network（网络），分别了解脚本错误和请求。截图能补充现象，但文本错误与步骤更便于搜索和复现。日志中可能含隐私或凭据，分享前用占位说明替换秘密。

#### 让猜测接受一次检查

“刷新丢了”可能是未保存、读取失败或换了源。一次只检查一个假设：确认是否同一网址，看保存是否抛错，看存储键是否一致。给 Agent 这些证据，请它指出下一项最能区分原因的检查。若同时改十处，即使好了也难以知道原因，还可能引入新错。

#### 修复后检查原场景和邻近边界

最小修复之后重走原步骤，再检查相邻情况：普通标题能保存、全空白仍拒绝、坏备份不会覆盖。记录根因、修法、验证和剩余问题。排错不是坚持第一猜测；如果证据不支持它，就换假设。也不要把“吞掉异常”当修好：用户仍应知道数据没有保存。

#### 定义与适用条件

记录环境、操作、实际结果和预期，稳定复现后沿数据路径缩小问题，再做最小修复。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 写清环境、步骤、实际结果、预期结果和错误原文。
2. 按数据路径提出一个可检验假设，先缩小范围。
3. 修复后复测原案例和邻近边界，留下根因与验证记录。

#### 例题 1：刷新丢数据

给 Agent 怎样的排错材料？

1. 说明网址和浏览器。
2. 记录添加后可见、刷新后空的步骤。
3. 写预期保留和控制台实际错误。

参考结果：

环境：本机 http://127.0.0.1:5180。步骤：添加“学 Git”，确认出现，刷新。实际：清单空；预期：保留。控制台错误原文另附。请先区分保存失败、读取失败和同源变化，不直接重写整站。

#### 例题 2：存储被禁止

保存抛错后，应该只 catch 然后显示成功吗？

1. 观察数据没有持久保存。
2. 保留之前可靠状态并显示未保存。
3. 恢复可用后重新验证刷新。

参考结果：

不能显示已保存。错误处理应告诉用户保存失败，并避免把内存变化当作已持久化成果。本案例写入成功后才更新可见清单，失败会保留原状态。

#### 概念检查

最有用的排错请求是？

- A. 又坏了，你再想想
- B. 环境、步骤、实际/预期与错误原文
- C. 全部重写

参考选择：B

- A：没有新的判断依据。
- B：可复现并缩小原因。
- C：尚未定位，改动范围过大。

#### 互动判断

刷新丢失有三个可能原因，怎样减少猜测？

##### 情境 1

刷新前后端口不同。先？

- A. 核对同源存储差异
- B. 改所有 JS
- C. 隐藏错误

参考选择：A

- A：端口变化本身可能解释空数据。
- B：没有证据支持全量改。
- C：隐藏信息会妨碍排错。

##### 情境 2

保存明确抛错。页面应？

- A. 显示成功
- B. 显示未保存并保留可靠状态
- C. 悄悄清空

参考选择：B

- A：成功提示与事实矛盾。
- B：反馈失败，避免误导用户。
- C：会损坏已有工作。

##### 情境 3

一个修复已生效。下一步？

- A. 复测原步骤和相关边界
- B. 立刻扩大功能
- C. 删复现记录

参考选择：A

- A：确认修复并观察副作用。
- B：先结束当前问题。
- C：记录能帮助下一次接手。

继续练习：在项目里选择一个可重复的问题，写报告并标明已证实与待确认。

#### 常见误区

- 错误想法：修不好就全量重写。
  纠正：先复现并缩小原因，全量重写会丢掉已经验证的行为。

- 错误想法：把报错藏起来就稳定了。
  纠正：隐藏异常可能静默丢数据；应有可理解反馈。

#### 独立练习

##### 练习 1（难度 2/6）

补全 bug 报告：保存坏了。

提示：给四项材料。

##### 完整解答

1. 能让另一人按步骤复现。
2. 不只给一个结论。

网址与环境、逐步操作、实际/预期、错误原文。

##### 练习 2（难度 2/6）

换端口后清单空，最先检验什么？

提示：存储按什么隔离？

##### 完整解答

1. 确认原因再修改。
2. 不要把预期隔离误当作所有保存逻辑损坏。

检查源是否变化；不同端口使用不同 localStorage，不自动迁移。

##### 练习 3（难度 2/6）

一口气改五处后好了，有什么不足？

提示：难确定哪处解决问题。

##### 完整解答

1. 优先能解释的修复。
2. 不能只凭现象暂时消失收工。

根因难确认，其他改动可能有副作用；应缩小差异并分别验证。

##### 练习 4（难度 2/6）

修保存后还查什么？

提示：原场景与相邻错误。

##### 完整解答

1. 防止修一处破另一处。
2. 选择与改动相关的边界。

原刷新步骤、普通添加、空白拒绝、存储失败反馈以及无效恢复不覆盖。

先修：testing。相对难度 3/6。

来源：[MDN：localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)；[Node.js：测试运行器](https://nodejs.org/api/test.html)

### 5.3 把数据与权限当成项目的一部分

知道哪些事情不能交给 AI 猜着做。

核心意思：区分公开代码、用户输入和秘密；只给完成任务所需权限，对删除、上传和覆盖明确边界。

直觉：把钥匙交给修门师傅，不等于把全部房间和保险柜也授权给他。

#### 学习目标

- 识别秘密、用户数据与公开文件，不把秘密写进浏览器或提交。
- 明确删除、覆盖、上传和发布的授权边界，验证后执行。

#### 秘密不能藏在浏览器代码里

API 密钥、令牌和密码属于秘密；浏览器收到的 HTML 与 JS 可被用户查看，写进去就不能认为是隐藏的。本地 .env 是否会进入打包结果取决于工具，文件名本身不保证安全。泄露后先撤销或轮换，再按项目流程处理历史。AI 上下文也只给任务必需材料，别复制真实凭据或私人数据。

#### 把输入当作输入

用户输入“<img ...>”应只是清单标题，不变成页面代码。本案例用 textContent 显示文字，备份解析后校验字段、类型、数量、唯一 ID 和版本。JSON.parse 成功只说明语法能解析，不说明内容符合业务。无效备份整份拒绝，避免部分恢复误覆盖。

#### 有后果的动作说清楚

删除自己的练习文件与删除线上数据库差别很大。任务卡明确能修改的目录，默认不上传私有内容，不部署，不修改真实数据。恢复备份会替换整份当前清单，因此先验证、给数量、由用户明确点击确认。权限按任务需要分配，允许读取项目不等于授权向任意服务上传。

#### 定义与适用条件

区分公开代码、用户输入和秘密；只给完成任务所需权限，对删除、上传和覆盖明确边界。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 识别秘密、用户数据与公开文件，不把秘密写进浏览器或提交。
2. 为输入和备份做格式与业务校验，按文本呈现。
3. 明确删除、覆盖、上传和发布的授权边界，验证后执行。

#### 例题 1：密钥已推送

只删当前文件里的密钥够吗？

1. 历史可能仍能查看，密钥可能已被复制。
2. 先在凭据提供方撤销或轮换。
3. 再按维护流程清理代码与历史并检查使用记录。

参考结果：

不够。移除代码不会让旧秘密失效；优先停用旧凭据，再处理仓库与日志。不要把真实密钥贴给 Agent 让它判断。

#### 例题 2：坏备份导入

JSON 可解析，done 却是字符串 "false"，能接受吗？

1. 格式语法正常不代表字段类型正常。
2. 约定 done 必须布尔值。
3. 拒绝整份且不替换原清单。

参考结果：

拒绝。字符串 "false" 在很多条件判断中仍为真，可能错误显示完成。先验证所有记录，只有整份有效且用户确认才替换。

#### 概念检查

密钥写在网页 JS 里意味着？

- A. 只有自己能看到
- B. 客户端可查看，不应当作秘密
- C. 变量名复杂就安全

参考选择：B

- A：浏览器收到的代码可被查看。
- B：应选择合适的秘密存放和权限方案。
- C：名字复杂不能限制读取。

#### 互动判断

导入与上传动作，在哪一步需要判断？

##### 情境 1

备份解析成功但 done 为字符串。

- A. 全部接受
- B. 按约定类型拒绝且保留原数据
- C. 悄悄改所有字段

参考选择：B

- A：会让错误内容进入状态。
- B：语法检查与业务校验不同。
- C：未经明确规则的自动修正可能误解用户数据。

##### 情境 2

Agent 要把日志上传到外部服务。

- A. 先查秘密、目的与授权
- B. 直接同意所有上传
- C. 贴全部密码帮助它

参考选择：A

- A：读取权限不自动包括外传。
- B：日志可能有私人信息或秘密。
- C：秘密不应暴露在上下文。

##### 情境 3

有效备份替换当前清单。

- A. 直接覆盖
- B. 先说明数量、提醒备份并确认
- C. 把两个数组随机拼接

参考选择：B

- A：用户可能失去现有数据。
- B：明确后果，再按确认执行。
- C：随机合并可能造成重复 ID 与数据错乱。

继续练习：给自己的项目写一条输入规则和一条 Agent 权限边界。

#### 常见误区

- 错误想法：AI 建议的命令可以不看用途直接执行。
  纠正：先弄清影响路径、数据与权限；关键后果不能靠猜。

- 错误想法：前端源码里的密钥用变量名藏起来就安全。
  纠正：客户端可查看收到的代码，换名字不构成秘密保护。

#### 独立练习

##### 练习 1（难度 1/6）

真实 token 出现在公开提交，第一动作？

提示：让旧秘密不再能使用。

##### 完整解答

1. 删除文本不使 token 失效。
2. 别继续把它转发给 AI。

去凭据提供方撤销或轮换，再处理仓库历史和使用记录。

##### 练习 2（难度 1/6）

用户标题像 HTML，怎样显示？

提示：把它作为文字。

##### 完整解答

1. 不依赖外观是否像代码。
2. 输入内容不能获得执行权限。

使用 textContent 或等价的安全文本呈现，不把输入拼进 HTML。

##### 练习 3（难度 2/6）

解析成功但缺少 id，备份能替换吗？

提示：业务格式有约定。

##### 完整解答

1. 验证字段与类型。
2. 不要部分导入后覆盖原数据。

不能，拒绝整份并保留旧数据，告知记录格式无效。

##### 练习 4（难度 2/6）

让 Agent 修 CSS 是否也授权它部署？

提示：修改和公开是不同动作。

##### 完整解答

1. 权限跟任务走。
2. 工具能力不等于用户授权。

没有。任务范围只允许样式修改，部署、上传和真实数据操作需明确授权。

先修：debugging。相对难度 3/6。

来源：[OWASP：秘密管理](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)；[MDN：textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

### 章末回顾

#### 回顾 1

自动测试全绿，为什么仍不能说“全站验证”？

提示：测试实际执行了什么。

##### 完整解答

1. 列测试覆盖。
2. 补正常、边界、失败的交互验收。
3. 结论只覆盖已有证据。

规则测试没有运行浏览器事件、存储和布局；需相应页面检查，报告未验证范围。

#### 回顾 2

备份是有效 JSON 却字段错误，应怎样处理？

提示：语法与业务规则不同。

##### 完整解答

1. 先解析。
2. 再验证所有记录。
3. 只有有效且确认才写入。

整份拒绝，不替换当前清单；校验版本、字段、类型、ID 与上限。

## 第 6 章 完成并交付一个小项目

选择合适的存储方案，检查发布版本，交付可运行、可说明的成果。

### 6.1 先决定数据怎样留下来

用简单方案，但知道什么时候不够。

核心意思：选择存储方案要考虑谁读写、需要保留多久、如何恢复和将来怎样改变格式。

直觉：把笔记留在一台电脑还是共享云文档，决定了谁能看到、怎样找回和怎样协作。

#### 学习目标

- 写清字段、类型、唯一身份与允许输入。
- 演练有效恢复与无效拒绝，格式变化时明确版本处理。

#### 先给数据一个明确形状

本案例每条有 id、title、done 三个字段。id 标识是哪一条，title 给人阅读，done 是完成状态。备份外层有 version 和 tasks；版本用来识别格式，不是为了显得专业。同标题可以存在，但 ID 不能重复。字段约定会影响添加、显示、删除、测试与恢复，不能只在一处随意改名。

#### 本地存储也有失败条件

localStorage 以字符串保存，在同一个源中跨页面加载保留，但可能被用户清理、被浏览器限制或写入失败。容量有限，不适合大文件。浏览器两个标签页也可能彼此覆盖，本案例没有并发协调。它适合个人学习清单的首版，不能宣称是多人可靠数据库。

#### 备份必须能恢复才有意义

导出 JSON 后要实际做一次恢复演练。坏数据应拒绝，不覆盖原清单；写入失败应报告未保存；读取损坏时先暂停写入，避免把空列表写回覆盖旧内容。格式升级应识别版本，明确迁移或拒绝，不能静默误读。本书没有实现复杂迁移，版本不是 1 时会拒绝。

#### 定义与适用条件

选择存储方案要考虑谁读写、需要保留多久、如何恢复和将来怎样改变格式。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 写清字段、类型、唯一身份与允许输入。
2. 说明数据位置、持久性和失败条件。
3. 演练有效恢复与无效拒绝，格式变化时明确版本处理。

#### 例题 1：为什么不用标题做 ID

两条都叫“练习 Git”，怎样只完成第二条？

1. 给每条独立 ID。
2. 界面动作传对应 ID。
3. 逻辑按 ID 定位，而不是按标题全匹配。

参考结果：

标题服务阅读，ID 服务定位。两条相同标题可以有不同完成状态；这就是需要身份字段的具体理由。

#### 例题 2：为什么带版本

新版备份把 done 改成 status，旧程序能读吗？

1. 现有程序期待布尔 done。
2. 未知格式可能产生错误显示。
3. 识别版本后明确迁移或拒绝。

参考结果：

当前程序只接受 version: 1 及 id/title/done。未知版本拒绝并保留原清单；以后升级须另写迁移规则与测试，不直接假设兼容。

#### 概念检查

为什么清单使用 ID 而不只用标题？

- A. 让代码看起来专业
- B. 准确定位同标题中的一条
- C. 保证所有设备同步

参考选择：B

- A：身份字段有具体用途。
- B：标题可重复，ID 区分记录。
- C：ID 不提供共享存储。

#### 互动判断

备份读得进来与恢复可靠，是同一件事吗？

##### 情境 1

当前清单读取失败。

- A. 立即保存空列表
- B. 暂停写入，保留旧数据并提示
- C. 显示保存成功

参考选择：B

- A：会覆盖可能有用的原内容。
- B：保留数据与故障线索。
- C：与实际状态矛盾。

##### 情境 2

未知版本备份。

- A. 明确拒绝，待设计迁移
- B. 忽略版本强行加载
- C. 默认 done 都为真

参考选择：A

- A：防止误读字段含义。
- B：格式可能已变，强读会损坏数据。
- C：会改变记录真实状态。

##### 情境 3

恢复演练应该核对？

- A. 只有文件能下载
- B. 每条身份、标题和完成状态
- C. 只有文件大小

参考选择：B

- A：下载成功不等于内容可恢复。
- B：完整数据结果支持恢复结论。
- C：大小不能证明语义正确。

继续练习：在项目页观察数据样例，再运行备份往返测试并实际恢复。

#### 常见误区

- 错误想法：本地保存等于永远不会丢。
  纠正：清理、存储异常、换设备或换源都会影响数据；保留可恢复备份。

- 错误想法：备份下载按钮出现就说明备份可靠。
  纠正：还要下载有效文件并实际恢复，检查完整内容与状态。

#### 独立练习

##### 练习 1（难度 2/6）

给记录写一份字段说明。

提示：名字、类型、用途。

##### 完整解答

1. 按用途区分身份与显示。
2. 写允许边界支持校验。

id 非空唯一字符串；title 去空白后 1–80 代码单元；done 布尔值。

##### 练习 2（难度 2/6）

localhost 与 127.0.0.1 同端口共用数据吗？

提示：主机不同就不是同一源。

##### 完整解答

1. 不要误以为同一电脑就同一空间。
2. 需要备份恢复来迁移，不能自动假设。

不共用同一 localStorage；协议、主机、端口共同决定源。

##### 练习 3（难度 2/6）

读取损坏后为何不马上写空列表？

提示：旧内容可能还能排查或恢复。

##### 完整解答

1. 保留故障证据。
2. 不把读失败解释成用户本来没有数据。

这样会覆盖旧数据；应暂停写入并提示，使用有效备份明确恢复。

##### 练习 4（难度 2/6）

多人同时编辑是否可直接沿用首版？

提示：首版未处理并发、权限与共享。

##### 完整解答

1. 简单方案有边界。
2. 不是仅换域名或加按钮。

不宜，需要共享存储、身份权限和冲突处理等设计，重新确认需求。

先修：security。相对难度 4/6。

来源：[MDN：localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)；[Node.js：测试运行器](https://nodejs.org/api/test.html)

### 6.2 交付之前查的是哪个版本

本机成功、构建成功和公开上线分别验证。

核心意思：交付要提供可运行步骤、已验证版本、测试证据、限制与恢复办法；上线后在真实网址再检查。

直觉：样品在工作室能用，不代表送到客户现场就能用；要知道送去的是哪一版。

#### 学习目标

- 准备运行说明、版本、验证结果与已知限制。
- 留下上个可用版本与数据恢复说明，区分代码回退和数据迁移。

#### 先把交付材料凑齐

README 应让另一人知道工具要求、运行命令、功能范围和限制。提交记录与版本说明对应本次成果，附实际测试结果。依赖项目按锁文件安装并跑构建；本案例无需打包构建，只需要发布 HTML、CSS、app.mjs 和 tasks.mjs 四个静态文件。测试和本地服务器文件不是用户页面入口。

#### 公开网址需要重新验收

开发服务器只在本机运行。部署是把可供用户运行的产物放到指定服务。访问公开网址后检查文件请求、页面动作、键盘、窄屏和保存；本机 localhost 的清单不会自动出现在新源。多种托管方式有不同路径与配置，先读目标项目部署说明，不在本教材替读者注册账号或付费。

#### 回退代码与回退数据分开

记录上一个可用的代码版本和发布方式；失败时恢复可用产物再验证。代码回退不必然能读新版数据，格式变更还需备份与迁移计划。本案例不做格式升级，仍应明确恢复会替换数据。发布后保留错误反馈渠道，不把一次上线当成永久完工。

#### 定义与适用条件

交付要提供可运行步骤、已验证版本、测试证据、限制与恢复办法；上线后在真实网址再检查。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 准备运行说明、版本、验证结果与已知限制。
2. 核对发布产物和目标，授权后再发布并在真实网址验收。
3. 留下上个可用版本与数据恢复说明，区分代码回退和数据迁移。

#### 例题 1：交给朋友运行

交付文件除了源码，还需要什么？

1. 写工具版本与所在目录。
2. 列测试、启动和网址。
3. 说明数据本地、不同步和如何备份。

参考结果：

README：Node.js 22.12+；项目目录 npm test，再 npm start；访问本地 5180。说明当前版本、实际验证结果、备份恢复、未检查环境。朋友照着运行后再记录他的结果。

#### 例题 2：公开后数据空了

为什么本机有清单，公开站点却为空？

1. 比较两个网址的源。
2. 它们使用不同 localStorage。
3. 通过有效备份确认恢复而非假装自动迁移。

参考结果：

这是本地数据位置改变的预期结果。先导出本机数据，再在目标网址按恢复说明校验和确认。不公开发布用户备份文件来“解决”迁移。

#### 概念检查

哪项能支持“公开版本已验证”？

- A. 本机截图
- B. 真实网址及对应版本的检查记录
- C. PR 标题

参考选择：B

- A：不能支持公网运行结论。
- B：证据对应实际部署。
- C：PR 不说明是否已上线。

#### 互动判断

项目交出去了，哪些状态不能混为一谈？

##### 情境 1

npm test 通过但页面未打开。

- A. 全站已验收
- B. 规则已验证，页面待查
- C. 网站已发布

参考选择：B

- A：规则测试不覆盖界面。
- B：证据范围准确。
- C：测试不会自动部署。

##### 情境 2

代码已合并。正式网址是否更新？

- A. 一定更新
- B. 查部署流程与当前版本
- C. 所有旧数据自动迁移

参考选择：B

- A：取决于发布配置。
- B：核对实际产物后才能判断。
- C：数据迁移是另一问题。

##### 情境 3

新版本改变数据格式。回退前应？

- A. 只回退代码
- B. 保留数据备份并检查兼容/迁移方案
- C. 清空所有数据

参考选择：B

- A：旧程序可能无法读新版数据。
- B：把恢复后果纳入计划。
- C：会扩大损失。

继续练习：为自己的项目写一张交付清单，明确本机、合并、发布分别完成了什么。

#### 常见误区

- 错误想法：本机打开过就可以宣称上线验证了。
  纠正：必须区分本机与真实部署地址，记录各自检查结果。

- 错误想法：旧代码能直接修复所有新数据问题。
  纠正：格式可能不兼容，代码与数据有各自的恢复流程。

#### 独立练习

##### 练习 1（难度 1/6）

本案例要发布哪些页面文件？

提示：服务器和测试不是页面运行所需。

##### 完整解答

1. 浏览器加载入口和引用资源。
2. 托管服务提供文件，本地 server.mjs 不成为业务后端。

index.html、style.css、app.mjs、tasks.mjs；保留相对目录关系。

##### 练习 2（难度 2/6）

公网与本机测试应分别记录什么？

提示：环境和实际版本。

##### 完整解答

1. 知道验证的是哪份产物。
2. 不能把本机结果复制成公网证据。

网址、部署/提交版本、检查动作、结果与未验证项。

##### 练习 3（难度 3/6）

代码回退后新备份读不进，说明什么？

提示：程序与格式可能不兼容。

##### 完整解答

1. 区分代码状态和数据状态。
2. 先保留当前数据再按明确流程处理。

还需要数据版本处理或恢复兼容备份；不能只回退代码声称已恢复。

##### 练习 4（难度 2/6）

发布前最后一项关键确认是什么？

提示：目标和后果。

##### 完整解答

1. 不是重新确认所有可逆小编辑。
2. 公开、真实数据操作有独立后果。

确认发布授权、目标仓库或网址、产物版本与不含秘密，准备恢复办法。

先修：data-design。相对难度 4/6。

来源：[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)；[MDN：localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)；[GitHub：Pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests)

### 6.3 你来带着 AI 完成一轮开发

从提出想法到判断结果，自己掌握方向。

核心意思：一轮完整开发是明确问题、限定范围、制定验收、小步实现、验证、记录和交付，而不是一次许愿。

直觉：你可以让助手准备食材和烹饪，但菜单、口味判断与是否上桌仍需要你负责。

#### 学习目标

- 先写一页计划和三类验收，再把一个小任务交给 Agent。
- 交付可复现成果，独立解释关键行为、限制和下一步学习方向。

#### 先自己交一页计划

把学习清单当作练习项目，先不看参考实现。写用户场景、首版与后续、文件职责草图、数据字段和三类验收。选一个小任务写任务卡给 Agent；你可用本书项目作参考对照，但不把参考代码存在视作自己已经理解。每一步至少能用自己的话说明目的与检查。

#### 按关卡完成而非盲目堆功能

关卡一：页面与添加；关卡二：完成和删除；关卡三：保存与备份；关卡四：测试、排错与说明。每关卡都读差异、跑相关检查、在浏览器验收，再提交。AI 提议加入聊天、支付或同步时，回看首版决定，不因为看起来先进就扩大任务。

#### 用解释能力决定下一步

最后请另一人按 README 运行，并让自己回答：数据在哪里？提交会记录哪份内容？空白为何不新增？刷新失效怎么定位？谁能看到数据？测试还没覆盖什么？回答不出来就回到对应章节。完成本书代表能带着框架开展小项目，继续学习语言、HTTP、数据与安全仍有价值。

#### 定义与适用条件

一轮完整开发是明确问题、限定范围、制定验收、小步实现、验证、记录和交付，而不是一次许愿。

- 面向个人、小规模学习项目；团队协作需遵守所在仓库的约定。
- 本节方法帮助留下可检查的证据，不能保证任意 AI 输出正确。

#### 一步步做

1. 先写一页计划和三类验收，再把一个小任务交给 Agent。
2. 每一关读差异、验证、修正并做目的明确的小步记录。
3. 交付可复现成果，独立解释关键行为、限制和下一步学习方向。

#### 例题 1：一轮添加功能

从需求到提交，怎样走一圈？

1. 场景：晚上记录明天的学习计划。
2. 任务：添加非空标题，空白拒绝，暂不实现保存。
3. 读差异、跑规则测试、亲自试两种输入，再提交。

参考结果：

完成记录：实现添加与空白拒绝，测试真实通过，页面普通/空白输入已验收；刷新保存尚未实现，下一关补齐。不要把局部关卡说成整项目完成。

#### 例题 2：选择下一步

已经完成个人清单，想增加搜索还是多人同步？

1. 先问当前麻烦：项多了找不到，还是必须共享？
2. 搜索主要扩展本地筛选；同步改变数据位置和权限。
3. 选与真实问题对应的一项，重新写边界和验收。

参考结果：

若麻烦是计划多难找，先做搜索并检查空关键词、大小写和完成项处理。若确实需要多人共享，先设计权限与冲突规则，不能把它当同样小的任务。

#### 概念检查

你在 AI 辅助开发中最需要掌握什么？

- A. 不断扩大许愿清单
- B. 目标、边界、判断依据与交付责任
- C. 每次都选最复杂框架

参考选择：B

- A：更多想法不能自动转成可验证项目。
- B：这让 AI 的工作始终服务于你的方向。
- C：复杂度不代表更符合需求。

#### 互动判断

如果下一次没有参考答案，你会怎样开始？

##### 情境 1

第一份材料是什么？

- A. 全部功能许愿
- B. 用户场景、首版与验收
- C. 模型排行榜

参考选择：B

- A：无法判断范围与完成。
- B：给协作一个可核对的起点。
- C：不能替你决定用户目的。

##### 情境 2

Agent 报告完成。你？

- A. 看差异、测试证据并亲自验收
- B. 立即接受全部
- C. 只比较行数

参考选择：A

- A：你依据结果决定是否接受。
- B：缺少判断与验证。
- C：行数不等于用户价值。

##### 情境 3

交付结束应留下？

- A. 源码、运行说明、版本、验证与限制
- B. 只有截图
- C. 只有一句成功

参考选择：A

- A：另一人能接手和复现。
- B：截图不能运行或恢复。
- C：缺少实际材料。

继续练习：独立完成附录项目或等范围新项目，并填写综合实作的交付材料。

#### 常见误区

- 错误想法：学完就不需要理解代码。
  纠正：至少应理解项目关键路径；继续学语言能让判断更准确。

- 错误想法：好开发者必须完全不用 AI。
  纠正：可以用 AI 实现与解释，关键是你能确定目标、核对结果和承担决定。

#### 独立练习

##### 练习 1（难度 2/6）

写出一轮协作的七步。

提示：从问题到交付。

##### 完整解答

1. 每步产物为下一步提供依据。
2. 不只强调提示词。

问题 → 范围 → 验收 → 小步实现 → 验证修正 → Git 记录 → 交付说明。

##### 练习 2（难度 2/6）

第一关只实现添加，能写全书项目已完成吗？

提示：区分局部成果与首版目标。

##### 完整解答

1. 状态应准确。
2. 未完成项保留在计划中。

不能。记录已验收添加，保存等关卡仍待完成。

##### 练习 3（难度 2/6）

找不到一条计划，是先加搜索还是同步？

提示：先确认原因。

##### 完整解答

1. 同一句现象可能有不同原因。
2. 选择解决当前麻烦的方案。

若项多难定位，可考虑搜索；若计划在另一设备，涉及同步。先复现并确认用户问题。

##### 练习 4（难度 3/6）

怎样判断自己开始掌握框架？

提示：尝试不用原文解释。

##### 完整解答

1. 用独立解释与实际操作判断。
2. 不以记住术语数量评价学习。

能写任务卡、指出数据位置、解释暂存提交、选择边界测试、报告验证限制，并带另一人运行。

先修：release。相对难度 4/6。

来源：[MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)；[Node.js：测试运行器](https://nodejs.org/api/test.html)；[Pro Git：记录变更](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

### 章末回顾

#### 回顾 1

交付个人清单项目需要哪些东西？

提示：让另一人能够运行与理解。

##### 完整解答

1. 先准备可运行材料。
2. 核对交付版本与实际检查。
3. 说明数据在哪里和怎样恢复。

源码、运行要求、命令、版本、验收记录、限制、备份恢复说明与后续候选。

#### 回顾 2

想从个人清单升级多人同步，应怎样开始？

提示：新场景会影响共享和权限。

##### 完整解答

1. 不能把同步当图标。
2. 原本地存储方案有边界。
3. 新的实现应围绕确认过的场景。

先确认各自/共用数据、读写权限、冲突与恢复，再重新写范围和验收。

## 综合实作与判断

### 综合题 1

综合实作：独立交付一个个人学习清单。

提示：按本书四个关卡进行。

##### 完整解答

1. 说明用户与首版，排除同步。
2. 验收包括普通添加、空白拒绝、重复标题、勾选、刷新、有效/无效恢复。
3. 按添加、操作、存储、交付关卡实现；每关读差异和验证。
4. 参考附录对照，不只复制；记录未验证环境与限制。

提交一页计划、至少 6 条验收、数据与文件图、2 张任务卡、至少 3 次有目的的提交记录、测试与浏览器结果、README 和可运行源码。

### 综合题 2

综合判断：AI 添加云服务并把密钥写入网页，以实现一个按钮颜色变化。

提示：检查目标、范围与秘密。

##### 完整解答

1. 变化不对应颜色目标。
2. 读取或修改权限不包括新增外传服务。
3. 检查 diff、锁文件与生成产物，验收键盘和窄屏。

拒绝无关云服务和客户端秘密；若凭据已经暴露先撤销/轮换，缩回样式范围并重新检查。

### 综合题 3

综合判断：修复后测试被删、界面显示保存成功但刷新丢失。

提示：绿色与成功提示都可能不真实。

##### 完整解答

1. 先保存错误与版本信息。
2. 不靠隐藏异常获得成功提示。
3. 对照原验收决定是否完成。

不能接受；恢复需求对应检查，复现保存问题，区分写入/读取/同源变化，修复后重测。

### 综合题 4

综合判断：代码已推送，Agent 宣称正式上线且所有人的清单同步。

提示：区分远端代码、部署和用户数据。

##### 完整解答

1. push 只更新目标远端分支。
2. 公开网页需要独立部署与验收。
3. 共享用户数据需要额外架构与权限设计。

要求可访问分支/PR、部署网址和版本证据；localStorage 不提供多人同步，重新确认需求。

## 贯穿项目四个关卡

### 关卡一：能记录一项计划

搭建页面和添加逻辑；普通输入出现，全空格拒绝；暂不保存。

- 规则测试普通/空白/80/81
- 浏览器提交与反馈
- 审阅 diff 并记录提交

### 关卡二：能操作正确的一项

按 ID 完成和删除；同标题互不影响。

- 完成两次恢复
- 删除后剩余 ID 正确
- 键盘操作与空清单

### 关卡三：能保存与恢复

刷新保留、JSON 备份、校验后确认恢复；失败有反馈。

- 刷新相同网址
- 有效备份恢复内容与完成状态
- 无效备份拒绝且原数据不变

### 关卡四：能让别人接手

完善 README、验收记录、版本与已知限制。

- 另一人或干净目录按说明运行
- 窄屏、键盘与页面资源
- 本机/远端/发布状态分别记录

## 术语索引

| 术语 | 解释 |
| --- | --- |
| Agent | 能结合上下文并可能使用工具执行任务的 AI 助手；能力不等于已获得所有操作授权。 |
| 用户场景 | 某人在某个时刻为了一个目的进行的动作，用于解释为什么做功能。 |
| 首版 | 为当前场景约定的一圈必要功能，不是全部未来想法。 |
| 验收标准 | 具体输入、动作与预期结果，用来决定任务是否完成。 |
| 终端 | 输入和执行命令的窗口；所在目录会影响命令操作的文件。 |
| 运行环境 | 代码需要的工具、版本、系统与配置。 |
| 依赖 | 项目使用的外部包或工具，需要管理版本与维护成本。 |
| 锁文件 | 记录精确依赖解析结果，帮助可重复安装；不是遇错就随意删除的文件。 |
| 入口 | 程序开始加载或执行的位置，帮助沿行为查文件。 |
| 前端 | 浏览器等客户端中的呈现和交互部分。 |
| 后端 | 通常在服务器处理数据、权限与业务的部分。 |
| API | 程序之间约定的调用接口，包括输入和返回含义。 |
| localStorage | 同源浏览器字符串存储，会受清理、权限和容量等条件影响。 |
| 数据结构 | 字段、类型和关系的安排，决定如何读取、修改和校验。 |
| ID | 区分记录的身份，不应与可重复的显示标题混为一谈。 |
| Git 仓库 | 存储文件版本记录的位置；不是托管网站本身。 |
| 工作区 | 现在正在编辑的文件内容。 |
| 暂存区 | 已选择准备进入下次提交的内容，可能不同于当前文件。 |
| 提交 | 一份本地版本快照及其记录；保存文件不自动创建它。 |
| HEAD | 当前检出的提交位置，通常跟随当前分支顶端。 |
| 分支 | 指向一条记录线顶端的名字，用来组织不同目的的改动。 |
| 远端 | 配置的另一个仓库位置；origin 只是常见名称。 |
| 推送 | 把本地分支提交更新到目标远端分支。 |
| PR | 提议将分支改动合入目标分支的审阅材料，不自动意味着合并或上线。 |
| 差异 / diff | 比较两个状态有哪些文本变化，用来核对范围和关键行为。 |
| 冲突 | 自动合并不能决定结果，需要理解两边意图并手动确认。 |
| 任务卡 | 本书使用的目标、事实、范围、验收、验证、交付六栏协作材料。 |
| 断言 | 测试里检查某个预期是否成立的表达。 |
| 回归检查 | 修复之后再次检查原行为及相关边界，防止改坏已有功能。 |
| 秘密 | 密钥、令牌和密码等不可公开的凭据；泄露后需撤销或轮换。 |
| 部署 | 把能运行的产物放到用户访问的目标环境。 |
| 回退 | 恢复可用的代码或数据状态；两者需要分别考虑。 |

## 附录：学习清单完整源码

把以下文件按原名保存在同一个独立目录，按 README 运行；网页可下载同版项目 ZIP。任务逻辑的自动测试不能替代浏览器、键盘和布局验收。

### .gitignore

\`\`\`text
node_modules/
.env
.env.*
*.log
.DS_Store
\`\`\`

### README.md

\`\`\`text
# 我的学习清单

Node.js 22.12+，无第三方依赖。在本目录打开终端：

\`\`\`sh
node --version
npm test
npm start
\`\`\`

打开 http://127.0.0.1:5180 。终端保持运行，Ctrl+C 停止。服务器仅提供本地静态文件，没有业务 API。HTML 负责结构、CSS 负责外观、app.mjs 连接页面、tasks.mjs 负责数据规则、tasks.test.mjs 验证规则。无需 npm install；普通网络依赖项目则应按自己的 README 安装。

功能：添加、完成、删除、同源浏览器保存、JSON 备份、校验后确认恢复。没有账号、同步或云端数据库。地址的协议、主机或端口变化会使用另一份存储；公开站点的 localhost 存储不会自动迁移。容量耗尽或保存被禁止时，显示未保存并保留之前的可见清单；损坏存储暂停写入，不悄悄覆盖。恢复备份会替换整份清单，请先导出现有数据；读取失败时导出的只包含当前可见的清单，不包含损坏的原数据。

每项标题去两端空白后必须为 1–80 个 UTF-16 代码单元（emoji 等可能计为多个），最多 200 项；相同标题允许，ID 必须不同。JSON 版本固定为 1，无效记录整份拒绝。它是学习项目，存储可能被清除，也没有多标签页并发协调；不适合敏感信息或多人生产业务。发布前另外检查浏览器交互、窄屏、键盘、真实网址和数据恢复；自动测试只覆盖数据规则。

源码按 MIT 投稿，教材说明按 CC0 投稿；AI 生成，尚未人工审校。
\`\`\`

### app.mjs

\`\`\`javascript
import {
  addTask,
  toggleTask,
  removeTask,
  encodeTasks,
  decodeTasks,
} from "./tasks.mjs";
const KEY = "learning-list-v1";
const form = document.querySelector("#form");
const input = document.querySelector("#title");
const list = document.querySelector("#list");
const status = document.querySelector("#status");
const restore = document.querySelector("#restore");
let tasks = [];
let writable = true;
let pending = null;
try {
  const raw = localStorage.getItem(KEY);
  if (raw !== null) tasks = decodeTasks(raw);
} catch {
  writable = false;
  status.textContent =
    "无法读取已保存的清单。已暂停写入，避免覆盖旧数据；你可以通过备份恢复。";
}
function render() {
  list.replaceChildren();
  for (const task of tasks) {
    const row = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.setAttribute("aria-label", \`完成：\${task.title}\`);
    checkbox.addEventListener("change", () =>
      change(() => toggleTask(tasks, task.id)),
    );
    const title = document.createElement("span");
    title.textContent = task.title;
    title.className = task.done ? "done" : "";
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "删除";
    remove.setAttribute("aria-label", \`删除：\${task.title}\`);
    remove.addEventListener("click", () =>
      change(() => removeTask(tasks, task.id)),
    );
    row.append(checkbox, title, remove);
    list.append(row);
  }
  document.querySelector("#count").textContent =
    \`\${tasks.length} 项计划 · \${tasks.filter((t) => t.done).length} 项已完成\`;
}
function change(getNext, recovery = false) {
  try {
    if (!writable && !recovery)
      throw new Error("写入已暂停，请先从有效备份恢复");
    const next = getNext();
    localStorage.setItem(KEY, encodeTasks(next));
    tasks = next;
    writable = true;
    status.textContent = "已保存到此浏览器";
    render();
    return true;
  } catch (error) {
    status.textContent = \`未保存：\${error.message}\`;
    render();
    return false;
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (change(() => addTask(tasks, input.value, crypto.randomUUID())))
    input.value = "";
  input.focus();
});
document.querySelector("#export").addEventListener("click", () => {
  const url = URL.createObjectURL(
    new Blob([encodeTasks(tasks)], { type: "application/json" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "learning-list-backup.json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = writable
    ? "备份已生成，请确认浏览器已下载"
    : "已导出当前可见清单；读取失败的旧数据不在此备份中";
});
let importSequence = 0;
document.querySelector("#import").addEventListener("change", async (event) => {
  const sequence = ++importSequence;
  pending = null;
  restore.disabled = true;
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 1000000) throw new Error("备份文件超过 1 MB");
    const candidate = decodeTasks(await file.text());
    if (sequence !== importSequence) return;
    pending = candidate;
    restore.disabled = false;
    status.textContent = \`已检查 \${pending.length} 项。点击“确认替换”才会覆盖当前清单。\`;
  } catch (error) {
    if (sequence === importSequence)
      status.textContent = \`备份未导入：\${error.message}\`;
  }
});
restore.addEventListener("click", () => {
  if (pending && change(() => pending, true)) {
    pending = null;
    restore.disabled = true;
  }
});
render();
\`\`\`

### index.html

\`\`\`html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>我的学习清单</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>
      <p class="eyebrow">一个可以解释清楚的小项目</p>
      <h1>我的学习清单</h1>
      <p>写下下一件想学的事，完成后打一个勾。</p>
      <form id="form">
        <label for="title">学习计划</label>
        <div class="input-row">
          <input
            id="title"
            autocomplete="off"
            placeholder="例如：练习一次 Git 提交"
          /><button>添加</button>
        </div>
      </form>
      <p id="status" role="status" aria-live="polite"></p>
      <p id="count"></p>
      <ul id="list"></ul>
      <details>
        <summary>备份与恢复</summary>
        <p>
          数据只保存在此浏览器、此网址对应的本地空间。公开网页不会让他人看到你的清单。清除浏览器数据后会丢失，请下载备份。
        </p>
        <button id="export" type="button">下载 JSON 备份</button
        ><label for="import">选择 JSON 备份（替换当前清单）</label
        ><input
          id="import"
          type="file"
          accept=".json,application/json"
        /><button id="restore" type="button" disabled>确认替换</button>
      </details>
    </main>
    <script type="module" src="app.mjs"><\/script>
  </body>
</html>
\`\`\`

### package.json

\`\`\`text
{
  "name": "learning-list", "version": "1.0.0", "private": true, "type": "module",
  "engines": {"node": ">=22.12"},
  "scripts": {"start": "node server.mjs", "test": "node --test tasks.test.mjs"},
  "license": "MIT"
}
\`\`\`

### server.mjs

\`\`\`javascript
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
const files = {
  "/": ["index.html", "text/html"],
  "/index.html": ["index.html", "text/html"],
  "/style.css": ["style.css", "text/css"],
  "/app.mjs": ["app.mjs", "text/javascript"],
  "/tasks.mjs": ["tasks.mjs", "text/javascript"],
};
const server = createServer(async (request, response) => {
  const path = new URL(request.url, "http://localhost").pathname;
  const entry = files[path];
  if (!entry || !["GET", "HEAD"].includes(request.method)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }
  try {
    const data = await readFile(new URL(entry[0], import.meta.url));
    response.writeHead(200, {
      "Content-Type": \`\${entry[1]}; charset=utf-8\`,
      "Cache-Control": "no-store",
    });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    response.writeHead(500);
    response.end("File unavailable");
  }
});
server.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});
server.listen(5180, "127.0.0.1", () =>
  console.log("学习清单：http://127.0.0.1:5180（Ctrl+C 停止）"),
);
\`\`\`

### style.css

\`\`\`css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #f3f5ef;
  color: #24312b;
  font:
    17px/1.65 system-ui,
    sans-serif;
}
main {
  max-width: 700px;
  margin: 7vh auto;
  padding: 28px;
}
.eyebrow {
  color: #527260;
  font-size: 14px;
}
h1 {
  font-size: clamp(30px, 7vw, 45px);
  line-height: 1.2;
}
label {
  display: block;
  margin: 14px 0 6px;
}
.input-row {
  display: flex;
  gap: 10px;
}
input:not([type="file"]) {
  flex: 1;
  min-width: 0;
  padding: 12px;
  border: 1px solid #8a9d90;
  border-radius: 7px;
  font: inherit;
}
button {
  padding: 10px 15px;
  border: 1px solid #40614d;
  border-radius: 7px;
  background: #24523a;
  color: white;
  font: inherit;
  cursor: pointer;
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}
button:focus-visible,
input:focus-visible,
summary:focus-visible {
  outline: 3px solid #bc662b;
  outline-offset: 3px;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  display: flex;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid #d4ddd4;
  padding: 14px 0;
}
li span {
  flex: 1;
  overflow-wrap: anywhere;
}
.done {
  text-decoration: line-through;
  color: #677369;
}
li button {
  font-size: 14px;
  background: white;
  color: #354d3e;
}
details {
  margin-top: 30px;
  padding: 16px;
  background: white;
  border-radius: 10px;
}
summary {
  cursor: pointer;
}
#status {
  min-height: 1.6em;
  color: #853b18;
}
input[type="file"] {
  max-width: 100%;
}
@media (max-width: 400px) {
  main {
    padding: 18px;
  }
  .input-row {
    flex-direction: column;
  }
}
\`\`\`

### tasks.mjs

\`\`\`javascript
export const MAX_TITLE = 80;
export const MAX_TASKS = 200;
export function validateTasks(tasks) {
  if (!Array.isArray(tasks) || tasks.length > MAX_TASKS)
    throw new Error("清单格式错误或超过 200 项");
  const ids = new Set();
  for (const task of tasks) {
    if (
      !task ||
      typeof task !== "object" ||
      Array.isArray(task) ||
      Object.keys(task).sort().join(",") !== "done,id,title" ||
      typeof task.id !== "string" ||
      !task.id ||
      ids.has(task.id) ||
      typeof task.title !== "string" ||
      !task.title.trim() ||
      task.title !== task.title.trim() ||
      task.title.length > MAX_TITLE ||
      typeof task.done !== "boolean"
    )
      throw new Error("清单包含无效记录");
    ids.add(task.id);
  }
  return tasks;
}
export function addTask(tasks, title, id) {
  validateTasks(tasks);
  if (typeof title !== "string") throw new Error("请输入文字");
  const clean = title.trim();
  if (!clean) throw new Error("请先写一项学习计划");
  if (clean.length > MAX_TITLE) throw new Error("最多 80 个 UTF-16 代码单元");
  if (tasks.length >= MAX_TASKS) throw new Error("最多保存 200 项");
  const next = [...tasks, { id, title: clean, done: false }];
  return validateTasks(next);
}
export function toggleTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("找不到这一项");
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : { ...task },
  );
}
export function removeTask(tasks, id) {
  validateTasks(tasks);
  if (!tasks.some((task) => task.id === id)) throw new Error("找不到这一项");
  return tasks.filter((task) => task.id !== id);
}
export function encodeTasks(tasks) {
  validateTasks(tasks);
  return JSON.stringify({ version: 1, tasks });
}
export function decodeTasks(text) {
  const data = JSON.parse(text);
  if (
    !data ||
    Array.isArray(data) ||
    typeof data !== "object" ||
    Object.keys(data).sort().join(",") !== "tasks,version" ||
    data.version !== 1
  )
    throw new Error("备份版本或格式不支持");
  return validateTasks(data.tasks);
}
\`\`\`

### tasks.test.mjs

\`\`\`javascript
import test from "node:test";
import assert from "node:assert/strict";
import {
  addTask,
  toggleTask,
  removeTask,
  encodeTasks,
  decodeTasks,
} from "./tasks.mjs";
const first = [{ id: "a", title: "练习 Git", done: false }];
test("添加清理两端空白且不修改原数组", () => {
  const next = addTask(first, "  写需求  ", "b");
  assert.equal(next[1].title, "写需求");
  assert.deepEqual(first, [{ id: "a", title: "练习 Git", done: false }]);
});
test("空输入和全空格都拒绝", () => {
  for (const s of ["", "   ", "\\n\\t"]) assert.throws(() => addTask([], s, "x"));
});
test("标题 80 与 81 的边界", () => {
  assert.equal(addTask([], "a".repeat(80), "a")[0].title.length, 80);
  assert.throws(() => addTask([], "a".repeat(81), "a"));
});
test("允许相同标题但 ID 必须不同", () => {
  assert.equal(addTask(first, "练习 Git", "b").length, 2);
  assert.throws(() => addTask(first, "另一个", "a"));
});
test("切换两次恢复原值，其他项不变", () => {
  const list = addTask(first, "写需求", "b");
  const once = toggleTask(list, "a");
  assert.equal(once[0].done, true);
  assert.deepEqual(once[1], list[1]);
  assert.deepEqual(toggleTask(once, "a"), list);
});
test("按 ID 删除，重复标题不会一并删除", () => {
  assert.deepEqual(removeTask(addTask(first, "练习 Git", "b"), "a"), [
    { id: "b", title: "练习 Git", done: false },
  ]);
});
test("未知 ID 拒绝", () => {
  assert.throws(() => toggleTask(first, "missing"));
  assert.throws(() => removeTask(first, "missing"));
});
test("含完成状态的清单备份往返一致", () => {
  const list = toggleTask(addTask(first, "写需求", "b"), "b");
  assert.deepEqual(decodeTasks(encodeTasks(list)), list);
});
test("空清单可以备份", () => {
  assert.deepEqual(decodeTasks(encodeTasks([])), []);
});
test("坏 JSON、错误版本、额外字段均拒绝", () => {
  for (const s of [
    "{",
    "null",
    "[]",
    '{"version":2,"tasks":[]}',
    '{"version":1,"tasks":[],"extra":true}',
  ])
    assert.throws(() => decodeTasks(s));
});
test("坏记录整份拒绝，不接受部分有效数据", () => {
  for (const bad of [
    { id: "b", title: " ", done: false },
    { id: "b", title: "x", done: "false" },
    { id: "a", title: "重复 ID", done: false },
    { id: "b", title: "x", done: false, extra: 0 },
  ])
    assert.throws(() =>
      decodeTasks(JSON.stringify({ version: 1, tasks: [...first, bad] })),
    );
});
test("200 项可保存，第 201 项拒绝", () => {
  const many = Array.from({ length: 200 }, (_, i) => ({
    id: String(i),
    title: "计划",
    done: false,
  }));
  assert.equal(decodeTasks(encodeTasks(many)).length, 200);
  assert.throws(() => addTask(many, "多一项", "x"));
});
test("看似 HTML 的标题仍然是普通文本", () => {
  const title = "<img src=x onerror=alert(1)>";
  assert.equal(addTask([], title, "a")[0].title, title);
});
\`\`\`

## 来源、许可与验证边界

- [MDN：第一个网站](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)：核对网页组成与从计划到发布的过程。

- [MDN：客户端与服务器](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview)：核对请求、响应与客户端/服务器职责。

- [MDN：localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)：核对同源持久化、字符串存储及存储异常。

- [MDN：textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)：核对将输入作为文本插入的行为。

- [Pro Git：记录变更](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)：核对工作区、暂存与提交的区别。

- [Git：diff](https://git-scm.com/docs/git-diff)：核对未暂存与已暂存差异的比较对象。

- [Pro Git：分支与合并](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)：核对分支与冲突处理。

- [Git：push](https://git-scm.com/docs/git-push)：核对推送、远端分支与上游关系。

- [Git：restore](https://git-scm.com/docs/git-restore)：核对取消暂存与丢弃工作区改动的不同影响。

- [Git：revert](https://git-scm.com/docs/git-revert)：核对以新提交撤销普通提交；不展开合并提交撤销。

- [Git：stash](https://git-scm.com/docs/git-stash)：核对临时保存及未跟踪文件选项。

- [GitHub：Pull requests](https://docs.github.com/en/pull-requests/reference/pull-requests)：核对评审与合并请求的概念。

- [npm：ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/)：核对有锁文件时的干净安装及文件不一致的失败行为。

- [Node.js：测试运行器](https://nodejs.org/api/test.html)：核对 node --test 与断言的使用。

- [Anthropic：提示词实践](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)：仅核对明确任务、相关上下文及例子的通用方向；本书任务卡与协作流程为原创教学设计，不承诺模型效果。

- [OWASP：秘密管理](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)：核对秘密生命周期、最小权限与泄露后的撤销轮换。

- [Git：fetch](https://git-scm.com/docs/git-fetch)：核对获取远端记录与合入当前分支的区别。

- [Git：pull](https://git-scm.com/docs/git-pull)：核对 --ff-only 的快进与分叉拒绝行为。

- [Git：init](https://git-scm.com/docs/git-init)：核对指定初始分支与新仓库创建。

- [Git：安装](https://git-scm.com/install/)：提供安装工具的官方入口。

- [Node.js：下载](https://nodejs.org/en/download)：提供运行环境安装的官方入口。

正文、案例、任务卡与情境题为原创编写，参考资料用于核对工具行为；未复制图片或题库。测试只支持已执行案例，不是学习效果证明，也不代表人工审校。制作与具体证据见 README.md、QA.md。
`,Sc=JSON.parse('[{"name":".gitignore","content":"node_modules/\\n.env\\n.env.*\\n*.log\\n.DS_Store\\n"},{"name":"README.md","content":"# 我的学习清单\\n\\nNode.js 22.12+，无第三方依赖。在本目录打开终端：\\n\\n```sh\\nnode --version\\nnpm test\\nnpm start\\n```\\n\\n打开 http://127.0.0.1:5180 。终端保持运行，Ctrl+C 停止。服务器仅提供本地静态文件，没有业务 API。HTML 负责结构、CSS 负责外观、app.mjs 连接页面、tasks.mjs 负责数据规则、tasks.test.mjs 验证规则。无需 npm install；普通网络依赖项目则应按自己的 README 安装。\\n\\n功能：添加、完成、删除、同源浏览器保存、JSON 备份、校验后确认恢复。没有账号、同步或云端数据库。地址的协议、主机或端口变化会使用另一份存储；公开站点的 localhost 存储不会自动迁移。容量耗尽或保存被禁止时，显示未保存并保留之前的可见清单；损坏存储暂停写入，不悄悄覆盖。恢复备份会替换整份清单，请先导出现有数据；读取失败时导出的只包含当前可见的清单，不包含损坏的原数据。\\n\\n每项标题去两端空白后必须为 1–80 个 UTF-16 代码单元（emoji 等可能计为多个），最多 200 项；相同标题允许，ID 必须不同。JSON 版本固定为 1，无效记录整份拒绝。它是学习项目，存储可能被清除，也没有多标签页并发协调；不适合敏感信息或多人生产业务。发布前另外检查浏览器交互、窄屏、键盘、真实网址和数据恢复；自动测试只覆盖数据规则。\\n\\n源码按 MIT 投稿，教材说明按 CC0 投稿；AI 生成，尚未人工审校。\\n"},{"name":"app.mjs","content":"import {\\n  addTask,\\n  toggleTask,\\n  removeTask,\\n  encodeTasks,\\n  decodeTasks,\\n} from \\"./tasks.mjs\\";\\nconst KEY = \\"learning-list-v1\\";\\nconst form = document.querySelector(\\"#form\\");\\nconst input = document.querySelector(\\"#title\\");\\nconst list = document.querySelector(\\"#list\\");\\nconst status = document.querySelector(\\"#status\\");\\nconst restore = document.querySelector(\\"#restore\\");\\nlet tasks = [];\\nlet writable = true;\\nlet pending = null;\\ntry {\\n  const raw = localStorage.getItem(KEY);\\n  if (raw !== null) tasks = decodeTasks(raw);\\n} catch {\\n  writable = false;\\n  status.textContent =\\n    \\"无法读取已保存的清单。已暂停写入，避免覆盖旧数据；你可以通过备份恢复。\\";\\n}\\nfunction render() {\\n  list.replaceChildren();\\n  for (const task of tasks) {\\n    const row = document.createElement(\\"li\\");\\n    const checkbox = document.createElement(\\"input\\");\\n    checkbox.type = \\"checkbox\\";\\n    checkbox.checked = task.done;\\n    checkbox.setAttribute(\\"aria-label\\", `完成：${task.title}`);\\n    checkbox.addEventListener(\\"change\\", () =>\\n      change(() => toggleTask(tasks, task.id)),\\n    );\\n    const title = document.createElement(\\"span\\");\\n    title.textContent = task.title;\\n    title.className = task.done ? \\"done\\" : \\"\\";\\n    const remove = document.createElement(\\"button\\");\\n    remove.type = \\"button\\";\\n    remove.textContent = \\"删除\\";\\n    remove.setAttribute(\\"aria-label\\", `删除：${task.title}`);\\n    remove.addEventListener(\\"click\\", () =>\\n      change(() => removeTask(tasks, task.id)),\\n    );\\n    row.append(checkbox, title, remove);\\n    list.append(row);\\n  }\\n  document.querySelector(\\"#count\\").textContent =\\n    `${tasks.length} 项计划 · ${tasks.filter((t) => t.done).length} 项已完成`;\\n}\\nfunction change(getNext, recovery = false) {\\n  try {\\n    if (!writable && !recovery)\\n      throw new Error(\\"写入已暂停，请先从有效备份恢复\\");\\n    const next = getNext();\\n    localStorage.setItem(KEY, encodeTasks(next));\\n    tasks = next;\\n    writable = true;\\n    status.textContent = \\"已保存到此浏览器\\";\\n    render();\\n    return true;\\n  } catch (error) {\\n    status.textContent = `未保存：${error.message}`;\\n    render();\\n    return false;\\n  }\\n}\\nform.addEventListener(\\"submit\\", (event) => {\\n  event.preventDefault();\\n  if (change(() => addTask(tasks, input.value, crypto.randomUUID())))\\n    input.value = \\"\\";\\n  input.focus();\\n});\\ndocument.querySelector(\\"#export\\").addEventListener(\\"click\\", () => {\\n  const url = URL.createObjectURL(\\n    new Blob([encodeTasks(tasks)], { type: \\"application/json\\" }),\\n  );\\n  const link = document.createElement(\\"a\\");\\n  link.href = url;\\n  link.download = \\"learning-list-backup.json\\";\\n  link.click();\\n  setTimeout(() => URL.revokeObjectURL(url), 1000);\\n  status.textContent = writable\\n    ? \\"备份已生成，请确认浏览器已下载\\"\\n    : \\"已导出当前可见清单；读取失败的旧数据不在此备份中\\";\\n});\\nlet importSequence = 0;\\ndocument.querySelector(\\"#import\\").addEventListener(\\"change\\", async (event) => {\\n  const sequence = ++importSequence;\\n  pending = null;\\n  restore.disabled = true;\\n  const file = event.target.files[0];\\n  if (!file) return;\\n  try {\\n    if (file.size > 1000000) throw new Error(\\"备份文件超过 1 MB\\");\\n    const candidate = decodeTasks(await file.text());\\n    if (sequence !== importSequence) return;\\n    pending = candidate;\\n    restore.disabled = false;\\n    status.textContent = `已检查 ${pending.length} 项。点击“确认替换”才会覆盖当前清单。`;\\n  } catch (error) {\\n    if (sequence === importSequence)\\n      status.textContent = `备份未导入：${error.message}`;\\n  }\\n});\\nrestore.addEventListener(\\"click\\", () => {\\n  if (pending && change(() => pending, true)) {\\n    pending = null;\\n    restore.disabled = true;\\n  }\\n});\\nrender();\\n"},{"name":"index.html","content":"<!doctype html>\\n<html lang=\\"zh-CN\\">\\n  <head>\\n    <meta charset=\\"utf-8\\" />\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\" />\\n    <title>我的学习清单</title>\\n    <link rel=\\"stylesheet\\" href=\\"style.css\\" />\\n  </head>\\n  <body>\\n    <main>\\n      <p class=\\"eyebrow\\">一个可以解释清楚的小项目</p>\\n      <h1>我的学习清单</h1>\\n      <p>写下下一件想学的事，完成后打一个勾。</p>\\n      <form id=\\"form\\">\\n        <label for=\\"title\\">学习计划</label>\\n        <div class=\\"input-row\\">\\n          <input\\n            id=\\"title\\"\\n            autocomplete=\\"off\\"\\n            placeholder=\\"例如：练习一次 Git 提交\\"\\n          /><button>添加</button>\\n        </div>\\n      </form>\\n      <p id=\\"status\\" role=\\"status\\" aria-live=\\"polite\\"></p>\\n      <p id=\\"count\\"></p>\\n      <ul id=\\"list\\"></ul>\\n      <details>\\n        <summary>备份与恢复</summary>\\n        <p>\\n          数据只保存在此浏览器、此网址对应的本地空间。公开网页不会让他人看到你的清单。清除浏览器数据后会丢失，请下载备份。\\n        </p>\\n        <button id=\\"export\\" type=\\"button\\">下载 JSON 备份</button\\n        ><label for=\\"import\\">选择 JSON 备份（替换当前清单）</label\\n        ><input\\n          id=\\"import\\"\\n          type=\\"file\\"\\n          accept=\\".json,application/json\\"\\n        /><button id=\\"restore\\" type=\\"button\\" disabled>确认替换</button>\\n      </details>\\n    </main>\\n    <script type=\\"module\\" src=\\"app.mjs\\"><\/script>\\n  </body>\\n</html>\\n"},{"name":"package.json","content":"{\\n  \\"name\\": \\"learning-list\\", \\"version\\": \\"1.0.0\\", \\"private\\": true, \\"type\\": \\"module\\",\\n  \\"engines\\": {\\"node\\": \\">=22.12\\"},\\n  \\"scripts\\": {\\"start\\": \\"node server.mjs\\", \\"test\\": \\"node --test tasks.test.mjs\\"},\\n  \\"license\\": \\"MIT\\"\\n}\\n"},{"name":"server.mjs","content":"import { createServer } from \\"node:http\\";\\nimport { readFile } from \\"node:fs/promises\\";\\nconst files = {\\n  \\"/\\": [\\"index.html\\", \\"text/html\\"],\\n  \\"/index.html\\": [\\"index.html\\", \\"text/html\\"],\\n  \\"/style.css\\": [\\"style.css\\", \\"text/css\\"],\\n  \\"/app.mjs\\": [\\"app.mjs\\", \\"text/javascript\\"],\\n  \\"/tasks.mjs\\": [\\"tasks.mjs\\", \\"text/javascript\\"],\\n};\\nconst server = createServer(async (request, response) => {\\n  const path = new URL(request.url, \\"http://localhost\\").pathname;\\n  const entry = files[path];\\n  if (!entry || ![\\"GET\\", \\"HEAD\\"].includes(request.method)) {\\n    response.writeHead(404);\\n    response.end(\\"Not found\\");\\n    return;\\n  }\\n  try {\\n    const data = await readFile(new URL(entry[0], import.meta.url));\\n    response.writeHead(200, {\\n      \\"Content-Type\\": `${entry[1]}; charset=utf-8`,\\n      \\"Cache-Control\\": \\"no-store\\",\\n    });\\n    response.end(request.method === \\"HEAD\\" ? undefined : data);\\n  } catch {\\n    response.writeHead(500);\\n    response.end(\\"File unavailable\\");\\n  }\\n});\\nserver.on(\\"error\\", (error) => {\\n  console.error(error.message);\\n  process.exitCode = 1;\\n});\\nserver.listen(5180, \\"127.0.0.1\\", () =>\\n  console.log(\\"学习清单：http://127.0.0.1:5180（Ctrl+C 停止）\\"),\\n);\\n"},{"name":"style.css","content":"* {\\n  box-sizing: border-box;\\n}\\nbody {\\n  margin: 0;\\n  background: #f3f5ef;\\n  color: #24312b;\\n  font:\\n    17px/1.65 system-ui,\\n    sans-serif;\\n}\\nmain {\\n  max-width: 700px;\\n  margin: 7vh auto;\\n  padding: 28px;\\n}\\n.eyebrow {\\n  color: #527260;\\n  font-size: 14px;\\n}\\nh1 {\\n  font-size: clamp(30px, 7vw, 45px);\\n  line-height: 1.2;\\n}\\nlabel {\\n  display: block;\\n  margin: 14px 0 6px;\\n}\\n.input-row {\\n  display: flex;\\n  gap: 10px;\\n}\\ninput:not([type=\\"file\\"]) {\\n  flex: 1;\\n  min-width: 0;\\n  padding: 12px;\\n  border: 1px solid #8a9d90;\\n  border-radius: 7px;\\n  font: inherit;\\n}\\nbutton {\\n  padding: 10px 15px;\\n  border: 1px solid #40614d;\\n  border-radius: 7px;\\n  background: #24523a;\\n  color: white;\\n  font: inherit;\\n  cursor: pointer;\\n}\\nbutton:disabled {\\n  opacity: 0.5;\\n  cursor: default;\\n}\\nbutton:focus-visible,\\ninput:focus-visible,\\nsummary:focus-visible {\\n  outline: 3px solid #bc662b;\\n  outline-offset: 3px;\\n}\\nul {\\n  padding: 0;\\n}\\nli {\\n  list-style: none;\\n  display: flex;\\n  gap: 12px;\\n  align-items: center;\\n  border-bottom: 1px solid #d4ddd4;\\n  padding: 14px 0;\\n}\\nli span {\\n  flex: 1;\\n  overflow-wrap: anywhere;\\n}\\n.done {\\n  text-decoration: line-through;\\n  color: #677369;\\n}\\nli button {\\n  font-size: 14px;\\n  background: white;\\n  color: #354d3e;\\n}\\ndetails {\\n  margin-top: 30px;\\n  padding: 16px;\\n  background: white;\\n  border-radius: 10px;\\n}\\nsummary {\\n  cursor: pointer;\\n}\\n#status {\\n  min-height: 1.6em;\\n  color: #853b18;\\n}\\ninput[type=\\"file\\"] {\\n  max-width: 100%;\\n}\\n@media (max-width: 400px) {\\n  main {\\n    padding: 18px;\\n  }\\n  .input-row {\\n    flex-direction: column;\\n  }\\n}\\n"},{"name":"tasks.mjs","content":"export const MAX_TITLE = 80;\\nexport const MAX_TASKS = 200;\\nexport function validateTasks(tasks) {\\n  if (!Array.isArray(tasks) || tasks.length > MAX_TASKS)\\n    throw new Error(\\"清单格式错误或超过 200 项\\");\\n  const ids = new Set();\\n  for (const task of tasks) {\\n    if (\\n      !task ||\\n      typeof task !== \\"object\\" ||\\n      Array.isArray(task) ||\\n      Object.keys(task).sort().join(\\",\\") !== \\"done,id,title\\" ||\\n      typeof task.id !== \\"string\\" ||\\n      !task.id ||\\n      ids.has(task.id) ||\\n      typeof task.title !== \\"string\\" ||\\n      !task.title.trim() ||\\n      task.title !== task.title.trim() ||\\n      task.title.length > MAX_TITLE ||\\n      typeof task.done !== \\"boolean\\"\\n    )\\n      throw new Error(\\"清单包含无效记录\\");\\n    ids.add(task.id);\\n  }\\n  return tasks;\\n}\\nexport function addTask(tasks, title, id) {\\n  validateTasks(tasks);\\n  if (typeof title !== \\"string\\") throw new Error(\\"请输入文字\\");\\n  const clean = title.trim();\\n  if (!clean) throw new Error(\\"请先写一项学习计划\\");\\n  if (clean.length > MAX_TITLE) throw new Error(\\"最多 80 个 UTF-16 代码单元\\");\\n  if (tasks.length >= MAX_TASKS) throw new Error(\\"最多保存 200 项\\");\\n  const next = [...tasks, { id, title: clean, done: false }];\\n  return validateTasks(next);\\n}\\nexport function toggleTask(tasks, id) {\\n  validateTasks(tasks);\\n  if (!tasks.some((task) => task.id === id)) throw new Error(\\"找不到这一项\\");\\n  return tasks.map((task) =>\\n    task.id === id ? { ...task, done: !task.done } : { ...task },\\n  );\\n}\\nexport function removeTask(tasks, id) {\\n  validateTasks(tasks);\\n  if (!tasks.some((task) => task.id === id)) throw new Error(\\"找不到这一项\\");\\n  return tasks.filter((task) => task.id !== id);\\n}\\nexport function encodeTasks(tasks) {\\n  validateTasks(tasks);\\n  return JSON.stringify({ version: 1, tasks });\\n}\\nexport function decodeTasks(text) {\\n  const data = JSON.parse(text);\\n  if (\\n    !data ||\\n    Array.isArray(data) ||\\n    typeof data !== \\"object\\" ||\\n    Object.keys(data).sort().join(\\",\\") !== \\"tasks,version\\" ||\\n    data.version !== 1\\n  )\\n    throw new Error(\\"备份版本或格式不支持\\");\\n  return validateTasks(data.tasks);\\n}\\n"},{"name":"tasks.test.mjs","content":"import test from \\"node:test\\";\\nimport assert from \\"node:assert/strict\\";\\nimport {\\n  addTask,\\n  toggleTask,\\n  removeTask,\\n  encodeTasks,\\n  decodeTasks,\\n} from \\"./tasks.mjs\\";\\nconst first = [{ id: \\"a\\", title: \\"练习 Git\\", done: false }];\\ntest(\\"添加清理两端空白且不修改原数组\\", () => {\\n  const next = addTask(first, \\"  写需求  \\", \\"b\\");\\n  assert.equal(next[1].title, \\"写需求\\");\\n  assert.deepEqual(first, [{ id: \\"a\\", title: \\"练习 Git\\", done: false }]);\\n});\\ntest(\\"空输入和全空格都拒绝\\", () => {\\n  for (const s of [\\"\\", \\"   \\", \\"\\\\n\\\\t\\"]) assert.throws(() => addTask([], s, \\"x\\"));\\n});\\ntest(\\"标题 80 与 81 的边界\\", () => {\\n  assert.equal(addTask([], \\"a\\".repeat(80), \\"a\\")[0].title.length, 80);\\n  assert.throws(() => addTask([], \\"a\\".repeat(81), \\"a\\"));\\n});\\ntest(\\"允许相同标题但 ID 必须不同\\", () => {\\n  assert.equal(addTask(first, \\"练习 Git\\", \\"b\\").length, 2);\\n  assert.throws(() => addTask(first, \\"另一个\\", \\"a\\"));\\n});\\ntest(\\"切换两次恢复原值，其他项不变\\", () => {\\n  const list = addTask(first, \\"写需求\\", \\"b\\");\\n  const once = toggleTask(list, \\"a\\");\\n  assert.equal(once[0].done, true);\\n  assert.deepEqual(once[1], list[1]);\\n  assert.deepEqual(toggleTask(once, \\"a\\"), list);\\n});\\ntest(\\"按 ID 删除，重复标题不会一并删除\\", () => {\\n  assert.deepEqual(removeTask(addTask(first, \\"练习 Git\\", \\"b\\"), \\"a\\"), [\\n    { id: \\"b\\", title: \\"练习 Git\\", done: false },\\n  ]);\\n});\\ntest(\\"未知 ID 拒绝\\", () => {\\n  assert.throws(() => toggleTask(first, \\"missing\\"));\\n  assert.throws(() => removeTask(first, \\"missing\\"));\\n});\\ntest(\\"含完成状态的清单备份往返一致\\", () => {\\n  const list = toggleTask(addTask(first, \\"写需求\\", \\"b\\"), \\"b\\");\\n  assert.deepEqual(decodeTasks(encodeTasks(list)), list);\\n});\\ntest(\\"空清单可以备份\\", () => {\\n  assert.deepEqual(decodeTasks(encodeTasks([])), []);\\n});\\ntest(\\"坏 JSON、错误版本、额外字段均拒绝\\", () => {\\n  for (const s of [\\n    \\"{\\",\\n    \\"null\\",\\n    \\"[]\\",\\n    \'{\\"version\\":2,\\"tasks\\":[]}\',\\n    \'{\\"version\\":1,\\"tasks\\":[],\\"extra\\":true}\',\\n  ])\\n    assert.throws(() => decodeTasks(s));\\n});\\ntest(\\"坏记录整份拒绝，不接受部分有效数据\\", () => {\\n  for (const bad of [\\n    { id: \\"b\\", title: \\" \\", done: false },\\n    { id: \\"b\\", title: \\"x\\", done: \\"false\\" },\\n    { id: \\"a\\", title: \\"重复 ID\\", done: false },\\n    { id: \\"b\\", title: \\"x\\", done: false, extra: 0 },\\n  ])\\n    assert.throws(() =>\\n      decodeTasks(JSON.stringify({ version: 1, tasks: [...first, bad] })),\\n    );\\n});\\ntest(\\"200 项可保存，第 201 项拒绝\\", () => {\\n  const many = Array.from({ length: 200 }, (_, i) => ({\\n    id: String(i),\\n    title: \\"计划\\",\\n    done: false,\\n  }));\\n  assert.equal(decodeTasks(encodeTasks(many)).length, 200);\\n  assert.throws(() => addTask(many, \\"多一项\\", \\"x\\"));\\n});\\ntest(\\"看似 HTML 的标题仍然是普通文本\\", () => {\\n  const title = \\"<img src=x onerror=alert(1)>\\";\\n  assert.equal(addTask([], title, \\"a\\")[0].title, title);\\n});\\n"}]'),Rc=""+new URL("learning-list-BUemD7c1.zip",import.meta.url).href,v=e=>`项目标题：学习清单 v${e}
`;function N(){return{work:v(1),index:v(1),version:1,branch:"main",branches:{main:"c0"},remote:{main:"c0"},commits:[{id:"c0",parent:null,content:v(1),message:"初始记录"}],note:"练习从已提交、已推送的单文件仓库开始。"}}function D(e){return e.commits.find(t=>t.id===e.branches[e.branch])}function $(e){return e.work!==e.index||e.index!==D(e).content}function Tc(e,t){const s={...e,branches:{...e.branches},remote:{...e.remote},commits:[...e.commits]},r=D(e),o=(i,c)=>{const p=`c${e.commits.length}`;s.commits.push({id:p,parent:r.id,content:i,message:c}),s.branches[e.branch]=p};switch(t){case"edit":s.version++,s.work=v(s.version),s.note="只改变工作区。暂存内容与提交记录没有跟着改。";break;case"add":s.index=e.work,s.note="git add README.md：把此刻的工作区内容放入暂存区。";break;case"commit":if(e.index===r.content){s.note="没有已暂存的新内容，不能创建本练习的普通提交。";break}o(e.index,`记录暂存的 v${e.index.match(/v(\d+)/)[1]}`),s.note="git commit：暂存内容进入新提交；未暂存编辑仍留在工作区。";break;case"unstage":s.index=r.content,s.note="git restore --staged README.md：暂存区回到 HEAD，工作区编辑保留。";break;case"restore":s.work=e.index,s.note="git restore README.md：用暂存内容覆盖工作区；未暂存编辑被丢弃。";break;case"branch":if(e.branches.feature){s.note="feature 已存在，请用“切到 feature”。";break}if($(e)){s.note="本练习要求先整理干净，再建分支；真实 Git 可能携带未提交改动。";break}s.branches.feature=r.id,s.branch="feature",s.note="git switch -c feature：新名字指向当前提交并切换；没有复制出新的提交。";break;case"main":case"feature":if(!e.branches[t]){s.note="该分支不存在，请先新建 feature。";break}if($(e)){s.note="本练习先要求干净状态；真实 Git 会按文件覆盖风险决定是否允许携带改动。";break}s.branch=t,s.index=s.work=e.commits.find(i=>i.id===e.branches[t]).content,s.note=`git switch ${t}：工作区与暂存区切到该分支提交。`;break;case"push":s.remote[e.branch]=r.id,s.note="git push：只更新模拟远端当前分支。未提交文件不上传；没有创建 PR、合并或发布。";break;case"revert":if($(e)){s.note="先整理干净，再撤销当前普通提交。";break}if(!r.parent){s.note="本练习不撤销初始提交。";break}s.index=s.work=e.commits.find(i=>i.id===r.parent).content,o(s.index,`撤销 ${r.id}`),s.note="git revert HEAD：新增一条反向记录，原提交仍在；本练习不模拟冲突和合并提交。";break;default:throw new Error("未知练习动作")}return s}const Nc=Object.assign({"../../../../packages/content/ai-development/lessons/acceptance.json":kn,"../../../../packages/content/ai-development/lessons/agent-context.json":Hn,"../../../../packages/content/ai-development/lessons/capstone.json":de,"../../../../packages/content/ai-development/lessons/data-design.json":Te,"../../../../packages/content/ai-development/lessons/data-flow.json":nt,"../../../../packages/content/ai-development/lessons/debugging.json":At,"../../../../packages/content/ai-development/lessons/git-collaboration.json":Ot,"../../../../packages/content/ai-development/lessons/git-recovery.json":ms,"../../../../packages/content/ai-development/lessons/git-snapshot.json":Bs,"../../../../packages/content/ai-development/lessons/project-map.json":ti,"../../../../packages/content/ai-development/lessons/release.json":yi,"../../../../packages/content/ai-development/lessons/review-changes.json":Fi,"../../../../packages/content/ai-development/lessons/run-environment.json":fo,"../../../../packages/content/ai-development/lessons/security.json":Go,"../../../../packages/content/ai-development/lessons/small-scope.json":rr,"../../../../packages/content/ai-development/lessons/task-prompts.json":Dr,"../../../../packages/content/ai-development/lessons/testing.json":Xr,"../../../../packages/content/ai-development/lessons/user-problem.json":kc}),m=g.chapters.flatMap(e=>e.lessons.map(t=>Nc[`../../../../packages/content/ai-development/lessons/${t}.json`])),l=(e="")=>"#/book/ai-development"+(e?"/"+e:""),U="au-ai-development-reading-v1";function Bc(){try{const e=JSON.parse(localStorage.getItem(U)||"[]");return Array.isArray(e)?e.filter(t=>typeof t=="string"&&m.some(s=>s.id===t)):[]}catch{return[]}}function L(e,t){const s=URL.createObjectURL(new Blob([t],{type:"text/plain;charset=utf-8"})),r=document.createElement("a");r.href=s,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function H({text:e}){const[t,s]=d.useState("");return n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:"ad-copy",onClick:async()=>{try{await navigator.clipboard.writeText(e),s("已复制")}catch{s("复制失败，请手动选择文字")}},children:[n.jsx(Y,{size:15}),t==="已复制"?"已复制":"复制"]}),t&&n.jsx("small",{role:"status",children:t})]})}function k({text:e,label:t="参考结果"}){return n.jsxs("div",{className:"ad-code",children:[n.jsxs("div",{className:"ad-code-top",children:[n.jsx("span",{children:t}),n.jsx(H,{text:e})]}),n.jsx("pre",{tabIndex:0,children:n.jsx("code",{children:e})})]})}function z({item:e,onPick:t}){const[s,r]=d.useState(null);return n.jsxs("div",{className:"ad-choice",children:[n.jsx("h3",{children:e.question}),n.jsx("div",{className:"ad-options",children:e.choices.map((o,i)=>n.jsxs("button",{"aria-pressed":s===i,className:s===i?i===e.correctIndex?"correct":"retry":"",onClick:()=>{r(i),t?.(i)},children:[n.jsx("span",{children:"ABC"[i]}),o]},i))}),s!==null&&n.jsxs("p",{role:"status",className:"ad-feedback "+(s===e.correctIndex?"correct":"retry"),children:[n.jsxs("strong",{children:[s===e.correctIndex?"选择正确":"再想一步","。"]}),e.feedback[s]]})]})}function Mc({lesson:e}){const[t,s]=d.useState(0),[r,o]=d.useState(null),[i,c]=d.useState(!1),p=e.interactiveVisual.steps;return n.jsxs("section",{className:"ad-panel ad-scenario",children:[n.jsx("p",{className:"ad-eyebrow",children:"情境练习"}),n.jsx("h2",{children:"你会怎么处理？"}),n.jsx("p",{children:e.interactiveVisual.prediction}),n.jsx("div",{className:"ad-step-dots","aria-label":`情境 ${t+1} / ${p.length}`,children:p.map((j,x)=>n.jsx("span",{className:x<=t?"active":"",children:x+1},x))}),i?n.jsxs("div",{className:"ad-complete",role:"status",children:[n.jsx(A,{size:24}),n.jsx("h3",{children:"三个判断都走通了"}),n.jsx("p",{children:e.interactiveVisual.followUp})]}):n.jsxs(n.Fragment,{children:[n.jsx(z,{item:p[t],onPick:o},t),n.jsxs("div",{className:"ad-actions",children:[n.jsxs("button",{className:"ad-primary",disabled:r!==p[t].correctIndex,onClick:()=>{t===p.length-1?c(!0):(s(t+1),o(null))},children:[t===p.length-1?"完成情境":"下一步",n.jsx(f,{size:16})]}),n.jsx("span",{children:"选择后读反馈；答对即可继续。"})]})]}),n.jsx("button",{className:"ad-text-button",onClick:()=>{s(0),o(null),c(!1)},children:"重新练习情境"})]})}const qc=[{id:"edit",label:"编辑成下一版",command:"在编辑器保存 README.md"},{id:"add",label:"暂存这个文件",command:"git add README.md"},{id:"commit",label:"提交暂存内容",command:'git commit -m "记录修改"'},{id:"unstage",label:"取消暂存",command:"git restore --staged README.md"},{id:"restore",label:"丢弃未暂存编辑",command:"git restore README.md"},{id:"branch",label:"新建 feature",command:"git switch -c feature"},{id:"main",label:"切到 main",command:"git switch main"},{id:"feature",label:"切到 feature",command:"git switch feature"},{id:"push",label:"模拟推送",command:"git push"},{id:"revert",label:"撤销当前普通提交",command:"git revert HEAD"}];function B({before:e,after:t,label:s}){return n.jsxs("div",{className:"ad-diff",children:[n.jsx("h4",{children:s}),e===t?n.jsx("p",{children:"没有差异"}):n.jsxs("pre",{children:[n.jsxs("span",{className:"minus",children:["− ",e.trimEnd()]}),`
`,n.jsxs("span",{className:"plus",children:["+ ",t.trimEnd()]})]})]})}function _c(){const[e,t]=d.useState(N),s=D(e),[r,o]=d.useState([]);return n.jsxs("section",{className:"ad-panel ad-git",children:[n.jsxs("div",{className:"ad-section-heading",children:[n.jsxs("div",{children:[n.jsx("p",{className:"ad-eyebrow",children:"单文件 Git 练习台"}),n.jsx("h2",{children:"同一个文件，三个位置"})]}),n.jsx(P,{size:30})]}),n.jsx("p",{children:"先试：编辑 → 暂存 → 再编辑 → 提交。预测提交会保存哪一版，再观察。"}),n.jsx("p",{className:"ad-lab-note",children:"纯本地教学模型，按钮不执行系统命令。初始 main 已提交并推送；只模拟单文件的指定操作。练习中切分支要求干净状态；真实 Git 有时允许携带改动。网络、认证、冲突和未跟踪文件不在此模型中。"}),n.jsxs("div",{className:"ad-git-state",children:[n.jsxs("div",{children:[n.jsx("span",{children:"工作区"}),n.jsx("p",{children:"现在文件中的内容"}),n.jsx("pre",{children:e.work})]}),n.jsxs("div",{children:[n.jsx("span",{children:"暂存区"}),n.jsx("p",{children:"下次提交的内容"}),n.jsx("pre",{children:e.index})]}),n.jsxs("div",{children:[n.jsxs("span",{children:["HEAD · ",s.id]}),n.jsx("p",{children:"当前分支最新提交"}),n.jsx("pre",{children:s.content})]})]}),n.jsx("div",{className:"ad-git-buttons",children:qc.map(i=>n.jsxs("button",{onClick:()=>{t(c=>Tc(c,i.id)),o(c=>[i.command,...c].slice(0,8))},children:[n.jsx("strong",{children:i.label}),n.jsx("code",{children:i.command})]},i.id))}),n.jsx("p",{role:"status",className:"ad-git-note",children:e.note}),n.jsxs("div",{className:"ad-diffs",children:[n.jsx(B,{before:e.index,after:e.work,label:"git diff · 暂存 → 工作区"}),n.jsx(B,{before:s.content,after:e.index,label:"git diff --staged · HEAD → 暂存"})]}),n.jsxs("div",{className:"ad-git-locations",children:[n.jsxs("div",{children:[n.jsxs("h4",{children:["本地分支 · 当前 ",e.branch]}),Object.entries(e.branches).map(([i,c])=>n.jsxs("p",{children:[n.jsx("code",{children:i}),n.jsxs("span",{children:["→ ",c]})]},i))]}),n.jsxs("div",{children:[n.jsx("h4",{children:"模拟远端 · 尚不代表 PR 或上线"}),Object.entries(e.remote).map(([i,c])=>n.jsxs("p",{children:[n.jsxs("code",{children:["origin/",i]}),n.jsxs("span",{children:["→ ",c]})]},i))]})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"查看提交与刚才的操作"}),n.jsx("ol",{children:[...e.commits].reverse().map(i=>n.jsxs("li",{children:[n.jsx("code",{children:i.id})," ",i.message," · 父提交 ",i.parent||"无"]},i.id))}),n.jsx("ul",{children:r.map((i,c)=>n.jsx("li",{children:n.jsx("code",{children:i})},c))})]}),n.jsx("button",{className:"ad-secondary",onClick:()=>{t(N()),o([])},children:"重置 Git 练习"})]})}const E=[["goal","本次目标","哪一个具体行为需要改变？"],["context","项目事实","相关文件、当前行为、错误和运行方式。"],["scope","范围与边界","可以改什么？哪些方向变化需要先确认？"],["acceptance","验收标准","具体输入、操作和预期；加入边界或失败案例。"],["verification","验证方法","哪些命令和页面操作？未执行要如实说明。"],["delivery","交付要求","改动说明、真实结果、限制与未验证项。"]],I={goal:"",context:"",scope:"",acceptance:"",verification:"",delivery:""};function Gc({lesson:e}){const[t,s]=d.useState({...I}),r=E.map(([i,c])=>`【${c}】
${t[i].trim()||"（请填写具体内容）"}`).join(`

`),o=E.filter(([i])=>!t[i].trim());return n.jsxs("section",{className:"ad-panel ad-prompt",children:[n.jsx("p",{className:"ad-eyebrow",children:"任务卡练习台"}),n.jsx("h2",{children:"把你的想法整理成一次可检查的任务"}),n.jsx("p",{children:"你写内容，练习台只整理结构。栏目齐全不等于提示词正确；不会调用 AI 或自动评价语义。"}),n.jsxs("div",{className:"ad-actions",children:[n.jsx("button",{className:"ad-secondary",onClick:()=>s({...e.promptTemplate||I}),children:"填入本节示例"}),n.jsx("button",{className:"ad-text-button",onClick:()=>s({...I}),children:"清空任务卡"})]}),n.jsxs("div",{className:"ad-prompt-grid",children:[n.jsx("div",{children:E.map(([i,c,p])=>n.jsxs("label",{className:"ad-field",children:[c,n.jsx("textarea",{"aria-label":c,rows:3,value:t[i],placeholder:p,onChange:j=>s({...t,[i]:j.target.value})})]},i))}),n.jsxs("div",{className:"ad-prompt-output",children:[n.jsx("h3",{children:"你的任务卡"}),n.jsx("p",{role:"status",className:"ad-lab-note",children:o.length?"还没填写："+o.map(i=>i[1]).join("、"):"六栏已填写。请继续核对事实、范围与验收是否一致。"}),n.jsx(k,{text:r,label:"可复制文本"}),n.jsx("h4",{children:"复制前自己检查"}),n.jsxs("ul",{children:[n.jsx("li",{children:"每个“事实”有文件或观察支持吗？"}),n.jsx("li",{children:"验收能用具体操作判断吗？"}),n.jsx("li",{children:"任务是否悄悄扩大？"}),n.jsx("li",{children:"有没有真实秘密或私人数据？"})]}),n.jsx("p",{className:"ad-muted",children:"内容仅留在本次页面状态，刷新或切换章节后不保留。"})]})]})]})}function M({item:e,index:t}){return n.jsxs("article",{className:"ad-example",children:[n.jsxs("p",{className:"ad-eyebrow",children:["例题 ",t+1," · 跟着做"]}),n.jsx("h3",{children:e.title}),n.jsx("p",{children:e.problem}),n.jsx("ol",{children:e.steps.map((s,r)=>n.jsx("li",{children:s},r))}),n.jsxs(n.Fragment,{children:[e.code&&n.jsx(k,{text:e.code,label:"练习命令"}),n.jsx("p",{className:"ad-answer",children:e.answer.split(`
`).map((s,r)=>n.jsxs("span",{children:[s,n.jsx("br",{})]},r))}),!e.code&&e.answer.includes(`
`)&&n.jsx(H,{text:e.answer})]})]})}function C({question:e}){return n.jsxs(n.Fragment,{children:[n.jsx("ol",{children:e.solution.map((t,s)=>n.jsx("li",{children:t},s))}),n.jsx("p",{className:"ad-answer",children:e.answer})]})}function Pc({lesson:e}){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ad-page-heading",children:[n.jsxs("p",{className:"ad-eyebrow",children:[e.number," · 独立练习"]}),n.jsx("h1",{children:"先写你的判断，再对照解答"}),n.jsx("p",{children:"自由文字不自动评分，也不保存。比较解法时，请说明自己的选择为什么符合场景。"})]}),e.practice.map((t,s)=>n.jsxs("article",{className:"ad-panel ad-practice",children:[n.jsxs("p",{className:"ad-eyebrow",children:["练习 ",s+1," · 难度 ",t.difficulty,"/6"]}),n.jsx("h2",{children:t.problem}),n.jsxs("label",{className:"ad-field",children:["你的回答",n.jsx("textarea",{rows:3,placeholder:"写下操作、预期和理由。"})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"看一个提示"}),n.jsx("p",{children:t.hint})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"对照完整解答"}),n.jsx(C,{question:t})]})]},t.id))]})}function Uc({lesson:e}){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ad-concept",children:[n.jsx(G,{size:23}),n.jsxs("div",{children:[n.jsx("strong",{children:"这一节解决什么"}),n.jsx("p",{children:e.concept})]})]}),n.jsx("p",{className:"ad-intuition",children:e.intuition}),n.jsxs("section",{className:"ad-prose",children:[n.jsx("h2",{children:e.body[0].title}),n.jsx("p",{children:e.body[0].text})]}),n.jsx(M,{item:e.workedExamples[0],index:0}),e.body.slice(1).map(t=>n.jsxs("section",{className:"ad-prose",children:[n.jsx("h2",{children:t.title}),n.jsx("p",{children:t.text})]},t.title)),n.jsxs("section",{className:"ad-panel ad-workflow",children:[n.jsx("p",{className:"ad-eyebrow",children:"一步步做"}),n.jsx("ol",{children:e.workflow.map((t,s)=>n.jsxs("li",{children:[n.jsx("span",{children:s+1}),t]},s))})]}),n.jsx(z,{item:e.learningCheck}),n.jsx(M,{item:e.workedExamples[1],index:1}),n.jsxs("section",{className:"ad-mistakes",children:[n.jsx("h2",{children:"容易想错的两件事"}),e.commonMistakes.map(t=>n.jsxs("article",{children:[n.jsx("h3",{children:t.claim}),n.jsx("p",{children:t.correction})]},t.claim))]}),n.jsxs("details",{className:"ad-source",children:[n.jsx("summary",{children:"适用范围与来源"}),n.jsx("p",{children:e.formalDefinition.text}),n.jsx("ul",{children:e.formalDefinition.conditions.map(t=>n.jsx("li",{children:t},t))}),n.jsx("ul",{children:e.sources.map(t=>{const s=g.sources.find(r=>r.id===t);return n.jsxs("li",{children:[n.jsx("a",{href:s.url,target:"_blank",rel:"noreferrer",children:s.title}),n.jsx("p",{children:s.purpose})]},t)})})]}),n.jsxs("div",{className:"ad-next-box",children:[n.jsx("h3",{children:"读懂之后，做一次判断"}),n.jsx("p",{children:e.interactiveVisual.prediction}),n.jsxs("a",{className:"ad-primary",href:l(e.id+"/experiment"),children:["开始互动练习",n.jsx(f,{size:17})]})]})]})}function Lc({read:e}){return n.jsxs(n.Fragment,{children:[n.jsxs("section",{className:"ad-hero",children:[n.jsxs("div",{children:[n.jsx("p",{className:"ad-eyebrow",children:"AI University · 开放教科书"}),n.jsxs("h1",{children:["带着 AI",n.jsx("br",{}),"做项目",n.jsxs("span",{children:["让想法有方向，",n.jsx("br",{}),"让结果有依据。"]})]}),n.jsx("p",{children:"从“帮我做一个……”开始，学会说清需求、看懂项目、管理版本、验证改动。AI 可以帮你写代码，你来掌握方向。"}),n.jsxs("div",{className:"ad-actions",children:[n.jsxs("a",{className:"ad-primary",href:l(m[0].id),children:["从第一节开始",n.jsx(f,{size:17})]}),n.jsx("a",{className:"ad-secondary",href:l("project"),children:"看看贯穿项目"})]}),n.jsxs("div",{className:"ad-hero-stats",children:[n.jsxs("span",{children:[n.jsx("strong",{children:"6"})," 章学习路线"]}),n.jsxs("span",{children:[n.jsx("strong",{children:"18"})," 节完整内容"]}),n.jsxs("span",{children:[n.jsx("strong",{children:"1"})," 个贯穿项目"]})]})]}),n.jsxs("div",{className:"ad-notebook","aria-label":"开发一轮的过程",children:[n.jsxs("p",{children:["我的项目笔记 ",n.jsx("span",{children:"01"})]}),n.jsxs("h2",{children:["今天先做一件",n.jsx("br",{}),"可以检查的事。"]}),n.jsx("ol",{children:["写清谁遇到什么问题","定下首版与验收","给 Agent 一个小任务","看差异，亲自验证","记录版本，让人接手"].map((t,s)=>n.jsxs("li",{children:[n.jsx("span",{children:s+1}),t]},t))}),n.jsx("div",{className:"ad-notebook-note",children:"想法 → 决定 → 证据 → 交付"})]})]}),n.jsxs("section",{className:"ad-intro-grid",children:[n.jsxs("article",{children:[n.jsx("h2",{children:"给谁写的"}),n.jsx("p",{children:g.audience})]}),n.jsxs("article",{children:[n.jsx("h2",{children:"怎样学"}),n.jsx("p",{children:"用“学习清单”走完整个开发过程。先判断，再看反馈；先写自己的回答，再对照解法。没有强制先修的编程课程。"})]}),n.jsxs("article",{children:[n.jsx("h2",{children:"学完能做什么"}),n.jsx("p",{children:"能带着一页计划和一组验收，让 AI 小步实现项目，并自己判断结果、解释限制与交付。"})]})]}),n.jsxs("div",{className:"ad-section-heading",children:[n.jsxs("div",{children:[n.jsx("p",{className:"ad-eyebrow",children:"按顺序，搭起自己的框架"}),n.jsx("h2",{children:"六章，走完一轮开发"})]}),n.jsxs("p",{className:"ad-muted",children:["已标记读懂 ",e.length," / 18 节"]})]}),n.jsx("section",{className:"ad-chapters",children:g.chapters.map((t,s)=>n.jsxs("article",{children:[n.jsxs("span",{className:"ad-chapter-number",children:["0",s+1]}),n.jsx("h3",{children:t.title}),n.jsx("p",{children:t.objective}),n.jsx("ul",{children:t.lessons.map(r=>{const o=m.find(i=>i.id===r);return n.jsx("li",{children:n.jsxs("a",{href:l(r),children:[n.jsx("span",{children:o.number}),o.title,e.includes(r)?n.jsx(A,{size:14}):n.jsx(f,{size:14})]})},r)})})]},t.id))}),n.jsxs("section",{className:"ad-tools",children:[n.jsx("h2",{children:"在教材里，亲手试一试"}),n.jsxs("div",{children:[n.jsxs("a",{href:l("git-snapshot/experiment"),children:[n.jsx(P,{}),n.jsx("strong",{children:"Git 练习台"}),n.jsx("p",{children:"比较工作区、暂存与提交，观察分支和推送。"})]}),n.jsxs("a",{href:l("task-prompts/experiment"),children:[n.jsx(K,{}),n.jsx("strong",{children:"任务卡练习台"}),n.jsx("p",{children:"把模糊想法整理成明确目标、范围和验收。"})]}),n.jsxs("a",{href:l("project"),children:[n.jsx(G,{}),n.jsx("strong",{children:"可运行的学习清单"}),n.jsx("p",{children:"下载源码，按说明运行，再对照完整开发过程。"})]})]})]}),n.jsxs("details",{className:"ad-source",children:[n.jsx("summary",{children:"完整课程边界、来源与生成说明"}),n.jsx("p",{children:g.baseline}),n.jsx("ul",{children:g.outOfScope.map(t=>n.jsx("li",{children:t},t))}),n.jsx("p",{children:"AI 生成，尚未人工审校。本文、例题和练习为原创，内容 CC0-1.0，工具与项目 MIT。"}),g.sources.map(t=>n.jsxs("p",{children:[n.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.title}),"：",t.purpose]},t.id))]})]})}function Hc(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ad-page-heading",children:[n.jsx("p",{className:"ad-eyebrow",children:"贯穿项目 · 从需求到交付"}),n.jsx("h1",{children:"我的学习清单"}),n.jsx("p",{children:"一个无需第三方依赖的个人小网站。添加计划、勾选完成、删除，本地保存、备份和恢复。"}),n.jsxs("a",{className:"ad-primary",href:Rc,download:"learning-list.zip",children:[n.jsx(_,{size:17}),"下载完整项目 ZIP"]})]}),n.jsxs("section",{className:"ad-panel",children:[n.jsx("h2",{children:"下载后，按这四步运行"}),n.jsxs("ol",{children:[n.jsx("li",{children:"安装 Node.js 22.12+；解压 ZIP，在编辑器打开 learning-list 文件夹。"}),n.jsx("li",{children:"打开此文件夹的终端，先运行下面的版本检查和测试。"}),n.jsx("li",{children:"运行 npm start，保持终端打开，然后浏览器访问 http://127.0.0.1:5180。"}),n.jsx("li",{children:"试普通输入、全空格、重复标题、刷新和备份恢复。Ctrl+C 停止服务器。"})]}),n.jsx(k,{text:`node --version
npm test
npm start`,label:"在 learning-list 目录执行"}),n.jsx("p",{className:"ad-lab-note",children:"数据属于当前浏览器与源，不自动同步。它是学习项目，没有多人并发协调；不用于敏感或重要业务数据。恢复会替换当前清单，先下载备份。"})]}),n.jsxs("section",{className:"ad-panel",children:[n.jsx("h2",{children:"一条数据怎样走"}),n.jsx("div",{className:"ad-flow",children:["输入框","事件处理","数据校验","本地保存","页面显示"].map((e,t)=>n.jsxs("div",{children:[n.jsx("span",{children:t+1}),n.jsx("strong",{children:e}),t<4&&n.jsx(f,{size:17})]},e))}),n.jsx("p",{children:"app.mjs 连接输入、保存与显示；tasks.mjs 管规则；server.mjs 只提供静态文件。"}),n.jsx(k,{text:`{
  "version": 1,
  "tasks": [
    {"id": "a", "title": "练习 Git", "done": false}
  ]
}`,label:"备份的数据形状"})]}),w.projectPlan.map(e=>n.jsxs("section",{className:"ad-panel",children:[n.jsx("h2",{children:e.title}),n.jsx("p",{children:e.task}),n.jsx("h3",{children:"交付证据"}),n.jsx("ul",{children:e.evidence.map(t=>n.jsx("li",{children:t},t))})]},e.title)),n.jsxs("section",{className:"ad-panel",children:[n.jsx("h2",{children:"对照完整源码"}),n.jsx("p",{children:"下载包、网页源码与书稿附录来自同一份项目文件。"}),Sc.map(e=>n.jsxs("details",{children:[n.jsx("summary",{children:e.name}),n.jsx(k,{text:e.content,label:e.name}),n.jsx("button",{className:"ad-secondary",onClick:()=>L(e.name,e.content),children:"下载此文件"})]},e.name))]})]})}function zc(){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ad-page-heading",children:[n.jsx("p",{className:"ad-eyebrow",children:"回顾与综合实作"}),n.jsx("h1",{children:"用自己的话，再走一遍"}),n.jsx("p",{children:"先遮住解答。试着把步骤、判断和证据讲给另一人听。"})]}),w.chapterReviews.map((e,t)=>n.jsxs("section",{className:"ad-panel",children:[n.jsxs("h2",{children:["第 ",t+1," 章 · ",g.chapters[t].title]}),e.questions.map((s,r)=>n.jsxs("article",{className:"ad-review-question",children:[n.jsx("h3",{children:s.problem}),n.jsxs("details",{children:[n.jsx("summary",{children:"看提示"}),n.jsx("p",{children:s.hint})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"对照解答"}),n.jsx(C,{question:s})]})]},r))]},e.chapterId)),n.jsxs("section",{className:"ad-panel",children:[n.jsx("h2",{children:"综合实作与判断"}),w.exam.map((e,t)=>n.jsxs("article",{className:"ad-review-question",children:[n.jsx("h3",{children:e.problem}),n.jsxs("details",{children:[n.jsx("summary",{children:"看提示与完整解答"}),n.jsx("p",{children:e.hint}),n.jsx(C,{question:e})]})]},t))]})]})}function Wc({path:e}){const t=e.split("/").slice(1),s=t[0]||"",r=t[1]||"read",o=m.find(a=>a.id===s),i=o?m.indexOf(o):-1,[c,p]=d.useState(Bc),[j,x]=d.useState(!0),[b,y]=d.useState(!1),S=d.useRef(null);d.useEffect(()=>y(!1),[e]),d.useEffect(()=>{if(!b)return;const a=u=>{u.key==="Escape"&&(y(!1),S.current?.focus())};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[b]);function O(a){const u=c.includes(a)?c.filter(h=>h!==a):[...c,a];p(u);try{localStorage.setItem(U,JSON.stringify(u)),x(!0)}catch{x(!1)}}const V=!s||["project","review","glossary"].includes(s)?t.length<=1:!!o&&t.length<=2&&["read","experiment","practice"].includes(r);return n.jsxs("div",{className:"ad-app",children:[n.jsx("a",{className:"ad-skip",href:"#main",onClick:a=>{a.preventDefault(),document.getElementById("main")?.focus()},children:"跳到正文"}),n.jsxs("header",{className:"ad-header",children:[n.jsxs("a",{href:"#/home",className:"ad-brand",children:[n.jsxs("span",{children:["Au",n.jsx("span",{children:"•"})]}),n.jsxs("div",{children:["AI University",n.jsx("small",{children:"开放教科书计划 · 其他"})]})]}),n.jsxs("nav",{"aria-label":"教材导航",children:[n.jsx("a",{href:"#/downloads?book=ai-development",children:"下载与打印"}),n.jsx("a",{href:"#/library?category=other",children:"教科书库"}),n.jsx("a",{href:l(),children:"本书目录"}),n.jsx("a",{href:l("project"),children:"贯穿项目"}),n.jsx("a",{href:l("review"),children:"回顾与实作"}),n.jsxs("button",{className:"ad-download",onClick:()=>L("AI-Assisted-Development.md",Dc),children:[n.jsx(_,{size:15}),n.jsx("span",{children:"整本书稿"})]})]})]}),s&&n.jsxs("div",{className:"ad-mobile-bar",children:[n.jsxs("button",{ref:S,"aria-expanded":b,"aria-controls":"ad-directory",onClick:()=>y(!b),children:[b?n.jsx(F,{size:16}):n.jsx(W,{size:16}),"教材目录"]}),n.jsx("a",{href:l(),children:"教材主页"})]}),n.jsxs("div",{className:"ad-shell "+(s?"ad-reader":"ad-home"),children:[s&&n.jsxs("aside",{id:"ad-directory",className:"ad-sidebar "+(b?"open":""),children:[n.jsxs("a",{className:"ad-back",href:l(),children:[n.jsx(T,{size:14}),"教材主页"]}),n.jsx("p",{className:"ad-eyebrow",children:"从想法到交付"}),g.chapters.map((a,u)=>n.jsxs("section",{children:[n.jsxs("h2",{children:[u+1,". ",a.title]}),a.lessons.map(h=>{const R=m.find(J=>J.id===h);return n.jsxs("a",{href:l(h),"aria-current":o?.id===h?"page":void 0,children:[n.jsx("span",{children:R.number}),R.title,c.includes(h)&&n.jsx(A,{size:12})]},h)})]},a.id)),n.jsx("a",{href:l("project"),children:"贯穿项目与源码"}),n.jsx("a",{href:l("review"),children:"回顾与综合实作"}),n.jsx("a",{href:l("glossary"),children:"术语索引"})]}),n.jsx("main",{id:"main",tabIndex:-1,children:V?s?o?n.jsxs("div",{children:[r!=="practice"&&n.jsxs("div",{className:"ad-page-heading",children:[n.jsxs("p",{className:"ad-eyebrow",children:["第 ",o.number.split(".")[0]," 章 · ",o.number]}),n.jsx("h1",{children:o.title}),n.jsx("p",{children:o.subtitle}),o.prerequisites.length>0&&n.jsxs("small",{children:["先修：",o.prerequisites.map(a=>{const u=m.find(h=>h.id===a);return n.jsxs("a",{href:l(a),children:[u.number," ",u.title]},a)})]})]}),n.jsx("nav",{className:"ad-tabs","aria-label":"本节学习方式",children:[["read","读与跟着做"],["experiment","互动练习"],["practice","独立练习"]].map(([a,u])=>n.jsx("a",{href:l(o.id+(a==="read"?"":"/"+a)),"aria-current":r===a?"page":void 0,children:u},a))}),r==="read"?n.jsx(Uc,{lesson:o},e):r==="experiment"?n.jsxs("div",{children:[n.jsx(Mc,{lesson:o}),o.interactiveVisual.kind==="git"&&n.jsx(_c,{}),o.interactiveVisual.kind==="prompt"&&n.jsx(Gc,{lesson:o}),n.jsxs("div",{className:"ad-next-box",children:[n.jsx("h3",{children:"把理由写成自己的话"}),n.jsx("p",{children:o.interactiveVisual.followUp}),n.jsxs("a",{className:"ad-primary",href:l(o.id+"/practice"),children:["做四道独立练习",n.jsx(f,{size:16})]})]})]},e):n.jsx(Pc,{lesson:o},e),n.jsxs("section",{className:"ad-read-record",children:[n.jsxs("button",{className:c.includes(o.id)?"ad-secondary":"ad-primary",onClick:()=>O(o.id),children:[n.jsx(A,{size:16}),c.includes(o.id)?"已标记能解释 · 点击取消":"我能解释这一节"]}),n.jsx("p",{children:"这是你的阅读标记，保存在本机；不是自动能力评定。"}),!j&&n.jsx("p",{role:"status",children:"浏览器无法保存标记，当前阅读仍可继续。"})]}),n.jsxs("nav",{className:"ad-pagination","aria-label":"上下节",children:[i>0?n.jsxs("a",{href:l(m[i-1].id),children:[n.jsx(T,{size:16}),"上一节",n.jsx("small",{children:m[i-1].title})]}):n.jsx("span",{}),i<m.length-1?n.jsxs("a",{href:l(m[i+1].id),children:["下一节",n.jsx(f,{size:16}),n.jsx("small",{children:m[i+1].title})]}):n.jsxs("a",{href:l("review"),children:["综合实作",n.jsx(f,{size:16})]})]})]},o.id):s==="project"?n.jsx(Hc,{}):s==="review"?n.jsx(zc,{}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"ad-page-heading",children:[n.jsx("p",{className:"ad-eyebrow",children:"随时回来查"}),n.jsx("h1",{children:"术语索引"}),n.jsx("p",{children:"每个词都对应一个用途；不必先背完再开始。"})]}),n.jsx("dl",{className:"ad-glossary",children:w.glossary.map(a=>n.jsxs("div",{children:[n.jsx("dt",{children:a.term}),n.jsx("dd",{children:a.definition})]},a.term))})]}):n.jsx(Lc,{read:c}):n.jsxs("div",{className:"ad-panel",children:[n.jsx("h1",{children:"没有这一页"}),n.jsx("a",{href:l(),children:"返回教材主页"})]})})]}),n.jsxs("footer",{className:"ad-footer",children:[n.jsx("p",{children:"AI 编写 · 投稿贡献：aby0120 · 内容 CC0 / 代码 MIT"}),n.jsxs("nav",{children:[n.jsx("a",{href:"#/library",children:"教科书库"}),n.jsx("a",{href:l("glossary"),children:"术语索引"}),n.jsx("a",{href:l(),children:"本书主页"})]})]})]})}export{Wc as default};
