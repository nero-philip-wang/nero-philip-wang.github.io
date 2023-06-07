# 构建自己的 docker 镜像

[^参考]: https://hub.docker.com/search?q=shadowsocks&type=image
[^dockerfile reference]: https://docs.docker.com/v17.09/engine/reference/builder/

以前一直觉得搭建 shadowsocks 服务器挺麻烦的，步骤老多还记不住，看 github 的 wiki 上也没有 docker 安装方式的介绍，就想做一个 docker 镜像（其实 docker 上已经有好多了[^参考]）。那么以下就是摸索的结果。

## 编写 Dockfile

编写以下文件保存为 Dockfile

```bash
FROM centos

MAINTAINER bakujin bakujin@qq.com

# Commands to update the image
RUN yum update -y
RUN yum install -y python-setuptools
# m2crypto epel-release
RUN yum install -y epel-release
RUN easy_install pip
RUN pip install shadowsocks

EXPOSE 8443 1080
# Commands when creating a new container
CMD ssserver -p 8443 -k ${password:-nopassword} -m aes-256-cfb --fast-open true -q
```

| 命令             | 用途                                                         |
| ---------------- | ------------------------------------------------------------ |
| FROM image       | 从一个基础镜像开始构建你的新的镜像，比如 python:2.7 / ubuntu |
| RUN command      | 运行某条命令                                                 |
| EXPOSE port      | 暴露给宿主机器的端口                                         |
| CMD command      | 在别人 docker run/start 的时候，就会运行这条命令             |
| \${var:-word}    | 使用环境变量 var ， 如果没有定义就用默认值 word              |
| VOLUME ["/data"] | 允许使用宿主机器的路径映射到 /data 上                        |

## 构建镜像

进入到包含上述 Dockfile 的目录，运行：

```bash
docker build -t shadowsocks:0.1 .
```

- -t ：表示这个镜像的名称和 tag，可以写多个-t，如 “-t shykes/myapp:1.0.2 -t shykes/myapp:latest”
- -f ：设置 Dockerfile 的路径
  ::: warning
  最后这个. 千万不要漏了
  :::
  之后 docker 会先下载基础镜像，一步一步运行 RUN command，每一步它都会保存一个临时的镜像，如果存在了的话，那一句 command 就不会再运行了。整个运行过程都有步骤提示，等到步骤完成就可以用 dokcer images 看到刚刚自己建立的镜像了。

## 上传镜像

这里可以选择上传的阿里云的镜像服务或者 docker 官方的库。

## 拉取创建容器

```bash
docker run -d --restart always -p 8443:8443 -e password=AgoodPW qxstudio/shadowsocks:1.2
```
