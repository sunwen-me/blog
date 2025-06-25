---
title: ceres库源码安装
description: ceres库源码安装
pubDate: 3 3 2025
categories:
  - ros
  - slam
---
# 1.安装需要的库

```
# CMake
sudo apt-get install cmake
# google-glog + gflags
sudo apt-get install libgoogle-glog-dev libgflags-dev
# Use ATLAS for BLAS & LAPACK
sudo apt-get install libatlas-base-dev
# Eigen3
sudo apt-get install libeigen3-dev
# SuiteSparse (optional)
sudo apt-get install libsuitesparse-dev
```

# 2.下载代码并编译安装

```
git clone --recurse-submodules https://github.com/ceres-solver/ceres-solver
cd ceres-solver
mkdir build
cd build
cmake ..
make -j3
make test
# Optionally install Ceres, it can also be exported using CMake which
# allows Ceres to be used without requiring installation, see the documentation
# for the EXPORT_BUILD_DIR option for more information.
sudo make install
```
