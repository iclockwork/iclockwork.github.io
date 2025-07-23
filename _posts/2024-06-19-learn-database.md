---
layout: post
title: "ELK学习记录"
categories: 学习
tags: ELK Elasticsearch Logstash Kibana
author: Percy
---

* content
{:toc}

### 1、应用部署
#### ShardingSphere-Proxy
* 创建目录：
```sh
mkdir -p /home/shardingsphere-proxy/conf
mkdir -p /home/shardingsphere-proxy/ext-lib
```
* 复制mysql-connector-j-8.0.33.jar到/home/shardingsphere-proxy/ext-lib
* 复制配置文件到/home/shardingsphere-proxy/conf
* 修改服务器配置文件/home/shardingsphere-proxy/conf/server.yaml
* 修改分片配置文件/home/shardingsphere-proxy/conf/config-sharding.yaml
* 拉取镜像：
```sh
docker pull apache/shardingsphere-proxy:5.4.0
```
* 容器启动：
```sh
docker run -d --name=shardingsphere-proxy --restart=always -p 3307:3307 \
-v /home/shardingsphere-proxy/conf:/opt/shardingsphere-proxy/conf \
-v /home/shardingsphere-proxy/ext-lib:/opt/shardingsphere-proxy/ext-lib \
-e JVM_OPTS="-Djava.awt.headless=true" \
-e TZ=Asia/Shanghai \
apache/shardingsphere-proxy:5.4.0
```
* 如果遇到XA_RECOVER_ADMIN错误，需赋权：
```sql
GRANT XA_RECOVER_ADMIN ON *.* TO `data-center`@'%';
FLUSH PRIVILEGES;
```
* 连接测试
```sh
mysql -h 47.97.4.204 -P 3307 -u root -p

show databases;
```