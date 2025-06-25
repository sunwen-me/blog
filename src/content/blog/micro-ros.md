---
title: "micro-ros stm32工程搭建"
description: "stm32的micro-ros工程搭建"
pubDate: "Jan 13 2025"
categories:
  - tech
tags:
  - ros
  - stm32
badge: Pin
---
# micro-ros库编译

**ros版本：humble**

**首先git clone静态库**

```
git clone https://github.com/micro-ROS/micro_ros_stm32cubemx_utils -b humble
```

**修改micro_ros_stm32cubemx_utils/microros_static_library/library_generation中的toolchain.cmake 添加**

```
set(FLAGS "-O2 -ffunction-sections -fdata-sections -fno-exceptions -mcpu=cortex-m4 -mfpu=fpv4-sp-d16 -mfloat-abi=hard -nostdlib -mthumb --param max-inline-insns-single=500 -DF_CPU=84000000L -D'RCUTILS_LOG_MIN_SEVERITY=RCUTILS_LOG_MIN_SEVERITY_NONE'" CACHE STRING "" FORCE)
```

**其中加入 mfpu=fpv4-sp-d16 -mfloat-abi=hard 支持硬件浮点编译 -DF_CPU=84000000L 说明 -D 选项 添加宏定义，相当于在全局增加了 #define F_CPU 84000000L **

**接着在micro_ros_stm32cubemx_utils文件夹外输入**

```
docker pull microros/micro_ros_static_library_builder:humble docker run -it --rm -v $(pwd):/project --env MICROROS_LIBRARY_FOLDER=micro_ros_stm32cubemx_utils/microros_static_library microros/micro_ros_static_library_builder:humble 
```

# 工程创建

**创建STM32CubeMX项目选择芯片为喜欢的芯片**

**正常创建工程配置正常填写工程名称的路径**

**Toolchain/IDE配置：STM32CubeIDE**

**Code Generate 勾选 Generate peripheral initialization as a pair of ".cl.h' files per peripheral**

**时钟配置**

**开启sw调试**

**Timebase Source 勾选TIM**

**设置外设**

**配置默认任务堆栈大小位3000**

**生成CubeIDE工程**

**复制文件**

**复制micro_ros_stm32cubemx_utils\extra_sources文件夹到工程的Core文件夹**
