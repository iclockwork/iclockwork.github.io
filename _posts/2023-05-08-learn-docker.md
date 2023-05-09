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
机器：47.97.4.204
版本：23.0.5
方式：python
docker-compose版本：1.29.2

### 2、应用部署
#### Nacos
* 拉取镜像：docker pull nacos/nacos-server
* 容器启动：docker run --env MODE=standalone --name nacos -d -p 18848:8848 nacos/nacos-server
* 访问：http://47.97.4.204:18848/nacos
#### Nginx
* 拉取镜像：docker pull nginx
* 容器启动：docker run -di --name nginx -p 180:80 nginx
* 访问：http://47.97.4.204:180
#### MySQL
* 拉取镜像：docker pull mysql:5.7
* 容器启动：
docker run -p 13306:3306 --name mysql --restart=always --privileged=true \
-v /home/mysql/conf:/etc/mysql/conf.d \
-v /home/mysql/logs:/logs \
-v /home/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
* 连接：47.97.4.204:13306
#### Redis
* 拉取镜像：docker pull redis
* 容器启动：docker run -di --name redis -p 16379:6379 redis
* 连接：47.97.4.204:16379
#### Tomcat
* 拉取镜像：docker pull tomcat
* 容器启动：docker run -d -p 18080:8080 --name tomcat tomcat
* 访问：http://47.97.4.204:18080/

### 3、可视化
#### portainer
* 拉取镜像：docker pull portainer/portainer
* 容器启动：docker run -d -p 18000:8000 -p 19000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
* 访问：http://47.97.4.204:18000 admin/admin123456789

### 4、Dockerfile

### 5、Docker Compose