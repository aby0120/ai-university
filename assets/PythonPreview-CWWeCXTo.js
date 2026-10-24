import{c as L,r as d,j as e,D as A,X as K,M as Q,L as X,S as Z,C as V,A as q,a as w,B as W,b as D}from"./index-B_WvA-eF.js";import{C as ee}from"./copy-5CxxilXX.js";import"./react-D-vXKkXw.js";import"./math-BvXWHf-j.js";const G=L("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);const H=L("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]),te="arguments",ne="chapter-4",oe="4.2",le="传入参数与默认值",se="调用函数时，可以按位置给值，也可以写清参数名；常用值可以设默认值。",ie="调用函数时，可以按位置给值，也可以写清参数名；常用值可以设默认值。",ue="点饮料：说明杯数和单价；不特别说明杯数时，按一杯准备。",ae=["先看清每个输入代表什么","把常用值写成默认值","列表输入要约定是否修改"],pe=[{title:"先看清每个输入代表什么",text:"def cost(price, count): 有两个参数。cost(3, 2) 按位置把 3 交给 price，2 交给 count，计算 6。顺序错了，含义可能就变了；像单价和数量这样的参数，要先用文字写清单位。"},{title:"把常用值写成默认值",text:"def cost(price, count=1): 表示没有给 count 时使用 1。cost(3) 是买一件，cost(3, 2) 是买两件。cost(price=3, count=2) 明确写出参数名，这叫按关键字传值。这里默认参数放在必填参数后面。"},{title:"列表输入要约定是否修改",text:"如果只想算清单总数，可以循环读取列表、返回 total，而不添加或删除原列表。这样调用者更容易预测结果。默认值先使用数字或文字；把 [] 放在默认值里可能让多次调用共享同一个列表，进阶说明见选读。"}],de={text:"参数可按位置或名称提供；默认值在这个参数被省略时使用。",conditions:["明确传入的参数覆盖默认值；必填参数放在默认参数前。"]},ce=[{text:"默认 count 是 1。"},{text:"传入 2 时覆盖默认值。"},{text:"结果分别为 3 和 6。"}],re={kind:"python-trace",prediction:"单价 3、数量 2，返回多少？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`def cost(price, count=1):
    return price * count

result = cost(3, 2)
print(result)
`,stdout:`6
`,stdin:""},followUp:"选数量 0；想测试默认值，可在本机把调用改成 cost(3)。",codeTemplate:`def cost(price, count=1):
    return price * count

result = cost(3, {{count}})
print(result)
`,controls:[{name:"count",label:"购买数量",values:[0,1,2,3,4],defaultIndex:2}],watch:["price","count","result"]},me=[{title:"默认买一件",problem:"单价 3，分别购买一件和两件。",steps:["默认 count 是 1。","传入 2 时覆盖默认值。","结果分别为 3 和 6。"],answer:{code:`def cost(price, count=1):
    return price * count

print(cost(3))
print(cost(3, 2))
`,stdout:`3
6
`,stdin:""}},{title:"写清参数名",problem:"单价 4，买 3 件。",steps:["price 明确接到 4。","count 明确接到 3。"],answer:{code:`def cost(price, count=1):
    return price * count

print(cost(count=3, price=4))
`,stdout:`12
`,stdin:""}}],ve=[{id:"arguments-m1",claim:"给了数量 0，默认值 1 仍然会生效。",correction:"明确传入 0 就按 0 使用；默认值只在省略时使用。"},{id:"arguments-m2",claim:"按位置传值时顺序可以随便换。",correction:"每个位置对应一个参数；不清楚时写参数名。"}],ye=[{problem:"单价 5，使用默认数量 1。",hint:"只传 price。",solution:["5 * 1 = 5。"],answer:{code:`def cost(price, count=1):
    return price * count

print(cost(5))
`,stdout:`5
`,stdin:""},id:"arguments-p1",difficulty:1,misconceptionTags:["arguments-m1"]},{problem:"单价 5，数量 2，用参数名调用。",hint:"写 price=5、count=2。",solution:["结果为 10。"],answer:{code:`def cost(price, count=1):
    return price * count

print(cost(price=5, count=2))
`,stdout:`10
`,stdin:""},id:"arguments-p2",difficulty:1,misconceptionTags:["arguments-m2"]},{problem:"写 total_of，只读取 [2, 3] 并返回总和。",hint:"不要修改输入列表。",solution:["累加得到 5。","原列表仍有两项。"],answer:{code:`def total_of(values):
    total = 0
    for value in values:
        total = total + value
    return total

values = [2, 3]
print(total_of(values))
print(values)
`,stdout:`5
[2, 3]
`,stdin:""},id:"arguments-p3",difficulty:2,misconceptionTags:["arguments-m1"]},{problem:"单价 5，数量 0 的费用是多少？",hint:"明确传入 0。",solution:["0 会覆盖默认值 1。","费用为 0。"],answer:{code:`def cost(price, count=1):
    return price * count

print(cost(5, 0))
`,stdout:`0
`,stdin:""},id:"arguments-p4",difficulty:1,misconceptionTags:["arguments-m2"]}],be={question:"cost(price, count=1) 被 cost(5, 0) 调用时，count 是多少？",correctIndex:1,choices:["1（默认值总生效）","0（明确传入的值）","5（参数顺序无关）"],explanation:"明确传入的值覆盖默认值。",feedback:["默认值只在没给这个参数时使用。","对，传入 0 就按 0 件计算。","第二个位置对应 count，不是第一个。"]},fe=["functions"],ge=4,he=["arguments-m1","arguments-m2"],xe={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},ze=["python-tutorial","python-control"],je=[{title:"选读：为什么不把 [] 当默认清单",text:"默认值在定义函数时建立一次。如果使用 def add(item, items=[]): 并往 items 添加，多次省略 items 的调用会共用这份列表。安全的做法是默认 items=None，再在函数内判断 if items is None: items = []。None 表示这里尚未提供清单；is None 检查它是否就是这个标记。初学阶段也可以让列表参数必填，避免隐含状态。"}],we={id:te,chapterId:ne,number:oe,title:le,subtitle:se,concept:ie,intuition:ue,objectives:ae,body:pe,formalDefinition:de,derivation:ce,interactiveVisual:re,workedExamples:me,commonMistakes:ve,practice:ye,learningCheck:be,prerequisites:fe,difficulty:ge,misconceptionTags:he,provenance:xe,sources:ze,furtherReading:je},$e="capstone",_e="chapter-5",ke="5.4",Te="综合项目：本地消费汇总器",Ne="把读取、检查、计算、显示四步接起来，完成一个费用汇总工具。",Ee="把读取、检查、计算、显示四步接起来，完成一个费用汇总工具。",Ce="先把账单读清楚，确认金额有效，再按类别汇总，最后显示报表。",Ie=["先做能手算的小账单","把责任分成四步","最后才接上命令行外壳"],qe=[{title:"先做能手算的小账单",text:"食品 125 分、交通 200 分、食品 75 分。自己先算：食品 200 分，交通 200 分，总计 400 分。主线先用内存里的三条记录，把第 3 章的列表、字典和第 4 章的函数组合起来；不要一开始同时加入文件、命令行和测试。"},{title:"把责任分成四步",text:"第一步读取 CSV（第 5.2 节）；第二步检查列名、类别和整数分金额，零和负数要拒绝（第 4.4 节）；第三步用字典累加同一类别（第 3.2 节）；第四步稳定地显示结果。先验证第三步，再接文件输入。附录提供完整源码，每个函数都能找到对应步骤。"},{title:"最后才接上命令行外壳",text:"把附录源码与 sample.csv 保存到同一文件夹，在终端进入该目录。先运行 python3 expense_report.py --help 查看输入格式，再运行 python3 expense_report.py sample.csv。本项目把记录金额保存为整数分，显示时才换算成元。CLI 意思是“用终端命令输入参数”；argparse 帮我们读取文件名。完整测试文件里的 class 是 unittest 的固定组织模板，面向对象机制留给后续课程。"}],Se={text:"费用工具按读取、验证、汇总、显示分步完成；本项目每条金额是正整数分。",conditions:["每条记录金额按正整数分处理；零和负数、缺失列、空类别和非法金额应明确拒绝。","没有记录时，总计是 0；这与一条金额为 0 的非法记录不同。"]},Ve=[{text:"每条记录都是含 category、amount 的字典。"},{text:"首次遇到类别，从 0 开始累加。"},{text:"食品为 125 + 75，交通为 200；全部共 400。"}],Pe={kind:"python-trace",prediction:"最后一条由 75 分改为 50 分，总计会是多少？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`amounts = [125, 200, 75]
total = 0
for amount in amounts:
    total = total + amount
print(total)
`,stdout:`400
`,stdin:""},followUp:"选 75 分，逐项核对总计 125 → 325 → 400。",codeTemplate:`amounts = [125, 200, {{extra}}]
total = 0
for amount in amounts:
    total = total + amount
print(total)
`,controls:[{name:"extra",label:"最后一条金额（分）",values:[50,75,100,125],defaultIndex:1}],watch:["amounts","amount","total"]},Re=[{title:"先完成汇总核心",problem:"把三条小账单按类别求和。 本段约定记录已经检查过，金额为正整数分。",steps:["每条记录都是含 category、amount 的字典。","首次遇到类别，从 0 开始累加。","食品为 125 + 75，交通为 200；全部共 400。"],answer:{code:`records = [
    {"category": "食品", "amount": 125},
    {"category": "交通", "amount": 200},
    {"category": "食品", "amount": 75},
]
totals = {}
total = 0
for record in records:
    category = record["category"]
    amount = record["amount"]
    totals[category] = totals.get(category, 0) + amount
    total = total + amount
print(totals["食品"])
print(totals["交通"])
print(total)
`,stdout:`200
200
400
`,stdin:""}},{title:"显示时才换算为元",problem:"把 375 分显示成 3.75 元。",steps:["先用整数分得到总额。","除以 100 把单位换成元。","f 文字中的 :.2f 表示只在显示时保留两位小数；内部账目仍保留整数分。"],answer:{code:`cents = 125 * 3
print(f"{cents / 100:.2f} 元")
`,stdout:`3.75 元
`,stdin:""}}],Ae=[{id:"capstone-m1",claim:"能转成整数的金额都可以计入账单。",correction:"每条金额还必须大于 0；零和负数在本项目中拒绝。"},{id:"capstone-m2",claim:"错误输入可以默默改成 0。",correction:"明确报错，让使用者修正输入，避免隐藏数据问题。"}],Oe=[{problem:"同一类别的 100 分和 50 分，合计多少？",hint:"先在一个键上累加。",solution:["结果 150 分。"],answer:{code:`totals = {}
for amount in [100, 50]:
    totals["食品"] = totals.get("食品", 0) + amount
print(totals["食品"])
`,stdout:`150
`,stdin:""},id:"capstone-p1",difficulty:1,misconceptionTags:["capstone-m1"]},{problem:"把 150 分显示为元，保留两位小数。",hint:"使用本节的 :.2f。",solution:["除以 100，显示为 1.50。"],answer:{code:`cents = 150
print(f"{cents / 100:.2f} 元")
`,stdout:`1.50 元
`,stdin:""},id:"capstone-p2",difficulty:2,misconceptionTags:["capstone-m2"]},{problem:"检查金额 0 分和 -1 分：本项目约定每条金额必须大于 0。",hint:"检查 amount <= 0。",solution:["逐个检查 0、-1。","两者都不是正整数分，应该被拒绝。"],answer:{code:`for amount in [0, -1]:
    if amount <= 0:
        print("金额必须大于 0")
    else:
        print(amount)
`,stdout:`金额必须大于 0
金额必须大于 0
`,stdin:""},id:"capstone-p3",difficulty:2,misconceptionTags:["capstone-m1"]},{problem:"没有记录时，总计多少分？",hint:"累加从 0 开始。",solution:["循环不执行，总计为 0。"],answer:{code:`total = 0
for amount in []:
    total = total + amount
print(total)
`,stdout:`0
`,stdin:""},id:"capstone-p4",difficulty:1,misconceptionTags:["capstone-m2"]}],De={question:"工具读到负金额，怎样处理才符合本项目约定？",correctIndex:1,choices:["直接加进去，反正能计算","说明错误并拒绝这条输入","默默改成 0"],explanation:"本项目每条记录只接收正整数分；零和负数都应明确拒绝。",feedback:["能做算术不等于符合输入要求。","对，先验证，再汇总。","默默改值会让报表看似成功，却隐藏了原始数据问题。"]},Be=["testing","dictionaries","json-csv"],Me=5,Fe=["capstone-m1","capstone-m2"],Ue={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Je=["python-tutorial","python-csv","python-argparse","python-pathlib"],Le=[],We={id:$e,chapterId:_e,number:ke,title:Te,subtitle:Ne,concept:Ee,intuition:Ce,objectives:Ie,body:qe,formalDefinition:Se,derivation:Ve,interactiveVisual:Pe,workedExamples:Re,commonMistakes:Ae,practice:Oe,learningCheck:De,prerequisites:Be,difficulty:Me,misconceptionTags:Fe,provenance:Ue,sources:Je,furtherReading:Le},Ge="comprehensions",He="chapter-3",Ye="3.4",Ke="推导式与数据整理",Qe="列表推导式是“逐个处理并收集结果”的短写法，先读懂普通循环。",Xe="列表推导式是“逐个处理并收集结果”的短写法，先读懂普通循环。",Ze="把每件商品的数量翻倍，收集成一张新清单。",et=["先用已经学会的 for","再把同样的步骤写成一行","需要时加一个筛选条件"],tt=[{title:"先用已经学会的 for",text:"从 values = [1, 2, 3] 出发，新建 result = []。循环里计算 value * 2，再 result.append(...) 放进新列表。得到 [2, 4, 6]。原列表仍是 [1, 2, 3]，因为我们添加的是新列表。"},{title:"再把同样的步骤写成一行",text:"result = [value * 2 for value in values] 与上面的简单循环目的相同。阅读时先找右边的 for：从 values 逐个取 value；再看前面的 value * 2：每项变成什么；外面的方括号表示收集成列表。"},{title:"需要时加一个筛选条件",text:"[value * 2 for value in values if value >= 2] 表示先保留至少 2 的项，再翻倍；结果 [4, 6]。先用小列表手算。遇到多层循环、复杂条件，继续写普通 for 更容易检查；短不是这节的目标，能解释每项怎么来才是。"}],nt={text:"[表达式 for 项目 in 数据 if 条件] 从数据逐项筛选、计算，并收集成新列表；条件部分可省略。",conditions:["每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。"]},ot=[{text:"从空 result 开始。"},{text:"每轮计算两倍并追加。"},{text:"得到 2、4、6 三项。"}],lt={kind:"python-trace",prediction:"门槛是 2，哪些数留下？翻倍后是什么？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`values = [1, 2, 3]
minimum = 2
result = []
for value in values:
    if value >= minimum:
        result.append(value * 2)
print(result)
`,stdout:`[4, 6]
`,stdin:""},followUp:"把门槛改为 4，看看有没有项目加入结果。这是对应推导式的逐步展开。",codeTemplate:`values = [1, 2, 3]
minimum = {{minimum}}
result = []
for value in values:
    if value >= minimum:
        result.append(value * 2)
print(result)
`,controls:[{name:"minimum",label:"保留的最小值",values:[1,2,3,4],defaultIndex:1}],watch:["values","minimum","value","result"]},st=[{title:"普通循环收集结果",problem:"把 1、2、3 分别翻倍。",steps:["从空 result 开始。","每轮计算两倍并追加。","得到 2、4、6 三项。"],answer:{code:`values = [1, 2, 3]
result = []
for value in values:
    result.append(value * 2)
print(result)
`,stdout:`[2, 4, 6]
`,stdin:""}},{title:"写成推导式",problem:"只取至少 2 的数，再翻倍。",steps:["1 不满足条件，跳过。","2、3 保留下来。","分别乘 2 得到 4、6。"],answer:{code:`values = [1, 2, 3]
result = [value * 2 for value in values if value >= 2]
print(result)
`,stdout:`[4, 6]
`,stdin:""}}],it=[{id:"comprehensions-m1",claim:"推导式一定比普通循环更适合。",correction:"简单任务可用推导式；步骤复杂时普通循环更易检查。"},{id:"comprehensions-m2",claim:"创建 result 时会自动修改 values。",correction:"本节收集到新列表 result，原列表不自动改变。"}],ut=[{problem:"把 [1, 2] 每项加 1，得到新列表。",hint:"前面的表达式是 value + 1。",solution:["1 变 2，2 变 3。"],answer:{code:`values = [1, 2]
result = [value + 1 for value in values]
print(result)
`,stdout:`[2, 3]
`,stdin:""},id:"comprehensions-p1",difficulty:2,misconceptionTags:["comprehensions-m1"]},{problem:"从 [1, 2, 3] 里只保留至少 2 的数。",hint:"前面仍写 value。",solution:["筛选但不改变数值。"],answer:{code:`values = [1, 2, 3]
result = [value for value in values if value >= 2]
print(result)
`,stdout:`[2, 3]
`,stdin:""},id:"comprehensions-p2",difficulty:2,misconceptionTags:["comprehensions-m2"]},{problem:"用普通循环完成上一题。",hint:"满足 if 后才 append。",solution:["新列表只收到 2 和 3。"],answer:{code:`values = [1, 2, 3]
result = []
for value in values:
    if value >= 2:
        result.append(value)
print(result)
`,stdout:`[2, 3]
`,stdin:""},id:"comprehensions-p3",difficulty:2,misconceptionTags:["comprehensions-m1"]},{problem:"把空列表每项翻倍，会得到什么？",hint:"没有项可以处理。",solution:["新列表也是空列表。"],answer:{code:`values = []
result = [value * 2 for value in values]
print(result)
`,stdout:`[]
`,stdin:""},id:"comprehensions-p4",difficulty:2,misconceptionTags:["comprehensions-m2"]}],at={question:"看推导式不明白时，可以怎么检查？",correctIndex:1,choices:["先把它写得更短","还原成普通 for 循环","认为它会直接修改原列表"],explanation:"还原成 for、if、append，逐项手算。",feedback:["更短可能更难看清步骤。","对，用已经学会的循环检查每一项。","这里收集的是新列表，原列表不自动改变。"]},pt=["tuples-sets"],dt=3,ct=["comprehensions-m1","comprehensions-m2"],rt={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},mt=["python-tutorial","python-data"],vt=[],yt={id:Ge,chapterId:He,number:Ye,title:Ke,subtitle:Qe,concept:Xe,intuition:Ze,objectives:et,body:tt,formalDefinition:nt,derivation:ot,interactiveVisual:lt,workedExamples:st,commonMistakes:it,practice:ut,learningCheck:at,prerequisites:pt,difficulty:dt,misconceptionTags:ct,provenance:rt,sources:mt,furtherReading:vt},bt="conditions",ft="chapter-2",gt="2.1",ht="条件与分支",xt="先判断条件，再选择其中一条路执行。",zt="先判断条件，再选择其中一条路执行。",jt="带够车费才能乘车；没带够就走另一条路。",wt=["把一个问题写成判断","用 if 和 else 写两条路","检查刚好够的情况"],$t=[{title:"把一个问题写成判断",text:"设车费是 5 元，money 是你带的钱。money >= 5 读作“带的钱是否至少有 5 元”；>= 表示大于或等于。判断的结果只有 True（成立）或 False（不成立）。先试着口头回答，再看程序走哪条路。"},{title:"用 if 和 else 写两条路",text:"if 条件: 表示“如果成立”；else: 表示“否则”。冒号后换行，下一行开头留 4 个空格，这叫缩进。缩进后的句子属于这条路。同一次判断只会执行一边：不会先乘车，再又显示钱不够。"},{title:"检查刚好够的情况",text:"先试 6 元，再试 4 元，最后试刚好 5 元。>= 包含等于，所以 5 元也能乘车。如果改成 >，刚好够的情况就会判断错误。表示相等时用 ==；单个 = 仍然是赋值。"}],_t={text:"if 条件成立时执行其缩进部分，否则执行 else 的部分；同一次判断只走一边。",conditions:["条件后的冒号和缩进必须完整；= 用于赋值，== 用于相等判断。"]},kt=[{text:"money 记住 5。"},{text:"5 >= 5 成立，进入 if 的缩进部分。"},{text:"else 的句子跳过。"}],Tt={kind:"python-trace",prediction:"刚好 5 元，会走哪一条路？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`money = 5
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
`,stdout:`可以乘车
`,stdin:""},followUp:"比较 4、5、6 元，观察箭头跳过了哪一行。",codeTemplate:`money = {{money}}
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
`,controls:[{name:"money",label:"带了多少元",values:[0,3,4,5,6,8],defaultIndex:3}],watch:["money"]},Nt=[{title:"够不够车费",problem:"带 5 元，票价 5 元，显示选择。",steps:["money 记住 5。","5 >= 5 成立，进入 if 的缩进部分。","else 的句子跳过。"],answer:{code:`money = 5
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
`,stdout:`可以乘车
`,stdin:""}},{title:"另一条路",problem:"带 4 元，再检查同一个条件。",steps:["4 >= 5 不成立。","跳过 if 的句子，执行 else 的句子。"],answer:{code:`money = 4
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
`,stdout:`钱不够
`,stdin:""}}],Et=[{id:"conditions-m1",claim:"刚好 5 元符合 money > 5。",correction:"> 不含等于，刚好够要用 >=。"},{id:"conditions-m2",claim:"if 和 else 两边都会执行。",correction:"这次判断只走一边；条件成立时跳过 else。"}],Ct=[{problem:"预测 6 >= 5 的结果。",hint:"是否至少有 5？",solution:["结果为 True。"],answer:{code:`print(6 >= 5)
`,stdout:`True
`,stdin:""},id:"conditions-p1",difficulty:1,misconceptionTags:["conditions-m1"]},{problem:"带 3 元时显示“钱不够”。",hint:"把 money 改为 3。",solution:["条件不成立，进入 else。"],answer:{code:`money = 3
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
`,stdout:`钱不够
`,stdin:""},id:"conditions-p2",difficulty:2,misconceptionTags:["conditions-m2"]},{problem:"成绩至少 60 分显示“通过”，否则显示“再练习”；测试 60。",hint:"刚好达到也算通过。",solution:["用 >= 60。","60 分进入 if。"],answer:{code:`score = 60
if score >= 60:
    print("通过")
else:
    print("再练习")
`,stdout:`通过
`,stdin:""},id:"conditions-p3",difficulty:2,misconceptionTags:["conditions-m1"]},{problem:"测试刚才的程序输入 59。",hint:"只改成绩。",solution:["59 < 60，显示再练习。"],answer:{code:`score = 59
if score >= 60:
    print("通过")
else:
    print("再练习")
`,stdout:`再练习
`,stdin:""},id:"conditions-p4",difficulty:2,misconceptionTags:["conditions-m2"]}],It={question:"刚好带 5 元，哪一个判断包含这种情况？",correctIndex:1,choices:["money > 5","money >= 5","money = 5"],explanation:">= 包含“等于”；= 用来赋值。",feedback:["> 要求超过 5，不包括刚好 5。","对，>= 表示至少 5。","= 是赋值，不能在这里当判断。"]},qt=["strings-input"],St=2,Vt=["conditions-m1","conditions-m2"],Pt={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Rt=["python-tutorial","python-control"],At=[],Ot={id:bt,chapterId:ft,number:gt,title:ht,subtitle:xt,concept:zt,intuition:jt,objectives:wt,body:$t,formalDefinition:_t,derivation:kt,interactiveVisual:Tt,workedExamples:Nt,commonMistakes:Et,practice:Ct,learningCheck:It,prerequisites:qt,difficulty:St,misconceptionTags:Vt,provenance:Pt,sources:Rt,furtherReading:At},Dt="debugging",Bt="chapter-2",Mt="2.4",Ft="读报错与调试",Ut="程序不符合预期时，先找最早出错的一步，再只改一处。",Jt="程序不符合预期时，先找最早出错的一步，再只改一处。",Lt="检查一道计算题：不能只看答案，要找第一步算错的位置。",Wt=["先写下本来应该发生什么","区分报错和算错","修好后再试邻近输入"],Gt=[{title:"先写下本来应该发生什么",text:"准备检查“1 到 3 的和”。不用程序也能算出 6，这就是预期结果。程序给出 3 时，先别改很多行；列出它真正取过的 number，找出 3 为什么没有被加进去。"},{title:"区分报错和算错",text:"报错会给出提示。例如拼错变量名常出现 NameError，数字和文字混用常出现 TypeError。先看提示最后一行的错误名称，再按行号找代码。能运行但得到 3 而不是 6，则是逻辑错误：Python 执行了你的指令，只是指令没有表达原意。"},{title:"修好后再试邻近输入",text:"range(1, 3) 不包含 3，应改成 range(1, 4)。修好后再试终点 1、2、3；不能只靠一个例子判断完成。必要时临时 print(number)，显示执行中间的值，检查后再删掉。"}],Ht={text:"调试先确定预期，再观察实际步骤；找最早的差异，一次改一处。",conditions:["每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。"]},Yt=[{text:"手算预期为 6。"},{text:"range(1, 3) 只取 1、2，漏掉 3。"},{text:"终点改成 4 后，总数是 6。"}],Kt={kind:"python-trace",prediction:"目标是 1 + 2 + 3；终点写 3 还是 4？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`stop = 3
total = 0
for number in range(1, stop):
    total = total + number
print(total)
`,stdout:`3
`,stdin:""},followUp:"先选 3 找出漏掉的一轮，再选 4 检查修复。",codeTemplate:`stop = {{stop}}
total = 0
for number in range(1, stop):
    total = total + number
print(total)
`,controls:[{name:"stop",label:"range 的终点",values:[3,4],defaultIndex:0}],watch:["stop","number","total"]},Qt=[{title:"漏掉最后一个数",problem:"修正求 1 到 3 的和。",steps:["手算预期为 6。","range(1, 3) 只取 1、2，漏掉 3。","终点改成 4 后，总数是 6。"],answer:{code:`total = 0
for number in range(1, 4):
    total = total + number
print(total)
`,stdout:`6
`,stdin:""}},{title:"先看中间值",problem:"用输出核对每轮发生了什么。",steps:["循环内显示 number。","循环外显示 total，用来检查最终答案。"],answer:{code:`total = 0
for number in range(1, 4):
    print(number)
    total = total + number
print(total)
`,stdout:`1
2
3
6
`,stdin:""}}],Xt=[{id:"debugging-m1",claim:"程序没有报错，答案就一定正确。",correction:"还要把实际结果与独立手算的预期比较。"},{id:"debugging-m2",claim:"发现错了就把多行一起改掉。",correction:"一次改一处，重跑小例子，更容易知道修复是否有效。"}],Zt=[{problem:"要显示 name 的值，修正写成 nmae 的拼写。",hint:"每次使用同一个名字。",solution:["把读取处改为 name。"],answer:{code:`name = "小林"
print(name)
`,stdout:`小林
`,stdin:""},id:"debugging-p1",difficulty:1,misconceptionTags:["debugging-m1"]},{problem:'修正文字 "3" 与数字 2 的相加。',hint:"先做整数转换。",solution:['int("3") 得到数字 3。'],answer:{code:`count = int("3")
print(count + 2)
`,stdout:`5
`,stdin:""},id:"debugging-p2",difficulty:2,misconceptionTags:["debugging-m2"]},{problem:"求 1 到 2 的和，并显示每次加的数。",hint:"range 终点写 3。",solution:["显示 1、2。","总数为 3。"],answer:{code:`total = 0
for number in range(1, 3):
    print(number)
    total = total + number
print(total)
`,stdout:`1
2
3
`,stdin:""},id:"debugging-p3",difficulty:2,misconceptionTags:["debugging-m1"]},{problem:"一个修复还要测试终点 0，预期应该是多少？",hint:"没有数可加时 total 保持 0。",solution:["循环不执行。"],answer:{code:`total = 0
for number in range(1, 1):
    total = total + number
print(total)
`,stdout:`0
`,stdin:""},id:"debugging-p4",difficulty:2,misconceptionTags:["debugging-m2"]}],en={question:"求 1 到 3 的和却得到 3，range(1, 3) 错在哪？",correctIndex:1,choices:["加法不能放进循环","终点没有包含 3","应该把 total 初始化为 3"],explanation:"range 的终点不包含；要取到 3 就写到 4。",feedback:["加法可以在循环里逐次累加。","对，程序只加了 1 和 2。","初始值应是 0；改成 3 会掩盖漏数的问题。"]},tn=["while-stop"],nn=2,on=["debugging-m1","debugging-m2"],ln={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},sn=["python-tutorial","python-errors"],un=[],an={id:Dt,chapterId:Bt,number:Mt,title:Ft,subtitle:Ut,concept:Jt,intuition:Lt,objectives:Wt,body:Gt,formalDefinition:Ht,derivation:Yt,interactiveVisual:Kt,workedExamples:Qt,commonMistakes:Xt,practice:Zt,learningCheck:en,prerequisites:tn,difficulty:nn,misconceptionTags:on,provenance:ln,sources:sn,furtherReading:un},pn="dictionaries",dn="chapter-3",cn="3.2",rn="字典与按键查找",mn="字典把名称和对应的值放在一起，按名称查找。",vn="字典把名称和对应的值放在一起，按名称查找。",yn="通讯录用姓名找电话，不必记住它排在第几位。",bn=["先写一张价格表","添加和更新都用名称","找不到时给一个默认值"],fn=[{title:"先写一张价格表",text:'prices = {"苹果": 3, "面包": 5} 是字典。每对中左边是名称，叫键；右边是对应的值。冒号配成一对，逗号隔开各对。prices["苹果"] 按键取出 3。这里方括号里写名称，不是列表的位置。'},{title:"添加和更新都用名称",text:'prices["牛奶"] = 4 添加新商品；prices["苹果"] = 6 更新已有商品价格。同一个键只保留一个当前值。for name in prices: 可以依次得到各个键，再用 prices[name] 找它的值。'},{title:"找不到时给一个默认值",text:'直接找不存在的键会报 KeyError。prices.get("米饭", 0) 表示：找到就取它的值，找不到先用 0；这个读取动作不会添加“米饭”。get 在计数里很方便：counts[name] = counts.get(name, 0) + 1。先从没有记录的 0 开始，再加一次。'}],gn={text:"字典用键对应值；方括号读取已有键，get 可为缺失键给出默认值。",conditions:["键必须存在才能用方括号直接读取；缺失时可以用 get 明确给默认值。"]},hn=[{text:'字典按键 "苹果" 找到 3。'},{text:"同一个键重新赋值后变成 6。"},{text:"不会多出第二个苹果键。"}],xn={kind:"python-trace",prediction:"查“米饭”会得到多少？字典会多一项吗？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`prices = {"苹果": 3, "面包": 5}
name = '苹果'
price = prices.get(name, 0)
print(price)
`,stdout:`3
`,stdin:""},followUp:"比较已有键与缺失键，观察 prices 是否变化。",codeTemplate:`prices = {"苹果": 3, "面包": 5}
name = {{name}}
price = prices.get(name, 0)
print(price)
`,controls:[{name:"name",label:"要查的商品",values:["苹果","面包","米饭"],defaultIndex:0}],watch:["prices","name","price"]},zn=[{title:"按商品名找价格",problem:"查苹果，再调整它的价格。",steps:['字典按键 "苹果" 找到 3。',"同一个键重新赋值后变成 6。","不会多出第二个苹果键。"],answer:{code:`prices = {"苹果": 3, "面包": 5}
print(prices["苹果"])
prices["苹果"] = 6
print(prices["苹果"])
`,stdout:`3
6
`,stdin:""}},{title:"数清每种水果",problem:"统计苹果、梨、苹果各出现几次。",steps:["第一次见某种水果，get 给出 0。","加 1 后存回这个键。","苹果第二次出现，原来是 1，更新为 2。"],answer:{code:`counts = {}
for name in ["苹果", "梨", "苹果"]:
    counts[name] = counts.get(name, 0) + 1
print(counts["苹果"])
print(counts["梨"])
`,stdout:`2
1
`,stdin:""}}],jn=[{id:"dictionaries-m1",claim:"字典里第一个值总能用 [0] 读取。",correction:"字典按键查找，0 必须真的作为键存在才可以读取。"},{id:"dictionaries-m2",claim:"get 缺失键时会自动把这个键加进去。",correction:"get 只是读取并返回默认值，不会添加键。"}],wn=[{problem:"查出面包的价格 5。",hint:"用商品名作键。",solution:['prices["面包"] 取出 5。'],answer:{code:`prices = {"苹果": 3, "面包": 5}
print(prices["面包"])
`,stdout:`5
`,stdin:""},id:"dictionaries-p1",difficulty:1,misconceptionTags:["dictionaries-m1"]},{problem:"把面包价格更新为 6。",hint:"给同一个键赋新值。",solution:["新价格替换旧价格。"],answer:{code:`prices = {"面包": 5}
prices["面包"] = 6
print(prices["面包"])
`,stdout:`6
`,stdin:""},id:"dictionaries-p2",difficulty:1,misconceptionTags:["dictionaries-m2"]},{problem:"对没有记录的米饭返回 0。",hint:"用 get 的第二个参数。",solution:["找不到就返回默认值 0。"],answer:{code:`prices = {"苹果": 3}
print(prices.get("米饭", 0))
`,stdout:`0
`,stdin:""},id:"dictionaries-p3",difficulty:2,misconceptionTags:["dictionaries-m1"]},{problem:"遍历空清单统计水果，总共有几个键？",hint:"空列表不执行循环。",solution:["字典保持空，长度为 0。"],answer:{code:`counts = {}
for name in []:
    counts[name] = counts.get(name, 0) + 1
print(len(counts))
`,stdout:`0
`,stdin:""},id:"dictionaries-p4",difficulty:2,misconceptionTags:["dictionaries-m2"]}],$n={question:"prices 没有“米饭”这个键，想读到默认值 0，用哪个？",correctIndex:1,choices:['prices["米饭"]','prices.get("米饭", 0)',"prices[0]"],explanation:"get 可以为缺失的键提供默认值。",feedback:["直接读取缺失键会报错。","对，找不到时返回第二个参数 0。","字典按键查找，0 不是“第一个位置”。"]},_n=["lists"],kn=3,Tn=["dictionaries-m1","dictionaries-m2"],Nn={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},En=["python-tutorial","python-data"],Cn=[],In={id:pn,chapterId:dn,number:cn,title:rn,subtitle:mn,concept:vn,intuition:yn,objectives:bn,body:fn,formalDefinition:gn,derivation:hn,interactiveVisual:xn,workedExamples:zn,commonMistakes:jn,practice:wn,learningCheck:$n,prerequisites:_n,difficulty:kn,misconceptionTags:Tn,provenance:Nn,sources:En,furtherReading:Cn},qn="exceptions",Sn="chapter-4",Vn="4.4",Pn="异常与输入验证",Rn="预料用户可能填错时，给转换步骤准备一个明确的处理办法。",An="预料用户可能填错时，给转换步骤准备一个明确的处理办法。",On="登记数量时，有人填“两个”；先指出哪里不合要求，再请他重填。",Dn=["先把容易失败的一步找出来","用 try 和 except 说明失败时做什么","能转换，不等于符合要求"],Bn=[{title:"先把容易失败的一步找出来",text:'int("3") 可以转为数字，int("三") 会产生 ValueError，表示给出的文字不适合这次转换。没有处理时，程序会停在这里。先明确我们想处理的错误是什么，不要把所有代码都包成一个模糊的“失败”。'},{title:"用 try 和 except 说明失败时做什么",text:"try: 下面尝试转换；except ValueError: 下面只处理这种转换失败。成功时跳过 except，失败时跳过 try 中还没执行的句子，转到 except。错误处理不是让失败变成功，而是给用户一个可理解的反馈。"},{title:"能转换，不等于符合要求",text:'"-2" 可以转成整数，但购物数量不能是负数。转换后还要判断 count < 0；函数可以用 raise ValueError("数量不能为负") 主动拒绝。不要随手捕获所有异常，否则拼写错误、文件问题也可能被误说成数量问题。'}],Mn={text:"try 尝试可能失败的步骤，except 指定错误时执行处理；raise 主动报告不符合要求的输入。",conditions:["只捕获预期的错误类型；转换之后仍需检查数值范围。"]},Fn=[{text:"try 执行转换。"},{text:"转换失败，进入 ValueError 处理分支。"},{text:"显示明确要求，而不是继续用一个假数字。"}],Un={kind:"python-trace",prediction:"输入“三”和输入“-2”，会走相同的处理步骤吗？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`text = '3'
try:
    count = int(text)
    if count < 0:
        print("不能为负")
    else:
        print(count)
except ValueError:
    print("请输入整数")
`,stdout:`3
`,stdin:""},followUp:"分别选择合法、负数和错误文字，观察不同的执行路径。",codeTemplate:`text = {{text}}
try:
    count = int(text)
    if count < 0:
        print("不能为负")
    else:
        print(count)
except ValueError:
    print("请输入整数")
`,controls:[{name:"text",label:"模拟收到的文字",values:["3","0","-2","三"],defaultIndex:0}],watch:["text","count"]},Jn=[{title:"处理填错的文字",problem:"尝试把“三”转换成数量。",steps:["try 执行转换。","转换失败，进入 ValueError 处理分支。","显示明确要求，而不是继续用一个假数字。"],answer:{code:`text = "三"
try:
    count = int(text)
    print(count)
except ValueError:
    print("请输入整数，例如 3")
`,stdout:`请输入整数，例如 3
`,stdin:""}},{title:"拒绝负数量",problem:"定义数量检查，测试 -2。",steps:["先成功转成 -2。","检查负数时主动抛出 ValueError。","调用处显示这个错误的文字。"],answer:{code:`def read_count(text):
    count = int(text)
    if count < 0:
        raise ValueError("数量不能为负")
    return count

try:
    print(read_count("-2"))
except ValueError as error:
    print(error)
`,stdout:`数量不能为负
`,stdin:""}}],Ln=[{id:"exceptions-m1",claim:"能转成整数，就一定是合法数量。",correction:"转换只检查表示格式；负数等范围问题另行检查。"},{id:"exceptions-m2",claim:"捕获错误后，Python 会自动补一个有效数字。",correction:"except 只执行你写下的处理步骤，不会自动修复输入。"}],Wn=[{problem:'把合法文字 "4" 转换并显示。',hint:"成功时不会走 except。",solution:["结果为 4。"],answer:{code:`try:
    count = int("4")
    print(count)
except ValueError:
    print("请输入整数")
`,stdout:`4
`,stdin:""},id:"exceptions-p1",difficulty:1,misconceptionTags:["exceptions-m1"]},{problem:'处理 "4.5" 不能直接转成整数的问题。',hint:"只捕获 ValueError。",solution:["转换失败，显示请输入整数。"],answer:{code:`try:
    count = int("4.5")
    print(count)
except ValueError:
    print("请输入整数")
`,stdout:`请输入整数
`,stdin:""},id:"exceptions-p2",difficulty:2,misconceptionTags:["exceptions-m2"]},{problem:"转换 -1 后，显示“不能为负”。",hint:"成功转换后再判断范围。",solution:["能转换，但不符合数量要求。"],answer:{code:`count = int("-1")
if count < 0:
    print("不能为负")
else:
    print(count)
`,stdout:`不能为负
`,stdin:""},id:"exceptions-p3",difficulty:2,misconceptionTags:["exceptions-m1"]},{problem:"数量 0 合法，程序应该怎样显示？",hint:"拒绝小于 0，不拒绝等于 0。",solution:["0 不小于 0。"],answer:{code:`count = int("0")
if count < 0:
    print("不能为负")
else:
    print(count)
`,stdout:`0
`,stdin:""},id:"exceptions-p4",difficulty:2,misconceptionTags:["exceptions-m2"]}],Gn={question:'输入 "-2" 能被 int 转换，是否一定是合法购物数量？',correctIndex:1,choices:["转换成功就一定合法","还要检查是否为负","except 会自动把负数改成 0"],explanation:"转换检查文字能否变数字，范围检查决定数字是否可用。",feedback:["转换成功只说明它是整数文字。","对，业务要求还需要单独判断。","except 不会自动修改输入或补出一个值。"]},Hn=["modules"],Yn=4,Kn=["exceptions-m1","exceptions-m2"],Qn={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Xn=["python-tutorial","python-errors"],Zn=[],eo={id:qn,chapterId:Sn,number:Vn,title:Pn,subtitle:Rn,concept:An,intuition:On,objectives:Dn,body:Bn,formalDefinition:Mn,derivation:Fn,interactiveVisual:Un,workedExamples:Jn,commonMistakes:Ln,practice:Wn,learningCheck:Gn,prerequisites:Hn,difficulty:Yn,misconceptionTags:Kn,provenance:Qn,sources:Xn,furtherReading:Zn},to="first-program",no="chapter-1",oo="1.1",lo="运行第一个程序",so="程序是一串给计算机的指令。先让它按顺序显示两句话。",io="程序是一串给计算机的指令。先让它按顺序显示两句话。",uo="像写一张待办清单：先做第一件，再做第二件。",ao=["先让一句话出现在屏幕上","把两行保存成一个程序","一次只改一句话"],po=[{title:"先让一句话出现在屏幕上",text:'看到 print("你好") 时，先读成“显示：你好”。print 是 Python 自带的显示指令；圆括号装着要显示的内容，成对的英文引号告诉 Python：这是文字。引号本身不会显示。先不背术语，跟下面的例子做一遍。'},{title:"把两行保存成一个程序",text:"网页实验可以先帮助你理解顺序。准备在自己的电脑上运行时，按照下面的四步操作，把刚才的两行示例保存成 hello.py。每改一次代码，先保存，再运行，才能看到新结果。"},{title:"一次只改一句话",text:"计算机从上往下读：第一行显示你好，第二行显示我开始学 Python。把第二行引号里的文字换成自己的话，再运行；第一行不应改变。以 # 开头的文字是给人看的注释，运行时会跳过。代码里的括号、引号使用英文符号。"}],co={text:"print(...) 显示括号中的内容；多行指令通常从上到下执行。",conditions:["每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。"]},ro=[{text:"第一行 print 显示“你好”。"},{text:"第二行接着显示“我开始学 Python”。"},{text:"每个 print 默认换到下一行。"}],mo={kind:"python-trace",prediction:"改第一句问候，会影响第二句吗？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`print('你好')
print("我开始学 Python")
`,stdout:`你好
我开始学 Python
`,stdin:""},followUp:"选择另一句问候，重头走一遍。",codeTemplate:`print({{message}})
print("我开始学 Python")
`,controls:[{name:"message",label:"第一句问候",values:["你好","早上好","你好，小林"],defaultIndex:0}],watch:[]},vo=[{title:"第一次问候",problem:"显示两句话，看看先后顺序。",steps:["第一行 print 显示“你好”。","第二行接着显示“我开始学 Python”。","每个 print 默认换到下一行。"],answer:{code:`print("你好")
print("我开始学 Python")
`,stdout:`你好
我开始学 Python
`,stdin:""}},{title:"写一张小清单",problem:"显示今天要完成的两件事。",steps:["# 这一行是注释，不会显示。","下面两个 print 才负责输出。"],answer:{code:`# 今天的小清单
print("打开教材")
print("试一个例子")
`,stdout:`打开教材
试一个例子
`,stdin:""}}],yo=[{id:"first-program-m1",claim:"引号也会一起显示。",correction:"引号标记文字的边界，print 只显示里面的内容。"},{id:"first-program-m2",claim:"注释会像普通代码一样执行。",correction:"以 # 开头的注释给人阅读，不产生输出。"}],bo=[{problem:'预测 print("早上好") 会显示什么。',hint:"引号不会显示。",solution:["显示引号里面的文字。"],answer:{code:`print("早上好")
`,stdout:`早上好
`,stdin:""},id:"first-program-p1",difficulty:1,misconceptionTags:["first-program-m1"]},{problem:"先显示“第一步”，再显示“第二步”。",hint:"写两个 print。",solution:["顺序与代码行顺序相同。"],answer:{code:`print("第一步")
print("第二步")
`,stdout:`第一步
第二步
`,stdin:""},id:"first-program-p2",difficulty:1,misconceptionTags:["first-program-m2"]},{problem:"把问候换成“你好，小林”。",hint:"只改引号里的内容。",solution:["保留 print、括号和成对引号。"],answer:{code:`print("你好，小林")
`,stdout:`你好，小林
`,stdin:""},id:"first-program-p3",difficulty:1,misconceptionTags:["first-program-m1"]},{problem:'一行注释后接 print("完成")，会出现几行输出？',hint:"注释不执行。",solution:["只出现一行“完成”。"],answer:{code:`# 这是一行注释
print("完成")
`,stdout:`完成
`,stdin:""},id:"first-program-p4",difficulty:1,misconceptionTags:["first-program-m2"]}],fo={question:'print("你好") 的输出是什么？',correctIndex:1,choices:['"你好"（带引号）',"你好（不带引号）","print（显示指令名）"],explanation:"引号用来标记文字；显示的是里面的内容。",feedback:["引号是代码的标记，不属于输出。","对，print 显示括号里的文字。","print 是发出指令的名称，不是要显示的内容。"]},go=[],ho=1,xo=["first-program-m1","first-program-m2"],zo={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},jo=["python-tutorial"],wo=[],$o=["安装解释器：打开 Python 官网 python.org 的 Downloads 页面，安装仍获支持的 Python 3。解释器就是负责运行代码的程序。安装后若命令找不到，先检查安装是否完成。","保存代码：新建一个练习文件夹，用代码编辑器或纯文本编辑器新建文件，输入上面的两行，保存为 hello.py。文件名后缀是 .py，不能是 hello.py.txt；不要用 Word 保存。","找到练习目录：终端是输入命令的窗口。macOS 可搜索“终端”，Windows 可搜索“终端”或 PowerShell。输入 cd、一个空格、练习文件夹的完整路径，再按回车；路径有空格时，用一对英文双引号把路径包起来。cd 的意思是“进入这个目录”。","运行并核对：macOS/Linux 输入 python3 hello.py，Windows 通常输入 py -3 hello.py，按回车。应看到“你好”和“我开始学 Python”两行。把第二句话改掉，保存后再运行同一个命令。若提示找不到 hello.py，先确认当前目录与文件名。"],_o={id:to,chapterId:no,number:oo,title:lo,subtitle:so,concept:io,intuition:uo,objectives:ao,body:po,formalDefinition:co,derivation:ro,interactiveVisual:mo,workedExamples:vo,commonMistakes:yo,practice:bo,learningCheck:fo,prerequisites:go,difficulty:ho,misconceptionTags:xo,provenance:zo,sources:jo,furtherReading:wo,localSetup:$o},ko="for-range",To="chapter-2",No="2.2",Eo="for 循环与计数",Co="for 把一件事重复做，每次给你一个新的数。",Io="for 把一件事重复做，每次给你一个新的数。",qo="逐个叫号：1 号、2 号、3 号，不用手写三遍。",So=["先重复显示号码","把终点写成最后一个数加一","让总数一点点增加"],Vo=[{title:"先重复显示号码",text:"for number in range(1, 4): 读作“让 number 依次取 1、2、3”。range 给出一段整数；前面的 1 包含，后面的 4 不包含。缩进的 print(number) 每次执行一遍，所以看到三行号码。"},{title:"把终点写成最后一个数加一",text:"想叫到 5 号，就写 range(1, 6)。只写 range(3) 时，从 0 开始，产生 0、1、2。本节先用有起点和终点的形式。循环结束以后，继续执行不缩进的下一行。"},{title:"让总数一点点增加",text:"求 1 + 2 + 3，不必一次记住全部。先让 total = 0；每次把当前 number 加进去。total 的变化是 0 → 1 → 3 → 6。把 print(total) 放在循环外，才会只显示最后的总数。"}],Po={text:"for 逐项重复；range(start, stop) 从 start 开始，到 stop 之前结束。",conditions:["range 的终点不包含；本节使用整数、步长为 1 的递增区间。"]},Ro=[{text:"range(1, 4) 给出 1、2、3。"},{text:"number 每次换成下一个数。"},{text:"缩进的 print 每次执行一次。"}],Ao={kind:"python-trace",prediction:"1 到 3 的和是 6；改成 1 到 4 会是多少？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`end = 3
total = 0
for number in range(1, end + 1):
    total = total + number
print(total)
`,stdout:`6
`,stdin:""},followUp:"选 0，观察循环体是否执行。",codeTemplate:`end = {{end}}
total = 0
for number in range(1, end + 1):
    total = total + number
print(total)
`,controls:[{name:"end",label:"加到几",values:[0,1,2,3,4,5],defaultIndex:3}],watch:["end","number","total"]},Oo=[{title:"叫到 3 号",problem:"从 1 号开始依次显示。",steps:["range(1, 4) 给出 1、2、3。","number 每次换成下一个数。","缩进的 print 每次执行一次。"],answer:{code:`for number in range(1, 4):
    print(number)
`,stdout:`1
2
3
`,stdin:""}},{title:"求前三个数的和",problem:"把 1、2、3 逐个加起来。",steps:["total 从 0 开始。","三次增加后依次为 1、3、6。","循环外显示最终的 6。"],answer:{code:`total = 0
for number in range(1, 4):
    total = total + number
print(total)
`,stdout:`6
`,stdin:""}}],Do=[{id:"for-range-m1",claim:"range(1, 4) 会取到 4。",correction:"终点不包含，得到 1、2、3。"},{id:"for-range-m2",claim:"累加时每轮都应该把 total 重设为 0。",correction:"total 在循环之前初始化；循环里保留上次总数再增加。"}],Bo=[{problem:"range(1, 3) 会给出哪些数？",hint:"终点 3 不包含。",solution:["给出 1 和 2。"],answer:{code:`for number in range(1, 3):
    print(number)
`,stdout:`1
2
`,stdin:""},id:"for-range-p1",difficulty:1,misconceptionTags:["for-range-m1"]},{problem:"依次显示 2、3、4。",hint:"终点要写 5。",solution:["range(2, 5) 包含 2、3、4。"],answer:{code:`for number in range(2, 5):
    print(number)
`,stdout:`2
3
4
`,stdin:""},id:"for-range-p2",difficulty:2,misconceptionTags:["for-range-m2"]},{problem:"求 1 到 4 的和。",hint:"total 从 0 开始。",solution:["依次增加 1、2、3、4。","最后是 10。"],answer:{code:`total = 0
for number in range(1, 5):
    total = total + number
print(total)
`,stdout:`10
`,stdin:""},id:"for-range-p3",difficulty:2,misconceptionTags:["for-range-m1"]},{problem:"range(1, 1) 会执行几次？",hint:"起点已经到达不包含的终点。",solution:["一次也不执行。","循环外的 print 仍执行。"],answer:{code:`total = 0
for number in range(1, 1):
    total = total + number
print(total)
`,stdout:`0
`,stdin:""},id:"for-range-p4",difficulty:2,misconceptionTags:["for-range-m2"]}],Mo={question:"range(1, 4) 包含哪些数？",correctIndex:1,choices:["1、2、3、4","1、2、3","0、1、2、3"],explanation:"range 的终点不包含。",feedback:["终点 4 不包含。","对，取到 3 后就结束。","这里起点明确是 1，不是 0。"]},Fo=["conditions"],Uo=2,Jo=["for-range-m1","for-range-m2"],Lo={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Wo=["python-tutorial","python-control"],Go=[],Ho={id:ko,chapterId:To,number:No,title:Eo,subtitle:Co,concept:Io,intuition:qo,objectives:So,body:Vo,formalDefinition:Po,derivation:Ro,interactiveVisual:Ao,workedExamples:Oo,commonMistakes:Do,practice:Bo,learningCheck:Mo,prerequisites:Fo,difficulty:Uo,misconceptionTags:Jo,provenance:Lo,sources:Wo,furtherReading:Go},Yo="functions",Ko="chapter-4",Qo="4.1",Xo="函数、参数与返回值",Zo="把常用的几步起一个名字，调用时给它输入，再接住返回的结果。",el="把常用的几步起一个名字，调用时给它输入，再接住返回的结果。",tl="一台翻倍小机器：放入 3，拿到 6。",nl=["先给步骤起名字","调用之后，接住结果","返回和显示是两件事"],ol=[{title:"先给步骤起名字",text:"def double(number): 表示定义一个叫 double 的函数。函数就是一组可以重复使用的步骤；number 是它接收输入的名字，叫参数。缩进的 return number * 2 计算两倍，并把结果交给调用处。定义时只是记下步骤，还没有拿 3 去计算。"},{title:"调用之后，接住结果",text:"result = double(3) 才是真正调用：3 交给 number，算出 6，return 把 6 交回 result。print(result) 最后显示它。可以换一个输入再次调用，不需要重写函数里面的步骤。"},{title:"返回和显示是两件事",text:"print 负责把内容显示在屏幕；return 负责把结果交回调用处。想把结果继续做计算，就需要 return。若函数只 print 没有 return，调用处得到的是 None，意思是没有一个有效返回值可以用于这里的数量计算。函数内部的参数只在这次调用中使用。"}],ll={text:"def 定义函数，调用提供输入；return 把结果交回调用处，print 把内容显示出来。",conditions:["先定义再调用；需要可计算的返回结果时，使用 return。"]},sl=[{text:"def 先记下步骤。"},{text:"double(3) 让 number 暂时是 3。"},{text:"return 交回 6，result 记住 6。"}],il={kind:"python-trace",prediction:"函数定义时会显示什么？调用 3 后又会怎样？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`def double(number):
    return number * 2

result = double(3)
print(result)
`,stdout:`6
`,stdin:""},followUp:"试输入 0，再观察从调用处进入函数、返回调用处的顺序。",codeTemplate:`def double(number):
    return number * 2

result = double({{number}})
print(result)
`,controls:[{name:"number",label:"送进函数的数",values:[0,1,2,3,4,5],defaultIndex:3}],watch:["number","result"]},ul=[{title:"翻倍机器",problem:"输入 3，接住并显示两倍。",steps:["def 先记下步骤。","double(3) 让 number 暂时是 3。","return 交回 6，result 记住 6。"],answer:{code:`def double(number):
    return number * 2

result = double(3)
print(result)
`,stdout:`6
`,stdin:""}},{title:"继续使用结果",problem:"输入 4，把返回结果再加 1。",steps:["double(4) 返回 8。","调用处继续加 1 得到 9。"],answer:{code:`def double(number):
    return number * 2

result = double(4) + 1
print(result)
`,stdout:`9
`,stdin:""}}],al=[{id:"functions-m1",claim:"写下 def 后就已经算出了结果。",correction:"def 记下步骤；真正调用才运行函数。"},{id:"functions-m2",claim:"print 和 return 可以互相替代。",correction:"print 显示，return 交回结果；调用处继续计算需要返回值。"}],pl=[{problem:"调用翻倍函数，输入 5。",hint:"定义后再调用。",solution:["返回 10。"],answer:{code:`def double(number):
    return number * 2

print(double(5))
`,stdout:`10
`,stdin:""},id:"functions-p1",difficulty:1,misconceptionTags:["functions-m1"]},{problem:"写 add_one，返回输入加 1。",hint:"用 return。",solution:["输入 3，返回 4。"],answer:{code:`def add_one(number):
    return number + 1

print(add_one(3))
`,stdout:`4
`,stdin:""},id:"functions-p2",difficulty:2,misconceptionTags:["functions-m2"]},{problem:"连续调用 add_one 两次，分别输入 1 和 4。",hint:"每次独立传入一个值。",solution:["分别返回 2、5。"],answer:{code:`def add_one(number):
    return number + 1

print(add_one(1))
print(add_one(4))
`,stdout:`2
5
`,stdin:""},id:"functions-p3",difficulty:2,misconceptionTags:["functions-m1"]},{problem:"翻倍函数输入 0，预期是多少？",hint:"0 也是可用输入。",solution:["0 * 2 = 0。"],answer:{code:`def double(number):
    return number * 2

print(double(0))
`,stdout:`0
`,stdin:""},id:"functions-p4",difficulty:1,misconceptionTags:["functions-m2"]}],dl={question:"要把函数计算结果交回调用处，用哪个？",correctIndex:1,choices:["print","return","只写 def 就会计算"],explanation:"return 交回结果；print 只负责显示。",feedback:["print 的作用是显示，不会替代 return 交回计算结果。","对，调用处可以接住返回值继续使用。","def 记下步骤，调用才执行它。"]},cl=["comprehensions"],rl=4,ml=["functions-m1","functions-m2"],vl={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},yl=["python-tutorial","python-control"],bl=[],fl={id:Yo,chapterId:Ko,number:Qo,title:Xo,subtitle:Zo,concept:el,intuition:tl,objectives:nl,body:ol,formalDefinition:ll,derivation:sl,interactiveVisual:il,workedExamples:ul,commonMistakes:al,practice:pl,learningCheck:dl,prerequisites:cl,difficulty:rl,misconceptionTags:ml,provenance:vl,sources:yl,furtherReading:bl},gl="json-csv",hl="chapter-5",xl="5.2",zl="JSON 与 CSV：保存结构和读取表格",jl="JSON 保存结构，CSV 保存表格；读入后仍要检查值的类型和含义。",wl="JSON 保存结构，CSV 保存表格；读入后仍要检查值的类型和含义。",$l="把字典装进文字文件，或把账单整理成一行一行的表格。",_l=["用 JSON 保存一个字典","用 CSV 读取一张小表","数字列读进来还是文字"],kl=[{title:"用 JSON 保存一个字典",text:"json.dumps(data, ensure_ascii=False) 把字典变成 JSON 文字；dumps 中的 s 可以先记成“得到字符串”。ensure_ascii=False 让中文保持可读。json.loads(text) 再把文字还原为数据。这样不只保存字典的显示样子，而是使用约定好的数据格式。"},{title:"用 CSV 读取一张小表",text:"CSV 的每行是一条记录，第一行可以写列名。csv.DictReader 根据列名把每行读成字典。下面用 io.StringIO 包装一段示例文字，让它像文本文件一样可被读取；io 是输入输出工具模块，真实文件也可以用 open 打开后交给 DictReader。先用小表避免把文件路径问题和表格问题混在一起。"},{title:"数字列读进来还是文字",text:'CSV 的 amount 列看起来是 125，实际 row["amount"] 是字符串 "125"。先 int 转成整数分，再相加。完整项目还要检查列名、缺失值和负数；不能因为表格能读出来，就认为每一行都正确。JSON 也要检查读到的是不是需要的字典或列表。'}],Tl={text:"JSON 转换结构与文字，CSV 按列读记录；解析后仍需验证结构和数值。",conditions:["CSV 字段默认是文字，计算前需转换并验证。","JSON 还原后的结构要与程序需要的结构一致。"]},Nl=[{text:"先导入 json。"},{text:"dumps 得到标准格式文字。"},{text:"loads 还原后，按键读取姓名和数量。"}],El={kind:"python-trace",prediction:"转成 JSON 再读回，count 还会是同一个数吗？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`import json
data = {"name": "小林", "count": 3}
text = json.dumps(data, ensure_ascii=False)
restored = json.loads(text)
print(restored["count"])
`,stdout:`3
`,stdin:""},followUp:"选 0，观察 text 的引号和 restored 的字典结构。",codeTemplate:`import json
data = {"name": "小林", "count": {{count}}}
text = json.dumps(data, ensure_ascii=False)
restored = json.loads(text)
print(restored["count"])
`,controls:[{name:"count",label:"要保存的数量",values:[0,1,2,3,4],defaultIndex:3}],watch:["data","text","restored"]},Cl=[{title:"保存并还原一条记录",problem:"把姓名和数量转成 JSON 再读回。",steps:["先导入 json。","dumps 得到标准格式文字。","loads 还原后，按键读取姓名和数量。"],answer:{code:`import json
data = {"name": "小林", "count": 3}
text = json.dumps(data, ensure_ascii=False)
restored = json.loads(text)
print(restored["name"])
print(restored["count"])
`,stdout:`小林
3
`,stdin:""}},{title:"两行金额求和",problem:"CSV 中金额列单位是分：125 和 200。",steps:["DictReader 按列名读取两行。","金额文字先转成整数。","总数为 325 分。"],answer:{code:`import csv
import io
text = "category,amount\\n食品,125\\n交通,200\\n"
total = 0
for row in csv.DictReader(io.StringIO(text)):
    total = total + int(row["amount"])
print(total)
`,stdout:`325
`,stdin:""}}],Il=[{id:"json-csv-m1",claim:"CSV 数字列读取后自动变成数字。",correction:"字段默认是文字，计算前要显式转换。"},{id:"json-csv-m2",claim:"文件能解析，就不用检查数据了。",correction:"还要检查列名、值的类型和允许的范围。"}],ql=[{problem:"从 JSON 文字中读取 count。",hint:"loads 后按键取值。",solution:["得到整数 3。"],answer:{code:`import json
data = json.loads('{"count": 3}')
print(data["count"])
`,stdout:`3
`,stdin:""},id:"json-csv-p1",difficulty:1,misconceptionTags:["json-csv-m1"]},{problem:"把 [1, 2] 转成 JSON，再读回并显示长度。",hint:"用 dumps 和 loads。",solution:["还原列表有两项。"],answer:{code:`import json
text = json.dumps([1, 2])
values = json.loads(text)
print(len(values))
`,stdout:`2
`,stdin:""},id:"json-csv-p2",difficulty:2,misconceptionTags:["json-csv-m2"]},{problem:"CSV 一行 amount 为 50，读取后加 10。",hint:"先 int。",solution:["50 + 10 = 60。"],answer:{code:`import csv
import io
text = "amount\\n50\\n"
for row in csv.DictReader(io.StringIO(text)):
    print(int(row["amount"]) + 10)
`,stdout:`60
`,stdin:""},id:"json-csv-p3",difficulty:2,misconceptionTags:["json-csv-m1"]},{problem:"CSV 只有列名、没有数据行，累加结果是多少？",hint:"循环不会读取到记录。",solution:["total 保持 0。"],answer:{code:`import csv
import io
total = 0
for row in csv.DictReader(io.StringIO("amount\\n")):
    total = total + int(row["amount"])
print(total)
`,stdout:`0
`,stdin:""},id:"json-csv-p4",difficulty:2,misconceptionTags:["json-csv-m2"]}],Sl={question:'CSV 中读到 row["amount"] 是 "125"，加钱前应做什么？',correctIndex:1,choices:["直接加数字","先 int 转成整数分",'给字符串追加 "200"'],explanation:"CSV 字段默认是文字，要转换并验证后再计算。",feedback:["文字和整数不能这样相加。","对，转换后才能按数值累加；还应检查范围。",'连接文字得到 "125200"，不是金额总和。']},Vl=["text-files","dictionaries","modules"],Pl=5,Rl=["json-csv-m1","json-csv-m2"],Al={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Ol=["python-tutorial","python-formats","python-csv"],Dl=[],Bl={id:gl,chapterId:hl,number:xl,title:zl,subtitle:jl,concept:wl,intuition:$l,objectives:_l,body:kl,formalDefinition:Tl,derivation:Nl,interactiveVisual:El,workedExamples:Cl,commonMistakes:Il,practice:ql,learningCheck:Sl,prerequisites:Vl,difficulty:Pl,misconceptionTags:Rl,provenance:Al,sources:Ol,furtherReading:Dl},Ml="lists",Fl="chapter-3",Ul="3.1",Jl="列表与购物清单",Ll="把一组有顺序的数据放进列表，再按位置取出或逐个处理。",Wl="把一组有顺序的数据放进列表，再按位置取出或逐个处理。",Gl="一张购物清单：第一项、第二项，也可以在末尾添一项。",Hl=["用方括号装一组数据","添一项，再逐个读取","两张标签可能指向同一份清单"],Yl=[{title:"用方括号装一组数据",text:'items = ["苹果", "面包"] 创建列表：两项文字用逗号隔开，外面是一对方括号。列表保留顺序。items[0] 取第一项，items[1] 取第二项。位置从 0 开始计数；len(items) 读作“列表有几项”，这里是 2。'},{title:"添一项，再逐个读取",text:'items.append("牛奶") 在末尾添加一项。点号表示“对这份列表进行操作”，append 是添加的名称。for item in items: 让 item 依次取每一项，不再需要自己写 range 和位置。'},{title:"两张标签可能指向同一份清单",text:"other = items 并没有复印清单，只给同一份列表加了另一个名字。用 other 添加项目，items 也会看到。若需要两份独立的简单清单，用 other = items.copy()。copy 是复制。本节仅复制一层、每项都是文字或数字的列表。"}],Kl={text:"列表保留顺序和重复项，位置从 0 开始；append 添加到末尾，copy 可复制本节的一层简单列表。",conditions:["读取位置必须在列表范围内；空列表没有位置 0。","copy() 在本节用于一层、元素为数字或文字的列表。"]},Ql=[{text:"第一项位置为 0。"},{text:"for 按列表原有顺序取每项。"},{text:"所以苹果会先被单独显示一次，再出现在遍历中。"}],Xl={kind:"python-trace",prediction:"添一项后，顺序会怎样？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`items = ["苹果", "面包"]
items.append('牛奶')
for item in items:
    print(item)
`,stdout:`苹果
面包
牛奶
`,stdin:""},followUp:"换一项商品，观察列表如何增加一项。",codeTemplate:`items = ["苹果", "面包"]
items.append({{item}})
for item in items:
    print(item)
`,controls:[{name:"item",label:"要添加的商品",values:["牛奶","鸡蛋","米饭"],defaultIndex:0}],watch:["items","item"]},Zl=[{title:"读购物清单",problem:"取出第一项，再逐项显示。",steps:["第一项位置为 0。","for 按列表原有顺序取每项。","所以苹果会先被单独显示一次，再出现在遍历中。"],answer:{code:`items = ["苹果", "面包"]
print(items[0])
for item in items:
    print(item)
`,stdout:`苹果
苹果
面包
`,stdin:""}},{title:"添加牛奶",problem:"在末尾添一项，显示项目数量。",steps:["创建时有两项。","append 添加后变为三项。"],answer:{code:`items = ["苹果", "面包"]
items.append("牛奶")
print(len(items))
`,stdout:`3
`,stdin:""}}],es=[{id:"lists-m1",claim:"列表第一项的位置是 1。",correction:"第一项位置是 0，第二项才是 1。"},{id:"lists-m2",claim:"other = items 就得到了独立副本。",correction:"它们指向同一份列表；本节的一层简单列表可以用 copy() 复制。"}],ts=[{problem:"列表 [10, 20] 的第一项是多少？",hint:"位置从 0 开始。",solution:["values[0] 是 10。"],answer:{code:`values = [10, 20]
print(values[0])
`,stdout:`10
`,stdin:""},id:"lists-p1",difficulty:1,misconceptionTags:["lists-m1"]},{problem:"给 [10, 20] 添加 30，逐项显示。",hint:"用 append。",solution:["30 放到末尾。"],answer:{code:`values = [10, 20]
values.append(30)
for value in values:
    print(value)
`,stdout:`10
20
30
`,stdin:""},id:"lists-p2",difficulty:2,misconceptionTags:["lists-m2"]},{problem:"求 [2, 3, 4] 的和。",hint:"用 for 和 total。",solution:["total 依次为 2、5、9。"],answer:{code:`values = [2, 3, 4]
total = 0
for value in values:
    total = total + value
print(total)
`,stdout:`9
`,stdin:""},id:"lists-p3",difficulty:2,misconceptionTags:["lists-m1"]},{problem:"复制 [1, 2] 后只给副本添加 3，原列表有几项？",hint:"复制用 copy()。",solution:["副本有三项，原列表仍有两项。"],answer:{code:`values = [1, 2]
other = values.copy()
other.append(3)
print(len(values))
print(len(other))
`,stdout:`2
3
`,stdin:""},id:"lists-p4",difficulty:2,misconceptionTags:["lists-m2"]}],ns={question:"购物清单的第一项，用哪个位置读取？",correctIndex:1,choices:["items[1]","items[0]","items[len(items)]"],explanation:"列表的位置从 0 开始。",feedback:["位置 1 是第二项。","对，位置 0 是第一项。","长度比最后一个位置大 1，会超出范围。"]},os=["debugging"],ls=3,ss=["lists-m1","lists-m2"],is={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},us=["python-tutorial","python-data"],as=[],ps={id:Ml,chapterId:Fl,number:Ul,title:Jl,subtitle:Ll,concept:Wl,intuition:Gl,objectives:Hl,body:Yl,formalDefinition:Kl,derivation:Ql,interactiveVisual:Xl,workedExamples:Zl,commonMistakes:es,practice:ts,learningCheck:ns,prerequisites:os,difficulty:ls,misconceptionTags:ss,provenance:is,sources:us,furtherReading:as},ds="modules",cs="chapter-4",rs="4.3",ms="模块：使用现成的工具",vs="把可复用的函数放在单独文件，另一个文件导入后就能使用。",ys="把可复用的函数放在单独文件，另一个文件导入后就能使用。",bs="把常用工具放进工具盒，下次按名字取出来。",fs=["先使用 Python 自带的工具盒","把自己的工具放进 helpers.py","导入时只准备工具"],gs=[{title:"先使用 Python 自带的工具盒",text:"import math 导入自带的数学模块。模块是一组放在一起的工具。math.sqrt(9) 表示用 math 里的 sqrt 计算平方根，得到 3.0。点号在这里连接模块名与工具名，不必自己编写平方根算法。"},{title:"把自己的工具放进 helpers.py",text:"附录的 helpers.py 中定义 double。main.py 写 from helpers import double 后就能调用 double(5)。把两个文件保存在同一目录，在终端进入这个目录，再运行 main.py。不要把自己的文件命名成 math.py 或 json.py，会遮住同名自带模块。"},{title:"导入时只准备工具",text:'模块里普通的顶层代码在第一次导入时也会执行。为了避免导入工具就弹出提问，演示或命令行操作放在 if __name__ == "__main__": 下面。先把这句当成入口标记：直接运行这个文件时执行，作为工具导入时不执行；不需要先研究双下划线。'}],hs={text:"import 准备模块工具；入口判断使演示只在文件被直接运行时执行。",conditions:["双文件示例需要把 helpers.py、main.py 放在同一目录。","sqrt 的本节输入为非负数。"]},xs=[{text:"import math 准备模块。"},{text:"math.sqrt(9) 计算出 3.0。"},{text:"print 显示结果。"}],zs={kind:"python-trace",prediction:"9 的平方根是多少？结果显示为整数还是小数？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`import math
number = 9
result = math.sqrt(number)
print(result)
`,stdout:`3.0
`,stdin:""},followUp:"换成 0、4、16，核对自己知道的平方根。",codeTemplate:`import math
number = {{number}}
result = math.sqrt(number)
print(result)
`,controls:[{name:"number",label:"待计算的数",values:[0,4,9,16,25],defaultIndex:2}],watch:["number","result"]},js=[{title:"使用平方根工具",problem:"求 9 的平方根。",steps:["import math 准备模块。","math.sqrt(9) 计算出 3.0。","print 显示结果。"],answer:{code:`import math
result = math.sqrt(9)
print(result)
`,stdout:`3.0
`,stdin:""}},{title:"直接运行入口",problem:"直接运行本文件，显示翻倍结果。",steps:["先定义可复用函数。","入口判断在直接运行时成立。","调用 double(5) 得到 10。"],answer:{code:`def double(number):
    return number * 2

if __name__ == "__main__":
    print(double(5))
`,stdout:`10
`,stdin:""}}],ws=[{id:"modules-m1",claim:"导入一个文件，不会执行它的任何顶层代码。",correction:"普通顶层代码也会执行；演示步骤放在入口判断内。"},{id:"modules-m2",claim:"自己的 math.py 不会影响 import math。",correction:"同名文件可能遮住自带模块，练习文件用别的名字。"}],$s=[{problem:"求 16 的平方根。",hint:"导入 math，再 sqrt。",solution:["结果为 4.0。"],answer:{code:`import math
print(math.sqrt(16))
`,stdout:`4.0
`,stdin:""},id:"modules-p1",difficulty:1,misconceptionTags:["modules-m1"]},{problem:"求 0 的平方根。",hint:"0 是平方根的边界。",solution:["结果为 0.0。"],answer:{code:`import math
print(math.sqrt(0))
`,stdout:`0.0
`,stdin:""},id:"modules-p2",difficulty:1,misconceptionTags:["modules-m2"]},{problem:"直接运行一个入口，显示“工具演示”。",hint:"使用给出的入口标记。",solution:['直接运行时 __name__ 是 "__main__"。'],answer:{code:`if __name__ == "__main__":
    print("工具演示")
`,stdout:`工具演示
`,stdin:""},id:"modules-p3",difficulty:2,misconceptionTags:["modules-m1"]},{problem:"把 sqrt 单独导入，再求 25 的平方根。",hint:"from math import sqrt。",solution:["这次直接写 sqrt(25)。"],answer:{code:`from math import sqrt
print(sqrt(25))
`,stdout:`5.0
`,stdin:""},id:"modules-p4",difficulty:1,misconceptionTags:["modules-m2"]}],_s={question:"把函数放在模块里供别人导入，演示代码应放哪里？",correctIndex:1,choices:["普通顶层，一导入就提问",'if __name__ == "__main__": 下面',"写在注释中也会执行"],explanation:"入口判断把直接运行时的演示步骤围在一起。",feedback:["普通顶层代码也会在导入时执行，可能打断调用者。","对，直接运行时演示，导入时准备工具。","注释不会执行。"]},ks=["arguments","functions"],Ts=4,Ns=["modules-m1","modules-m2"],Es={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Cs=["python-tutorial","python-modules","python-venv","python-pathlib"],Is=[],qs={id:ds,chapterId:cs,number:rs,title:ms,subtitle:vs,concept:ys,intuition:bs,objectives:fs,body:gs,formalDefinition:hs,derivation:xs,interactiveVisual:zs,workedExamples:js,commonMistakes:ws,practice:$s,learningCheck:_s,prerequisites:ks,difficulty:Ts,misconceptionTags:Ns,provenance:Es,sources:Cs,furtherReading:Is},Ss="names-types",Vs="chapter-1",Ps="1.2",Rs="给值起名字",As="给一个值起名字，下一行就能用这个名字找到它。",Os="给一个值起名字，下一行就能用这个名字找到它。",Ds="在装着 3 个苹果的篮子上贴一张“苹果数”的标签。",Bs=["给数字起个名字","更新之后，名字记住新值","数字与文字各有用途"],Ms=[{title:"给数字起个名字",text:'apples = 3 读作“把名字 apples 对应到数字 3”。这里 = 是赋值：先看右边的值，再让左边的名字记住它。print(apples) 不加引号，因为我们要取出名字对应的值；print("apples") 加了引号，就只显示这串文字。'},{title:"更新之后，名字记住新值",text:"apples = apples + 2 的右边先取出原来的 3，加上 2 得到 5；然后左边 apples 改为记住 5。它不是数学里要求两边永远相等的等式。可以逐行观察下方的变量卡片。"},{title:"数字与文字各有用途",text:'3 是可以做算术的数字；"3" 是文字。先根据用途选择：苹果个数用数字，姓名用文字。名字区分大小写，apples 和 Apples 不是同一个；为了容易看懂，本书用小写英文，多个词用下划线连接，例如 apple_count。'}],Fs={text:"赋值先计算右边，再更新左边名字对应的值；带引号的名字是文字。",conditions:["每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。"]},Us=[{text:"apples 先记住 3。"},{text:"右边先算 3 + 2，再更新 apples。"},{text:"print 取出更新后的 5。"}],Js={kind:"python-trace",prediction:"原来有 3 个，增加 2 个，变量会变成多少？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`apples = 3
apples = apples + 2
print(apples)
`,stdout:`5
`,stdin:""},followUp:"把初始数量改为 0，再看右边如何先计算。",codeTemplate:`apples = {{start}}
apples = apples + 2
print(apples)
`,controls:[{name:"start",label:"原来的苹果数",values:[0,1,2,3,4,5],defaultIndex:3}],watch:["apples"]},Ls=[{title:"今天又买了两个",problem:"原有 3 个苹果，又买 2 个，显示新总数。",steps:["apples 先记住 3。","右边先算 3 + 2，再更新 apples。","print 取出更新后的 5。"],answer:{code:`apples = 3
apples = apples + 2
print(apples)
`,stdout:`5
`,stdin:""}},{title:"名字还是文字",problem:"比较带引号和不带引号的 apples。",steps:["不带引号时读取变量。","带引号时按文字显示。"],answer:{code:`apples = 3
print(apples)
print("apples")
`,stdout:`3
apples
`,stdin:""}}],Ws=[{id:"names-types-m1",claim:'print("apples") 会读取苹果数。',correction:"有引号时显示文字 apples；print(apples) 才读取变量。"},{id:"names-types-m2",claim:"a 更新后，之前从 a 取值的 b 也自动更新。",correction:"b = a 在当时取值；后续的数字赋值不会自动重算 b。"}],Gs=[{problem:"count = 4 后，print(count) 显示什么？",hint:"读取名字对应的值。",solution:["count 记住 4。"],answer:{code:`count = 4
print(count)
`,stdout:`4
`,stdin:""},id:"names-types-p1",difficulty:1,misconceptionTags:["names-types-m1"]},{problem:"把 count 从 4 增加到 5。",hint:"先取旧值再加 1。",solution:["右边得 5，赋值更新名字。"],answer:{code:`count = 4
count = count + 1
print(count)
`,stdout:`5
`,stdin:""},id:"names-types-p2",difficulty:2,misconceptionTags:["names-types-m2"]},{problem:"让 name 记住“小林”，再显示它。",hint:"文字需要引号。",solution:["赋值时写引号，读取名字时不写。"],answer:{code:`name = "小林"
print(name)
`,stdout:`小林
`,stdin:""},id:"names-types-p3",difficulty:1,misconceptionTags:["names-types-m1"]},{problem:"a = 2；b = a；a = 5 后，b 是多少？",hint:"给 b 赋值时 a 还是 2。",solution:["b 记住 2。","随后更新 a 不会自动重新计算 b。"],answer:{code:`a = 2
b = a
a = 5
print(a)
print(b)
`,stdout:`5
2
`,stdin:""},id:"names-types-p4",difficulty:2,misconceptionTags:["names-types-m2"]}],Hs={question:'apples = 3 后，print("apples") 显示什么？',correctIndex:1,choices:["3（总会读取变量）","apples（文字）","没有输出（变量无法显示）"],explanation:"引号让 apples 成为普通文字。",feedback:["加了引号就不会查找变量。","对，引号里面的文字原样显示。","print 可以显示数字，也可以显示文字。"]},Ys=["first-program"],Ks=1,Qs=["names-types-m1","names-types-m2"],Xs={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Zs=["python-tutorial","python-types"],ei=[],ti={id:Ss,chapterId:Vs,number:Ps,title:Rs,subtitle:As,concept:Os,intuition:Ds,objectives:Bs,body:Ms,formalDefinition:Fs,derivation:Us,interactiveVisual:Js,workedExamples:Ls,commonMistakes:Ws,practice:Gs,learningCheck:Hs,prerequisites:Ys,difficulty:Ks,misconceptionTags:Qs,provenance:Xs,sources:Zs,furtherReading:ei},ni="numbers",oi="chapter-1",li="1.3",si="数值与运算",ii="同一批糖果，可以问“平均多少”，也可以问“装满几袋、还剩几颗”。",ui="同一批糖果，可以问“平均多少”，也可以问“装满几袋、还剩几颗”。",ai="17 颗糖，每袋装 5 颗：装满 3 袋，还剩 2 颗。",pi=["先用熟悉的加减乘除","完整袋数和剩余颗数","用原来的数量检查结果"],di=[{title:"先用熟悉的加减乘除",text:"Python 用 + 做加法，- 做减法，* 做乘法，/ 做普通除法。例如 3 * 5 是 15，17 / 5 是 3.4。数字不加引号；print(3 * 5) 会先算出结果，再显示。乘除先于加减，想先算哪一部分就加圆括号，例如 (2 + 3) * 4。"},{title:"完整袋数和剩余颗数",text:"现在问题变成“只能装满多少袋”。17 // 5 得到 3；// 连着写两个斜杠，表示整除。17 % 5 得到 2；% 在这里表示余数，不是百分号。记住一幅图就够了：3 袋各装 5 颗，用掉 15 颗，17 - 15 还剩 2 颗。"},{title:"用原来的数量检查结果",text:"把完整袋数乘以每袋颗数，再加剩余：3 * 5 + 2 = 17。若正好装完，例如 20 颗每袋 5 颗，余数就是 0。先在下面改糖果数，再改变袋子大小，一次只改一个。这里糖果数为非负整数，每袋颗数必须大于 0。"}],ci={text:"在本节的非负整数装袋模型中：// 求完整袋数，% 求余数；袋数 × 每袋颗数 + 余数 = 总数。",conditions:["装袋模型使用非负整数数量；每袋颗数必须是大于 0 的整数。","/、//、% 的除数不能为 0。"]},ri=[{text:"total 记住总共 17 颗；size 记住每袋 5 颗。"},{text:"用 // 求完整袋数，得到 3。"},{text:"用 % 求剩余，得到 2；3 * 5 + 2 = 17。"}],mi={kind:"python-trace",prediction:"先预测 17 颗糖、每袋 5 颗的袋数和余数，再把总数改为 20 看看。",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`total = 17
size = 5
bags = total // size
left = total % size
print(bags)
print(left)
`,stdout:`3
2
`,stdin:""},followUp:"再试 3 颗、每袋 5 颗：先预测袋数是否为 0。",codeTemplate:`total = {{total}}
size = {{size}}
bags = total // size
left = total % size
print(bags)
print(left)
`,controls:[{name:"total",label:"糖果总数",values:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],defaultIndex:17},{name:"size",label:"每袋颗数",values:[1,2,3,4,5],defaultIndex:4}],watch:["total","size","bags","left"]},vi=[{title:"把 17 颗糖装袋",problem:"每袋 5 颗，显示完整袋数和剩余颗数。",steps:["total 记住总共 17 颗；size 记住每袋 5 颗。","用 // 求完整袋数，得到 3。","用 % 求剩余，得到 2；3 * 5 + 2 = 17。"],answer:{code:`total = 17
size = 5
print(total // size)
print(total % size)
`,stdout:`3
2
`,stdin:""}},{title:"正好装完",problem:"20 颗糖每袋 5 颗，还剩多少？",steps:["20 // 5 是 4 袋。","20 % 5 是 0，表示没有剩余。"],answer:{code:`total = 20
size = 5
print(total // size)
print(total % size)
`,stdout:`4
0
`,stdin:""}}],yi=[{id:"numbers-m1",claim:"// 和 / 都是在求完整袋数。",correction:"/ 是普通除法，17 / 5 为 3.4；// 在这个模型中求完整袋数 3。"},{id:"numbers-m2",claim:"% 在代码里表示百分数。",correction:"在本节整数运算中，% 求余数：17 % 5 为 2。"}],bi=[{problem:"3 袋糖，每袋 5 颗，共有几颗？",hint:"乘法写 *。",solution:["3 * 5 = 15。"],answer:{code:`print(3 * 5)
`,stdout:`15
`,stdin:""},id:"numbers-p1",difficulty:1,misconceptionTags:["numbers-m1"]},{problem:"12 颗糖每袋 5 颗，完整袋数和余数是多少？",hint:"先画出两个装满的袋子。",solution:["两袋用掉 10 颗。","剩 2 颗。"],answer:{code:`print(12 // 5)
print(12 % 5)
`,stdout:`2
2
`,stdin:""},id:"numbers-p2",difficulty:2,misconceptionTags:["numbers-m2"]},{problem:"原有 17 颗，又拿来 3 颗。每袋 5 颗，求余数。",hint:"先算新总数。",solution:["17 + 3 = 20。","20 % 5 = 0。"],answer:{code:`total = 17 + 3
print(total % 5)
`,stdout:`0
`,stdin:""},id:"numbers-p3",difficulty:2,misconceptionTags:["numbers-m1"]},{problem:"只有 3 颗糖，每袋 5 颗，能装满一袋吗？",hint:"不够一袋时完整袋数是 0。",solution:["3 // 5 = 0。","3 % 5 = 3，糖果都留在外面。"],answer:{code:`print(3 // 5)
print(3 % 5)
`,stdout:`0
3
`,stdin:""},id:"numbers-p4",difficulty:2,misconceptionTags:["numbers-m2"]}],fi={question:"17 颗糖，每袋装 5 颗，要用哪一个求剩余？",correctIndex:1,choices:["17 / 5","17 % 5","17 // 5"],explanation:"余数表示装完完整袋子后剩下的数量。",feedback:["/ 得到平均值 3.4，不是剩余颗数。","对，% 得到剩余 2 颗。","// 得到完整袋数 3，不是余数。"]},gi=["names-types"],hi=1,xi=["numbers-m1","numbers-m2"],zi={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},ji=["python-tutorial","python-floating"],wi=[{title:"学完主线后再看：负数和小数",text:"本节的装袋模型只用非负整数。负数的 // 向下取整，例如 -3 // 2 为 -2，不能直接套用装袋直觉。小数计算还可能有表示误差，例如 0.1 + 0.2 的结果不一定恰好等于 0.3；这里先知道有这个边界即可。金额项目使用整数“分”，更精确的十进制计算可在后续学习 Decimal。"}],$i={id:ni,chapterId:oi,number:li,title:si,subtitle:ii,concept:ui,intuition:ai,objectives:pi,body:di,formalDefinition:ci,derivation:ri,interactiveVisual:mi,workedExamples:vi,commonMistakes:yi,practice:bi,learningCheck:fi,prerequisites:gi,difficulty:hi,misconceptionTags:xi,provenance:zi,sources:ji,furtherReading:wi},_i="strings-input",ki="chapter-1",Ti="1.4",Ni="接收文字和数量",Ei="input 先收到文字；要做算术，先把这段文字转换成数字。",Ci="input 先收到文字；要做算术，先把这段文字转换成数字。",Ii="输入框里写“3”，电脑先收到字符 3，之后才把它当成数量。",qi=["先接住用户的一句话","把数量从文字转换成数字","把文字和变量放在一句话里"],Si=[{title:"先接住用户的一句话",text:'name = input() 会等待你输入一行文字，按回车后把文字交给 name。input 的意思是“接收输入”。为了说明要填什么，可以前一行 print("你叫什么名字？")。输入的回车不保存在 name 中。这里文字的术语叫字符串。'},{title:"把数量从文字转换成数字",text:'count = int(input()) 分两步读：input() 接收文字，int(...) 把像 "3" 这样的整数文字转换成数字 3。int 是整数转换工具。这样 count + 2 才能表示增加 2 个。若输入“三”或“3.5”，这次整数转换会报错；第 4.4 节再学如何处理。'},{title:"把文字和变量放在一句话里",text:'print(f"你好，{name}") 中，前面的 f 表示这是一句可填空的文字，{name} 的位置换成变量的值。先只用这种基本形式，不需要学习格式规则。若只显示数量，直接 print(count) 也完全可以。'}],Vi={text:"input() 接收字符串；int(...) 把合法整数文字转换为数字；f 文字可用 {变量名} 填入值。",conditions:["int 转换需要合法整数文字；空文字、“三”和“3.5”不能直接转成整数。"]},Pi=[{text:"先显示提问。"},{text:"input 接住“小林”。"},{text:"{name} 换成“小林”。"}],Ri={kind:"python-trace",prediction:'文字 "3" 转成数字后，加 2 是多少？',caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`text = '3'
count = int(text)
print(count + 2)
`,stdout:`5
`,stdin:""},followUp:'选择 "0"，观察转换前后变量卡片的引号。这里用文字参数代替键盘输入。',codeTemplate:`text = {{text}}
count = int(text)
print(count + 2)
`,controls:[{name:"text",label:"模拟输入的文字",values:["0","1","3","5"],defaultIndex:2}],watch:["text","count"]},Ai=[{title:"认识新同学",problem:"输入“小林”，程序显示问候。",steps:["先显示提问。","input 接住“小林”。","{name} 换成“小林”。"],answer:{code:`print("你叫什么名字？")
name = input()
print(f"你好，{name}")
`,stdout:`你叫什么名字？
你好，小林
`,stdin:`小林
`}},{title:"再添两颗",problem:"输入 3，显示增加 2 之后的数量。",steps:['input 收到文字 "3"。',"int 把它变成数字 3。","加 2 得到 5。"],answer:{code:`count = int(input())
print(count + 2)
`,stdout:`5
`,stdin:`3
`}}],Oi=[{id:"strings-input-m1",claim:"input 收到看起来像数字的文字就会自动变成数字。",correction:"input 得到字符串，整数计算前需要 int 转换。"},{id:"strings-input-m2",claim:"把两个数量都写成文字再用 + 就能求和。",correction:'"3" + "2" 连接成 "32"；数量求和要用数字。'}],Di=[{problem:"输入“小王”，原样显示输入的名字。",hint:"先 input，再 print。",solution:["name 接住文字。"],answer:{code:`name = input()
print(name)
`,stdout:`小王
`,stdin:`小王
`},id:"strings-input-p1",difficulty:1,misconceptionTags:["strings-input-m1"]},{problem:"输入 4，显示它的两倍。",hint:"用 int 转换。",solution:["4 * 2 = 8。"],answer:{code:`count = int(input())
print(count * 2)
`,stdout:`8
`,stdin:`4
`},id:"strings-input-p2",difficulty:2,misconceptionTags:["strings-input-m2"]},{problem:"输入“小林”，显示“小林，欢迎你”。",hint:"用 f 和 {name} 填空。",solution:["变量的值替换花括号里的位置。"],answer:{code:`name = input()
print(f"{name}，欢迎你")
`,stdout:`小林，欢迎你
`,stdin:`小林
`},id:"strings-input-p3",difficulty:1,misconceptionTags:["strings-input-m1"]},{problem:"输入 0，再加 2，会得到多少？",hint:"0 也是合法整数。",solution:["转换后 0 + 2 = 2。"],answer:{code:`count = int(input())
print(count + 2)
`,stdout:`2
`,stdin:`0
`},id:"strings-input-p4",difficulty:2,misconceptionTags:["strings-input-m2"]}],Bi={question:'input 收到 "3" 后，怎样才能给数量加 2？',correctIndex:1,choices:["直接给文字加 2","先用 int 转成数字","把 2 也写成文字再相加"],explanation:"做数量运算前，先把整数文字转成数字。",feedback:["文字与数字不能这样相加。",'对，int("3") 得到数字 3。','"3" + "2" 会连接成 "32"，不是数量相加。']},Mi=["numbers"],Fi=1,Ui=["strings-input-m1","strings-input-m2"],Ji={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Li=["python-tutorial","python-input"],Wi=[],Gi={id:_i,chapterId:ki,number:Ti,title:Ni,subtitle:Ei,concept:Ci,intuition:Ii,objectives:qi,body:Si,formalDefinition:Vi,derivation:Pi,interactiveVisual:Ri,workedExamples:Ai,commonMistakes:Oi,practice:Di,learningCheck:Bi,prerequisites:Mi,difficulty:Fi,misconceptionTags:Ui,provenance:Ji,sources:Li,furtherReading:Wi},Hi="testing",Yi="chapter-5",Ki="5.3",Qi="测试与边界验证",Xi="先写清输入和正确结果，再反复比较程序结果。",Zi="先写清输入和正确结果，再反复比较程序结果。",eu="给同一台机器几份已知答案的小题，检查它是否一直算对。",tu=["先自己算预期答案","用 assert 做一个检查","覆盖正常情况和边界"],nu=[{title:"先自己算预期答案",text:"我们有一个翻倍函数。输入 3，手算预期是 6；输入 0，预期是 0；输入 -2，预期是 -4。不要用待测函数自己生成“正确答案”，否则同一个错误会出现在两边。测试就是把这些小检查保存下来，改代码后再运行。"},{title:"用 assert 做一个检查",text:'assert double(3) == 6 表示“这里必须成立”。== 是相等判断。成立就继续，不输出文字；不成立就产生 AssertionError，让我们看到失败。最后 print("检查通过") 说明程序走过了这些检查。运行测试不要使用 Python 的 -O 选项，它会跳过 assert。'},{title:"覆盖正常情况和边界",text:"只有输入 3 通过还不够；试 0、负数和能暴露错误的值。一个测试通过不代表所有情况都正确，但明确的边界能防止已经发现的问题回来。项目附录使用标准库 unittest 批量运行检查；先学会输入、预期、比较这三个动作。"}],ou={text:"测试把实际结果与独立确定的预期比较；assert 要求这个判断成立。",conditions:["预期答案独立手算；测试时不要使用会禁用 assert 的 -O 选项。"]},lu=[{text:"手算预期分别为 6、0、-4。"},{text:"assert 比较每个实际结果。"},{text:"所有检查成立后显示检查通过。"}],su={kind:"python-trace",prediction:"输入 3，正确答案 6；若预期误写为 5 会怎样？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`def double(number):
    return number * 2

actual = double(3)
expected = 6
if actual == expected:
    print("检查通过")
else:
    print("检查失败")
`,stdout:`检查通过
`,stdin:""},followUp:"只改预期答案，观察比较结果。这是 assert 判断的展开。",codeTemplate:`def double(number):
    return number * 2

actual = double({{number}})
expected = {{expected}}
if actual == expected:
    print("检查通过")
else:
    print("检查失败")
`,controls:[{name:"number",label:"函数输入",values:[0,3,-2],defaultIndex:1},{name:"expected",label:"你填写的预期",values:[0,5,6,-4],defaultIndex:2}],watch:["number","actual","expected"]},iu=[{title:"检查一台翻倍机器",problem:"验证正常值、零和负数。",steps:["手算预期分别为 6、0、-4。","assert 比较每个实际结果。","所有检查成立后显示检查通过。"],answer:{code:`def double(number):
    return number * 2

assert double(3) == 6
assert double(0) == 0
assert double(-2) == -4
print("检查通过")
`,stdout:`检查通过
`,stdin:""}},{title:"看见一次失败",problem:"假设把翻倍错写成加 2，用输入 3 检查。",steps:["错误函数返回 5。","预期是 6，assert 不成立。","捕获 AssertionError 只是为了展示本例失败；正式测试让它直接报错。"],answer:{code:`def double(number):
    return number + 2

try:
    assert double(3) == 6
except AssertionError:
    print("检查失败：输入 3 应得到 6")
`,stdout:`检查失败：输入 3 应得到 6
`,stdin:""}}],uu=[{id:"testing-m1",claim:"正确答案可以再次调用同一个待测函数生成。",correction:"相同错误可能出现在两边；预期应独立确定。"},{id:"testing-m2",claim:"一个正常输入通过，就代表所有情况都正确。",correction:"补充零、空列表和错误输入等边界，测试支持已检查的情况。"}],au=[{problem:"为 add_one(3) 写一个检查。",hint:"手算预期是 4。",solution:["比较实际与 4。"],answer:{code:`def add_one(number):
    return number + 1

assert add_one(3) == 4
print("通过")
`,stdout:`通过
`,stdin:""},id:"testing-p1",difficulty:1,misconceptionTags:["testing-m1"]},{problem:"为 add_one(0) 写一个边界检查。",hint:"预期是 1。",solution:["零输入也应加 1。"],answer:{code:`def add_one(number):
    return number + 1

assert add_one(0) == 1
print("通过")
`,stdout:`通过
`,stdin:""},id:"testing-p2",difficulty:1,misconceptionTags:["testing-m2"]},{problem:"检查空列表总和是 0。",hint:"手算没有项目可加。",solution:["total_of([]) 应返回 0。"],answer:{code:`def total_of(values):
    total = 0
    for value in values:
        total = total + value
    return total

assert total_of([]) == 0
print("通过")
`,stdout:`通过
`,stdin:""},id:"testing-p3",difficulty:1,misconceptionTags:["testing-m1"]},{problem:"检查 3 颗糖每袋 5 颗，完整袋数是 0，余数是 3。",hint:"分别检查两个结果。",solution:["用两个 assert 比较手算答案。"],answer:{code:`assert 3 // 5 == 0
assert 3 % 5 == 3
print("通过")
`,stdout:`通过
`,stdin:""},id:"testing-p4",difficulty:2,misconceptionTags:["testing-m2"]}],pu={question:"给待测函数准备正确答案时，应该怎么做？",correctIndex:1,choices:["再调用同一个函数得出预期","独立手算一个小输入","只要没报错就算通过"],explanation:"预期结果应来自独立核对，才能发现函数的计算错误。",feedback:["相同的错误可能出现在两边，比较就发现不了。","对，独立算出预期，再与程序结果比较。","不报错也可能给出错误答案。"]},du=["json-csv","functions","exceptions"],cu=5,ru=["testing-m1","testing-m2"],mu={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},vu=["python-tutorial","python-unittest"],yu=[],bu={id:Hi,chapterId:Yi,number:Ki,title:Qi,subtitle:Xi,concept:Zi,intuition:eu,objectives:tu,body:nu,formalDefinition:ou,derivation:lu,interactiveVisual:su,workedExamples:iu,commonMistakes:uu,practice:au,learningCheck:pu,prerequisites:du,difficulty:cu,misconceptionTags:ru,provenance:mu,sources:vu,furtherReading:yu},fu="text-files",gu="chapter-5",hu="5.1",xu="文本文件与路径",zu="变量在程序结束后不会留下；写进文件，下一次才能重新读取。",ju="变量在程序结束后不会留下；写进文件，下一次才能重新读取。",wu="把今天的清单记在纸上，明天还能打开看。",$u=["先决定写在哪里","写入时说明模式和文字编码","读取后仍然得到文字"],_u=[{title:"先决定写在哪里",text:"notes.txt 是文件名；不写完整路径时，它相对于程序运行时的当前目录，不一定是代码所在目录。第一次实验请在独立练习文件夹进行。网页互动在隔离的示例目录中演示，不会写入你的电脑文件。"},{title:"写入时说明模式和文字编码",text:'with open("notes.txt", "w", encoding="utf-8") as file: 打开文件供写入。w 是写入模式，会清空同名文件原来的内容；因此用新文件练习。encoding 说明如何保存中文，utf-8 是本书统一使用的编码。file.write("买苹果\\n") 写入文字，\\n 表示换行。with 在这段缩进代码结束后自动关闭文件。'},{title:"读取后仍然得到文字",text:'用 r 模式打开同一个文件，text = file.read() 把内容读成字符串。为了观察文件自带的换行，可以 print(text, end="")；end="" 表示这次 print 不再额外换行。需要在原内容末尾追加时用 a 模式；先确认目标文件。'}],ku={text:"with open(...) 打开文件并在该段结束后关闭；r 读取、w 覆盖写入、a 末尾追加。",conditions:["w 会覆盖同名文件，请在独立示例目录使用新文件名。","相对路径从当前工作目录解释；读写中文统一使用 utf-8。"]},Tu=[{text:"w 创建或覆盖示例文件，写入一行。"},{text:"离开 with 后文件关闭。"},{text:"r 重新打开，读取并显示原内容。"}],Nu={kind:"python-trace",prediction:"变量里的文字写进文件再读回，会不会改变？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`message = '买苹果'
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write(message)
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
`,stdout:`买苹果
`,stdin:""},followUp:"试空文字，观察读到的 text。每次实验都从新的示例目录开始。",codeTemplate:`message = {{message}}
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write(message)
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
`,controls:[{name:"message",label:"要保存的文字",values:["买苹果","明天练习",""],defaultIndex:0}],watch:["message","text"]},Eu=[{title:"留下一条记录",problem:"写入“买苹果”，关闭后重新读取。",steps:["w 创建或覆盖示例文件，写入一行。","离开 with 后文件关闭。","r 重新打开，读取并显示原内容。"],answer:{code:`with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("买苹果\\n")
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text, end="")
`,stdout:`买苹果
`,stdin:""}},{title:"在末尾追加",problem:"已有第一行，再用 a 添加第二行。",steps:["先建立示例文件。","a 保留原内容，在末尾写入。","读取时得到两行。"],answer:{code:`with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("买苹果\\n")
with open("notes.txt", "a", encoding="utf-8") as file:
    file.write("买面包\\n")
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text, end="")
`,stdout:`买苹果
买面包
`,stdin:""}}],Cu=[{id:"text-files-m1",claim:"w 会在旧内容末尾追加。",correction:"w 会清空旧内容；追加用 a。"},{id:"text-files-m2",claim:"相对路径永远从代码文件所在目录开始。",correction:"它从运行时的当前工作目录开始；先确认运行位置。"}],Iu=[{problem:"把“你好”写入新的 hello.txt，再读取。",hint:"写完后用 r 打开。",solution:["同样的 utf-8 编码用于写和读。"],answer:{code:`with open("hello.txt", "w", encoding="utf-8") as file:
    file.write("你好")
with open("hello.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
`,stdout:`你好
`,stdin:""},id:"text-files-p1",difficulty:2,misconceptionTags:["text-files-m1"]},{problem:"给示例文件追加 B，原内容为 A。",hint:"模式 a 保留原内容。",solution:["先写 A，再追加 B。"],answer:{code:`with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("A")
with open("letters.txt", "a", encoding="utf-8") as file:
    file.write("B")
with open("letters.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
`,stdout:`AB
`,stdin:""},id:"text-files-p2",difficulty:2,misconceptionTags:["text-files-m2"]},{problem:"把示例文件的 A 用 w 改写成 B。",hint:"再次 w 会清空旧内容。",solution:["只剩 B。"],answer:{code:`with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("A")
with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("B")
with open("letters.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
`,stdout:`B
`,stdin:""},id:"text-files-p3",difficulty:2,misconceptionTags:["text-files-m1"]},{problem:"读取一个空的示例文件，文字长度是多少？",hint:"read 返回空字符串。",solution:["len(text) 是 0。"],answer:{code:`with open("empty.txt", "w", encoding="utf-8") as file:
    file.write("")
with open("empty.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(len(text))
`,stdout:`0
`,stdin:""},id:"text-files-p4",difficulty:2,misconceptionTags:["text-files-m2"]}],qu={question:"要保留原内容并在末尾添加，用哪个模式？",correctIndex:1,choices:["w","a","r 会自动保存修改"],explanation:"a 是追加；w 会覆盖；r 用于读取。",feedback:["w 会清空旧内容，不适合这里的追加。","对，a 在原内容末尾添加。","r 是读取模式，不能用来写入。"]},Su=["exceptions","modules"],Vu=5,Pu=["text-files-m1","text-files-m2"],Ru={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Au=["python-tutorial","python-io","python-pathlib"],Ou=[],Du={id:fu,chapterId:gu,number:hu,title:xu,subtitle:zu,concept:ju,intuition:wu,objectives:$u,body:_u,formalDefinition:ku,derivation:Tu,interactiveVisual:Nu,workedExamples:Eu,commonMistakes:Cu,practice:Iu,learningCheck:qu,prerequisites:Su,difficulty:Vu,misconceptionTags:Pu,provenance:Ru,sources:Au,furtherReading:Ou},Bu="tuples-sets",Mu="chapter-3",Fu="3.3",Uu="元组与集合：固定记录和去重",Ju="固定的一组值可以用元组；只关心是否出现过，可以用集合。",Lu="固定的一组值可以用元组；只关心是否出现过，可以用集合。",Wu="地点是一对坐标；去过哪些城市，则不需要把同一个城市记两遍。",Gu=["把固定的一对数据放一起","重复的数据只保留一份","先问自己关心什么"],Hu=[{title:"把固定的一对数据放一起",text:"point = (3, 4) 是元组，外面用圆括号。像列表一样，point[0] 取 3，point[1] 取 4；但不能给某个位置重新赋值。适合表达一个固定记录，例如坐标。本节先用两项元组；只有一项时要写 (3,) 才是元组。"},{title:"重复的数据只保留一份",text:'cities = {"北京", "上海", "北京"} 是集合。每个值只保留一份，所以 len(cities) 是 2。注意：这里没有冒号，和字典的键值对不同。空集合要写 set()；{} 是空字典。'},{title:"先问自己关心什么",text:'"北京" in cities 判断是否包含这个值。集合没有第一个、第二个位置，也不承诺输出顺序；需要稳定地显示时，可用 sorted(cities) 得到排好顺序的列表。要保留重复和原有顺序用列表；按名称配值用字典；固定记录用元组；去重与包含判断用集合。'}],Yu={text:"元组的位置不能重新赋值；集合只保留不同值，可用 in 检查是否包含。",conditions:["集合中的值需要可作为集合元素；本节只使用数字和文字。","集合不提供按位置读取，也不保证显示顺序。"]},Ku=[{text:"圆括号把 3、4 放在一起。"},{text:"位置 0 和 1 分别取出两个坐标。"},{text:"最后用预期输出核对自己的预测。"}],Qu={kind:"python-trace",prediction:"重复的 1 会计几次？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`values = [1, 1, 2]
unique = set(values)
print(len(unique))
print(2 in unique)
`,stdout:`2
True
`,stdin:""},followUp:"比较空列表和有重复的列表；集合卡片按固定次序显示，便于观察。",codeTemplate:`values = {{values}}
unique = set(values)
print(len(unique))
print(2 in unique)
`,controls:[{name:"values",label:"原始记录",values:[[1,1,2],[1,2,3],[]],defaultIndex:0}],watch:["values","unique"]},Xu=[{title:"读取坐标",problem:"从一对固定坐标中取出两个数。",steps:["圆括号把 3、4 放在一起。","位置 0 和 1 分别取出两个坐标。"],answer:{code:`point = (3, 4)
print(point[0])
print(point[1])
`,stdout:`3
4
`,stdin:""}},{title:"只数不同城市",problem:"北京、上海、北京，一共几个不同城市？",steps:["集合自动保留不同值。","北京虽出现两次，只计一次。"],answer:{code:`cities = {"北京", "上海", "北京"}
print(len(cities))
print("北京" in cities)
`,stdout:`2
True
`,stdin:""}}],Zu=[{id:"tuples-sets-m1",claim:"集合会保留每一次重复出现。",correction:"集合只保留不同值；要保留重复用列表。"},{id:"tuples-sets-m2",claim:"{} 就是空集合。",correction:"{} 是空字典，空集合用 set()。"}],ea=[{problem:"元组 (5, 8) 的第二项是多少？",hint:"位置是 1。",solution:["读取 point[1]。"],answer:{code:`point = (5, 8)
print(point[1])
`,stdout:`8
`,stdin:""},id:"tuples-sets-p1",difficulty:1,misconceptionTags:["tuples-sets-m1"]},{problem:"列表 [1, 1, 2] 转成集合后有几个值？",hint:"set 可以把列表转成集合。",solution:["重复的 1 只留一次。"],answer:{code:`values = set([1, 1, 2])
print(len(values))
`,stdout:`2
`,stdin:""},id:"tuples-sets-p2",difficulty:1,misconceptionTags:["tuples-sets-m2"]},{problem:"判断 3 是否在集合 {1, 2} 中。",hint:"用 in。",solution:["3 没出现过，结果 False。"],answer:{code:`values = {1, 2}
print(3 in values)
`,stdout:`False
`,stdin:""},id:"tuples-sets-p3",difficulty:1,misconceptionTags:["tuples-sets-m1"]},{problem:"创建空集合，再查看长度。",hint:"不要写 {}。",solution:["set() 建立空集合。","长度为 0。"],answer:{code:`values = set()
print(len(values))
`,stdout:`0
`,stdin:""},id:"tuples-sets-p4",difficulty:1,misconceptionTags:["tuples-sets-m2"]}],ta={question:"需要保留购物清单的顺序和重复项，该选什么？",correctIndex:1,choices:["集合","列表","用集合的位置 0 读取第一项"],explanation:"不同需求决定容器；清单顺序和重复用列表。",feedback:["集合会去重，也没有列表式的位置。","对，列表保留顺序与重复。","集合不能用位置 0 取第一项。"]},na=["dictionaries"],oa=3,la=["tuples-sets-m1","tuples-sets-m2"],sa={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},ia=["python-tutorial","python-data"],ua=[],aa={id:Bu,chapterId:Mu,number:Fu,title:Uu,subtitle:Ju,concept:Lu,intuition:Wu,objectives:Gu,body:Hu,formalDefinition:Yu,derivation:Ku,interactiveVisual:Qu,workedExamples:Xu,commonMistakes:Zu,practice:ea,learningCheck:ta,prerequisites:na,difficulty:oa,misconceptionTags:la,provenance:sa,sources:ia,furtherReading:ua},pa="while-stop",da="chapter-2",ca="2.3",ra="while 循环与倒计时",ma="while 每次先检查条件，成立就继续，不成立就停。",va="while 每次先检查条件，成立就继续，不成立就停。",ya="倒计时：还剩时间就再走一步，走到 0 就结束。",ba=["先检查，再做一次","每轮都让条件向停止靠近","先试小数值和零"],fa=[{title:"先检查，再做一次",text:"while remaining > 0: 读作“只要剩余数大于 0，就执行缩进的步骤”。它每一轮都会重新检查条件。for 常用于按一串数据重复；while 适合按“是否继续”决定重复。"},{title:"每轮都让条件向停止靠近",text:"remaining = remaining - 1 把剩余数减少 1。从 3 开始，依次变成 2、1、0。到 0 时条件不成立，循环结束。如果忘了减少，条件会一直成立，程序就不停重复。不要试运行那个缺少更新的版本。"},{title:"先试小数值和零",text:"先从 3 倒数，再试 1，最后试 0。若一开始就是 0，循环一次也不执行，但循环外的“结束”仍然显示。用这种边界检查，比只试正常例子更可靠。"}],ga={text:"while 每轮先检查条件；成立才执行，更新后重新检查。",conditions:["每轮更新变量，让条件最终不成立；先用小输入核对停止。"]},ha=[{text:"remaining 从 3 开始。"},{text:"每轮先显示，再减 1。"},{text:"变成 0 后跳出循环，显示结束。"}],xa={kind:"python-trace",prediction:"从 0 开始，循环会不会先执行一次？",caption:"先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。",experiment:{code:`remaining = 3
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
`,stdout:`3
2
1
结束
`,stdin:""},followUp:"比较 0 和 3，观察判断语句被检查了几次。",codeTemplate:`remaining = {{start}}
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
`,controls:[{name:"start",label:"倒计时起点",values:[0,1,2,3,4,5],defaultIndex:3}],watch:["remaining"]},za=[{title:"三步倒计时",problem:"显示 3、2、1，然后显示结束。",steps:["remaining 从 3 开始。","每轮先显示，再减 1。","变成 0 后跳出循环，显示结束。"],answer:{code:`remaining = 3
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
`,stdout:`3
2
1
结束
`,stdin:""}},{title:"一开始就没剩余",problem:"从 0 开始。",steps:["0 > 0 不成立。","直接执行循环后面的输出。"],answer:{code:`remaining = 0
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
`,stdout:`结束
`,stdin:""}}],ja=[{id:"while-stop-m1",claim:"while 会先执行一次，再判断条件。",correction:"while 先判断；初始条件不成立时一次也不执行。"},{id:"while-stop-m2",claim:"只打印剩余数，也能让倒计时结束。",correction:"必须更新 remaining；打印本身不改变它。"}],wa=[{problem:"从 1 开始倒计时，会显示什么？",hint:"执行一轮后变成 0。",solution:["显示 1，然后结束。"],answer:{code:`remaining = 1
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
`,stdout:`1
结束
`,stdin:""},id:"while-stop-p1",difficulty:1,misconceptionTags:["while-stop-m1"]},{problem:"从 2 开始倒计时。",hint:"每轮减 1。",solution:["显示 2、1。"],answer:{code:`remaining = 2
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
`,stdout:`2
1
`,stdin:""},id:"while-stop-p2",difficulty:1,misconceptionTags:["while-stop-m2"]},{problem:"从 0 数到 2：先显示当前数，每次增加 1。",hint:"继续条件用 current < 3。",solution:["显示 0、1、2 后 current 变成 3。"],answer:{code:`current = 0
while current < 3:
    print(current)
    current = current + 1
`,stdout:`0
1
2
`,stdin:""},id:"while-stop-p3",difficulty:2,misconceptionTags:["while-stop-m1"]},{problem:"剩余数是 0，while remaining > 0 的循环体运行几次？",hint:"先判断，不是先执行。",solution:["循环体运行 0 次。"],answer:{code:`remaining = 0
times = 0
while remaining > 0:
    times = times + 1
    remaining = remaining - 1
print(times)
`,stdout:`0
`,stdin:""},id:"while-stop-p4",difficulty:2,misconceptionTags:["while-stop-m2"]}],$a={question:"想让倒计时结束，每轮需要做什么？",correctIndex:1,choices:["只显示剩余数","减少剩余数","把剩余数重设为 3"],explanation:"更新变量，才能让下一轮的判断改变。",feedback:["只显示不改变剩余数，条件会一直成立。","对，每轮减 1，最终到达 0。","每轮重设为 3，会一直无法结束。"]},_a=["for-range"],ka=2,Ta=["while-stop-m1","while-stop-m2"],Na={author:"AI-generated",version:"0.2.1",status:"revised",humanReviewed:!1},Ea=["python-tutorial","python-control"],Ca=[],Ia={id:pa,chapterId:da,number:ca,title:ra,subtitle:ma,concept:va,intuition:ya,objectives:ba,body:fa,formalDefinition:ga,derivation:ha,interactiveVisual:xa,workedExamples:za,commonMistakes:ja,practice:wa,learningCheck:$a,prerequisites:_a,difficulty:ka,misconceptionTags:Ta,provenance:Na,sources:Ea,furtherReading:Ca},qa="0.2.1",Sa=["从空文件写出可运行的程序","理解类型、分支、循环和数据容器","拆分函数并处理错误输入","读写小型文本、JSON 和 CSV 文件","为命令行项目编写边界与集成测试"],Va=[{id:"chapter-1",title:"开始编程",objective:"能运行脚本、区分文本与数值并完成基本输入输出。",lessons:["first-program","names-types","numbers","strings-input"]},{id:"chapter-2",title:"控制执行",objective:"能读懂分支和循环，定位边界错误并设计停止条件。",lessons:["conditions","for-range","while-stop","debugging"]},{id:"chapter-3",title:"组织数据",objective:"从购物清单和价格表出发，学习按位置、按名称和按是否出现组织数据。",lessons:["lists","dictionaries","tuples-sets","comprehensions"]},{id:"chapter-4",title:"组织程序",objective:"能编写函数、设计接口、导入模块并处理预期异常。",lessons:["functions","arguments","modules","exceptions"]},{id:"chapter-5",title:"完成应用",objective:"能处理文件、验证格式、测试边界并交付命令行工具。",lessons:["text-files","json-csv","testing","capstone"]}],Pa=[{id:"python-tutorial",title:"Python 3.13 Tutorial",url:"https://docs.python.org/3.13/tutorial/",purpose:"用于核对语言入门范围；本书为零基础读者重新编写说明和例题。"},{id:"python-types",title:"Built-in Types",url:"https://docs.python.org/3.13/library/stdtypes.html",purpose:"核对类型、真值、赋值相关操作与容器语义。"},{id:"python-floating",title:"Floating-Point Arithmetic",url:"https://docs.python.org/3.13/tutorial/floatingpoint.html",purpose:"核对浮点表示误差与近似比较。"},{id:"python-input",title:"Built-in Functions",url:"https://docs.python.org/3.13/library/functions.html",purpose:"核对 input、int、print、len、sorted 的行为。"},{id:"python-control",title:"More Control Flow Tools",url:"https://docs.python.org/3.13/tutorial/controlflow.html",purpose:"核对循环、函数、默认参数与调用语义。"},{id:"python-errors",title:"Errors and Exceptions",url:"https://docs.python.org/3.13/tutorial/errors.html",purpose:"核对异常传播、捕获与主动抛出。"},{id:"python-data",title:"Data Structures",url:"https://docs.python.org/3.13/tutorial/datastructures.html",purpose:"核对列表、元组、字典、集合与推导式。"},{id:"python-modules",title:"Modules and venv",url:"https://docs.python.org/3.13/tutorial/modules.html",purpose:"核对模块、主入口与导入；环境部分另参见 venv。"},{id:"python-venv",title:"venv",url:"https://docs.python.org/3.13/library/venv.html",purpose:"核对虚拟环境创建与平台命令。"},{id:"python-io",title:"Input and Output",url:"https://docs.python.org/3.13/tutorial/inputoutput.html",purpose:"核对路径之外的文件模式、UTF-8、with 与序列化。"},{id:"python-pathlib",title:"pathlib",url:"https://docs.python.org/3.13/library/pathlib.html",purpose:"核对相对路径、目录创建与文本读写。"},{id:"python-formats",title:"json",url:"https://docs.python.org/3.13/library/json.html",purpose:"核对 JSON 映射、ensure_ascii 与往返限制；CSV 另参见 csv。"},{id:"python-csv",title:"csv",url:"https://docs.python.org/3.13/library/csv.html",purpose:"核对表格解析、字符串字段、额外列与换行规则。"},{id:"python-unittest",title:"unittest",url:"https://docs.python.org/3.13/library/unittest.html",purpose:"核对测试发现、断言与错误输入检查。"},{id:"python-argparse",title:"argparse",url:"https://docs.python.org/3.13/library/argparse.html",purpose:"核对命令行参数、帮助与退出码。"}],$={version:qa,outcomes:Sa,chapters:Va,sources:Pa},Ra=JSON.parse(`{"first-program":{"0":{"code":"print('你好')\\nprint(\\"我开始学 Python\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":"你好\\n"},{"line":null,"scope":"<module>","variables":{},"stdout":"你好\\n我开始学 Python\\n"}],"stdout":"你好\\n我开始学 Python\\n"},"1":{"code":"print('早上好')\\nprint(\\"我开始学 Python\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":"早上好\\n"},{"line":null,"scope":"<module>","variables":{},"stdout":"早上好\\n我开始学 Python\\n"}],"stdout":"早上好\\n我开始学 Python\\n"},"2":{"code":"print('你好，小林')\\nprint(\\"我开始学 Python\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":"你好，小林\\n"},{"line":null,"scope":"<module>","variables":{},"stdout":"你好，小林\\n我开始学 Python\\n"}],"stdout":"你好，小林\\n我开始学 Python\\n"}},"names-types":{"0":{"code":"apples = 0\\napples = apples + 2\\nprint(apples)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"apples":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"apples":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"apples":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n"}],"stdout":"2\\n"},"1":{"code":"apples = 1\\napples = apples + 2\\nprint(apples)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"apples":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"apples":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"apples":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"2":{"code":"apples = 2\\napples = apples + 2\\nprint(apples)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"apples":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"apples":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"apples":{"value":"4","type":"int","scope":"<module>"}},"stdout":"4\\n"}],"stdout":"4\\n"},"3":{"code":"apples = 3\\napples = apples + 2\\nprint(apples)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"apples":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"apples":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"apples":{"value":"5","type":"int","scope":"<module>"}},"stdout":"5\\n"}],"stdout":"5\\n"},"4":{"code":"apples = 4\\napples = apples + 2\\nprint(apples)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"apples":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"apples":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"apples":{"value":"6","type":"int","scope":"<module>"}},"stdout":"6\\n"}],"stdout":"6\\n"},"5":{"code":"apples = 5\\napples = apples + 2\\nprint(apples)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"apples":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"apples":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"apples":{"value":"7","type":"int","scope":"<module>"}},"stdout":"7\\n"}],"stdout":"7\\n"}},"numbers":{"0.0":{"code":"total = 0\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n0\\n"}],"stdout":"0\\n0\\n"},"0.1":{"code":"total = 0\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n0\\n"}],"stdout":"0\\n0\\n"},"0.2":{"code":"total = 0\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n0\\n"}],"stdout":"0\\n0\\n"},"0.3":{"code":"total = 0\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n0\\n"}],"stdout":"0\\n0\\n"},"0.4":{"code":"total = 0\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"0","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n0\\n"}],"stdout":"0\\n0\\n"},"1.0":{"code":"total = 1\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n0\\n"}],"stdout":"1\\n0\\n"},"1.1":{"code":"total = 1\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n1\\n"}],"stdout":"0\\n1\\n"},"1.2":{"code":"total = 1\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n1\\n"}],"stdout":"0\\n1\\n"},"1.3":{"code":"total = 1\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n1\\n"}],"stdout":"0\\n1\\n"},"1.4":{"code":"total = 1\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"1","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"0\\n1\\n"}],"stdout":"0\\n1\\n"},"2.0":{"code":"total = 2\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n0\\n"}],"stdout":"2\\n0\\n"},"2.1":{"code":"total = 2\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n0\\n"}],"stdout":"1\\n0\\n"},"2.2":{"code":"total = 2\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"0\\n2\\n"}],"stdout":"0\\n2\\n"},"2.3":{"code":"total = 2\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"0\\n2\\n"}],"stdout":"0\\n2\\n"},"2.4":{"code":"total = 2\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"2","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"0\\n2\\n"}],"stdout":"0\\n2\\n"},"3.0":{"code":"total = 3\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n0\\n"}],"stdout":"3\\n0\\n"},"3.1":{"code":"total = 3\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n1\\n"}],"stdout":"1\\n1\\n"},"3.2":{"code":"total = 3\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n0\\n"}],"stdout":"1\\n0\\n"},"3.3":{"code":"total = 3\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"0\\n3\\n"}],"stdout":"0\\n3\\n"},"3.4":{"code":"total = 3\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"3","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"0\\n3\\n"}],"stdout":"0\\n3\\n"},"4.0":{"code":"total = 4\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n0\\n"}],"stdout":"4\\n0\\n"},"4.1":{"code":"total = 4\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n0\\n"}],"stdout":"2\\n0\\n"},"4.2":{"code":"total = 4\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n1\\n"}],"stdout":"1\\n1\\n"},"4.3":{"code":"total = 4\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n0\\n"}],"stdout":"1\\n0\\n"},"4.4":{"code":"total = 4\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"4","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"0","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"0\\n4\\n"}],"stdout":"0\\n4\\n"},"5.0":{"code":"total = 5\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n0\\n"}],"stdout":"5\\n0\\n"},"5.1":{"code":"total = 5\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n"}],"stdout":"2\\n1\\n"},"5.2":{"code":"total = 5\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"1\\n2\\n"}],"stdout":"1\\n2\\n"},"5.3":{"code":"total = 5\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n1\\n"}],"stdout":"1\\n1\\n"},"5.4":{"code":"total = 5\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"5","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n0\\n"}],"stdout":"1\\n0\\n"},"6.0":{"code":"total = 6\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"6\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"6\\n0\\n"}],"stdout":"6\\n0\\n"},"6.1":{"code":"total = 6\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n0\\n"}],"stdout":"3\\n0\\n"},"6.2":{"code":"total = 6\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n0\\n"}],"stdout":"2\\n0\\n"},"6.3":{"code":"total = 6\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"1\\n2\\n"}],"stdout":"1\\n2\\n"},"6.4":{"code":"total = 6\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"6","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n1\\n"}],"stdout":"1\\n1\\n"},"7.0":{"code":"total = 7\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"7\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"7\\n0\\n"}],"stdout":"7\\n0\\n"},"7.1":{"code":"total = 7\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n1\\n"}],"stdout":"3\\n1\\n"},"7.2":{"code":"total = 7\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n"}],"stdout":"2\\n1\\n"},"7.3":{"code":"total = 7\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"1\\n3\\n"}],"stdout":"1\\n3\\n"},"7.4":{"code":"total = 7\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"7","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"1\\n2\\n"}],"stdout":"1\\n2\\n"},"8.0":{"code":"total = 8\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"8\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"8\\n0\\n"}],"stdout":"8\\n0\\n"},"8.1":{"code":"total = 8\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n0\\n"}],"stdout":"4\\n0\\n"},"8.2":{"code":"total = 8\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n2\\n"}],"stdout":"2\\n2\\n"},"8.3":{"code":"total = 8\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n0\\n"}],"stdout":"2\\n0\\n"},"8.4":{"code":"total = 8\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"8","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"1\\n3\\n"}],"stdout":"1\\n3\\n"},"9.0":{"code":"total = 9\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"9\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"9\\n0\\n"}],"stdout":"9\\n0\\n"},"9.1":{"code":"total = 9\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n1\\n"}],"stdout":"4\\n1\\n"},"9.2":{"code":"total = 9\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n0\\n"}],"stdout":"3\\n0\\n"},"9.3":{"code":"total = 9\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n"}],"stdout":"2\\n1\\n"},"9.4":{"code":"total = 9\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"9","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"1","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"1\\n4\\n"}],"stdout":"1\\n4\\n"},"10.0":{"code":"total = 10\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"10\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"10\\n0\\n"}],"stdout":"10\\n0\\n"},"10.1":{"code":"total = 10\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n0\\n"}],"stdout":"5\\n0\\n"},"10.2":{"code":"total = 10\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n1\\n"}],"stdout":"3\\n1\\n"},"10.3":{"code":"total = 10\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n2\\n"}],"stdout":"2\\n2\\n"},"10.4":{"code":"total = 10\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"10","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n0\\n"}],"stdout":"2\\n0\\n"},"11.0":{"code":"total = 11\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"11","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"11","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"11","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"11\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"11","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"11\\n0\\n"}],"stdout":"11\\n0\\n"},"11.1":{"code":"total = 11\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"5\\n1\\n"}],"stdout":"5\\n1\\n"},"11.2":{"code":"total = 11\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n"}],"stdout":"3\\n2\\n"},"11.3":{"code":"total = 11\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"2\\n3\\n"}],"stdout":"2\\n3\\n"},"11.4":{"code":"total = 11\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"11","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n"}],"stdout":"2\\n1\\n"},"12.0":{"code":"total = 12\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"12","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"12","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"12","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"12\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"12","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"12\\n0\\n"}],"stdout":"12\\n0\\n"},"12.1":{"code":"total = 12\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"6\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"6\\n0\\n"}],"stdout":"6\\n0\\n"},"12.2":{"code":"total = 12\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n0\\n"}],"stdout":"4\\n0\\n"},"12.3":{"code":"total = 12\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n0\\n"}],"stdout":"3\\n0\\n"},"12.4":{"code":"total = 12\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"12","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n2\\n"}],"stdout":"2\\n2\\n"},"13.0":{"code":"total = 13\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"13","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"13","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"13","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"13\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"13","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"13\\n0\\n"}],"stdout":"13\\n0\\n"},"13.1":{"code":"total = 13\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"6\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"6\\n1\\n"}],"stdout":"6\\n1\\n"},"13.2":{"code":"total = 13\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n1\\n"}],"stdout":"4\\n1\\n"},"13.3":{"code":"total = 13\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n1\\n"}],"stdout":"3\\n1\\n"},"13.4":{"code":"total = 13\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"13","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"2\\n3\\n"}],"stdout":"2\\n3\\n"},"14.0":{"code":"total = 14\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"14","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"14","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"14","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"14\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"14","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"14\\n0\\n"}],"stdout":"14\\n0\\n"},"14.1":{"code":"total = 14\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"7\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"7\\n0\\n"}],"stdout":"7\\n0\\n"},"14.2":{"code":"total = 14\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"4\\n2\\n"}],"stdout":"4\\n2\\n"},"14.3":{"code":"total = 14\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n"}],"stdout":"3\\n2\\n"},"14.4":{"code":"total = 14\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"14","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"2","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"2\\n4\\n"}],"stdout":"2\\n4\\n"},"15.0":{"code":"total = 15\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"15","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"15","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"15\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"15","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"15\\n0\\n"}],"stdout":"15\\n0\\n"},"15.1":{"code":"total = 15\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"7\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"7","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"7\\n1\\n"}],"stdout":"7\\n1\\n"},"15.2":{"code":"total = 15\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n0\\n"}],"stdout":"5\\n0\\n"},"15.3":{"code":"total = 15\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n3\\n"}],"stdout":"3\\n3\\n"},"15.4":{"code":"total = 15\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"15","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n0\\n"}],"stdout":"3\\n0\\n"},"16.0":{"code":"total = 16\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"16","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"16","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"16","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"16\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"16","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"16\\n0\\n"}],"stdout":"16\\n0\\n"},"16.1":{"code":"total = 16\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"8\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"8\\n0\\n"}],"stdout":"8\\n0\\n"},"16.2":{"code":"total = 16\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"5\\n1\\n"}],"stdout":"5\\n1\\n"},"16.3":{"code":"total = 16\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n0\\n"}],"stdout":"4\\n0\\n"},"16.4":{"code":"total = 16\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"16","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n1\\n"}],"stdout":"3\\n1\\n"},"17.0":{"code":"total = 17\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"17","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"17","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"17","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"17\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"17","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"17\\n0\\n"}],"stdout":"17\\n0\\n"},"17.1":{"code":"total = 17\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"8\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"8","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"8\\n1\\n"}],"stdout":"8\\n1\\n"},"17.2":{"code":"total = 17\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"5\\n2\\n"}],"stdout":"5\\n2\\n"},"17.3":{"code":"total = 17\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n1\\n"}],"stdout":"4\\n1\\n"},"17.4":{"code":"total = 17\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"17","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n"}],"stdout":"3\\n2\\n"},"18.0":{"code":"total = 18\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"18","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"18","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"18","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"18\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"18","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"18\\n0\\n"}],"stdout":"18\\n0\\n"},"18.1":{"code":"total = 18\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"9\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"9\\n0\\n"}],"stdout":"9\\n0\\n"},"18.2":{"code":"total = 18\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"6\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"6\\n0\\n"}],"stdout":"6\\n0\\n"},"18.3":{"code":"total = 18\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"4\\n2\\n"}],"stdout":"4\\n2\\n"},"18.4":{"code":"total = 18\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"18","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n3\\n"}],"stdout":"3\\n3\\n"},"19.0":{"code":"total = 19\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"19","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"19","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"19","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"19\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"19","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"19\\n0\\n"}],"stdout":"19\\n0\\n"},"19.1":{"code":"total = 19\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"9\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"9","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"9\\n1\\n"}],"stdout":"9\\n1\\n"},"19.2":{"code":"total = 19\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"6\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"1","type":"int","scope":"<module>"}},"stdout":"6\\n1\\n"}],"stdout":"6\\n1\\n"},"19.3":{"code":"total = 19\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"3","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n"}],"stdout":"4\\n3\\n"},"19.4":{"code":"total = 19\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"19","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"3","type":"int","scope":"<module>"},"left":{"value":"4","type":"int","scope":"<module>"}},"stdout":"3\\n4\\n"}],"stdout":"3\\n4\\n"},"20.0":{"code":"total = 20\\nsize = 1\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"20","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"20","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"20","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"20\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"1","type":"int","scope":"<module>"},"bags":{"value":"20","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"20\\n0\\n"}],"stdout":"20\\n0\\n"},"20.1":{"code":"total = 20\\nsize = 2\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"10\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"2","type":"int","scope":"<module>"},"bags":{"value":"10","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"10\\n0\\n"}],"stdout":"10\\n0\\n"},"20.2":{"code":"total = 20\\nsize = 3\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"6\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"3","type":"int","scope":"<module>"},"bags":{"value":"6","type":"int","scope":"<module>"},"left":{"value":"2","type":"int","scope":"<module>"}},"stdout":"6\\n2\\n"}],"stdout":"6\\n2\\n"},"20.3":{"code":"total = 20\\nsize = 4\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"4","type":"int","scope":"<module>"},"bags":{"value":"5","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n0\\n"}],"stdout":"5\\n0\\n"},"20.4":{"code":"total = 20\\nsize = 5\\nbags = total // size\\nleft = total % size\\nprint(bags)\\nprint(left)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":null,"scope":"<module>","variables":{"total":{"value":"20","type":"int","scope":"<module>"},"size":{"value":"5","type":"int","scope":"<module>"},"bags":{"value":"4","type":"int","scope":"<module>"},"left":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n0\\n"}],"stdout":"4\\n0\\n"}},"strings-input":{"0":{"code":"text = '0'\\ncount = int(text)\\nprint(count + 2)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"},"count":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"},"count":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n"}],"stdout":"2\\n"},"1":{"code":"text = '1'\\ncount = int(text)\\nprint(count + 2)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'1'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'1'","type":"str","scope":"<module>"},"count":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'1'","type":"str","scope":"<module>"},"count":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"2":{"code":"text = '3'\\ncount = int(text)\\nprint(count + 2)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"},"count":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"},"count":{"value":"3","type":"int","scope":"<module>"}},"stdout":"5\\n"}],"stdout":"5\\n"},"3":{"code":"text = '5'\\ncount = int(text)\\nprint(count + 2)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'5'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'5'","type":"str","scope":"<module>"},"count":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'5'","type":"str","scope":"<module>"},"count":{"value":"5","type":"int","scope":"<module>"}},"stdout":"7\\n"}],"stdout":"7\\n"}},"conditions":{"0":{"code":"money = 0\\nif money >= 5:\\n    print(\\"可以乘车\\")\\nelse:\\n    print(\\"钱不够\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"money":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"money":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"money":{"value":"0","type":"int","scope":"<module>"}},"stdout":"钱不够\\n"}],"stdout":"钱不够\\n"},"1":{"code":"money = 3\\nif money >= 5:\\n    print(\\"可以乘车\\")\\nelse:\\n    print(\\"钱不够\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"money":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"money":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"money":{"value":"3","type":"int","scope":"<module>"}},"stdout":"钱不够\\n"}],"stdout":"钱不够\\n"},"2":{"code":"money = 4\\nif money >= 5:\\n    print(\\"可以乘车\\")\\nelse:\\n    print(\\"钱不够\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"money":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"money":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"money":{"value":"4","type":"int","scope":"<module>"}},"stdout":"钱不够\\n"}],"stdout":"钱不够\\n"},"3":{"code":"money = 5\\nif money >= 5:\\n    print(\\"可以乘车\\")\\nelse:\\n    print(\\"钱不够\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"money":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"money":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"money":{"value":"5","type":"int","scope":"<module>"}},"stdout":"可以乘车\\n"}],"stdout":"可以乘车\\n"},"4":{"code":"money = 6\\nif money >= 5:\\n    print(\\"可以乘车\\")\\nelse:\\n    print(\\"钱不够\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"money":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"money":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"money":{"value":"6","type":"int","scope":"<module>"}},"stdout":"可以乘车\\n"}],"stdout":"可以乘车\\n"},"5":{"code":"money = 8\\nif money >= 5:\\n    print(\\"可以乘车\\")\\nelse:\\n    print(\\"钱不够\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"money":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"money":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"money":{"value":"8","type":"int","scope":"<module>"}},"stdout":"可以乘车\\n"}],"stdout":"可以乘车\\n"}},"for-range":{"0":{"code":"end = 0\\ntotal = 0\\nfor number in range(1, end + 1):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"end":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"0","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"end":{"value":"0","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"end":{"value":"0","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"}],"stdout":"0\\n"},"1":{"code":"end = 1\\ntotal = 0\\nfor number in range(1, end + 1):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"end":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"1","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"1","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"end":{"value":"1","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"end":{"value":"1","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n"}],"stdout":"1\\n"},"2":{"code":"end = 2\\ntotal = 0\\nfor number in range(1, end + 1):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"end":{"value":"2","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"3":{"code":"end = 3\\ntotal = 0\\nfor number in range(1, end + 1):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"end":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":"6\\n"}],"stdout":"6\\n"},"4":{"code":"end = 4\\ntotal = 0\\nfor number in range(1, end + 1):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"end":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":"10\\n"}],"stdout":"10\\n"},"5":{"code":"end = 5\\ntotal = 0\\nfor number in range(1, end + 1):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"5","type":"int","scope":"<module>"},"total":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"5","type":"int","scope":"<module>"},"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"5","type":"int","scope":"<module>"},"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"end":{"value":"5","type":"int","scope":"<module>"},"number":{"value":"5","type":"int","scope":"<module>"},"total":{"value":"15","type":"int","scope":"<module>"}},"stdout":"15\\n"}],"stdout":"15\\n"}},"while-stop":{"0":{"code":"remaining = 0\\nwhile remaining > 0:\\n    print(remaining)\\n    remaining = remaining - 1\\nprint(\\"结束\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"结束\\n"}],"stdout":"结束\\n"},"1":{"code":"remaining = 1\\nwhile remaining > 0:\\n    print(remaining)\\n    remaining = remaining - 1\\nprint(\\"结束\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":5,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n"},{"line":null,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"1\\n结束\\n"}],"stdout":"1\\n结束\\n"},"2":{"code":"remaining = 2\\nwhile remaining > 0:\\n    print(remaining)\\n    remaining = remaining - 1\\nprint(\\"结束\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n"},{"line":5,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n"},{"line":null,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"2\\n1\\n结束\\n"}],"stdout":"2\\n1\\n结束\\n"},"3":{"code":"remaining = 3\\nwhile remaining > 0:\\n    print(remaining)\\n    remaining = remaining - 1\\nprint(\\"结束\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n1\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n1\\n"},{"line":5,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n1\\n"},{"line":null,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"3\\n2\\n1\\n结束\\n"}],"stdout":"3\\n2\\n1\\n结束\\n"},"4":{"code":"remaining = 4\\nwhile remaining > 0:\\n    print(remaining)\\n    remaining = remaining - 1\\nprint(\\"结束\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"4","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":"4\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n2\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n2\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n2\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n2\\n1\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n2\\n1\\n"},{"line":5,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n2\\n1\\n"},{"line":null,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"4\\n3\\n2\\n1\\n结束\\n"}],"stdout":"4\\n3\\n2\\n1\\n结束\\n"},"5":{"code":"remaining = 5\\nwhile remaining > 0:\\n    print(remaining)\\n    remaining = remaining - 1\\nprint(\\"结束\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"5","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"4","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"4","type":"int","scope":"<module>"}},"stdout":"5\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"4","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"3","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"2","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n2\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n2\\n"},{"line":3,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n2\\n"},{"line":4,"scope":"<module>","variables":{"remaining":{"value":"1","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n2\\n1\\n"},{"line":2,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n2\\n1\\n"},{"line":5,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n2\\n1\\n"},{"line":null,"scope":"<module>","variables":{"remaining":{"value":"0","type":"int","scope":"<module>"}},"stdout":"5\\n4\\n3\\n2\\n1\\n结束\\n"}],"stdout":"5\\n4\\n3\\n2\\n1\\n结束\\n"}},"debugging":{"0":{"code":"stop = 3\\ntotal = 0\\nfor number in range(1, stop):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"stop":{"value":"3","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"1":{"code":"stop = 4\\ntotal = 0\\nfor number in range(1, stop):\\n    total = total + number\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"1","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"2","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"stop":{"value":"4","type":"int","scope":"<module>"},"number":{"value":"3","type":"int","scope":"<module>"},"total":{"value":"6","type":"int","scope":"<module>"}},"stdout":"6\\n"}],"stdout":"6\\n"}},"lists":{"0":{"code":"items = [\\"苹果\\", \\"面包\\"]\\nitems.append('牛奶')\\nfor item in items:\\n    print(item)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包']","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"},"item":{"value":"'苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"},"item":{"value":"'苹果'","type":"str","scope":"<module>"}},"stdout":"苹果\\n"},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"},"item":{"value":"'面包'","type":"str","scope":"<module>"}},"stdout":"苹果\\n"},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"},"item":{"value":"'面包'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n"},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"},"item":{"value":"'牛奶'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n"},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"},"item":{"value":"'牛奶'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n牛奶\\n"},{"line":null,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '牛奶']","type":"list","scope":"<module>"},"item":{"value":"'牛奶'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n牛奶\\n"}],"stdout":"苹果\\n面包\\n牛奶\\n"},"1":{"code":"items = [\\"苹果\\", \\"面包\\"]\\nitems.append('鸡蛋')\\nfor item in items:\\n    print(item)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包']","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"},"item":{"value":"'苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"},"item":{"value":"'苹果'","type":"str","scope":"<module>"}},"stdout":"苹果\\n"},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"},"item":{"value":"'面包'","type":"str","scope":"<module>"}},"stdout":"苹果\\n"},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"},"item":{"value":"'面包'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n"},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"},"item":{"value":"'鸡蛋'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n"},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"},"item":{"value":"'鸡蛋'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n鸡蛋\\n"},{"line":null,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '鸡蛋']","type":"list","scope":"<module>"},"item":{"value":"'鸡蛋'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n鸡蛋\\n"}],"stdout":"苹果\\n面包\\n鸡蛋\\n"},"2":{"code":"items = [\\"苹果\\", \\"面包\\"]\\nitems.append('米饭')\\nfor item in items:\\n    print(item)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包']","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"},"item":{"value":"'苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"},"item":{"value":"'苹果'","type":"str","scope":"<module>"}},"stdout":"苹果\\n"},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"},"item":{"value":"'面包'","type":"str","scope":"<module>"}},"stdout":"苹果\\n"},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"},"item":{"value":"'面包'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n"},{"line":4,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"},"item":{"value":"'米饭'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n"},{"line":3,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"},"item":{"value":"'米饭'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n米饭\\n"},{"line":null,"scope":"<module>","variables":{"items":{"value":"['苹果', '面包', '米饭']","type":"list","scope":"<module>"},"item":{"value":"'米饭'","type":"str","scope":"<module>"}},"stdout":"苹果\\n面包\\n米饭\\n"}],"stdout":"苹果\\n面包\\n米饭\\n"}},"dictionaries":{"0":{"code":"prices = {\\"苹果\\": 3, \\"面包\\": 5}\\nname = '苹果'\\nprice = prices.get(name, 0)\\nprint(price)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'苹果'","type":"str","scope":"<module>"},"price":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'苹果'","type":"str","scope":"<module>"},"price":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"1":{"code":"prices = {\\"苹果\\": 3, \\"面包\\": 5}\\nname = '面包'\\nprice = prices.get(name, 0)\\nprint(price)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'面包'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'面包'","type":"str","scope":"<module>"},"price":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'面包'","type":"str","scope":"<module>"},"price":{"value":"5","type":"int","scope":"<module>"}},"stdout":"5\\n"}],"stdout":"5\\n"},"2":{"code":"prices = {\\"苹果\\": 3, \\"面包\\": 5}\\nname = '米饭'\\nprice = prices.get(name, 0)\\nprint(price)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'米饭'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'米饭'","type":"str","scope":"<module>"},"price":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"prices":{"value":"{'苹果': 3, '面包': 5}","type":"dict","scope":"<module>"},"name":{"value":"'米饭'","type":"str","scope":"<module>"},"price":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"}],"stdout":"0\\n"}},"tuples-sets":{"0":{"code":"values = [1, 1, 2]\\nunique = set(values)\\nprint(len(unique))\\nprint(2 in unique)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"values":{"value":"[1, 1, 2]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"values":{"value":"[1, 1, 2]","type":"list","scope":"<module>"},"unique":{"value":"{1, 2}","type":"set","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 1, 2]","type":"list","scope":"<module>"},"unique":{"value":"{1, 2}","type":"set","scope":"<module>"}},"stdout":"2\\n"},{"line":null,"scope":"<module>","variables":{"values":{"value":"[1, 1, 2]","type":"list","scope":"<module>"},"unique":{"value":"{1, 2}","type":"set","scope":"<module>"}},"stdout":"2\\nTrue\\n"}],"stdout":"2\\nTrue\\n"},"1":{"code":"values = [1, 2, 3]\\nunique = set(values)\\nprint(len(unique))\\nprint(2 in unique)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"unique":{"value":"{1, 2, 3}","type":"set","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"unique":{"value":"{1, 2, 3}","type":"set","scope":"<module>"}},"stdout":"3\\n"},{"line":null,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"unique":{"value":"{1, 2, 3}","type":"set","scope":"<module>"}},"stdout":"3\\nTrue\\n"}],"stdout":"3\\nTrue\\n"},"2":{"code":"values = []\\nunique = set(values)\\nprint(len(unique))\\nprint(2 in unique)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"values":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"values":{"value":"[]","type":"list","scope":"<module>"},"unique":{"value":"set()","type":"set","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[]","type":"list","scope":"<module>"},"unique":{"value":"set()","type":"set","scope":"<module>"}},"stdout":"0\\n"},{"line":null,"scope":"<module>","variables":{"values":{"value":"[]","type":"list","scope":"<module>"},"unique":{"value":"set()","type":"set","scope":"<module>"}},"stdout":"0\\nFalse\\n"}],"stdout":"0\\nFalse\\n"}},"comprehensions":{"0":{"code":"values = [1, 2, 3]\\nminimum = 1\\nresult = []\\nfor value in values:\\n    if value >= minimum:\\n        result.append(value * 2)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[2]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[2]","type":"list","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[2]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[2, 4]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[2, 4]","type":"list","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[2, 4]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[2, 4, 6]","type":"list","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[2, 4, 6]","type":"list","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"1","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[2, 4, 6]","type":"list","scope":"<module>"}},"stdout":"[2, 4, 6]\\n"}],"stdout":"[2, 4, 6]\\n"},"1":{"code":"values = [1, 2, 3]\\nminimum = 2\\nresult = []\\nfor value in values:\\n    if value >= minimum:\\n        result.append(value * 2)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[4]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[4]","type":"list","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[4]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[4, 6]","type":"list","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[4, 6]","type":"list","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"2","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[4, 6]","type":"list","scope":"<module>"}},"stdout":"[4, 6]\\n"}],"stdout":"[4, 6]\\n"},"2":{"code":"values = [1, 2, 3]\\nminimum = 3\\nresult = []\\nfor value in values:\\n    if value >= minimum:\\n        result.append(value * 2)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[6]","type":"list","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[6]","type":"list","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"3","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[6]","type":"list","scope":"<module>"}},"stdout":"[6]\\n"}],"stdout":"[6]\\n"},"3":{"code":"values = [1, 2, 3]\\nminimum = 4\\nresult = []\\nfor value in values:\\n    if value >= minimum:\\n        result.append(value * 2)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"1","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"2","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"values":{"value":"[1, 2, 3]","type":"list","scope":"<module>"},"minimum":{"value":"4","type":"int","scope":"<module>"},"value":{"value":"3","type":"int","scope":"<module>"},"result":{"value":"[]","type":"list","scope":"<module>"}},"stdout":"[]\\n"}],"stdout":"[]\\n"}},"functions":{"0":{"code":"def double(number):\\n    return number * 2\\n\\nresult = double(0)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"0","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"}],"stdout":"0\\n"},"1":{"code":"def double(number):\\n    return number * 2\\n\\nresult = double(1)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"1","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"2","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"2","type":"int","scope":"<module>"}},"stdout":"2\\n"}],"stdout":"2\\n"},"2":{"code":"def double(number):\\n    return number * 2\\n\\nresult = double(2)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"2","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"4","type":"int","scope":"<module>"}},"stdout":"4\\n"}],"stdout":"4\\n"},"3":{"code":"def double(number):\\n    return number * 2\\n\\nresult = double(3)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"3","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"6","type":"int","scope":"<module>"}},"stdout":"6\\n"}],"stdout":"6\\n"},"4":{"code":"def double(number):\\n    return number * 2\\n\\nresult = double(4)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"4","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"8","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"8","type":"int","scope":"<module>"}},"stdout":"8\\n"}],"stdout":"8\\n"},"5":{"code":"def double(number):\\n    return number * 2\\n\\nresult = double(5)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"5","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"10","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"10","type":"int","scope":"<module>"}},"stdout":"10\\n"}],"stdout":"10\\n"}},"arguments":{"0":{"code":"def cost(price, count=1):\\n    return price * count\\n\\nresult = cost(3, 0)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"cost","variables":{"price":{"value":"3","type":"int","scope":"cost"},"count":{"value":"0","type":"int","scope":"cost"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"}],"stdout":"0\\n"},"1":{"code":"def cost(price, count=1):\\n    return price * count\\n\\nresult = cost(3, 1)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"cost","variables":{"price":{"value":"3","type":"int","scope":"cost"},"count":{"value":"1","type":"int","scope":"cost"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"2":{"code":"def cost(price, count=1):\\n    return price * count\\n\\nresult = cost(3, 2)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"cost","variables":{"price":{"value":"3","type":"int","scope":"cost"},"count":{"value":"2","type":"int","scope":"cost"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"6","type":"int","scope":"<module>"}},"stdout":"6\\n"}],"stdout":"6\\n"},"3":{"code":"def cost(price, count=1):\\n    return price * count\\n\\nresult = cost(3, 3)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"cost","variables":{"price":{"value":"3","type":"int","scope":"cost"},"count":{"value":"3","type":"int","scope":"cost"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"9","type":"int","scope":"<module>"}},"stdout":"9\\n"}],"stdout":"9\\n"},"4":{"code":"def cost(price, count=1):\\n    return price * count\\n\\nresult = cost(3, 4)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"cost","variables":{"price":{"value":"3","type":"int","scope":"cost"},"count":{"value":"4","type":"int","scope":"cost"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"result":{"value":"12","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"result":{"value":"12","type":"int","scope":"<module>"}},"stdout":"12\\n"}],"stdout":"12\\n"}},"modules":{"0":{"code":"import math\\nnumber = 0\\nresult = math.sqrt(number)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"number":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"number":{"value":"0","type":"int","scope":"<module>"},"result":{"value":"0.0","type":"float","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"number":{"value":"0","type":"int","scope":"<module>"},"result":{"value":"0.0","type":"float","scope":"<module>"}},"stdout":"0.0\\n"}],"stdout":"0.0\\n"},"1":{"code":"import math\\nnumber = 4\\nresult = math.sqrt(number)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"number":{"value":"4","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"number":{"value":"4","type":"int","scope":"<module>"},"result":{"value":"2.0","type":"float","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"number":{"value":"4","type":"int","scope":"<module>"},"result":{"value":"2.0","type":"float","scope":"<module>"}},"stdout":"2.0\\n"}],"stdout":"2.0\\n"},"2":{"code":"import math\\nnumber = 9\\nresult = math.sqrt(number)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"number":{"value":"9","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"number":{"value":"9","type":"int","scope":"<module>"},"result":{"value":"3.0","type":"float","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"number":{"value":"9","type":"int","scope":"<module>"},"result":{"value":"3.0","type":"float","scope":"<module>"}},"stdout":"3.0\\n"}],"stdout":"3.0\\n"},"3":{"code":"import math\\nnumber = 16\\nresult = math.sqrt(number)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"number":{"value":"16","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"number":{"value":"16","type":"int","scope":"<module>"},"result":{"value":"4.0","type":"float","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"number":{"value":"16","type":"int","scope":"<module>"},"result":{"value":"4.0","type":"float","scope":"<module>"}},"stdout":"4.0\\n"}],"stdout":"4.0\\n"},"4":{"code":"import math\\nnumber = 25\\nresult = math.sqrt(number)\\nprint(result)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"number":{"value":"25","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"number":{"value":"25","type":"int","scope":"<module>"},"result":{"value":"5.0","type":"float","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"number":{"value":"25","type":"int","scope":"<module>"},"result":{"value":"5.0","type":"float","scope":"<module>"}},"stdout":"5.0\\n"}],"stdout":"5.0\\n"}},"exceptions":{"0":{"code":"text = '3'\\ntry:\\n    count = int(text)\\n    if count < 0:\\n        print(\\"不能为负\\")\\n    else:\\n        print(count)\\nexcept ValueError:\\n    print(\\"请输入整数\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"},"count":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"},"count":{"value":"3","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'3'","type":"str","scope":"<module>"},"count":{"value":"3","type":"int","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"1":{"code":"text = '0'\\ntry:\\n    count = int(text)\\n    if count < 0:\\n        print(\\"不能为负\\")\\n    else:\\n        print(count)\\nexcept ValueError:\\n    print(\\"请输入整数\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"},"count":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"},"count":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'0'","type":"str","scope":"<module>"},"count":{"value":"0","type":"int","scope":"<module>"}},"stdout":"0\\n"}],"stdout":"0\\n"},"2":{"code":"text = '-2'\\ntry:\\n    count = int(text)\\n    if count < 0:\\n        print(\\"不能为负\\")\\n    else:\\n        print(count)\\nexcept ValueError:\\n    print(\\"请输入整数\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'-2'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'-2'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"text":{"value":"'-2'","type":"str","scope":"<module>"},"count":{"value":"-2","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"text":{"value":"'-2'","type":"str","scope":"<module>"},"count":{"value":"-2","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'-2'","type":"str","scope":"<module>"},"count":{"value":"-2","type":"int","scope":"<module>"}},"stdout":"不能为负\\n"}],"stdout":"不能为负\\n"},"3":{"code":"text = '三'\\ntry:\\n    count = int(text)\\n    if count < 0:\\n        print(\\"不能为负\\")\\n    else:\\n        print(count)\\nexcept ValueError:\\n    print(\\"请输入整数\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"text":{"value":"'三'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"text":{"value":"'三'","type":"str","scope":"<module>"}},"stdout":""},{"line":8,"scope":"<module>","variables":{"text":{"value":"'三'","type":"str","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"text":{"value":"'三'","type":"str","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"text":{"value":"'三'","type":"str","scope":"<module>"}},"stdout":"请输入整数\\n"}],"stdout":"请输入整数\\n"}},"text-files":{"0":{"code":"message = '买苹果'\\nwith open(\\"notes.txt\\", \\"w\\", encoding=\\"utf-8\\") as file:\\n    file.write(message)\\nwith open(\\"notes.txt\\", \\"r\\", encoding=\\"utf-8\\") as file:\\n    text = file.read()\\nprint(text)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":2,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"},"text":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"},"text":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"message":{"value":"'买苹果'","type":"str","scope":"<module>"},"text":{"value":"'买苹果'","type":"str","scope":"<module>"}},"stdout":"买苹果\\n"}],"stdout":"买苹果\\n"},"1":{"code":"message = '明天练习'\\nwith open(\\"notes.txt\\", \\"w\\", encoding=\\"utf-8\\") as file:\\n    file.write(message)\\nwith open(\\"notes.txt\\", \\"r\\", encoding=\\"utf-8\\") as file:\\n    text = file.read()\\nprint(text)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":""},{"line":2,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"},"text":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"},"text":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"message":{"value":"'明天练习'","type":"str","scope":"<module>"},"text":{"value":"'明天练习'","type":"str","scope":"<module>"}},"stdout":"明天练习\\n"}],"stdout":"明天练习\\n"},"2":{"code":"message = ''\\nwith open(\\"notes.txt\\", \\"w\\", encoding=\\"utf-8\\") as file:\\n    file.write(message)\\nwith open(\\"notes.txt\\", \\"r\\", encoding=\\"utf-8\\") as file:\\n    text = file.read()\\nprint(text)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"}},"stdout":""},{"line":2,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"},"text":{"value":"''","type":"str","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"},"text":{"value":"''","type":"str","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"message":{"value":"''","type":"str","scope":"<module>"},"text":{"value":"''","type":"str","scope":"<module>"}},"stdout":"\\n"}],"stdout":"\\n"}},"json-csv":{"0":{"code":"import json\\ndata = {\\"name\\": \\"小林\\", \\"count\\": 0}\\ntext = json.dumps(data, ensure_ascii=False)\\nrestored = json.loads(text)\\nprint(restored[\\"count\\"])\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 0}","type":"dict","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 0}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 0}'","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 0}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 0}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 0}","type":"dict","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 0}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 0}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 0}","type":"dict","scope":"<module>"}},"stdout":"0\\n"}],"stdout":"0\\n"},"1":{"code":"import json\\ndata = {\\"name\\": \\"小林\\", \\"count\\": 1}\\ntext = json.dumps(data, ensure_ascii=False)\\nrestored = json.loads(text)\\nprint(restored[\\"count\\"])\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 1}","type":"dict","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 1}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 1}'","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 1}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 1}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 1}","type":"dict","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 1}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 1}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 1}","type":"dict","scope":"<module>"}},"stdout":"1\\n"}],"stdout":"1\\n"},"2":{"code":"import json\\ndata = {\\"name\\": \\"小林\\", \\"count\\": 2}\\ntext = json.dumps(data, ensure_ascii=False)\\nrestored = json.loads(text)\\nprint(restored[\\"count\\"])\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 2}","type":"dict","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 2}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 2}'","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 2}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 2}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 2}","type":"dict","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 2}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 2}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 2}","type":"dict","scope":"<module>"}},"stdout":"2\\n"}],"stdout":"2\\n"},"3":{"code":"import json\\ndata = {\\"name\\": \\"小林\\", \\"count\\": 3}\\ntext = json.dumps(data, ensure_ascii=False)\\nrestored = json.loads(text)\\nprint(restored[\\"count\\"])\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 3}","type":"dict","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 3}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 3}'","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 3}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 3}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 3}","type":"dict","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 3}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 3}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 3}","type":"dict","scope":"<module>"}},"stdout":"3\\n"}],"stdout":"3\\n"},"4":{"code":"import json\\ndata = {\\"name\\": \\"小林\\", \\"count\\": 4}\\ntext = json.dumps(data, ensure_ascii=False)\\nrestored = json.loads(text)\\nprint(restored[\\"count\\"])\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{},"stdout":""},{"line":3,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 4}","type":"dict","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 4}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 4}'","type":"str","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 4}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 4}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 4}","type":"dict","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"data":{"value":"{'name': '小林', 'count': 4}","type":"dict","scope":"<module>"},"text":{"value":"'{\\"name\\": \\"小林\\", \\"count\\": 4}'","type":"str","scope":"<module>"},"restored":{"value":"{'name': '小林', 'count': 4}","type":"dict","scope":"<module>"}},"stdout":"4\\n"}],"stdout":"4\\n"}},"testing":{"0.0":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(0)\\nexpected = 0\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"0","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":"检查通过\\n"}],"stdout":"检查通过\\n"},"0.1":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(0)\\nexpected = 5\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"0","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"0.2":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(0)\\nexpected = 6\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"0","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"0.3":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(0)\\nexpected = -4\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"0","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"0","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"1.0":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(3)\\nexpected = 0\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"3","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"1.1":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(3)\\nexpected = 5\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"3","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"1.2":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(3)\\nexpected = 6\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"3","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":"检查通过\\n"}],"stdout":"检查通过\\n"},"1.3":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(3)\\nexpected = -4\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"3","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"6","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"2.0":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(-2)\\nexpected = 0\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"-2","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"0","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"2.1":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(-2)\\nexpected = 5\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"-2","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"5","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"2.2":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(-2)\\nexpected = 6\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"-2","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":9,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"6","type":"int","scope":"<module>"}},"stdout":"检查失败\\n"}],"stdout":"检查失败\\n"},"2.3":{"code":"def double(number):\\n    return number * 2\\n\\nactual = double(-2)\\nexpected = -4\\nif actual == expected:\\n    print(\\"检查通过\\")\\nelse:\\n    print(\\"检查失败\\")\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":4,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"double","variables":{"number":{"value":"-2","type":"int","scope":"double"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":6,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":7,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"actual":{"value":"-4","type":"int","scope":"<module>"},"expected":{"value":"-4","type":"int","scope":"<module>"}},"stdout":"检查通过\\n"}],"stdout":"检查通过\\n"}},"capstone":{"0":{"code":"amounts = [125, 200, 50]\\ntotal = 0\\nfor amount in amounts:\\n    total = total + amount\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"50","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"50","type":"int","scope":"<module>"},"total":{"value":"375","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"50","type":"int","scope":"<module>"},"total":{"value":"375","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 50]","type":"list","scope":"<module>"},"amount":{"value":"50","type":"int","scope":"<module>"},"total":{"value":"375","type":"int","scope":"<module>"}},"stdout":"375\\n"}],"stdout":"375\\n"},"1":{"code":"amounts = [125, 200, 75]\\ntotal = 0\\nfor amount in amounts:\\n    total = total + amount\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"75","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"75","type":"int","scope":"<module>"},"total":{"value":"400","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"75","type":"int","scope":"<module>"},"total":{"value":"400","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 75]","type":"list","scope":"<module>"},"amount":{"value":"75","type":"int","scope":"<module>"},"total":{"value":"400","type":"int","scope":"<module>"}},"stdout":"400\\n"}],"stdout":"400\\n"},"2":{"code":"amounts = [125, 200, 100]\\ntotal = 0\\nfor amount in amounts:\\n    total = total + amount\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"100","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"100","type":"int","scope":"<module>"},"total":{"value":"425","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"100","type":"int","scope":"<module>"},"total":{"value":"425","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 100]","type":"list","scope":"<module>"},"amount":{"value":"100","type":"int","scope":"<module>"},"total":{"value":"425","type":"int","scope":"<module>"}},"stdout":"425\\n"}],"stdout":"425\\n"},"3":{"code":"amounts = [125, 200, 125]\\ntotal = 0\\nfor amount in amounts:\\n    total = total + amount\\nprint(total)\\n","steps":[{"line":1,"scope":"<module>","variables":{},"stdout":""},{"line":2,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"0","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"125","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"200","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":4,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"325","type":"int","scope":"<module>"}},"stdout":""},{"line":3,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"450","type":"int","scope":"<module>"}},"stdout":""},{"line":5,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"450","type":"int","scope":"<module>"}},"stdout":""},{"line":null,"scope":"<module>","variables":{"amounts":{"value":"[125, 200, 125]","type":"list","scope":"<module>"},"amount":{"value":"125","type":"int","scope":"<module>"},"total":{"value":"450","type":"int","scope":"<module>"}},"stdout":"450\\n"}],"stdout":"450\\n"}}}`),Aa={lessons:Ra},Oa=[{chapterId:"chapter-1",questions:[{problem:"输入数量 3，单价 125 分，显示总金额（分）。",hint:"先 int，再乘法。",solution:["输入先是文字。","3 * 125 = 375 分。"],answer:{code:`count = int(input())
print(count * 125)
`,stdout:`375
`,stdin:`3
`},id:"review-1-1"},{problem:"输入 12 颗糖，每袋 5 颗，显示完整袋数和余数。",hint:"分别用 // 和 %。",solution:["两袋用掉 10 颗。","还有 2 颗。"],answer:{code:`total = int(input())
print(total // 5)
print(total % 5)
`,stdout:`2
2
`,stdin:`12
`},id:"review-1-2"}]},{chapterId:"chapter-2",questions:[{problem:"求 1 到 5 的和；再检查哪些数被相加。",hint:"终点要写 6。",solution:["相加的数为 1、2、3、4、5。","总和为 15。"],answer:{code:`total = 0
for number in range(1, 6):
    print(number)
    total = total + number
print(total)
`,stdout:`1
2
3
4
5
15
`,stdin:""},id:"review-2-1"},{problem:"从 2 倒数到 1，每轮少 1，结束时显示“完成”。",hint:"停止条件是 remaining > 0。",solution:["显示 2 后变 1。","显示 1 后变 0，循环结束。"],answer:{code:`remaining = 2
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("完成")
`,stdout:`2
1
完成
`,stdin:""},id:"review-2-2"}]},{chapterId:"chapter-3",questions:[{problem:'统计清单 ["苹果", "梨", "苹果"] 中每种水果的数量。',hint:"字典按水果名称累计。",solution:["苹果两次。","梨一次。"],answer:{code:`counts = {}
for name in ["苹果", "梨", "苹果"]:
    counts[name] = counts.get(name, 0) + 1
print(counts["苹果"])
print(counts["梨"])
`,stdout:`2
1
`,stdin:""},id:"review-3-1"},{problem:"复制 [3, 1] 后给副本加 2，显示两份清单。",hint:"用 copy()，不是赋值另一名字。",solution:["复制成独立的一层列表。","原列表不添加 2。"],answer:{code:`original = [3, 1]
other = original.copy()
other.append(2)
print(original)
print(other)
`,stdout:`[3, 1]
[3, 1, 2]
`,stdin:""},id:"review-3-2"}]},{chapterId:"chapter-4",questions:[{problem:'写 read_count，将整数文字转成非负数量；检查 "3"、"0"、"-1" 和 "三"。',hint:"转换后检查小于 0。",solution:["3、0 合法。","-1 是范围错误，“三”是转换错误。"],answer:{code:`def read_count(text):
    count = int(text)
    if count < 0:
        raise ValueError("数量不能为负")
    return count

for text in ["3", "0", "-1", "三"]:
    try:
        print(read_count(text))
    except ValueError:
        print("请输入非负整数")
`,stdout:`3
0
请输入非负整数
请输入非负整数
`,stdin:""},id:"review-4-1"},{problem:"写 cost(price, count=1)，检查单价 5 时买一件与两件。",hint:"默认数量只在省略时生效。",solution:["省略 count 时费用为 5。","传入 2 时费用为 10。"],answer:{code:`def cost(price, count=1):
    return price * count

print(cost(5))
print(cost(price=5, count=2))
`,stdout:`5
10
`,stdin:""},id:"review-4-2"}]},{chapterId:"chapter-5",questions:[{problem:'把 {"count": 3} 保存成 JSON 文件，再读取并显示数量。',hint:"先 dumps，再写文件；读出文字后 loads。",solution:["写和读都使用 utf-8。","还原后按键取出 3。"],answer:{code:`import json
data = {"count": 3}
with open("record.json", "w", encoding="utf-8") as file:
    file.write(json.dumps(data))
with open("record.json", "r", encoding="utf-8") as file:
    text = file.read()
restored = json.loads(text)
print(restored["count"])
`,stdout:`3
`,stdin:""},id:"review-5-1"},{problem:"检查 305 分应显示为 3.05 元，而不是 3.50 元。",hint:"先独立手算，再比较文字。",solution:["305 / 100 = 3.05。",":.2f 只控制显示位数。"],answer:{code:`def display(cents):
    return f"{cents / 100:.2f} 元"

assert display(305) == "3.05 元"
print("通过")
`,stdout:`通过
`,stdin:""},id:"review-5-2"}]}],Da=[{problem:"写 count_passed(scores)，计算列表里至少 60 分的人数；测试 [59, 60, 90] 和空列表。约定输入是 0～100 的整数。",hint:"先用 for 和 if，累计从 0 开始。",solution:["59 不通过；60 和 90 通过。","空列表没有人，通过人数是 0。"],answer:{code:`def count_passed(scores):
    passed = 0
    for score in scores:
        if score >= 60:
            passed = passed + 1
    return passed

assert count_passed([59, 60, 90]) == 2
assert count_passed([]) == 0
print("通过")
`,stdout:`通过
`,stdin:""},id:"exam-1"},{problem:'统计 ["苹果", "梨", "苹果"] 的次数，显示苹果和梨的数量。原列表不能修改。',hint:"结果另放字典。",solution:["get 的默认值让第一次计数从 0 开始。","只读取原列表，不修改它。"],answer:{code:`items = ["苹果", "梨", "苹果"]
counts = {}
for name in items:
    counts[name] = counts.get(name, 0) + 1
print(counts["苹果"])
print(counts["梨"])
assert items == ["苹果", "梨", "苹果"]
`,stdout:`2
1
`,stdin:""},id:"exam-2"},{problem:'从单列 CSV 读取 125、75 分，转整数后求和；一行是 "三" 时明确报错。本题约定表头是 amount、每条记录一列。',hint:"复用 CSV 读取、函数和异常。",solution:["合法输入累计为 200。","错误文字的 int 转换抛 ValueError，调用处显示说明。"],answer:{code:`import csv
import io

def total_cents(text):
    total = 0
    for row in csv.DictReader(io.StringIO(text)):
        amount = int(row["amount"])
        if amount <= 0:
            raise ValueError("金额必须大于 0")
        total = total + amount
    return total

assert total_cents("amount\\n125\\n75\\n") == 200
print("合计检查通过")
try:
    total_cents("amount\\n三\\n")
except ValueError:
    print("金额格式错误")
`,stdout:`合计检查通过
金额格式错误
`,stdin:""},id:"exam-3"},{problem:"完成文件小工具：把 [2, 3] 每项翻倍，存成 JSON 再读回，检查结果为 [4, 6]。",hint:"先处理列表，再转换文字、写入、读取和核对。",solution:["新列表为 [4, 6]。","JSON 文件读回后检查结构与数值。"],answer:{code:`import json
values = [2, 3]
result = [value * 2 for value in values]
with open("result.json", "w", encoding="utf-8") as file:
    file.write(json.dumps(result))
with open("result.json", "r", encoding="utf-8") as file:
    restored = json.loads(file.read())
assert restored == [4, 6]
print("通过")
`,stdout:`通过
`,stdin:""},id:"exam-4"}],Ba=[{term:"程序",definition:"按顺序写给计算机的指令。"},{term:"解释器",definition:"负责读取和运行 Python 代码的程序。"},{term:"终端",definition:"可以输入运行命令、查看结果的窗口。"},{term:"变量",definition:"一个用来读取当前值的名字，例如 count。"},{term:"赋值",definition:"先算右边，再让左边的名字对应这个值。"},{term:"字符串",definition:"文字数据；代码中通常用成对引号表示。"},{term:"整数",definition:"没有小数部分的数字，例如 0、3、-2。"},{term:"类型",definition:"值的类别；数字和文字能做的操作不同。"},{term:"表达式",definition:"能算出一个值的代码，例如 2 + 3。"},{term:"缩进",definition:"行首的空格；用来表明哪些步骤属于同一段。"},{term:"条件",definition:"结果为成立或不成立的判断，例如 count >= 1。"},{term:"循环",definition:"按数据或条件重复执行一组步骤。"},{term:"列表",definition:"保存有顺序的一组值，保留重复项。"},{term:"索引",definition:"读取列表等数据时使用的位置编号，从 0 开始。"},{term:"字典",definition:"按键找对应值的数据结构，例如商品名与价格。"},{term:"元组",definition:"内容位置不能重新赋值的固定一组值。"},{term:"集合",definition:"只保留不同值、可判断是否包含某项的数据结构。"},{term:"函数",definition:"有名字的一组步骤，调用时可以提供输入。"},{term:"参数",definition:"函数接收输入时使用的名字。"},{term:"返回值",definition:"return 交回调用处的结果。"},{term:"模块",definition:"可导入的一组工具，通常存放在一个 .py 文件。"},{term:"异常",definition:"执行遇到问题时产生的信号，例如 ValueError。"},{term:"当前目录",definition:"相对文件路径开始寻找的位置。"},{term:"编码",definition:"文字与文件中数据的转换约定；本书使用 UTF-8。"},{term:"序列化",definition:"把列表、字典等结构转换为可保存的文字等格式。"},{term:"测试",definition:"把实际结果与独立确定的预期比较。"}],O={chapterReviews:Oa,exam:Da,glossary:Ba},Ma=`# Python 编程入门 / Introduction to Programming with Python

版本 0.2.1 · 完整教材 · 2026-10-11

AI 生成，尚未人工审校。正文、习题及教学代码采用 CC0 1.0；构建工具与项目源码采用 MIT。来源用于核对语言规则，正文与例题重新编写。

本书稿由本目录 book.json、lessons/*.json、supplements.json 与 project/ 中的同版源码生成；请修改事实来源后重建，避免手改生成文件。

投稿贡献：[aby0120](https://github.com/b1n9ui/ai-university/pull/4)

## 读者与课程边界

没有编程经验的读者；先在网页中观察，再按第 1.1 节的指引学习保存文件与运行程序。

Python 3.9+ 的通用语法与标准库；来源固定为 Python 3.13 文档，不依赖最新版专有特性。 网页执行回放由 CPython 3.14 生成；正文语法范围与回放构建版本分别记录。

- 从空文件写出可运行的程序
- 理解类型、分支、循环和数据容器
- 拆分函数并处理错误输入
- 读写小型文本、JSON 和 CSV 文件
- 为命令行项目编写边界与集成测试

本卷不展开以下主题；这些项目只是课程边界，不是未完成的章节：

- 面向对象与继承
- Web 开发、数据库、爬虫
- NumPy、Pandas、机器学习
- 并发、异步、生成器与性能优化
- 正式软件打包与发布

## 开始前：安装、运行与学习方法

从 [Python 官网](https://www.python.org/downloads/) 选择仍获支持的 Python 3 版本并完成安装。本书代码使用长期通用语法；本次实际验证环境见 QA.md，未声称在所有版本与系统上实测。准备一个纯文本编辑器，新建独立练习目录，不要在存放重要文件的目录运行写入示例。

在终端检查解释器（macOS/Linux）：

\`\`\`sh
python3 --version
python3 hello.py
\`\`\`

Windows 终端通常使用：

\`\`\`powershell
py -3 --version
py -3 hello.py
\`\`\`

hello.py 需要先创建并保存，内容可使用第 1.1 节的问候示例。如果终端找不到解释器，应先检查安装与命令名称。若使用编辑器的运行按钮，确认它选择了同一解释器。

每节按照“读概念 → 预测 → 运行 → 改一处 → 手算复核 → 独立做题”学习。先遮住解法，写下自己的预测，再运行代码。每段 Python 代码均可独立复制到新的 .py 文件执行，不能把全部示例拼成一个文件后假设名称与文件状态仍相同。

input 示例同时给出标准输入与程序的标准输出。自动验证使用重定向输入，不回显键盘输入，因此多个提示可能紧挨着显示；交互终端通常会额外回显你键入的文字，那部分不属于程序的标准输出。

网页每节都有互动实验：选择参数后逐行观察变量与输出，也可以前进或回退。这是经 Python 实际执行验证的有限示例回放；任意改写代码需使用本机解释器。纸面学习时先写预测，再运行本节实验，改一个参数复核。

## 全书目录

**开始编程**：能运行脚本、区分文本与数值并完成基本输入输出。

- 1.1 运行第一个程序
- 1.2 给值起名字
- 1.3 数值与运算
- 1.4 接收文字和数量

**控制执行**：能读懂分支和循环，定位边界错误并设计停止条件。

- 2.1 条件与分支
- 2.2 for 循环与计数
- 2.3 while 循环与倒计时
- 2.4 读报错与调试

**组织数据**：从购物清单和价格表出发，学习按位置、按名称和按是否出现组织数据。

- 3.1 列表与购物清单
- 3.2 字典与按键查找
- 3.3 元组与集合：固定记录和去重
- 3.4 推导式与数据整理

**组织程序**：能编写函数、设计接口、导入模块并处理预期异常。

- 4.1 函数、参数与返回值
- 4.2 传入参数与默认值
- 4.3 模块：使用现成的工具
- 4.4 异常与输入验证

**完成应用**：能处理文件、验证格式、测试边界并交付命令行工具。

- 5.1 文本文件与路径
- 5.2 JSON 与 CSV：保存结构和读取表格
- 5.3 测试与边界验证
- 5.4 综合项目：本地消费汇总器

## 第 1 章 开始编程

能运行脚本、区分文本与数值并完成基本输入输出。

### 1.1 运行第一个程序

**核心意思：**程序是一串给计算机的指令。先让它按顺序显示两句话。

**直觉：**像写一张待办清单：先做第一件，再做第二件。

#### 学习目标

- 先让一句话出现在屏幕上
- 把两行保存成一个程序
- 一次只改一句话

#### 先让一句话出现在屏幕上

看到 print("你好") 时，先读成“显示：你好”。print 是 Python 自带的显示指令；圆括号装着要显示的内容，成对的英文引号告诉 Python：这是文字。引号本身不会显示。先不背术语，跟下面的例子做一遍。

#### 跟着做：第一次问候

显示两句话，看看先后顺序。

##### 参考代码与预期输出

\`\`\`python
print("你好")
print("我开始学 Python")
\`\`\`

预期标准输出：

\`\`\`text
你好
我开始学 Python
\`\`\`

1. 第一行 print 显示“你好”。
2. 第二行接着显示“我开始学 Python”。
3. 每个 print 默认换到下一行。

#### 把两行保存成一个程序

网页实验可以先帮助你理解顺序。准备在自己的电脑上运行时，按照下面的四步操作，把刚才的两行示例保存成 hello.py。每改一次代码，先保存，再运行，才能看到新结果。

#### 一次只改一句话

计算机从上往下读：第一行显示你好，第二行显示我开始学 Python。把第二行引号里的文字换成自己的话，再运行；第一行不应改变。以 # 开头的文字是给人看的注释，运行时会跳过。代码里的括号、引号使用英文符号。

#### 第一次在电脑上运行：四步操作

1. 安装解释器：打开 Python 官网 python.org 的 Downloads 页面，安装仍获支持的 Python 3。解释器就是负责运行代码的程序。安装后若命令找不到，先检查安装是否完成。
2. 保存代码：新建一个练习文件夹，用代码编辑器或纯文本编辑器新建文件，输入上面的两行，保存为 hello.py。文件名后缀是 .py，不能是 hello.py.txt；不要用 Word 保存。
3. 找到练习目录：终端是输入命令的窗口。macOS 可搜索“终端”，Windows 可搜索“终端”或 PowerShell。输入 cd、一个空格、练习文件夹的完整路径，再按回车；路径有空格时，用一对英文双引号把路径包起来。cd 的意思是“进入这个目录”。
4. 运行并核对：macOS/Linux 输入 python3 hello.py，Windows 通常输入 py -3 hello.py，按回车。应看到“你好”和“我开始学 Python”两行。把第二句话改掉，保存后再运行同一个命令。若提示找不到 hello.py，先确认当前目录与文件名。

#### 定义与适用条件

print(...) 显示括号中的内容；多行指令通常从上到下执行。

- 每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。

#### 执行过程与推导

1. 第一行 print 显示“你好”。
2. 第二行接着显示“我开始学 Python”。
3. 每个 print 默认换到下一行。

#### 概念检查

print("你好") 的输出是什么？

- A. "你好"（带引号）
- B. 你好（不带引号）
- C. print（显示指令名）

答案：B。引号用来标记文字；显示的是里面的内容。

#### 互动实验：先预测，再走一步

改第一句问候，会影响第二句吗？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
print('你好')
print("我开始学 Python")
\`\`\`

预期标准输出：

\`\`\`text
你好
我开始学 Python
\`\`\`

继续实验：选择另一句问候，重头走一遍。

网页参数：第一句问候（"你好"、"早上好"、"你好，小林"）

#### 例题 2：写一张小清单

显示今天要完成的两件事。

1. # 这一行是注释，不会显示。
2. 下面两个 print 才负责输出。

##### 参考代码与预期输出

\`\`\`python
# 今天的小清单
print("打开教材")
print("试一个例子")
\`\`\`

预期标准输出：

\`\`\`text
打开教材
试一个例子
\`\`\`

#### 常见误区

- 错误想法：引号也会一起显示。 纠正：引号标记文字的边界，print 只显示里面的内容。

- 错误想法：注释会像普通代码一样执行。 纠正：以 # 开头的注释给人阅读，不产生输出。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

预测 print("早上好") 会显示什么。

提示：引号不会显示。

##### 完整解法

1. 显示引号里面的文字。

##### 参考代码与预期输出

\`\`\`python
print("早上好")
\`\`\`

预期标准输出：

\`\`\`text
早上好
\`\`\`

#### 练习 2（难度 1/6）

先显示“第一步”，再显示“第二步”。

提示：写两个 print。

##### 完整解法

1. 顺序与代码行顺序相同。

##### 参考代码与预期输出

\`\`\`python
print("第一步")
print("第二步")
\`\`\`

预期标准输出：

\`\`\`text
第一步
第二步
\`\`\`

#### 练习 3（难度 1/6）

把问候换成“你好，小林”。

提示：只改引号里的内容。

##### 完整解法

1. 保留 print、括号和成对引号。

##### 参考代码与预期输出

\`\`\`python
print("你好，小林")
\`\`\`

预期标准输出：

\`\`\`text
你好，小林
\`\`\`

#### 练习 4（难度 1/6）

一行注释后接 print("完成")，会出现几行输出？

提示：注释不执行。

##### 完整解法

1. 只出现一行“完成”。

##### 参考代码与预期输出

\`\`\`python
# 这是一行注释
print("完成")
\`\`\`

预期标准输出：

\`\`\`text
完成
\`\`\`

先修：无编程先修。相对难度：1/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)。

### 1.2 给值起名字

**核心意思：**给一个值起名字，下一行就能用这个名字找到它。

**直觉：**在装着 3 个苹果的篮子上贴一张“苹果数”的标签。

#### 学习目标

- 给数字起个名字
- 更新之后，名字记住新值
- 数字与文字各有用途

#### 给数字起个名字

apples = 3 读作“把名字 apples 对应到数字 3”。这里 = 是赋值：先看右边的值，再让左边的名字记住它。print(apples) 不加引号，因为我们要取出名字对应的值；print("apples") 加了引号，就只显示这串文字。

#### 跟着做：今天又买了两个

原有 3 个苹果，又买 2 个，显示新总数。

##### 参考代码与预期输出

\`\`\`python
apples = 3
apples = apples + 2
print(apples)
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

1. apples 先记住 3。
2. 右边先算 3 + 2，再更新 apples。
3. print 取出更新后的 5。

#### 更新之后，名字记住新值

apples = apples + 2 的右边先取出原来的 3，加上 2 得到 5；然后左边 apples 改为记住 5。它不是数学里要求两边永远相等的等式。可以逐行观察下方的变量卡片。

#### 数字与文字各有用途

3 是可以做算术的数字；"3" 是文字。先根据用途选择：苹果个数用数字，姓名用文字。名字区分大小写，apples 和 Apples 不是同一个；为了容易看懂，本书用小写英文，多个词用下划线连接，例如 apple_count。

#### 定义与适用条件

赋值先计算右边，再更新左边名字对应的值；带引号的名字是文字。

- 每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。

#### 执行过程与推导

1. apples 先记住 3。
2. 右边先算 3 + 2，再更新 apples。
3. print 取出更新后的 5。

#### 概念检查

apples = 3 后，print("apples") 显示什么？

- A. 3（总会读取变量）
- B. apples（文字）
- C. 没有输出（变量无法显示）

答案：B。引号让 apples 成为普通文字。

#### 互动实验：先预测，再走一步

原来有 3 个，增加 2 个，变量会变成多少？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
apples = 3
apples = apples + 2
print(apples)
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

继续实验：把初始数量改为 0，再看右边如何先计算。

网页参数：原来的苹果数（0、1、2、3、4、5）

#### 例题 2：名字还是文字

比较带引号和不带引号的 apples。

1. 不带引号时读取变量。
2. 带引号时按文字显示。

##### 参考代码与预期输出

\`\`\`python
apples = 3
print(apples)
print("apples")
\`\`\`

预期标准输出：

\`\`\`text
3
apples
\`\`\`

#### 常见误区

- 错误想法：print("apples") 会读取苹果数。 纠正：有引号时显示文字 apples；print(apples) 才读取变量。

- 错误想法：a 更新后，之前从 a 取值的 b 也自动更新。 纠正：b = a 在当时取值；后续的数字赋值不会自动重算 b。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

count = 4 后，print(count) 显示什么？

提示：读取名字对应的值。

##### 完整解法

1. count 记住 4。

##### 参考代码与预期输出

\`\`\`python
count = 4
print(count)
\`\`\`

预期标准输出：

\`\`\`text
4
\`\`\`

#### 练习 2（难度 2/6）

把 count 从 4 增加到 5。

提示：先取旧值再加 1。

##### 完整解法

1. 右边得 5，赋值更新名字。

##### 参考代码与预期输出

\`\`\`python
count = 4
count = count + 1
print(count)
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

#### 练习 3（难度 1/6）

让 name 记住“小林”，再显示它。

提示：文字需要引号。

##### 完整解法

1. 赋值时写引号，读取名字时不写。

##### 参考代码与预期输出

\`\`\`python
name = "小林"
print(name)
\`\`\`

预期标准输出：

\`\`\`text
小林
\`\`\`

#### 练习 4（难度 2/6）

a = 2；b = a；a = 5 后，b 是多少？

提示：给 b 赋值时 a 还是 2。

##### 完整解法

1. b 记住 2。
2. 随后更新 a 不会自动重新计算 b。

##### 参考代码与预期输出

\`\`\`python
a = 2
b = a
a = 5
print(a)
print(b)
\`\`\`

预期标准输出：

\`\`\`text
5
2
\`\`\`

先修：first-program。相对难度：1/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Built-in Types](https://docs.python.org/3.13/library/stdtypes.html)。

### 1.3 数值与运算

**核心意思：**同一批糖果，可以问“平均多少”，也可以问“装满几袋、还剩几颗”。

**直觉：**17 颗糖，每袋装 5 颗：装满 3 袋，还剩 2 颗。

#### 学习目标

- 先用熟悉的加减乘除
- 完整袋数和剩余颗数
- 用原来的数量检查结果

#### 先用熟悉的加减乘除

Python 用 + 做加法，- 做减法，* 做乘法，/ 做普通除法。例如 3 * 5 是 15，17 / 5 是 3.4。数字不加引号；print(3 * 5) 会先算出结果，再显示。乘除先于加减，想先算哪一部分就加圆括号，例如 (2 + 3) * 4。

#### 跟着做：把 17 颗糖装袋

每袋 5 颗，显示完整袋数和剩余颗数。

##### 参考代码与预期输出

\`\`\`python
total = 17
size = 5
print(total // size)
print(total % size)
\`\`\`

预期标准输出：

\`\`\`text
3
2
\`\`\`

1. total 记住总共 17 颗；size 记住每袋 5 颗。
2. 用 // 求完整袋数，得到 3。
3. 用 % 求剩余，得到 2；3 * 5 + 2 = 17。

#### 完整袋数和剩余颗数

现在问题变成“只能装满多少袋”。17 // 5 得到 3；// 连着写两个斜杠，表示整除。17 % 5 得到 2；% 在这里表示余数，不是百分号。记住一幅图就够了：3 袋各装 5 颗，用掉 15 颗，17 - 15 还剩 2 颗。

#### 用原来的数量检查结果

把完整袋数乘以每袋颗数，再加剩余：3 * 5 + 2 = 17。若正好装完，例如 20 颗每袋 5 颗，余数就是 0。先在下面改糖果数，再改变袋子大小，一次只改一个。这里糖果数为非负整数，每袋颗数必须大于 0。

#### 定义与适用条件

在本节的非负整数装袋模型中：// 求完整袋数，% 求余数；袋数 × 每袋颗数 + 余数 = 总数。

- 装袋模型使用非负整数数量；每袋颗数必须是大于 0 的整数。
- /、//、% 的除数不能为 0。

#### 执行过程与推导

1. total 记住总共 17 颗；size 记住每袋 5 颗。
2. 用 // 求完整袋数，得到 3。
3. 用 % 求剩余，得到 2；3 * 5 + 2 = 17。

#### 概念检查

17 颗糖，每袋装 5 颗，要用哪一个求剩余？

- A. 17 / 5
- B. 17 % 5
- C. 17 // 5

答案：B。余数表示装完完整袋子后剩下的数量。

#### 互动实验：先预测，再走一步

先预测 17 颗糖、每袋 5 颗的袋数和余数，再把总数改为 20 看看。

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
total = 17
size = 5
bags = total // size
left = total % size
print(bags)
print(left)
\`\`\`

预期标准输出：

\`\`\`text
3
2
\`\`\`

继续实验：再试 3 颗、每袋 5 颗：先预测袋数是否为 0。

网页参数：糖果总数（0、1、2、3、4、5、6、7、8、9、10、11、12、13、14、15、16、17、18、19、20）；每袋颗数（1、2、3、4、5）

#### 例题 2：正好装完

20 颗糖每袋 5 颗，还剩多少？

1. 20 // 5 是 4 袋。
2. 20 % 5 是 0，表示没有剩余。

##### 参考代码与预期输出

\`\`\`python
total = 20
size = 5
print(total // size)
print(total % size)
\`\`\`

预期标准输出：

\`\`\`text
4
0
\`\`\`

#### 常见误区

- 错误想法：// 和 / 都是在求完整袋数。 纠正：/ 是普通除法，17 / 5 为 3.4；// 在这个模型中求完整袋数 3。

- 错误想法：% 在代码里表示百分数。 纠正：在本节整数运算中，% 求余数：17 % 5 为 2。

#### 学完主线后再看：负数和小数

选读：学完主线后再看。

本节的装袋模型只用非负整数。负数的 // 向下取整，例如 -3 // 2 为 -2，不能直接套用装袋直觉。小数计算还可能有表示误差，例如 0.1 + 0.2 的结果不一定恰好等于 0.3；这里先知道有这个边界即可。金额项目使用整数“分”，更精确的十进制计算可在后续学习 Decimal。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

3 袋糖，每袋 5 颗，共有几颗？

提示：乘法写 *。

##### 完整解法

1. 3 * 5 = 15。

##### 参考代码与预期输出

\`\`\`python
print(3 * 5)
\`\`\`

预期标准输出：

\`\`\`text
15
\`\`\`

#### 练习 2（难度 2/6）

12 颗糖每袋 5 颗，完整袋数和余数是多少？

提示：先画出两个装满的袋子。

##### 完整解法

1. 两袋用掉 10 颗。
2. 剩 2 颗。

##### 参考代码与预期输出

\`\`\`python
print(12 // 5)
print(12 % 5)
\`\`\`

预期标准输出：

\`\`\`text
2
2
\`\`\`

#### 练习 3（难度 2/6）

原有 17 颗，又拿来 3 颗。每袋 5 颗，求余数。

提示：先算新总数。

##### 完整解法

1. 17 + 3 = 20。
2. 20 % 5 = 0。

##### 参考代码与预期输出

\`\`\`python
total = 17 + 3
print(total % 5)
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

#### 练习 4（难度 2/6）

只有 3 颗糖，每袋 5 颗，能装满一袋吗？

提示：不够一袋时完整袋数是 0。

##### 完整解法

1. 3 // 5 = 0。
2. 3 % 5 = 3，糖果都留在外面。

##### 参考代码与预期输出

\`\`\`python
print(3 // 5)
print(3 % 5)
\`\`\`

预期标准输出：

\`\`\`text
0
3
\`\`\`

先修：names-types。相对难度：1/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Floating-Point Arithmetic](https://docs.python.org/3.13/tutorial/floatingpoint.html)。

### 1.4 接收文字和数量

**核心意思：**input 先收到文字；要做算术，先把这段文字转换成数字。

**直觉：**输入框里写“3”，电脑先收到字符 3，之后才把它当成数量。

#### 学习目标

- 先接住用户的一句话
- 把数量从文字转换成数字
- 把文字和变量放在一句话里

#### 先接住用户的一句话

name = input() 会等待你输入一行文字，按回车后把文字交给 name。input 的意思是“接收输入”。为了说明要填什么，可以前一行 print("你叫什么名字？")。输入的回车不保存在 name 中。这里文字的术语叫字符串。

#### 跟着做：认识新同学

输入“小林”，程序显示问候。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
小林
\`\`\`

\`\`\`python
print("你叫什么名字？")
name = input()
print(f"你好，{name}")
\`\`\`

预期标准输出：

\`\`\`text
你叫什么名字？
你好，小林
\`\`\`

1. 先显示提问。
2. input 接住“小林”。
3. {name} 换成“小林”。

#### 把数量从文字转换成数字

count = int(input()) 分两步读：input() 接收文字，int(...) 把像 "3" 这样的整数文字转换成数字 3。int 是整数转换工具。这样 count + 2 才能表示增加 2 个。若输入“三”或“3.5”，这次整数转换会报错；第 4.4 节再学如何处理。

#### 把文字和变量放在一句话里

print(f"你好，{name}") 中，前面的 f 表示这是一句可填空的文字，{name} 的位置换成变量的值。先只用这种基本形式，不需要学习格式规则。若只显示数量，直接 print(count) 也完全可以。

#### 定义与适用条件

input() 接收字符串；int(...) 把合法整数文字转换为数字；f 文字可用 {变量名} 填入值。

- int 转换需要合法整数文字；空文字、“三”和“3.5”不能直接转成整数。

#### 执行过程与推导

1. 先显示提问。
2. input 接住“小林”。
3. {name} 换成“小林”。

#### 概念检查

input 收到 "3" 后，怎样才能给数量加 2？

- A. 直接给文字加 2
- B. 先用 int 转成数字
- C. 把 2 也写成文字再相加

答案：B。做数量运算前，先把整数文字转成数字。

#### 互动实验：先预测，再走一步

文字 "3" 转成数字后，加 2 是多少？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
text = '3'
count = int(text)
print(count + 2)
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

继续实验：选择 "0"，观察转换前后变量卡片的引号。这里用文字参数代替键盘输入。

网页参数：模拟输入的文字（"0"、"1"、"3"、"5"）

#### 例题 2：再添两颗

输入 3，显示增加 2 之后的数量。

1. input 收到文字 "3"。
2. int 把它变成数字 3。
3. 加 2 得到 5。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
3
\`\`\`

\`\`\`python
count = int(input())
print(count + 2)
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

#### 常见误区

- 错误想法：input 收到看起来像数字的文字就会自动变成数字。 纠正：input 得到字符串，整数计算前需要 int 转换。

- 错误想法：把两个数量都写成文字再用 + 就能求和。 纠正："3" + "2" 连接成 "32"；数量求和要用数字。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

输入“小王”，原样显示输入的名字。

提示：先 input，再 print。

##### 完整解法

1. name 接住文字。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
小王
\`\`\`

\`\`\`python
name = input()
print(name)
\`\`\`

预期标准输出：

\`\`\`text
小王
\`\`\`

#### 练习 2（难度 2/6）

输入 4，显示它的两倍。

提示：用 int 转换。

##### 完整解法

1. 4 * 2 = 8。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
4
\`\`\`

\`\`\`python
count = int(input())
print(count * 2)
\`\`\`

预期标准输出：

\`\`\`text
8
\`\`\`

#### 练习 3（难度 1/6）

输入“小林”，显示“小林，欢迎你”。

提示：用 f 和 {name} 填空。

##### 完整解法

1. 变量的值替换花括号里的位置。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
小林
\`\`\`

\`\`\`python
name = input()
print(f"{name}，欢迎你")
\`\`\`

预期标准输出：

\`\`\`text
小林，欢迎你
\`\`\`

#### 练习 4（难度 2/6）

输入 0，再加 2，会得到多少？

提示：0 也是合法整数。

##### 完整解法

1. 转换后 0 + 2 = 2。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
0
\`\`\`

\`\`\`python
count = int(input())
print(count + 2)
\`\`\`

预期标准输出：

\`\`\`text
2
\`\`\`

先修：numbers。相对难度：1/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Built-in Functions](https://docs.python.org/3.13/library/functions.html)。

### 章末回顾

#### 回顾 1

输入数量 3，单价 125 分，显示总金额（分）。

提示：先 int，再乘法。

##### 完整解法

1. 输入先是文字。
2. 3 * 125 = 375 分。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
3
\`\`\`

\`\`\`python
count = int(input())
print(count * 125)
\`\`\`

预期标准输出：

\`\`\`text
375
\`\`\`

#### 回顾 2

输入 12 颗糖，每袋 5 颗，显示完整袋数和余数。

提示：分别用 // 和 %。

##### 完整解法

1. 两袋用掉 10 颗。
2. 还有 2 颗。

##### 参考代码与预期输出

本次标准输入（逐行提供）：

\`\`\`text
12
\`\`\`

\`\`\`python
total = int(input())
print(total // 5)
print(total % 5)
\`\`\`

预期标准输出：

\`\`\`text
2
2
\`\`\`

## 第 2 章 控制执行

能读懂分支和循环，定位边界错误并设计停止条件。

### 2.1 条件与分支

**核心意思：**先判断条件，再选择其中一条路执行。

**直觉：**带够车费才能乘车；没带够就走另一条路。

#### 学习目标

- 把一个问题写成判断
- 用 if 和 else 写两条路
- 检查刚好够的情况

#### 把一个问题写成判断

设车费是 5 元，money 是你带的钱。money >= 5 读作“带的钱是否至少有 5 元”；>= 表示大于或等于。判断的结果只有 True（成立）或 False（不成立）。先试着口头回答，再看程序走哪条路。

#### 跟着做：够不够车费

带 5 元，票价 5 元，显示选择。

##### 参考代码与预期输出

\`\`\`python
money = 5
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
\`\`\`

预期标准输出：

\`\`\`text
可以乘车
\`\`\`

1. money 记住 5。
2. 5 >= 5 成立，进入 if 的缩进部分。
3. else 的句子跳过。

#### 用 if 和 else 写两条路

if 条件: 表示“如果成立”；else: 表示“否则”。冒号后换行，下一行开头留 4 个空格，这叫缩进。缩进后的句子属于这条路。同一次判断只会执行一边：不会先乘车，再又显示钱不够。

#### 检查刚好够的情况

先试 6 元，再试 4 元，最后试刚好 5 元。>= 包含等于，所以 5 元也能乘车。如果改成 >，刚好够的情况就会判断错误。表示相等时用 ==；单个 = 仍然是赋值。

#### 定义与适用条件

if 条件成立时执行其缩进部分，否则执行 else 的部分；同一次判断只走一边。

- 条件后的冒号和缩进必须完整；= 用于赋值，== 用于相等判断。

#### 执行过程与推导

1. money 记住 5。
2. 5 >= 5 成立，进入 if 的缩进部分。
3. else 的句子跳过。

#### 概念检查

刚好带 5 元，哪一个判断包含这种情况？

- A. money > 5
- B. money >= 5
- C. money = 5

答案：B。>= 包含“等于”；= 用来赋值。

#### 互动实验：先预测，再走一步

刚好 5 元，会走哪一条路？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
money = 5
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
\`\`\`

预期标准输出：

\`\`\`text
可以乘车
\`\`\`

继续实验：比较 4、5、6 元，观察箭头跳过了哪一行。

网页参数：带了多少元（0、3、4、5、6、8）

#### 例题 2：另一条路

带 4 元，再检查同一个条件。

1. 4 >= 5 不成立。
2. 跳过 if 的句子，执行 else 的句子。

##### 参考代码与预期输出

\`\`\`python
money = 4
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
\`\`\`

预期标准输出：

\`\`\`text
钱不够
\`\`\`

#### 常见误区

- 错误想法：刚好 5 元符合 money > 5。 纠正：> 不含等于，刚好够要用 >=。

- 错误想法：if 和 else 两边都会执行。 纠正：这次判断只走一边；条件成立时跳过 else。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

预测 6 >= 5 的结果。

提示：是否至少有 5？

##### 完整解法

1. 结果为 True。

##### 参考代码与预期输出

\`\`\`python
print(6 >= 5)
\`\`\`

预期标准输出：

\`\`\`text
True
\`\`\`

#### 练习 2（难度 2/6）

带 3 元时显示“钱不够”。

提示：把 money 改为 3。

##### 完整解法

1. 条件不成立，进入 else。

##### 参考代码与预期输出

\`\`\`python
money = 3
if money >= 5:
    print("可以乘车")
else:
    print("钱不够")
\`\`\`

预期标准输出：

\`\`\`text
钱不够
\`\`\`

#### 练习 3（难度 2/6）

成绩至少 60 分显示“通过”，否则显示“再练习”；测试 60。

提示：刚好达到也算通过。

##### 完整解法

1. 用 >= 60。
2. 60 分进入 if。

##### 参考代码与预期输出

\`\`\`python
score = 60
if score >= 60:
    print("通过")
else:
    print("再练习")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

#### 练习 4（难度 2/6）

测试刚才的程序输入 59。

提示：只改成绩。

##### 完整解法

1. 59 < 60，显示再练习。

##### 参考代码与预期输出

\`\`\`python
score = 59
if score >= 60:
    print("通过")
else:
    print("再练习")
\`\`\`

预期标准输出：

\`\`\`text
再练习
\`\`\`

先修：strings-input。相对难度：2/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[More Control Flow Tools](https://docs.python.org/3.13/tutorial/controlflow.html)。

### 2.2 for 循环与计数

**核心意思：**for 把一件事重复做，每次给你一个新的数。

**直觉：**逐个叫号：1 号、2 号、3 号，不用手写三遍。

#### 学习目标

- 先重复显示号码
- 把终点写成最后一个数加一
- 让总数一点点增加

#### 先重复显示号码

for number in range(1, 4): 读作“让 number 依次取 1、2、3”。range 给出一段整数；前面的 1 包含，后面的 4 不包含。缩进的 print(number) 每次执行一遍，所以看到三行号码。

#### 跟着做：叫到 3 号

从 1 号开始依次显示。

##### 参考代码与预期输出

\`\`\`python
for number in range(1, 4):
    print(number)
\`\`\`

预期标准输出：

\`\`\`text
1
2
3
\`\`\`

1. range(1, 4) 给出 1、2、3。
2. number 每次换成下一个数。
3. 缩进的 print 每次执行一次。

#### 把终点写成最后一个数加一

想叫到 5 号，就写 range(1, 6)。只写 range(3) 时，从 0 开始，产生 0、1、2。本节先用有起点和终点的形式。循环结束以后，继续执行不缩进的下一行。

#### 让总数一点点增加

求 1 + 2 + 3，不必一次记住全部。先让 total = 0；每次把当前 number 加进去。total 的变化是 0 → 1 → 3 → 6。把 print(total) 放在循环外，才会只显示最后的总数。

#### 定义与适用条件

for 逐项重复；range(start, stop) 从 start 开始，到 stop 之前结束。

- range 的终点不包含；本节使用整数、步长为 1 的递增区间。

#### 执行过程与推导

1. range(1, 4) 给出 1、2、3。
2. number 每次换成下一个数。
3. 缩进的 print 每次执行一次。

#### 概念检查

range(1, 4) 包含哪些数？

- A. 1、2、3、4
- B. 1、2、3
- C. 0、1、2、3

答案：B。range 的终点不包含。

#### 互动实验：先预测，再走一步

1 到 3 的和是 6；改成 1 到 4 会是多少？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
end = 3
total = 0
for number in range(1, end + 1):
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
6
\`\`\`

继续实验：选 0，观察循环体是否执行。

网页参数：加到几（0、1、2、3、4、5）

#### 例题 2：求前三个数的和

把 1、2、3 逐个加起来。

1. total 从 0 开始。
2. 三次增加后依次为 1、3、6。
3. 循环外显示最终的 6。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 4):
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
6
\`\`\`

#### 常见误区

- 错误想法：range(1, 4) 会取到 4。 纠正：终点不包含，得到 1、2、3。

- 错误想法：累加时每轮都应该把 total 重设为 0。 纠正：total 在循环之前初始化；循环里保留上次总数再增加。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

range(1, 3) 会给出哪些数？

提示：终点 3 不包含。

##### 完整解法

1. 给出 1 和 2。

##### 参考代码与预期输出

\`\`\`python
for number in range(1, 3):
    print(number)
\`\`\`

预期标准输出：

\`\`\`text
1
2
\`\`\`

#### 练习 2（难度 2/6）

依次显示 2、3、4。

提示：终点要写 5。

##### 完整解法

1. range(2, 5) 包含 2、3、4。

##### 参考代码与预期输出

\`\`\`python
for number in range(2, 5):
    print(number)
\`\`\`

预期标准输出：

\`\`\`text
2
3
4
\`\`\`

#### 练习 3（难度 2/6）

求 1 到 4 的和。

提示：total 从 0 开始。

##### 完整解法

1. 依次增加 1、2、3、4。
2. 最后是 10。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 5):
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
10
\`\`\`

#### 练习 4（难度 2/6）

range(1, 1) 会执行几次？

提示：起点已经到达不包含的终点。

##### 完整解法

1. 一次也不执行。
2. 循环外的 print 仍执行。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 1):
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：conditions。相对难度：2/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[More Control Flow Tools](https://docs.python.org/3.13/tutorial/controlflow.html)。

### 2.3 while 循环与倒计时

**核心意思：**while 每次先检查条件，成立就继续，不成立就停。

**直觉：**倒计时：还剩时间就再走一步，走到 0 就结束。

#### 学习目标

- 先检查，再做一次
- 每轮都让条件向停止靠近
- 先试小数值和零

#### 先检查，再做一次

while remaining > 0: 读作“只要剩余数大于 0，就执行缩进的步骤”。它每一轮都会重新检查条件。for 常用于按一串数据重复；while 适合按“是否继续”决定重复。

#### 跟着做：三步倒计时

显示 3、2、1，然后显示结束。

##### 参考代码与预期输出

\`\`\`python
remaining = 3
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
\`\`\`

预期标准输出：

\`\`\`text
3
2
1
结束
\`\`\`

1. remaining 从 3 开始。
2. 每轮先显示，再减 1。
3. 变成 0 后跳出循环，显示结束。

#### 每轮都让条件向停止靠近

remaining = remaining - 1 把剩余数减少 1。从 3 开始，依次变成 2、1、0。到 0 时条件不成立，循环结束。如果忘了减少，条件会一直成立，程序就不停重复。不要试运行那个缺少更新的版本。

#### 先试小数值和零

先从 3 倒数，再试 1，最后试 0。若一开始就是 0，循环一次也不执行，但循环外的“结束”仍然显示。用这种边界检查，比只试正常例子更可靠。

#### 定义与适用条件

while 每轮先检查条件；成立才执行，更新后重新检查。

- 每轮更新变量，让条件最终不成立；先用小输入核对停止。

#### 执行过程与推导

1. remaining 从 3 开始。
2. 每轮先显示，再减 1。
3. 变成 0 后跳出循环，显示结束。

#### 概念检查

想让倒计时结束，每轮需要做什么？

- A. 只显示剩余数
- B. 减少剩余数
- C. 把剩余数重设为 3

答案：B。更新变量，才能让下一轮的判断改变。

#### 互动实验：先预测，再走一步

从 0 开始，循环会不会先执行一次？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
remaining = 3
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
\`\`\`

预期标准输出：

\`\`\`text
3
2
1
结束
\`\`\`

继续实验：比较 0 和 3，观察判断语句被检查了几次。

网页参数：倒计时起点（0、1、2、3、4、5）

#### 例题 2：一开始就没剩余

从 0 开始。

1. 0 > 0 不成立。
2. 直接执行循环后面的输出。

##### 参考代码与预期输出

\`\`\`python
remaining = 0
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
\`\`\`

预期标准输出：

\`\`\`text
结束
\`\`\`

#### 常见误区

- 错误想法：while 会先执行一次，再判断条件。 纠正：while 先判断；初始条件不成立时一次也不执行。

- 错误想法：只打印剩余数，也能让倒计时结束。 纠正：必须更新 remaining；打印本身不改变它。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

从 1 开始倒计时，会显示什么？

提示：执行一轮后变成 0。

##### 完整解法

1. 显示 1，然后结束。

##### 参考代码与预期输出

\`\`\`python
remaining = 1
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("结束")
\`\`\`

预期标准输出：

\`\`\`text
1
结束
\`\`\`

#### 练习 2（难度 1/6）

从 2 开始倒计时。

提示：每轮减 1。

##### 完整解法

1. 显示 2、1。

##### 参考代码与预期输出

\`\`\`python
remaining = 2
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
\`\`\`

预期标准输出：

\`\`\`text
2
1
\`\`\`

#### 练习 3（难度 2/6）

从 0 数到 2：先显示当前数，每次增加 1。

提示：继续条件用 current < 3。

##### 完整解法

1. 显示 0、1、2 后 current 变成 3。

##### 参考代码与预期输出

\`\`\`python
current = 0
while current < 3:
    print(current)
    current = current + 1
\`\`\`

预期标准输出：

\`\`\`text
0
1
2
\`\`\`

#### 练习 4（难度 2/6）

剩余数是 0，while remaining > 0 的循环体运行几次？

提示：先判断，不是先执行。

##### 完整解法

1. 循环体运行 0 次。

##### 参考代码与预期输出

\`\`\`python
remaining = 0
times = 0
while remaining > 0:
    times = times + 1
    remaining = remaining - 1
print(times)
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：for-range。相对难度：2/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[More Control Flow Tools](https://docs.python.org/3.13/tutorial/controlflow.html)。

### 2.4 读报错与调试

**核心意思：**程序不符合预期时，先找最早出错的一步，再只改一处。

**直觉：**检查一道计算题：不能只看答案，要找第一步算错的位置。

#### 学习目标

- 先写下本来应该发生什么
- 区分报错和算错
- 修好后再试邻近输入

#### 先写下本来应该发生什么

准备检查“1 到 3 的和”。不用程序也能算出 6，这就是预期结果。程序给出 3 时，先别改很多行；列出它真正取过的 number，找出 3 为什么没有被加进去。

#### 跟着做：漏掉最后一个数

修正求 1 到 3 的和。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 4):
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
6
\`\`\`

1. 手算预期为 6。
2. range(1, 3) 只取 1、2，漏掉 3。
3. 终点改成 4 后，总数是 6。

#### 区分报错和算错

报错会给出提示。例如拼错变量名常出现 NameError，数字和文字混用常出现 TypeError。先看提示最后一行的错误名称，再按行号找代码。能运行但得到 3 而不是 6，则是逻辑错误：Python 执行了你的指令，只是指令没有表达原意。

#### 修好后再试邻近输入

range(1, 3) 不包含 3，应改成 range(1, 4)。修好后再试终点 1、2、3；不能只靠一个例子判断完成。必要时临时 print(number)，显示执行中间的值，检查后再删掉。

#### 定义与适用条件

调试先确定预期，再观察实际步骤；找最早的差异，一次改一处。

- 每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。

#### 执行过程与推导

1. 手算预期为 6。
2. range(1, 3) 只取 1、2，漏掉 3。
3. 终点改成 4 后，总数是 6。

#### 概念检查

求 1 到 3 的和却得到 3，range(1, 3) 错在哪？

- A. 加法不能放进循环
- B. 终点没有包含 3
- C. 应该把 total 初始化为 3

答案：B。range 的终点不包含；要取到 3 就写到 4。

#### 互动实验：先预测，再走一步

目标是 1 + 2 + 3；终点写 3 还是 4？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
stop = 3
total = 0
for number in range(1, stop):
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
3
\`\`\`

继续实验：先选 3 找出漏掉的一轮，再选 4 检查修复。

网页参数：range 的终点（3、4）

#### 例题 2：先看中间值

用输出核对每轮发生了什么。

1. 循环内显示 number。
2. 循环外显示 total，用来检查最终答案。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 4):
    print(number)
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
1
2
3
6
\`\`\`

#### 常见误区

- 错误想法：程序没有报错，答案就一定正确。 纠正：还要把实际结果与独立手算的预期比较。

- 错误想法：发现错了就把多行一起改掉。 纠正：一次改一处，重跑小例子，更容易知道修复是否有效。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

要显示 name 的值，修正写成 nmae 的拼写。

提示：每次使用同一个名字。

##### 完整解法

1. 把读取处改为 name。

##### 参考代码与预期输出

\`\`\`python
name = "小林"
print(name)
\`\`\`

预期标准输出：

\`\`\`text
小林
\`\`\`

#### 练习 2（难度 2/6）

修正文字 "3" 与数字 2 的相加。

提示：先做整数转换。

##### 完整解法

1. int("3") 得到数字 3。

##### 参考代码与预期输出

\`\`\`python
count = int("3")
print(count + 2)
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

#### 练习 3（难度 2/6）

求 1 到 2 的和，并显示每次加的数。

提示：range 终点写 3。

##### 完整解法

1. 显示 1、2。
2. 总数为 3。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 3):
    print(number)
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
1
2
3
\`\`\`

#### 练习 4（难度 2/6）

一个修复还要测试终点 0，预期应该是多少？

提示：没有数可加时 total 保持 0。

##### 完整解法

1. 循环不执行。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 1):
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：while-stop。相对难度：2/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Errors and Exceptions](https://docs.python.org/3.13/tutorial/errors.html)。

### 章末回顾

#### 回顾 1

求 1 到 5 的和；再检查哪些数被相加。

提示：终点要写 6。

##### 完整解法

1. 相加的数为 1、2、3、4、5。
2. 总和为 15。

##### 参考代码与预期输出

\`\`\`python
total = 0
for number in range(1, 6):
    print(number)
    total = total + number
print(total)
\`\`\`

预期标准输出：

\`\`\`text
1
2
3
4
5
15
\`\`\`

#### 回顾 2

从 2 倒数到 1，每轮少 1，结束时显示“完成”。

提示：停止条件是 remaining > 0。

##### 完整解法

1. 显示 2 后变 1。
2. 显示 1 后变 0，循环结束。

##### 参考代码与预期输出

\`\`\`python
remaining = 2
while remaining > 0:
    print(remaining)
    remaining = remaining - 1
print("完成")
\`\`\`

预期标准输出：

\`\`\`text
2
1
完成
\`\`\`

## 第 3 章 组织数据

从购物清单和价格表出发，学习按位置、按名称和按是否出现组织数据。

### 3.1 列表与购物清单

**核心意思：**把一组有顺序的数据放进列表，再按位置取出或逐个处理。

**直觉：**一张购物清单：第一项、第二项，也可以在末尾添一项。

#### 学习目标

- 用方括号装一组数据
- 添一项，再逐个读取
- 两张标签可能指向同一份清单

#### 用方括号装一组数据

items = ["苹果", "面包"] 创建列表：两项文字用逗号隔开，外面是一对方括号。列表保留顺序。items[0] 取第一项，items[1] 取第二项。位置从 0 开始计数；len(items) 读作“列表有几项”，这里是 2。

#### 跟着做：读购物清单

取出第一项，再逐项显示。

##### 参考代码与预期输出

\`\`\`python
items = ["苹果", "面包"]
print(items[0])
for item in items:
    print(item)
\`\`\`

预期标准输出：

\`\`\`text
苹果
苹果
面包
\`\`\`

1. 第一项位置为 0。
2. for 按列表原有顺序取每项。
3. 所以苹果会先被单独显示一次，再出现在遍历中。

#### 添一项，再逐个读取

items.append("牛奶") 在末尾添加一项。点号表示“对这份列表进行操作”，append 是添加的名称。for item in items: 让 item 依次取每一项，不再需要自己写 range 和位置。

#### 两张标签可能指向同一份清单

other = items 并没有复印清单，只给同一份列表加了另一个名字。用 other 添加项目，items 也会看到。若需要两份独立的简单清单，用 other = items.copy()。copy 是复制。本节仅复制一层、每项都是文字或数字的列表。

#### 定义与适用条件

列表保留顺序和重复项，位置从 0 开始；append 添加到末尾，copy 可复制本节的一层简单列表。

- 读取位置必须在列表范围内；空列表没有位置 0。
- copy() 在本节用于一层、元素为数字或文字的列表。

#### 执行过程与推导

1. 第一项位置为 0。
2. for 按列表原有顺序取每项。
3. 所以苹果会先被单独显示一次，再出现在遍历中。

#### 概念检查

购物清单的第一项，用哪个位置读取？

- A. items[1]
- B. items[0]
- C. items[len(items)]

答案：B。列表的位置从 0 开始。

#### 互动实验：先预测，再走一步

添一项后，顺序会怎样？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
items = ["苹果", "面包"]
items.append('牛奶')
for item in items:
    print(item)
\`\`\`

预期标准输出：

\`\`\`text
苹果
面包
牛奶
\`\`\`

继续实验：换一项商品，观察列表如何增加一项。

网页参数：要添加的商品（"牛奶"、"鸡蛋"、"米饭"）

#### 例题 2：添加牛奶

在末尾添一项，显示项目数量。

1. 创建时有两项。
2. append 添加后变为三项。

##### 参考代码与预期输出

\`\`\`python
items = ["苹果", "面包"]
items.append("牛奶")
print(len(items))
\`\`\`

预期标准输出：

\`\`\`text
3
\`\`\`

#### 常见误区

- 错误想法：列表第一项的位置是 1。 纠正：第一项位置是 0，第二项才是 1。

- 错误想法：other = items 就得到了独立副本。 纠正：它们指向同一份列表；本节的一层简单列表可以用 copy() 复制。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

列表 [10, 20] 的第一项是多少？

提示：位置从 0 开始。

##### 完整解法

1. values[0] 是 10。

##### 参考代码与预期输出

\`\`\`python
values = [10, 20]
print(values[0])
\`\`\`

预期标准输出：

\`\`\`text
10
\`\`\`

#### 练习 2（难度 2/6）

给 [10, 20] 添加 30，逐项显示。

提示：用 append。

##### 完整解法

1. 30 放到末尾。

##### 参考代码与预期输出

\`\`\`python
values = [10, 20]
values.append(30)
for value in values:
    print(value)
\`\`\`

预期标准输出：

\`\`\`text
10
20
30
\`\`\`

#### 练习 3（难度 2/6）

求 [2, 3, 4] 的和。

提示：用 for 和 total。

##### 完整解法

1. total 依次为 2、5、9。

##### 参考代码与预期输出

\`\`\`python
values = [2, 3, 4]
total = 0
for value in values:
    total = total + value
print(total)
\`\`\`

预期标准输出：

\`\`\`text
9
\`\`\`

#### 练习 4（难度 2/6）

复制 [1, 2] 后只给副本添加 3，原列表有几项？

提示：复制用 copy()。

##### 完整解法

1. 副本有三项，原列表仍有两项。

##### 参考代码与预期输出

\`\`\`python
values = [1, 2]
other = values.copy()
other.append(3)
print(len(values))
print(len(other))
\`\`\`

预期标准输出：

\`\`\`text
2
3
\`\`\`

先修：debugging。相对难度：3/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Data Structures](https://docs.python.org/3.13/tutorial/datastructures.html)。

### 3.2 字典与按键查找

**核心意思：**字典把名称和对应的值放在一起，按名称查找。

**直觉：**通讯录用姓名找电话，不必记住它排在第几位。

#### 学习目标

- 先写一张价格表
- 添加和更新都用名称
- 找不到时给一个默认值

#### 先写一张价格表

prices = {"苹果": 3, "面包": 5} 是字典。每对中左边是名称，叫键；右边是对应的值。冒号配成一对，逗号隔开各对。prices["苹果"] 按键取出 3。这里方括号里写名称，不是列表的位置。

#### 跟着做：按商品名找价格

查苹果，再调整它的价格。

##### 参考代码与预期输出

\`\`\`python
prices = {"苹果": 3, "面包": 5}
print(prices["苹果"])
prices["苹果"] = 6
print(prices["苹果"])
\`\`\`

预期标准输出：

\`\`\`text
3
6
\`\`\`

1. 字典按键 "苹果" 找到 3。
2. 同一个键重新赋值后变成 6。
3. 不会多出第二个苹果键。

#### 添加和更新都用名称

prices["牛奶"] = 4 添加新商品；prices["苹果"] = 6 更新已有商品价格。同一个键只保留一个当前值。for name in prices: 可以依次得到各个键，再用 prices[name] 找它的值。

#### 找不到时给一个默认值

直接找不存在的键会报 KeyError。prices.get("米饭", 0) 表示：找到就取它的值，找不到先用 0；这个读取动作不会添加“米饭”。get 在计数里很方便：counts[name] = counts.get(name, 0) + 1。先从没有记录的 0 开始，再加一次。

#### 定义与适用条件

字典用键对应值；方括号读取已有键，get 可为缺失键给出默认值。

- 键必须存在才能用方括号直接读取；缺失时可以用 get 明确给默认值。

#### 执行过程与推导

1. 字典按键 "苹果" 找到 3。
2. 同一个键重新赋值后变成 6。
3. 不会多出第二个苹果键。

#### 概念检查

prices 没有“米饭”这个键，想读到默认值 0，用哪个？

- A. prices["米饭"]
- B. prices.get("米饭", 0)
- C. prices[0]

答案：B。get 可以为缺失的键提供默认值。

#### 互动实验：先预测，再走一步

查“米饭”会得到多少？字典会多一项吗？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
prices = {"苹果": 3, "面包": 5}
name = '苹果'
price = prices.get(name, 0)
print(price)
\`\`\`

预期标准输出：

\`\`\`text
3
\`\`\`

继续实验：比较已有键与缺失键，观察 prices 是否变化。

网页参数：要查的商品（"苹果"、"面包"、"米饭"）

#### 例题 2：数清每种水果

统计苹果、梨、苹果各出现几次。

1. 第一次见某种水果，get 给出 0。
2. 加 1 后存回这个键。
3. 苹果第二次出现，原来是 1，更新为 2。

##### 参考代码与预期输出

\`\`\`python
counts = {}
for name in ["苹果", "梨", "苹果"]:
    counts[name] = counts.get(name, 0) + 1
print(counts["苹果"])
print(counts["梨"])
\`\`\`

预期标准输出：

\`\`\`text
2
1
\`\`\`

#### 常见误区

- 错误想法：字典里第一个值总能用 [0] 读取。 纠正：字典按键查找，0 必须真的作为键存在才可以读取。

- 错误想法：get 缺失键时会自动把这个键加进去。 纠正：get 只是读取并返回默认值，不会添加键。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

查出面包的价格 5。

提示：用商品名作键。

##### 完整解法

1. prices["面包"] 取出 5。

##### 参考代码与预期输出

\`\`\`python
prices = {"苹果": 3, "面包": 5}
print(prices["面包"])
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

#### 练习 2（难度 1/6）

把面包价格更新为 6。

提示：给同一个键赋新值。

##### 完整解法

1. 新价格替换旧价格。

##### 参考代码与预期输出

\`\`\`python
prices = {"面包": 5}
prices["面包"] = 6
print(prices["面包"])
\`\`\`

预期标准输出：

\`\`\`text
6
\`\`\`

#### 练习 3（难度 2/6）

对没有记录的米饭返回 0。

提示：用 get 的第二个参数。

##### 完整解法

1. 找不到就返回默认值 0。

##### 参考代码与预期输出

\`\`\`python
prices = {"苹果": 3}
print(prices.get("米饭", 0))
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

#### 练习 4（难度 2/6）

遍历空清单统计水果，总共有几个键？

提示：空列表不执行循环。

##### 完整解法

1. 字典保持空，长度为 0。

##### 参考代码与预期输出

\`\`\`python
counts = {}
for name in []:
    counts[name] = counts.get(name, 0) + 1
print(len(counts))
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：lists。相对难度：3/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Data Structures](https://docs.python.org/3.13/tutorial/datastructures.html)。

### 3.3 元组与集合：固定记录和去重

**核心意思：**固定的一组值可以用元组；只关心是否出现过，可以用集合。

**直觉：**地点是一对坐标；去过哪些城市，则不需要把同一个城市记两遍。

#### 学习目标

- 把固定的一对数据放一起
- 重复的数据只保留一份
- 先问自己关心什么

#### 把固定的一对数据放一起

point = (3, 4) 是元组，外面用圆括号。像列表一样，point[0] 取 3，point[1] 取 4；但不能给某个位置重新赋值。适合表达一个固定记录，例如坐标。本节先用两项元组；只有一项时要写 (3,) 才是元组。

#### 跟着做：读取坐标

从一对固定坐标中取出两个数。

##### 参考代码与预期输出

\`\`\`python
point = (3, 4)
print(point[0])
print(point[1])
\`\`\`

预期标准输出：

\`\`\`text
3
4
\`\`\`

1. 圆括号把 3、4 放在一起。
2. 位置 0 和 1 分别取出两个坐标。

#### 重复的数据只保留一份

cities = {"北京", "上海", "北京"} 是集合。每个值只保留一份，所以 len(cities) 是 2。注意：这里没有冒号，和字典的键值对不同。空集合要写 set()；{} 是空字典。

#### 先问自己关心什么

"北京" in cities 判断是否包含这个值。集合没有第一个、第二个位置，也不承诺输出顺序；需要稳定地显示时，可用 sorted(cities) 得到排好顺序的列表。要保留重复和原有顺序用列表；按名称配值用字典；固定记录用元组；去重与包含判断用集合。

#### 定义与适用条件

元组的位置不能重新赋值；集合只保留不同值，可用 in 检查是否包含。

- 集合中的值需要可作为集合元素；本节只使用数字和文字。
- 集合不提供按位置读取，也不保证显示顺序。

#### 执行过程与推导

1. 圆括号把 3、4 放在一起。
2. 位置 0 和 1 分别取出两个坐标。
3. 最后用预期输出核对自己的预测。

#### 概念检查

需要保留购物清单的顺序和重复项，该选什么？

- A. 集合
- B. 列表
- C. 用集合的位置 0 读取第一项

答案：B。不同需求决定容器；清单顺序和重复用列表。

#### 互动实验：先预测，再走一步

重复的 1 会计几次？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
values = [1, 1, 2]
unique = set(values)
print(len(unique))
print(2 in unique)
\`\`\`

预期标准输出：

\`\`\`text
2
True
\`\`\`

继续实验：比较空列表和有重复的列表；集合卡片按固定次序显示，便于观察。

网页参数：原始记录（[1,1,2]、[1,2,3]、[]）

#### 例题 2：只数不同城市

北京、上海、北京，一共几个不同城市？

1. 集合自动保留不同值。
2. 北京虽出现两次，只计一次。

##### 参考代码与预期输出

\`\`\`python
cities = {"北京", "上海", "北京"}
print(len(cities))
print("北京" in cities)
\`\`\`

预期标准输出：

\`\`\`text
2
True
\`\`\`

#### 常见误区

- 错误想法：集合会保留每一次重复出现。 纠正：集合只保留不同值；要保留重复用列表。

- 错误想法：{} 就是空集合。 纠正：{} 是空字典，空集合用 set()。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

元组 (5, 8) 的第二项是多少？

提示：位置是 1。

##### 完整解法

1. 读取 point[1]。

##### 参考代码与预期输出

\`\`\`python
point = (5, 8)
print(point[1])
\`\`\`

预期标准输出：

\`\`\`text
8
\`\`\`

#### 练习 2（难度 1/6）

列表 [1, 1, 2] 转成集合后有几个值？

提示：set 可以把列表转成集合。

##### 完整解法

1. 重复的 1 只留一次。

##### 参考代码与预期输出

\`\`\`python
values = set([1, 1, 2])
print(len(values))
\`\`\`

预期标准输出：

\`\`\`text
2
\`\`\`

#### 练习 3（难度 1/6）

判断 3 是否在集合 {1, 2} 中。

提示：用 in。

##### 完整解法

1. 3 没出现过，结果 False。

##### 参考代码与预期输出

\`\`\`python
values = {1, 2}
print(3 in values)
\`\`\`

预期标准输出：

\`\`\`text
False
\`\`\`

#### 练习 4（难度 1/6）

创建空集合，再查看长度。

提示：不要写 {}。

##### 完整解法

1. set() 建立空集合。
2. 长度为 0。

##### 参考代码与预期输出

\`\`\`python
values = set()
print(len(values))
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：dictionaries。相对难度：3/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Data Structures](https://docs.python.org/3.13/tutorial/datastructures.html)。

### 3.4 推导式与数据整理

**核心意思：**列表推导式是“逐个处理并收集结果”的短写法，先读懂普通循环。

**直觉：**把每件商品的数量翻倍，收集成一张新清单。

#### 学习目标

- 先用已经学会的 for
- 再把同样的步骤写成一行
- 需要时加一个筛选条件

#### 先用已经学会的 for

从 values = [1, 2, 3] 出发，新建 result = []。循环里计算 value * 2，再 result.append(...) 放进新列表。得到 [2, 4, 6]。原列表仍是 [1, 2, 3]，因为我们添加的是新列表。

#### 跟着做：普通循环收集结果

把 1、2、3 分别翻倍。

##### 参考代码与预期输出

\`\`\`python
values = [1, 2, 3]
result = []
for value in values:
    result.append(value * 2)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
[2, 4, 6]
\`\`\`

1. 从空 result 开始。
2. 每轮计算两倍并追加。
3. 得到 2、4、6 三项。

#### 再把同样的步骤写成一行

result = [value * 2 for value in values] 与上面的简单循环目的相同。阅读时先找右边的 for：从 values 逐个取 value；再看前面的 value * 2：每项变成什么；外面的方括号表示收集成列表。

#### 需要时加一个筛选条件

[value * 2 for value in values if value >= 2] 表示先保留至少 2 的项，再翻倍；结果 [4, 6]。先用小列表手算。遇到多层循环、复杂条件，继续写普通 for 更容易检查；短不是这节的目标，能解释每项怎么来才是。

#### 定义与适用条件

[表达式 for 项目 in 数据 if 条件] 从数据逐项筛选、计算，并收集成新列表；条件部分可省略。

- 每段示例都从头独立运行；先按本节给出的输入观察，再改变一处。

#### 执行过程与推导

1. 从空 result 开始。
2. 每轮计算两倍并追加。
3. 得到 2、4、6 三项。

#### 概念检查

看推导式不明白时，可以怎么检查？

- A. 先把它写得更短
- B. 还原成普通 for 循环
- C. 认为它会直接修改原列表

答案：B。还原成 for、if、append，逐项手算。

#### 互动实验：先预测，再走一步

门槛是 2，哪些数留下？翻倍后是什么？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
values = [1, 2, 3]
minimum = 2
result = []
for value in values:
    if value >= minimum:
        result.append(value * 2)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
[4, 6]
\`\`\`

继续实验：把门槛改为 4，看看有没有项目加入结果。这是对应推导式的逐步展开。

网页参数：保留的最小值（1、2、3、4）

#### 例题 2：写成推导式

只取至少 2 的数，再翻倍。

1. 1 不满足条件，跳过。
2. 2、3 保留下来。
3. 分别乘 2 得到 4、6。

##### 参考代码与预期输出

\`\`\`python
values = [1, 2, 3]
result = [value * 2 for value in values if value >= 2]
print(result)
\`\`\`

预期标准输出：

\`\`\`text
[4, 6]
\`\`\`

#### 常见误区

- 错误想法：推导式一定比普通循环更适合。 纠正：简单任务可用推导式；步骤复杂时普通循环更易检查。

- 错误想法：创建 result 时会自动修改 values。 纠正：本节收集到新列表 result，原列表不自动改变。

#### 独立练习与完整解答

#### 练习 1（难度 2/6）

把 [1, 2] 每项加 1，得到新列表。

提示：前面的表达式是 value + 1。

##### 完整解法

1. 1 变 2，2 变 3。

##### 参考代码与预期输出

\`\`\`python
values = [1, 2]
result = [value + 1 for value in values]
print(result)
\`\`\`

预期标准输出：

\`\`\`text
[2, 3]
\`\`\`

#### 练习 2（难度 2/6）

从 [1, 2, 3] 里只保留至少 2 的数。

提示：前面仍写 value。

##### 完整解法

1. 筛选但不改变数值。

##### 参考代码与预期输出

\`\`\`python
values = [1, 2, 3]
result = [value for value in values if value >= 2]
print(result)
\`\`\`

预期标准输出：

\`\`\`text
[2, 3]
\`\`\`

#### 练习 3（难度 2/6）

用普通循环完成上一题。

提示：满足 if 后才 append。

##### 完整解法

1. 新列表只收到 2 和 3。

##### 参考代码与预期输出

\`\`\`python
values = [1, 2, 3]
result = []
for value in values:
    if value >= 2:
        result.append(value)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
[2, 3]
\`\`\`

#### 练习 4（难度 2/6）

把空列表每项翻倍，会得到什么？

提示：没有项可以处理。

##### 完整解法

1. 新列表也是空列表。

##### 参考代码与预期输出

\`\`\`python
values = []
result = [value * 2 for value in values]
print(result)
\`\`\`

预期标准输出：

\`\`\`text
[]
\`\`\`

先修：tuples-sets。相对难度：3/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Data Structures](https://docs.python.org/3.13/tutorial/datastructures.html)。

### 章末回顾

#### 回顾 1

统计清单 ["苹果", "梨", "苹果"] 中每种水果的数量。

提示：字典按水果名称累计。

##### 完整解法

1. 苹果两次。
2. 梨一次。

##### 参考代码与预期输出

\`\`\`python
counts = {}
for name in ["苹果", "梨", "苹果"]:
    counts[name] = counts.get(name, 0) + 1
print(counts["苹果"])
print(counts["梨"])
\`\`\`

预期标准输出：

\`\`\`text
2
1
\`\`\`

#### 回顾 2

复制 [3, 1] 后给副本加 2，显示两份清单。

提示：用 copy()，不是赋值另一名字。

##### 完整解法

1. 复制成独立的一层列表。
2. 原列表不添加 2。

##### 参考代码与预期输出

\`\`\`python
original = [3, 1]
other = original.copy()
other.append(2)
print(original)
print(other)
\`\`\`

预期标准输出：

\`\`\`text
[3, 1]
[3, 1, 2]
\`\`\`

## 第 4 章 组织程序

能编写函数、设计接口、导入模块并处理预期异常。

### 4.1 函数、参数与返回值

**核心意思：**把常用的几步起一个名字，调用时给它输入，再接住返回的结果。

**直觉：**一台翻倍小机器：放入 3，拿到 6。

#### 学习目标

- 先给步骤起名字
- 调用之后，接住结果
- 返回和显示是两件事

#### 先给步骤起名字

def double(number): 表示定义一个叫 double 的函数。函数就是一组可以重复使用的步骤；number 是它接收输入的名字，叫参数。缩进的 return number * 2 计算两倍，并把结果交给调用处。定义时只是记下步骤，还没有拿 3 去计算。

#### 跟着做：翻倍机器

输入 3，接住并显示两倍。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

result = double(3)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
6
\`\`\`

1. def 先记下步骤。
2. double(3) 让 number 暂时是 3。
3. return 交回 6，result 记住 6。

#### 调用之后，接住结果

result = double(3) 才是真正调用：3 交给 number，算出 6，return 把 6 交回 result。print(result) 最后显示它。可以换一个输入再次调用，不需要重写函数里面的步骤。

#### 返回和显示是两件事

print 负责把内容显示在屏幕；return 负责把结果交回调用处。想把结果继续做计算，就需要 return。若函数只 print 没有 return，调用处得到的是 None，意思是没有一个有效返回值可以用于这里的数量计算。函数内部的参数只在这次调用中使用。

#### 定义与适用条件

def 定义函数，调用提供输入；return 把结果交回调用处，print 把内容显示出来。

- 先定义再调用；需要可计算的返回结果时，使用 return。

#### 执行过程与推导

1. def 先记下步骤。
2. double(3) 让 number 暂时是 3。
3. return 交回 6，result 记住 6。

#### 概念检查

要把函数计算结果交回调用处，用哪个？

- A. print
- B. return
- C. 只写 def 就会计算

答案：B。return 交回结果；print 只负责显示。

#### 互动实验：先预测，再走一步

函数定义时会显示什么？调用 3 后又会怎样？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

result = double(3)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
6
\`\`\`

继续实验：试输入 0，再观察从调用处进入函数、返回调用处的顺序。

网页参数：送进函数的数（0、1、2、3、4、5）

#### 例题 2：继续使用结果

输入 4，把返回结果再加 1。

1. double(4) 返回 8。
2. 调用处继续加 1 得到 9。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

result = double(4) + 1
print(result)
\`\`\`

预期标准输出：

\`\`\`text
9
\`\`\`

#### 常见误区

- 错误想法：写下 def 后就已经算出了结果。 纠正：def 记下步骤；真正调用才运行函数。

- 错误想法：print 和 return 可以互相替代。 纠正：print 显示，return 交回结果；调用处继续计算需要返回值。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

调用翻倍函数，输入 5。

提示：定义后再调用。

##### 完整解法

1. 返回 10。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

print(double(5))
\`\`\`

预期标准输出：

\`\`\`text
10
\`\`\`

#### 练习 2（难度 2/6）

写 add_one，返回输入加 1。

提示：用 return。

##### 完整解法

1. 输入 3，返回 4。

##### 参考代码与预期输出

\`\`\`python
def add_one(number):
    return number + 1

print(add_one(3))
\`\`\`

预期标准输出：

\`\`\`text
4
\`\`\`

#### 练习 3（难度 2/6）

连续调用 add_one 两次，分别输入 1 和 4。

提示：每次独立传入一个值。

##### 完整解法

1. 分别返回 2、5。

##### 参考代码与预期输出

\`\`\`python
def add_one(number):
    return number + 1

print(add_one(1))
print(add_one(4))
\`\`\`

预期标准输出：

\`\`\`text
2
5
\`\`\`

#### 练习 4（难度 1/6）

翻倍函数输入 0，预期是多少？

提示：0 也是可用输入。

##### 完整解法

1. 0 * 2 = 0。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

print(double(0))
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：comprehensions。相对难度：4/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[More Control Flow Tools](https://docs.python.org/3.13/tutorial/controlflow.html)。

### 4.2 传入参数与默认值

**核心意思：**调用函数时，可以按位置给值，也可以写清参数名；常用值可以设默认值。

**直觉：**点饮料：说明杯数和单价；不特别说明杯数时，按一杯准备。

#### 学习目标

- 先看清每个输入代表什么
- 把常用值写成默认值
- 列表输入要约定是否修改

#### 先看清每个输入代表什么

def cost(price, count): 有两个参数。cost(3, 2) 按位置把 3 交给 price，2 交给 count，计算 6。顺序错了，含义可能就变了；像单价和数量这样的参数，要先用文字写清单位。

#### 跟着做：默认买一件

单价 3，分别购买一件和两件。

##### 参考代码与预期输出

\`\`\`python
def cost(price, count=1):
    return price * count

print(cost(3))
print(cost(3, 2))
\`\`\`

预期标准输出：

\`\`\`text
3
6
\`\`\`

1. 默认 count 是 1。
2. 传入 2 时覆盖默认值。
3. 结果分别为 3 和 6。

#### 把常用值写成默认值

def cost(price, count=1): 表示没有给 count 时使用 1。cost(3) 是买一件，cost(3, 2) 是买两件。cost(price=3, count=2) 明确写出参数名，这叫按关键字传值。这里默认参数放在必填参数后面。

#### 列表输入要约定是否修改

如果只想算清单总数，可以循环读取列表、返回 total，而不添加或删除原列表。这样调用者更容易预测结果。默认值先使用数字或文字；把 [] 放在默认值里可能让多次调用共享同一个列表，进阶说明见选读。

#### 定义与适用条件

参数可按位置或名称提供；默认值在这个参数被省略时使用。

- 明确传入的参数覆盖默认值；必填参数放在默认参数前。

#### 执行过程与推导

1. 默认 count 是 1。
2. 传入 2 时覆盖默认值。
3. 结果分别为 3 和 6。

#### 概念检查

cost(price, count=1) 被 cost(5, 0) 调用时，count 是多少？

- A. 1（默认值总生效）
- B. 0（明确传入的值）
- C. 5（参数顺序无关）

答案：B。明确传入的值覆盖默认值。

#### 互动实验：先预测，再走一步

单价 3、数量 2，返回多少？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
def cost(price, count=1):
    return price * count

result = cost(3, 2)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
6
\`\`\`

继续实验：选数量 0；想测试默认值，可在本机把调用改成 cost(3)。

网页参数：购买数量（0、1、2、3、4）

#### 例题 2：写清参数名

单价 4，买 3 件。

1. price 明确接到 4。
2. count 明确接到 3。

##### 参考代码与预期输出

\`\`\`python
def cost(price, count=1):
    return price * count

print(cost(count=3, price=4))
\`\`\`

预期标准输出：

\`\`\`text
12
\`\`\`

#### 常见误区

- 错误想法：给了数量 0，默认值 1 仍然会生效。 纠正：明确传入 0 就按 0 使用；默认值只在省略时使用。

- 错误想法：按位置传值时顺序可以随便换。 纠正：每个位置对应一个参数；不清楚时写参数名。

#### 选读：为什么不把 [] 当默认清单

选读：学完主线后再看。

默认值在定义函数时建立一次。如果使用 def add(item, items=[]): 并往 items 添加，多次省略 items 的调用会共用这份列表。安全的做法是默认 items=None，再在函数内判断 if items is None: items = []。None 表示这里尚未提供清单；is None 检查它是否就是这个标记。初学阶段也可以让列表参数必填，避免隐含状态。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

单价 5，使用默认数量 1。

提示：只传 price。

##### 完整解法

1. 5 * 1 = 5。

##### 参考代码与预期输出

\`\`\`python
def cost(price, count=1):
    return price * count

print(cost(5))
\`\`\`

预期标准输出：

\`\`\`text
5
\`\`\`

#### 练习 2（难度 1/6）

单价 5，数量 2，用参数名调用。

提示：写 price=5、count=2。

##### 完整解法

1. 结果为 10。

##### 参考代码与预期输出

\`\`\`python
def cost(price, count=1):
    return price * count

print(cost(price=5, count=2))
\`\`\`

预期标准输出：

\`\`\`text
10
\`\`\`

#### 练习 3（难度 2/6）

写 total_of，只读取 [2, 3] 并返回总和。

提示：不要修改输入列表。

##### 完整解法

1. 累加得到 5。
2. 原列表仍有两项。

##### 参考代码与预期输出

\`\`\`python
def total_of(values):
    total = 0
    for value in values:
        total = total + value
    return total

values = [2, 3]
print(total_of(values))
print(values)
\`\`\`

预期标准输出：

\`\`\`text
5
[2, 3]
\`\`\`

#### 练习 4（难度 1/6）

单价 5，数量 0 的费用是多少？

提示：明确传入 0。

##### 完整解法

1. 0 会覆盖默认值 1。
2. 费用为 0。

##### 参考代码与预期输出

\`\`\`python
def cost(price, count=1):
    return price * count

print(cost(5, 0))
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：functions。相对难度：4/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[More Control Flow Tools](https://docs.python.org/3.13/tutorial/controlflow.html)。

### 4.3 模块：使用现成的工具

**核心意思：**把可复用的函数放在单独文件，另一个文件导入后就能使用。

**直觉：**把常用工具放进工具盒，下次按名字取出来。

#### 学习目标

- 先使用 Python 自带的工具盒
- 把自己的工具放进 helpers.py
- 导入时只准备工具

#### 先使用 Python 自带的工具盒

import math 导入自带的数学模块。模块是一组放在一起的工具。math.sqrt(9) 表示用 math 里的 sqrt 计算平方根，得到 3.0。点号在这里连接模块名与工具名，不必自己编写平方根算法。

#### 跟着做：使用平方根工具

求 9 的平方根。

##### 参考代码与预期输出

\`\`\`python
import math
result = math.sqrt(9)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
3.0
\`\`\`

1. import math 准备模块。
2. math.sqrt(9) 计算出 3.0。
3. print 显示结果。

#### 把自己的工具放进 helpers.py

附录的 helpers.py 中定义 double。main.py 写 from helpers import double 后就能调用 double(5)。把两个文件保存在同一目录，在终端进入这个目录，再运行 main.py。不要把自己的文件命名成 math.py 或 json.py，会遮住同名自带模块。

#### 导入时只准备工具

模块里普通的顶层代码在第一次导入时也会执行。为了避免导入工具就弹出提问，演示或命令行操作放在 if __name__ == "__main__": 下面。先把这句当成入口标记：直接运行这个文件时执行，作为工具导入时不执行；不需要先研究双下划线。

#### 定义与适用条件

import 准备模块工具；入口判断使演示只在文件被直接运行时执行。

- 双文件示例需要把 helpers.py、main.py 放在同一目录。
- sqrt 的本节输入为非负数。

#### 执行过程与推导

1. import math 准备模块。
2. math.sqrt(9) 计算出 3.0。
3. print 显示结果。

#### 概念检查

把函数放在模块里供别人导入，演示代码应放哪里？

- A. 普通顶层，一导入就提问
- B. if __name__ == "__main__": 下面
- C. 写在注释中也会执行

答案：B。入口判断把直接运行时的演示步骤围在一起。

#### 互动实验：先预测，再走一步

9 的平方根是多少？结果显示为整数还是小数？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
import math
number = 9
result = math.sqrt(number)
print(result)
\`\`\`

预期标准输出：

\`\`\`text
3.0
\`\`\`

继续实验：换成 0、4、16，核对自己知道的平方根。

网页参数：待计算的数（0、4、9、16、25）

#### 例题 2：直接运行入口

直接运行本文件，显示翻倍结果。

1. 先定义可复用函数。
2. 入口判断在直接运行时成立。
3. 调用 double(5) 得到 10。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

if __name__ == "__main__":
    print(double(5))
\`\`\`

预期标准输出：

\`\`\`text
10
\`\`\`

#### 常见误区

- 错误想法：导入一个文件，不会执行它的任何顶层代码。 纠正：普通顶层代码也会执行；演示步骤放在入口判断内。

- 错误想法：自己的 math.py 不会影响 import math。 纠正：同名文件可能遮住自带模块，练习文件用别的名字。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

求 16 的平方根。

提示：导入 math，再 sqrt。

##### 完整解法

1. 结果为 4.0。

##### 参考代码与预期输出

\`\`\`python
import math
print(math.sqrt(16))
\`\`\`

预期标准输出：

\`\`\`text
4.0
\`\`\`

#### 练习 2（难度 1/6）

求 0 的平方根。

提示：0 是平方根的边界。

##### 完整解法

1. 结果为 0.0。

##### 参考代码与预期输出

\`\`\`python
import math
print(math.sqrt(0))
\`\`\`

预期标准输出：

\`\`\`text
0.0
\`\`\`

#### 练习 3（难度 2/6）

直接运行一个入口，显示“工具演示”。

提示：使用给出的入口标记。

##### 完整解法

1. 直接运行时 __name__ 是 "__main__"。

##### 参考代码与预期输出

\`\`\`python
if __name__ == "__main__":
    print("工具演示")
\`\`\`

预期标准输出：

\`\`\`text
工具演示
\`\`\`

#### 练习 4（难度 1/6）

把 sqrt 单独导入，再求 25 的平方根。

提示：from math import sqrt。

##### 完整解法

1. 这次直接写 sqrt(25)。

##### 参考代码与预期输出

\`\`\`python
from math import sqrt
print(sqrt(25))
\`\`\`

预期标准输出：

\`\`\`text
5.0
\`\`\`

先修：arguments、functions。相对难度：4/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Modules and venv](https://docs.python.org/3.13/tutorial/modules.html)；[venv](https://docs.python.org/3.13/library/venv.html)；[pathlib](https://docs.python.org/3.13/library/pathlib.html)。

### 4.4 异常与输入验证

**核心意思：**预料用户可能填错时，给转换步骤准备一个明确的处理办法。

**直觉：**登记数量时，有人填“两个”；先指出哪里不合要求，再请他重填。

#### 学习目标

- 先把容易失败的一步找出来
- 用 try 和 except 说明失败时做什么
- 能转换，不等于符合要求

#### 先把容易失败的一步找出来

int("3") 可以转为数字，int("三") 会产生 ValueError，表示给出的文字不适合这次转换。没有处理时，程序会停在这里。先明确我们想处理的错误是什么，不要把所有代码都包成一个模糊的“失败”。

#### 跟着做：处理填错的文字

尝试把“三”转换成数量。

##### 参考代码与预期输出

\`\`\`python
text = "三"
try:
    count = int(text)
    print(count)
except ValueError:
    print("请输入整数，例如 3")
\`\`\`

预期标准输出：

\`\`\`text
请输入整数，例如 3
\`\`\`

1. try 执行转换。
2. 转换失败，进入 ValueError 处理分支。
3. 显示明确要求，而不是继续用一个假数字。

#### 用 try 和 except 说明失败时做什么

try: 下面尝试转换；except ValueError: 下面只处理这种转换失败。成功时跳过 except，失败时跳过 try 中还没执行的句子，转到 except。错误处理不是让失败变成功，而是给用户一个可理解的反馈。

#### 能转换，不等于符合要求

"-2" 可以转成整数，但购物数量不能是负数。转换后还要判断 count < 0；函数可以用 raise ValueError("数量不能为负") 主动拒绝。不要随手捕获所有异常，否则拼写错误、文件问题也可能被误说成数量问题。

#### 定义与适用条件

try 尝试可能失败的步骤，except 指定错误时执行处理；raise 主动报告不符合要求的输入。

- 只捕获预期的错误类型；转换之后仍需检查数值范围。

#### 执行过程与推导

1. try 执行转换。
2. 转换失败，进入 ValueError 处理分支。
3. 显示明确要求，而不是继续用一个假数字。

#### 概念检查

输入 "-2" 能被 int 转换，是否一定是合法购物数量？

- A. 转换成功就一定合法
- B. 还要检查是否为负
- C. except 会自动把负数改成 0

答案：B。转换检查文字能否变数字，范围检查决定数字是否可用。

#### 互动实验：先预测，再走一步

输入“三”和输入“-2”，会走相同的处理步骤吗？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
text = '3'
try:
    count = int(text)
    if count < 0:
        print("不能为负")
    else:
        print(count)
except ValueError:
    print("请输入整数")
\`\`\`

预期标准输出：

\`\`\`text
3
\`\`\`

继续实验：分别选择合法、负数和错误文字，观察不同的执行路径。

网页参数：模拟收到的文字（"3"、"0"、"-2"、"三"）

#### 例题 2：拒绝负数量

定义数量检查，测试 -2。

1. 先成功转成 -2。
2. 检查负数时主动抛出 ValueError。
3. 调用处显示这个错误的文字。

##### 参考代码与预期输出

\`\`\`python
def read_count(text):
    count = int(text)
    if count < 0:
        raise ValueError("数量不能为负")
    return count

try:
    print(read_count("-2"))
except ValueError as error:
    print(error)
\`\`\`

预期标准输出：

\`\`\`text
数量不能为负
\`\`\`

#### 常见误区

- 错误想法：能转成整数，就一定是合法数量。 纠正：转换只检查表示格式；负数等范围问题另行检查。

- 错误想法：捕获错误后，Python 会自动补一个有效数字。 纠正：except 只执行你写下的处理步骤，不会自动修复输入。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

把合法文字 "4" 转换并显示。

提示：成功时不会走 except。

##### 完整解法

1. 结果为 4。

##### 参考代码与预期输出

\`\`\`python
try:
    count = int("4")
    print(count)
except ValueError:
    print("请输入整数")
\`\`\`

预期标准输出：

\`\`\`text
4
\`\`\`

#### 练习 2（难度 2/6）

处理 "4.5" 不能直接转成整数的问题。

提示：只捕获 ValueError。

##### 完整解法

1. 转换失败，显示请输入整数。

##### 参考代码与预期输出

\`\`\`python
try:
    count = int("4.5")
    print(count)
except ValueError:
    print("请输入整数")
\`\`\`

预期标准输出：

\`\`\`text
请输入整数
\`\`\`

#### 练习 3（难度 2/6）

转换 -1 后，显示“不能为负”。

提示：成功转换后再判断范围。

##### 完整解法

1. 能转换，但不符合数量要求。

##### 参考代码与预期输出

\`\`\`python
count = int("-1")
if count < 0:
    print("不能为负")
else:
    print(count)
\`\`\`

预期标准输出：

\`\`\`text
不能为负
\`\`\`

#### 练习 4（难度 2/6）

数量 0 合法，程序应该怎样显示？

提示：拒绝小于 0，不拒绝等于 0。

##### 完整解法

1. 0 不小于 0。

##### 参考代码与预期输出

\`\`\`python
count = int("0")
if count < 0:
    print("不能为负")
else:
    print(count)
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：modules。相对难度：4/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Errors and Exceptions](https://docs.python.org/3.13/tutorial/errors.html)。

### 章末回顾

#### 回顾 1

写 read_count，将整数文字转成非负数量；检查 "3"、"0"、"-1" 和 "三"。

提示：转换后检查小于 0。

##### 完整解法

1. 3、0 合法。
2. -1 是范围错误，“三”是转换错误。

##### 参考代码与预期输出

\`\`\`python
def read_count(text):
    count = int(text)
    if count < 0:
        raise ValueError("数量不能为负")
    return count

for text in ["3", "0", "-1", "三"]:
    try:
        print(read_count(text))
    except ValueError:
        print("请输入非负整数")
\`\`\`

预期标准输出：

\`\`\`text
3
0
请输入非负整数
请输入非负整数
\`\`\`

#### 回顾 2

写 cost(price, count=1)，检查单价 5 时买一件与两件。

提示：默认数量只在省略时生效。

##### 完整解法

1. 省略 count 时费用为 5。
2. 传入 2 时费用为 10。

##### 参考代码与预期输出

\`\`\`python
def cost(price, count=1):
    return price * count

print(cost(5))
print(cost(price=5, count=2))
\`\`\`

预期标准输出：

\`\`\`text
5
10
\`\`\`

## 第 5 章 完成应用

能处理文件、验证格式、测试边界并交付命令行工具。

### 5.1 文本文件与路径

**核心意思：**变量在程序结束后不会留下；写进文件，下一次才能重新读取。

**直觉：**把今天的清单记在纸上，明天还能打开看。

#### 学习目标

- 先决定写在哪里
- 写入时说明模式和文字编码
- 读取后仍然得到文字

#### 先决定写在哪里

notes.txt 是文件名；不写完整路径时，它相对于程序运行时的当前目录，不一定是代码所在目录。第一次实验请在独立练习文件夹进行。网页互动在隔离的示例目录中演示，不会写入你的电脑文件。

#### 跟着做：留下一条记录

写入“买苹果”，关闭后重新读取。

##### 参考代码与预期输出

\`\`\`python
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("买苹果\\n")
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text, end="")
\`\`\`

预期标准输出：

\`\`\`text
买苹果
\`\`\`

1. w 创建或覆盖示例文件，写入一行。
2. 离开 with 后文件关闭。
3. r 重新打开，读取并显示原内容。

#### 写入时说明模式和文字编码

with open("notes.txt", "w", encoding="utf-8") as file: 打开文件供写入。w 是写入模式，会清空同名文件原来的内容；因此用新文件练习。encoding 说明如何保存中文，utf-8 是本书统一使用的编码。file.write("买苹果\\n") 写入文字，\\n 表示换行。with 在这段缩进代码结束后自动关闭文件。

#### 读取后仍然得到文字

用 r 模式打开同一个文件，text = file.read() 把内容读成字符串。为了观察文件自带的换行，可以 print(text, end="")；end="" 表示这次 print 不再额外换行。需要在原内容末尾追加时用 a 模式；先确认目标文件。

#### 定义与适用条件

with open(...) 打开文件并在该段结束后关闭；r 读取、w 覆盖写入、a 末尾追加。

- w 会覆盖同名文件，请在独立示例目录使用新文件名。
- 相对路径从当前工作目录解释；读写中文统一使用 utf-8。

#### 执行过程与推导

1. w 创建或覆盖示例文件，写入一行。
2. 离开 with 后文件关闭。
3. r 重新打开，读取并显示原内容。

#### 概念检查

要保留原内容并在末尾添加，用哪个模式？

- A. w
- B. a
- C. r 会自动保存修改

答案：B。a 是追加；w 会覆盖；r 用于读取。

#### 互动实验：先预测，再走一步

变量里的文字写进文件再读回，会不会改变？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
message = '买苹果'
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write(message)
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
\`\`\`

预期标准输出：

\`\`\`text
买苹果
\`\`\`

继续实验：试空文字，观察读到的 text。每次实验都从新的示例目录开始。

网页参数：要保存的文字（"买苹果"、"明天练习"、""）

#### 例题 2：在末尾追加

已有第一行，再用 a 添加第二行。

1. 先建立示例文件。
2. a 保留原内容，在末尾写入。
3. 读取时得到两行。

##### 参考代码与预期输出

\`\`\`python
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("买苹果\\n")
with open("notes.txt", "a", encoding="utf-8") as file:
    file.write("买面包\\n")
with open("notes.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text, end="")
\`\`\`

预期标准输出：

\`\`\`text
买苹果
买面包
\`\`\`

#### 常见误区

- 错误想法：w 会在旧内容末尾追加。 纠正：w 会清空旧内容；追加用 a。

- 错误想法：相对路径永远从代码文件所在目录开始。 纠正：它从运行时的当前工作目录开始；先确认运行位置。

#### 独立练习与完整解答

#### 练习 1（难度 2/6）

把“你好”写入新的 hello.txt，再读取。

提示：写完后用 r 打开。

##### 完整解法

1. 同样的 utf-8 编码用于写和读。

##### 参考代码与预期输出

\`\`\`python
with open("hello.txt", "w", encoding="utf-8") as file:
    file.write("你好")
with open("hello.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
\`\`\`

预期标准输出：

\`\`\`text
你好
\`\`\`

#### 练习 2（难度 2/6）

给示例文件追加 B，原内容为 A。

提示：模式 a 保留原内容。

##### 完整解法

1. 先写 A，再追加 B。

##### 参考代码与预期输出

\`\`\`python
with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("A")
with open("letters.txt", "a", encoding="utf-8") as file:
    file.write("B")
with open("letters.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
\`\`\`

预期标准输出：

\`\`\`text
AB
\`\`\`

#### 练习 3（难度 2/6）

把示例文件的 A 用 w 改写成 B。

提示：再次 w 会清空旧内容。

##### 完整解法

1. 只剩 B。

##### 参考代码与预期输出

\`\`\`python
with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("A")
with open("letters.txt", "w", encoding="utf-8") as file:
    file.write("B")
with open("letters.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(text)
\`\`\`

预期标准输出：

\`\`\`text
B
\`\`\`

#### 练习 4（难度 2/6）

读取一个空的示例文件，文字长度是多少？

提示：read 返回空字符串。

##### 完整解法

1. len(text) 是 0。

##### 参考代码与预期输出

\`\`\`python
with open("empty.txt", "w", encoding="utf-8") as file:
    file.write("")
with open("empty.txt", "r", encoding="utf-8") as file:
    text = file.read()
print(len(text))
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：exceptions、modules。相对难度：5/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[Input and Output](https://docs.python.org/3.13/tutorial/inputoutput.html)；[pathlib](https://docs.python.org/3.13/library/pathlib.html)。

### 5.2 JSON 与 CSV：保存结构和读取表格

**核心意思：**JSON 保存结构，CSV 保存表格；读入后仍要检查值的类型和含义。

**直觉：**把字典装进文字文件，或把账单整理成一行一行的表格。

#### 学习目标

- 用 JSON 保存一个字典
- 用 CSV 读取一张小表
- 数字列读进来还是文字

#### 用 JSON 保存一个字典

json.dumps(data, ensure_ascii=False) 把字典变成 JSON 文字；dumps 中的 s 可以先记成“得到字符串”。ensure_ascii=False 让中文保持可读。json.loads(text) 再把文字还原为数据。这样不只保存字典的显示样子，而是使用约定好的数据格式。

#### 跟着做：保存并还原一条记录

把姓名和数量转成 JSON 再读回。

##### 参考代码与预期输出

\`\`\`python
import json
data = {"name": "小林", "count": 3}
text = json.dumps(data, ensure_ascii=False)
restored = json.loads(text)
print(restored["name"])
print(restored["count"])
\`\`\`

预期标准输出：

\`\`\`text
小林
3
\`\`\`

1. 先导入 json。
2. dumps 得到标准格式文字。
3. loads 还原后，按键读取姓名和数量。

#### 用 CSV 读取一张小表

CSV 的每行是一条记录，第一行可以写列名。csv.DictReader 根据列名把每行读成字典。下面用 io.StringIO 包装一段示例文字，让它像文本文件一样可被读取；io 是输入输出工具模块，真实文件也可以用 open 打开后交给 DictReader。先用小表避免把文件路径问题和表格问题混在一起。

#### 数字列读进来还是文字

CSV 的 amount 列看起来是 125，实际 row["amount"] 是字符串 "125"。先 int 转成整数分，再相加。完整项目还要检查列名、缺失值和负数；不能因为表格能读出来，就认为每一行都正确。JSON 也要检查读到的是不是需要的字典或列表。

#### 定义与适用条件

JSON 转换结构与文字，CSV 按列读记录；解析后仍需验证结构和数值。

- CSV 字段默认是文字，计算前需转换并验证。
- JSON 还原后的结构要与程序需要的结构一致。

#### 执行过程与推导

1. 先导入 json。
2. dumps 得到标准格式文字。
3. loads 还原后，按键读取姓名和数量。

#### 概念检查

CSV 中读到 row["amount"] 是 "125"，加钱前应做什么？

- A. 直接加数字
- B. 先 int 转成整数分
- C. 给字符串追加 "200"

答案：B。CSV 字段默认是文字，要转换并验证后再计算。

#### 互动实验：先预测，再走一步

转成 JSON 再读回，count 还会是同一个数吗？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
import json
data = {"name": "小林", "count": 3}
text = json.dumps(data, ensure_ascii=False)
restored = json.loads(text)
print(restored["count"])
\`\`\`

预期标准输出：

\`\`\`text
3
\`\`\`

继续实验：选 0，观察 text 的引号和 restored 的字典结构。

网页参数：要保存的数量（0、1、2、3、4）

#### 例题 2：两行金额求和

CSV 中金额列单位是分：125 和 200。

1. DictReader 按列名读取两行。
2. 金额文字先转成整数。
3. 总数为 325 分。

##### 参考代码与预期输出

\`\`\`python
import csv
import io
text = "category,amount\\n食品,125\\n交通,200\\n"
total = 0
for row in csv.DictReader(io.StringIO(text)):
    total = total + int(row["amount"])
print(total)
\`\`\`

预期标准输出：

\`\`\`text
325
\`\`\`

#### 常见误区

- 错误想法：CSV 数字列读取后自动变成数字。 纠正：字段默认是文字，计算前要显式转换。

- 错误想法：文件能解析，就不用检查数据了。 纠正：还要检查列名、值的类型和允许的范围。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

从 JSON 文字中读取 count。

提示：loads 后按键取值。

##### 完整解法

1. 得到整数 3。

##### 参考代码与预期输出

\`\`\`python
import json
data = json.loads('{"count": 3}')
print(data["count"])
\`\`\`

预期标准输出：

\`\`\`text
3
\`\`\`

#### 练习 2（难度 2/6）

把 [1, 2] 转成 JSON，再读回并显示长度。

提示：用 dumps 和 loads。

##### 完整解法

1. 还原列表有两项。

##### 参考代码与预期输出

\`\`\`python
import json
text = json.dumps([1, 2])
values = json.loads(text)
print(len(values))
\`\`\`

预期标准输出：

\`\`\`text
2
\`\`\`

#### 练习 3（难度 2/6）

CSV 一行 amount 为 50，读取后加 10。

提示：先 int。

##### 完整解法

1. 50 + 10 = 60。

##### 参考代码与预期输出

\`\`\`python
import csv
import io
text = "amount\\n50\\n"
for row in csv.DictReader(io.StringIO(text)):
    print(int(row["amount"]) + 10)
\`\`\`

预期标准输出：

\`\`\`text
60
\`\`\`

#### 练习 4（难度 2/6）

CSV 只有列名、没有数据行，累加结果是多少？

提示：循环不会读取到记录。

##### 完整解法

1. total 保持 0。

##### 参考代码与预期输出

\`\`\`python
import csv
import io
total = 0
for row in csv.DictReader(io.StringIO("amount\\n")):
    total = total + int(row["amount"])
print(total)
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：text-files、dictionaries、modules。相对难度：5/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[json](https://docs.python.org/3.13/library/json.html)；[csv](https://docs.python.org/3.13/library/csv.html)。

### 5.3 测试与边界验证

**核心意思：**先写清输入和正确结果，再反复比较程序结果。

**直觉：**给同一台机器几份已知答案的小题，检查它是否一直算对。

#### 学习目标

- 先自己算预期答案
- 用 assert 做一个检查
- 覆盖正常情况和边界

#### 先自己算预期答案

我们有一个翻倍函数。输入 3，手算预期是 6；输入 0，预期是 0；输入 -2，预期是 -4。不要用待测函数自己生成“正确答案”，否则同一个错误会出现在两边。测试就是把这些小检查保存下来，改代码后再运行。

#### 跟着做：检查一台翻倍机器

验证正常值、零和负数。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

assert double(3) == 6
assert double(0) == 0
assert double(-2) == -4
print("检查通过")
\`\`\`

预期标准输出：

\`\`\`text
检查通过
\`\`\`

1. 手算预期分别为 6、0、-4。
2. assert 比较每个实际结果。
3. 所有检查成立后显示检查通过。

#### 用 assert 做一个检查

assert double(3) == 6 表示“这里必须成立”。== 是相等判断。成立就继续，不输出文字；不成立就产生 AssertionError，让我们看到失败。最后 print("检查通过") 说明程序走过了这些检查。运行测试不要使用 Python 的 -O 选项，它会跳过 assert。

#### 覆盖正常情况和边界

只有输入 3 通过还不够；试 0、负数和能暴露错误的值。一个测试通过不代表所有情况都正确，但明确的边界能防止已经发现的问题回来。项目附录使用标准库 unittest 批量运行检查；先学会输入、预期、比较这三个动作。

#### 定义与适用条件

测试把实际结果与独立确定的预期比较；assert 要求这个判断成立。

- 预期答案独立手算；测试时不要使用会禁用 assert 的 -O 选项。

#### 执行过程与推导

1. 手算预期分别为 6、0、-4。
2. assert 比较每个实际结果。
3. 所有检查成立后显示检查通过。

#### 概念检查

给待测函数准备正确答案时，应该怎么做？

- A. 再调用同一个函数得出预期
- B. 独立手算一个小输入
- C. 只要没报错就算通过

答案：B。预期结果应来自独立核对，才能发现函数的计算错误。

#### 互动实验：先预测，再走一步

输入 3，正确答案 6；若预期误写为 5 会怎样？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number * 2

actual = double(3)
expected = 6
if actual == expected:
    print("检查通过")
else:
    print("检查失败")
\`\`\`

预期标准输出：

\`\`\`text
检查通过
\`\`\`

继续实验：只改预期答案，观察比较结果。这是 assert 判断的展开。

网页参数：函数输入（0、3、-2）；你填写的预期（0、5、6、-4）

#### 例题 2：看见一次失败

假设把翻倍错写成加 2，用输入 3 检查。

1. 错误函数返回 5。
2. 预期是 6，assert 不成立。
3. 捕获 AssertionError 只是为了展示本例失败；正式测试让它直接报错。

##### 参考代码与预期输出

\`\`\`python
def double(number):
    return number + 2

try:
    assert double(3) == 6
except AssertionError:
    print("检查失败：输入 3 应得到 6")
\`\`\`

预期标准输出：

\`\`\`text
检查失败：输入 3 应得到 6
\`\`\`

#### 常见误区

- 错误想法：正确答案可以再次调用同一个待测函数生成。 纠正：相同错误可能出现在两边；预期应独立确定。

- 错误想法：一个正常输入通过，就代表所有情况都正确。 纠正：补充零、空列表和错误输入等边界，测试支持已检查的情况。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

为 add_one(3) 写一个检查。

提示：手算预期是 4。

##### 完整解法

1. 比较实际与 4。

##### 参考代码与预期输出

\`\`\`python
def add_one(number):
    return number + 1

assert add_one(3) == 4
print("通过")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

#### 练习 2（难度 1/6）

为 add_one(0) 写一个边界检查。

提示：预期是 1。

##### 完整解法

1. 零输入也应加 1。

##### 参考代码与预期输出

\`\`\`python
def add_one(number):
    return number + 1

assert add_one(0) == 1
print("通过")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

#### 练习 3（难度 1/6）

检查空列表总和是 0。

提示：手算没有项目可加。

##### 完整解法

1. total_of([]) 应返回 0。

##### 参考代码与预期输出

\`\`\`python
def total_of(values):
    total = 0
    for value in values:
        total = total + value
    return total

assert total_of([]) == 0
print("通过")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

#### 练习 4（难度 2/6）

检查 3 颗糖每袋 5 颗，完整袋数是 0，余数是 3。

提示：分别检查两个结果。

##### 完整解法

1. 用两个 assert 比较手算答案。

##### 参考代码与预期输出

\`\`\`python
assert 3 // 5 == 0
assert 3 % 5 == 3
print("通过")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

先修：json-csv、functions、exceptions。相对难度：5/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[unittest](https://docs.python.org/3.13/library/unittest.html)。

### 5.4 综合项目：本地消费汇总器

**核心意思：**把读取、检查、计算、显示四步接起来，完成一个费用汇总工具。

**直觉：**先把账单读清楚，确认金额有效，再按类别汇总，最后显示报表。

#### 学习目标

- 先做能手算的小账单
- 把责任分成四步
- 最后才接上命令行外壳

#### 先做能手算的小账单

食品 125 分、交通 200 分、食品 75 分。自己先算：食品 200 分，交通 200 分，总计 400 分。主线先用内存里的三条记录，把第 3 章的列表、字典和第 4 章的函数组合起来；不要一开始同时加入文件、命令行和测试。

#### 跟着做：先完成汇总核心

把三条小账单按类别求和。 本段约定记录已经检查过，金额为正整数分。

##### 参考代码与预期输出

\`\`\`python
records = [
    {"category": "食品", "amount": 125},
    {"category": "交通", "amount": 200},
    {"category": "食品", "amount": 75},
]
totals = {}
total = 0
for record in records:
    category = record["category"]
    amount = record["amount"]
    totals[category] = totals.get(category, 0) + amount
    total = total + amount
print(totals["食品"])
print(totals["交通"])
print(total)
\`\`\`

预期标准输出：

\`\`\`text
200
200
400
\`\`\`

1. 每条记录都是含 category、amount 的字典。
2. 首次遇到类别，从 0 开始累加。
3. 食品为 125 + 75，交通为 200；全部共 400。

#### 把责任分成四步

第一步读取 CSV（第 5.2 节）；第二步检查列名、类别和整数分金额，零和负数要拒绝（第 4.4 节）；第三步用字典累加同一类别（第 3.2 节）；第四步稳定地显示结果。先验证第三步，再接文件输入。附录提供完整源码，每个函数都能找到对应步骤。

#### 最后才接上命令行外壳

把附录源码与 sample.csv 保存到同一文件夹，在终端进入该目录。先运行 python3 expense_report.py --help 查看输入格式，再运行 python3 expense_report.py sample.csv。本项目把记录金额保存为整数分，显示时才换算成元。CLI 意思是“用终端命令输入参数”；argparse 帮我们读取文件名。完整测试文件里的 class 是 unittest 的固定组织模板，面向对象机制留给后续课程。

#### 定义与适用条件

费用工具按读取、验证、汇总、显示分步完成；本项目每条金额是正整数分。

- 每条记录金额按正整数分处理；零和负数、缺失列、空类别和非法金额应明确拒绝。
- 没有记录时，总计是 0；这与一条金额为 0 的非法记录不同。

#### 执行过程与推导

1. 每条记录都是含 category、amount 的字典。
2. 首次遇到类别，从 0 开始累加。
3. 食品为 125 + 75，交通为 200；全部共 400。

#### 概念检查

工具读到负金额，怎样处理才符合本项目约定？

- A. 直接加进去，反正能计算
- B. 说明错误并拒绝这条输入
- C. 默默改成 0

答案：B。本项目每条记录只接收正整数分；零和负数都应明确拒绝。

#### 互动实验：先预测，再走一步

最后一条由 75 分改为 50 分，总计会是多少？

先选一个输入，写下预测，再点“下一步”。箭头指向下一条将执行的语句；右侧显示此刻的变量和已经产生的输出。

##### 参考代码与预期输出

\`\`\`python
amounts = [125, 200, 75]
total = 0
for amount in amounts:
    total = total + amount
print(total)
\`\`\`

预期标准输出：

\`\`\`text
400
\`\`\`

继续实验：选 75 分，逐项核对总计 125 → 325 → 400。

网页参数：最后一条金额（分）（50、75、100、125）

#### 例题 2：显示时才换算为元

把 375 分显示成 3.75 元。

1. 先用整数分得到总额。
2. 除以 100 把单位换成元。
3. f 文字中的 :.2f 表示只在显示时保留两位小数；内部账目仍保留整数分。

##### 参考代码与预期输出

\`\`\`python
cents = 125 * 3
print(f"{cents / 100:.2f} 元")
\`\`\`

预期标准输出：

\`\`\`text
3.75 元
\`\`\`

#### 常见误区

- 错误想法：能转成整数的金额都可以计入账单。 纠正：每条金额还必须大于 0；零和负数在本项目中拒绝。

- 错误想法：错误输入可以默默改成 0。 纠正：明确报错，让使用者修正输入，避免隐藏数据问题。

#### 独立练习与完整解答

#### 练习 1（难度 1/6）

同一类别的 100 分和 50 分，合计多少？

提示：先在一个键上累加。

##### 完整解法

1. 结果 150 分。

##### 参考代码与预期输出

\`\`\`python
totals = {}
for amount in [100, 50]:
    totals["食品"] = totals.get("食品", 0) + amount
print(totals["食品"])
\`\`\`

预期标准输出：

\`\`\`text
150
\`\`\`

#### 练习 2（难度 2/6）

把 150 分显示为元，保留两位小数。

提示：使用本节的 :.2f。

##### 完整解法

1. 除以 100，显示为 1.50。

##### 参考代码与预期输出

\`\`\`python
cents = 150
print(f"{cents / 100:.2f} 元")
\`\`\`

预期标准输出：

\`\`\`text
1.50 元
\`\`\`

#### 练习 3（难度 2/6）

检查金额 0 分和 -1 分：本项目约定每条金额必须大于 0。

提示：检查 amount <= 0。

##### 完整解法

1. 逐个检查 0、-1。
2. 两者都不是正整数分，应该被拒绝。

##### 参考代码与预期输出

\`\`\`python
for amount in [0, -1]:
    if amount <= 0:
        print("金额必须大于 0")
    else:
        print(amount)
\`\`\`

预期标准输出：

\`\`\`text
金额必须大于 0
金额必须大于 0
\`\`\`

#### 练习 4（难度 1/6）

没有记录时，总计多少分？

提示：累加从 0 开始。

##### 完整解法

1. 循环不执行，总计为 0。

##### 参考代码与预期输出

\`\`\`python
total = 0
for amount in []:
    total = total + amount
print(total)
\`\`\`

预期标准输出：

\`\`\`text
0
\`\`\`

先修：testing、dictionaries、json-csv。相对难度：5/6。

来源：[Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)；[csv](https://docs.python.org/3.13/library/csv.html)；[argparse](https://docs.python.org/3.13/library/argparse.html)；[pathlib](https://docs.python.org/3.13/library/pathlib.html)。

### 章末回顾

#### 回顾 1

把 {"count": 3} 保存成 JSON 文件，再读取并显示数量。

提示：先 dumps，再写文件；读出文字后 loads。

##### 完整解法

1. 写和读都使用 utf-8。
2. 还原后按键取出 3。

##### 参考代码与预期输出

\`\`\`python
import json
data = {"count": 3}
with open("record.json", "w", encoding="utf-8") as file:
    file.write(json.dumps(data))
with open("record.json", "r", encoding="utf-8") as file:
    text = file.read()
restored = json.loads(text)
print(restored["count"])
\`\`\`

预期标准输出：

\`\`\`text
3
\`\`\`

#### 回顾 2

检查 305 分应显示为 3.05 元，而不是 3.50 元。

提示：先独立手算，再比较文字。

##### 完整解法

1. 305 / 100 = 3.05。
2. :.2f 只控制显示位数。

##### 参考代码与预期输出

\`\`\`python
def display(cents):
    return f"{cents / 100:.2f} 元"

assert display(305) == "3.05 元"
print("通过")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

## 综合测试与完整解答

先独立作答，再运行参考代码。检查正常输入、边界和应拒绝输入，并说明适用条件。

#### 综合题 1

写 count_passed(scores)，计算列表里至少 60 分的人数；测试 [59, 60, 90] 和空列表。约定输入是 0～100 的整数。

提示：先用 for 和 if，累计从 0 开始。

##### 完整解法

1. 59 不通过；60 和 90 通过。
2. 空列表没有人，通过人数是 0。

##### 参考代码与预期输出

\`\`\`python
def count_passed(scores):
    passed = 0
    for score in scores:
        if score >= 60:
            passed = passed + 1
    return passed

assert count_passed([59, 60, 90]) == 2
assert count_passed([]) == 0
print("通过")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

#### 综合题 2

统计 ["苹果", "梨", "苹果"] 的次数，显示苹果和梨的数量。原列表不能修改。

提示：结果另放字典。

##### 完整解法

1. get 的默认值让第一次计数从 0 开始。
2. 只读取原列表，不修改它。

##### 参考代码与预期输出

\`\`\`python
items = ["苹果", "梨", "苹果"]
counts = {}
for name in items:
    counts[name] = counts.get(name, 0) + 1
print(counts["苹果"])
print(counts["梨"])
assert items == ["苹果", "梨", "苹果"]
\`\`\`

预期标准输出：

\`\`\`text
2
1
\`\`\`

#### 综合题 3

从单列 CSV 读取 125、75 分，转整数后求和；一行是 "三" 时明确报错。本题约定表头是 amount、每条记录一列。

提示：复用 CSV 读取、函数和异常。

##### 完整解法

1. 合法输入累计为 200。
2. 错误文字的 int 转换抛 ValueError，调用处显示说明。

##### 参考代码与预期输出

\`\`\`python
import csv
import io

def total_cents(text):
    total = 0
    for row in csv.DictReader(io.StringIO(text)):
        amount = int(row["amount"])
        if amount <= 0:
            raise ValueError("金额必须大于 0")
        total = total + amount
    return total

assert total_cents("amount\\n125\\n75\\n") == 200
print("合计检查通过")
try:
    total_cents("amount\\n三\\n")
except ValueError:
    print("金额格式错误")
\`\`\`

预期标准输出：

\`\`\`text
合计检查通过
金额格式错误
\`\`\`

#### 综合题 4

完成文件小工具：把 [2, 3] 每项翻倍，存成 JSON 再读回，检查结果为 [4, 6]。

提示：先处理列表，再转换文字、写入、读取和核对。

##### 完整解法

1. 新列表为 [4, 6]。
2. JSON 文件读回后检查结构与数值。

##### 参考代码与预期输出

\`\`\`python
import json
values = [2, 3]
result = [value * 2 for value in values]
with open("result.json", "w", encoding="utf-8") as file:
    file.write(json.dumps(result))
with open("result.json", "r", encoding="utf-8") as file:
    restored = json.loads(file.read())
assert restored == [4, 6]
print("通过")
\`\`\`

预期标准输出：

\`\`\`text
通过
\`\`\`

## 术语索引

| 术语 | 用途与含义 |
| --- | --- |
| 程序 | 按顺序写给计算机的指令。 |
| 解释器 | 负责读取和运行 Python 代码的程序。 |
| 终端 | 可以输入运行命令、查看结果的窗口。 |
| 变量 | 一个用来读取当前值的名字，例如 count。 |
| 赋值 | 先算右边，再让左边的名字对应这个值。 |
| 字符串 | 文字数据；代码中通常用成对引号表示。 |
| 整数 | 没有小数部分的数字，例如 0、3、-2。 |
| 类型 | 值的类别；数字和文字能做的操作不同。 |
| 表达式 | 能算出一个值的代码，例如 2 + 3。 |
| 缩进 | 行首的空格；用来表明哪些步骤属于同一段。 |
| 条件 | 结果为成立或不成立的判断，例如 count >= 1。 |
| 循环 | 按数据或条件重复执行一组步骤。 |
| 列表 | 保存有顺序的一组值，保留重复项。 |
| 索引 | 读取列表等数据时使用的位置编号，从 0 开始。 |
| 字典 | 按键找对应值的数据结构，例如商品名与价格。 |
| 元组 | 内容位置不能重新赋值的固定一组值。 |
| 集合 | 只保留不同值、可判断是否包含某项的数据结构。 |
| 函数 | 有名字的一组步骤，调用时可以提供输入。 |
| 参数 | 函数接收输入时使用的名字。 |
| 返回值 | return 交回调用处的结果。 |
| 模块 | 可导入的一组工具，通常存放在一个 .py 文件。 |
| 异常 | 执行遇到问题时产生的信号，例如 ValueError。 |
| 当前目录 | 相对文件路径开始寻找的位置。 |
| 编码 | 文字与文件中数据的转换约定；本书使用 UTF-8。 |
| 序列化 | 把列表、字典等结构转换为可保存的文字等格式。 |
| 测试 | 把实际结果与独立确定的预期比较。 |

## 附录 A：双文件模块练习

在同一个练习目录中保存以下两个文件。在终端进入该目录再执行 python3 main.py，Windows 使用 py -3 main.py；预期输出 10。导入 helpers 时不会输出或等待输入。

### helpers.py

\`\`\`python
"""A reusable function with no import-time input/output."""
def double(number):
    return number * 2
\`\`\`

### main.py

\`\`\`python
from helpers import double


def main():
    print(double(5))


if __name__ == "__main__":
    main()
\`\`\`

## 附录 B：消费汇总器完整源码与测试

表头必须精确为 category,cents，顺序不可交换。金额字段去两端空白后仅接受 ASCII 数字且数值大于零；分类不可空，不含换行或制表符。空白物理行按 csv 模块规则跳过，表头之后无数据允许。若记录包含多行引号字段，报错行号对应记录结束的物理行。

从仓库根目录运行：

\`\`\`sh
python3 packages/content/python/project/expense_report.py packages/content/python/project/sample.csv
python3 -m unittest discover -s packages/content/python/project -v
\`\`\`

Windows 将上述 python3 替换为 py -3。若只复制本附录，将三个文件保存在同一目录，再执行 python3 expense_report.py sample.csv；测试使用 python3 -m unittest discover -s . -v。

样例报告：

\`\`\`text
总额: 23.50 元
交通: 3.00 元
餐饮: 20.50 元
\`\`\`

退出码：正常为 0，参数错误或预期数据/文件错误为 2。数据错误写入标准错误，标准输出不产生半份报告。该程序不写入输入文件。

### sample.csv

\`\`\`csv
category,cents
餐饮,1250
交通,300
餐饮,800
\`\`\`

### expense_report.py

\`\`\`python
"""Summarize small UTF-8 CSV files; amounts are positive integer cents."""
import argparse
import csv
from pathlib import Path
import sys


def load_records(path):
    """Return validated (category, cents) pairs, or reject the entire file."""
    records = []
    with Path(path).open(encoding="utf-8", newline="") as file:
        reader = csv.DictReader(file, strict=True)
        if reader.fieldnames != ["category", "cents"]:
            raise ValueError("表头必须为 category,cents")
        for row in reader:
            # line_num counts physical lines; for quoted multiline fields it is
            # the ending line of the record. Blank physical lines are skipped.
            line = reader.line_num
            if None in row or any(value is None for value in row.values()):
                raise ValueError(f"第 {line} 行：列数必须为 2")
            category = row["category"].strip()
            amount = row["cents"].strip()
            if not category:
                raise ValueError(f"第 {line} 行：分类不能为空")
            if any(char in category for char in "\\r\\n\\t"):
                raise ValueError(f"第 {line} 行：分类不能含换行或制表符")
            if not amount.isascii() or not amount.isdigit():
                raise ValueError(f"第 {line} 行：金额必须为正整数分")
            cents = int(amount)
            if cents <= 0:
                raise ValueError(f"第 {line} 行：金额必须为正整数分")
            records.append((category, cents))
    return records


def summarize(records):
    """Aggregate records already validated by load_records, without mutation."""
    totals = {}
    for category, cents in records:
        totals[category] = totals.get(category, 0) + cents
    return totals


def format_cents(cents):
    """Format nonnegative integer cents exactly, without float conversion."""
    return f"{cents // 100}.{cents % 100:02d}"


def main(argv=None):
    parser = argparse.ArgumentParser(description="按分类汇总本地 CSV 消费记录")
    parser.add_argument("file", type=Path, help="UTF-8 CSV，表头为 category,cents")
    args = parser.parse_args(argv)
    try:
        records = load_records(args.file)
    except (OSError, UnicodeError, ValueError, csv.Error) as error:
        print(f"错误：{error}", file=sys.stderr)
        return 2
    totals = summarize(records)
    print(f"总额: {format_cents(sum(totals.values()))} 元")
    for category in sorted(totals):
        print(f"{category}: {format_cents(totals[category])} 元")
    return 0


if __name__ == "__main__":
    sys.exit(main())
\`\`\`

### test_expense_report.py

\`\`\`python
"""Independent arithmetic, format, file-boundary and CLI regression checks."""
from contextlib import redirect_stderr, redirect_stdout
import io
from pathlib import Path
import subprocess
import sys
from tempfile import TemporaryDirectory
import unittest

from expense_report import format_cents, load_records, main, summarize


class ExpenseTests(unittest.TestCase):
    def read_text(self, text):
        with TemporaryDirectory() as folder:
            path = Path(folder) / "data.csv"
            path.write_text(text, encoding="utf-8")
            return load_records(path)

    def test_independent_totals(self):
        records = [("餐饮", 1250), ("交通", 300), ("餐饮", 800)]
        self.assertEqual(summarize(records), {"餐饮": 2050, "交通": 300})
        self.assertEqual(records, [("餐饮", 1250), ("交通", 300), ("餐饮", 800)])

    def test_empty_table(self):
        self.assertEqual(self.read_text("category,cents\\n"), [])
        self.assertEqual(summarize([]), {})

    def test_exact_large_amount(self):
        self.assertEqual(format_cents(10**20 + 1), "1000000000000000000.01")

    def test_display_boundaries(self):
        for value, expected in [(0, "0.00"), (1, "0.01"), (99, "0.99"), (100, "1.00"), (305, "3.05")]:
            with self.subTest(value=value):
                self.assertEqual(format_cents(value), expected)

    def test_quoted_comma_and_trim(self):
        self.assertEqual(self.read_text('category,cents\\n"tea, milk",300\\n a , 1 \\n'), [("tea, milk", 300), ("a", 1)])

    def test_invalid_amounts(self):
        for value in ["0", "-1", "+1", "1.5", "nan", "", "１２"]:
            with self.subTest(value=value), self.assertRaisesRegex(ValueError, "正整数分"):
                self.read_text(f"category,cents\\na,{value}\\n")

    def test_invalid_headers(self):
        for text in ["", "name,cents\\na,1\\n", "cents,category\\n1,a\\n", "category,category\\na,1\\n"]:
            with self.subTest(text=text), self.assertRaisesRegex(ValueError, "表头"):
                self.read_text(text)

    def test_missing_or_extra_fields(self):
        for line in ["a\\n", "a,1,extra\\n"]:
            with self.subTest(line=line), self.assertRaisesRegex(ValueError, "列数"):
                self.read_text("category,cents\\n" + line)

    def test_bad_categories(self):
        for line in [",1\\n", "  ,1\\n", '"a\\nb",1\\n', '"a\\tb",1\\n']:
            with self.subTest(line=line), self.assertRaisesRegex(ValueError, "分类"):
                self.read_text("category,cents\\n" + line)

    def test_no_partial_report(self):
        with TemporaryDirectory() as folder:
            path = Path(folder) / "bad.csv"
            path.write_text("category,cents\\na,1\\nb,-2\\n", encoding="utf-8")
            out, err = io.StringIO(), io.StringIO()
            with redirect_stdout(out), redirect_stderr(err):
                status = main([str(path)])
            self.assertEqual(status, 2)
            self.assertEqual(out.getvalue(), "")
            self.assertIn("第 3 行", err.getvalue())

    def test_missing_file(self):
        with TemporaryDirectory() as folder:
            out, err = io.StringIO(), io.StringIO()
            with redirect_stdout(out), redirect_stderr(err):
                status = main([str(Path(folder) / "missing.csv")])
            self.assertEqual(status, 2)
            self.assertEqual(out.getvalue(), "")
            self.assertTrue(err.getvalue().startswith("错误："))

    def test_invalid_utf8(self):
        with TemporaryDirectory() as folder:
            path = Path(folder) / "bad.csv"
            path.write_bytes(b"\\xff")
            with self.assertRaises(UnicodeError):
                load_records(path)

    def test_cli_sample(self):
        project = Path(__file__).resolve().parent
        result = subprocess.run([sys.executable, str(project / "expense_report.py"), str(project / "sample.csv")], capture_output=True, text=True, encoding="utf-8", timeout=5)
        self.assertEqual(result.returncode, 0)
        self.assertEqual(result.stdout, "总额: 23.50 元\\n交通: 3.00 元\\n餐饮: 20.50 元\\n")
        self.assertEqual(result.stderr, "")

    def test_cli_help(self):
        project = Path(__file__).resolve().parent
        result = subprocess.run([sys.executable, str(project / "expense_report.py"), "--help"], capture_output=True, text=True, encoding="utf-8", timeout=5)
        self.assertEqual(result.returncode, 0)
        self.assertIn("category,cents", result.stdout)

    def test_import_has_no_output(self):
        project = Path(__file__).resolve().parent
        result = subprocess.run([sys.executable, "-c", "import expense_report"], cwd=project, capture_output=True, text=True, timeout=5)
        self.assertEqual((result.returncode, result.stdout, result.stderr), (0, "", ""))


if __name__ == "__main__":
    unittest.main()
\`\`\`

## 来源、许可与验证边界

- [Python 3.13 Tutorial](https://docs.python.org/3.13/tutorial/)：用于核对语言入门范围；本书为零基础读者重新编写说明和例题。

- [Built-in Types](https://docs.python.org/3.13/library/stdtypes.html)：核对类型、真值、赋值相关操作与容器语义。

- [Floating-Point Arithmetic](https://docs.python.org/3.13/tutorial/floatingpoint.html)：核对浮点表示误差与近似比较。

- [Built-in Functions](https://docs.python.org/3.13/library/functions.html)：核对 input、int、print、len、sorted 的行为。

- [More Control Flow Tools](https://docs.python.org/3.13/tutorial/controlflow.html)：核对循环、函数、默认参数与调用语义。

- [Errors and Exceptions](https://docs.python.org/3.13/tutorial/errors.html)：核对异常传播、捕获与主动抛出。

- [Data Structures](https://docs.python.org/3.13/tutorial/datastructures.html)：核对列表、元组、字典、集合与推导式。

- [Modules and venv](https://docs.python.org/3.13/tutorial/modules.html)：核对模块、主入口与导入；环境部分另参见 venv。

- [venv](https://docs.python.org/3.13/library/venv.html)：核对虚拟环境创建与平台命令。

- [Input and Output](https://docs.python.org/3.13/tutorial/inputoutput.html)：核对路径之外的文件模式、UTF-8、with 与序列化。

- [pathlib](https://docs.python.org/3.13/library/pathlib.html)：核对相对路径、目录创建与文本读写。

- [json](https://docs.python.org/3.13/library/json.html)：核对 JSON 映射、ensure_ascii 与往返限制；CSV 另参见 csv。

- [csv](https://docs.python.org/3.13/library/csv.html)：核对表格解析、字符串字段、额外列与换行规则。

- [unittest](https://docs.python.org/3.13/library/unittest.html)：核对测试发现、断言与错误输入检查。

- [argparse](https://docs.python.org/3.13/library/argparse.html)：核对命令行参数、帮助与退出码。

所有说明、例题与练习为本次原创编写，未复制参考文档的段落、图片或题库。代码输出检查和项目测试只验证列出的案例，不保证任意输入正确，不等同于人工审校或学习效果研究。制作流程、结构适配与投稿范围见 README.md，具体验证证据见 QA.md。
`,Fa=Object.assign({"../../../../packages/content/python/lessons/arguments.json":we,"../../../../packages/content/python/lessons/capstone.json":We,"../../../../packages/content/python/lessons/comprehensions.json":yt,"../../../../packages/content/python/lessons/conditions.json":Ot,"../../../../packages/content/python/lessons/debugging.json":an,"../../../../packages/content/python/lessons/dictionaries.json":In,"../../../../packages/content/python/lessons/exceptions.json":eo,"../../../../packages/content/python/lessons/first-program.json":_o,"../../../../packages/content/python/lessons/for-range.json":Ho,"../../../../packages/content/python/lessons/functions.json":fl,"../../../../packages/content/python/lessons/json-csv.json":Bl,"../../../../packages/content/python/lessons/lists.json":ps,"../../../../packages/content/python/lessons/modules.json":qs,"../../../../packages/content/python/lessons/names-types.json":ti,"../../../../packages/content/python/lessons/numbers.json":$i,"../../../../packages/content/python/lessons/strings-input.json":Gi,"../../../../packages/content/python/lessons/testing.json":bu,"../../../../packages/content/python/lessons/text-files.json":Du,"../../../../packages/content/python/lessons/tuples-sets.json":aa,"../../../../packages/content/python/lessons/while-stop.json":Ia}),y=$.chapters.flatMap(l=>l.lessons.map(s=>{const t=Fa[`../../../../packages/content/python/lessons/${s}.json`];if(!t)throw new Error(`Missing Python lesson: ${s}`);return t})),p=(l="")=>`#/book/python-introduction${l?"/"+l:""}`,Y="ai-university-python-draft-reading-v1";function Ua(){try{const l=JSON.parse(localStorage.getItem(Y)||"[]");return Array.isArray(l)?l.filter(s=>typeof s=="string"&&y.some(t=>t.id===s)):[]}catch{return[]}}function M({code:l}){const s=/("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[^\n]*|\b(?:def|return|if|elif|else|for|in|while|break|continue|import|from|as|try|except|raise|with|class|not|and|or|is|True|False|None)\b|\b\d+(?:\.\d+)?\b)/g;return e.jsx(e.Fragment,{children:l.split(s).map((t,n)=>e.jsx("span",{className:t.startsWith("#")?"py-token-comment":/^["']/.test(t)?"py-token-string":/^\d/.test(t)?"py-token-number":/^(def|return|if|elif|else|for|in|while|break|continue|import|from|as|try|except|raise|with|class|not|and|or|is|True|False|None)$/.test(t)?"py-token-keyword":void 0,children:t},n))})}function C({code:l,name:s="Python"}){const[t,n]=d.useState(!1),[o,c]=d.useState(!1),b=d.useRef(void 0);d.useEffect(()=>()=>clearTimeout(b.current),[]);async function T(){try{await navigator.clipboard.writeText(l),n(!0),c(!1),clearTimeout(b.current),b.current=setTimeout(()=>n(!1),1600)}catch{c(!0)}}return e.jsxs("div",{className:"py-code",children:[e.jsxs("div",{className:"py-code-header",children:[e.jsxs("span",{children:[e.jsx(H,{size:14}),s]}),e.jsxs("button",{type:"button",onClick:T,"aria-label":"复制代码",children:[t?e.jsx(V,{size:14}):e.jsx(ee,{size:14}),t?"已复制":"复制"]})]}),e.jsx("pre",{tabIndex:0,"aria-label":`${s} 代码`,children:e.jsx("code",{children:e.jsx(M,{code:l.trimEnd()})})}),o&&e.jsx("p",{role:"status",children:"复制不可用，请选中代码手动复制。"})]})}function S({snippet:l}){return e.jsxs("div",{className:"py-output",children:[l.stdin&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"py-output-label",children:"本次标准输入"}),e.jsx("pre",{children:l.stdin.trimEnd()})]}),e.jsx("span",{className:"py-output-label",children:"预期标准输出 · 已验证的固定结果"}),e.jsx("pre",{children:l.stdout?l.stdout.trimEnd():"（无输出）"}),l.stdin&&e.jsx("small",{children:"这里不回显输入文字；交互终端通常会显示你键入的内容。"})]})}function B({items:l,label:s="练习"}){return e.jsx("div",{className:"py-questions",children:l.map((t,n)=>e.jsxs("article",{className:"py-question",children:[e.jsxs("div",{className:"py-question-number",children:[s," ",String(n+1).padStart(2,"0")]}),e.jsx("h3",{children:t.problem}),e.jsxs("details",{children:[e.jsxs("summary",{children:["查看提示",e.jsx(D,{size:15})]}),e.jsx("p",{children:t.hint})]}),e.jsxs("details",{children:[e.jsxs("summary",{children:["展开完整解答",e.jsx(D,{size:15})]}),e.jsx("ol",{children:t.solution.map((o,c)=>e.jsx("li",{children:o},c))}),e.jsx(C,{code:t.answer.code}),e.jsx(S,{snippet:t.answer})]})]},t.id))})}function Ja({value:l}){const[s,t]=d.useState(null);return e.jsxs("section",{className:"py-check",children:[e.jsx("span",{className:"py-eyebrow",children:"CHECK YOUR UNDERSTANDING"}),e.jsx("h3",{children:l.question}),e.jsx("div",{role:"group","aria-label":"概念检查选项",children:l.choices.map((n,o)=>e.jsxs("button",{type:"button","aria-pressed":s===o,className:s===o?"selected":"",onClick:()=>t(o),children:[e.jsx("span",{children:String.fromCharCode(65+o)}),n,s===o&&e.jsx(V,{size:16})]},o))}),s!==null&&e.jsxs("p",{role:"status",children:[e.jsx("strong",{children:s===l.correctIndex?"答对了。":"再检查一下。"}),l.feedback[s]]})]})}const La=Aa.lessons,Wa={str:"文字",int:"整数",float:"小数",list:"列表",dict:"字典",tuple:"元组",set:"集合",bool:"判断结果",NoneType:"没有返回值"};function U({lesson:l}){const s=l.interactiveVisual,[t,n]=d.useState(s.controls.map(i=>i.defaultIndex)),[o,c]=d.useState(0),[b,T]=d.useState(""),[h,z]=d.useState(!1),r=La[l.id][t.join(".")],m=r.steps[o],k=m.line===null,P=r.code.trimEnd().split(`
`),j=s.controls.map((i,a)=>i.values[t[a]]),I=(i,a)=>{n(f=>f.map((g,v)=>v===i?a:g)),c(0),z(!1)},N=l.id==="numbers"&&"bags"in m.variables&&"left"in m.variables,_=Number(m.variables.bags?.value||0),x=Number(m.variables.left?.value||0),E=Number(j[1]),R=b.trim().split(/\s+/).join(" "),u=r.stdout.trim().split(/\s+/).join(" ");return e.jsxs("section",{className:"py-lab","aria-label":`${l.title}互动实验`,children:[e.jsxs("div",{className:"py-section-heading",children:[e.jsx("span",{className:"py-eyebrow",children:"先预测 → 走一步 → 改一处"}),e.jsx("h2",{children:"代码怎样执行？"}),e.jsx("p",{children:s.prediction})]}),e.jsx("div",{className:"py-lab-controls",children:s.controls.map((i,a)=>{const f=i.values.every(v=>typeof v=="number")&&i.values.length>4,g=`py-control-${l.id}-${i.name}`;return e.jsxs("label",{htmlFor:g,children:[e.jsxs("span",{children:[i.label,e.jsx("strong",{children:typeof j[a]=="string"?j[a]||"（空文字）":JSON.stringify(j[a])})]}),f?e.jsx("input",{id:g,type:"range",min:0,max:i.values.length-1,step:1,value:t[a],"aria-valuetext":String(j[a]),onChange:v=>I(a,Number(v.target.value))}):e.jsx("select",{id:g,value:t[a],onChange:v=>I(a,Number(v.target.value)),children:i.values.map((v,F)=>e.jsx("option",{value:F,children:typeof v=="string"?v||"（空文字）":JSON.stringify(v)},F))})]},i.name)})}),e.jsxs("label",{className:"py-predict-answer",children:[e.jsx("span",{children:"预测当前参数的全部输出（可选，多行用空格隔开）"}),e.jsx("input",{value:b,onChange:i=>{T(i.target.value),z(!1)},placeholder:"先想一想，再看结果"})]}),e.jsxs("div",{className:"py-trace-grid",children:[e.jsxs("div",{className:"py-trace-code",children:[e.jsx("div",{className:"py-trace-top",children:k?"已走完全部步骤":`下一行：第 ${m.line} 行`}),e.jsx("pre",{tabIndex:0,"aria-label":"逐行执行的代码",children:P.map((i,a)=>e.jsxs("span",{className:`py-code-line${m.line===a+1?" current":""}`,children:[e.jsx("span",{className:"py-line-number",children:m.line===a+1?"→":a+1}),e.jsx("code",{children:e.jsx(M,{code:i||" "})})]},a))})]}),e.jsxs("div",{className:"py-trace-state",children:[e.jsxs("div",{className:"py-trace-top",children:["此刻的变量"," ",m.scope!=="<module>"&&e.jsxs("small",{children:["正在函数 ",m.scope," 中"]})]}),e.jsx("div",{className:"py-variable-list",children:Object.entries(m.variables).length?Object.entries(m.variables).map(([i,a])=>e.jsxs("div",{className:"py-variable",children:[e.jsxs("span",{children:[e.jsx("code",{children:i}),e.jsxs("small",{children:[Wa[a.type]||a.type,a.scope!=="<module>"?" · 函数内":""]})]}),e.jsx("code",{children:a.value})]},i)):e.jsx("p",{className:"py-trace-empty",children:s.watch.length?"还没有给变量赋值。执行下一行后再观察。":"这段代码直接显示文字，不使用变量。"})}),e.jsxs("div",{className:"py-trace-output",children:[e.jsx("span",{children:"已经显示的内容"}),e.jsx("pre",{"aria-live":"polite",children:m.stdout||"（暂时没有输出）"})]})]})]}),e.jsxs("div",{className:"py-trace-buttons",children:[e.jsxs("button",{type:"button",disabled:o===0,onClick:()=>c(i=>i-1),children:[e.jsx(q,{size:15}),"上一步"]}),e.jsxs("button",{type:"button",className:"py-primary",disabled:k,onClick:()=>c(i=>i+1),children:["下一步",e.jsx(w,{size:15})]}),e.jsx("button",{type:"button",onClick:()=>{c(0),z(!1)},children:"重头观察"}),e.jsx("button",{type:"button",onClick:()=>c(r.steps.length-1),children:"走到最后"}),e.jsx("span",{"aria-live":"polite",children:k?"完成":`观察 ${o+1} / ${r.steps.length}`})]}),e.jsx("p",{className:"py-trace-help",children:"箭头是下一行，还未执行。点“下一步”后，查看它带来的变化。改参数会从头开始。"}),l.id==="numbers"&&e.jsxs("div",{className:"py-candy-model",children:[e.jsx("strong",{children:"把糖果真的装一装"}),N?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"py-candy-bags","aria-label":`${_}袋，每袋${E}颗，剩余${x}颗`,children:[Array.from({length:_},(i,a)=>e.jsxs("div",{className:"py-candy-bag",children:[e.jsxs("span",{children:["第 ",a+1," 袋"]}),e.jsx("div",{children:Array.from({length:E},(f,g)=>e.jsx("i",{},g))})]},a)),e.jsxs("div",{className:"py-candy-loose",children:[e.jsxs("span",{children:["剩余 ",x," 颗"]}),e.jsx("div",{children:Array.from({length:x},(i,a)=>e.jsx("i",{},a))})]})]}),e.jsxs("p",{children:[_," 袋 × ",E," 颗 + 剩余 ",x," 颗 = ",Number(j[0])," ","颗。",e.jsx("br",{}),_===0?"还不够装满一袋，所以完整袋数是 0。":x===0?"刚好全部装完，所以余数是 0。":"剩下的数量不够再装满一袋。"]})]}):e.jsx("p",{children:"先走到 bags 和 left 都算出来，再把它们和袋子图对应起来。"})]}),k&&b.trim()&&e.jsxs("div",{className:"py-compare",children:[e.jsx("button",{type:"button",onClick:()=>z(!0),children:"核对我的预测"}),h&&e.jsx("p",{role:"status",children:R===u?"预测与输出一致。试着只改一个参数，再预测一次。":"预测与输出不同。点“重头观察”，找出从哪一步开始与你想的不一样。"})]}),e.jsxs("p",{className:"py-followup",children:[e.jsx("strong",{children:"再试一次"})," ",s.followUp]}),e.jsxs("details",{className:"py-lab-note",children:[e.jsx("summary",{children:"想在自己的 Python 中运行？"}),e.jsx("p",{children:"这里回放的是所选示例经 Python 验证的执行过程。复制代码后，可以在本机自由修改并运行；网页只提供这些练习参数。"}),e.jsx(C,{code:r.code})]})]})}function J(){const l=URL.createObjectURL(new Blob([Ma],{type:"text/markdown;charset=utf-8"})),s=document.createElement("a");s.href=l,s.download="Python-Introduction.md",s.click(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}function Ga(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"py-book-hero",children:[e.jsxs("div",{children:[e.jsx("span",{className:"py-eyebrow",children:"AI UNIVERSITY / PROGRAMMING 01"}),e.jsxs("h1",{children:["Python",e.jsx("br",{}),"编程入门",e.jsx("span",{children:"从第一行代码，到自己的程序。"})]}),e.jsx("p",{children:"为零基础读者写的一本完整教材。用小步推导理解代码，用可复算的例子建立直觉，再把它们组合成一个能用的小工具。"}),e.jsxs("a",{className:"py-primary",href:p(y[0].id),children:["从第一节开始 ",e.jsx(w,{size:17})]}),e.jsxs("div",{className:"py-stats",children:[e.jsxs("span",{children:[e.jsx("strong",{children:"05"}),"章"]}),e.jsxs("span",{children:[e.jsx("strong",{children:"20"}),"节"]}),e.jsxs("span",{children:[e.jsx("strong",{children:"40"}),"例题"]}),e.jsxs("span",{children:[e.jsx("strong",{children:"94"}),"练习与回顾"]})]})]}),e.jsxs("div",{className:"py-hero-notebook",children:[e.jsxs("div",{className:"py-notebook-top",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("small",{children:"your_first_program.py"})]}),e.jsxs("div",{className:"py-notebook-content",children:[e.jsx("small",{children:"# 学会把想法写成步骤"}),e.jsx("pre",{children:e.jsx(M,{code:`print("你好，未来的自己")
print("今天开始学 Python")`})}),e.jsxs("div",{className:"py-notebook-output",children:[e.jsx("span",{children:"OUTPUT"}),e.jsxs("p",{children:["你好，未来的自己",e.jsx("br",{}),"今天开始学 Python"]})]})]}),e.jsxs("footer",{children:[e.jsx("span",{children:"Python 3 · 纯标准库"}),e.jsx(G,{size:18})]})]})]}),e.jsxs("div",{className:"py-home-body",children:[e.jsxs("section",{children:[e.jsxs("div",{className:"py-section-heading",children:[e.jsx("span",{className:"py-eyebrow",children:"THE LEARNING PATH"}),e.jsx("h2",{children:"一步一步，写出能用的程序"}),e.jsx("p",{children:"先理解执行过程，再选择数据结构，最后完成一个有明确输入和输出的小项目。"})]}),$.chapters.map((l,s)=>e.jsxs("article",{className:"py-chapter-row",children:[e.jsxs("span",{className:"py-chapter-number",children:["0",s+1]}),e.jsxs("div",{children:[e.jsx("h3",{children:l.title}),e.jsx("p",{children:l.objective}),e.jsx("div",{children:l.lessons.map(t=>{const n=y.find(o=>o.id===t);return e.jsxs("a",{href:p(t),children:[n.number," ",n.title,e.jsx(w,{size:14})]},t)})})]})]},l.id))]}),e.jsxs("aside",{className:"py-home-note",children:[e.jsx(W,{size:22}),e.jsx("h3",{children:"这本书怎么学？"}),e.jsx("p",{children:"先预测，再运行。改一处输入，观察差异，最后独立做题。"}),e.jsx("ul",{children:$.outcomes.map(l=>e.jsx("li",{children:l},l))}),e.jsx("div",{className:"py-note-divider"}),e.jsx("span",{className:"py-eyebrow",children:"本卷的边界"}),e.jsx("p",{children:"本书聚焦通用编程与标准库。面向对象、Web、数据分析库与并发留给后续学习。"}),e.jsxs("p",{className:"py-draft-note",children:["v",$.version," 已出版",e.jsx("br",{}),"AI 编写 · 投稿贡献：aby0120"]})]})]})]})}function Ha({lesson:l,tab:s}){const t=l;return s==="practice"?e.jsxs("section",{children:[e.jsxs("div",{className:"py-section-heading",children:[e.jsx("span",{className:"py-eyebrow",children:"TRY IT YOURSELF"}),e.jsx("h2",{children:"先独立完成，再对照解法"}),e.jsx("p",{children:"每题都有提示、完整步骤与已核对的预期输出。这里供自评，不自动运行或评分。"})]}),e.jsx(B,{items:t.practice})]}):s==="experiment"?e.jsx(U,{lesson:t}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"py-idea",children:[e.jsx("span",{className:"py-eyebrow",children:"核心意思"}),e.jsx("p",{children:t.concept}),e.jsxs("div",{children:[e.jsx("span",{children:"直觉"}),t.intuition]})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"本节你会学到"}),e.jsx("ul",{className:"py-objectives",children:t.objectives.map(n=>e.jsxs("li",{children:[e.jsx(V,{size:16}),n]},n))}),t.body.slice(0,1).map((n,o)=>e.jsxs("div",{className:"py-paragraph",children:[e.jsxs("span",{className:"py-paragraph-number",children:["0",o+1]}),e.jsxs("div",{children:[e.jsx("h2",{children:n.title}),e.jsx("p",{children:n.text})]})]},n.title))]}),e.jsxs("section",{className:"py-guided",children:[e.jsx("span",{className:"py-eyebrow",children:"先跟着走一遍"}),e.jsx("h2",{children:t.workedExamples[0].title}),e.jsx("p",{children:t.workedExamples[0].problem}),e.jsx(C,{code:t.workedExamples[0].answer.code}),e.jsx("ol",{className:"py-steps",children:t.workedExamples[0].steps.map((n,o)=>e.jsx("li",{children:n},o))}),e.jsx(S,{snippet:t.workedExamples[0].answer})]}),e.jsx("section",{children:t.body.slice(1).map((n,o)=>e.jsxs("div",{className:"py-paragraph",children:[e.jsxs("span",{className:"py-paragraph-number",children:["0",o+2]}),e.jsxs("div",{children:[e.jsx("h2",{children:n.title}),e.jsx("p",{children:n.text})]})]},n.title))}),t.localSetup&&e.jsxs("details",{className:"py-setup",children:[e.jsx("summary",{children:"第一次在电脑上运行？跟着这四步做"}),e.jsx("ol",{children:t.localSetup.map((n,o)=>e.jsx("li",{children:n},o))}),e.jsx("a",{href:"https://www.python.org/downloads/",target:"_blank",rel:"noreferrer",children:"打开 Python 官方下载页 ↗"})]}),e.jsx(U,{lesson:t}),e.jsx(Ja,{value:t.learningCheck}),e.jsxs("section",{className:"py-definition",children:[e.jsx("span",{className:"py-eyebrow",children:"定义与适用条件"}),e.jsx("p",{children:t.formalDefinition.text}),e.jsx("ul",{children:t.formalDefinition.conditions.map(n=>e.jsx("li",{children:n},n))})]}),e.jsxs("section",{children:[e.jsxs("div",{className:"py-section-heading",children:[e.jsx("span",{className:"py-eyebrow",children:"WORKED EXAMPLES"}),e.jsx("h2",{children:"再看一个变化"})]}),t.workedExamples.slice(1).map((n,o)=>e.jsxs("article",{className:"py-example",children:[e.jsxs("span",{className:"py-question-number",children:["例题 0",o+2]}),e.jsx("h3",{children:n.title}),e.jsx("p",{children:n.problem}),e.jsxs("details",{children:[e.jsxs("summary",{children:["展开解题步骤与代码",e.jsx(D,{size:16})]}),e.jsx("ol",{children:n.steps.map((c,b)=>e.jsx("li",{children:c},b))}),e.jsx(C,{code:n.answer.code}),e.jsx(S,{snippet:n.answer})]})]},n.title))]}),e.jsxs("section",{children:[e.jsx("h2",{children:"常见误区"}),e.jsx("div",{className:"py-mistakes",children:t.commonMistakes.map(n=>e.jsxs("div",{children:[e.jsx("span",{children:"常见误区"}),e.jsx("h3",{children:n.claim}),e.jsx("p",{children:n.correction})]},n.claim))})]}),t.furtherReading.length>0&&e.jsxs("section",{className:"py-further",children:[e.jsx("h2",{children:"选读：学完主线后再看"}),e.jsx("p",{children:"先会做本节练习即可；下面的边界可以以后回来补充。"}),t.furtherReading.map(n=>e.jsxs("details",{children:[e.jsx("summary",{children:n.title}),e.jsx("p",{children:n.text})]},n.title))]}),e.jsxs("section",{className:"py-next-task",children:[e.jsx("h2",{children:"现在轮到你了"}),e.jsx("p",{children:"先做一道预测题，再改一处输入，最后检查一个边界。"}),e.jsxs("a",{className:"py-primary",href:p(t.id+"/practice"),children:["开始本节练习 ",e.jsx(w,{size:16})]})]}),e.jsxs("section",{className:"py-sources",children:[e.jsx("h3",{children:"来源与先修"}),e.jsxs("p",{children:["先修：",t.prerequisites.map(n=>y.find(o=>o.id===n)?.title).join("、")||"无编程先修"]}),e.jsx("div",{children:t.sources.map(n=>{const o=$.sources.find(c=>c.id===n);return e.jsxs("a",{href:o.url,target:"_blank",rel:"noreferrer",children:[o.title," ↗"]},n)})})]})]})}function Za({path:l}){const s=l.split("/"),t=s[1]||"",n=s[2]||"read",o=y.find(u=>u.id===t),c=$.chapters.find(u=>u.id===o?.chapterId),[b,T]=d.useState(""),[h,z]=d.useState(!1),[r,m]=d.useState(Ua),[k,P]=d.useState(!1),[j,I]=d.useState(!1),N=d.useRef(null),_=d.useRef(!0),x=o?y.indexOf(o):-1,E=["review","glossary","project"].includes(t);d.useEffect(()=>{z(!1),window.scrollTo({top:0,behavior:"instant"}),_.current||document.getElementById("python-main")?.focus({preventScroll:!0}),_.current=!1},[l]),d.useEffect(()=>{if(!h)return;const u=i=>{i.key==="Escape"&&(z(!1),N.current?.focus())};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[h]);function R(){if(!o)return;const u=r.includes(o.id)?r.filter(i=>i!==o.id):[...r,o.id];m(u);try{localStorage.setItem(Y,JSON.stringify(u))}catch{P(!0)}}return e.jsxs("div",{className:"python-preview"+(j?" py-large":""),children:[e.jsx("a",{className:"py-skip",href:"#python-main",onClick:u=>{u.preventDefault(),document.getElementById("python-main")?.focus()},children:"跳到正文"}),e.jsxs("header",{className:"py-header",children:[e.jsxs("a",{className:"py-brand",href:"#/home",children:[e.jsxs("span",{children:["Au",e.jsx("span",{children:"•"})]}),e.jsxs("div",{children:["AI University",e.jsx("small",{children:"开放教科书计划"})]})]}),e.jsxs("nav",{"aria-label":"Python 教材导航",children:[e.jsx("a",{href:"#/downloads?book=python-introduction",children:"下载与打印"}),e.jsx("a",{href:"#/library?category=other",children:"教科书库"}),e.jsx("a",{href:p(),className:!t||o?"active":"",children:"教材目录"}),e.jsx("a",{href:p("review"),className:t==="review"?"active":"",children:"练习与回顾"}),e.jsx("a",{href:p("project"),className:t==="project"?"active":"",children:"综合项目"}),e.jsx("a",{href:p("glossary"),className:t==="glossary"?"active":"",children:"术语索引"})]}),e.jsxs("div",{className:"py-header-actions",children:[e.jsx("a",{className:"py-preview-badge",href:"#/library?category=other",children:"其他 / 已出版"}),e.jsxs("button",{type:"button",className:"py-download","aria-label":"下载整本书稿",onClick:J,children:[e.jsx(A,{size:16}),e.jsx("span",{children:"下载书稿"})]}),e.jsx("button",{ref:N,type:"button",className:"py-menu",onClick:()=>z(!h),"aria-expanded":h,"aria-controls":"python-sidebar","aria-label":h?"关闭教材目录":"打开教材目录",children:h?e.jsx(K,{}):e.jsx(Q,{})})]})]}),e.jsxs("div",{className:"py-mobile-bar",children:[e.jsxs("button",{type:"button",onClick:()=>z(!h),"aria-expanded":h,"aria-controls":"python-sidebar",children:[e.jsx(X,{size:17}),"教材目录"]}),e.jsx("span",{children:"Python 编程入门"})]}),e.jsxs("div",{className:"py-layout",children:[e.jsxs("aside",{id:"python-sidebar",className:"py-sidebar"+(h?" open":""),children:[e.jsxs("div",{className:"py-sidebar-book",children:[e.jsx("span",{className:"py-eyebrow",children:"PROGRAMMING / VOL. 01"}),e.jsxs("a",{href:p(),children:[e.jsx("h2",{children:"Python 编程入门"}),e.jsx("span",{children:"Introduction to Programming"})]}),e.jsxs("div",{className:"py-reading-progress",children:[e.jsx("span",{children:"阅读进度"}),e.jsxs("strong",{children:[r.length," / 20"]}),e.jsx("div",{children:e.jsx("span",{style:{width:`${r.length*5}%`}})})]})]}),e.jsxs("label",{className:"py-sidebar-search",children:[e.jsx(Z,{size:15}),e.jsx("input",{value:b,onChange:u=>T(u.target.value),placeholder:"搜索本书章节","aria-label":"搜索本书章节"})]}),e.jsxs("nav",{"aria-label":"全书章节",children:[$.chapters.map((u,i)=>{const a=u.lessons.filter(f=>{const g=y.find(v=>v.id===f);return`${g.number} ${g.title}`.toLowerCase().includes(b.trim().toLowerCase())});return a.length>0&&e.jsxs("div",{className:"py-sidebar-chapter",children:[e.jsxs("h3",{children:[e.jsxs("span",{children:["0",i+1]}),u.title]}),a.map(f=>{const g=y.find(v=>v.id===f);return e.jsxs("a",{href:p(f),"aria-current":o?.id===f?"page":void 0,className:o?.id===f?"active":"",children:[e.jsx("span",{children:g.number}),e.jsx("span",{children:g.title}),r.includes(f)&&e.jsx(V,{size:13,"aria-label":"已读"})]},f)})]},u.id)}),!y.some(u=>`${u.number} ${u.title}`.toLowerCase().includes(b.trim().toLowerCase()))&&e.jsx("p",{className:"py-search-empty",children:"没有匹配的章节"}),e.jsxs("div",{className:"py-sidebar-bottom",children:[e.jsxs("a",{href:"#/library?category=other",children:["返回教科书库",e.jsx(q,{size:14})]}),e.jsxs("a",{href:"#/downloads?book=python-introduction",children:["下载与打印",e.jsx(A,{size:14})]}),e.jsxs("a",{href:p("review"),children:["章末回顾与综合测试",e.jsx(w,{size:14})]}),e.jsxs("a",{href:p("project"),children:["综合项目",e.jsx(w,{size:14})]}),e.jsxs("a",{href:p("glossary"),children:["术语索引",e.jsx(w,{size:14})]})]})]})]}),h&&e.jsx("button",{type:"button",className:"py-backdrop","aria-label":"关闭教材目录",onClick:()=>{z(!1),N.current?.focus()}}),e.jsxs("main",{id:"python-main",className:"py-main",tabIndex:-1,children:[t?o?e.jsxs("div",{className:"py-lesson",children:[e.jsxs("div",{className:"py-breadcrumb",children:[e.jsx("a",{href:p(),children:"Python 编程入门"}),e.jsx("span",{children:"/"}),e.jsx("span",{children:c?.title}),e.jsx("span",{children:"/"}),e.jsx("span",{children:o.number})]}),e.jsxs("header",{className:"py-lesson-heading",children:[e.jsx("span",{className:"py-section-number",children:o.number}),e.jsxs("span",{className:"py-eyebrow",children:["SECTION ",o.number," / ",c?.title]}),e.jsx("h1",{children:o.title}),e.jsx("p",{children:o.concept}),e.jsxs("div",{className:"py-lesson-tools",children:[e.jsxs("span",{children:[e.jsx(W,{size:15}),"2 例题 · 4 练习"]}),e.jsxs("div",{children:[e.jsxs("button",{type:"button","aria-pressed":j,onClick:()=>I(!j),"aria-label":"切换较大字号",children:["A",e.jsx("span",{children:"A"})]}),e.jsxs("button",{type:"button","aria-pressed":r.includes(o.id),onClick:R,children:[e.jsx(G,{size:16}),r.includes(o.id)?"已读":"标记已读"]})]})]})]}),e.jsx("nav",{className:"py-tabs","aria-label":"本节内容",children:[["read","阅读与理解"],["experiment","互动实验"],["practice","练习与解答"]].map(([u,i])=>e.jsx("a",{href:p(o.id)+(u==="read"?"":"/"+u),"aria-current":n===u?"page":void 0,className:n===u?"active":"",children:i},u))}),e.jsx("article",{className:"py-article",children:e.jsx(Ha,{lesson:o,tab:n})},`${o.id}/${n}`),e.jsxs("div",{className:"py-next",children:[e.jsx("div",{children:x>0&&e.jsxs("a",{href:p(y[x-1].id),children:[e.jsx(q,{size:17}),e.jsxs("span",{children:[e.jsx("small",{children:"上一节"}),y[x-1].title]})]})}),e.jsx("div",{children:x<y.length-1?e.jsxs("a",{href:p(y[x+1].id),children:[e.jsxs("span",{children:[e.jsx("small",{children:"下一节"}),y[x+1].title]}),e.jsx(w,{size:17})]}):e.jsxs("a",{href:p("review"),children:["进入综合回顾",e.jsx(w,{size:17})]})})]})]}):E?e.jsxs("div",{className:"py-resource",children:[e.jsxs("span",{className:"py-eyebrow",children:["PYTHON / ",t.toUpperCase()]}),e.jsx("h1",{children:t==="review"?"练习与回顾":t==="project"?"综合项目":"术语索引"}),t==="review"?e.jsxs(e.Fragment,{children:[O.chapterReviews.map((u,i)=>e.jsxs("section",{children:[e.jsxs("h2",{children:["第 ",i+1," 章 · ",$.chapters[i].title]}),e.jsx(B,{items:u.questions,label:"回顾"})]},u.chapterId)),e.jsxs("section",{children:[e.jsx("h2",{children:"全书综合测试"}),e.jsx(B,{items:O.exam,label:"综合题"})]})]}):t==="glossary"?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"26 个术语，连接语法、执行过程与程序设计。"}),e.jsx("dl",{className:"py-glossary",children:O.glossary.map(u=>e.jsxs("div",{children:[e.jsx("dt",{children:u.term}),e.jsx("dd",{children:u.definition})]},u.term))})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"py-resource-lead",children:"用一份真实 CSV，完成从读取、验证到汇总与测试的完整流程。"}),e.jsxs("div",{className:"py-project-card",children:[e.jsx(H,{size:32}),e.jsx("h2",{children:"本地消费汇总器"}),e.jsx("p",{children:"纯标准库 · UTF-8 CSV · 整数分 · 15 项测试"}),e.jsx(C,{code:"python3 packages/content/python/project/expense_report.py packages/content/python/project/sample.csv",name:"终端命令"}),e.jsx(S,{snippet:{code:"",stdin:"",stdout:`总额: 23.50 元
交通: 3.00 元
餐饮: 20.50 元
`}}),e.jsxs("a",{className:"py-primary",href:p("capstone"),children:["阅读项目完整讲解",e.jsx(w,{size:17})]})]}),e.jsx("h2",{children:"完整源码在哪里？"}),e.jsx("p",{children:"下载整本书稿，附录包含项目源码、样例 CSV 和全部测试。先读第 5.4 节的输入条件，再在本机 Python 中运行。"}),e.jsxs("button",{type:"button",className:"py-secondary",onClick:J,children:[e.jsx(A,{size:17}),"下载含源码的书稿"]})]})]}):e.jsxs("div",{className:"py-resource",children:[e.jsx("h1",{children:"没有找到这一节"}),e.jsxs("a",{className:"py-primary",href:p(),children:["返回教材目录",e.jsx(q,{size:16})]})]}):e.jsx(Ga,{}),k&&e.jsx("p",{role:"status",className:"py-storage-error",children:"当前浏览器无法保存已读记录；你仍可阅读和做练习。"}),e.jsxs("footer",{className:"py-footer",children:[e.jsx("span",{children:"AI University · 开放的知识，清晰的理解"}),e.jsxs("span",{children:["Python v",$.version," · AI 编写 · 投稿贡献：aby0120"]})]})]})]})]})}export{Za as default};
