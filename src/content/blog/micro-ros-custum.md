---
title: "在STM32上部署micro-ros包括自定义消息类型"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
pubDate: "Jan 13 2025"
categories:
  - tech
tags:
  - ros
  - stm32
badge: Pin
---
# 下载

```
source /opt/ros/$ROS_DISTRO/setup.bash

mkdir uros_ws && cd uros_ws

git clone -b humble https://github.com/micro-ROS/micro_ros_setup.git src/micro_ros_setup

```

在src目录里面我们找到了有micro-ros-setup这个功能包，接着我们编译一下

```
rosdepc update && rosdepc install --from-paths src --ignore-src -y
colcon build
source install/local_setup.bash

```

# 生成静态库

> 这一步需要从github下载大量的源码，不使用代理速度很慢，失败率也很高，建议开启下代理。失败后下次生成会提示firmware已经存在，要rm这个文件夹。

```
ros2 run micro_ros_setup create_firmware_ws.sh generate_lib
```

# 自定义消息类型

回到工作空间下，现在我们应该有五个文件夹
`build` `fireware` `install` `log` `src`
其中 `fireware`是我们生成micro-ros的空间，我们在 `mcu_ws`创建我们的自定义的消息类型即可，参考官方文档
[micro-ros自定义消息类型](https://micro.ros.org/docs/tutorials/advanced/create_new_type/)

在micro_ros_stm32cubemx_utils/microros_static_library_ide/library_generation/

colcon.meta和toolchain.cmake就是我们生成静态库需要指定的配置文件了，其中colcon.meta描述了我们micro-ros的配置，toolchain.cmake描述了单片机的平台。cubemx生成静态库的教程里面，library_generation.sh会找到cubemx生成的Makefile，然后从这里面知道单片机的信息，这里我们完全可以参考给的例子自己重新写。

新建这两个文件

# 编译

退到ws目录下

```
ros2 run micro_ros_setup build_firmware.sh $(pwd)/firmware/toolchain.cmake $(pwd)/firmware/colcon.meta
```

# 头文件偏移

在firware里面建立脚本 `fix_include.sh`，里面的内容如下：

```
#!/bin/bash
######## Fix include paths  ########

BASE_PATH=build

pushd mcu_ws > /dev/null
    INCLUDE_ROS2_PACKAGES=$(colcon list | awk '{print $1}' | awk -v d=" " '{s=(NR==1?s:s d)$0}END{print s}')
popd > /dev/null

for var in ${INCLUDE_ROS2_PACKAGES}; do
    if [ -d "${BASE_PATH}/include/${var}/${var}" ]; then
        rsync -r ${BASE_PATH}/include/${var}/${var}/* $BASE_PATH/include/${var}
        rm -rf ${BASE_PATH}/include/${var}/${var}
    fi
done

```

然后执行

```
sudo chmod 777 fix_include.sh
./fix_include.sh

```

这样 `firmware/build<span> </span>`里面的内容就是我们想要的micro-ros的头文件和静态库了

原文链接[点击跳转](https://blog.csdn.net/hl1526885155/article/details/135671935?fromshare=blogdetail&sharetype=blogdetail&sharerId=135671935&sharerefer=PC&sharesource=s100330&sharefrom=from_link)
