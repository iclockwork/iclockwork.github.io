---
layout: post
title: "Prometheus学习记录"
categories: 学习
tags: 运维 监控 Prometheus
author: Percy
---

* content
{:toc}

### 1、插件
#### node-exporter
* 拉取镜像：
```sh
docker pull prom/node-exporter
```
* 容器启动：
```sh
docker run -d --name node-exporter --restart=always -p 39100:9100 -v "/proc:/host/proc:ro" -v "/sys:/host/sys:ro" -v "/:/rootfs:ro" prom/node-exporter
```
* 访问：http://47.97.4.204:39100/metrics
#### cadvisor
* 拉取镜像：
```sh
docker pull google/cadvisor
```
* 容器启动：
```sh
docker run -d --name=cadvisor --restart=always -p 38080:8080 \
-v /:/rootfs:ro \
-v /var/run:/var/run:ro \
-v /sys:/sys:ro \
-v /var/lib/docker/:/var/lib/docker:ro \
-v /dev/disk/:/dev/disk:ro \
google/cadvisor
```
* 访问：http://47.97.4.204:38080/metrics
#### mysqld-exporter
* 拉取镜像：
```sh
docker pull prom/mysqld-exporter:v0.14.0
```
* 容器启动：
```sh
docker run -d --name mysqld-exporter-13306 --restart=always -p 39104:9104 -e DATA_SOURCE_NAME="exporter:123456@(127.0.0.1:13306)/" prom/mysqld-exporter:v0.14.0
```
* 访问：http://47.97.4.204:39104/metrics
#### redis_exporter
* 拉取镜像：
```sh
docker pull oliver006/redis_exporter
```
* 容器启动：
```sh
docker run -d --name redis-exporter-16379 --restart=always -p 39121:9121 oliver006/redis_exporter --redis.addr redis://127.0.0.1:16379
```
* 访问：http://47.97.4.204:39104/metrics
### 2、Grafana
* 创建数据存储目录：
```sh
mkdir /home/grafana-storage
```
* 设置权限
```sh
chmod 777 -R /home/grafana-storage
```
* 拉取镜像：
```sh
docker pull grafana/grafana
```
* 容器启动：
```sh
docker run -d --name grafana --restart=always -p 33000:3000 -v /home/grafana-storage:/var/lib/grafana grafana/grafana
```
* 访问：http://47.97.4.204:33000
### 3、本体
* 创建配置文件目录：
```sh
mkdir /home/prometheus
```
* 创建配置文件：prometheus.yml
```yaml
# my global config
global:
  scrape_interval:     60s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 60s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
# - "first_rules.yml"
# - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  - job_name: 'Prometheus'
    static_configs:
      - targets: ['47.97.4.204:39090']
        labels:
          instance: prometheus

  - job_name: 'Grafana'
    static_configs:
      - targets: ['47.97.4.204:33000']
        labels:
          instance: grafana

  - job_name: node-local
    static_configs:
      - targets: ['47.97.4.204:39100']
        labels:
          instance: node-exporter

  - job_name: cadvisor-local
    static_configs:
      - targets: ['47.97.4.204:38080']
        labels:
          instance: cAdvisor

  - job_name: mysqld-local-13306
    static_configs:
      - targets: ['47.97.4.204:39104']
        labels:
          instance: mysqld-exporter

  - job_name: redis-local-16379
    static_configs:
      - targets: ['47.97.4.204:39121']
        labels:
          instance: redis-exporter
```
* 拉取镜像：
```sh
docker pull prom/prometheus
```
* 容器启动：
```sh
docker run  -d --name prometheus --restart=always -p 39090:9090 -v /home/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
```
* 访问：http://47.97.4.204:39090/targets