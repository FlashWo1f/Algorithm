## 双指针技巧秒杀7道数组
#### 快慢指针技巧
例题 26 删除有序数组中的重复项：循环遍历数组，快指针指向当前循环项，慢指针指向最后一个不重复的元素
例题 27 删除元素也是类同。
例题 83 删除排序链表中的重复项：想法一模一样只不过把数组赋值操作变成操作指针而已。
#### 左右指针技巧
1. 二分查找
2. 两数之和
3. 反转数组
4. 回文串判断

例题 5 最长回文子串：跟一般左右指针不太一样，一般是从两端往内，它是从内往两端

#### 前缀和数组 区域和检索
一维：常规地，如果在 sumRange 中去计算 left -> right 的和，在 sumRange 调用次数较大的时候会出现重复计算问题。所以在构造函数中将每一项前面的累和计算出来。将时间复杂度 O(n) -> O(1)
二维：要注意任意子矩阵的元素和可以转化成它周边几个大矩阵的元素和的运算：目标矩阵之和由四个相邻矩阵运算获得