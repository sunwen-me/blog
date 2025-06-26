---
title: 串口设备/dev/ttyUSB0无法发现
description: 常规问题
pubDate: 6 14 2025
categories:
  - ubuntu
---



串口设备/dev/ttyUSB0无法发现,卸载brltty，重新插拔串口模块就正常了！

```
sudo apt-get remove brltty
```
