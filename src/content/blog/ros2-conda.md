---
title: ros2与conda环境
description: ros2与conda环境的配置与使用
pubDate: 3 7 2025
categories:
  - ros
  - python
---
# 如何ros2和conda共存设置

在.bashrc环境变量中删除conda有关的环境变量并添加

```
alias activate="source /home/sw/Software/miniconda3/bin/activate"
```

如果没有使用 anaconda 的可执行文件，那么可以尝试添加：

```python
[build_scripts] 
executable=/home/sw/Software/anaconda/envs/yolo_ros/bin/python3
```

到包中的文件。`setup.cfg`


```
conda install -c conda-forge gcc=12.1.0
```
