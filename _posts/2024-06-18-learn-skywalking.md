---
layout: post
title: "SkyWalking学习记录"
categories: 学习
tags: 链路追踪 SkyWalking
author: Percy
---

* content
{:toc}

### 1、应用部署
#### skywalking-oap
```
* 拉取镜像：
```sh
docker pull apache/skywalking-oap-server:9.7.0
```
* 容器启动：
```sh
docker run -d --name=skywalking-oap --restart=always -p 11800:11800 -p 12800:12800 \
-e JAVA_OPTS="-Xms128m -Xmx512m" \
-e SW_CORE_RECORD_DATA_TTL=7 \
-e SW_CORE_METRICS_DATA_TTL=7 \
-e SW_STORAGE=elasticsearch \
-e SW_STORAGE_ES_CLUSTER_NODES=47.97.4.204:9200 \
-e TZ=Asia/Shanghai \
apache/skywalking-oap-server:9.7.0
```
#### skywalking-ui
```
* 拉取镜像：
```sh
docker pull apache/skywalking-ui:9.7.0
```
* 容器启动：
```sh
docker run -d --name=skywalking-ui --restart=always -p 18080:18080 \
-e SW_SERVER_PORT=18080 \
-e SW_OAP_ADDRESS=http://47.97.4.204:12800 \
-e TZ=Asia/Shanghai \
apache/skywalking-ui:9.7.0
```
* 访问：http://47.97.4.204:18080