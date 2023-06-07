(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"构建自己的-docker-镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建自己的-docker-镜像"}},[t._v("#")]),t._v(" 构建自己的 docker 镜像")]),t._v(" "),s("p",[t._v("以前一直觉得搭建 shadowsocks 服务器挺麻烦的，步骤老多还记不住，看 github 的 wiki 上也没有 docker 安装方式的介绍，就想做一个 docker 镜像（其实 docker 上已经有好多了"),s("a",{attrs:{href:"https://hub.docker.com/search?q=shadowsocks&type=image",target:"_blank",rel:"noopener noreferrer"}},[t._v("^参考"),s("OutboundLink")],1),t._v("）。那么以下就是摸索的结果。")]),t._v(" "),s("h2",{attrs:{id:"编写-dockfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-dockfile"}},[t._v("#")]),t._v(" 编写 Dockfile")]),t._v(" "),s("p",[t._v("编写以下文件保存为 Dockfile")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("FROM centos\n\nMAINTAINER bakujin bakujin@qq.com\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Commands to update the image")]),t._v("\nRUN yum update -y\nRUN yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y python-setuptools\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# m2crypto epel-release")]),t._v("\nRUN yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y epel-release\nRUN easy_install pip\nRUN pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" shadowsocks\n\nEXPOSE "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1080")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Commands when creating a new container")]),t._v("\nCMD ssserver -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v(" -k "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":-")]),t._v("nopassword}")]),t._v(" -m aes-256-cfb --fast-open "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" -q\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("用途")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("FROM image")]),t._v(" "),s("td",[t._v("从一个基础镜像开始构建你的新的镜像，比如 python:2.7 / ubuntu")])]),t._v(" "),s("tr",[s("td",[t._v("RUN command")]),t._v(" "),s("td",[t._v("运行某条命令")])]),t._v(" "),s("tr",[s("td",[t._v("EXPOSE port")]),t._v(" "),s("td",[t._v("暴露给宿主机器的端口")])]),t._v(" "),s("tr",[s("td",[t._v("CMD command")]),t._v(" "),s("td",[t._v("在别人 docker run/start 的时候，就会运行这条命令")])]),t._v(" "),s("tr",[s("td",[t._v("${var:-word}")]),t._v(" "),s("td",[t._v("使用环境变量 var ， 如果没有定义就用默认值 word")])]),t._v(" "),s("tr",[s("td",[t._v('VOLUME ["/data"]')]),t._v(" "),s("td",[t._v("允许使用宿主机器的路径映射到 /data 上")])])])]),t._v(" "),s("h2",{attrs:{id:"构建镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[t._v("#")]),t._v(" 构建镜像")]),t._v(" "),s("p",[t._v("进入到包含上述 Dockfile 的目录，运行：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker build -t shadowsocks:0.1 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),s("ul",[s("li",[t._v("-t ：表示这个镜像的名称和 tag，可以写多个-t，如 “-t shykes/myapp:1.0.2 -t shykes/myapp:latest”")]),t._v(" "),s("li",[t._v("-f ：设置 Dockerfile 的路径"),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("最后这个. 千万不要漏了")])]),t._v("\n之后 docker 会先下载基础镜像，一步一步运行 RUN command，每一步它都会保存一个临时的镜像，如果存在了的话，那一句 command 就不会再运行了。整个运行过程都有步骤提示，等到步骤完成就可以用 dokcer images 看到刚刚自己建立的镜像了。")])]),t._v(" "),s("h2",{attrs:{id:"上传镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传镜像"}},[t._v("#")]),t._v(" 上传镜像")]),t._v(" "),s("p",[t._v("这里可以选择上传的阿里云的镜像服务或者 docker 官方的库。")]),t._v(" "),s("h2",{attrs:{id:"拉取创建容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取创建容器"}},[t._v("#")]),t._v(" 拉取创建容器")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("docker run -d --restart always -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8443")]),t._v(":8443 -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("AgoodPW qxstudio/shadowsocks:1.2\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);