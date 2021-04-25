# Algorithm
Algorithm  LeetCode


## 链表

链表的特征就是 `唯一指向性`
很多应用都是利用了链表这一特性。


### 套路之快慢指针

由于链表不知道其长度且是否有环，快慢指针在很多场景得到价值体现。


## leetcode 202.快乐数

咋一看题目描述跟链表毫无相干，但是实际上用到了链表的 `唯一指向性` 的思想。每个数对应的下一个数都是唯一的，所以只需要判断是不是一个环，如果不是环就最终结果到1，也就是快乐数

不用担心数字会越来越大，即使范围内可得到最大的数是：1999999999 => 9*81+1 = 730s

## 反转链表

反转链表的话用常规的双指针可以高效地实现，但是这里我用的都是递归，比较难理解，花了点时间去理顺整个逻辑.... 还是太菜了...

以及衍生题目 反转链表2 K个一组反转 都运用到了 `reverseN` 函数

## 旋转链表

先将链表的首尾相连形成环状链表，再head 往后移 (k % length) 的长度，再断开链表的首尾

## 什么情况下考虑需要用虚拟头节点

链表头地址有可能发生改变的时候。

比如 删除链表的某个节点、链表插入节点...都有可能链表头地址发生改变


## 138. 复制带随机指针的链表

我们把每个源节点都复制一个一模一样的节点放到自己的后面

pre :  1 -> 2 -> 3 -> 4
cur :  1 -> *1 -> 2 -> *2 -> 3 -> *3 -> 4 -> *4

*1.ramdom = 1.ramdom.next

然后再删除源节点
