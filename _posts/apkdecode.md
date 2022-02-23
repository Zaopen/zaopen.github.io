---
layout: mypost
title: apk反编译、重编译和自签名
date: 2022-02-17
categories: [技术]
comments: false 
---

## 一、JAVA环境配置
由于本人是Mac电脑，直接官网下载JavaJDK ，安装完后基本无需配置即可进行本文操作。  
[官网下载](https://www.oracle.com/java/technologies/downloads/)

## 二、apktool反编译工具
[官网下载](https://ibotpeaches.github.io/Apktool/install/)  
建议使用macOS对应的第一种安装教程，另一种Homebrew版本的容易出现找不到HOMEBREW_JAVA的问题，尝试了各种环境配置都没找到解决方法。

## 三、反编译
一般是建议先用"cd"命令定位到你apk所在的文件夹，再进行操作，因为反编译后生成的文件夹会落在这个位置。  
执行命令：
```
cd <apk文件所在目录>
```
快捷方法是"cd "(有一个空格，下同)，然后拖拽文件到终端，然后删掉文件名到最后一个"/"，回车。  

然后执行反编译命令：
```
apktool d <apk绝对路径>
```
绝对路径那里，直接拖拽apk到终端更快捷。  
有些电脑可能需要sudo权限，可以在上方命令前加上"sudo "。  
之后就可以改文件夹里的文件了。

## 四、重编译
改完后执行命令：
```
apktool b <上文反编译出来的文件夹绝对路径>
```
新apk会在该文件夹下的dist文件夹内。

## 五、生成密钥
执行命令：
```
keytool -genkey -v -alias <别名> -keyalg <加密算法> -validity <有效期> -keystore <存放位置和文件名>
```
每个"-"后代表一个参数和配置值。  
-keyalg：加密算法，一般用"RSA"  
-validity：有效期，单位天  
-keystore：默认存在电脑"user/用户名/"下，如果执行过上面的cd命令就在其对应目录下。MacOS似乎不要求文件名带".keystore"后缀。  

之后会要求输入密钥口令、姓氏、单位、组织、城市、省市区、国家，按要求填完即可。  
如果有误可以在最后输入"n"，重新输入，会记忆你之前输入的内容。也可以按ctl+c直接中断操作，重新生成。

## 六、自签名
执行命令：
```
jarsigner -verbose -keystore <密钥绝对路径> -signedjar <签名后apk存放路径> <签名前apk绝对路径> <密钥别名>
```
完成。

_细小之处，也能进步。_
