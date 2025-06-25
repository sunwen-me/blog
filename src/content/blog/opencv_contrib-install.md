---
title: opencv_contrib的安装
description: opencv_contrib的安装教程
pubDate: 3 3 2025
categories:
  - opencv
---
# 下载源码

```
git clone https://github.com/opencv/opencv.git
cd opencv
git clone https://github.com/opencv/opencv_contrib.git

mkdir build
cd build
cmake -D CMAKE_BUILD_TYPE=RELEASE -D OPENCV_ENABLE_NONFREE=ON -D OPENCV_EXTRA_MODULES_PATH=../opencv_contrib/modules -D WITH_GTK=ON ..
# 如果OpenCV编译报各种错，尝试执行以下指令
# cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local -D WITH_TBB=ON -D BUILD_NEW_PYTHON_SUPPORT=ON -D WITH_V4L=ON -D WITH_QT=ON -D WITH_OPENGL=ON -D WITH_GTK=ON -DBUILD_TIFF=ON  -D OPENCV_EXTRA_MODULES_PATH=../opencv_contrib/modules -D  OPENCV_ENABLE_NONFREE=ON ..
sudo make
sudo make install

```
