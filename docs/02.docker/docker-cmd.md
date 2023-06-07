# 常用 Docker 命令

## mysql

- docker run -p 3306:3306 -v /home/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=pass12WD --restart always --name mysql3306 -d
- docker run --name mysql2 -e MYSQL_ROOT_PASSWORD=pass12WD -p 3306:3306 -v /home/mysql:/var/lib/mysql -d mysql:5.6 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

## mssql

- docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=pass12WD' -p 1433:1433 -v /home/mssql:/var/opt/mssql --restart always -d microsoft/mssql-server-linux:2017-latest

## redis

- docker run -d --name myredis -p 6379:6379 redis --requirepass "mypassword"

## rabbitmq

- docker run -d --name myrabbitmq -p 5673:5672 -p 15673:15672 -e RABBITMQ_DEFAULT_USER=user -e RABBITMQ_DEFAULT_PASS=password rabbitmq:3.7.7-management
- docker.io/rabbitmq:latest
- client 端通信口 5672 管理口 15672 server 间内部通信口 25672 erlang 发现口：4369

## gitlab

- docker run -d --hostname gitlab --publish 4443:443 --publish 4040:80 --publish 4022:22 --name gitlab --restart always --volume /d/VM/Docker/Gitlab/data:/var/opt/gitlab gitlab/gitlab-ce
- docker run --detach --hostname my.gitlab.com --publish 443:443 --publish 80:80 --publish 22:22 --name gitlab --restart always --volume /srv/gitlab/config:/etc/gitlab --volume /srv/gitlab/logs:/var/log/gitlab --volume /srv/gitlab/data:/var/opt/gitlab gitlab/gitlab-ce:latest
- docker run --detach --hostname my.gitlab.com --publish 8443:443 --publish 80:80 --publish 22:22 --name gitlab-cn --restart always twang2218/gitlab-ce-zh:10.6.4
- docker run --detach --hostname git.bebefocus.cn --publish 10443:443 --publish 10080:80 --publish 22:22 --name gitlab-cn --restart always --volume /srv/gitlab/config:/etc/gitlab --volume /srv/gitlab/logs:/var/log/gitlab --volume /srv/gitlab/data:/var/opt/gitlab -e 'GITLAB_HOST=git.bebefocus.cn' -e 'GITLAB_PORT=80' twang2218/gitlab-ce-zh:latest

- docker run --detach --hostname git.chain.bebefocusmall.com --publish 8080:80 --publish 22:22 --name gitlab2 --restart always --volume /home/gitlab/config:/etc/gitlab --volume /home/gitlab/logs:/var/log/gitlab --volume /home/gitlab/data:/var/opt/gitlab -e 'GITLAB_HOST=git.chain.bebefocusmall.com' gitlab/gitlab-ce:latest

## 进入

- docker exec -it 775c7c9ee1e1 /bin/bash

## 清理镜像

- docker image prune -a

## 拷贝

- docker cp contain:/ /
