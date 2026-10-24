import{c as U,r as m,j as n,X as G,M,C as T,A as R,a as h,D as y,B}from"./index-B_WvA-eF.js";import{C as D}from"./copy-5CxxilXX.js";import"./react-D-vXKkXw.js";import"./math-BvXWHf-j.js";const O=U("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),V="c-algorithms",F="4.2",W="c-ch4",K="查找、排序与算法理由",P="同一批数据可以被查找和排序；写出循环为什么正确，比只背代码更可靠。",H="查找像从左到右翻卡片，排序像把每张新卡插进已经排好的部分。先保证小部分有序，再逐步扩展。",X=["线性查找","插入排序","代价与边界"],Y=[{title:"线性查找",text:"依次比较每个元素，找到就返回位置。未找到可返回长度 n，作为不可能的合法下标；调用者必须先检查 result < n，再访问。这个约定也能覆盖空数组。本节用小数组，逐个比较足够直观，最多检查 n 次。"},{title:"插入排序",text:"从第二项开始，临时保存当前值 key。左侧已排好序，把比 key 大的项逐个右移，最后把 key 放到空位。移动时先判断 j>0 再访问 a[j-1]，防止无符号下溢。循环不变量是：开始处理 i 时，前 i 项已按升序排列，并且仍是原来的那些值。"},{title:"代价与边界",text:"线性查找最坏比较次数随 n 线性增加；插入排序逆序输入时移动次数约按平方增加。用大 O 描述增长级别，不是某次运行的秒数。排序改变数组顺序，可能破坏与其他数组的对应关系；若数据有多个字段，后面用结构体把它们一起移动。"}],Z={text:"算法是解决问题的有限、明确步骤。正确性理由应说明初始化、每轮保持的性质及结束后如何得到目标。",conditions:["查找返回 n 时不能当作下标。","排序前确认目标数组可修改。","本节插入排序适用于固定长度、小规模、可比较整数数组。"]},Q=[{text:"先为零项、一项和未找到情况规定结果。"},{text:"用不变量解释每轮为何保持已有正确部分。"},{text:"用原始数据多重集与有序性双重检查排序结果。"}],J=[{title:"找到第一个目标",problem:"在 {4,7,4} 中查 7，返回下标。",steps:["从 0 比较。","下标 1 首次命中。","输出 1。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[] = {4, 7, 4};
    size_t result = 3;
    for (size_t i = 0; i < 3; i++) {
        if (a[i] == 7) { result = i; break; }
    }
    printf("%zu\\n", result);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0}},{title:"插入排序",problem:"把 {3,1,2} 排成升序。",steps:["处理 1 时把 3 右移。","处理 2 时再把 3 右移。","写回 key 后得到 1、2、3。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[] = {3, 1, 2};
    for (size_t i = 1; i < 3; i++) {
        int key = a[i];
        size_t j = i;
        while (j > 0 && a[j - 1] > key) {
            a[j] = a[j - 1];
            j--;
        }
        a[j] = key;
    }
    for (size_t i = 0; i < 3; i++) { printf("%d\\n", a[i]); }
    return 0;
}
`,stdin:"",stdout:`1
2
3
`,files:{},exitCode:0}}],nn=[{problem:"在 {1,2} 中找 9，按本节约定返回什么？",hint:"未找到返回长度。",solution:["比较两项都失败。","保留初始结果 2。","调用者不能访问 a[2]。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[] = {1, 2};
    size_t result = 2;
    for (size_t i = 0; i < 2; i++) {
        if (a[i] == 9) { result = i; break; }
    }
    printf("%zu\\n", result);
    return 0;
}
`,stdin:"",stdout:`2
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"排序后只检查“升序”够不够？",hint:"想想丢失或重复元素。",solution:["全改为零也可能升序。","还要检查项数与各值出现次数。","用预期序列或独立计数对照。"],answer:"不够；必须保留原数据的元素及重复次数。",difficulty:3,misconceptionTags:[]},{problem:"为什么 j>0 && a[j-1]>key 不能随意交换两边？",hint:"右侧访问需要左侧提供边界保护。",solution:["j 为零时 j-1 无效。","&& 先算左边。","将边界检查放在前面可避免访问。"],answer:"顺序承担安全条件；先检查 j>0，之后才能访问 a[j-1]。",difficulty:3,misconceptionTags:[]},{problem:"对已经有序的 {1,2,3}，插入排序会右移元素吗？",hint:"每次只比较左邻是否大于 key。",solution:["1 不大于 2。","2 不大于 3。","while 都不进入，右移次数为零。"],answer:"不会右移；仍要执行外层检查，不能说整个算法完全不工作。",difficulty:2,misconceptionTags:[]}],tn=[{claim:"有序就证明排序实现正确。",correction:"还须保留原始元素和重复次数；正确性不能只看一个性质。",tag:"c-algorithms-m1"},{claim:"大 O 就是实测运行时间。",correction:"它描述规模增长的上界级别，常数、机器和输入仍影响实际时间。",tag:"c-algorithms-m2"}],en={question:"查找未找到时返回 n，下一步应？",choices:["访问 a[n]","先判断 result<n","把 n 改成 0"],correctIndex:1,feedback:["n 不在合法下标内。","正确，再决定读取元素或报告未找到。","0 可能表示真实第一项，会混淆结果。"]},sn={mode:"c-compare",prediction:"先遮住输出：在 {4,7,4} 中查 7，返回下标。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int a[] = {4, 7, 4};
    size_t result = 3;
    for (size_t i = 0; i < 3; i++) {
        if (a[i] == 7) { result = i; break; }
    }
    printf("%zu\\n", result);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0}},on=["c-arrays"],cn=3,rn=["c-algorithms-m1","c-algorithms-m2"],an=["n1570"],dn={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},ln={id:V,number:F,chapterId:W,title:K,concept:P,intuition:H,objectives:X,body:Y,formalDefinition:Z,derivation:Q,workedExamples:J,practice:nn,commonMistakes:tn,learningCheck:en,interactiveVisual:sn,prerequisites:on,difficulty:cn,misconceptionTags:rn,sources:an,provenance:dn},un="c-arithmetic",pn="1.4",mn="c-ch1",fn="运算、转换与数值边界",hn="表达式把数据变成结果；理解运算发生在哪种类型里，才能避免“看起来算对、结果却错”。",gn="先决定用整数尺还是小数尺，再计算。把整数除法的结果放进 double，不会让先前丢掉的小数重新出现。",bn=["整数商和余数","转换发生的时间","优先级和副作用","范围是程序条件"],xn=[{title:"整数商和余数",text:"两个整数相除得到整数商，C17 向零截断：7 / 2 是 3，-7 / 2 是 -3。% 只用于整数，-7 % 2 是 -1；被除数等于商乘除数再加余数。除数必须非零，且商可表示；例如最小有符号整数除以 -1 也可能越界，不能只检查零。"},{title:"转换发生的时间",text:"double a = 7 / 2; 先执行整数除法，a 才得到 3.0。写 7.0 / 2 或 (double)7 / 2 才先进入浮点运算。强制转换写在表达式前的圆括号里。转换不自动验证范围；浮点数转整数会向零截断，但超出目标整数可表示范围不能依赖。"},{title:"优先级和副作用",text:"乘除取余先于加减；不确定就加括号。++ 是更新变量的操作，初学时单独写一行，例如 i++;。不要写 i++ + i++ 这样的未定序多次修改，也不要假设函数各实参从左向右求值。把复杂表达式拆成几句能直接减少这类问题。"},{title:"范围是程序条件",text:"有符号整数溢出属于未定义行为，不保证绕回。unsigned 按模运算回绕，但仍可能破坏业务结果。混用有符号和无符号数会触发转换，例如负数可能变成很大的无符号数。先用本书限定的小范围数据，后面再学 limits.h 和操作前检查。浮点数是近似表示，显示两位只是输出格式，不是改变内部精度。"}],vn={text:"表达式依据操作数类型执行转换和运算；赋值目标的类型通常在右侧求值后才起作用。",conditions:["所有运算结果在相应类型的合法范围内。","整数除法的除数非零，且商可表示。","不依赖未定序副作用或精确的浮点十进制表示。"]},$n=[{text:"先标记每个操作数的类型。"},{text:"按括号和优先级计算中间结果，并检查范围。"},{text:"最后赋值或输出，确认转换发生在运算之前还是之后。"}],kn=[{title:"三种平均值",problem:"比较 7 / 2、赋值后转 double、先转 double 三种结果。",steps:["整数商为 3。","事后存入 double 得到 3.0。","先转换再除得到 3.5。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a = 7 / 2;
    double b = 7 / 2;
    double c = (double)7 / 2;
    printf("%d %.1f %.1f\\n", a, b, c);
    return 0;
}
`,stdin:"",stdout:`3 3.0 3.5
`,files:{},exitCode:0}},{title:"把秒拆成分秒",problem:"把 185 秒拆成完整分钟和余下秒数。",steps:["除以 60 得完整分钟 3。","对 60 取余得 5。","两部分合起来仍为 185 秒。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int seconds = 185;
    printf("%d min %d sec\\n", seconds / 60, seconds % 60);
    return 0;
}
`,stdin:"",stdout:`3 min 5 sec
`,files:{},exitCode:0}}],_n=[{problem:"求 2、3 两个数的浮点平均值。",hint:"先把加法结果转换为 double，再除 2。",solution:["小整数相加为 5。","除以 2.0 触发浮点除法。","输出一位小数。"],answer:{code:`#include <stdio.h>

int main(void)
{
    double mean = (2 + 3) / 2.0;
    printf("%.1f\\n", mean);
    return 0;
}
`,stdin:"",stdout:`2.5
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"求 -7 / 2 与 -7 % 2。",hint:"用向零截断，再验算商乘除数加余数。",solution:["商为 -3。","余数为 -1。","(-3)*2+(-1)=-7。"],answer:{code:`#include <stdio.h>

int main(void)
{
    printf("%d %d\\n", -7 / 2, -7 % 2);
    return 0;
}
`,stdin:"",stdout:`-3 -1
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"int max = INT_MAX; max + 1 能保证回到 INT_MIN 吗？",hint:"区分有符号溢出和 unsigned 回绕。",solution:["INT_MAX 已是 int 上限。","再加 1 超出可表示范围。","应在加法前检查，不把错误表达式当实验。"],answer:"不能；有符号溢出是未定义行为。应先检查 max < INT_MAX。",difficulty:3,misconceptionTags:[]},{problem:"单价 125 分，买 3 件，支付 500 分，求找零。",hint:"全程用整数分。",solution:["总价 125*3=375。","找零 500-375=125。","明确单位为分。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int change_cents = 500 - 125 * 3;
    printf("%d cents\\n", change_cents);
    return 0;
}
`,stdin:"",stdout:`125 cents
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],wn=[{claim:"给 double 赋值就会进行小数除法。",correction:"右侧若是两个整数先做整数除法；把一个操作数提前转换。",tag:"c-arithmetic-m1"},{claim:"溢出后看见负数是 C 的规定。",correction:"有符号溢出没有这种保证；程序必须在运算前排除它。",tag:"c-arithmetic-m2"}],yn={question:"double x = 5 / 2; 中 x 的值是？",choices:["2.5","2.0","无法确定"],correctIndex:1,feedback:["小数已在整数除法时截掉。","正确，整数商 2 再转换成 2.0。","本例没有溢出或除零，结果确定。"]},jn={mode:"c-compare",prediction:"先遮住输出：比较 7 / 2、赋值后转 double、先转 double 三种结果。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int a = 7 / 2;
    double b = 7 / 2;
    double c = (double)7 / 2;
    printf("%d %.1f %.1f\\n", a, b, c);
    return 0;
}
`,stdin:"",stdout:`3 3.0 3.5
`,files:{},exitCode:0}},Cn=["c-values"],In=1,Tn=["c-arithmetic-m1","c-arithmetic-m2"],Ln=["n1570"],zn={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},En={id:un,number:pn,chapterId:mn,title:fn,concept:hn,intuition:gn,objectives:bn,body:xn,formalDefinition:vn,derivation:$n,workedExamples:kn,practice:_n,commonMistakes:wn,learningCheck:yn,interactiveVisual:jn,prerequisites:Cn,difficulty:In,misconceptionTags:Tn,sources:Ln,provenance:zn},An="c-arrays",Nn="4.1",Sn="c-ch4",qn="数组：下标、长度与边界",Un="数组把同类型的多项数据连续存放，让程序可以按下标逐项处理。",Gn="像一排编号从零开始的抽屉：五个抽屉的标签是 0 到 4，标签 5 已在这一排之外。",Mn=["创建与初始化","长度不是终止标记","传给函数时另传长度"],Rn=[{title:"创建与初始化",text:"int scores[3] = {70, 80, 90}; 创建三个 int 元素。scores[0] 是第一项，scores[2] 是最后一项。int a[5] = {0}; 把所有元素初始化为零；只提供部分初始化值时，其余也被零初始化。数组不能在创建后直接用 a = b 整体赋值，要逐项复制或用明确的库操作。"},{title:"长度不是终止标记",text:"在数组本体所在作用域，可用 sizeof a / sizeof a[0] 得元素个数，结果为 size_t。循环写 i < count。C 不在普通下标访问时自动检查越界；越界不是“可能得到随机值的合法读取”，而是程序错误。二维固定数组可视为每行又是数组，a[row][col] 每一维都要合法。"},{title:"传给函数时另传长度",text:"函数形参写 const int values[] 时，会调整为指针类型，不再携带完整数组大小。函数内 sizeof values 不能求原数组长度。让接口显式接收 size_t count，并约定至少有 count 个可读元素；若 count 为零，就不访问任何元素。最大值等操作还必须专门定义空数组的行为。"}],Bn={text:"长度为 n 的数组由 n 个连续同类型元素组成，有效下标为 0 到 n-1。数组形参调整为指针，长度需另传。",conditions:["每次访问都在实际数组范围内。","sizeof 求长度只用于真正的数组表达式，不用于已调整的形参。","求平均或最大值时先规定空数据行为。"]},Dn=[{text:"列出元素个数与最后一个合法下标。"},{text:"用 size_t 遍历并检查 i<count。"},{text:"把长度随数组交给函数，不在函数里猜。"}],On=[{title:"成绩总分",problem:"求 70、80、90 的总和。",steps:["数组长度由 sizeof 得到 3。","循环访问 0、1、2。","总和为 240。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int scores[] = {70, 80, 90};
    size_t count = sizeof scores / sizeof scores[0];
    int total = 0;
    for (size_t i = 0; i < count; i++) {
        total += scores[i];
    }
    printf("%d\\n", total);
    return 0;
}
`,stdin:"",stdout:`240
`,files:{},exitCode:0}},{title:"部分初始化",problem:"int a[4]={7} 的四项是什么？",steps:["第一项为 7。","其余被零初始化。","用合法下标遍历打印。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[4] = {7};
    for (size_t i = 0; i < 4; i++) {
        printf("%d\\n", a[i]);
    }
    return 0;
}
`,stdin:"",stdout:`7
0
0
0
`,files:{},exitCode:0}}],Vn=[{problem:"数组 {2,4,6} 的平均值。",hint:"先确认非空，再用浮点除法。",solution:["三项之和 12。","长度 3。","12/3.0 得 4.0。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[] = {2, 4, 6};
    int sum = 0;
    for (size_t i = 0; i < 3; i++) { sum += a[i]; }
    printf("%.1f\\n", sum / 3.0);
    return 0;
}
`,stdin:"",stdout:`4.0
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"int a[3] 中 a[3] 是否存在？",hint:"从零开始数。",solution:["合法下标为 0、1、2。","3 是越界位置。","不得读取或写入。"],answer:"不存在可访问的第四项；不能为 a[3] 指定合法输出。",difficulty:2,misconceptionTags:[]},{problem:"打印 2 行 2 列固定数组的各行和。",hint:"外层每行把 sum 重置为零。",solution:["第一行 1+2=3。","第二行 3+4=7。","每行输出一个总和。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[2][2] = {{1, 2}, {3, 4}};
    for (size_t r = 0; r < 2; r++) {
        int sum = 0;
        for (size_t c = 0; c < 2; c++) { sum += a[r][c]; }
        printf("%d\\n", sum);
    }
    return 0;
}
`,stdin:"",stdout:`3
7
`,files:{},exitCode:0},difficulty:3,misconceptionTags:[]},{problem:"为何 int sum(int a[],size_t n) 内 sizeof a 不能求元素总数？",hint:"形参已调整为指针。",solution:["形参不再是原数组本体。","sizeof 得到指针类型大小。","直接使用传来的 n 并遵守约定。"],answer:"数组长度不会随这个形参自动保留。",difficulty:3,misconceptionTags:[]}],Fn=[{claim:"访问 a[n] 可以得到结尾标记。",correction:"普通数组没有自动尾标记；最后合法项是 a[n-1]。",tag:"c-arrays-m1"},{claim:"数组名可像整数变量一样整体赋值。",correction:"数组不能这样赋值；逐项复制，并确认目标容量。",tag:"c-arrays-m2"}],Wn={question:"int a[5] 的最后合法下标是？",choices:["5","4","由内容决定"],correctIndex:1,feedback:["5 已经越界。","正确，从 0 到 4 共五项。","容量由数组定义决定。"]},Kn={mode:"c-compare",prediction:"先遮住输出：求 70、80、90 的总和。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int scores[] = {70, 80, 90};
    size_t count = sizeof scores / sizeof scores[0];
    int total = 0;
    for (size_t i = 0; i < count; i++) {
        total += scores[i];
    }
    printf("%d\\n", total);
    return 0;
}
`,stdin:"",stdout:`240
`,files:{},exitCode:0}},Pn=["c-debug"],Hn=3,Xn=["c-arrays-m1","c-arrays-m2"],Yn=["n1570"],Zn={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Qn={id:An,number:Nn,chapterId:Sn,title:qn,concept:Un,intuition:Gn,objectives:Mn,body:Rn,formalDefinition:Bn,derivation:Dn,workedExamples:On,practice:Vn,commonMistakes:Fn,learningCheck:Wn,interactiveVisual:Kn,prerequisites:Pn,difficulty:Hn,misconceptionTags:Xn,sources:Yn,provenance:Zn},Jn="c-bits",nt="7.3",tt="c-ch7",et="无符号位运算与标志",it="位运算可以把多个独立开关放进一个整数；要先区分逻辑判断与逐位操作。",st="把低位看成几个独立灯，掩码像只看某盏灯的挡板。这个模型只解释无符号整数值的位，不依赖内存的字节顺序。",ot=["四个常见运算","设置、检查、清除","移位的严格边界"],ct=[{title:"四个常见运算",text:"& 按位与、| 按位或、^ 按位异或、~ 按位取反。它们与 &&、||、! 的逻辑语义不同。逻辑运算只关心是否为零，并可能短路；位运算对位计算且没有这样的短路规则。使用 unsigned int 和带 U 后缀的常量，减少有符号表示与提升带来的干扰。"},{title:"设置、检查、清除",text:"定义 READ=1U、WRITE=2U，flags|=WRITE 设置写标志，(flags&WRITE)!=0 检查，flags&=~WRITE 清除。~ 会翻转类型的所有值位，不只是屏幕上写出的几位，因此清除时要和原 flags 相与。输出无符号十进制使用 %u。"},{title:"移位的严格边界",text:"1U<<k 表示把一个位向左移 k 位，要求 k 非负且小于提升后左操作数类型的位宽。右移无符号数按数值除以相应的 2 的幂截断。不要对负有符号数照搬无符号规则。为可移植性，本节只用低 0..3 位，标准保证 unsigned int 至少足以容纳它们。"}],rt={text:"位运算按整数表示的位计算；移位次数必须在合法位宽范围内，本书只讨论无符号值。",conditions:["只操作 unsigned int 与匹配的 U 常量。","移位次数使用已证明小于类型位宽的常量。","不把位值模型冒充实际内存地址或字节序。"]},at=[{text:"给每个开关分配不重叠的掩码。"},{text:"分别用或设置、与检查、与取反掩码清除。"},{text:"每步用小十进制值独立核对，不混用逻辑操作符。"}],dt=[{title:"两个开关",problem:"从 READ 开始，添加 WRITE，再检查。",steps:["1U 与 2U 按位或得 3。","3U&2U 非零。","输出 3 和 1。"],answer:{code:`#include <stdio.h>

int main(void)
{
    const unsigned READ = 1U, WRITE = 2U;
    unsigned flags = READ;
    flags |= WRITE;
    printf("%u %d\\n", flags, (flags & WRITE) != 0);
    return 0;
}
`,stdin:"",stdout:`3 1
`,files:{},exitCode:0}},{title:"清除一位",problem:"flags=3，清除 WRITE 位。",steps:["~2U 在对应位置变零。","与原 flags 相与。","只保留 READ，得 1。"],answer:{code:`#include <stdio.h>

int main(void)
{
    unsigned flags = 3U;
    flags &= ~2U;
    printf("%u\\n", flags);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0}}],lt=[{problem:"1U<<3 的数值是多少？",hint:"从最低位向左移动三次。",solution:["1、2、4、8。","该移位在最小保证位宽内。","输出 8。"],answer:{code:`#include <stdio.h>

int main(void)
{
    printf("%u\\n", 1U << 3);
    return 0;
}
`,stdin:"",stdout:`8
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"flags=5，检查掩码 4U 是否设置。",hint:"与掩码后比较非零。",solution:["5 的低位包含 4 和 1。","5&4 得 4。","非零，输出 1。"],answer:{code:`#include <stdio.h>

int main(void)
{
    unsigned flags = 5U;
    printf("%d\\n", (flags & 4U) != 0);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"&& 和 & 可以互换来保护除零吗？",hint:"哪种运算短路？",solution:["&& 左边为假不算右边。","& 没有逻辑短路。","保护条件必须使用 && 并满足其他除法范围要求。"],answer:"不能；& 不是短路逻辑与。",difficulty:3,misconceptionTags:[]},{problem:"能把 1U 移动“类型位宽”这么多位吗？",hint:"合法次数严格小于位宽。",solution:["等于位宽已经越界。","即使某机器看似绕回也不能依赖。","先限制移位次数。"],answer:"不能，移位次数必须小于位宽。",difficulty:3,misconceptionTags:[]}],ut=[{claim:"位掩码可以用任意连续编号 1、2、3。",correction:"独立单比特标志应为不同的 2 的幂，3 同时含前两位。",tag:"c-bits-m1"},{claim:"& 和 && 只差写法。",correction:"一个逐位运算，一个逻辑短路，行为与结果类型含义不同。",tag:"c-bits-m2"}],pt={question:"设置标志 WRITE 而保留其他位应写？",choices:["flags |= WRITE","flags = WRITE","flags && WRITE"],correctIndex:0,feedback:["正确，按位或保留已有位。","赋值会丢掉其他标志。","逻辑表达式不执行设置动作。"]},mt={mode:"c-compare",prediction:"先遮住输出：从 READ 开始，添加 WRITE，再检查。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    const unsigned READ = 1U, WRITE = 2U;
    unsigned flags = READ;
    flags |= WRITE;
    printf("%u %d\\n", flags, (flags & WRITE) != 0);
    return 0;
}
`,stdin:"",stdout:`3 1
`,files:{},exitCode:0}},ft=["c-recursion"],ht=5,gt=["c-bits-m1","c-bits-m2"],bt=["n1570"],xt={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},vt={id:Jn,number:nt,chapterId:tt,title:et,concept:it,intuition:st,objectives:ot,body:ct,formalDefinition:rt,derivation:at,workedExamples:dt,practice:lt,commonMistakes:ut,learningCheck:pt,interactiveVisual:mt,prerequisites:ft,difficulty:ht,misconceptionTags:gt,sources:bt,provenance:xt},$t="c-debug",kt="3.4",_t="c-ch3",wt="读诊断、手工追踪与最小测试",yt="排错先把“哪里不符合预期”缩小成可复现事实，再修改最小的一处。",jt="编译器诊断像路线指示牌：它告诉你在某处无法继续理解，不保证那一行就是根因。漏掉前一行分号，也可能让下一行报错。",Ct=["三种问题分开处理","做一个最小复现","用断言保留发现"],It=[{title:"三种问题分开处理",text:"编译错误说明不能生成有效程序，例如缺分号、名字未声明；链接错误说明声明有了但缺少实现，例如漏编译某个 .c；运行错误或逻辑错误发生在启动之后。先解决第一条编译诊断，再重编译，避免同时追踪由它引起的许多连锁消息。保留 -Wall -Wextra -Wpedantic，警告也要解释和处理。"},{title:"做一个最小复现",text:"记录完整编译命令、最小输入、预期输出与实际输出。例如总和差一项，列出 i、sum 在每轮前后的值。临时 printf 可以观察状态，但要移除或写到 stderr，避免污染正常输出。不要一次改循环条件、初值和更新，改一项后验证假设。"},{title:"用断言保留发现",text:"assert 来自 assert.h；条件为假时终止程序，适合检查程序员承诺的内部条件和测试期望。它可能被 NDEBUG 关闭，所以不能代替用户输入验证，也不能把必须发生的赋值或函数调用藏在 assert 内。外部错误用普通 if 返回状态；内部测试先执行动作，再 assert 结果。"}],Tt={text:"可复现问题至少包含相同代码、构建方式、输入、预期与实际结果；测试是针对明确断言的可重复检查。",conditions:["不在 assert 中放必须执行的副作用。","测试包含边界和正常情况。","通过有限测试不能证明所有输入正确。"]},Lt=[{text:"固定一个最小输入并手算正确答案。"},{text:"从诊断或状态表找到最早与预期不一致的位置。"},{text:"只修改根因，重跑原用例与边界，把它保存为回归测试。"}],zt=[{title:"保留边界测试",problem:"判断 60 及格，断言 59 不及格、60 及格。",steps:["把判断抽成函数。","分别检查阈值两侧。","全部成立后输出 ok。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int passes(int score)
{
    return score >= 60;
}

int main(void)
{
    assert(!passes(59));
    assert(passes(60));
    puts("ok");
    return 0;
}
`,stdin:"",stdout:`ok
`,files:{},exitCode:0}},{title:"修正少加一项",problem:"目标累计 1 到 3，正确循环应包括 3。",steps:["i<3 只处理 1、2。","改为 i<=3。","手算 1+2+3 得 6。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int main(void)
{
    int sum = 0;
    for (int i = 1; i <= 3; i++) {
        sum += i;
    }
    assert(sum == 6);
    printf("%d\\n", sum);
    return 0;
}
`,stdin:"",stdout:`6
`,files:{},exitCode:0}}],Et=[{problem:"编译器在 printf 行报 expected ;，先看哪里？",hint:"上一条语句可能尚未结束。",solution:["查看诊断对应行。","回看上一条语句是否漏分号或括号。","只修第一处，重新编译。"],answer:"检查该行以及紧邻前面的语句；错误位置可能晚于根因。",difficulty:1,misconceptionTags:[]},{problem:"测试 int abs_small(int n)，仅支持 -100 到 100。",hint:"覆盖负数、零、正数。",solution:["负数返回相反数。","零保持零。","三个用例分别验证。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int abs_small(int n)
{
    if (n < 0) { return -n; }
    return n;
}

int main(void)
{
    assert(abs_small(-3) == 3);
    assert(abs_small(0) == 0);
    assert(abs_small(4) == 4);
    puts("ok");
    return 0;
}
`,stdin:"",stdout:`ok
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:'能用 assert(scanf("%d", &x)==1) 完成必要输入吗？',hint:"断言可能被关闭。",solution:["NDEBUG 会让 assert 不求值。","scanf 也就不执行。","把调用放在普通语句中，用 if 验证。"],answer:"不能；先独立读取并处理失败，断言不承担必要动作。",difficulty:3,misconceptionTags:[]},{problem:"一项测试通过，能宣布函数对全部输入都正确吗？",hint:"测试只观察实际运行的样例。",solution:["列出已覆盖范围。","补充边界与反例。","仍要核对契约与算法理由。"],answer:"不能；只能报告已运行用例通过，并说明未覆盖部分。",difficulty:2,misconceptionTags:[]}],At=[{claim:"代码能编译就一定逻辑正确。",correction:"编译器不能知道你的业务目标；还需手算预期和运行测试。",tag:"c-debug-m1"},{claim:"把警告关掉就算修好了。",correction:"警告消失不等于原因消失；理解类型、初始化与控制流后修正。",tag:"c-debug-m2"}],Nt={question:"assert 中能否放必须执行的更新操作？",choices:["可以，永远执行","不应这样写","只在 main 可以"],correctIndex:1,feedback:["启用 NDEBUG 时可能完全不执行。","正确，动作先执行，断言只检查结果。","函数位置不改变断言语义。"]},St={mode:"c-compare",prediction:"先遮住输出：判断 60 及格，断言 59 不及格、60 及格。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
#include <assert.h>

int passes(int score)
{
    return score >= 60;
}

int main(void)
{
    assert(!passes(59));
    assert(passes(60));
    puts("ok");
    return 0;
}
`,stdin:"",stdout:`ok
`,files:{},exitCode:0}},qt=["c-scope"],Ut=2,Gt=["c-debug-m1","c-debug-m2"],Mt=["n1570"],Rt={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Bt={id:$t,number:kt,chapterId:_t,title:wt,concept:yt,intuition:jt,objectives:Ct,body:It,formalDefinition:Tt,derivation:Lt,workedExamples:zt,practice:Et,commonMistakes:At,learningCheck:Nt,interactiveVisual:St,prerequisites:qt,difficulty:Ut,misconceptionTags:Gt,sources:Mt,provenance:Rt},Dt="c-files",Ot="6.3",Vt="c-ch6",Ft="文本文件、错误检查与关闭",Wt="文件让数据在程序退出后仍能保存；读写必须同时考虑打开失败、处理中失败和关闭失败。",Kt="打开文件像借一本册子，读取位置会前进，最后必须归还。打开成功只说明拿到了册子，不保证之后每一页都能读写成功。",Pt=["文件指针与模式","循环不能预判 EOF","写入和关闭也会失败"],Ht=[{title:"文件指针与模式",text:'FILE *fp=fopen("notes.txt","r") 尝试只读打开相对路径，失败返回 NULL；"w" 创建或截断文件，旧内容会被清空；"a" 追加。相对路径从程序当前工作目录解释，不从源文件所在目录解释。不要在未确认路径时对重要文件使用 w。'},{title:"循环不能预判 EOF",text:"while(fgets(buf,sizeof buf,fp)!=NULL) 是常见逐段读取方式。while(!feof(fp)) 不对：文件结束标志通常在一次读取尝试遇到结束之后才设置，预判会多处理一次旧缓冲。读取循环结束后用 ferror(fp) 区分读取错误与正常结束。文件最后一行可以没有换行，解析器应写清是否接受。"},{title:"写入和关闭也会失败",text:"fprintf 返回负数表示失败；fclose 成功返回零，失败返回 EOF。缓冲写入的错误可能延迟到关闭时出现。每条退出路径都要关闭已经打开的文件，但关闭后不能再次使用 FILE 指针。本书项目先验证整份输入才输出报告，不给坏数据生成看似完整的部分统计；这不等于支持操作系统断电下的原子存储。"}],Xt={text:"标准 I/O 流以 FILE * 表示；读取返回值决定是否获得数据，ferror 区分错误，fclose 结束流并报告关闭结果。",conditions:["只有 fopen 成功后使用流。","写模式可能截断旧文件。","读取循环中的缓冲区只在读取成功时使用。"]},Yt=[{text:"打开并立即检查。"},{text:"每次读写检查返回值，读完检查 ferror。"},{text:"关闭一次并检查关闭结果，保留前面已发生的错误。"}],Zt=[{title:"写入再读取",problem:"在临时练习目录创建 note.txt，写两行并读取。",steps:["检查 fopen 与 fputs。","关闭写流后重新只读打开。","逐段读并检查错误，最后关闭。"],answer:{code:`#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("note.txt", "w");
    if (fp == NULL) { return 1; }
    if (fputs("one\\ntwo\\n", fp) == EOF) { fclose(fp); return 1; }
    if (fclose(fp) != 0) { return 1; }
    fp = fopen("note.txt", "r");
    if (fp == NULL) { return 1; }
    char line[16];
    while (fgets(line, sizeof line, fp) != NULL) { printf("%s", line); }
    int bad = ferror(fp);
    if (fclose(fp) != 0) { bad = 1; }
    if (bad) { return 1; }
    return 0;
}
`,stdin:"",stdout:`one
two
`,files:{},exitCode:0}},{title:"文件不存在",problem:"打开本例临时目录中不存在的 missing.txt。",steps:["r 不创建文件。","fopen 返回 NULL。","报告错误并返回非零。"],answer:{code:`#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("missing.txt", "r");
    if (fp == NULL) { puts("cannot open"); return 1; }
    fclose(fp);
    return 0;
}
`,stdin:"",stdout:`cannot open
`,files:{},exitCode:1}}],Qt=[{problem:'fopen("x.txt","w") 遇到已有文件会怎样？',hint:"w 不是追加。",solution:["成功时截断原内容。","之后从头写。","保留旧内容应另选策略或用 a，不能混淆。"],answer:"成功打开会清空原文件内容；先明确写入意图。",difficulty:2,misconceptionTags:[]},{problem:"为何 while(!feof(fp)) 不能作为读取成功判断？",hint:"结束标志通常在读失败后设置。",solution:["进入循环时还没尝试本次读取。","最后一次可能没有新数据。","用读取函数返回值控制处理。"],answer:"它不能保证本轮有新数据，可能重复处理旧缓冲。",difficulty:2,misconceptionTags:[]},{problem:"统计固定文件 a.txt 的字节数，本题文件内容 abc 换行。",hint:"用 int 接收 fgetc。",solution:["每次非 EOF 时计数。","循环结束检查 ferror。","本题 ASCII 三字符加换行，文本流取得四个字符。"],answer:{code:`#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("a.txt", "r");
    if (fp == NULL) { return 1; }
    size_t count = 0;
    int ch;
    while ((ch = fgetc(fp)) != EOF) { count++; }
    int bad = ferror(fp);
    if (fclose(fp) != 0) { bad = 1; }
    if (bad) { return 1; }
    printf("%zu\\n", count);
    return 0;
}
`,stdin:"",stdout:`4
`,files:{"a.txt":`abc
`},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"fputs 成功后，fclose 失败能否报告保存成功？",hint:"缓冲错误可能延后报告。",solution:["数据可能仍在缓冲。","关闭时刷新可能失败。","保存成功要求所有相关操作成功。"],answer:"不能；应把关闭失败作为写入失败报告。",difficulty:3,misconceptionTags:[]}],Jt=[{claim:"相对路径相对源文件位置。",correction:"相对于程序启动时的当前工作目录，二者可能不同。",tag:"c-files-m1"},{claim:"打开成功后就无需再检查。",correction:"磁盘、权限、设备等错误仍可能在读写或关闭时发生。",tag:"c-files-m2"}],ne={question:"逐行读文件的循环应由什么控制？",choices:["fgets 的返回值","进入循环前的 feof","文件扩展名"],correctIndex:0,feedback:["正确，只有读取成功才处理缓冲。","它不能预告下一次一定读取成功。","扩展名不决定流的读取状态。"]},te={mode:"c-compare",prediction:"先遮住输出：在临时练习目录创建 note.txt，写两行并读取。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("note.txt", "w");
    if (fp == NULL) { return 1; }
    if (fputs("one\\ntwo\\n", fp) == EOF) { fclose(fp); return 1; }
    if (fclose(fp) != 0) { return 1; }
    fp = fopen("note.txt", "r");
    if (fp == NULL) { return 1; }
    char line[16];
    while (fgets(line, sizeof line, fp) != NULL) { printf("%s", line); }
    int bad = ferror(fp);
    if (fclose(fp) != 0) { bad = 1; }
    if (bad) { return 1; }
    return 0;
}
`,stdin:"",stdout:`one
two
`,files:{},exitCode:0}},ee=["c-vector"],ie=4,se=["c-files-m1","c-files-m2"],oe=["n1570"],ce={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},re={id:Dt,number:Ot,chapterId:Vt,title:Ft,concept:Wt,intuition:Kt,objectives:Pt,body:Ht,formalDefinition:Xt,derivation:Yt,workedExamples:Zt,practice:Qt,commonMistakes:Jt,learningCheck:ne,interactiveVisual:te,prerequisites:ee,difficulty:ie,misconceptionTags:se,sources:oe,provenance:ce},ae="c-for",de="3.1",le="c-ch3",ue="for 循环与嵌套循环",pe="已知重复次数时，for 把起点、条件、更新写在一起，更容易看清下标与次数。",me="用一张小表写出每轮的 i，比凭感觉数循环次数可靠。嵌套循环则像表格：外层选行，内层逐列处理。",fe=["读懂 for 的四个阶段","次数与下标分开","嵌套的工作量"],he=[{title:"读懂 for 的四个阶段",text:"for (int i = 0; i < 3; i++) 先初始化一次，然后依次判断、执行循环体、更新，再回到判断。i 取 0、1、2，一共三次。continue 会转到 for 的更新部分，再判断；break 则完全离开。不要在 for 后误加分号，否则循环体变成空语句。"},{title:"次数与下标分开",text:"从 0 开始不是 C 的强制风格，而是与数组下标相配。处理 n 个元素通常使用 i < n；i <= n 会多访问一个。用 size_t 表示长度时，避免写 i >= 0 的无符号倒序循环；无符号数永远不小于零。可以从 n 开始，在 i > 0 时访问 i - 1。"},{title:"嵌套的工作量",text:"外层循环每走一轮，内层会完整执行一次。两行三列总共六次内层动作。生成矩形时，内层输出每列，内层结束后再输出换行。若内层做 n 次、外层也做 n 次，动作数量按平方增长；这为后面的算法复杂度建立直觉，不代替性能测量。"}],ge={text:"for 由初始化、控制条件、更新表达式和循环体组成；内层变量可以在各自块中独立生存。",conditions:["循环计数与结果可表示。","访问长度为 n 的数组时只用 0 到 n-1 的下标。","无符号循环不依赖“小于零”。"]},be=[{text:"把初始化写在第一次判断之前。"},{text:"逐轮列出条件成立时的变量值。"},{text:"嵌套时固定一个外层值，完整追踪内层，再换下一个外层值。"}],xe=[{title:"三次问候",problem:"用 for 输出编号 0、1、2。",steps:["i 初值为 0。","小于 3 才打印。","每轮加一，3 不打印。"],answer:{code:`#include <stdio.h>

int main(void)
{
    for (int i = 0; i < 3; i++) {
        printf("%d\\n", i);
    }
    return 0;
}
`,stdin:"",stdout:`0
1
2
`,files:{},exitCode:0}},{title:"两行三列",problem:"打印两行，每行三个星号。",steps:["外层执行两次。","内层每次打印三个星号。","每行结束后 putchar 换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    for (int row = 0; row < 2; row++) {
        for (int col = 0; col < 3; col++) {
            putchar('*');
        }
        putchar('\\n');
    }
    return 0;
}
`,stdin:"",stdout:`***
***
`,files:{},exitCode:0}}],ve=[{problem:"求 1 到 5 的和。",hint:"用 sum 保存累计值。",solution:["初始化 sum 为零。","遍历 1、2、3、4、5。","累计得 15。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int sum = 0;
    for (int i = 1; i <= 5; i++) {
        sum += i;
    }
    printf("%d\\n", sum);
    return 0;
}
`,stdin:"",stdout:`15
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"输出 0 到 4 中的偶数。",hint:"余数检查后才输出。",solution:["遍历五个整数。","i % 2 为 0 时输出。","结果是 0、2、4。"],answer:{code:`#include <stdio.h>

int main(void)
{
    for (int i = 0; i < 5; i++) {
        if (i % 2 == 0) {
            printf("%d\\n", i);
        }
    }
    return 0;
}
`,stdin:"",stdout:`0
2
4
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"为什么 for(size_t i=3; i>=0; i--) 无法靠条件正常结束？",hint:"size_t 是无符号整数类型。",solution:["所有 i 都满足 >=0。","零减一会回绕到很大的值。","改为 i=3; i>0; i--，使用 i-1。"],answer:"条件永远为真；无符号倒序要在减到零之前停止。",difficulty:3,misconceptionTags:[]},{problem:"打印三行，每行数字 12。",hint:"换行写在内层之后。",solution:["外层三轮。","内层从 1 到 2。","每次内层结束输出换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    for (int r = 0; r < 3; r++) {
        for (int c = 1; c <= 2; c++) {
            printf("%d", c);
        }
        putchar('\\n');
    }
    return 0;
}
`,stdin:"",stdout:`12
12
12
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],$e=[{claim:"i <= n 恰好执行 n 次。",correction:"取决于起点；从 0 开始会执行 n+1 次。",tag:"c-for-m1"},{claim:"内层结束就会自动换行。",correction:"换行也是输出动作，必须明确写出来。",tag:"c-for-m2"}],ke={question:"for(int i=0; i<4; i++) 的循环体执行几次？",choices:["3","4","5"],correctIndex:1,feedback:["0、1、2、3 四个值。","正确，4 不进入循环体。","只有 <=4 才会是五次。"]},_e={mode:"c-compare",prediction:"先遮住输出：用 for 输出编号 0、1、2。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    for (int i = 0; i < 3; i++) {
        printf("%d\\n", i);
    }
    return 0;
}
`,stdin:"",stdout:`0
1
2
`,files:{},exitCode:0}},we=["c-while"],ye=2,je=["c-for-m1","c-for-m2"],Ce=["n1570"],Ie={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Te={id:ae,number:de,chapterId:le,title:ue,concept:pe,intuition:me,objectives:fe,body:he,formalDefinition:ge,derivation:be,workedExamples:xe,practice:ve,commonMistakes:$e,learningCheck:ke,interactiveVisual:_e,prerequisites:we,difficulty:ye,misconceptionTags:je,sources:Ce,provenance:Ie},Le="c-functions",ze="3.2",Ee="c-ch3",Ae="函数：拆出能重复使用的动作",Ne="函数把一项任务命名，让同一计算可以重复调用，也更容易单独检查。",Se="函数像有输入格和输出格的小机器：参数给输入，return 交结果。调用一次，就建立一次新的局部执行过程。",qe=["先写输入输出契约","调用传的是值","声明与返回"],Ue=[{title:"先写输入输出契约",text:"例如 int square(int value) 接收一个 int，返回它的平方。函数定义包含返回类型、名字、形参列表和函数体。先明确合法输入范围：若乘积不能用 int 表示，函数就不该直接相乘。本节限定参数在 -100 到 100，乘积在 int 的标准最小保证范围内。"},{title:"调用传的是值",text:"square(n) 会把 n 的值交给形参 value。修改 value 不会改调用者的 n，这叫按值传递。想改调用者对象，后面通过指针传递地址；指针本身也仍是按值传递。没有参数的函数写 (void)，在本书 C17 基线下不能把空括号声明当作同样明确的参数契约。"},{title:"声明与返回",text:"调用处之前必须看得见函数声明。小程序可把定义放在 main 前，项目可在头文件放原型。非 void 函数在每个需要返回的路径上提供合适值；不要指望走到底自动获得正确结果。void 函数不返回业务值，可用 return; 提前结束。计算函数尽量不夹杂 scanf 与 printf，输入输出留在外层。"}],Ge={text:"函数封装可调用的语句序列；实参的值初始化形参，return 将控制交还调用者并可提供一个结果。",conditions:["调用前有匹配的声明。","实参符合约定范围。","不依赖实参求值顺序，不返回局部对象地址。"]},Me=[{text:"用一句话规定函数做什么以及合法输入。"},{text:"先实现计算与 return，再在 main 中调用。"},{text:"用不同实参分别调用，确认局部修改不会泄漏到调用者。"}],Re=[{title:"平方函数",problem:"计算 4 的平方。",steps:["定义 square，参数范围为 -100 到 100。","4 复制到 value。","返回 16 并输出。"],answer:{code:`#include <stdio.h>

int square(int value)
{
    return value * value;
}

int main(void)
{
    printf("%d\\n", square(4));
    return 0;
}
`,stdin:"",stdout:`16
`,files:{},exitCode:0}},{title:"值传递",problem:"在函数里把参数改成 99，调用者的 x 是否变化？",steps:["x 的值 3 被复制。","函数内修改的是复制品。","调用结束后 x 仍为 3。"],answer:{code:`#include <stdio.h>

int changed(int value)
{
    value = 99;
    return value;
}

int main(void)
{
    int x = 3;
    printf("%d\\n", changed(x));
    printf("%d\\n", x);
    return 0;
}
`,stdin:"",stdout:`99
3
`,files:{},exitCode:0}}],Be=[{problem:"实现 int larger(int a,int b)，返回较大者，测试 3、8。",hint:"用 if 比较。",solution:["a>b 时返回 a。","否则返回 b，包含相等情况。","本题得到 8。"],answer:{code:`#include <stdio.h>

int larger(int a, int b)
{
    if (a > b) { return a; }
    return b;
}

int main(void)
{
    printf("%d\\n", larger(3, 8));
    return 0;
}
`,stdin:"",stdout:`8
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"函数参数被改成 0，为何原变量还是 7？",hint:"画两个独立储物格。",solution:["实参值被复制给形参。","写形参只更新形参对象。","要改外部对象需明确传地址。"],answer:"C 是按值传递；此处没有修改原对象。",difficulty:2,misconceptionTags:[]},{problem:"实现 int is_even(int n)，测试 -4 与 3。",hint:"n%2 == 0 对负偶数也成立。",solution:["比较余数是否为零。","比较结果是 0 或 1。","分别输出 1、0。"],answer:{code:`#include <stdio.h>

int is_even(int n)
{
    return n % 2 == 0;
}

int main(void)
{
    printf("%d %d\\n", is_even(-4), is_even(3));
    return 0;
}
`,stdin:"",stdout:`1 0
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"平方函数为何不能对任意 int 都直接返回 n*n？",hint:"返回类型不能修复已经溢出的乘法。",solution:["乘法先按操作数类型计算。","某些 int 的平方超出 int 范围。","限定输入或先检查，不在溢出后检查结果。"],answer:"必须写明范围或增加运算前验证；本节使用 -100 到 100。",difficulty:3,misconceptionTags:[]}],De=[{claim:"调用函数会自动修改同名外部变量。",correction:"形参和外部变量是不同对象，同名也不会改变值传递。",tag:"c-functions-m1"},{claim:"返回类型写 double 就能修复内部整数除法。",correction:"仍要在运算前转换操作数；返回时转换太晚。",tag:"c-functions-m2"}],Oe={question:"void bump(int n) 里执行 n++，调用后原 int 是否改变？",choices:["一定加一","不改变","取决于变量名"],correctIndex:1,feedback:["只修改了形参副本。","正确，普通整数按值传递。","名字不会把两个对象绑定。"]},Ve={mode:"c-compare",prediction:"先遮住输出：计算 4 的平方。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int square(int value)
{
    return value * value;
}

int main(void)
{
    printf("%d\\n", square(4));
    return 0;
}
`,stdin:"",stdout:`16
`,files:{},exitCode:0}},Fe=["c-for"],We=2,Ke=["c-functions-m1","c-functions-m2"],Pe=["n1570"],He={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Xe={id:Le,number:ze,chapterId:Ee,title:Ae,concept:Ne,intuition:Se,objectives:qe,body:Ue,formalDefinition:Ge,derivation:Me,workedExamples:Re,practice:Be,commonMistakes:De,learningCheck:Oe,interactiveVisual:Ve,prerequisites:Fe,difficulty:We,misconceptionTags:Ke,sources:Pe,provenance:He},Ye="c-if",Ze="2.1",Qe="c-ch2",Je="条件判断与逻辑",ni="条件语句让程序根据数据选择行动，避免所有输入都执行同一段处理。",ti="像检票：先判断“是否有票”，再决定放行或提示。条件是一个可求值的表达式，不是自然语言里省略条件的句子。",ei=["比较与分支","多个条件一起检查","顺序决定分类"],ii=[{title:"比较与分支",text:"if (score >= 60) 后写花括号包围的动作，else 写条件为假时的动作。== 比较是否相等，= 赋值。C 把零当假、非零当真；比较运算结果是 int 类型的 0 或 1。即使只有一条语句也保留花括号，减少后来加代码时的错误。"},{title:"多个条件一起检查",text:"&& 表示两者都满足，|| 表示至少一个满足，! 取反。写范围检查 age >= 0 && age <= 150，而不是 0 <= age <= 150；后者先算左边得到 0 或 1，再与 150 比较。&& 和 || 从左向右短路，左侧已能决定真假时不计算右侧。"},{title:"顺序决定分类",text:"else if 形成互斥分类，按顺序找到第一个真分支就停止。分数等级从高阈值往低阈值写，否则较高分可能先被“>=60”截住。先验证输入是否合法，再做业务分类，让非法值不会意外被当作优等。"}],si={text:"if 根据控制表达式与零是否相等选择分支；&&、|| 有从左到右的短路规则。",conditions:["比较两侧类型和数值范围明确。","除法前用短路排除零除数，并排除不可表示的商。","本书分支均使用花括号。"]},oi=[{text:"先列合法范围，再列互斥的业务情况。"},{text:"把每一条自然语言条件写成完整比较，用 && 或 || 连接。"},{text:"按阈值下方、阈值本身、阈值上方分别试算。"}],ci=[{title:"判断及格",problem:"分数 60 属于及格还是未及格？",steps:["合法分数先限定 0 到 100。",">= 包含等号，所以 60 达标。","只输出选中的分支。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int score = 60;
    if (score >= 60) {
        puts("pass");
    } else {
        puts("retry");
    }
    return 0;
}
`,stdin:"",stdout:`pass
`,files:{},exitCode:0}},{title:"短路保护",problem:"分母是 0 时，如何不执行除法？",steps:["先判断 denominator != 0。","左侧为假时 && 不求右侧。","走 else，避免 12 / 0。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int denominator = 0;
    if (denominator != 0 && 12 / denominator > 2) {
        puts("large");
    } else {
        puts("not available");
    }
    return 0;
}
`,stdin:"",stdout:`not available
`,files:{},exitCode:0}}],ri=[{problem:"温度 0 到 30 含两端为 normal，测试 30。",hint:"两次比较用 && 连接。",solution:["检查 >= 0。","检查 <= 30。","30 满足两项。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int t = 30;
    if (t >= 0 && t <= 30) {
        puts("normal");
    } else {
        puts("outside");
    }
    return 0;
}
`,stdin:"",stdout:`normal
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"判断 17 是奇数还是偶数。",hint:"余数为零才是偶数。",solution:["计算 17 % 2 为 1。","与 0 比较为假。","进入 odd 分支。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int n = 17;
    if (n % 2 == 0) {
        puts("even");
    } else {
        puts("odd");
    }
    return 0;
}
`,stdin:"",stdout:`odd
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"为什么 0 <= x <= 10 不能检查闭区间？",hint:"比较产生的是 0 或 1。",solution:["先算 0 <= x。","结果 0 或 1 都小于等于 10。","正确写 x >= 0 && x <= 10。"],answer:"这个表达式会把不在区间内的整数也判为真；要连接两个完整比较。",difficulty:2,misconceptionTags:[]},{problem:"90 分及以上 A，60 分及以上 B，其余 C，测试 95。",hint:"先判断高阈值。",solution:["95 >= 90 成立。","选择 A。","后面的 else if 不再执行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int score = 95;
    if (score >= 90) {
        puts("A");
    } else if (score >= 60) {
        puts("B");
    } else {
        puts("C");
    }
    return 0;
}
`,stdin:"",stdout:`A
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],ai=[{claim:"= 与 == 可以互换。",correction:"= 改值，== 比较；编译器警告有帮助，但应从语义上区分。",tag:"c-if-m1"},{claim:"每个分支都从低阈值开始写。",correction:"互斥 else if 链的顺序影响结果；先写会截住其他情况的条件必须谨慎。",tag:"c-if-m2"}],di={question:"x 为 -5 时，正确的范围检查是哪句？",choices:["0 <= x <= 10","x >= 0 && x <= 10","x >= 0 || x <= 10"],correctIndex:1,feedback:["第一次比较只得到 0 或 1。","正确，两个条件必须同时成立。","至少满足其中一个太宽，会放过 -5。"]},li={mode:"c-compare",prediction:"先遮住输出：分数 60 属于及格还是未及格？ 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int score = 60;
    if (score >= 60) {
        puts("pass");
    } else {
        puts("retry");
    }
    return 0;
}
`,stdin:"",stdout:`pass
`,files:{},exitCode:0}},ui=["c-arithmetic"],pi=1,mi=["c-if-m1","c-if-m2"],fi=["n1570"],hi={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},gi={id:Ye,number:Ze,chapterId:Qe,title:Je,concept:ni,intuition:ti,objectives:ei,body:ii,formalDefinition:si,derivation:oi,workedExamples:ci,practice:ri,commonMistakes:ai,learningCheck:di,interactiveVisual:li,prerequisites:ui,difficulty:pi,misconceptionTags:mi,sources:fi,provenance:hi},bi="c-input",xi="2.2",vi="c-ch2",$i="让程序接收键盘输入",ki="输入让同一个程序处理不同数据；读取是否成功必须成为程序流程的一部分。",_i="读取像填写表格：想要一个整数，不代表读者一定交来整数。先检查这一格是否填成功，再使用数据。",wi=["先理解标准输入","返回值是第一道检查","本节方法的边界"],yi=[{title:"先理解标准输入",text:'程序的标准输入通常连接键盘。在终端运行后，光标停着可能是在等待输入。键入 12 后按回车，文本才交给程序。scanf("%d", &age) 尝试把文本转成 int；&age 是让函数把结果放到 age 的位置，& 的细节在指针章展开，本节先识别它的职责。'},{title:"返回值是第一道检查",text:"scanf 返回成功赋值的项目个数。读取一个 int 时检查是否等于 1；两个 int 检查是否等于 2。读取失败就输出错误并结束，不继续使用结果。%d 跳过前面的空白，但读取完成后可能留下换行。不要在本书的格式末尾写空白或 \\n，以免交互时继续等待下一段非空白。"},{title:"本节方法的边界",text:"scanf 的整数转换不适合处理任意不可信文本：数值超出目标对象可表示范围时，C 的标准接口没有给你一个可靠的范围错误返回。课堂练习假定输入整数在 int 范围内，再检查业务范围。后面将用 fgets 读整行、strtol 检查完整格式与范围。本节不把 scanf 当作最终的健壮输入方案。"}],ji={text:"scanf 从标准输入按格式转换，返回成功赋值的项目数，或在首次转换前输入失败时返回 EOF。",conditions:["输入数值可由目标类型表示；不满足时改用后文的 fgets + strtol。","%d 的目标为 int 对象地址。","业务范围检查在读取成功后进行；不要用失败后的值。"]},Ci=[{text:"创建并初始化输入变量。"},{text:"调用 scanf，先判断返回值是否等于预期个数。"},{text:"成功才计算；失败明确结束，避免重复读取同一错误字符造成死循环。"}],Ii=[{title:"年龄输入",problem:"读一个范围内的整数，输出下一年的年龄；本例输入 18。",steps:["准备 int age。","检查返回值为 1。","本例条件限制年龄 0 到 150，再加 1。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int age = 0;
    if (scanf("%d", &age) != 1 || age < 0 || age > 150) {
        puts("invalid age");
        return 1;
    }
    printf("%d\\n", age + 1);
    return 0;
}
`,stdin:`18
`,stdout:`19
`,files:{},exitCode:0}},{title:"格式失败",problem:"同一接口遇到 hello 时，拒绝计算。",steps:["hello 无法转换为 int。","返回值不是 1。","错误路径直接结束，绝不输出未读到的年龄。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int age = 0;
    if (scanf("%d", &age) != 1) {
        puts("invalid input");
        return 1;
    }
    printf("%d\\n", age);
    return 0;
}
`,stdin:`hello
`,stdout:`invalid input
`,files:{},exitCode:1}}],Ti=[{problem:"读两个小整数 3 和 4，输出和。",hint:"返回值应与两个目标对应。",solution:["初始化两个 int。","检查 scanf 返回 2。","确认本题小整数相加可表示，再输出。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a = 0, b = 0;
    if (scanf("%d%d", &a, &b) != 2) {
        return 1;
    }
    printf("%d\\n", a + b);
    return 0;
}
`,stdin:`3 4
`,stdout:`7
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:'为什么 scanf("%d", age) 缺少 &？',hint:"函数需要能写入目标对象的位置。",solution:["age 只给出了当前数值。","%d 要求 int * 参数。","使用 &age，格式与参数必须匹配。"],answer:'应写 scanf("%d", &age)，并检查返回值。',difficulty:2,misconceptionTags:[]},{problem:"输入 -2 作为 0 到 150 的年龄，应走哪条路径？",hint:"成功转换不代表满足业务范围。",solution:["-2 可转换成 int。","范围判断失败。","给出错误并以非零状态结束。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int age = 0;
    if (scanf("%d", &age) != 1 || age < 0 || age > 150) {
        puts("invalid age");
        return 1;
    }
    printf("%d\\n", age);
    return 0;
}
`,stdin:`-2
`,stdout:`invalid age
`,files:{},exitCode:1},difficulty:2,misconceptionTags:[]},{problem:"要接收任意长度的用户数字文本，能只靠 scanf 返回 1 就保证安全么？",hint:"想一想超出 int 范围的输入。",solution:["scanf 的数值转换有表示范围要求。","返回个数不是完整的范围验证机制。","使用有长度限制的整行读取，再用 strtol 和 errno 检查。"],answer:"不能；本节只用于已限定为可表示小整数的练习，健壮方案见 4.4 与 6.4。",difficulty:3,misconceptionTags:[]}],Li=[{claim:"输入失败时初始化为 0 就能继续。",correction:"初始化避免部分未初始化读取，但不能把失败输入偷偷当成合法零。",tag:"c-input-m1"},{claim:"读取整数时在格式末尾加 \\n 更好。",correction:"scanf 的空白指令会继续匹配空白，交互时可能等待更多输入；写 %d 即可。",tag:"c-input-m2"}],zi={question:'scanf("%d%d", &a, &b) 读到 3 x 返回什么？',choices:["2","1","0"],correctIndex:1,feedback:["第二项不能转成整数。","正确，只有 a 成功赋值。","第一项 3 已成功转换。"]},Ei={mode:"c-compare",prediction:"先遮住输出：读一个范围内的整数，输出下一年的年龄；本例输入 18。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int age = 0;
    if (scanf("%d", &age) != 1 || age < 0 || age > 150) {
        puts("invalid age");
        return 1;
    }
    printf("%d\\n", age + 1);
    return 0;
}
`,stdin:`18
`,stdout:`19
`,files:{},exitCode:0}},Ai=["c-if"],Ni=1,Si=["c-input-m1","c-input-m2"],qi=["n1570"],Ui={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Gi={id:bi,number:xi,chapterId:vi,title:$i,concept:ki,intuition:_i,objectives:wi,body:yi,formalDefinition:ji,derivation:Ci,workedExamples:Ii,practice:Ti,commonMistakes:Li,learningCheck:zi,interactiveVisual:Ei,prerequisites:Ai,difficulty:Ni,misconceptionTags:Si,sources:qi,provenance:Ui},Mi="c-lines",Ri="4.4",Bi="c-ch4",Di="fgets：完整地接收一行",Oi="fgets 为输入设置容量上限，并保留换行信息，让程序能识别一行是否读完整。",Vi="把一行水倒进有容量的杯子：杯子满了，不等于整壶水都已倒完。必须检查行尾，不能把截断的半行当成完整姓名。",Fi=["理解函数参数","完整与截断","别混用输入方式"],Wi=[{title:"理解函数参数",text:"char line[32]; fgets(line, sizeof line, stdin) 最多读取 31 个字符，然后补终止零。它读到换行会把换行也保存在数组里。成功返回 line，首次未读到字符就遇到文件结束或发生读错误时返回 NULL。本节容量是小常量，可安全作为 fgets 的 int 参数；任意巨大 size_t 不能盲目转换。"},{title:"完整与截断",text:"用 strchr(line, '\\n') 查换行：找到则这次读到了行尾；没找到则可能是长行的一部分，也可能是文件最后一行没有换行。程序必须选定策略。本节交互练习要求每行以换行结束，缺换行一律拒绝；6.3 的文件读取会处理最后一行的合法无换行情形。长行要把剩余部分丢弃到换行或 EOF，才能正确读下一行。"},{title:"别混用输入方式",text:"scanf 读数字后通常留下换行，紧接的 fgets 可能读到只含换行的空行。不要靠 fflush(stdin) 清输入，ISO C 没有为这种用法定义可依赖行为。主线从这里开始统一整行读取，下一章再用 strtol 解析数字。读取字符的 getchar 返回 int，先比较 EOF，再转 char，避免丢失文件结束标志。"}],Ki={text:"fgets 在容量允许范围内读取至换行、容量限制或输入结束，成功时补零，但不保证每次返回完整一行。",conditions:["数组容量至少为 2；本书本节使用 32。","本节输入是无内嵌零的文本，以换行结束。","读取失败后不使用缓冲区的内容。"]},Pi=[{text:"调用 fgets 并判断是否成功。"},{text:"查找换行，按既定策略接受、拒绝或继续读取。"},{text:"确认完整后才删除换行并处理内容；截断时处理残余输入。"}],Hi=[{title:"读取带空格的姓名",problem:"读取 Ada Lovelace 并原样输出；本例允许保留换行。",steps:["fgets 不在空格处分开。","输入中已有换行。","printf %s 不再额外补换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    char line[32];
    if (fgets(line, sizeof line, stdin) == NULL) { return 1; }
    printf("%s", line);
    return 0;
}
`,stdin:`Ada Lovelace
`,stdout:`Ada Lovelace
`,files:{},exitCode:0}},{title:"拒绝不完整行",problem:"容量 8，要求必须读到换行；输入 abcdefghij。",steps:["只能装入前 7 个字符和终止零。","没有换行，属于本节拒绝情况。","直接结束，本例不再读取下一行。"],answer:{code:`#include <stdio.h>
#include <string.h>

int main(void)
{
    char line[8];
    if (fgets(line, sizeof line, stdin) == NULL) { return 1; }
    if (strchr(line, '\\n') == NULL) {
        puts("line incomplete");
        return 1;
    }
    printf("%s", line);
    return 0;
}
`,stdin:`abcdefghij
`,stdout:`line incomplete
`,files:{},exitCode:1}}],Xi=[{problem:"容量为 5 的字符数组，fgets 最多存多少个输入字符？",hint:"留一个终止零位置。",solution:["总容量 5。","至多读取 4 个输入字符。","第五格放终止零。"],answer:"至多 4 个；其中可能包含读到的换行。",difficulty:1,misconceptionTags:[]},{problem:"输入 A B 换行，为什么不是只得到 A？",hint:"fgets 按行，不按单词。",solution:["空格是普通输入字符。","持续读取到换行。","输出整行 A B。"],answer:{code:`#include <stdio.h>

int main(void)
{
    char line[16];
    if (fgets(line, sizeof line, stdin) == NULL) { return 1; }
    printf("%s", line);
    return 0;
}
`,stdin:`A B
`,stdout:`A B
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"scanf 之后 fgets 得到空行，最可能是什么原因？",hint:"前一次读取没有消耗什么？",solution:["数字转换停在换行前。","fgets 立即读到剩余换行。","统一采用整行读取并解析，或明确消费剩余行。"],answer:"残留换行；不能用未定义的 fflush(stdin) 当通用修复。",difficulty:2,misconceptionTags:[]},{problem:"用 getchar 逐字节读取直到 EOF，为什么变量要用 int？",hint:"需要同时表示字符值和 EOF。",solution:["char 不能保证区分所有字符值与 EOF。","先在 int 中检查是否 EOF。","再把成功的字符交给 putchar。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int ch;
    while ((ch = getchar()) != EOF) {
        putchar(ch);
    }
    return 0;
}
`,stdin:`Hi
`,stdout:`Hi
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],Yi=[{claim:"fgets 成功就表示整行读完。",correction:"还可能因为容量用尽提前返回，必须检查行尾。",tag:"c-lines-m1"},{claim:"fgets 会丢掉换行。",correction:"如果读到换行且有空间，它会保存换行；需要时再明确删除。",tag:"c-lines-m2"}],Zi={question:"char line[8] 配合 fgets，最多读取几个输入字符？",choices:["8","7","无限制"],correctIndex:1,feedback:["还要给终止零留一格。","正确，7 个输入字符加终止零。","容量参数限制了这次读取。"]},Qi={mode:"c-compare",prediction:"先遮住输出：读取 Ada Lovelace 并原样输出；本例允许保留换行。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    char line[32];
    if (fgets(line, sizeof line, stdin) == NULL) { return 1; }
    printf("%s", line);
    return 0;
}
`,stdin:`Ada Lovelace
`,stdout:`Ada Lovelace
`,files:{},exitCode:0}},Ji=["c-strings"],ns=3,ts=["c-lines-m1","c-lines-m2"],es=["n1570"],is={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},ss={id:Mi,number:Ri,chapterId:Bi,title:Di,concept:Oi,intuition:Vi,objectives:Fi,body:Wi,formalDefinition:Ki,derivation:Pi,workedExamples:Hi,practice:Xi,commonMistakes:Yi,learningCheck:Zi,interactiveVisual:Qi,prerequisites:Ji,difficulty:ns,misconceptionTags:ts,sources:es,provenance:is},os="c-memory",cs="5.4",rs="c-ch5",as="生命周期、malloc 与 free",ds="动态内存让程序在运行时申请空间；每块空间必须有明确的拥有者和释放时机。",ls="借来的柜子要登记谁负责归还。把柜子地址再抄一份，并不会多出一个柜子，也不会多出一次归还权。",us=["局部地址不能带出函数","申请成功后才能访问","一次释放与别名"],ps=[{title:"局部地址不能带出函数",text:"int *bad(void) { int x=1; return &x; } 返回后 x 已结束生命周期，地址变成悬空。即使某次似乎读到 1，也不能据此认定合法。需要返回数值就按值返回，需要持续对象则由调用者提供空间或明确分配动态空间。"},{title:"申请成功后才能访问",text:"malloc 来自 stdlib.h，接收字节数，失败返回 NULL，成功所得空间初始内容不确定。申请 n 项先检查 n <= SIZE_MAX / sizeof *p，避免乘法回绕。本节固定申请三项，不需要巨大长度，但仍说明一般边界。C 中不必强转 malloc 返回值；包含正确头文件，使用 sizeof *p 避免类型名重复。"},{title:"一次释放与别名",text:"free 释放一块仍由本程序拥有的动态分配空间；free(NULL) 允许。不能释放局部数组、指向分配块中间的地址，也不能释放同一块两次。free 后别名也失效；把拥有者设 NULL 可减少自身误用，但不会自动清除其他副本。所有权交接与错误路径都必须写清。"}],ms={text:"malloc 分配适当对齐的动态存储，free 结束该分配的可用生命周期；之后不得通过旧指针访问或再次释放该块。",conditions:["分配尺寸计算不溢出；本书避免零大小分配。","每次分配结果先检查，再初始化读取。","每块成功分配最终恰好由一个拥有者释放一次。"]},fs=[{text:"确定容量、检查尺寸并申请。"},{text:"检查非 NULL，初始化所有将读取的元素。"},{text:"最后一次使用后释放；失败路径也释放之前已拥有的资源。"}],hs=[{title:"三项动态数组",problem:"动态申请三个 int，存 2、4、6 并输出总和。",steps:["malloc 申请三项字节数。","检查后逐项赋值。","输出 12，再 free。"],answer:{code:`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *a = malloc(3 * sizeof *a);
    if (a == NULL) { return 1; }
    a[0] = 2; a[1] = 4; a[2] = 6;
    printf("%d\\n", a[0] + a[1] + a[2]);
    free(a);
    a = NULL;
    return 0;
}
`,stdin:"",stdout:`12
`,files:{},exitCode:0}},{title:"由调用者持有对象",problem:"函数写入调用者数组，而非返回局部数组地址。",steps:["main 拥有数组。","函数仅借用它。","返回后数组仍在 main 中存活。"],answer:{code:`#include <stdio.h>

void fill(int *a)
{
    a[0] = 7;
    a[1] = 9;
}

int main(void)
{
    int a[2] = {0};
    fill(a);
    printf("%d %d\\n", a[0], a[1]);
    return 0;
}
`,stdin:"",stdout:`7 9
`,files:{},exitCode:0}}],gs=[{problem:"malloc 成功后元素是否全为零？",hint:"它只提供空间，不保证清零。",solution:["初始内容不确定。","先写入每个要读的元素。","若用 calloc，也仍要检查分配失败。"],answer:"不保证；不得直接读取未初始化元素。",difficulty:2,misconceptionTags:[]},{problem:"free(p) 后执行 p=NULL，副本 q 是否也自动变空？",hint:"纸条是两份，柜子只有一份。",solution:["释放使目标块失效。","p=NULL 只改 p。","q 仍悬空，不得读取或释放目标。"],answer:"不会；所有别名必须按同一生命周期约定停止使用。",difficulty:3,misconceptionTags:[]},{problem:"给两项动态数组填 5 和 6，输出乘积并释放。",hint:"检查 malloc 返回值。",solution:["申请两项。","初始化再乘。","输出 30，最后 free。"],answer:{code:`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *a = malloc(2 * sizeof *a);
    if (a == NULL) { return 1; }
    a[0] = 5; a[1] = 6;
    printf("%d\\n", a[0] * a[1]);
    free(a);
    return 0;
}
`,stdin:"",stdout:`30
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"为什么 n*sizeof *p 要在乘法前检查？",hint:"size_t 无符号回绕可能把大需求变成小分配。",solution:["比较 n 与 SIZE_MAX/sizeof *p。","超出就拒绝。","分配小块后按大长度写会越界。"],answer:"先检查 n > SIZE_MAX / sizeof *p；不能等乘法回绕后再猜原需求。",difficulty:3,misconceptionTags:[]}],bs=[{claim:"free 会自动把所有指针变成 NULL。",correction:"free 不改调用者所有别名；必须停止使用旧地址。",tag:"c-memory-m1"},{claim:"返回局部地址只要马上用就安全。",correction:"生命周期已经结束，“马上”不恢复它。",tag:"c-memory-m2"}],xs={question:"malloc 返回 NULL 后应？",choices:["继续写第零项","处理失败，不解引用","调用两次 free"],correctIndex:1,feedback:["NULL 不指向分配好的元素。","正确，报告失败或清理后返回。","free(NULL) 允许但不能代替错误处理。"]},vs={mode:"c-compare",prediction:"先遮住输出：动态申请三个 int，存 2、4、6 并输出总和。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *a = malloc(3 * sizeof *a);
    if (a == NULL) { return 1; }
    a[0] = 2; a[1] = 4; a[2] = 6;
    printf("%d\\n", a[0] + a[1] + a[2]);
    free(a);
    a = NULL;
    return 0;
}
`,stdin:"",stdout:`12
`,files:{},exitCode:0}},$s=["c-pointer-arrays"],ks=4,_s=["c-memory-m1","c-memory-m2"],ws=["n1570"],ys={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},js={id:os,number:cs,chapterId:rs,title:as,concept:ds,intuition:ls,objectives:us,body:ps,formalDefinition:ms,derivation:fs,workedExamples:hs,practice:gs,commonMistakes:bs,learningCheck:xs,interactiveVisual:vs,prerequisites:$s,difficulty:ks,misconceptionTags:_s,sources:ws,provenance:ys},Cs="c-modules",Is="7.1",Ts="c-ch7",Ls="头文件、多文件与构建",zs="把声明与实现分开，可以让一个项目的多个源文件共享接口，同时各自保持清楚的职责。",Es="头文件像菜单，源文件像厨房。看见菜单知道能点什么，但链接时仍必须找到真正做菜的实现。",As=["一个声明，一份定义","头文件保护","编译与链接分开理解"],Ns=[{title:"一个声明，一份定义",text:"在 stats.h 放 int max_score(int a,int b); 原型，在 stats.c 放实现，main.c 包含头文件并调用。声明可在不同编译单元出现，普通外部函数定义通常只保留一份。不要在头文件里直接放普通全局对象定义，否则多个 .c 包含时容易出现重复定义。"},{title:"头文件保护",text:"使用 #ifndef STATS_H、#define STATS_H 和 #endif 包住头文件正文，防止同一翻译单元重复包含造成类型重复定义。自有头文件写双引号，标准头文件写尖括号。头文件应包含自己声明所需的类型头文件，不要求调用者碰巧先包含某个文件。文件内辅助函数可用 static 限制链接可见性。"},{title:"编译与链接分开理解",text:"gcc -std=c17 -Wall -Wextra -Wpedantic main.c stats.c -o app 会编译两份源文件再链接。漏掉 stats.c 时，即使原型正确，也会缺少函数实现。头文件不是需要单独链接的实现文件。较大项目可用 -c 先得到目标文件，再链接；本书项目给出一条直接可用的命令，避免先被构建系统打断。"}],Ss={text:"头文件提供可共享声明；各 .c 独立翻译，链接器把它们的定义与引用连接。",conditions:["共享声明保持一致。","源文件实现包含自己的接口头文件以暴露类型不一致。","命令必须列出所有参与链接的实现源文件。"]},qs=[{text:"把公开类型和函数原型放进带保护的头文件。"},{text:"把实现放进 .c，main 只调用公开接口。"},{text:"一次编译链接全部实现文件，用缺失和重复定义诊断检查职责。"}],Us=[{title:"先声明再定义",problem:"单文件模拟声明和后置实现，调用 larger。",steps:["main 前先放原型。","调用依声明检查参数。","main 后的定义提供实现。"],answer:{code:`#include <stdio.h>
int larger(int a, int b);
int main(void)
{
    printf("%d\\n", larger(2, 9));
    return 0;
}
int larger(int a, int b)
{
    return a > b ? a : b;
}
`,stdin:"",stdout:`9
`,files:{},exitCode:0}},{title:"文件内辅助函数",problem:"static helper 仅供本源文件使用，返回两倍值。",steps:["static 限制函数链接可见性。","同文件 main 可以调用。","4 的两倍为 8。"],answer:{code:`#include <stdio.h>

static int helper(int n)
{
    return n * 2;
}

int main(void)
{
    printf("%d\\n", helper(4));
    return 0;
}
`,stdin:"",stdout:`8
`,files:{},exitCode:0}}],Gs=[{problem:"有声明仍报 undefined reference，先检查什么？",hint:"声明不等于实现已链接。",solution:["确认存在匹配定义。","确认实现 .c 在编译命令里。","再查拼写和签名。"],answer:"检查是否漏编译实现文件，或函数名、声明与定义不一致。",difficulty:2,misconceptionTags:[]},{problem:"为什么头文件保护不能解决把普通全局变量定义放在头文件导致的跨文件重复？",hint:"保护只在单个翻译单元内生效。",solution:["每个 .c 独立预处理。","各自都可能产生一份外部定义。","头文件放 extern 声明，单个 .c 放定义。"],answer:"保护防同一翻译单元重复包含，不防多个翻译单元各自产生定义。",difficulty:3,misconceptionTags:[]},{problem:"main.c、records.c、input.c 如何一次构建？",hint:"把三个实现源文件列在命令里。",solution:["用同样标准和警告参数。","不把 .h 当实现文件。","最后 -o 指定程序。"],answer:"gcc -std=c17 -Wall -Wextra -Wpedantic main.c records.c input.c -o gradebook",difficulty:2,misconceptionTags:[]},{problem:"?: 表达式 a>b ? a:b 在例题里做什么？",hint:"问号前是条件，冒号分开两个值。",solution:["条件非零选 a。","否则选 b。","这是带结果的条件选择，不会两个分支都计算。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a = 6, b = 4;
    printf("%d\\n", a > b ? a : b);
    return 0;
}
`,stdin:"",stdout:`6
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],Ms=[{claim:"包含头文件就已经链接实现。",correction:"头文件提供声明，仍需编译并链接对应 .c。",tag:"c-modules-m1"},{claim:"所有辅助函数都要暴露给其他文件。",correction:"只在当前文件使用的函数可声明为 static，缩小接口。",tag:"c-modules-m2"}],Rs={question:"头文件主要负责？",choices:["保存运行结果","声明共享类型与函数接口","自动安装编译器"],correctIndex:1,feedback:["运行数据应存明确数据文件。","正确，实现通常在 .c。","编译器安装与头文件职责不同。"]},Bs={mode:"c-compare",prediction:"先遮住输出：单文件模拟声明和后置实现，调用 larger。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
int larger(int a, int b);
int main(void)
{
    printf("%d\\n", larger(2, 9));
    return 0;
}
int larger(int a, int b)
{
    return a > b ? a : b;
}
`,stdin:"",stdout:`9
`,files:{},exitCode:0}},Ds=["c-parse"],Os=5,Vs=["c-modules-m1","c-modules-m2"],Fs=["n1570"],Ws={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Ks={id:Cs,number:Is,chapterId:Ts,title:Ls,concept:zs,intuition:Es,objectives:As,body:Ns,formalDefinition:Ss,derivation:qs,workedExamples:Us,practice:Gs,commonMistakes:Ms,learningCheck:Rs,interactiveVisual:Bs,prerequisites:Ds,difficulty:Os,misconceptionTags:Vs,sources:Fs,provenance:Ws},Ps="c-out-parameters",Hs="5.2",Xs="c-ch5",Ys="指针参数与明确的输出结果",Zs="把对象地址交给函数，可以让函数明确地修改调用者数据，或返回多个结果。",Qs="普通参数像复印数据，指针参数像复印门牌：函数拿到门牌副本，仍能找到原对象。",Js=["交换两个整数","状态与业务值分开","调用者也承担条件"],no=[{title:"交换两个整数",text:"void swap(int *a, int *b) 接收两个有效整数地址。先保存 *a，再把 *b 写入 *a，最后把临时值写入 *b。没有临时变量直接连续赋值会丢掉原值。传参时写 swap(&x, &y)，不是 swap(x, y)。"},{title:"状态与业务值分开",text:"一个函数既可能失败又要返回数值时，可返回成功标志，把业务值写到输出参数。例如 checked_add 返回 1 才写 *out，失败返回 0 且保持原输出不变。这样不把合法零和失败混淆。输出参数必须指向可写对象；函数要声明是否允许 NULL、是否允许输入输出指向同一对象。"},{title:"调用者也承担条件",text:"函数检查 NULL 不代表能验证任意地址是否可写。调用者负责传有效对象。对业务错误用普通分支报告，别只用 assert。接口越清楚，越能独立测试成功路径、失败路径和“不改变原输出”的承诺。"}],to={text:"指针实参仍按值传递；通过该副本解引用可访问调用者对象。输出参数在成功时写入结果。",conditions:["swap 接收两个有效可写 int 地址，可为同一对象。","本节加法例限制两个输入在 0 到 100，保证和可表示。","失败时输出参数保持不变，调用者先检查返回状态。"]},eo=[{text:"写清输入对象和输出对象的职责。"},{text:"先验证参数及可检查的范围，再写输出。"},{text:"调用时传地址，成功后才使用结果。"}],io=[{title:"真正交换",problem:"交换 x=3 与 y=8。",steps:["传 &x 和 &y。","临时变量保存 3。","依次写入后得到 8 和 3。"],answer:{code:`#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void)
{
    int x = 3, y = 8;
    swap(&x, &y);
    printf("%d %d\\n", x, y);
    return 0;
}
`,stdin:"",stdout:`8 3
`,files:{},exitCode:0}},{title:"失败不改输出",problem:"限定 0..100 的加法，输入 -1、2，out 原值 99。",steps:["先判断参数范围。","失败立即返回 0。","out 不变，仍是 99。"],answer:{code:`#include <stdio.h>

int add_small(int a, int b, int *out)
{
    if (out == NULL || a < 0 || a > 100 || b < 0 || b > 100) { return 0; }
    *out = a + b;
    return 1;
}

int main(void)
{
    int out = 99;
    int ok = add_small(-1, 2, &out);
    printf("%d %d\\n", ok, out);
    return 0;
}
`,stdin:"",stdout:`0 99
`,files:{},exitCode:0}}],so=[{problem:"写 set_zero(int *p)，把调用者变量设为零，要求 p 有效。",hint:"给 *p 赋值。",solution:["函数接收地址。","*p=0 改变对象。","main 输出新值。"],answer:{code:`#include <stdio.h>

void set_zero(int *p)
{
    *p = 0;
}

int main(void)
{
    int x = 5;
    set_zero(&x);
    printf("%d\\n", x);
    return 0;
}
`,stdin:"",stdout:`0
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"swap(&x,&x) 会损坏 x 吗？",hint:"按三步赋值追踪同一对象。",solution:["temp 保存原 x。","x 写回自身值。","最后又写 temp。"],answer:"本节临时变量交换在两参数同址时仍保持原值。",difficulty:3,misconceptionTags:[]},{problem:"函数返回成功标志 0，同时 out 仍为 99，能把 99 当运算结果吗？",hint:"先检查状态。",solution:["0 表示失败。","99 只是先前值。","调用者应处理错误而不是继续计算。"],answer:"不能；只有状态成功时输出才是本次结果。",difficulty:2,misconceptionTags:[]},{problem:"为什么把参数 p 设置为 NULL，调用者指针并不会自动变 NULL？",hint:"p 自己也是一个值副本。",solution:["复制指针地址到形参。","p=NULL 只改副本。","若要修改调用者指针，需返回新指针或使用指针的地址。"],answer:"修改形参指针本身不会更新调用者的指针对象。",difficulty:3,misconceptionTags:[]}],oo=[{claim:"C 一旦传指针就变成按引用传递。",correction:"仍按值传递，只是副本地址可访问共享的目标对象。",tag:"c-out-parameters-m1"},{claim:"返回零就一定代表业务结果零。",correction:"接口可把零定义为失败状态，业务值在输出参数里，需读契约。",tag:"c-out-parameters-m2"}],co={question:"要让函数修改 int x，应传？",choices:["x","&x","sizeof x"],correctIndex:1,feedback:["只是原数值的副本。","正确，函数拿到对象地址。","大小不标识对象位置。"]},ro={mode:"c-compare",prediction:"先遮住输出：交换 x=3 与 y=8。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void)
{
    int x = 3, y = 8;
    swap(&x, &y);
    printf("%d %d\\n", x, y);
    return 0;
}
`,stdin:"",stdout:`8 3
`,files:{},exitCode:0}},ao=["c-pointers"],lo=3,uo=["c-out-parameters-m1","c-out-parameters-m2"],po=["n1570"],mo={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},fo={id:Ps,number:Hs,chapterId:Xs,title:Ys,concept:Zs,intuition:Qs,objectives:Js,body:no,formalDefinition:to,derivation:eo,workedExamples:io,practice:so,commonMistakes:oo,learningCheck:co,interactiveVisual:ro,prerequisites:ao,difficulty:lo,misconceptionTags:uo,sources:po,provenance:mo},ho="c-output",go="1.2",bo="c-ch1",xo="读懂第一段代码与输出",vo="认识程序的标点和输出方式，就能把一段“能运行的代码”读成有顺序的动作。",$o="从 main 的左花括号进入，一句一句向下执行。分号像一句话的句号，花括号把多句组成一个整体；缩进让人看清层级，但在这里不决定执行顺序。",ko=["逐个读符号","换行和转义","printf 是带空位的模板"],_o=[{title:"逐个读符号",text:'#include <stdio.h> 让本文件获得标准输入输出函数的声明。int 是 main 返回值的类型；void 表示这个写法不接收参数。函数名后写括号，函数体用花括号包住。puts("Hi"); 是一次函数调用：把文字交给 puts。字符串用英文双引号，分号在括号外。'},{title:"换行和转义",text:'puts 会在字符串末尾增加一个换行；printf 不自动增加。反斜杠加 n 写作 \\n，表示一个换行字符，不是打印两个字母。\\t 表示制表符，\\" 表示字符串内的双引号，\\\\ 表示反斜杠。屏幕上的列宽、制表符位置可能因终端而不同，本书不靠它们对齐表格。'},{title:"printf 是带空位的模板",text:"printf 的第一个参数是格式字符串。%d 是整数空位，后面的整数按顺序填进去；%% 才是打印百分号。先数清空位，再数后面的参数。不要把读者输入当成格式字符串。注释 // 直到行尾，或 /* 到 */，用于解释意图，不参与运行；块注释不能互相嵌套。"}],wo={text:"语句按控制流执行；字符串是双引号包围的字符序列。printf 的格式说明必须与传入参数的实际类型匹配。",conditions:["调用函数前包含声明它的头文件。","本节 %d 对应 int；文字直接写在格式字符串内。","屏幕显示与标准输出不同：你在键盘输入的回显不算程序输出。"]},yo=[{text:"从 main 开始，先找每个分号结束的语句。"},{text:"把字符串里的转义字符解释成实际字符。"},{text:"按执行顺序拼接输出，并只在明确换行的位置换行。"}],jo=[{title:"两种换行",problem:"先用 puts 输出 Start，再用 printf 输出两行。",steps:["puts 自动换行。","printf 的两个 \\n 分别换行。","三行会依次出现。"],answer:{code:`#include <stdio.h>

int main(void)
{
    puts("Start");
    printf("A\\nB\\n");
    return 0;
}
`,stdin:"",stdout:`Start
A
B
`,files:{},exitCode:0}},{title:"模板与百分号",problem:"输出整数进度 25，并显示百分号。",steps:["%d 由整数 25 替换。","%% 生成一个 %。","末尾 \\n 让终端换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    printf("Progress: %d%%\\n", 25);
    return 0;
}
`,stdin:"",stdout:`Progress: 25%
`,files:{},exitCode:0}}],Co=[{problem:'printf("A"); printf("B\\n"); 输出几行？',hint:"第一次没有换行。",solution:["先追加 A。","再在同一行追加 B。","最后换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    printf("A");
    printf("B\\n");
    return 0;
}
`,stdin:"",stdout:`AB
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:'输出带双引号的 "C"。',hint:"双引号需要转义。",solution:["外层双引号界定字符串。","内部两个双引号前加反斜杠。","使用 puts 完成换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    puts("\\"C\\"");
    return 0;
}
`,stdin:"",stdout:`"C"
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:'为什么 printf("%d %d\\n", 3); 不可以？',hint:"数空位和参数。",solution:["格式要求两个 int。","只提供了一个。","补齐参数或删去一个空位，不能期待“自动补零”。"],answer:"格式参数不足会导致未定义行为；不能给这个错误程序规定输出。",difficulty:2,misconceptionTags:[]},{problem:"输出一行 Path: C:\\study。",hint:"要输出一个反斜杠，在字符串里写两个。",solution:["写好 Path: 文本。","把路径反斜杠写成 \\\\。","puts 自动加换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    puts("Path: C:\\\\study");
    return 0;
}
`,stdin:"",stdout:`Path: C:\\study
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]}],Io=[{claim:"printf 会自动换行。",correction:"只有格式字符串里的 \\n 或其他输出函数明确要求时才换行。",tag:"c-output-m1"},{claim:"中文全角分号也能结束 C 语句。",correction:"代码标点使用英文半角；全角符号是不同字符，编译器会报错。",tag:"c-output-m2"}],To={question:'printf("%d%%", 8) 写出什么？',choices:["8%%","8%","%d%"],correctIndex:1,feedback:["%% 在格式里表示一个百分号。","正确，%d 用 8 填入，%% 输出一个 %。","%d 会按参数替换，不保留原样。"]},Lo={mode:"c-compare",prediction:"先遮住输出：先用 puts 输出 Start，再用 printf 输出两行。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    puts("Start");
    printf("A\\nB\\n");
    return 0;
}
`,stdin:"",stdout:`Start
A
B
`,files:{},exitCode:0}},zo=["c-start"],Eo=1,Ao=["c-output-m1","c-output-m2"],No=["n1570"],So={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},qo={id:ho,number:go,chapterId:bo,title:xo,concept:vo,intuition:$o,objectives:ko,body:_o,formalDefinition:wo,derivation:yo,workedExamples:jo,practice:Co,commonMistakes:Io,learningCheck:To,interactiveVisual:Lo,prerequisites:zo,difficulty:Eo,misconceptionTags:Ao,sources:No,provenance:So},Uo="c-parse",Go="6.4",Mo="c-ch6",Ro="用 strtol 验证整数文本",Bo="把整行文本转换为数字时，要分别检查“读到了数字”“有没有多余字符”“是否超范围”。",Do="三道关卡分别查格式、机器范围、业务范围；只过一道不能说明数据可用。",Oo=["先读文本，再转换","三个失败条件","atoi 不承担验证"],Vo=[{title:"先读文本，再转换",text:"strtol 来自 stdlib.h，按给定进制转换开头的数字，返回 long，并通过 end 指针告诉你停在哪里。调用前 errno=0，之后检查 errno==ERANGE。它会跳过前导空白，也可接受正负号；接口默认行为不一定等于你的业务规则，要额外规定并检查。"},{title:"三个失败条件",text:"end==text 表示没有转换任何数字。*end 不为终止零，说明仍有未接受的后缀；若允许换行或空白，先明确定义并消耗它们。errno==ERANGE 代表结果超出 long 可表示范围。通过这些检查后，还要比较 INT_MIN/INT_MAX 或 0..100 这样的目标范围，最后才强转为 int。"},{title:"atoi 不承担验证",text:"atoi 没有 end 参数，难区分合法零和无效输入，也不能像这里一样可靠处理越界诊断。本节解析函数先限制完整文本为一个整数表示，允许 strtol 本身接受的前导空白和符号，拒绝任何后缀。项目的“姓名 空格 分数”有更窄格式，会明确用专门规则检查，不能宣称一个函数适用所有输入协议。"}],Fo={text:"strtol 使用 endptr 报告未转换后缀，并通过 errno 的 ERANGE 报告范围错误；调用者负责完整格式和目标范围验证。",conditions:["输入为有终止零的文本。","调用前清零 errno。","只在全部验证通过后写输出参数或转换为窄类型。"]},Wo=[{text:"清 errno，调用 strtol 并保存 end。"},{text:"检查无数字、ERANGE、后缀和业务范围。"},{text:"全部通过才转换成 int 并更新输出，否则保持原状态。"}],Ko=[{title:"合法分数",problem:'把 "85" 解析为 0..100 的分数。',steps:["调用前 errno 置零。","end 指向终止零。","范围合法，输出 85。"],answer:{code:`#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main(void)
{
    const char *text = "85";
    char *end;
    errno = 0;
    long value = strtol(text, &end, 10);
    if (end == text || errno == ERANGE || *end != '\\0' || value < 0 || value > 100) { return 1; }
    printf("%d\\n", (int)value);
    return 0;
}
`,stdin:"",stdout:`85
`,files:{},exitCode:0}},{title:"拒绝后缀",problem:'输入 "85abc"，不把前缀 85 当作有效整行。',steps:["strtol 能读取 85。","end 指向 a，后缀非空。","拒绝整条记录。"],answer:{code:`#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main(void)
{
    const char *text = "85abc";
    char *end;
    errno = 0;
    long value = strtol(text, &end, 10);
    if (end == text || errno == ERANGE || *end != '\\0' || value < 0 || value > 100) {
        puts("invalid"); return 1;
    }
    printf("%ld\\n", value);
    return 0;
}
`,stdin:"",stdout:`invalid
`,files:{},exitCode:1}}],Po=[{problem:"空字符串传给 strtol，最直接用哪条检查拒绝？",hint:"有没有消费至少一个数字。",solution:["空串无可转换数字。","end 等于输入起点。","立即拒绝。"],answer:"end == text。",difficulty:2,misconceptionTags:[]},{problem:'"101" 转换没报 ERANGE，为什么仍不能作成绩？',hint:"机器范围不同于业务范围。",solution:["101 能放进 long。","成绩上限却是 100。","业务范围检查拒绝。"],answer:"必须额外检查 0<=value && value<=100。",difficulty:2,misconceptionTags:[]},{problem:"为什么不能先 (int)value 再检查是否在 0..100？",hint:"窄化前可能已丢失信息。",solution:["long 值可能超出 int。","转换后的结果不再可靠表达原值。","先在 long 中比较范围，合法后转换。"],answer:"范围检查必须发生在转换之前。",difficulty:3,misconceptionTags:[]},{problem:'解析 "0" 是否应被误判为失败？',hint:"返回值为零也可能是合法数值。",solution:["检查 end 已前进。","无 ERANGE 且无后缀。","0 在业务范围内，接受。"],answer:{code:`#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main(void)
{
    const char *text = "0";
    char *end;
    errno = 0;
    long value = strtol(text, &end, 10);
    if (end == text || errno == ERANGE || *end != '\\0' || value < 0 || value > 100) { return 1; }
    printf("%ld\\n", value);
    return 0;
}
`,stdin:"",stdout:`0
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],Ho=[{claim:"strtol 返回 0 就是失败。",correction:'合法文本 "0" 也返回零，要结合 end 与 errno。',tag:"c-parse-m1"},{claim:"没有 ERANGE 就满足所有输入规则。",correction:"它只报告 long 范围，后缀与业务范围由你验证。",tag:"c-parse-m2"}],Xo={question:'"12x" 只允许纯整数时，应该？',choices:["接受 12","检查 *end 后拒绝","把 x 自动删除"],correctIndex:1,feedback:["前缀可转换不等于整条格式合法。","正确，未接受后缀不能忽略。","静默删改输入会掩盖错误。"]},Yo={mode:"c-compare",prediction:'先遮住输出：把 "85" 解析为 0..100 的分数。 写下结果后，对比两个已编译的例子。',caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main(void)
{
    const char *text = "85";
    char *end;
    errno = 0;
    long value = strtol(text, &end, 10);
    if (end == text || errno == ERANGE || *end != '\\0' || value < 0 || value > 100) { return 1; }
    printf("%d\\n", (int)value);
    return 0;
}
`,stdin:"",stdout:`85
`,files:{},exitCode:0}},Zo=["c-files"],Qo=4,Jo=["c-parse-m1","c-parse-m2"],nc=["n1570"],tc={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},ec={id:Uo,number:Go,chapterId:Mo,title:Ro,concept:Bo,intuition:Do,objectives:Oo,body:Vo,formalDefinition:Fo,derivation:Wo,workedExamples:Ko,practice:Po,commonMistakes:Ho,learningCheck:Xo,interactiveVisual:Yo,prerequisites:Zo,difficulty:Qo,misconceptionTags:Jo,sources:nc,provenance:tc},ic="c-pointer-arrays",sc="5.3",oc="c-ch5",cc="数组与指针、const 与范围",rc="理解数组何时转换为指针，可以写出同时表达位置、长度和只读意图的接口。",ac="数组是一排实际抽屉，指针是指向其中一个抽屉的标签。标签知道起点，却不自动记录整排有多少个。",dc=["转换不是同一类型","尾后指针的限制","只读参数与可改指针"],lc=[{title:"转换不是同一类型",text:"多数表达式中，数组名转换成指向首元素的指针；sizeof 数组、对数组取地址等场景例外。int a[3] 的 a+1 指向下一元素，按元素大小前进，不是随意增加一个字节。a[i] 对合法范围等价于 *(a+i)。数组与指针有关联，但不是同一类对象。"},{title:"尾后指针的限制",text:"可以形成指向数组最后一项之后的尾后指针，用来判断遍历结束，但不能解引用。指针加减应保持在同一数组对象内或其尾后位置；不能越界形成任意指针再“走回来”。不同对象的指针大小比较、相减也没有一般的可移植意义。"},{title:"只读参数与可改指针",text:"const int *p 表示不能经 p 修改目标 int，但 p 自身可改为指向别处。int *const p 表示指针对象不能改指向，但可通过它改目标。const 不延长生命周期。数组只读计算接口优先用 const int *values, size_t count，让调用者明确提供范围。"}],uc={text:"数组到指针转换产生首元素地址；指针算术以目标元素为单位，并受同一数组及尾后边界限制。",conditions:["函数接收至少 count 项的有效数组；count 为零时不访问。","不解引用尾后指针。","不将任意两个独立对象地址做大小比较或相减。"]},pc=[{text:"识别当前表达式里的数组是否发生转换。"},{text:"把指针位置与实际数组长度一起追踪。"},{text:"用 const 限制不必要的写入，迭代始终在合法范围。"}],mc=[{title:"只读求和",problem:"函数接收三个数及长度，求和。",steps:["const 阻止函数通过参数写元素。","循环按 n 访问。","2+3+4 得 9。"],answer:{code:`#include <stdio.h>

int sum_small(const int *a, size_t n)
{
    int sum = 0;
    for (size_t i = 0; i < n; i++) { sum += a[i]; }
    return sum;
}

int main(void)
{
    int a[] = {2, 3, 4};
    printf("%d\\n", sum_small(a, 3));
    return 0;
}
`,stdin:"",stdout:`9
`,files:{},exitCode:0}},{title:"移动一个元素",problem:"指针从首项移到第二项再读取。",steps:["p 最初指向 a[0]。","p++ 前进一项。","*p 得到 a[1] 的 20。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[] = {10, 20, 30};
    const int *p = a;
    p++;
    printf("%d\\n", *p);
    return 0;
}
`,stdin:"",stdout:`20
`,files:{},exitCode:0}}],fc=[{problem:"a+3 对三元素数组是合法的吗？能读取 *(a+3) 吗？",hint:"区分形成尾后指针与解引用。",solution:["a+3 是合法尾后位置。","那里没有数组元素。","只能作边界标记，不得解引用。"],answer:"可形成尾后指针，但不能读取或写入它。",difficulty:3,misconceptionTags:[]},{problem:"用 const int *p 能执行 p++ 吗？",hint:"const 修饰的是目标 int。",solution:["指针本身不是 const。","可在合法范围内移动。","仍不能用 *p=... 写目标。"],answer:"可以在合法范围内移动；不能经 p 修改 int。",difficulty:2,misconceptionTags:[]},{problem:"打印 a[2] 与 *(a+2)，数组为 {6,7,8}。",hint:"两种写法访问同一元素。",solution:["第二个偏移为 2。","均访问第三项。","两个输出都是 8。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[] = {6, 7, 8};
    printf("%d %d\\n", a[2], *(a + 2));
    return 0;
}
`,stdin:"",stdout:`8 8
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"函数只收到 int *p，能用 sizeof p / sizeof p[0] 求原数组长度吗？",hint:"指针不携带完整数组大小。",solution:["sizeof p 是指针大小。","它与数组实际长度无关。","接口必须另传长度。"],answer:"不能；这个计算不会恢复原数组长度。",difficulty:2,misconceptionTags:[]}],hc=[{claim:"数组就是指针，sizeof 总是一样。",correction:"数组本体与指针对象的大小含义不同；转换不意味着类型相同。",tag:"c-pointer-arrays-m1"},{claim:"尾后指针可读取一个终止零。",correction:"整数数组没有自动终止零；尾后位置不能解引用。",tag:"c-pointer-arrays-m2"}],gc={question:"const int *p 中 const 限制什么？",choices:["经 p 修改目标 int","修改 p 的指向","任何人修改原对象"],correctIndex:0,feedback:["正确，只限制通过这个访问路径的写入。","p 本身可在合法范围改指向。","其他有权写入的访问路径未必受限制。"]},bc={mode:"c-compare",prediction:"先遮住输出：函数接收三个数及长度，求和。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int sum_small(const int *a, size_t n)
{
    int sum = 0;
    for (size_t i = 0; i < n; i++) { sum += a[i]; }
    return sum;
}

int main(void)
{
    int a[] = {2, 3, 4};
    printf("%d\\n", sum_small(a, 3));
    return 0;
}
`,stdin:"",stdout:`9
`,files:{},exitCode:0}},xc=["c-out-parameters"],vc=4,$c=["c-pointer-arrays-m1","c-pointer-arrays-m2"],kc=["n1570"],_c={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},wc={id:ic,number:sc,chapterId:oc,title:cc,concept:rc,intuition:ac,objectives:dc,body:lc,formalDefinition:uc,derivation:pc,workedExamples:mc,practice:fc,commonMistakes:hc,learningCheck:gc,interactiveVisual:bc,prerequisites:xc,difficulty:vc,misconceptionTags:$c,sources:kc,provenance:_c},yc="c-pointers",jc="5.1",Cc="c-ch5",Ic="指针：对象、地址与解引用",Tc="指针保存对象的位置，让函数和数据结构能够间接访问对象。",Lc="对象像房间，地址像门牌，指针变量像写着门牌的纸条。复制纸条不会复制房间；修改纸条也不会搬动房间。真实指针还有类型和合法访问条件，不能只把它当一个可随意计算的整数。",zc=["先画三个不同东西","通过地址修改对象","空指针不是空对象"],Ec=[{title:"先画三个不同东西",text:"int value = 5; 创建整数对象。int *p = &value; 创建指针对象，保存 value 的地址。& 取地址，*p 在表达式中表示访问 p 指向的 int。声明里的 * 表示 p 的类型是指针，表达式里的 * 是解引用，含义依语法位置区分。"},{title:"通过地址修改对象",text:'*p = 8; 更新的是 value，不是 p。p = &other; 更新的是指针，让它转向另一个活着的 int。打印指针用 printf("%p", (void *)p)，格式结果依实现而变，不写死具体地址，也不保证相邻打印值的视觉模式。'},{title:"空指针不是空对象",text:"NULL 表示空指针常量的常见写法，可初始化尚不指向对象的指针。不能解引用 NULL，也不能解引用未初始化指针或悬空指针。检查 p != NULL 只排除了空，不能证明它一定指向活着、类型合适、可访问的对象。指针安全来自对象关系与生命周期约定。"}],Ac={text:"类型为 T * 的指针可指向适当的 T 对象；当指向对象仍在生命周期内且访问合法时，*p 表示该对象。",conditions:["先初始化指针。","解引用前指向正确类型、可访问且仍存活的对象。","打印地址只作观察，不用于固定输出测试。"]},Nc=[{text:"先建立一个确定存活的对象。"},{text:"用 & 取得地址并存入匹配类型的指针。"},{text:"区分修改指针本身与修改 *p，并追踪对象的最终值。"}],Sc=[{title:"间接改值",problem:"通过 p 把 value 从 5 改成 8。",steps:["p 指向 value。","*p 是 value 的别名访问。","写入后 value 为 8。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int value = 5;
    int *p = &value;
    *p = 8;
    printf("%d\\n", value);
    return 0;
}
`,stdin:"",stdout:`8
`,files:{},exitCode:0}},{title:"指针转向",problem:"p 先指向 a，再转向 b，修改 *p。",steps:["p=&b 后不再指向 a。","*p=9 改的是 b。","a 保持 1。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a = 1, b = 2;
    int *p = &a;
    p = &b;
    *p = 9;
    printf("%d %d\\n", a, b);
    return 0;
}
`,stdin:"",stdout:`1 9
`,files:{},exitCode:0}}],qc=[{problem:"p、q 都指向 x，*q=7 后 *p 是多少？",hint:"两个指针可指向同一对象。",solution:["p 与 q 保存同一地址。","q 间接更新 x。","p 读取同一个 x。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int x = 3;
    int *p = &x;
    int *q = p;
    *q = 7;
    printf("%d\\n", *p);
    return 0;
}
`,stdin:"",stdout:`7
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"int *p=NULL; 能用 *p=0 创建对象吗？",hint:"指针不会自动分配目标对象。",solution:["NULL 不指向可写 int。","解引用不合法。","先创建实际 int，再让 p 指向它。"],answer:"不能；解引用空指针是错误，不能把它当分配操作。",difficulty:2,misconceptionTags:[]},{problem:"int *p, q; 中两个都是指针吗？",hint:"星号属于具体声明项。",solution:["p 声明为 int*。","q 声明为 int。","建议一行声明一个指针减少误读。"],answer:"只有 p 是指针，q 是 int。",difficulty:2,misconceptionTags:[]},{problem:"p 指向 x，执行 p=&y 是否复制 x 的值给 y？",hint:"改变地址与改变内容不同。",solution:["只把 y 的地址写入 p。","x 和 y 的值均未被这句改动。","之后 *p 访问 y。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int x = 4, y = 6;
    int *p = &x;
    p = &y;
    printf("%d %d %d\\n", x, y, *p);
    return 0;
}
`,stdin:"",stdout:`4 6 6
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],Uc=[{claim:"指针里保存的就是目标整数值。",correction:"保存的是地址；p 与 *p 是不同层次。",tag:"c-pointers-m1"},{claim:"非 NULL 就一定安全。",correction:"悬空、越界、类型不合适的指针也可能非空。",tag:"c-pointers-m2"}],Gc={question:"int x=2; int *p=&x; *p=4; 此后 x 为？",choices:["2","4","地址"],correctIndex:1,feedback:["*p 访问的正是 x。","正确，通过指针修改了同一对象。","x 仍是 int，不会变成地址。"]},Mc={mode:"c-compare",prediction:"先遮住输出：通过 p 把 value 从 5 改成 8。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int value = 5;
    int *p = &value;
    *p = 8;
    printf("%d\\n", value);
    return 0;
}
`,stdin:"",stdout:`8
`,files:{},exitCode:0}},Rc=["c-lines"],Bc=3,Dc=["c-pointers-m1","c-pointers-m2"],Oc=["n1570"],Vc={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Fc={id:yc,number:jc,chapterId:Cc,title:Ic,concept:Tc,intuition:Lc,objectives:zc,body:Ec,formalDefinition:Ac,derivation:Nc,workedExamples:Sc,practice:qc,commonMistakes:Uc,learningCheck:Gc,interactiveVisual:Mc,prerequisites:Rc,difficulty:Bc,misconceptionTags:Dc,sources:Oc,provenance:Vc},Wc="c-project-delivery",Kc="8.4",Pc="c-ch8",Hc="综合项目四：运行、测试与交付",Xc="交付包含别人能照做的构建命令、样例、预期结果、错误行为与已知限制。",Yc="把项目交给明天的自己：不靠记忆补文件，不靠解释猜命令，解压后就能重现同一结果。",Zc=["独立运行","保存报告与退出状态","测试与后续修改"],Qc=[{title:"独立运行",text:"从教材项目包解压后进入 project 目录。Windows UCRT64/Linux 使用 gcc -std=c17 -Wall -Wextra -Wpedantic main.c records.c input.c -o gradebook；macOS 可用 clang。运行 ./gradebook sample.txt；MSYS2 可写 ./gradebook.exe sample.txt。三行样例应输出 count: 3、total: 247、mean: 82.33、passed: 2，再输出 Ada 100、Lin 88、Bo 59。"},{title:"保存报告与退出状态",text:"正常报告写 stdout，错误写 stderr，main 用 EXIT_SUCCESS 或 EXIT_FAILURE 返回。可运行 ./gradebook sample.txt > report.txt 保存标准输出；重定向由 shell 先创建或截断目标文件，所以绝不能把输出路径设为输入文件，也不能使用其别名或硬链接。项目自身只读输入文件，不提供覆盖式存储；路径安全由这条使用限制说明。"},{title:"测试与后续修改",text:"test_records.c 检查正常插入、查重、容量上限、排序、解析与失败不写输出；tools/verify.py 还从外部调用真实程序，对输出、错误退出和不完整报告逐项核对。扩展中文姓名、CSV、编辑模式或更大容量时，先更新协议与范围推理，再改实现和测试。本卷到可运行、可验证的本地项目为止，不制造未写的后续章节。"}],Jc={text:"可重复交付要求源代码、构建命令、输入样例、预期输出和测试使用同一版本。",conditions:["在临时练习目录运行例子。","不把报告重定向到输入路径或其别名。","记录实际平台与工具支持，不声称所有系统已验证。"]},nr=[{text:"按 README 从源代码构建，不使用遗留可执行文件。"},{text:"对照样例报告，再运行正常与拒绝用例。"},{text:"保留版本、许可、验证记录和限制，提交同版源与派生产物。"}],tr=[{title:"错误走标准错误",problem:"演示将错误写 stderr，并返回失败。",steps:["fprintf 目标为 stderr。","stdout 保持空。","返回非零状态，调用者能判断失败。"],answer:{code:`#include <stdio.h>

int main(void)
{
    fprintf(stderr, "invalid record\\n");
    return 1;
    return 0;
}
`,stdin:"",stdout:"",files:{},exitCode:1,stderr:`invalid record
`}},{title:"交付自检",problem:"用断言复算样例总分与边界，成功输出 ready。",steps:["独立手算总分 247。","确认平均值与及格判断的输入条件。","测试通过才报告 ready。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int main(void)
{
    int total = 100 + 88 + 59;
    assert(total == 247);
    assert(60 >= 60);
    assert(!(59 >= 60));
    puts("ready");
    return 0;
}
`,stdin:"",stdout:`ready
`,files:{},exitCode:0}}],er=[{problem:"能执行 ./gradebook sample.txt > sample.txt 吗？",hint:"shell 会在程序读取前处理重定向。",solution:["输出重定向先截断目标。","输入文件会被清空。","输出使用另一个全新路径，避免别名。"],answer:"不能；会有丢失输入的风险，项目文档明确禁止。",difficulty:3,misconceptionTags:[]},{problem:"只交 gradebook 可执行文件够不够？",hint:"平台、版本和可审查性。",solution:["二进制可能只适用于当前系统。","读者需要源、命令、样例和测试。","完整包保留同版文件。"],answer:"不够；教材交付包含完整源文件与可重复构建说明。",difficulty:2,misconceptionTags:[]},{problem:"stderr 有错误而 stdout 还有前两行报告，符合规格吗？",hint:"整份拒绝的含义。",solution:["这会让部分数据被误认成正式结果。","应先加载完整文件。","失败只给错误，不打印报告。"],answer:"不符合；本项目输入失败时 stdout 必须为空。",difficulty:3,misconceptionTags:[]},{problem:"准备增加最大人数到 100 万，需要重新分析什么？",hint:"此前总分和容量安全依赖上限 100。",solution:["检查容量增长和尺寸乘法。","重新证明总分类型足够、排序代价可接受。","更新边界测试与文档，不能只改常量。"],answer:"至少重审整数范围、内存增长、性能、协议限制和测试。",difficulty:4,misconceptionTags:[]}],ir=[{claim:"成功编译就可以省略 README。",correction:"初学者需要目录、命令、样例、输出与失败处理才能复现。",tag:"c-project-delivery-m1"},{claim:"验证记录可以写成“全平台无误”。",correction:"只报告实际运行平台与用例，未知平台不冒充已测。",tag:"c-project-delivery-m2"}],sr={question:"教材项目的完整交付应包含？",choices:["只有可执行文件","源代码、命令、样例、测试与限制","一张运行截图"],correctIndex:1,feedback:["读者无法审查或跨平台重建。","正确，可重复运行并能核对行为。","截图不能代替可运行材料。"]},or={mode:"c-compare",prediction:"先遮住输出：演示将错误写 stderr，并返回失败。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    fprintf(stderr, "invalid record\\n");
    return 1;
    return 0;
}
`,stdin:"",stdout:"",files:{},exitCode:1,stderr:`invalid record
`}},cr=["c-project-input"],rr=6,ar=["c-project-delivery-m1","c-project-delivery-m2"],dr=["n1570"],lr={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},ur={id:Wc,number:Kc,chapterId:Pc,title:Hc,concept:Xc,intuition:Yc,objectives:Zc,body:Qc,formalDefinition:Jc,derivation:nr,workedExamples:tr,practice:er,commonMistakes:ir,learningCheck:sr,interactiveVisual:or,prerequisites:cr,difficulty:rr,misconceptionTags:ar,sources:dr,provenance:lr},pr="c-project-input",mr="8.3",fr="c-ch8",hr="综合项目三：整份加载与文本协议",gr="文件模块先把输入放入临时表，只有整份合法才替换旧表，避免失败留下半成品。",br="像批次验货：全部合格才入库，任何一件失败则退回这一批，原仓库不动。",xr=["有界逐字符读行","严格解析两字段","提交与回滚"],vr=[{title:"有界逐字符读行",text:"项目 read_line 用 fgetc 的 int 结果逐个读取，最多保存 63 个字符加零。这样可以明确拒绝内嵌零和超长行，接受末行无换行，并在读到 LF 后去掉可选的 CR。裸 CR 仍被格式检查拒绝。返回值区分正常行、正常结束、读取错误、超长或非法字节；不把截断行交给解析器。"},{title:"严格解析两字段",text:"parse_student 先找唯一空格，前面必须 1..20 个英文字母；后面至少一个十进制数字且只有数字，先拒绝符号与空白，再用 strtol 和 errno 检查值与范围。输出 Student 只在成功时写入。空行、尾部空格、重复分隔符都拒绝，不悄悄纠正协议。"},{title:"提交与回滚",text:"gb_load 要求目标表已初始化。先打开文件并建立 staging 临时表，逐行解析并 gb_add。任何一步失败都关闭文件、销毁 staging，原目标保持原样；完全成功且关闭无误后，销毁旧目标并把 staging 所有权交给目标。结构体赋值在这里是有意的所有权转移，转移后的 staging 不再销毁同一块。"}],$r={text:"事务式加载在所有可检查步骤成功后一次转移结果；失败时销毁临时状态并保留原目标。",conditions:["目标表先初始化。","输入遵守本项目 ASCII 两字段协议。","加载成功转移所有权，失败清理临时表；不承诺文件系统的原子写入。"]},kr=[{text:"逐行读取并拒绝截断与非法字节。"},{text:"在临时表中解析、查重、追加，错误即清理。"},{text:"检查读取与关闭结果，成功后才替换目标。"}],_r=[{title:"解析条件先于转换",problem:'检查字符形式，"-1" 不符合无符号十进制分数协议。',steps:["第一个字符是减号。","不在 0..9。","格式失败，不调用业务统计。"],answer:{code:`#include <stdio.h>

int main(void)
{
    const char *s = "-1";
    int valid = 1;
    for (size_t i = 0; s[i] != '\\0'; i++) {
        if (s[i] < '0' || s[i] > '9') { valid = 0; break; }
    }
    printf("%d\\n", valid);
    return 0;
}
`,stdin:"",stdout:`0
`,files:{},exitCode:0}},{title:"接受无换行末行",problem:"读取固定文件最后一个字符后，正常 EOF 不等于读取错误。",steps:["循环读成功字符。","结束检查 ferror。","这里三字符有效，即使没有换行。"],answer:{code:`#include <stdio.h>

int main(void)
{
    FILE *fp = fopen("last.txt", "r");
    if (fp == NULL) { return 1; }
    int ch;
    while ((ch = fgetc(fp)) != EOF) { putchar(ch); }
    int bad = ferror(fp);
    if (fclose(fp) != 0) { bad = 1; }
    if (bad) { return 1; }
    putchar('\\n');
    return 0;
}
`,stdin:"",stdout:`end
`,files:{"last.txt":"end"},exitCode:0}}],wr=[{problem:"临时表已加两人，第 3 人重复，原目标应怎样？",hint:"加载操作尚未提交。",solution:["销毁临时表。","关闭流。","保留调用前目标表不变。"],answer:"原目标长度、记录和拥有资源保持不变。",difficulty:3,misconceptionTags:[]},{problem:"为何不用 fgets 后直接 strlen 来检测所有任意文件字节？",hint:"文件里可能有内嵌零。",solution:["fgets 可以读到零字节。","strlen 会在第一个零停止。","此处逐字节读取可明确拒绝内嵌零。"],answer:"简单 strlen 会丢失零后面的信息，不能据此宣称已验证整行。",difficulty:4,misconceptionTags:[]},{problem:'文本 "Ada 90 " 应接受吗？',hint:"分数后不允许空白。",solution:["末尾还有一个空格。","协议要求数字后立即结束。","拒绝，不默默 trim。"],answer:"拒绝；若改变协议，应同步文档和测试。",difficulty:2,misconceptionTags:[]},{problem:"成功转移 staging 后为何不能再对它 gb_destroy？",hint:"目标与 staging 暂时包含相同的拥有指针。",solution:["所有权已经交给目标。","再次销毁会释放目标正在使用的块。","转移后不要重复释放，或先把源重置为空。"],answer:"避免重复释放；本项目转移后不再销毁 staging。",difficulty:4,misconceptionTags:[]}],yr=[{claim:"解析前几行成功就能逐步覆盖目标表。",correction:"后面失败会留下部分结果，违反整份成功才替换的契约。",tag:"c-project-input-m1"},{claim:"正常 EOF 与 I/O 错误都当成成功。",correction:"检查读取状态与 ferror，错误必须拒绝本次加载。",tag:"c-project-input-m2"}],jr={question:"什么时候替换旧目标表？",choices:["第一条合法记录后","全部读取、解析、关闭成功后","打开文件后立即"],correctIndex:1,feedback:["后续仍可能失败。","正确，所有检查通过才提交结果。","打开成功不能代表数据有效。"]},Cr={mode:"c-compare",prediction:'先遮住输出：检查字符形式，"-1" 不符合无符号十进制分数协议。 写下结果后，对比两个已编译的例子。',caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    const char *s = "-1";
    int valid = 1;
    for (size_t i = 0; s[i] != '\\0'; i++) {
        if (s[i] < '0' || s[i] > '9') { valid = 0; break; }
    }
    printf("%d\\n", valid);
    return 0;
}
`,stdin:"",stdout:`0
`,files:{},exitCode:0}},Ir=["c-project-records"],Tr=6,Lr=["c-project-input-m1","c-project-input-m2"],zr=["n1570"],Er={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Ar={id:pr,number:mr,chapterId:fr,title:hr,concept:gr,intuition:br,objectives:xr,body:vr,formalDefinition:$r,derivation:kr,workedExamples:_r,practice:wr,commonMistakes:yr,learningCheck:jr,interactiveVisual:Cr,prerequisites:Ir,difficulty:Tr,misconceptionTags:Lr,sources:zr,provenance:Er},Nr="c-project-plan",Sr="8.1",qr="c-ch8",Ur="综合项目一：规格、数据与验收",Gr="把学过的语法组织成一个可交付程序，要先固定输入格式、输出内容和失败行为。",Mr="本项目像一个小型成绩柜：先检查所有卡片都合法，再统一计算报告；任意一张坏卡都不能悄悄消失。",Rr=["交付目标","数据与容量","边界写进需求"],Br=[{title:"交付目标",text:"完成命令行 gradebook：接收一个文本文件路径，输出人数、总分、平均分、及格人数，以及按分数降序排列的姓名与成绩。不联网、不登录、不使用数据库。输入每行一个记录，示例为 Lin 88；姓名限 1..20 个 ASCII 英文字母，区分大小写，成绩为 0..100 的十进制数字。两字段之间一个普通空格，不允许额外空格、正负号或尾部文字。"},{title:"数据与容量",text:"Student 保存 name[21] 和 score；Gradebook 拥有动态 Student 数组，长度与容量分开，最多 100 人，姓名不能重复。总分最多 10000，可由 C 标准保证的 int 范围容纳。平均分用 double 显示两位；空文件接受为空表，平均值显示 n/a，而不是除以零。排序按分数降序，同分按 strcmp 的名字字典序；这是执行字符集下的顺序，不宣称某种人类语言排序。"},{title:"边界写进需求",text:"接受 LF、CRLF，以及没有最后换行的非空最后一行；拒绝空行、内嵌零字节、过长行、重复姓名和第 101 条。错误信息写 stderr，状态非零，不输出半份报告。正常输出只写 stdout，可重定向保存。输入路径由用户指定；项目不执行 shell，不猜测文件类型。学习者先照附录把文件放在同一目录，然后按 README 的构建命令运行。"}],Dr={text:"验收是能逐条执行的输入与结果约定。本项目把格式、范围、容量、排序和失败时的状态都作为接口的一部分。",conditions:["输入文件为无编码歧义的 ASCII 记录文本，姓名仅英文字母。","最多 100 条且姓名唯一。","项目处理单次本地报告，不实现多用户或并发保存。"]},Or=[{text:"先用三行样例手算报告。"},{text:"列出每条拒绝规则的反例。"},{text:"把数据结构与模块职责写好，再实现最小贯通路径。"}],Vr=[{title:"独立手算报告",problem:"Lin 88、Bo 59、Ada 100 的人数、总分与及格人数？",steps:["人数为 3。","总分 88+59+100=247。",">=60 的两人及格，平均显示 82.33。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int total = 88 + 59 + 100;
    printf("count=3 total=%d mean=%.2f pass=2\\n", total, total / 3.0);
    return 0;
}
`,stdin:"",stdout:`count=3 total=247 mean=82.33 pass=2
`,files:{},exitCode:0}},{title:"空表行为",problem:"零条记录的平均值应该如何表示？",steps:["人数为零。","不执行除法。","显示 n/a。"],answer:{code:`#include <stdio.h>

int main(void)
{
    size_t count = 0;
    if (count == 0) { puts("mean=n/a"); } else { printf("mean=%.2f\\n", 0.0 / count); }
    return 0;
}
`,stdin:"",stdout:`mean=n/a
`,files:{},exitCode:0}}],Fr=[{problem:"姓名允许空格时，当前“姓名 空格 成绩”格式有什么问题？",hint:"分隔符与内容会混淆。",solution:["字段边界不再唯一。","需设计引号、转义或不同协议。","首版限制姓名为英文字母，保持规则简单。"],answer:"当前首版不接受带空格姓名；若扩展，要同时更新解析器、文档与测试。",difficulty:3,misconceptionTags:[]},{problem:"100 人每人 100 分，总分能放进标准保证的 int 吗？",hint:"int 至少能表示到 32767。",solution:["总分最大 10000。","10000 小于 32767。","固定上限使本项目累计安全。"],answer:"能；项目上限保证总分至多 10000。",difficulty:2,misconceptionTags:[]},{problem:"60 分算及格，输入两人 59 和 60 的及格人数？",hint:"阈值含 60。",solution:["59 不及格。","60 及格。","人数为 1。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int scores[] = {59, 60};
    int passed = 0;
    for (size_t i = 0; i < 2; i++) { if (scores[i] >= 60) { passed++; } }
    printf("%d\\n", passed);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"读取第 3 行失败，能输出前两行的正式报告吗？",hint:"本项目承诺整份输入有效才报告。",solution:["前两行不代表完整文件。","失败要丢弃本次临时结果。","stderr 报错，stdout 为空。"],answer:"不能；拒绝整份输入，避免半份报告被误认成完整统计。",difficulty:3,misconceptionTags:[]}],Wr=[{claim:"先写功能，边界以后随意补。",correction:"边界影响解析和所有权设计，先固定再编码。",tag:"c-project-plan-m1"},{claim:"空表平均值就写 0。",correction:"零是有效数值，不能冒充不存在的平均值。",tag:"c-project-plan-m2"}],Kr={question:"成绩文件第 5 行非法时，本项目应？",choices:["忽略第 5 行继续","整份拒绝且不输出报告","用 0 替换"],correctIndex:1,feedback:["静默丢行破坏数据完整性。","正确，失败行为属于规格。","不能替用户猜测数据。"]},Pr={mode:"c-compare",prediction:"先遮住输出：Lin 88、Bo 59、Ada 100 的人数、总分与及格人数？ 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int total = 88 + 59 + 100;
    printf("count=3 total=%d mean=%.2f pass=2\\n", total, total / 3.0);
    return 0;
}
`,stdin:"",stdout:`count=3 total=247 mean=82.33 pass=2
`,files:{},exitCode:0}},Hr=["c-testing"],Xr=5,Yr=["c-project-plan-m1","c-project-plan-m2"],Zr=["n1570"],Qr={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Jr={id:Nr,number:Sr,chapterId:qr,title:Ur,concept:Gr,intuition:Mr,objectives:Rr,body:Br,formalDefinition:Dr,derivation:Or,workedExamples:Vr,practice:Fr,commonMistakes:Wr,learningCheck:Kr,interactiveVisual:Pr,prerequisites:Hr,difficulty:Xr,misconceptionTags:Yr,sources:Zr,provenance:Qr},na="c-project-records",ta="8.2",ea="c-ch8",ia="综合项目二：记录表、所有权与排序",sa="数据模块把插入、查重、排序和销毁集中起来，让外层不用直接操作容量细节。",oa="只让一个管理员负责柜子的扩建和归还，其他函数借用记录读取；这样不会出现两个人都以为自己该释放同一块内存。",ca=["公开接口","失败保持有效状态","排序与计算分离"],ra=[{title:"公开接口",text:"records.h 声明 Student、Gradebook 与 GbStatus，以及 gb_init、gb_add、gb_sort、gb_total、gb_passed、gb_destroy。gb_init 建立空表，gb_destroy 释放后恢复空表。除初始化外，所有操作要求表处于有效状态；拥有者不允许随意按值复制。gb_add 先验证姓名与分数，再查重、检查上限、增长容量，最后追加。"},{title:"失败保持有效状态",text:"无效、重复或已满时，返回明确状态且不插入。realloc 失败仍保留旧块；长度和已有记录不变。容量增长使用 4、8、16、32、64、100，边界限制让乘法与翻倍容易分析。成功后临时借用的元素指针必须重新取得，因为扩容可能移动分配块。"},{title:"排序与计算分离",text:"gb_sort 对整条 Student 记录做插入排序。比较器先看分数高低，同分再 strcmp；交换或移动整条记录，名字不会与成绩分离。gb_total 与 gb_passed 只读已用区域。平均分由展示层在非空时计算，数据模块不直接 printf，测试无需模拟终端。"}],aa={text:"模块契约限制合法状态与所有权：Gradebook 是分配块唯一拥有者，借用指针只在约定操作之间有效。",conditions:["表先初始化，最终销毁。","名字与分数通过验证后才存入。","插入、加载、排序等操作后不保留未经保证的借用元素地址。"]},da=[{text:"定义状态不变量与返回状态。"},{text:"先实现单记录追加，再覆盖查重和容量失败。"},{text:"按完整记录排序，用独立预期检查姓名成绩配对。"}],la=[{title:"同分按名字排",problem:"同分 Ada、Bo 应由 strcmp 结果决定次序。",steps:["两个成绩相同。","比较 ASCII 名称在本机执行字符集下的顺序。","本项目样例 Ada 在 Bo 前。"],answer:{code:`#include <stdio.h>
#include <string.h>

int main(void)
{
    printf("%d\\n", strcmp("Ada", "Bo") < 0);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0}},{title:"记录一起移动",problem:"交换两条记录，姓名和成绩是否仍对应？",steps:["先复制完整记录到 temp。","交换完整结构体。","Bo 仍对应 59，Lin 仍对应 88。"],answer:{code:`#include <stdio.h>

typedef struct { char name[21]; int score; } Student;

int main(void)
{
    Student a = {"Lin", 88}, b = {"Bo", 59};
    Student temp = a; a = b; b = temp;
    printf("%s %d\\n%s %d\\n", a.name, a.score, b.name, b.score);
    return 0;
}
`,stdin:"",stdout:`Bo 59
Lin 88
`,files:{},exitCode:0}}],ua=[{problem:"为什么不把 Gradebook b=a 当作独立副本？",hint:"结构体里的 data 是拥有资源的指针。",solution:["赋值复制同一个地址。","两表会共享分配且都像拥有者。","需显式深复制或转移后清空源表。"],answer:"按值复制不创建独立数据；重复销毁会重复释放。",difficulty:3,misconceptionTags:[]},{problem:"gb_add 返回 GB_DUPLICATE 后 size 应增加吗？",hint:"重复姓名被拒绝。",solution:["先查重。","失败不写数据。","长度保持原值。"],answer:"不应增加，已有记录也保持不变。",difficulty:2,misconceptionTags:[]},{problem:"排序只交换 score，不交换 name，会怎样？",hint:"记录字段有业务对应。",solution:["成绩转移到另一个名字下。","配对被破坏。","必须移动完整 Student。"],answer:"产生错误成绩归属，即使分数列有序也不正确。",difficulty:3,misconceptionTags:[]},{problem:"capacity=64、size=64，再插入时新容量为什么选 100 而不是 128？",hint:"业务上限为 100。",solution:["翻倍候选 128。","超过业务上限。","截到 100，之后不再增长。"],answer:"为上限 100 截断增长；第 101 条应拒绝，不继续申请。",difficulty:3,misconceptionTags:[]}],pa=[{claim:"只检查 size<=capacity 就保证表完全有效。",correction:"还须确认指针所有权、已用区初始化、记录合法和姓名唯一。",tag:"c-project-records-m1"},{claim:"返回失败后随意清空旧表更省事。",correction:"接口承诺失败保留旧状态，不能擅自破坏调用者数据。",tag:"c-project-records-m2"}],ma={question:"哪种操作会破坏姓名与成绩配对？",choices:["移动完整 Student","只排序成绩字段","只读统计总分"],correctIndex:1,feedback:["完整记录保持配对。","正确，独立移动字段会错配。","只读不改变配对。"]},fa={mode:"c-compare",prediction:"先遮住输出：同分 Ada、Bo 应由 strcmp 结果决定次序。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
#include <string.h>

int main(void)
{
    printf("%d\\n", strcmp("Ada", "Bo") < 0);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0}},ha=["c-project-plan"],ga=5,ba=["c-project-records-m1","c-project-records-m2"],xa=["n1570"],va={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},$a={id:na,number:ta,chapterId:ea,title:ia,concept:sa,intuition:oa,objectives:ca,body:ra,formalDefinition:aa,derivation:da,workedExamples:la,practice:ua,commonMistakes:pa,learningCheck:ma,interactiveVisual:fa,prerequisites:ha,difficulty:ga,misconceptionTags:ba,sources:xa,provenance:va},ka="c-recursion",_a="7.2",wa="c-ch7",ya="递归与调用栈的边界",ja="递归让函数用更小的同类问题求解当前问题；每次调用都必须走向明确的终点。",Ca="把任务交给处理更小任务的自己，直到最小任务直接回答。每次交接都保留一张等待返回的便条，太深就会耗尽存储。",Ia=["基例与缩小","每层有自己的局部对象","优先选可解释方案"],Ta=[{title:"基例与缩小",text:"阶乘可写为 n 为 0 时返回 1，否则 n*factorial(n-1)。基例阻止继续调用，递归步骤严格缩小非负 n。输入负数不会自然走到零，所以必须在入口限制。unsigned long long 也有上限，本节仅允许 0 到 10，结果 3628800 在其标准保证范围内。"},{title:"每层有自己的局部对象",text:"factorial(3) 等待 factorial(2)，后者等待 factorial(1)，再到 factorial(0)。返回顺序与调用深入顺序相反。每层参数是独立副本。不能把局部地址返回给上层继续使用；生命周期规则没有因为递归而改变。"},{title:"优先选可解释方案",text:"简单求和与阶乘可用循环，避免深层调用。递归适合本身有树形或分治结构的问题，但需要分析深度和重复计算。C 不保证尾调用优化，也没有固定可移植的最大递归层数。不要拿无限递归测试机器“最大安全深度”当作可靠程序设计。"}],La={text:"递归函数直接或间接调用自身；正确终止依赖基例，以及每次调用使一个有下界的度量严格减小。",conditions:["本节阶乘仅接收 0..10。","整数结果与中间乘积可表示。","调用深度受控，不依赖尾调用优化。"]},za=[{text:"先给最小输入写直接答案。"},{text:"证明每次递归参数向基例靠近。"},{text:"从最深基例向外回填结果，检查每层乘积与深度。"}],Ea=[{title:"三的阶乘",problem:"计算 3! 并追踪返回过程。",steps:["fact(0) 返回 1。","fact(1)=1，fact(2)=2。","fact(3)=6。"],answer:{code:`#include <stdio.h>

unsigned long long fact(unsigned n)
{
    if (n == 0) { return 1; }
    return n * fact(n - 1);
}

int main(void)
{
    printf("%llu\\n", fact(3));
    return 0;
}
`,stdin:"",stdout:`6
`,files:{},exitCode:0}},{title:"递归求小范围总和",problem:"sum_to(4) 通过 sum_to(3) 求解。",steps:["零时返回 0。","每层返回 n 加更小问题。","从 1 回填到 4 得 10。"],answer:{code:`#include <stdio.h>

int sum_to(int n)
{
    if (n == 0) { return 0; }
    return n + sum_to(n - 1);
}

int main(void)
{
    printf("%d\\n", sum_to(4));
    return 0;
}
`,stdin:"",stdout:`10
`,files:{},exitCode:0}}],Aa=[{problem:"fact(0) 为什么返回 1 而不是 0？",hint:"乘法递推需要乘法单位元。",solution:["0! 定义为 1。","这样 1!=1*0!=1。","若返回零，所有后续乘积都成零。"],answer:"返回 1，才能与阶乘定义及递推一致。",difficulty:2,misconceptionTags:[]},{problem:"sum_to 对负数输入为什么不安全？",hint:"每次减一是否靠近零？",solution:["-1 继续变 -2。","不会到零基例。","入口拒绝负值，限制范围。"],answer:"递归远离基例，并最终超出深度或算术范围。",difficulty:3,misconceptionTags:[]},{problem:"用循环算 5!，作为递归的独立复算。",hint:"乘积从 1 开始。",solution:["依次乘 1 到 5。","中间值都在范围内。","结果 120。"],answer:{code:`#include <stdio.h>

int main(void)
{
    unsigned long long result = 1;
    for (unsigned i = 1; i <= 5; i++) { result *= i; }
    printf("%llu\\n", result);
    return 0;
}
`,stdin:"",stdout:`120
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"写了尾递归就保证不会消耗调用栈吗？",hint:"语言保证与编译优化不同。",solution:["编译器可能优化。","C17 不保证必须优化。","仍要限制深度或改成循环。"],answer:"不保证；不能把可选优化当正确性条件。",difficulty:3,misconceptionTags:[]}],Na=[{claim:"有一个 if 就说明递归会结束。",correction:"必须证明参数进入基例；输入域也属于证明条件。",tag:"c-recursion-m1"},{claim:"递归天然比循环更高级、更快。",correction:"选择取决于结构、深度与重复计算，简单累计常用循环更清楚。",tag:"c-recursion-m2"}],Sa={question:"递归正确终止需要？",choices:["基例和向基例靠近的步骤","只要调用自己","只要返回值不是 void"],correctIndex:0,feedback:["正确，输入也必须在约定范围内。","自调用本身没有终止保证。","返回类型不决定终止。"]},qa={mode:"c-compare",prediction:"先遮住输出：计算 3! 并追踪返回过程。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

unsigned long long fact(unsigned n)
{
    if (n == 0) { return 1; }
    return n * fact(n - 1);
}

int main(void)
{
    printf("%llu\\n", fact(3));
    return 0;
}
`,stdin:"",stdout:`6
`,files:{},exitCode:0}},Ua=["c-modules"],Ga=5,Ma=["c-recursion-m1","c-recursion-m2"],Ra=["n1570"],Ba={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Da={id:ka,number:_a,chapterId:wa,title:ya,concept:ja,intuition:Ca,objectives:Ia,body:Ta,formalDefinition:La,derivation:za,workedExamples:Ea,practice:Aa,commonMistakes:Na,learningCheck:Sa,interactiveVisual:qa,prerequisites:Ua,difficulty:Ga,misconceptionTags:Ma,sources:Ra,provenance:Ba},Oa="c-scope",Va="3.3",Fa="c-ch3",Wa="作用域、生命周期与程序状态",Ka="分清名字在哪里可见、对象存在多久，才能避免函数之间互相干扰。",Pa="作用域像地图上能看到标签的区域，生命周期像储物柜实际租用的时间。看不见标签，不等于柜子一定销毁；看得见指针，也不等于它指向的对象仍存在。",Ha=["块作用域","自动与静态存储期","全局状态谨慎使用"],Xa=[{title:"块作用域",text:"花括号建立块。块内声明的普通局部变量，通常只有从声明处到块末尾可用。内层可声明同名变量遮蔽外层，但容易读错，本书尽量用不同名字。for 初始化中声明的 i 通常只在该 for 的范围内可见。"},{title:"自动与静态存储期",text:"普通局部对象每次进入对应块时有新的实例，离开块时生命周期结束。static 局部对象则在整个程序运行期间存在，只初始化一次，名字仍局限于函数内部。它能保留状态，但隐藏状态会使测试互相影响。初学主线优先显式通过参数与返回值传状态。"},{title:"全局状态谨慎使用",text:"文件作用域的对象可在函数外声明。过多全局可变状态让你难以判断哪个函数改变数据，也难以重复测试。用 const 表达固定配置，用函数参数表达输入，用返回值或明确的输出参数表达结果。生命周期错误在指针章会再次出现，此时先记住“离开块后，普通局部对象不存在了”。"}],Ya={text:"作用域决定标识符的可见范围；存储期与生命周期决定对象存在的时段。它们不是同一个概念。",conditions:["不读取已结束生命周期的对象。","static 局部状态跨调用保留，不能当作每次重置。","演示静态变量仅说明机制，不鼓励隐藏业务状态。"]},Za=[{text:"先圈出每个声明所在的块。"},{text:"逐次调用时区分新建的局部对象和保留的静态对象。"},{text:"检查函数输出是否依赖之前的调用，决定是否应改成显式状态。"}],Qa=[{title:"局部副本",problem:"函数每次创建 n=0，再加一，两次调用结果如何？",steps:["每次进入都初始化为零。","各自加一得 1。","两次结果都是 1。"],answer:{code:`#include <stdio.h>

int next_local(void)
{
    int n = 0;
    n++;
    return n;
}

int main(void)
{
    printf("%d\\n", next_local());
    printf("%d\\n", next_local());
    return 0;
}
`,stdin:"",stdout:`1
1
`,files:{},exitCode:0}},{title:"保留状态",problem:"使用 static int n=0，每次加一，调用两次。",steps:["static 只初始化一次。","第一次得到 1。","第二次从 1 开始得到 2。"],answer:{code:`#include <stdio.h>

int next_static(void)
{
    static int n = 0;
    n++;
    return n;
}

int main(void)
{
    printf("%d\\n", next_static());
    printf("%d\\n", next_static());
    return 0;
}
`,stdin:"",stdout:`1
2
`,files:{},exitCode:0}}],Ja=[{problem:"内层块声明 x=9，外层 x=2，块结束后外层是什么？",hint:"遮蔽不会合并对象。",solution:["内层输出 9。","块结束销毁内层 x。","外层 x 保持 2。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int x = 2;
    {
        int x = 9;
        printf("%d\\n", x);
    }
    printf("%d\\n", x);
    return 0;
}
`,stdin:"",stdout:`9
2
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"计数函数使用 static 状态，为什么每个测试不一定都从 0 开始？",hint:"状态可能来自前一次调用。",solution:["静态对象存在整个程序。","调用之间没有自动重新初始化。","改为显式 state 参数或设计重置接口。"],answer:"测试共享了保留状态，应明确隔离或重置。",difficulty:3,misconceptionTags:[]},{problem:"for(int i=0;i<2;i++) 后能直接读取 i 吗？",hint:"声明写在 for 初始化内。",solution:["i 属于该 for 的作用域。","循环之后名字不可见。","需要保留时在外层先声明，并明确结束值。"],answer:"不能直接引用该 i；这是作用域问题。",difficulty:2,misconceptionTags:[]},{problem:"怎样写函数，让调用次数不会影响返回值？",hint:"让结果只依赖传入值。",solution:["使用参数接收输入。","不要访问可变全局或 static 状态。","例如 twice(4) 每次返回 8。"],answer:{code:`#include <stdio.h>

int twice(int n)
{
    return n * 2;
}

int main(void)
{
    printf("%d %d\\n", twice(4), twice(4));
    return 0;
}
`,stdin:"",stdout:`8 8
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],nd=[{claim:"static 让名字在所有文件可见。",correction:"本节 static 局部对象名字仍在块内；文件作用域 static 还会限制链接可见性。",tag:"c-scope-m1"},{claim:"生命周期和作用域是一回事。",correction:"一个描述对象何时存在，另一个描述名字哪里可见。",tag:"c-scope-m2"}],td={question:"static 局部变量每次调用都会重新初始化吗？",choices:["会","不会，只初始化一次","只在偶数次调用初始化"],correctIndex:1,feedback:["普通自动局部变量通常每次建立新实例。","正确，后续调用保留之前状态。","没有这种规则。"]},ed={mode:"c-compare",prediction:"先遮住输出：函数每次创建 n=0，再加一，两次调用结果如何？ 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int next_local(void)
{
    int n = 0;
    n++;
    return n;
}

int main(void)
{
    printf("%d\\n", next_local());
    printf("%d\\n", next_local());
    return 0;
}
`,stdin:"",stdout:`1
1
`,files:{},exitCode:0}},id=["c-functions"],sd=2,od=["c-scope-m1","c-scope-m2"],cd=["n1570"],rd={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},ad={id:Oa,number:Va,chapterId:Fa,title:Wa,concept:Ka,intuition:Pa,objectives:Ha,body:Xa,formalDefinition:Ya,derivation:Za,workedExamples:Qa,practice:Ja,commonMistakes:nd,learningCheck:td,interactiveVisual:ed,prerequisites:id,difficulty:sd,misconceptionTags:od,sources:cd,provenance:rd},dd="c-start",ld="1.1",ud="c-ch1",pd="从文件到可运行的程序",md="C 程序让计算机按明确的步骤处理数据；第一件事是走通“编辑、编译、运行”的完整流程。",fd="源文件像写好的菜谱，可执行文件像能够按菜谱工作的机器。修改菜谱不会自动改好机器；保存后还必须重新编译。编辑器负责写字，编译器负责翻译，终端负责接收命令，它们各有工作。",hd=["准备练习目录","安装一个 C 编译器","保存真正的文本文件","第一次编译和运行"],gd=[{title:"准备练习目录",text:"本书不要求你会终端。终端是输入命令并看到文字结果的窗口。先在用户目录创建 c-study 文件夹，避免目录名中的空格干扰首次练习。打开终端，输入 mkdir c-study 回车，再输入 cd c-study 回车。mkdir 创建目录；cd 改变当前目录。若目录已存在，只执行 cd。用 pwd 查看位置，用 ls 查看文件；Windows 本书统一使用 MSYS2 UCRT64 终端，那里也支持这些命令。"},{title:"安装一个 C 编译器",text:"Windows 64 位 x86 电脑：从 MSYS2 官网安装，打开名为 UCRT64 的终端，运行 pacman -Syu；若提示关闭终端，照提示关闭后重开 UCRT64，再更新，随后运行 pacman -S --needed mingw-w64-ucrt-x86_64-gcc。ARM64 电脑请按官网对应环境安装，不照抄 x86 包名。macOS：打开“终端”，输入 xcode-select --install 并完成系统安装窗口。Ubuntu/Debian：在终端运行 sudo apt update，再运行 sudo apt install build-essential。安装需要网络；日常练习不需要网络。"},{title:"保存真正的文本文件",text:"用能保存纯文本的编辑器新建 hello.c，保存到 c-study。不要用富文本格式；确认文件不是 hello.c.txt，Windows 文件管理器可启用“文件扩展名”。输入下方完整程序，保留英文半角引号、括号和分号。保存后回到同一目录。Windows/Linux 输入 gcc --version；macOS 输入 clang --version；能看到版本才继续。"},{title:"第一次编译和运行",text:"Windows/Linux 输入 gcc -std=c17 -Wall -Wextra -Wpedantic hello.c -o hello；macOS 把 gcc 换成 clang。-std=c17 固定本书语言版本，三个 -W 参数请求常用警告，-o 指定输出名字。编译成功通常没有文字。macOS/Linux 输入 ./hello；MSYS2 UCRT64 输入 ./hello.exe。./ 表示当前目录，命令不包含教材中的提示符。看见 Hello, C! 后，把文本改成 I can code.，保存、重新编译、重新运行。"}],bd={text:"本书使用 C17 的常用可移植子集，以 .c 为源文件扩展名，以 int main(void) 为本节程序入口。C17 是本书选择的学习基线，不声称它是最新标准。",conditions:["先安装 GCC 或 Clang；编辑器扩展不能代替编译器。","命令中的 hello.c 必须在当前目录，或写明正确路径。","代码用 ASCII 输出，中文解释用 UTF-8，避免首次运行被终端编码问题打断。"]},xd=[{text:"保存 hello.c，确认当前位置与文件名。"},{text:"执行编译命令；有诊断时从第一条开始修正，成功后再运行。"},{text:"运行新生成的可执行文件，并对照输出；更改源文件后重复前两步。"}],vd=[{title:"第一次输出",problem:"创建 hello.c，输出一行 Hello, C!。",steps:["stdio.h 声明 puts。","main 内的 puts 发送文字并换行。","return 0 报告正常结束。"],answer:{code:`#include <stdio.h>

int main(void)
{
    puts("Hello, C!");
    return 0;
}
`,stdin:"",stdout:`Hello, C!
`,files:{},exitCode:0}},{title:"修改后再编译",problem:"把输出改为 I can code.，验证你运行的是新版。",steps:["只改字符串里的文字。","先保存，再执行同一编译命令。","最后运行，输出应与旧版不同。"],answer:{code:`#include <stdio.h>

int main(void)
{
    puts("I can code.");
    return 0;
}
`,stdin:"",stdout:`I can code.
`,files:{},exitCode:0}}],$d=[{problem:"编译器说 hello.c: No such file or directory。先检查什么？",hint:"区分“找不到文件”和“代码写错”。",solution:["用 pwd 确认目录。","用 ls 看是否有 hello.c，检查隐藏的 .txt 后缀。","进入正确目录或给出路径，再编译。"],answer:"先核对当前目录、文件名和实际扩展名；此时还没进入语法检查。",difficulty:1,misconceptionTags:[]},{problem:"写程序输出自己的学习目标 Learn one step.。",hint:"沿用第一个完整程序，只改文字。",solution:["保留头文件与 main。","把 puts 的参数改成目标文本。","保存、编译、运行，对照大小写和句点。"],answer:{code:`#include <stdio.h>

int main(void)
{
    puts("Learn one step.");
    return 0;
}
`,stdin:"",stdout:`Learn one step.
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"修改 hello.c 后直接运行，为什么仍看见旧文字？",hint:"区分源文件与可执行文件。",solution:["编辑只更新源文件。","运行命令启动上次编译的文件。","保存并成功重编译后，再运行新文件。"],answer:"没有重新编译，或编译失败后仍运行了旧文件。",difficulty:1,misconceptionTags:[]},{problem:"如何把可执行文件命名为 lesson1？",hint:"观察 -o 后面的参数。",solution:["保留输入 hello.c。","把 -o hello 改成 -o lesson1。","运行 ./lesson1；MSYS2 运行 ./lesson1.exe。"],answer:"gcc -std=c17 -Wall -Wextra -Wpedantic hello.c -o lesson1；macOS 可用 clang。",difficulty:1,misconceptionTags:[]}],kd=[{claim:"点编辑器里的运行按钮就一定用了 C17。",correction:"按钮可能使用另一套配置。第一次先用书中命令，明确编译器、源文件与参数。",tag:"c-start-m1"},{claim:"编译没输出，说明卡住了。",correction:"命令行已出现新的提示符且没有报错时，编译通常已完成；接着执行运行命令。",tag:"c-start-m2"}],_d={question:"修改 .c 后怎样让变化生效？",choices:["保存、成功编译、运行","只保存","只运行旧文件"],correctIndex:0,feedback:["正确，这三个动作对应三个不同阶段。","保存没有产生新的可执行文件。","旧文件仍包含旧的机器指令。"]},wd={mode:"c-compare",prediction:"先遮住输出：创建 hello.c，输出一行 Hello, C!。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    puts("Hello, C!");
    return 0;
}
`,stdin:"",stdout:`Hello, C!
`,files:{},exitCode:0}},yd=[],jd=1,Cd=["c-start-m1","c-start-m2"],Id=["gcc","apple","msys2"],Td={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Ld=[{title:"Windows x86-64：安装编译器",text:"先从 https://www.msys2.org/ 安装 MSYS2。打开 UCRT64 终端。先执行更新；如果要求关闭，关闭后重开 UCRT64 并再次更新，再安装编译器。ARM64 使用官网对应环境，不照抄本包名。",commands:`pacman -Syu
pacman -S --needed mingw-w64-ucrt-x86_64-gcc
gcc --version`,expected:"最后一条显示 GCC 版本；出现 command not found 时先确认打开的是 UCRT64 并已安装成功。"},{title:"macOS：安装命令行工具",text:"打开“终端”，运行安装命令，完成系统窗口后再查看版本。如果已安装 Xcode 或命令行工具，系统可能提示已存在。",commands:`xcode-select --install
clang --version`,expected:"第二条显示 Apple Clang 版本。安装窗口完成前不要急着编译。"},{title:"Ubuntu / Debian：安装工具",text:"打开终端，按顺序执行。sudo 会请求当前用户密码；输入时可能不显示字符，完成后按回车。",commands:`sudo apt update
sudo apt install build-essential
gcc --version`,expected:"最后显示 GCC 版本。其他 Linux 发行版使用各自官方包管理器，不照抄 apt 命令。"},{title:"建立目录并保存 hello.c",text:"只做一次。如果目录已存在，跳过 mkdir。执行后用编辑器把例 1 的完整 C 代码保存到这个目录的 hello.c；不是把 C 代码当终端命令输入。",commands:`mkdir c-study
cd c-study
pwd
ls`,expected:"pwd 末尾是 c-study；保存后 ls 能列出 hello.c。macOS 编辑器使用纯文本模式，Windows 检查不是 hello.c.txt。"},{title:"Windows UCRT64：编译并运行",text:"在 hello.c 所在目录先编译。若有诊断，先修正并重新编译；成功后再运行第二条。",commands:`gcc -std=c17 -Wall -Wextra -Wpedantic hello.c -o hello
./hello.exe`,expected:"输出 Hello, C!。编译成功通常无输出，运行时才产生输出。"},{title:"Linux：编译并运行",text:"在 hello.c 所在目录执行这两条。每条输入后按回车，先完成编译再运行。",commands:`gcc -std=c17 -Wall -Wextra -Wpedantic hello.c -o hello
./hello`,expected:"输出 Hello, C!。改代码后先保存，再重新编译、运行。"},{title:"macOS：编译并运行",text:"在 hello.c 所在目录执行。这是上一项的 macOS 替代命令，不需要再运行 gcc 那组。",commands:`clang -std=c17 -Wall -Wextra -Wpedantic hello.c -o hello
./hello`,expected:"输出 Hello, C!。改动源文件后先保存，再重复编译与运行。"}],zd={id:dd,number:ld,chapterId:ud,title:pd,concept:md,intuition:fd,objectives:hd,body:gd,formalDefinition:bd,derivation:xd,workedExamples:vd,practice:$d,commonMistakes:kd,learningCheck:_d,interactiveVisual:wd,prerequisites:yd,difficulty:jd,misconceptionTags:Cd,sources:Id,provenance:Td,setup:Ld},Ed="c-strings",Ad="4.3",Nd="c-ch4",Sd="字符数组与字符串",qd="C 字符串在字符数组中用零字符标明结束；容量和可见长度必须分别计算。",Ud="一串字符后面有一张“到此为止”的小卡片 \\0。数组容量包含卡片占的位置，屏幕不会把这张卡片当作可见文字。",Gd=["三个容易混的符号","长度和容量","比较与复制"],Md=[{title:"三个容易混的符号",text:`'A' 是字符常量，"A" 是含 A 与终止零的字符串字面量，'\\0' 是值为零的字符。char name[] = "Lin" 推导出四个 char 的数组：L、i、n、终止零。字符 '0' 则是数字符号的编码，不是终止零。字符串字面量本身不可修改，需要改文字时用可写字符数组。`},{title:"长度和容量",text:"strlen 来自 string.h，计算终止零之前的字符数量，不计终止零。sizeof 数组得到整个容量。strlen 要求存在可访问的终止零；对未终止数组调用可能越界。中文 UTF-8 通常一个汉字占多个字节，strlen 不等于人眼看到的字数；本书字符串算法只处理 ASCII，避免把字节反转误教成中文反转。"},{title:"比较与复制",text:"字符串内容比较用 strcmp，结果小于、等于、大于零分别表示字典序关系；不能假定结果一定是 -1 或 1。== 比较指针地址，不比较内容。复制前先确认目标容量足够包含终止零；不要把 strncpy 当成总会终止的“安全 strcpy”。本书优先在已知容量内逐项处理或用明确检查过长度的写入。"}],Rd={text:"C 字符串是以第一个零字符终止的字符序列；承载它的数组容量至少为内容字节数加一。",conditions:["strlen、strcmp 的输入必须是有效终止字符串。","不修改字符串字面量。","本节长度单位为 char，不声称能统计 Unicode 字符数。"]},Bd=[{text:"先写出包含终止零的实际数组。"},{text:"分别标出容量与内容长度。"},{text:"比较内容用库函数，修改前确认可写性与剩余容量。"}],Dd=[{title:"长度和容量",problem:'观察 char name[]="Lin" 的长度与容量。',steps:["三个可见字符。","还有一个终止零。","strlen 为 3，sizeof 为 4。"],answer:{code:`#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[] = "Lin";
    printf("%zu %zu\\n", strlen(name), sizeof name);
    return 0;
}
`,stdin:"",stdout:`3 4
`,files:{},exitCode:0}},{title:"可写数组",problem:"把 Cat 的首字母改为 B。",steps:["数组接收字面量的副本。","首项可写。","终止零保持原位，输出 Bat。"],answer:{code:`#include <stdio.h>

int main(void)
{
    char word[] = "Cat";
    word[0] = 'B';
    puts(word);
    return 0;
}
`,stdin:"",stdout:`Bat
`,files:{},exitCode:0}}],Od=[{problem:'char s[4]="abc" 还能直接追加一个 d 吗？',hint:"需要保留终止零的位置。",solution:["现有三字符加零已占四项。","追加 d 还需第五项终止零。","扩大容量后再修改。"],answer:'不能在原容量内形成 "abcd" 字符串；至少需要容量 5。',difficulty:2,misconceptionTags:[]},{problem:"比较两个独立数组里的 hi。",hint:"使用 strcmp==0。",solution:["两个数组地址不同不影响内容。","strcmp 比较直到终止零。","内容相等返回 0。"],answer:{code:`#include <stdio.h>
#include <string.h>

int main(void)
{
    char a[] = "hi", b[] = "hi";
    printf("%d\\n", strcmp(a, b) == 0);
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"统计 ASCII 字符串 banana 中 a 的个数。",hint:"逐字符遍历到终止零。",solution:["计数从零开始。","遇到 a 加一。","三个 a，终止零不参与。"],answer:{code:`#include <stdio.h>

int main(void)
{
    char s[] = "banana";
    int count = 0;
    for (size_t i = 0; s[i] != '\\0'; i++) {
        if (s[i] == 'a') { count++; }
    }
    printf("%d\\n", count);
    return 0;
}
`,stdin:"",stdout:`3
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:'strlen("你好") 是否保证为 2？',hint:"它统计的是 char 数量。",solution:["编码可能使用多个字节。","strlen 不理解 Unicode 字符边界。","本书只对 ASCII 作逐字符算法保证。"],answer:"不保证；编码和执行字符集影响结果，不把字节长度当作汉字个数。",difficulty:3,misconceptionTags:[]}],Vd=[{claim:"数组容量就是 strlen。",correction:"容量包含可用空间和终止零，strlen 只到第一个零。",tag:"c-strings-m1"},{claim:"== 能比较两段字符串内容。",correction:"它比较地址；比较文本使用 strcmp 并正确检查其符号或是否为零。",tag:"c-strings-m2"}],Fd={question:'存储 "hello" 至少需要几个 char？',choices:["5","6","由屏幕字体决定"],correctIndex:1,feedback:["还缺终止零的位置。","正确，五个字符加一个终止零。","字体不影响字符串存储需求。"]},Wd={mode:"c-compare",prediction:'先遮住输出：观察 char name[]="Lin" 的长度与容量。 写下结果后，对比两个已编译的例子。',caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[] = "Lin";
    printf("%zu %zu\\n", strlen(name), sizeof name);
    return 0;
}
`,stdin:"",stdout:`3 4
`,files:{},exitCode:0}},Kd=["c-algorithms"],Pd=3,Hd=["c-strings-m1","c-strings-m2"],Xd=["n1570"],Yd={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Zd={id:Ed,number:Ad,chapterId:Nd,title:Sd,concept:qd,intuition:Ud,objectives:Gd,body:Md,formalDefinition:Rd,derivation:Bd,workedExamples:Dd,practice:Od,commonMistakes:Vd,learningCheck:Fd,interactiveVisual:Wd,prerequisites:Kd,difficulty:Pd,misconceptionTags:Hd,sources:Xd,provenance:Yd},Qd="c-structs",Jd="6.1",nl="c-ch6",tl="结构体、typedef 与枚举",el="结构体把同一条记录的多个字段放在一起，避免姓名和成绩被排序拆散。",il="把一个人的资料装在同一张卡片上，再把卡片放进数组；移动卡片就会一起移动全部字段。",sl=["定义记录类型","typedef 只起别名","枚举表达有限状态"],ol=[{title:"定义记录类型",text:'struct Student { char name[21]; int score; }; 定义类型，末尾要分号。struct Student s = {"Lin", 88}; 创建对象。s.score 访问字段；若 p 指向记录，p->score 等价于 (*p).score。结构体赋值会复制各成员，内含数组成员也随记录一起复制。'},{title:"typedef 只起别名",text:"typedef struct { ... } Student; 给类型一个简短名字，不创建对象，也不分配内存。复制结构体中若包含指针，复制的是地址，不会深复制目标分配块。后面的动态记录表因此不能随意按值复制拥有者结构体。"},{title:"枚举表达有限状态",text:"enum Status { STATUS_OK, STATUS_INVALID, STATUS_FULL }; 用具名整数常量表达返回状态，比神秘数字更好读。C17 的 enum 不是自动验证输入的强类型，外部数字仍要检查。结构体可能有填充字节，不要用 sizeof 推断各字段简单相加，也不要直接把原始内存当跨平台文件格式。"}],cl={text:"结构体把不同类型成员组成一个记录类型；typedef 提供类型别名；enum 提供具名整数常量。",conditions:["字符串字段必须留出终止零。","结构体包含拥有内存的指针时，必须定义复制与销毁规则。","不按原始结构体内存建立可移植文件格式。"]},rl=[{text:"列出一条记录的字段与各自限制。"},{text:"定义类型并初始化一个对象。"},{text:"通过点或箭头访问成员，移动整条记录而非平行数组。"}],al=[{title:"一张成绩卡",problem:"创建姓名 Lin、成绩 88 的记录。",steps:["name 容量 21。","初始化时复制字符串含终止零。","按字段输出。"],answer:{code:`#include <stdio.h>

typedef struct {
    char name[21];
    int score;
} Student;

int main(void)
{
    Student s = {"Lin", 88};
    printf("%s %d\\n", s.name, s.score);
    return 0;
}
`,stdin:"",stdout:`Lin 88
`,files:{},exitCode:0}},{title:"结构体复制",problem:"复制记录后改副本成绩，原记录如何？",steps:["此结构没有指针字段。","赋值复制数组成员和整数成员。","改副本不改原记录。"],answer:{code:`#include <stdio.h>

typedef struct { char name[21]; int score; } Student;

int main(void)
{
    Student a = {"Lin", 88};
    Student b = a;
    b.score = 90;
    printf("%d %d\\n", a.score, b.score);
    return 0;
}
`,stdin:"",stdout:`88 90
`,files:{},exitCode:0}}],dl=[{problem:"通过 Student *p 修改 s.score 为 95。",hint:"箭头访问指向记录的字段。",solution:["p=&s。","p->score=95。","s.score 被修改。"],answer:{code:`#include <stdio.h>

typedef struct { char name[21]; int score; } Student;

int main(void)
{
    Student s = {"Bo", 70};
    Student *p = &s;
    p->score = 95;
    printf("%d\\n", s.score);
    return 0;
}
`,stdin:"",stdout:`95
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"typedef int Score; 是否创建了名为 Score 的变量？",hint:"别名与对象不同。",solution:["typedef 声明类型别名。","Score s=80 才创建对象。","别名本身不保存成绩。"],answer:"没有；Score 是 int 的类型别名。",difficulty:2,misconceptionTags:[]},{problem:"包含 int *data 的结构体按值复制，会产生独立数组吗？",hint:"复制地址不等于复制目标。",solution:["data 的地址值被复制。","两个对象仍指向同一块。","若都当拥有者释放，就会重复释放。"],answer:"不会；需显式深复制或禁止拥有者的随意复制。",difficulty:3,misconceptionTags:[]},{problem:"为什么不直接 fwrite 整个 Student 当通用存档？",hint:"想一想填充、整数表示与编码。",solution:["结构体可能含填充。","不同实现的布局和表示可能不同。","逐字段写明确文本格式更便于检查和移植。"],answer:"原始内存并非稳定的跨平台文件协议。",difficulty:3,misconceptionTags:[]}],ll=[{claim:"结构体里有数组，所以结构体不能赋值。",correction:"结构体赋值合法，其数组成员随结构体复制；数组本体不能直接 a=b 是另一条规则。",tag:"c-structs-m1"},{claim:"枚举会自动拒绝外部非法值。",correction:"枚举名字帮助表达意图，不代替输入验证。",tag:"c-structs-m2"}],ul={question:"p 是 Student*，访问成绩字段应写？",choices:["p.score","p->score","score(p)"],correctIndex:1,feedback:["p 自身是指针。","正确，箭头访问所指记录的成员。","没有定义这样的函数。"]},pl={mode:"c-compare",prediction:"先遮住输出：创建姓名 Lin、成绩 88 的记录。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

typedef struct {
    char name[21];
    int score;
} Student;

int main(void)
{
    Student s = {"Lin", 88};
    printf("%s %d\\n", s.name, s.score);
    return 0;
}
`,stdin:"",stdout:`Lin 88
`,files:{},exitCode:0}},ml=["c-memory"],fl=4,hl=["c-structs-m1","c-structs-m2"],gl=["n1570"],bl={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},xl={id:Qd,number:Jd,chapterId:nl,title:tl,concept:el,intuition:il,objectives:sl,body:ol,formalDefinition:cl,derivation:rl,workedExamples:al,practice:dl,commonMistakes:ll,learningCheck:ul,interactiveVisual:pl,prerequisites:ml,difficulty:fl,misconceptionTags:hl,sources:gl,provenance:bl},vl="c-switch",$l="2.3",kl="c-ch2",_l="switch：多选分支与菜单雏形",wl="switch 把同一个整数值的多种情况集中写在一起，适合固定编号的菜单。",yl="把输入编号看成柜台号码；case 是柜台标志，break 让本次办理结束。case 本身只是标签，不会自动停止后续执行。",jl=["从编号选择动作","理解落入后续分支","为意外输入留路径"],Cl=[{title:"从编号选择动作",text:"switch (choice) 先计算一个整数类型的控制值，匹配某个 case 的整数常量表达式；未匹配时选择 default。case 后是冒号，不是分号。case 值不能重复，不能用运行时变量当作任意标签。字符串和范围条件用 if 或其他结构处理。"},{title:"理解落入后续分支",text:"执行到 break 才退出当前 switch；如果省略，会继续向下执行，称为贯穿。多个 case 共用一段处理时可以有意相邻放置，但必须写注释解释。continue 针对循环，不是 switch 的“下一项”按钮。"},{title:"为意外输入留路径",text:"菜单编号不在已知集合时，default 提示 unknown option。分支内若声明临时局部变量，可用一对额外花括号建立块作用域，避免标签和声明带来的可读性问题。复杂处理以后抽成函数，switch 只负责选择，不把整个项目塞进一个大分支。"}],Il={text:"switch 按整型值跳转到匹配的 case 或 default 标签；break 退出最近包围的 switch 或循环。",conditions:["case 为合法且互不重复的整型常量表达式。","本书除明确合并标签外，每个菜单分支以 break 或 return 结束。","浮点范围、字符串内容比较不使用 switch。"]},Tl=[{text:"列出菜单编号及未知编号的行为。"},{text:"给每个编号放置 case、动作和明确的结束语句。"},{text:"逐个测试每个 case 与 default，检查是否意外贯穿。"}],Ll=[{title:"查看菜单",problem:"编号 2 表示 list，编号 1 表示 add。",steps:["choice 为 2。","跳到 case 2 输出 list。","break 退出，不执行 default。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int choice = 2;
    switch (choice) {
    case 1:
        puts("add");
        break;
    case 2:
        puts("list");
        break;
    default:
        puts("unknown");
        break;
    }
    return 0;
}
`,stdin:"",stdout:`list
`,files:{},exitCode:0}},{title:"合并两个编号",problem:"编号 1、2 都表示 weekday，其他表示 other。",steps:["case 1 后不放动作，紧接 case 2。","两个标签共享同一 puts。","共有处理后 break。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int day = 1;
    switch (day) {
    case 1:
    case 2:
        puts("weekday");
        break;
    default:
        puts("other");
        break;
    }
    return 0;
}
`,stdin:"",stdout:`weekday
`,files:{},exitCode:0}}],zl=[{problem:"写 1 输出 new，其他输出 invalid，测试 9。",hint:"保留 default。",solution:["9 没有匹配 case。","执行 default。","退出 switch。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int choice = 9;
    switch (choice) {
    case 1: puts("new"); break;
    default: puts("invalid"); break;
    }
    return 0;
}
`,stdin:"",stdout:`invalid
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"switch 能直接根据 double 温度区间分支么？",hint:"区间与精确整数标签不同。",solution:["switch 要求整型控制表达式。","温度区间是大小关系。","改用 if / else if，并明确边界。"],answer:"不能；使用 if (t < 0.0) 等范围判断。",difficulty:2,misconceptionTags:[]},{problem:"case 1 输出 A 后无 break，case 2 输出 B 后 break；输入 1 会怎样？",hint:"标签不会自动终止。",solution:["先到 case 1。","输出 A 后继续到下一段。","输出 B 后 break。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int choice = 1;
    switch (choice) {
    case 1: puts("A"); /* intentional fallthrough */
    case 2: puts("B"); break;
    default: break;
    }
    return 0;
}
`,stdin:"",stdout:`A
B
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"两个 case 都写 1 能编译通过吗？",hint:"每个标签必须能唯一匹配。",solution:["两个相同值产生重复标签。","这是约束违反，需要诊断。","合并处理或更正编号，不能依赖“选第一个”。"],answer:"不能作为有效程序；编译器应诊断重复 case 值。",difficulty:2,misconceptionTags:[]}],El=[{claim:"case 执行完自动跳出。",correction:"标签不结束执行，使用 break、return 或明确贯穿。",tag:"c-switch-m1"},{claim:"default 必须写在最前。",correction:"可以放在不同位置，本书统一放最后便于阅读；匹配规则不由位置决定。",tag:"c-switch-m2"}],Al={question:"break 在 switch 内的直接作用是？",choices:["退出整个程序","退出最近包围的 switch 或循环","跳到下一个 case"],correctIndex:1,feedback:["退出程序通常由 main 返回或调用相应函数完成。","正确；这里最近的结构是 switch。","break 离开结构，不选择下一项。"]},Nl={mode:"c-compare",prediction:"先遮住输出：编号 2 表示 list，编号 1 表示 add。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int choice = 2;
    switch (choice) {
    case 1:
        puts("add");
        break;
    case 2:
        puts("list");
        break;
    default:
        puts("unknown");
        break;
    }
    return 0;
}
`,stdin:"",stdout:`list
`,files:{},exitCode:0}},Sl=["c-input"],ql=2,Ul=["c-switch-m1","c-switch-m2"],Gl=["n1570"],Ml={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Rl={id:vl,number:$l,chapterId:kl,title:_l,concept:wl,intuition:yl,objectives:jl,body:Cl,formalDefinition:Il,derivation:Tl,workedExamples:Ll,practice:zl,commonMistakes:El,learningCheck:Al,interactiveVisual:Nl,prerequisites:Sl,difficulty:ql,misconceptionTags:Ul,sources:Gl,provenance:Ml},Bl="c-testing",Dl="7.4",Ol="c-ch7",Vl="边界测试与运行时检查工具",Fl="把契约变成测试矩阵，并结合编译器工具，可以更早发现越界、溢出和状态损坏。",Wl="一张检查表覆盖正常、边界与失败，比“随便输入几次没崩”更能说明你检查了什么。工具像报警器，没报警不代表所有问题都不存在。",Kl=["测试矩阵","动态检查的用法","失败路径需要专门证据"],Pl=[{title:"测试矩阵",text:"对分数解析列出 0、100、-1、101、空串、后缀、超长数字；对容器列出空表、一项、重复姓名、容量上限、再加一项；对文件列出不存在、空文件、CRLF、末行无换行、过长行。每项有明确预期，不把“能运行”当标准。项目章给出实际用例而不是仅列名词。"},{title:"动态检查的用法",text:"支持这些工具的 Clang/GCC 环境可在编译和链接时加 -g -O1 -fsanitize=address,undefined -fno-omit-frame-pointer。AddressSanitizer 可发现执行路径上的许多越界和释放后使用；UndefinedBehaviorSanitizer 可发现部分未定义行为。Windows 工具链支持可能不同，先用普通构建，按工具官方说明另跑。不要为了让书能用而要求初学者先配置全部工具。"},{title:"失败路径需要专门证据",text:"普通小数据几乎不会自然触发 malloc 失败，所以不能把跑完成功路径写成“内存失败都测过了”。可通过替代分配器进行故障注入，或明确记录尚未执行的路径。本书项目自动检查格式与容量失败、失败不改状态；实际系统分配失败和 I/O 设备故障不声称已穷尽模拟。"}],Hl={text:"测试用例由输入、环境条件、操作和可核对的预期组成；运行时检查只覆盖实际执行到的行为与工具支持的错误类别。",conditions:["先有独立预期再运行。","不运行故意带未定义行为的片段来规定“正确输出”。","工具通过不等于全输入证明。"]},Xl=[{text:"从接口每条约束推导正常、边界、拒绝用例。"},{text:"对比状态与输出，不仅检查退出码。"},{text:"运行普通构建与支持的 sanitizer 构建，记录真实覆盖和局限。"}],Yl=[{title:"合法范围边缘",problem:"函数 accepts 仅允许 0 到 100，检查四个阈值。",steps:["-1 与 101 拒绝。","0 与 100 接受。","断言都成立输出 ok。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int accepts(int score)
{
    return score >= 0 && score <= 100;
}

int main(void)
{
    assert(!accepts(-1));
    assert(accepts(0));
    assert(accepts(100));
    assert(!accepts(101));
    puts("ok");
    return 0;
}
`,stdin:"",stdout:`ok
`,files:{},exitCode:0}},{title:"检查失败不改状态",problem:"拒绝超范围值后，原分数保持 60。",steps:["函数先验证。","失败返回 0 且不写目标。","状态与返回值同时断言。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int set_score(int *out, int score)
{
    if (out == NULL || score < 0 || score > 100) { return 0; }
    *out = score;
    return 1;
}

int main(void)
{
    int score = 60;
    int ok = set_score(&score, 101);
    assert(ok == 0);
    assert(score == 60);
    puts("ok");
    return 0;
}
`,stdin:"",stdout:`ok
`,files:{},exitCode:0}}],Zl=[{problem:"只有退出码为零，能证明排序保留了全部元素吗？",hint:"结果属性要显式检查。",solution:["零仅表示程序报告正常。","还要比较项数、顺序与元素次数。","根据目标建立断言。"],answer:"不能，需要核对实际结果。",difficulty:2,misconceptionTags:[]},{problem:"100 分要测试吗？",hint:"它是业务上边界。",solution:["刚好 100 应接受。","101 应拒绝。","两者能发现 < 与 <= 混淆。"],answer:"要，同时测试 101 等边界外值。",difficulty:2,misconceptionTags:[]},{problem:"sanitizer 没报警能证明没有内存泄漏吗？",hint:"工具种类与平台能力不同。",solution:["并非所有构建启用泄漏检查。","也可能没执行相关路径。","报告具体工具和实际覆盖。"],answer:"不能；要说明启用了哪些检查、平台支持与未覆盖路径。",difficulty:3,misconceptionTags:[]},{problem:"要验证错误输入不改变表，除了错误消息还需断言什么？",hint:"比较调用前后业务状态。",solution:["先保存长度与原记录。","执行失败操作。","检查长度、记录和拥有者仍符合原契约。"],answer:"至少检查长度、已有数据、可继续使用状态与资源所有权。",difficulty:3,misconceptionTags:[]}],Ql=[{claim:"工具全绿就能写“全书已验证无误”。",correction:"只能准确报告检查过的片段和路径。",tag:"c-testing-m1"},{claim:"assert 适合拒绝所有用户错误。",correction:"用户输入验证必须在普通控制流中存在，不能被 NDEBUG 关闭。",tag:"c-testing-m2"}],Jl={question:"高质量测试报告应写？",choices:["没有任何错误","具体用例、环境、结果与未覆盖部分","只写运行过"],correctIndex:1,feedback:["有限检查不支持这种绝对声明。","正确，证据和边界都明确。","缺少预期与覆盖范围，无法评估。"]},nu={mode:"c-compare",prediction:"先遮住输出：函数 accepts 仅允许 0 到 100，检查四个阈值。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
#include <assert.h>

int accepts(int score)
{
    return score >= 0 && score <= 100;
}

int main(void)
{
    assert(!accepts(-1));
    assert(accepts(0));
    assert(accepts(100));
    assert(!accepts(101));
    puts("ok");
    return 0;
}
`,stdin:"",stdout:`ok
`,files:{},exitCode:0}},tu=["c-bits"],eu=5,iu=["c-testing-m1","c-testing-m2"],su=["n1570","asan","ubsan"],ou={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},cu={id:Bl,number:Dl,chapterId:Ol,title:Vl,concept:Fl,intuition:Wl,objectives:Kl,body:Pl,formalDefinition:Hl,derivation:Xl,workedExamples:Yl,practice:Zl,commonMistakes:Ql,learningCheck:Jl,interactiveVisual:nu,prerequisites:tu,difficulty:eu,misconceptionTags:iu,sources:su,provenance:ou},ru="c-values",au="1.3",du="c-ch1",lu="变量、类型与初始化",uu="变量把会变化的数据命名，类型规定这些数据能表示什么、怎样参与运算。",pu="把变量想成有标签的储物格：标签是名字，格子的规格是类型，里面的东西是值。这个比喻只帮助理解；实际类型范围要查标准头文件，不能凭“格子看起来大”猜测。",mu=["声明时就给初值","先学四类常用类型","格式与只读意图"],fu=[{title:"声明时就给初值",text:"int count = 3; 创建一个 int 对象并把初值设为 3。后续 count = 5; 是赋值，不是数学等式；它把右侧结果存到左侧对象。名字区分大小写。用含义明确的英文名如 item_count，比 a、b、c 更容易排错。局部自动变量若没有初始化，不能把读到的内容当作可用数字。"},{title:"先学四类常用类型",text:"int 保存常用整数；double 保存有小数的近似数；char 保存一个字符编码单位；size_t 表示 sizeof 得到的大小和容器长度。char 的位数不保证恰好为 8，int 也不保证为 32 位。sizeof 的单位是 C 的字节，sizeof(char) 必为 1。本书不把机器上的某次大小当作语言保证。"},{title:"格式与只读意图",text:"printf 输出 int 用 %d，double 常用 %.2f 显示小数点后两位，char 用 %c，size_t 用 %zu。const int days = 7; 表达之后不通过这个名字改值的意图。const 不是任意上下文里的编译期常量，也不让所有相关存储自动不可变。金额优先使用整数分，避免把二进制近似小数当作精确货币。"}],hu={text:"对象是保存值的存储区域；变量名标识对象。初始化为新对象提供初始值，赋值更新已有可修改对象的值。",conditions:["先初始化，再读取。","格式符与参数类型匹配。","不假定 int、指针或 double 的固定字节数；范围查 limits.h。"]},gu=[{text:"根据数据含义选择类型。"},{text:"声明时给初始值，计算时先读右侧再写左侧。"},{text:"按类型选择输出格式，观察打印精度与内部值的区别。"}],bu=[{title:"库存变化",problem:"库存初始 12，卖出 5，输出剩余。",steps:["用 int 存数量。","先算 12 - 5，再写回 stock。","按 %d 输出 7。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int stock = 12;
    stock = stock - 5;
    printf("%d\\n", stock);
    return 0;
}
`,stdin:"",stdout:`7
`,files:{},exitCode:0}},{title:"不同数据不同格式",problem:"输出数量 3、温度 18.5、等级 A。",steps:["int 对应 %d。","double 用 %.1f 显示一位小数。","char 用单引号初始化，%c 输出。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int count = 3;
    double temperature = 18.5;
    char level = 'A';
    printf("%d %.1f %c\\n", count, temperature, level);
    return 0;
}
`,stdin:"",stdout:`3 18.5 A
`,files:{},exitCode:0}}],xu=[{problem:"x 初始 4；执行 x = x + 2 两次，结果是什么？",hint:"每次使用更新后的 x。",solution:["第一次得到 6。","第二次读取 6 得到 8。","输出最终值。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int x = 4;
    x = x + 2;
    x = x + 2;
    printf("%d\\n", x);
    return 0;
}
`,stdin:"",stdout:`8
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"把半径 2.5 保存为只读局部对象并输出一位小数。",hint:"使用 const double。",solution:["声明 const double radius。","初始化 2.5。","用 %.1f 输出。"],answer:{code:`#include <stdio.h>

int main(void)
{
    const double radius = 2.5;
    printf("%.1f\\n", radius);
    return 0;
}
`,stdin:"",stdout:`2.5
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:'int x; printf("%d", x); 为什么不能作为“随机数生成器”？',hint:"未初始化值没有可依赖的语义。",solution:["x 是未初始化的局部自动对象。","读取它不能保证得到有效的预期值，可能触发未定义行为。","若需要初值写 int x = 0；随机数另用有明确契约的库。"],answer:"不能依赖未初始化读取；它不是合法随机数接口。",difficulty:2,misconceptionTags:[]},{problem:"sizeof(char) 能否在某台符合本书基线的实现上等于 2？",hint:"这里的单位是 C 字节。",solution:["C 定义 sizeof(char) 为 1。","一个 C 字节的位数由 CHAR_BIT 表示。","别把字节数和位数混为一谈。"],answer:{code:`#include <stdio.h>

int main(void)
{
    printf("%zu\\n", sizeof(char));
    return 0;
}
`,stdin:"",stdout:`1
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]}],vu=[{claim:"变量名像数学未知数，赋值两边必须永久相等。",correction:"赋值是一次更新动作；右侧先求值，随后存回左侧。",tag:"c-values-m1"},{claim:"所有机器的 int 都占 4 字节。",correction:"常见不等于保证；写可移植程序时依据类型范围与 sizeof。",tag:"c-values-m2"}],$u={question:"哪句保证第一次读 count 前已有确定初值？",choices:["int count;","int count = 0;",'printf("%d", count);'],correctIndex:1,feedback:["声明没有为这个局部自动对象提供初值。","正确，初始化为零后可以读取。","输出语句不能替变量补初值。"]},ku={mode:"c-compare",prediction:"先遮住输出：库存初始 12，卖出 5，输出剩余。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int stock = 12;
    stock = stock - 5;
    printf("%d\\n", stock);
    return 0;
}
`,stdin:"",stdout:`7
`,files:{},exitCode:0}},_u=["c-output"],wu=1,yu=["c-values-m1","c-values-m2"],ju=["n1570"],Cu={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Iu={id:ru,number:au,chapterId:du,title:lu,concept:uu,intuition:pu,objectives:mu,body:fu,formalDefinition:hu,derivation:gu,workedExamples:bu,practice:xu,commonMistakes:vu,learningCheck:$u,interactiveVisual:ku,prerequisites:_u,difficulty:wu,misconceptionTags:yu,sources:ju,provenance:Cu},Tu="c-vector",Lu="6.2",zu="c-ch6",Eu="动态数组与 realloc 的失败路径",Au="当记录数量运行时才知道，可以用“数据指针、长度、容量”组成可增长数组。",Nu="长度是已入住人数，容量是总房间数。扩建失败时，原楼还在，不能先丢掉原楼地址。",Su=["先建立不变量","realloc 必须用临时指针","增长前检查上限"],qu=[{title:"先建立不变量",text:"动态表使用 data、size、capacity。始终满足 size<=capacity，只有下标小于 size 的元素已初始化并属于数据；capacity-size 部分只代表备用空间。初始 data=NULL、size=0、capacity=0，销毁后恢复这三项。容量不等于元素数，不能把备用空间拿去统计。"},{title:"realloc 必须用临时指针",text:"realloc(old, bytes) 成功时返回新块，可能移动；原指针和所有旧元素地址都不可再用。失败返回 NULL，原分配仍归你所有。因此写 tmp=realloc(data,bytes)，成功后再 data=tmp。直接 data=realloc(...) 在失败时丢失原指针，造成泄漏。避免零大小请求的复杂边界。"},{title:"增长前检查上限",text:"翻倍容量前检查乘法和业务上限。入门项目最多接收 100 条，容量增长到 100 就停止，这也限制了总分与内存需求。插入操作先确认空间成功，再写元素、最后增加 size；失败保持原记录表不变。不要在扩容后继续使用之前保存的元素指针。"}],Uu={text:"可增长数组以拥有者结构管理分配块；realloc 失败保留原分配，成功后必须采用新指针并废弃旧别名。",conditions:["尺寸计算不溢出，容量不超过项目上限。","传给 realloc 的地址为当前仍拥有的分配块首地址或 NULL。","本节微型示例只演示固定增长，完整通用逻辑在项目中。"]},Gu=[{text:"确认需要的长度是否超过容量。"},{text:"计算并检查新容量，用临时指针申请增长。"},{text:"成功后更新指针与容量，写入新项，最后更新长度。"}],Mu=[{title:"从一项扩为两项",problem:"先存 7，再扩容到两项并存 9。",steps:["malloc 申请一项。","tmp 接收 realloc，失败时释放原块。","成功后新指针存第二项，输出并释放。"],answer:{code:`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *a = malloc(sizeof *a);
    if (a == NULL) { return 1; }
    a[0] = 7;
    int *tmp = realloc(a, 2 * sizeof *a);
    if (tmp == NULL) { free(a); return 1; }
    a = tmp;
    a[1] = 9;
    printf("%d %d\\n", a[0], a[1]);
    free(a);
    return 0;
}
`,stdin:"",stdout:`7 9
`,files:{},exitCode:0}},{title:"区分长度和容量",problem:"容量四项，只存了两项 3、5，只统计已用部分。",steps:["size 为 2。","只访问 [0,size)。","备用两项不读取，总和 8。"],answer:{code:`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *a = malloc(4 * sizeof *a);
    if (a == NULL) { return 1; }
    size_t size = 2;
    a[0] = 3; a[1] = 5;
    int sum = 0;
    for (size_t i = 0; i < size; i++) { sum += a[i]; }
    printf("%d\\n", sum);
    free(a);
    return 0;
}
`,stdin:"",stdout:`8
`,files:{},exitCode:0}}],Ru=[{problem:"realloc 失败后原块是否已经释放？",hint:"失败与成功的契约不同。",solution:["返回 NULL 表示此次失败。","原块保持分配。","你仍须决定保留或释放。"],answer:"没有；原块仍由调用者拥有。",difficulty:2,misconceptionTags:[]},{problem:"扩容成功后，可否继续使用旧元素指针？",hint:"新块可能移址，原对象生命周期已改变。",solution:["旧地址不能继续依赖。","更新拥有者指针。","用新指针和下标重新取得元素地址。"],answer:"不能；成功后重新获取所有借用指针。",difficulty:3,misconceptionTags:[]},{problem:"size=2、capacity=8，遍历统计到哪？",hint:"已初始化数据与备用空间不同。",solution:["合法数据为下标 0、1。","循环条件 i<size。","不要读取其余未初始化空间。"],answer:"遍历 size 项；capacity 只用于分配与插入空间判断。",difficulty:2,misconceptionTags:[]},{problem:"插入失败却先 size++，会破坏什么？",hint:"size 声称有一项实际上并不存在。",solution:["分配未成功。","长度却增加。","之后遍历可能访问未初始化或越界内存。"],answer:"破坏 size<=capacity 或已用区域全初始化的不变量；成功写入后再增加长度。",difficulty:3,misconceptionTags:[]}],Bu=[{claim:"realloc 总会原地扩展。",correction:"可能移动，成功后的旧别名不能保留使用。",tag:"c-vector-m1"},{claim:"先覆盖原指针代码更短，所以更好。",correction:"失败会丢失原块；必须保留原指针直到成功。",tag:"c-vector-m2"}],Du={question:"正确接收 realloc 结果的方式是？",choices:["直接无条件覆盖唯一原指针","先放临时指针，成功再替换","忽略返回值"],correctIndex:1,feedback:["失败时会丢失原地址。","正确，能保留失败时的所有权。","成功可能移动，忽略结果会留下无效旧指针。"]},Ou={mode:"c-compare",prediction:"先遮住输出：先存 7，再扩容到两项并存 9。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int *a = malloc(sizeof *a);
    if (a == NULL) { return 1; }
    a[0] = 7;
    int *tmp = realloc(a, 2 * sizeof *a);
    if (tmp == NULL) { free(a); return 1; }
    a = tmp;
    a[1] = 9;
    printf("%d %d\\n", a[0], a[1]);
    free(a);
    return 0;
}
`,stdin:"",stdout:`7 9
`,files:{},exitCode:0}},Vu=["c-structs"],Fu=4,Wu=["c-vector-m1","c-vector-m2"],Ku=["n1570"],Pu={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},Hu={id:Tu,number:Lu,chapterId:zu,title:Eu,concept:Au,intuition:Nu,objectives:Su,body:qu,formalDefinition:Uu,derivation:Gu,workedExamples:Mu,practice:Ru,commonMistakes:Bu,learningCheck:Du,interactiveVisual:Ou,prerequisites:Vu,difficulty:Fu,misconceptionTags:Wu,sources:Ku,provenance:Pu},Xu="c-while",Yu="2.4",Zu="c-ch2",Qu="while、哨兵与终止条件",Ju="循环让程序重复执行动作；正确的终止条件保证工作会做完，也保证不多做一次。",np="每次绕圈前先看门口的条件。若从一开始就不满足，while 的身体一次都不执行。",tp=["三个部分一起设计","哨兵不属于数据","累计值和空输入"],ep=[{title:"三个部分一起设计",text:"写循环前列出初始状态、继续条件、状态更新。int n = 3; while (n > 0) { ...; n--; } 每轮减少 n，最后到零退出。若忘记更新，条件可能永久为真。不要先写 while(1) 再祈祷某处会结束；确需无条件循环时，明确每一条 break 或 return 路径。"},{title:"哨兵不属于数据",text:"读取多个分数可约定 -1 表示结束，称为哨兵。先检查是否为 -1，再参与求和与计数；不要把哨兵也加进去。读取失败也应退出或有明确恢复方案，不能每次对同一个无法转换的字符重试。EOF 表示输入结束，不是正常数值；终端如何发送 EOF 因环境而异，也可用输入重定向练习。"},{title:"累计值和空输入",text:"sum 从 0 开始，count 从 0 开始；每次接受一条合法数据再更新它们。求平均值前先检查 count > 0。空数据集不是平均值为零，而是平均值尚未定义。总和仍须检查范围；本节固定用小数据，完整项目会以记录上限保证总和可表示。"}],ip={text:"while 在每轮之前判断条件，条件为非零时执行循环体，再回到条件；break 立即离开最近循环。",conditions:["循环状态必须有能解释的进展。","累计运算在合法范围内。","数据结束、格式失败和业务非法值各有明确路径。"]},sp=[{text:"写下初值和每轮结束后的状态。"},{text:"在加入数据前判断哨兵与合法性。"},{text:"用零轮、一轮、多轮手工追踪，再确认结束后的累计结果。"}],op=[{title:"倒计时",problem:"从 3 倒数到 1，随后停止。",steps:["n 初值 3 满足条件。","每轮先输出再减一。","n 为 0 时不再进入。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int n = 3;
    while (n > 0) {
        printf("%d\\n", n);
        n--;
    }
    return 0;
}
`,stdin:"",stdout:`3
2
1
`,files:{},exitCode:0}},{title:"哨兵求和",problem:"本节小整数输入 2 5 -1，-1 结束且不计入总和。",steps:["每轮检查读取成功。","先遇到 -1 就 break。","只将 2、5 累加为 7。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int value = 0, sum = 0;
    while (scanf("%d", &value) == 1) {
        if (value == -1) {
            break;
        }
        sum += value;
    }
    printf("%d\\n", sum);
    return 0;
}
`,stdin:`2 5 -1
`,stdout:`7
`,files:{},exitCode:0}}],cp=[{problem:"n 初值为 0，while(n > 0) 会执行几次？",hint:"while 先判断。",solution:["第一次条件为假。","不执行循环体。","直接执行循环之后的语句。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int n = 0;
    while (n > 0) {
        puts("inside");
        n--;
    }
    puts("done");
    return 0;
}
`,stdin:"",stdout:`done
`,files:{},exitCode:0},difficulty:1,misconceptionTags:[]},{problem:"把 1 到 4 累加，写 while。",hint:"先设计 i 与 sum 的初值。",solution:["i 从 1 开始，sum 从 0 开始。","每轮加上 i 后递增 i。","到 i=5 退出，和为 10。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int i = 1, sum = 0;
    while (i <= 4) {
        sum += i;
        i++;
    }
    printf("%d\\n", sum);
    return 0;
}
`,stdin:"",stdout:`10
`,files:{},exitCode:0},difficulty:2,misconceptionTags:[]},{problem:"第一项就是 -1，求平均之前要检查什么？",hint:"计数可能保持为零。",solution:["哨兵不加入数据。","count 仍是 0。","输出 no data，不计算 sum/count。"],answer:"检查 count > 0；空集合不给平均值。",difficulty:2,misconceptionTags:[]},{problem:"while 中用 continue 跳过负数，更新计数器应该放在哪？",hint:"continue 会直接回到条件。",solution:["找出每条能到 continue 的路径。","让必要更新发生在 continue 之前，或使用 for 的更新部分。","否则某些状态永远不变。"],answer:"确保所有继续路径仍推进循环；不能让 continue 跳过唯一的状态更新。",difficulty:3,misconceptionTags:[]}],rp=[{claim:"条件为假时也先执行一次。",correction:"while 先判断；至少执行一次需要 do / while，后者本书仅作为语法速查介绍。",tag:"c-while-m1"},{claim:"结束标记也该算入平均值。",correction:"哨兵是控制信息；识别它以后立即停止，不更新总和与计数。",tag:"c-while-m2"}],ap={question:"输入序列只有 -1，按本节哨兵约定接受了几条数据？",choices:["1","0","-1"],correctIndex:1,feedback:["-1 是结束标记。","正确，没有接受任何数据。","计数表示条数，不能是 -1。"]},dp={mode:"c-compare",prediction:"先遮住输出：从 3 倒数到 1，随后停止。 写下结果后，对比两个已编译的例子。",caption:"切换案例，比较代码、输入与预期输出。结果来自本书固定程序的本机执行检查；网页展示静态案例，不运行任意 C 代码。",experiment:{code:`#include <stdio.h>

int main(void)
{
    int n = 3;
    while (n > 0) {
        printf("%d\\n", n);
        n--;
    }
    return 0;
}
`,stdin:"",stdout:`3
2
1
`,files:{},exitCode:0}},lp=["c-switch"],up=2,pp=["c-while-m1","c-while-m2"],mp=["n1570"],fp={author:"AI-generated",humanReviewed:!1,version:"0.1.0"},hp={id:Xu,number:Yu,chapterId:Zu,title:Qu,concept:Ju,intuition:np,objectives:tp,body:ep,formalDefinition:ip,derivation:sp,workedExamples:op,practice:cp,commonMistakes:rp,learningCheck:ap,interactiveVisual:dp,prerequisites:lp,difficulty:up,misconceptionTags:pp,sources:mp,provenance:fp},gp=`# 成绩管理器：C17 完整练习项目

AI 编写，humanReviewed=false；项目代码 MIT。只需要 GCC 或 Clang，不需要 npm、网络、第三方 C 库。

把本目录全部文件放在同一个文件夹，在终端进入这个目录。Windows 使用 MSYS2 UCRT64（x86-64）；macOS 可把命令里的 gcc 换为 clang。

\`\`\`sh
gcc -std=c17 -Wall -Wextra -Wpedantic main.c records.c input.c -o gradebook
./gradebook sample.txt
\`\`\`

MSYS2 也可用 \`./gradebook.exe sample.txt\`。文件名参数来自 \`main(int argc, char *argv[])\`：argc 是参数个数，argv[0] 通常为启动名，argv[1] 是输入路径；项目只接受一个路径，使用前先检查 argc。

预期输出：

\`\`\`text
count: 3
total: 247
mean: 82.33
passed: 2
Ada 100
Lin 88
Bo 59
\`\`\`

规则：每行 \`[A-Za-z]{1,20}\`、一个空格、一个或多个数字；成绩 0..100，允许前导零，不允许正负号、额外空白、空行；姓名唯一、区分大小写，最多 100 人。接受 LF、CRLF、末行无换行；拒绝内嵌 NUL、63 字符以上的行。空文件有效，人数总分及格数为零，平均显示 n/a。报告按分数降序，同分按 strcmp 名字顺序。ASCII 名称算法面向本书 GCC/Clang 的常见 ASCII 兼容环境，不声称支持所有执行字符集和 Unicode 排序。

失败写 stderr 并非零退出；输入失败时不输出部分报告。\`gb_load\` 用临时表，在整份读取、解析与关闭成功后才替换已初始化的目标；失败保留原目标。\`Gradebook\` 是唯一拥有者，禁止随意按值复制；使用后 \`gb_destroy\`。接口入参须符合头文件契约，不验证任意野指针。

保存报告可用 \`./gradebook sample.txt > report.txt\`。shell 会预先创建或截断输出文件，**输出绝不能与输入为同一路径或其别名、符号链接、硬链接**。程序不写输入；不提供原子文件保存、并发访问或断电保护。

本地单元检查：

\`\`\`sh
gcc -std=c17 -Wall -Wextra -Wpedantic test_records.c records.c input.c -o test_records
./test_records
\`\`\`

支持 sanitizer 的 Clang/GCC 环境可在上述两条编译命令加入：

\`\`\`text
-g -O1 -fsanitize=address,undefined -fno-omit-frame-pointer
\`\`\`

在本仓库中还能运行 \`npm run check:c\`，包括逐片段编译输出比较、项目单元检查与外部文件用例；使用 \`C_SANITIZE=1 npm run check:c\` 请求 sanitizer 检查。Windows 工具链支持因版本不同，普通 C17 构建不依赖 sanitizer。

模块：records 管记录与内存；input 管文件与文本协议；main 管参数、报告和退出状态。练习代码为清楚可读而设计；100 人插入排序足够，扩容或更大规模需重审范围与代价。普通测试不模拟真实分配器耗尽、设备级读写失败或所有平台差异；详细证据见教材 QA.md。
`,bp=`#include "input.h"
#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

GbStatus parse_student(const char *text, Student *out)
{
    if (text == NULL || out == NULL) { return GB_INVALID; }
    Student item = {"", 0};
    size_t length = 0;
    while (text[length] != '\\0' && text[length] != ' ') {
        unsigned char ch = (unsigned char)text[length];
        if (!((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))) {
            return GB_INVALID;
        }
        if (length == GB_NAME_LIMIT) { return GB_INVALID; }
        item.name[length] = (char)ch;
        length++;
    }
    if (length == 0 || text[length] != ' ') { return GB_INVALID; }
    const char *digits = text + length + 1;
    if (*digits == '\\0') { return GB_INVALID; }
    for (const char *p = digits; *p != '\\0'; p++) {
        if (*p < '0' || *p > '9') { return GB_INVALID; }
    }
    char *end;
    errno = 0;
    long value = strtol(digits, &end, 10);
    if (errno == ERANGE || end == digits || *end != '\\0' || value > 100) {
        return GB_INVALID;
    }
    item.score = (int)value;
    *out = item;
    return GB_OK;
}

/* 1=line, 0=clean EOF, -1=I/O, -2=invalid/too long.
   cap is a fixed 64 in the caller, at least 2. */
static int read_line(FILE *stream, char *line, size_t cap)
{
    size_t used = 0;
    int ch;
    while ((ch = fgetc(stream)) != EOF) {
        if (ch == '\\n') {
            if (used > 0 && line[used - 1] == '\\r') { used--; }
            line[used] = '\\0';
            return 1;
        }
        if (ch == 0 || used == cap - 1) { return -2; }
        line[used++] = (char)ch;
    }
    if (ferror(stream)) { return -1; }
    if (used == 0) { return 0; }
    line[used] = '\\0';
    return 1;
}

GbStatus gb_load(Gradebook *target, const char *path, size_t *error_line)
{
    if (error_line != NULL) { *error_line = 0; }
    FILE *stream = fopen(path, "rb"); /* Preserve CRLF and NUL for validation. */
    if (stream == NULL) { return GB_IO; }
    Gradebook staging;
    gb_init(&staging);
    GbStatus status = GB_OK;
    size_t line_number = 0;
    char line[64];
    int result;
    while ((result = read_line(stream, line, sizeof line)) != 0) {
        line_number++;
        if (result < 0) {
            status = result == -1 ? GB_IO : GB_INVALID;
            break;
        }
        Student item;
        status = parse_student(line, &item);
        if (status != GB_OK) { break; }
        status = gb_add(&staging, item.name, item.score);
        if (status != GB_OK) { break; }
    }
    if (fclose(stream) != 0 && status == GB_OK) { status = GB_IO; line_number = 0; }
    if (status != GB_OK) {
        if (error_line != NULL) { *error_line = line_number; }
        gb_destroy(&staging);
        return status;
    }
    gb_destroy(target);
    *target = staging; /* Intentional ownership transfer; do not destroy staging. */
    return GB_OK;
}
`,xp=`#ifndef AU_INPUT_H
#define AU_INPUT_H
#include "records.h"

/* text must be terminated; out must point to a writable Student.
   Exact grammar: [A-Za-z]{1,20} SPACE [0-9]+, score <= 100.
   Success writes out; failure leaves it unchanged. */
GbStatus parse_student(const char *text, Student *out);
/* target must be initialized. Success replaces it, failure preserves it.
   error_line is optional: 0 for file-level errors, otherwise 1-based line.
   path and error_line must not alias the target's owned storage. */
GbStatus gb_load(Gradebook *target, const char *path, size_t *error_line);
#endif
`,vp=`#include "input.h"
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    if (argc != 2) {
        fprintf(stderr, "usage: gradebook INPUT.txt\\n");
        return EXIT_FAILURE;
    }
    Gradebook book;
    gb_init(&book);
    size_t error_line = 0;
    GbStatus status = gb_load(&book, argv[1], &error_line);
    if (status != GB_OK) {
        if (error_line != 0) { fprintf(stderr, "line %zu: ", error_line); }
        fprintf(stderr, "%s\\n", gb_status_text(status));
        gb_destroy(&book);
        return EXIT_FAILURE;
    }
    gb_sort(&book);
    int total = gb_total(&book);
    int failed = printf("count: %zu\\ntotal: %d\\n", book.size, total) < 0;
    if (book.size == 0) {
        if (puts("mean: n/a") == EOF) { failed = 1; }
    } else if (printf("mean: %.2f\\n", total / (double)book.size) < 0) {
        failed = 1;
    }
    if (printf("passed: %zu\\n", gb_passed(&book)) < 0) { failed = 1; }
    for (size_t i = 0; i < book.size; i++) {
        if (printf("%s %d\\n", book.data[i].name, book.data[i].score) < 0) { failed = 1; }
    }
    gb_destroy(&book);
    if (fflush(stdout) == EOF) { failed = 1; }
    if (failed) { fprintf(stderr, "output failed\\n"); return EXIT_FAILURE; }
    return EXIT_SUCCESS;
}
`,$p=`#include "records.h"
#include <stdlib.h>
#include <string.h>

void gb_init(Gradebook *book)
{
    book->data = NULL;
    book->size = 0;
    book->capacity = 0;
}

void gb_destroy(Gradebook *book)
{
    free(book->data);
    gb_init(book);
}

static int valid_name(const char *name)
{
    if (name == NULL) { return 0; }
    size_t length = 0;
    while (name[length] != '\\0') {
        unsigned char ch = (unsigned char)name[length];
        if (!((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z'))) {
            return 0;
        }
        length++;
        if (length > GB_NAME_LIMIT) { return 0; }
    }
    return length > 0;
}

GbStatus gb_add(Gradebook *book, const char *name, int score)
{
    if (!valid_name(name) || score < 0 || score > 100) { return GB_INVALID; }
    /* Save before realloc: name may point into the current book. */
    Student item = {"", score};
    strcpy(item.name, name); /* valid_name proved room for the terminator. */
    for (size_t i = 0; i < book->size; i++) {
        if (strcmp(book->data[i].name, item.name) == 0) { return GB_DUPLICATE; }
    }
    if (book->size == GB_LIMIT) { return GB_FULL; }
    if (book->size == book->capacity) {
        size_t next = book->capacity == 0 ? 4 : book->capacity * 2;
        if (next > GB_LIMIT) { next = GB_LIMIT; }
        /* next <= 100; sizeof(Student) is fixed and tiny in this project. */
        if (next > (size_t)-1 / sizeof *book->data) { return GB_MEMORY; }
        Student *tmp = realloc(book->data, next * sizeof *tmp);
        if (tmp == NULL) { return GB_MEMORY; }
        book->data = tmp;
        book->capacity = next;
    }
    book->data[book->size] = item;
    book->size++;
    return GB_OK;
}

static int comes_before(const Student *a, const Student *b)
{
    if (a->score != b->score) { return a->score > b->score; }
    return strcmp(a->name, b->name) < 0;
}

void gb_sort(Gradebook *book)
{
    for (size_t i = 1; i < book->size; i++) {
        Student key = book->data[i];
        size_t j = i;
        while (j > 0 && comes_before(&key, &book->data[j - 1])) {
            book->data[j] = book->data[j - 1];
            j--;
        }
        book->data[j] = key;
    }
}

int gb_total(const Gradebook *book)
{
    int total = 0;
    for (size_t i = 0; i < book->size; i++) { total += book->data[i].score; }
    return total; /* <= 10000, within the minimum guaranteed int range. */
}

size_t gb_passed(const Gradebook *book)
{
    size_t count = 0;
    for (size_t i = 0; i < book->size; i++) {
        if (book->data[i].score >= 60) { count++; }
    }
    return count;
}

const char *gb_status_text(GbStatus status)
{
    switch (status) {
    case GB_OK: return "ok";
    case GB_INVALID: return "invalid record";
    case GB_DUPLICATE: return "duplicate name";
    case GB_FULL: return "too many records (maximum 100)";
    case GB_MEMORY: return "allocation failed";
    case GB_IO: return "file I/O failed";
    }
    return "unknown error";
}
`,kp=`#ifndef AU_RECORDS_H
#define AU_RECORDS_H

#include <stddef.h>

#define GB_LIMIT 100
#define GB_NAME_LIMIT 20

typedef struct {
    char name[GB_NAME_LIMIT + 1];
    int score;
} Student;

/* Unique owner: do not copy an initialized Gradebook by value. */
typedef struct {
    Student *data;
    size_t size;
    size_t capacity;
} Gradebook;

typedef enum {
    GB_OK, GB_INVALID, GB_DUPLICATE, GB_FULL, GB_MEMORY, GB_IO
} GbStatus;

/* Call init once before use; destroy once after the last use. */
void gb_init(Gradebook *book);
void gb_destroy(Gradebook *book);
/* On failure, records, size and ownership are unchanged. */
GbStatus gb_add(Gradebook *book, const char *name, int score);
void gb_sort(Gradebook *book);
int gb_total(const Gradebook *book);
size_t gb_passed(const Gradebook *book);
const char *gb_status_text(GbStatus status);

#endif
`,_p=`Lin 88
Bo 59
Ada 100
`,wp=`#include "input.h"
#include <assert.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    Gradebook book;
    gb_init(&book);
    assert(gb_total(&book) == 0 && gb_passed(&book) == 0);
    gb_sort(&book);
    GbStatus status = gb_add(&book, "Lin", 88);
    assert(status == GB_OK);
    status = gb_add(&book, "Bo", 59);
    assert(status == GB_OK);
    status = gb_add(&book, "Ada", 100);
    assert(status == GB_OK);
    status = gb_add(&book, "Ada", 0);
    assert(status == GB_DUPLICATE && book.size == 3);
    status = gb_add(&book, "Invalid1", 90);
    assert(status == GB_INVALID && book.size == 3);
    status = gb_add(&book, "Zero", -1);
    assert(status == GB_INVALID && book.size == 3);
    assert(gb_total(&book) == 247 && gb_passed(&book) == 2);
    gb_sort(&book);
    assert(strcmp(book.data[0].name, "Ada") == 0 && book.data[0].score == 100);
    assert(strcmp(book.data[1].name, "Lin") == 0 && book.data[1].score == 88);
    assert(strcmp(book.data[2].name, "Bo") == 0 && book.data[2].score == 59);
    gb_destroy(&book);
    assert(book.data == NULL && book.size == 0 && book.capacity == 0);
    gb_destroy(&book); /* The reset state is safe to destroy again. */

    Student item = {"Keep", 42};
    status = parse_student("Ada 0", &item);
    assert(status == GB_OK && item.score == 0);
    status = parse_student("Ada 100", &item);
    assert(status == GB_OK && item.score == 100);
    const char *bad[] = {"", " 90", "Ada", "Ada ", "Ada  90", "Ada -1", "Ada +1",
                         "Ada 101", "Ada 90x", "Ada 90 ", "Ada\\t90", "A1 9",
                         "ABCDEFGHIJKLMNOPQRSTU 9", "Ada 99999999999999999999999999999"};
    for (size_t i = 0; i < sizeof bad / sizeof bad[0]; i++) {
        item.score = 42;
        strcpy(item.name, "Keep");
        status = parse_student(bad[i], &item);
        assert(status == GB_INVALID && item.score == 42 && strcmp(item.name, "Keep") == 0);
    }
    status = parse_student("ABCDEFGHIJKLMNOPQRST 100", &item);
    assert(status == GB_OK && strlen(item.name) == 20);

    gb_init(&book);
    for (size_t i = 0; i < GB_LIMIT; i++) {
        char name[4] = {'S', (char)('A' + i / 26), (char)('A' + i % 26), '\\0'};
        status = gb_add(&book, name, 100);
        assert(status == GB_OK);
    }
    assert(book.size == GB_LIMIT && book.capacity == GB_LIMIT && gb_total(&book) == 10000);
    status = gb_add(&book, "Extra", 1);
    assert(status == GB_FULL && book.size == GB_LIMIT);
    gb_destroy(&book);
    puts("records and parser: ok");
    return 0;
}
`,yp="C 语言：从零到完整程序",jp="0.1.0",Cp="面向没有编程、终端或计算机专业基础的中文读者；只需会输入文本和进行基本四则运算。",Ip="以 C17 的可移植常用子集为基线，GCC / Clang；主线不依赖第三方 C 库。",Tp="先学会保存、编译、运行，再一步步理解控制流、函数、数组、指针、资源所有权和文件，最后交付可测试的成绩管理器。",Lp=[{id:"c-ch1",title:"第1章 开始编程",objective:"从零完成安装、保存、编译和运行，读懂输出、变量与运算。",lessons:["c-start","c-output","c-values","c-arithmetic"]},{id:"c-ch2",title:"第2章 选择与重复",objective:"接收受限输入，设计条件、菜单和有终止依据的循环。",lessons:["c-if","c-input","c-switch","c-while"]},{id:"c-ch3",title:"第3章 组织与检查",objective:"用函数、作用域和测试把长程序分解成可核对的步骤。",lessons:["c-for","c-functions","c-scope","c-debug"]},{id:"c-ch4",title:"第4章 组织成批数据",objective:"正确处理数组、查找、排序、字符串与有界整行输入。",lessons:["c-arrays","c-algorithms","c-strings","c-lines"]},{id:"c-ch5",title:"第5章 理解内存",objective:"从对象与地址出发，掌握指针接口、生命周期和动态分配。",lessons:["c-pointers","c-out-parameters","c-pointer-arrays","c-memory"]},{id:"c-ch6",title:"第6章 管理记录与文件",objective:"用结构体、动态数组、文件流和严格解析表达完整数据。",lessons:["c-structs","c-vector","c-files","c-parse"]},{id:"c-ch7",title:"第7章 建立工程习惯",objective:"组织多文件程序，理解递归与位操作，建立边界测试矩阵。",lessons:["c-modules","c-recursion","c-bits","c-testing"]},{id:"c-ch8",title:"第8章 交付完整项目",objective:"从规格到数据、加载、报告和测试，完成成绩管理器。",lessons:["c-project-plan","c-project-records","c-project-input","c-project-delivery"]}],zp=["不涵盖 C++、并发线程、网络、图形界面、嵌入式硬件寄存器或操作系统内核。","不系统讲解函数指针、复杂声明器、联合体、位域、变长数组、预处理元编程和严格别名优化；不以空白章节占位。","递归与位操作为建立基本边界认识的短章，不替代数据结构或算法专门课程。","不宣称 C17 是最新标准；选择它是为了稳定教学基线。"],Ep=[{id:"n1570",title:"WG14 N1570：C11 委员会草案（核对 C17 共通基础）",url:"https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf",usage:"按章节核对共通规则：6.2 对象/类型/生命周期、6.3 转换、6.5 表达式、6.7 声明、6.8 语句、7.21 I/O、7.22 转换与内存、7.24 字符串；这是 C11 草案，不冒称 C17 正式标准。"},{id:"gcc",title:"GCC：C Dialect Options",url:"https://gcc.gnu.org/onlinedocs/gcc/C-Dialect-Options.html",usage:"核对 -std=c17 的含义和语言版本选择；本书不依赖编译器默认标准。"},{id:"apple",title:"Apple：Installing the command-line tools",url:"https://developer.apple.com/documentation/xcode/installing-the-command-line-tools",usage:"核对 macOS 命令行工具安装入口。"},{id:"msys2",title:"MSYS2：安装与环境说明",url:"https://www.msys2.org/docs/environments/",usage:"核对 Windows UCRT64 环境与架构选择；下载入口为 https://www.msys2.org/ 。"},{id:"asan",title:"Clang：AddressSanitizer",url:"https://clang.llvm.org/docs/AddressSanitizer.html",usage:"核对地址检查构建参数与已知工具边界。"},{id:"ubsan",title:"Clang：UndefinedBehaviorSanitizer",url:"https://clang.llvm.org/docs/UndefinedBehaviorSanitizer.html",usage:"核对未定义行为检查的启用方式与覆盖类别。"}],p={title:yp,version:jp,audience:Cp,baseline:Ip,description:Tp,chapters:Lp,outOfScope:zp,sources:Ep},Ap=[{chapterId:"c-ch1",questions:[{problem:"修改程序但输出没变，给出可操作排查顺序。",hint:"区分三个文件阶段。",solution:["确认编辑的文件和保存位置。","用明确源文件重新编译并处理所有诊断。","运行 -o 指定的新文件，核对当前目录。"],answer:"先保存，再成功重编译，最后运行正确路径的程序。",difficulty:3,misconceptionTags:[]},{problem:"求 7、8、9 的浮点平均值。",hint:"不要先执行整数除法再转 double。",solution:["先求和 24。","除以 3.0。","输出 8.0。"],answer:{code:`#include <stdio.h>

int main(void)
{
    printf("%.1f\\n", (7 + 8 + 9) / 3.0);
    return 0;
}
`,stdin:"",stdout:`8.0
`,files:{},exitCode:0},difficulty:3,misconceptionTags:[]}]},{chapterId:"c-ch2",questions:[{problem:"把 1 到 10 中偶数相加。",hint:"先确定遍历边界，再决定是否累计。",solution:["遍历 1..10。","只加余数为零的项。","2+4+6+8+10=30。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int sum = 0;
    for (int i = 1; i <= 10; i++) { if (i % 2 == 0) { sum += i; } }
    printf("%d\\n", sum);
    return 0;
}
`,stdin:"",stdout:`30
`,files:{},exitCode:0},difficulty:3,misconceptionTags:[]},{problem:"输入读取失败后继续 while 重试，为什么可能卡死？",hint:"错误字符是否被消耗？",solution:["scanf 不能转换时可能不消耗该字符。","下一轮又遇到同一字符。","结束或整行消费并给出恢复策略。"],answer:"失败必须改变输入状态或退出；不能无条件对同一字符重复转换。",difficulty:3,misconceptionTags:[]}]},{chapterId:"c-ch3",questions:[{problem:"写一个无隐藏状态的 clamp_score，把输入限定到 0..100。",hint:"低于零、高于百、范围内三种情况。",solution:["小于零返回零。","大于百返回百。","其余原样返回。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int clamp_score(int n)
{
    if (n < 0) { return 0; }
    if (n > 100) { return 100; }
    return n;
}

int main(void)
{
    assert(clamp_score(-2)==0);
    assert(clamp_score(50)==50);
    assert(clamp_score(120)==100);
    puts("ok");
    return 0;
}
`,stdin:"",stdout:`ok
`,files:{},exitCode:0},difficulty:3,misconceptionTags:[]},{problem:"解释为何“同名”不能让函数参数修改调用者整数。",hint:"分别画形参和实参对象。",solution:["实参先求值。","值复制给独立形参。","写形参不会写原对象，需显式地址接口。"],answer:"名字不建立对象共享；C 的参数按值传递。",difficulty:3,misconceptionTags:[]}]},{chapterId:"c-ch4",questions:[{problem:"在 {5,2,5,1} 中统计 5 的次数。",hint:"不要找到一次就 break。",solution:["计数从零开始。","遍历四项。","两次命中，返回 2。"],answer:{code:`#include <stdio.h>

int main(void)
{
    int a[]={5,2,5,1};
    size_t count=0;
    for(size_t i=0;i<4;i++){ if(a[i]==5){ count++; } }
    printf("%zu\\n",count);
    return 0;
}
`,stdin:"",stdout:`2
`,files:{},exitCode:0},difficulty:3,misconceptionTags:[]},{problem:"字符数组长度 4，能保存 hello 吗？",hint:"字符串需要终止零。",solution:["hello 有五字符。","还需一个零。","至少六个 char，容量四不够。"],answer:"不能；至少容量 6，且每次写入都必须受容量限制。",difficulty:3,misconceptionTags:[]}]},{chapterId:"c-ch5",questions:[{problem:"函数返回局部 int 地址，为什么加 NULL 检查也修不好？",hint:"对象已结束生命周期。",solution:["返回指针可能非 NULL。","目标局部对象却已经不存在。","返回值本身，或使用调用者对象、明确拥有的动态存储。"],answer:"NULL 检查不证明生命周期有效；修复对象归属与存活期。",difficulty:3,misconceptionTags:[]},{problem:"malloc 得到 p，q=p，free(q) 后如何处理 p？",hint:"两份指针共享一块分配。",solution:["q 释放整块。","p 也失去可访问目标。","不得再次 free(p) 或读取；按拥有者规则清除旧别名。"],answer:"p 是悬空指针；停止使用，不重复释放。",difficulty:3,misconceptionTags:[]}]},{chapterId:"c-ch6",questions:[{problem:"为何 realloc 要先存 tmp，并且成功后旧元素指针也要弃用？",hint:"分别看失败与成功的契约。",solution:["失败原块仍在，tmp 防止丢失原地址。","成功可能移动并使旧指针失效。","更新拥有者，重新获取元素地址。"],answer:"失败保留旧所有权；成功改用返回的新地址，废弃全部旧别名。",difficulty:3,misconceptionTags:[]},{problem:"给出完整整数解析的四项检查。",hint:"数字、机器范围、后缀、业务范围。",solution:["end!=text 说明确有数字。","errno!=ERANGE 且后缀符合协议。","值在业务与目标类型范围内，之后再转换。"],answer:"检查无数字、ERANGE、未接受后缀和业务范围；调用前 errno=0。",difficulty:3,misconceptionTags:[]}]},{chapterId:"c-ch7",questions:[{problem:"函数有递归基例 n==0，却以 n+1 递归；对 n>0 会结束吗？",hint:"检查度量是否靠近零。",solution:["正数不断增加。","不能到零。","还可能先溢出，需修正递推与输入域。"],answer:"没有终止保证；基例存在还不够，需要严格靠近。",difficulty:3,misconceptionTags:[]},{problem:"头文件原型正确但链接失败，列出两个可能原因。",hint:"实现在哪，命令编了什么？",solution:["漏写实现或名字不一致。","漏把实现 .c 加入命令。","检查函数是否误设为文件内 static。"],answer:"常见是漏链接实现文件，或定义名/链接属性不匹配。",difficulty:3,misconceptionTags:[]}]},{chapterId:"c-ch8",questions:[{problem:"样例增加 Ada 90，原文件已有 Ada 100，如何处理？",hint:"姓名唯一。",solution:["检查重复失败。","销毁本次 staging。","不输出报告，原目标不变。"],answer:"拒绝整份输入，不能覆盖、合并或悄悄忽略。",difficulty:3,misconceptionTags:[]},{problem:"提出支持中文姓名的扩展计划。",hint:"字节长度、分隔、排序都受影响。",solution:["明确 UTF-8 验证和最大字节/字符长度。","定义空格分隔与名字排序规则。","更新解析、错误信息、测试和文档，再实现。"],answer:"不能只删 ASCII 检查；必须重新定义编码、容量、协议和排序契约。",difficulty:3,misconceptionTags:[]}]}],Np=[{problem:"实现非空整数数组最小值，通过输出参数返回；空数组失败且不改输出。",hint:"先检查空，再用第一项初始化。",solution:["n 为零或 out 为空返回失败。","从第一项建立最小候选。","遍历后写出结果。"],answer:{code:`#include <stdio.h>
#include <assert.h>

int minimum(const int *a, size_t n, int *out)
{
    if(n==0 || out==NULL){ return 0; }
    int best=a[0];
    for(size_t i=1;i<n;i++){ if(a[i]<best){ best=a[i]; } }
    *out=best;
    return 1;
}

int main(void)
{
    int a[]={4,-2,7};
    int result=99;
    assert(minimum(a,3,&result)==1);
    assert(result==-2);
    assert(minimum(a,0,&result)==0);
    assert(result==-2);
    printf("%d\\n",result);
    return 0;
}
`,stdin:"",stdout:`-2
`,files:{},exitCode:0},difficulty:4,misconceptionTags:[]},{problem:"设计两个人同分 80 的报告测试，Zoe 与 Ada，检查哪些内容？",hint:"同时检查顺序与汇总。",solution:["count 为 2，总分 160。","平均 80.00，及格 2。","在本项目验证环境按 strcmp，Ada 在 Zoe 前且配对不变。"],answer:"检查人数 2、总分 160、平均 80.00、及格 2，排序 Ada 80 / Zoe 80。",difficulty:4,misconceptionTags:[]},{problem:"审查 bad_add：先 size++，再直接 data=realloc(...)，无检查就写数据。给出修复顺序。",hint:"长度、所有权和失败行为都要保留。",solution:["先验证记录与容量上限。","用临时指针申请，失败保持旧状态。","成功更新指针与容量，再写元素、最后增加 size。"],answer:"先验证，安全算容量，用 tmp 接 realloc；成功才替换、写入并增长度。",difficulty:5,misconceptionTags:[]},{problem:"为项目提出至少六个拒绝输入，并给出共同预期。",hint:"覆盖格式、范围、重复、容量。",solution:["空行、尾空格、-1、101、重复姓名、101 人。","还可加入内嵌零、超长行、缺失字段。","每项非零退出，stdout 为空，stderr 给错误。"],answer:"所有拒绝输入都不产生半份报告；内存和打开流应清理，原目标表保留。",difficulty:4,misconceptionTags:[]}],Sp=[{term:"编译器",definition:"把源文件翻译并配合链接生成程序的工具。",lessonId:"c-start"},{term:"终端",definition:"接收命令并显示文字结果的交互窗口。",lessonId:"c-start"},{term:"标准输出",definition:"正常程序结果所写入的流，通常连接终端。",lessonId:"c-output"},{term:"转义字符",definition:"在字符串中用反斜杠开头表达换行、引号等字符。",lessonId:"c-output"},{term:"初始化",definition:"为新建对象提供初始值。",lessonId:"c-values"},{term:"类型",definition:"规定可表示值及相应操作规则的分类。",lessonId:"c-values"},{term:"未定义行为",definition:"标准不对该行为施加要求；不能为它规定可移植输出。",lessonId:"c-arithmetic"},{term:"短路",definition:"逻辑结果已决定时不再计算右侧表达式。",lessonId:"c-if"},{term:"哨兵",definition:"专门表示终止等控制信息、而不作普通数据的值。",lessonId:"c-while"},{term:"形参",definition:"函数定义中接收实参值的局部对象。",lessonId:"c-functions"},{term:"作用域",definition:"标识符在源程序中可见的范围。",lessonId:"c-scope"},{term:"生命周期",definition:"对象存在且可按规则使用的时间段。",lessonId:"c-scope"},{term:"断言",definition:"在测试或内部契约中检查一个必须成立的条件。",lessonId:"c-debug"},{term:"下标",definition:"从零开始定位数组元素的整数偏移。",lessonId:"c-arrays"},{term:"循环不变量",definition:"每次迭代关键位置都保持的性质。",lessonId:"c-algorithms"},{term:"终止零",definition:"C 字符串中标记结尾的零字符。",lessonId:"c-strings"},{term:"缓冲区",definition:"保存读取或待输出数据的有容量存储区域。",lessonId:"c-lines"},{term:"指针",definition:"保存位置并具有目标类型的值或对象。",lessonId:"c-pointers"},{term:"解引用",definition:"经有效指针访问其目标对象。",lessonId:"c-pointers"},{term:"输出参数",definition:"成功时由函数写入调用者对象以交付结果的参数。",lessonId:"c-out-parameters"},{term:"尾后指针",definition:"指向数组末元素之后的位置，可作边界不可解引用。",lessonId:"c-pointer-arrays"},{term:"所有权",definition:"谁负责一个资源的有效使用、转移与最终释放的约定。",lessonId:"c-memory"},{term:"悬空指针",definition:"仍保存旧地址但目标对象生命周期已结束的指针。",lessonId:"c-memory"},{term:"结构体",definition:"由多个具名成员组成的记录类型。",lessonId:"c-structs"},{term:"容量",definition:"已分配可容纳的元素个数，不等于已用长度。",lessonId:"c-vector"},{term:"流",definition:"标准 I/O 使用的输入或输出序列。",lessonId:"c-files"},{term:"解析",definition:"把文本按明确协议转成结构化数据。",lessonId:"c-parse"},{term:"翻译单元",definition:"源文件及其包含内容经预处理后独立翻译的单位。",lessonId:"c-modules"},{term:"递归",definition:"函数直接或间接调用自身的组织方式。",lessonId:"c-recursion"},{term:"掩码",definition:"用于选择特定位的整数位模式。",lessonId:"c-bits"},{term:"回归测试",definition:"保留曾发现问题的用例，防止后续再次引入。",lessonId:"c-testing"},{term:"事务式加载",definition:"先在临时状态验证整批数据，成功才整体替换的加载方式。",lessonId:"c-project-input"}],qp=[{title:"建议的自学节奏",text:"按目录顺序，每节先运行第一个例子，再遮住输出手算第二个例子。练习先只看提示，写出自己的版本后核对完整解答。完成一章后，合上正文做两道回顾题。建议每次集中完成一节到两节，不把“读完”当作“会写”；指针与内存章节可以重复画对象关系图。时间长短随读者调整，不承诺固定天数掌握。"},{title:"命令与目录速查",text:"mkdir c-study 创建目录；cd c-study 进入目录；pwd 显示当前目录；ls 查看文件；cd .. 返回上层。路径有空格时加英文引号。Windows 本书用 UCRT64，Linux/macOS 用终端。命令行中的 $ 或 > 若作为提示符出现，不需要输入；本书命令块不包含提示符。找不到文件先看位置和扩展名，不反复改代码。"},{title:"C17 语法补充",text:"do { ... } while (condition); 先执行再判断，末尾有分号。?: 是按条件选择一个表达式值的运算符。+=、-=、*= 等组合赋值更新左侧对象，涉及副作用时仍需谨慎。#define 可定义宏，但宏不是函数，可能重复求值参数；本卷不展开复杂宏。const 表达只读访问意图，不保证所有场景中可作为整型常量表达式。"},{title:"常用格式速查",text:"printf：int 用 %d，unsigned int 用 %u，long 用 %ld，unsigned long long 用 %llu，size_t 用 %zu，double 用 %f / %.2f，字符用 %c，终止字符串用 %s，指针用 %p 并转成 void*。scanf：int* 用 %d，double* 用 %lf；不要把 printf 的浮点规则照抄给 scanf。格式必须匹配真实参数类型，不按“看起来一样大”猜测。"},{title:"错误速查",text:"找不到源文件：查 pwd、ls、扩展名；未声明名字：查拼写、作用域和头文件；缺少函数定义：查链接命令；重复定义：查头文件中普通定义和多个实现；程序等待：查是否等待输入、scanf 格式尾空白；结果差一：列循环下标；崩溃或不稳定：查越界、未初始化、悬空、重复释放；错误不能只靠“加一个强转”掩盖。"},{title:"验证与来源边界",text:"本书由 AI 编写，humanReviewed=false。固定示例和带代码答案由实际 C17 编译、执行、输出比较检查；概念说明另按来源规则核对。自动检查不能证明全部 C 语义、全平台一致性或教学效果。正文和题目为原创，不复制标准段落或第三方题库。具体运行环境、数量和未覆盖路径见同目录 QA.md；勘误保留版本位置和可复现输入。"}],Up={chapterReviews:Ap,exam:Np,glossary:Sp,appendices:qp},Gp=Object.assign({"../../../../packages/content/c-programming/lessons/c-algorithms.json":ln,"../../../../packages/content/c-programming/lessons/c-arithmetic.json":En,"../../../../packages/content/c-programming/lessons/c-arrays.json":Qn,"../../../../packages/content/c-programming/lessons/c-bits.json":vt,"../../../../packages/content/c-programming/lessons/c-debug.json":Bt,"../../../../packages/content/c-programming/lessons/c-files.json":re,"../../../../packages/content/c-programming/lessons/c-for.json":Te,"../../../../packages/content/c-programming/lessons/c-functions.json":Xe,"../../../../packages/content/c-programming/lessons/c-if.json":gi,"../../../../packages/content/c-programming/lessons/c-input.json":Gi,"../../../../packages/content/c-programming/lessons/c-lines.json":ss,"../../../../packages/content/c-programming/lessons/c-memory.json":js,"../../../../packages/content/c-programming/lessons/c-modules.json":Ks,"../../../../packages/content/c-programming/lessons/c-out-parameters.json":fo,"../../../../packages/content/c-programming/lessons/c-output.json":qo,"../../../../packages/content/c-programming/lessons/c-parse.json":ec,"../../../../packages/content/c-programming/lessons/c-pointer-arrays.json":wc,"../../../../packages/content/c-programming/lessons/c-pointers.json":Fc,"../../../../packages/content/c-programming/lessons/c-project-delivery.json":ur,"../../../../packages/content/c-programming/lessons/c-project-input.json":Ar,"../../../../packages/content/c-programming/lessons/c-project-plan.json":Jr,"../../../../packages/content/c-programming/lessons/c-project-records.json":$a,"../../../../packages/content/c-programming/lessons/c-recursion.json":Da,"../../../../packages/content/c-programming/lessons/c-scope.json":ad,"../../../../packages/content/c-programming/lessons/c-start.json":zd,"../../../../packages/content/c-programming/lessons/c-strings.json":Zd,"../../../../packages/content/c-programming/lessons/c-structs.json":xl,"../../../../packages/content/c-programming/lessons/c-switch.json":Rl,"../../../../packages/content/c-programming/lessons/c-testing.json":cu,"../../../../packages/content/c-programming/lessons/c-values.json":Iu,"../../../../packages/content/c-programming/lessons/c-vector.json":Hu,"../../../../packages/content/c-programming/lessons/c-while.json":hp}),u=p.chapters.flatMap(e=>e.lessons.map(i=>Gp[`../../../../packages/content/c-programming/lessons/${i}.json`])),k=Up,Mp=Object.assign({"../../../../packages/content/c-programming/project/README.md":gp,"../../../../packages/content/c-programming/project/input.c":bp,"../../../../packages/content/c-programming/project/input.h":xp,"../../../../packages/content/c-programming/project/main.c":vp,"../../../../packages/content/c-programming/project/records.c":$p,"../../../../packages/content/c-programming/project/records.h":kp,"../../../../packages/content/c-programming/project/sample.txt":_p,"../../../../packages/content/c-programming/project/test_records.c":wp}),d=(e="")=>"#/book/c-programming"+(e?"/"+e:""),L="au-c-programming-read-v1";function b({text:e,label:i="C17 · 完整程序"}){const[c,r]=m.useState("");m.useEffect(()=>r(""),[e]);async function o(){try{await navigator.clipboard.writeText(e),r("已复制")}catch{r("复制未成功，请选中代码复制")}}return n.jsxs("figure",{className:"c-code",children:[n.jsxs("figcaption",{children:[n.jsx("span",{children:i}),n.jsxs("button",{type:"button",onClick:o,"aria-label":"复制"+i,children:[n.jsx(D,{size:13}),"复制"]})]}),n.jsx("pre",{children:n.jsx("code",{children:e||"（无）"})}),n.jsx("span",{className:"c-copy-status",role:"status",children:c})]})}function C({snippet:e,output:i=!0}){return n.jsxs(n.Fragment,{children:[Object.entries(e.files).map(([c,r])=>n.jsxs("div",{children:[n.jsxs("p",{children:["运行前，在当前目录准备文件 ",n.jsx("code",{children:c}),"："]}),n.jsx(b,{text:r,label:c})]},c)),n.jsx(b,{text:e.code}),e.stdin&&n.jsx(b,{text:e.stdin,label:"标准输入 · 输入后按回车"}),i&&n.jsxs(n.Fragment,{children:[n.jsx(b,{text:e.stdout,label:"预期标准输出"}),e.stderr&&n.jsx(b,{text:e.stderr,label:"预期标准错误"}),n.jsxs("p",{className:"c-small",children:["退出状态 ",e.exitCode,"。",e.exitCode!==0?"此案例按设计拒绝输入，以非零状态结束。":""]})]})]})}function j({q:e,index:i}){return n.jsxs("article",{className:"c-question",children:[n.jsxs("span",{className:"c-eyebrow",children:["练习 ",i+1," · 难度 ",e.difficulty,"/6"]}),n.jsx("h3",{children:e.problem}),n.jsxs("details",{children:[n.jsx("summary",{children:"查看提示"}),n.jsx("p",{children:e.hint})]}),n.jsxs("details",{children:[n.jsx("summary",{children:"查看完整解答"}),n.jsx("ol",{children:e.solution.map((c,r)=>n.jsx("li",{children:c},r))}),typeof e.answer=="string"?n.jsx("p",{children:e.answer}):n.jsx(C,{snippet:e.answer})]})]})}function Rp({lesson:e}){const[i,c]=m.useState(null),r=e.learningCheck;return n.jsxs("section",{className:"c-check",children:[n.jsx("span",{className:"c-eyebrow",children:"概念检查"}),n.jsx("h2",{children:r.question}),n.jsx("div",{children:r.choices.map((o,l)=>n.jsxs("button",{type:"button","aria-pressed":i===l,onClick:()=>c(l),children:[n.jsx("span",{children:"ABC"[l]}),o]},l))}),i!==null&&n.jsxs("p",{role:"status",children:[n.jsx("strong",{children:i===r.correctIndex?"判断正确。":"再想一步。"}),r.feedback[i]]})]})}function Bp({lesson:e}){const[i,c]=m.useState(0),[r,o]=m.useState(!1),l=e.workedExamples[i];return n.jsxs("section",{className:"c-lab",children:[n.jsxs("div",{className:"c-section-heading",children:[n.jsx(O,{size:22}),n.jsx("h2",{children:"预测与对比"})]}),n.jsx("p",{children:e.interactiveVisual.prediction}),n.jsx("div",{className:"c-tabs","aria-label":"切换案例",children:e.workedExamples.map(($,f)=>n.jsxs("button",{type:"button","aria-pressed":i===f,onClick:()=>{c(f),o(!1)},children:["案例 ",f+1,"：",$.title]},f))}),n.jsx("h3",{children:l.problem}),n.jsx(C,{snippet:l.answer,output:r}),n.jsx("button",{type:"button",className:"c-primary",onClick:()=>o(!r),children:r?"遮住输出，重新预测":"核对输出与步骤"}),r&&n.jsx("ol",{children:l.steps.map(($,f)=>n.jsx("li",{children:$},f))}),n.jsx("p",{className:"c-small",children:e.interactiveVisual.caption})]})}function Dp({lesson:e}){return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"c-intuition",children:[n.jsx("span",{className:"c-eyebrow",children:"怎么理解"}),n.jsx("p",{children:e.intuition})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"本节目标"}),n.jsx("ul",{children:e.objectives.map(i=>n.jsx("li",{children:i},i))})]}),e.body.map(i=>n.jsxs("section",{children:[n.jsx("h2",{children:i.title}),n.jsx("p",{children:i.text})]},i.title)),e.setup&&n.jsxs("section",{children:[n.jsx("h2",{children:"照着完成第一次运行"}),e.setup.map(i=>n.jsxs("article",{children:[n.jsx("h3",{children:i.title}),n.jsx("p",{children:i.text}),n.jsx(b,{text:i.commands,label:"终端命令 · 按说明逐条执行"}),n.jsxs("p",{children:["检查结果：",i.expected]})]},i.title))]}),n.jsxs("section",{className:"c-definition",children:[n.jsx("h2",{children:"定义与使用条件"}),n.jsx("p",{children:e.formalDefinition.text}),n.jsx("ul",{children:e.formalDefinition.conditions.map(i=>n.jsx("li",{children:i},i))})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"逐步分析"}),n.jsx("ol",{children:e.derivation.map((i,c)=>n.jsx("li",{children:i.text},c))})]}),e.workedExamples.map((i,c)=>n.jsxs("section",{className:"c-example",children:[n.jsxs("span",{className:"c-eyebrow",children:["逐步例题 ",c+1]}),n.jsx("h2",{children:i.title}),n.jsx("p",{children:i.problem}),n.jsx("ol",{children:i.steps.map((r,o)=>n.jsx("li",{children:r},o))}),n.jsx(C,{snippet:i.answer})]},i.title)),n.jsx(Rp,{lesson:e}),n.jsxs("section",{children:[n.jsx("h2",{children:"常见错误"}),e.commonMistakes.map(i=>n.jsxs("article",{className:"c-mistake",children:[n.jsx("h3",{children:i.claim}),n.jsx("p",{children:i.correction})]},i.claim))]}),n.jsxs("div",{className:"c-next-tasks",children:[n.jsxs("a",{href:d(e.id+"/experiment"),children:["预测并对比案例 ",n.jsx(h,{size:16})]}),n.jsxs("a",{href:d(e.id+"/practice"),children:["做本节四道练习 ",n.jsx(h,{size:16})]})]})]})}function Kp({path:e}){const i=e.slice(18).replace(/^\//,""),[c,r]=i.split("/"),o=u.find(t=>t.id===c),l=o?u.indexOf(o):-1,$=["review","glossary","project"].includes(c),f=!!c&&!o&&!$,[x,_]=m.useState(!1),[w,z]=m.useState(""),[g,E]=m.useState(()=>{try{const t=JSON.parse(localStorage.getItem(L)||"[]");return Array.isArray(t)?t.filter(s=>u.some(a=>a.id===s)):[]}catch{return[]}}),[A,N]=m.useState(!1),I=m.useRef(null);m.useEffect(()=>{_(!1),document.getElementById("main")?.focus({preventScroll:!0})},[i]),m.useEffect(()=>{if(!x)return;const t=s=>{s.key==="Escape"&&(_(!1),I.current?.focus())};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[x]);function S(){if(!o)return;const t=g.includes(o.id)?g.filter(s=>s!==o.id):[...g,o.id];E(t);try{localStorage.setItem(L,JSON.stringify(t))}catch{N(!0)}}const q=o?o.title:c==="review"?"回顾与综合测试":c==="glossary"?"术语与学习指南":c==="project"?"完整项目与源码":f?"未找到这一节":p.title;return n.jsxs("div",{className:"c-book",children:[n.jsx("a",{className:"c-skip",href:"#main",onClick:t=>{t.preventDefault(),document.getElementById("main")?.focus()},children:"跳到正文"}),n.jsxs("header",{className:"c-header",children:[n.jsxs("a",{href:"#/library",className:"c-brand",children:[n.jsx("span",{children:"Au."})," AI University"]}),n.jsxs("nav",{"aria-label":"教材导航",children:[n.jsx("a",{href:d(),children:"教材首页"}),n.jsx("a",{href:d("review"),children:"回顾"}),n.jsx("a",{href:d("project"),children:"项目"}),n.jsx("a",{href:"#/downloads?book=c-programming",children:"下载与打印"})]})]}),n.jsxs("div",{className:"c-mobile",children:[n.jsx("span",{children:"C 语言 · 从零到完整程序"}),n.jsxs("button",{ref:I,type:"button","aria-expanded":x,"aria-controls":"c-directory",onClick:()=>_(!x),children:[x?n.jsx(G,{size:18}):n.jsx(M,{size:18}),"教材目录"]})]}),n.jsxs("div",{className:"c-layout",children:[n.jsxs("aside",{id:"c-directory",className:x?"c-sidebar c-open":"c-sidebar",children:[n.jsxs("a",{href:d(),className:"c-side-title",children:[n.jsx("span",{className:"c-eyebrow",children:"C PROGRAMMING / 01"}),n.jsxs("strong",{children:["从零，写出",n.jsx("br",{}),"完整程序。"]})]}),n.jsxs("p",{className:"c-small",children:["已读 ",g.length," / 32 节 · 仅保存在本机"]}),n.jsxs("label",{className:"c-filter",children:["查找章节",n.jsx("input",{type:"search",value:w,onChange:t=>z(t.target.value),placeholder:"输入标题或知识点"})]}),n.jsxs("nav",{"aria-label":"章节目录",children:[p.chapters.map(t=>{const s=t.lessons.map(a=>u.find(v=>v.id===a)).filter(a=>(a.title+a.concept).toLowerCase().includes(w.toLowerCase()));return s.length>0&&n.jsxs("div",{children:[n.jsx("h2",{children:t.title}),s.map(a=>n.jsxs("a",{href:d(a.id),"aria-current":a.id===c?"page":void 0,children:[n.jsx("span",{children:a.number}),a.title,g.includes(a.id)&&n.jsx(T,{size:12,"aria-label":"已读"})]},a.id))]},t.id)}),!u.some(t=>(t.title+t.concept).toLowerCase().includes(w.toLowerCase()))&&n.jsx("p",{children:"没有匹配章节。"}),n.jsx("a",{href:d("review"),children:"章末回顾与综合测试"}),n.jsx("a",{href:d("glossary"),children:"术语、速查与来源"}),n.jsx("a",{href:d("project"),children:"完整项目源码"})]})]}),n.jsxs("main",{id:"main",className:"c-main",tabIndex:-1,children:[n.jsxs("div",{className:"c-reading-head",children:[n.jsx("span",{className:"c-eyebrow",children:o?`SECTION ${o.number}`:"C PROGRAMMING · 中文版"}),n.jsxs("span",{children:["v",p.version," · AI 编写 · 未逐节人工审校"]})]}),n.jsx("h1",{children:q}),o&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"c-lead",children:o.concept}),n.jsx("nav",{className:"c-tabs","aria-label":"本节视图",children:[["","阅读"],["experiment","预测与对比"],["practice","独立练习"]].map(([t,s])=>n.jsx("a",{href:d(o.id+(t?"/"+t:"")),"aria-current":(r||"")===t?"page":void 0,children:s},t))}),n.jsx("div",{children:r==="practice"?n.jsxs(n.Fragment,{children:[n.jsx("p",{children:"先独立完成，再打开提示或解答。代码可下载到本机运行；自由作答由你对照参考答案自评。"}),o.practice.map((t,s)=>n.jsx(j,{q:t,index:s},s))]}):r==="experiment"?n.jsx(Bp,{lesson:o}):r?n.jsxs("p",{children:["未找到这个视图。",n.jsx("a",{href:d(o.id),children:"返回本节阅读"})]}):n.jsx(Dp,{lesson:o})},i),n.jsxs("section",{className:"c-sources",children:[n.jsx("h2",{children:"本节衔接与来源"}),n.jsxs("p",{children:["先修：",o.prerequisites.length?o.prerequisites.map(t=>{const s=u.find(a=>a.id===t);return n.jsxs("a",{href:d(t),children:[s.number," ",s.title," "]},t)}):"不要求编程基础。"]}),o.sources.map(t=>{const s=p.sources.find(a=>a.id===t);return n.jsxs("p",{children:[n.jsx("a",{href:s.url,target:"_blank",rel:"noreferrer",children:s.title}),"：",s.usage]},t)})]}),n.jsxs("button",{type:"button",className:"c-mark","aria-pressed":g.includes(o.id),onClick:S,children:[n.jsx(T,{size:16}),g.includes(o.id)?"已标记读完 · 点击取消":"标记本节已读"]}),A&&n.jsx("p",{role:"status",children:"本机存储不可用，本次标记在关闭页面后可能丢失。"}),n.jsxs("nav",{className:"c-pagination","aria-label":"上下节",children:[l>0?n.jsxs("a",{href:d(u[l-1].id),children:[n.jsx(R,{size:16}),"上一节",n.jsx("span",{children:u[l-1].title})]}):n.jsx("a",{href:d(),children:"返回教材首页"}),l<u.length-1?n.jsxs("a",{href:d(u[l+1].id),children:["下一节",n.jsx(h,{size:16}),n.jsx("span",{children:u[l+1].title})]}):n.jsxs("a",{href:d("review"),children:["完成综合测试 ",n.jsx(h,{size:16})]})]})]}),!c&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"c-lead",children:p.description}),n.jsxs("div",{className:"c-hero-code","aria-label":"程序学习的三个阶段",children:[n.jsx("span",{children:"01 编辑 main.c"}),n.jsx(h,{}),n.jsx("span",{children:"02 编译"}),n.jsx(h,{}),n.jsx("span",{children:"03 运行"})]}),n.jsx("p",{children:p.audience}),n.jsx("p",{children:p.baseline}),n.jsx("div",{className:"c-stats",children:[["8","章"],["32","节"],["64","逐步例题"],["148","练习及回顾"]].map(([t,s])=>n.jsxs("div",{children:[n.jsx("strong",{children:t}),n.jsx("span",{children:s})]},s))}),n.jsxs("a",{className:"c-primary",href:d(u[0].id),children:["从安装工具开始 ",n.jsx(h,{size:17})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"每一步都有可核对的结果"}),n.jsx("p",{children:"先读具体问题与解释，再运行完整例子。两种案例可遮住输出进行预测；练习分别提供提示和完整解答。网页中的案例是固定程序结果展示，复制到本机后可以自由修改、编译、运行。"}),n.jsx("p",{children:k.appendices[0].text})]}),p.chapters.map(t=>n.jsxs("section",{className:"c-chapter-card",children:[n.jsx("h2",{children:t.title}),n.jsx("p",{children:t.objective}),t.lessons.map(s=>{const a=u.find(v=>v.id===s);return n.jsxs("a",{href:d(s),children:[n.jsx("span",{children:a.number}),a.title,n.jsx(h,{size:14})]},s)})]},t.id)),n.jsxs("section",{children:[n.jsx("h2",{children:"完整教材与配套材料"}),n.jsxs("div",{className:"c-downloads",children:[n.jsxs("a",{href:"./C-Programming.md",download:!0,children:[n.jsx(y,{size:18}),"整本 Markdown"]}),n.jsxs("a",{href:"./c-programming.html",target:"_blank",rel:"noreferrer",children:[n.jsx(B,{size:18}),"整本阅读 / 打印 PDF"]}),n.jsxs("a",{href:"./c-programming-examples.zip",download:!0,children:[n.jsx(y,{size:18}),"例题、答案与项目源码 ZIP"]})]})]}),n.jsxs("section",{children:[n.jsx("h2",{children:"本卷边界"}),n.jsx("ul",{children:p.outOfScope.map(t=>n.jsx("li",{children:t},t))})]})]}),c==="review"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"c-lead",children:"先遮住答案独立作答，再核对思路、边界与代码输出。题目用于自评。"}),k.chapterReviews.map((t,s)=>n.jsxs("section",{children:[n.jsx("h2",{children:p.chapters[s].title}),t.questions.map((a,v)=>n.jsx(j,{q:a,index:v},v))]},t.chapterId)),n.jsxs("section",{children:[n.jsx("h2",{children:"综合测试"}),k.exam.map((t,s)=>n.jsx(j,{q:t,index:s},s))]})]}),c==="glossary"&&n.jsxs(n.Fragment,{children:[k.appendices.map(t=>n.jsxs("section",{children:[n.jsx("h2",{children:t.title}),n.jsx("p",{children:t.text})]},t.title)),n.jsx("h2",{children:"术语索引"}),n.jsx("dl",{className:"c-glossary",children:k.glossary.map(t=>n.jsxs("div",{children:[n.jsx("dt",{children:n.jsx("a",{href:d(t.lessonId),children:t.term})}),n.jsx("dd",{children:t.definition})]},t.term))}),n.jsx("h2",{children:"来源与核对用途"}),p.sources.map(t=>n.jsxs("section",{children:[n.jsx("h3",{children:n.jsx("a",{href:t.url,target:"_blank",rel:"noreferrer",children:t.title})}),n.jsx("p",{children:t.usage})]},t.id))]}),c==="project"&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"c-lead",children:"一个能够构建、运行、测试的成绩管理器。先完成第 8 章，再对照完整源码。每个文件名对应一个真实文件。"}),n.jsxs("a",{className:"c-primary",href:"./c-programming-examples.zip",download:!0,children:[n.jsx(y,{size:18}),"下载全部案例与完整项目"]}),Object.entries(Mp).sort(([t],[s])=>t.localeCompare(s)).map(([t,s])=>n.jsxs("details",{className:"c-project-file",open:t.endsWith("README.md"),children:[n.jsx("summary",{children:t.split("/").at(-1)}),n.jsx(b,{text:s,label:t.split("/").at(-1)})]},t))]}),f&&n.jsxs("p",{children:["请从左侧选择已完成的章节，或",n.jsx("a",{href:d(),children:"返回教材首页"}),"。"]}),n.jsx("footer",{className:"c-footer",children:"AI-generated · humanReviewed=false · 原创教材 CC0-1.0 / 代码 MIT。自动编译与案例检查的范围见源码 QA.md。"})]})]})]})}export{Kp as default};
