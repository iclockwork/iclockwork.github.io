---
layout: post
title: "Docker学习记录"
categories: 学习
tags: 运维 Docker
author: Percy
---

* content
{:toc}

### 1、安装
* 机器：47.97.4.204
* 版本：23.0.5
* 方式：python
* docker-compose版本：1.29.2
### 2、应用部署
#### Nacos
* 拉取镜像：
```sh
docker pull nacos/nacos-server
```
* 容器启动：
```sh
docker run --env MODE=standalone --name nacos -d -p 18848:8848 nacos/nacos-server
```
* 访问：http://47.97.4.204:18848/nacos
#### Nginx
* 拉取镜像：
```sh
docker pull nginx:1.22.1
```
* 容器启动：
```sh
docker run --name nginx -p 80:80 -d nginx:1.22.1
```
* 复制文件：
```sh
docker cp nginx:/etc/nginx/nginx.conf /home/nginx/nginx.conf
docker cp nginx:/etc/nginx/conf.d/ /home/nginx/conf.d/
docker cp nginx:/usr/share/nginx/html/ /home/nginx/html/
docker cp nginx:/var/log/nginx/ /home/nginx/logs/
```
* 容器停止、删除：
```sh
docker stop nginx
docker rm nginx
```
* 容器启动：
```sh
docker run -p 80:80 -p 8889:8889 \
-v /home/nginx/nginx.conf:/etc/nginx/nginx.conf \
-v /home/nginx/logs:/var/log/nginx \
-v /home/nginx/html:/usr/share/nginx/html \
-v /home/nginx/conf.d:/etc/nginx/conf.d \
-v /etc/localtime:/etc/localtime \
--name nginx \
--restart=always \
-d nginx:1.22.1
```
* 访问：http://47.97.4.204:80
#### MySQL
* 拉取镜像：
```sh
docker pull mysql:5.7
```
* 容器启动：
```sh
docker run -p 13306:3306 --name mysql --restart=always --privileged=true \
-v /home/mysql/conf:/etc/mysql/conf.d \
-v /home/mysql/logs:/logs \
-v /home/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
```
大多数情况下，启动数据库容器，都需要将数据卷挂载到容器外，这样，容器被删除了，数据也不会丢失。
* 连接：47.97.4.204:13306
#### Postgres
* 拉取镜像：
```sh
docker pull postgres
```
* 容器启动：
```sh
docker run -d -p 15432:5432 --name postgres -v /home/postgresql/data:/var/lib/postgresql/data --restart=always --privileged=true -e POSTGRES_PASSWORD=123456 -e ALLOW_IP_RANGE=0.0.0.0/0 postgres 
```
* 连接：47.97.4.204:15432
#### Redis
* 拉取镜像：
```sh
docker pull redis
```
* 容器启动：
```sh
docker run -di --name redis -p 16379:6379 redis
```
* 连接：47.97.4.204:16379
#### Tomcat
* 拉取镜像：
```sh
docker pull tomcat
```
* 容器启动：
```sh
docker run -d -p 18080:8080 --name tomcat tomcat
```
* 访问：http://47.97.4.204:18080
### 3、可视化
#### portainer
* 拉取镜像：
```sh
docker pull portainer/portainer
```
* 容器启动：
```sh
docker run -d -p 18000:8000 -p 19000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```
* 访问：http://47.97.4.204:19000 admin/admin123456789
### 4、Dockerfile
用于构建镜像，类似maven pom文件，IDEA有插件支持远程构建。
### 5、Docker Compose
使用YML文件定义和运行多容器应用。
### 6、Docker Swarm
容器编排
### 7、其它
* 注意容器时区，启动加参数
```sh
-v /etc/localtime:/etc/localtime
```
* 进入容器
```sh
docker exec -it 容器ID /bin/sh
```
