---
title: '可得容量计算方法'
date: '2025-09-09'
summary: '存储设备可存入的用户数据总量。'
tags: ['硬件']
draft: false
authors: ['default']
---

# 硬盘可得容量计算方法

在购买或使用硬盘（HDD、SSD、移动硬盘、U 盘等）时，很多用户会发现：**实际可用容量往往比硬盘厂商标注的容量要小**。这并不是硬盘“偷工减料”，而是因为计算方法和文件系统的差异。本文将带你了解硬盘可得容量的计算方法，以及为什么会出现“容量缩水”的现象。

utf8mb4 和utf8的区别

###### ChatGPT 说：

好问题 👍，这其实是 MySQL 的一个“坑点”。

---

## 1. **utf8 和 utf8mb4 在 MySQL 里的区别**

### ✅ MySQL 里的 `utf8`

- **不是标准的 UTF-8**！
- 只能存储 **1–3 字节**的 UTF-8 字符（最多支持 Unicode U+FFFF，BMP 平面）。
- 存不了 **4 字节字符**（比如 emoji、某些特殊汉字、少数民族文字、古文字）。
- 举例：
  - `"张"` ✅ 可以存
  - `"😀"` ❌ 存不下，会报错：`Incorrect string value`

---

### ✅ MySQL 里的 `utf8mb4`

- 才是 **真正完整的 UTF-8 实现**（支持 1–4 字节）。
- 能存所有 Unicode 字符，包括 emoji。
- 从 MySQL 5.5.3 开始支持。
- 建议在新项目里 **统一用 utf8mb4**，避免以后存不下 emoji 或其他字符。

---

## 2. **存储对比**

| 字符集  | 每字符最大字节 | 能否存 emoji | 备注                       |
| ------- | -------------- | ------------ | -------------------------- |
| utf8    | 3 字节         | ❌ 不行      | MySQL 特有的“阉割版 UTF-8” |
| utf8mb4 | 4 字节         | ✅ 可以      | 真正的 UTF-8               |

---

## 3. **性能差异**

- utf8mb4 比 utf8 多 1 个字节存储开销，但差异很小。
- 绝大多数场景（尤其 Web、移动端）推荐用 utf8mb4。

---

## 4. **最佳实践**

1. **库、表、列** 全部用 utf8mb4

   ```
   CREATE DATABASE mydb DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   ```

2. **连接编码**也要设置 utf8mb4（否则插入 emoji 还是会报错）：

   ```
   SET NAMES utf8mb4;
   ```

3. 如果历史数据库用 utf8，可以用：

   ```
   ALTER TABLE mytable CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   ```

---

👉 总结：

- `utf8` = 残缺的 UTF-8，只支持 3 字节
- `utf8mb4` = 真正的 UTF-8，支持 4 字节，推荐永远用它
