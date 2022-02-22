---
layout: post
title: SSH密钥生成
date: 2022-02-19
tags: 技术
comments: true
---

macOS的话直接用终端就能操作，windows的话要装一个Git Bash。  

## 一、检查是否已有密钥
以macOS为例：
```
ls -al ~/.ssh
```
如果返回total为0，那就要生成新密钥。

## 二、生成新密钥
GitHub是建议使用Ed25519算法生成密钥：
```
ssh-keygen -t ed25519 -C "你的邮箱"
```
如果你的系统不支持此算法，可以用这个：
```
ssh-keygen -t rsa -b 4096 -C "你的邮箱"
```
然后会让你选择存储的位置，一般默认就行。  
再输入密码两次即可生成。  

## 三、使用公钥
一般进行SSH操作，都是用到公钥。若要复制公钥内容，默认位置的情况下可以终端输入：
```
pbcopy < ~/.ssh/<公钥名称>
```
公钥名称一般默认有以下几种，分别对应不同的加密方式：
>id_rsa.pub
>id_ecdsa.pub
>id_ed25519.pub