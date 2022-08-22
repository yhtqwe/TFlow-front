(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{401:function(t,a,s){"use strict";s.r(a);var r=s(27),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("wflow工作流是一个简单易用，面向普通用户的工作流系统，用户只需要接受简单的教学即可上手使用，自行创建所需的日常审批流程。")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("strong",[t._v("👀起因：")])]),t._v(" "),s("p",[t._v("第一次接触工作流是由于当时公司业务部门提了一个需求，希望可以实现新产品从提出意向到开发结束的整个生命周期流程的管控，里面包含各级人员和领导等不同角色的审批，任务交接流转。于是网上搜索了一圈，发现了 "),s("code",[t._v("activiti")]),t._v("、"),s("code",[t._v("flowable")]),t._v(" 这两个开源的流程引擎，功能上很强大，能满足需求，但是流程设计器上手真的比较困难，这对于普通用户来说没有经过专业人员进行辅助或者专门培训，基本很难用起来。当时公司用的是某D办公，自带的审批功能在操作一番后感觉相当的友好，遂萌生实现一套类似系统的想法。")]),t._v(" "),s("h2",{attrs:{id:"一起交流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一起交流"}},[t._v("#")]),t._v(" 一起交流")]),t._v(" "),s("p",[t._v("👩‍👦‍👦大家可扫码加入交流群， 如果二维码失效了，可以加我微信 "),s("code",[t._v("willianfu_")]),t._v(" 备注"),s("code",[t._v("wflow")]),t._v(" 拉你入群")]),t._v(" "),s("p",[s("img",{staticStyle:{zoom:"20%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/97bc3e87a714b783cd3b6cad936e5607.png",alt:"image-20220724230831144"}}),t._v(" "),s("img",{staticStyle:{zoom:"20%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/ed2fd88694486bc83c56e08b83d44205.png",alt:"image-20220724230928104"}})]),t._v(" "),s("p",[s("strong",[t._v("未完成/待完善的功能")])]),t._v(" "),s("ul",[s("li",[t._v("表单明细表组件数据绑定，校验")]),t._v(" "),s("li",[t._v("分栏布局组件内表单数据绑定、校验")]),t._v(" "),s("li",[t._v("提交表单部分，分栏、明细表及其他组件回显校验")]),t._v(" "),s("li",[t._v("提交表单时根据人员设置限制表单权限")]),t._v(" "),s("li",[t._v("提交时根据审批流程设计渲染已确定的执行流程步骤及指定人员")])]),t._v(" "),s("h2",{attrs:{id:"起步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),s("h3",{attrs:{id:"下载并启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载并启动项目"}},[t._v("#")]),t._v(" 下载并启动项目")]),t._v(" "),s("p",[t._v("**注意：**作者的开发环境是 "),s("code",[t._v("node14.18.0")]),t._v(" 、"),s("code",[t._v("vuecli 4.1.1")]),t._v("、"),s("code",[t._v("edge浏览器")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#克隆源码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/willianfu/jw-workflow-engine.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" jw-workflow-engine\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改main.js中后端接口地址，破坏这个表达式，使其为公开的服务器IP")]),t._v("\nVue.prototype.BASE_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://'")]),t._v(" + "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process.env.NODE_ENV "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'development-'")]),t._v(" ? "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"47.100.202.245"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#小弱鸡服务器，大家不要造垃圾数据，且珍惜😘")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run serve\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("📢 如果启动报错请检查错误信息看看是否是依赖版本和当前所安装的 node 版本不兼容，自行安装兼容版本的依赖")]),t._v(" "),s("p",[t._v("👍 启动成功后访问 http://localhost:88 即可打开页面")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/3da7567c3f36a4d2178d310390bfc1f2.png",alt:"image-20220720094501757"}})]),t._v(" "),s("h2",{attrs:{id:"操作教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作教程"}},[t._v("#")]),t._v(" 操作教程")]),t._v(" "),s("h3",{attrs:{id:"工作区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作区"}},[t._v("#")]),t._v(" 工作区")]),t._v(" "),s("p",[t._v("点击工作区，进入审批列表，按分组可以进行展开折叠")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/1a9bd706586f6cbbc64721ba152edd1a.png",alt:"image-20220724225022126"}})]),t._v(" "),s("h4",{attrs:{id:"发起审批"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发起审批"}},[t._v("#")]),t._v(" 发起审批")]),t._v(" "),s("p",[t._v("点击对应项可弹出提交表单窗口")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/5bfb33c6bfd47a327ad3dda3e0d7771f.png",alt:"image-20220724225156405"}}),t._v(" "),s("h3",{attrs:{id:"管理后台"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理后台"}},[t._v("#")]),t._v(" 管理后台")]),t._v(" "),s("p",[t._v("从首页进入管理后台，展示出来的是所有已经设计好的审批列表")]),t._v(" "),s("h4",{attrs:{id:"审批列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审批列表"}},[t._v("#")]),t._v(" 审批列表")]),t._v(" "),s("p",[t._v("审批列表按分组展示，点击每个分组右侧可对分组进行编辑及删除，如果分组内有表单，则删除分组后内部表单会被移动到其他分组（默认）")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/91d4d8cdaf632f67916846a69e18d508.png",alt:"image-20220724225423708"}})]),t._v(" "),s("h4",{attrs:{id:"分组及表单拖拽排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分组及表单拖拽排序"}},[t._v("#")]),t._v(" 分组及表单拖拽排序")]),t._v(" "),s("h5",{attrs:{id:"分组排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分组排序"}},[t._v("#")]),t._v(" 分组排序")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/e509e35de64a32b949d8cbd48b49fe2a.png",alt:"image-20220724225749669"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/bd6f2801c0e87eda065a1bf072d693d2.png",alt:"image-20220724225853154"}})]),t._v(" "),s("h5",{attrs:{id:"表单排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单排序"}},[t._v("#")]),t._v(" 表单排序")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/b820afc407597c6c8900043c62bd4c65.png",alt:"image-20220724230032985"}})]),t._v(" "),s("h3",{attrs:{id:"表单流程设计器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单流程设计器"}},[t._v("#")]),t._v(" 表单流程设计器")]),t._v(" "),s("p",[t._v("点击"),s("code",[t._v("新建表单/编辑")]),t._v(" 进入"),s("code",[t._v("审批表单流程设计器")])]),t._v(" "),s("h4",{attrs:{id:"基础设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础设置"}},[t._v("#")]),t._v(" 基础设置")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/9b9a47e62cf4d52acaa7eaffa319f688.png",alt:"image-20220724231222926"}})]),t._v(" "),s("h4",{attrs:{id:"表单设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表单设计"}},[t._v("#")]),t._v(" 表单设计")]),t._v(" "),s("blockquote",[s("p",[t._v("表单设计是用来设计发起审批流程时填写的表单的，拖拽式交互")])]),t._v(" "),s("p",[t._v("从左侧组件库选取组件放置到中间设计区域，点击设计区组件，可在右侧面板配置组件的设置项")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/096e0dacdbc8ced5db475517c325601c.png",alt:"image-20220724222124900"}})]),t._v(" "),s("h5",{attrs:{id:"分栏布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分栏布局"}},[t._v("#")]),t._v(" 分栏布局")]),t._v(" "),s("blockquote",[s("p",[t._v("普通组件是独占一行的，假设我们要让2个组件并排显示，就需要使用分栏了")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/a91a26ab472f42f1d7ebf598641929e4.png",alt:"image-20220724233902503"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/8e195c2275b19067f21bfc2c48bb1771.png",alt:"image-20220724231814888"}}),t._v(" "),s("p",[t._v("**❗ 注意事项：**分栏组件会自动按每2个组件为一行进行布局，假设分栏组件内放了5个子组件，那么前四个会两两占用一列，"),s("strong",[t._v("剩下多的一个会独占一行")])]),t._v(" "),s("p",[s("strong",[t._v("分栏组件内可以放置其他组件，也可以放置分栏组件进行嵌套！！！！！")])]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/67cb9c1292785061f49229ae8e5e1163.png",alt:"image-20220724233253171"}}),t._v(" "),s("h5",{attrs:{id:"明细表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#明细表"}},[t._v("#")]),t._v(" 明细表")]),t._v(" "),s("blockquote",[s("p",[t._v("有时候我们需要提交一系列数据，这些数据有表格的性质，这时候可以使用明细表组件")])]),t._v(" "),s("p",[t._v("明细表类似分栏容器，可以在内部放置其他组件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/a85f8d76572255ee017a36af0ba1f962.png",alt:"image-20220724234359498"}})]),t._v(" "),s("h4",{attrs:{id:"审批流程设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审批流程设计"}},[t._v("#")]),t._v(" 审批流程设计")]),t._v(" "),s("blockquote",[s("p",[t._v("审批流程设计，顾名思义，用来设计用户提交的表单流程，需要经过哪些人的审批流转")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/906bfdf30712a132c9b8c906e56e6eea.png",alt:"image-20220724234519380"}}),t._v(" "),s("p",[s("strong",[t._v("支持多种类型节点")])]),t._v(" "),s("h5",{attrs:{id:"发起人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发起人"}},[t._v("#")]),t._v(" 发起人")]),t._v(" "),s("blockquote",[s("p",[t._v("也就是发起，提交这个流程的人员")])]),t._v(" "),s("h5",{attrs:{id:"审批人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#审批人"}},[t._v("#")]),t._v(" 审批人")]),t._v(" "),s("blockquote",[s("p",[t._v("当任务流转到审批人时，这个节点设置的相关人员需要对这个提交的流程进行审批（同意/驳回）")])]),t._v(" "),s("h5",{attrs:{id:"抄送人"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抄送人"}},[t._v("#")]),t._v(" 抄送人")]),t._v(" "),s("blockquote",[s("p",[t._v("当流程到达抄送人节点时，将会通知到相关人员")])]),t._v(" "),s("h5",{attrs:{id:"条件分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件分支"}},[t._v("#")]),t._v(" 条件分支")]),t._v(" "),s("blockquote",[s("p",[t._v("有时候我们的流程需要动态的情况，根据一些条件进行不同的处理流程，这时候就可以添加条件分支，设置进入每个流程分支的条件")])]),t._v(" "),s("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://pic.rmb.bdstatic.com/bjh/e060d19a925bee4f4d10382d2b3a770e.png",alt:"image-20220724235146294"}}),t._v(" "),s("h5",{attrs:{id:"并行分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并行分支"}},[t._v("#")]),t._v(" 并行分支")]),t._v(" "),s("blockquote",[s("p",[t._v("有时候我们需要审批流程不需要条件选择，同时进行几个步骤，这时候可以利用并行分支，当所有分支的步骤都结束后才会进行到下一步")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pic.rmb.bdstatic.com/bjh/4251844922f6ae63cec916ffde02968c.png",alt:"image-20220724235422400"}})]),t._v(" "),s("h5",{attrs:{id:"延时处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#延时处理"}},[t._v("#")]),t._v(" 延时处理")]),t._v(" "),s("blockquote",[s("p",[t._v("有时候我们需要让整个流程卡在某个地方，等待一段时间再继续，这时候可以在需要等待的地方插入延时处理节点")])]),t._v(" "),s("h5",{attrs:{id:"触发器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发器"}},[t._v("#")]),t._v(" 触发器")]),t._v(" "),s("blockquote",[s("p",[t._v("本节点属于扩展功能，流程在到达此处时会触发一个动作，应当由开发人员使用，用来打通与其他系统的交互")])]),t._v(" "),s("p",[t._v("通过Http请求，来动态修改表单数据或者将表单数据传递给外部系统")])])}),[],!1,null,null,null);a.default=e.exports}}]);