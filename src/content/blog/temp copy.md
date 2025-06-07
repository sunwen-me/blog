---
title: ros2多机导航
description: 小坑
pubDate: 6 7 2025
categories:
  - ros2
---
注意命名空间

tf坐标发布注意remappings去掉/并添加命名空间，话题也是同样去掉/

```
        Node(
            package='tf2_ros',
            executable='static_transform_publisher',
            name='static_tf_pub_imu',
            arguments=['0', '0', '0.02', '0', '0', '1', '0', 'base_link', 'imu_link'],
            namespace='bot2',  # ✅ 添加命名空间
            remappings=[('/tf_static', 'tf_static'),('/tf', 'tf')],
        ),
```

global_costmap和local_costmap注意添加/不然会加入自己的命名空间前缀
