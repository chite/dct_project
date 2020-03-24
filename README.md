# DCT畢業專案-羅密歐與仙杜瑞拉

![made-with-JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow) ![made-with-CSS](https://img.shields.io/badge/Made%20with-CSS3-brightgreen)  
![NCCU-DCT](https://img.shields.io/badge/NCCU%20-DCT-orange?style=for-the-badge)  

## 咱們的小共識
1. 請在根目錄建立資料夾，HTML等放裡面（如同已建立的 ig 資料夾）

## 已完成的頁面URL
1. IG：<https://chite.github.io/dct_project/ig/index.html#/ig> 
2. 日曆：<https://chite.github.io/dct_project/ig/index.html#/calendar> 
3. Line：<https://chite.github.io/dct_project/ig/index.html#/line> 
4. 資料夾：<https://chite.github.io/dct_project/ig/index.html#/folder> 
5. Google首頁：<https://chite.github.io/dct_project/googleIndex/googleIndex.html>
6. FB個人頁：<https://chite.github.io/dct_project/fb/fbIndex.html>
7. FB動態消息：<https://chite.github.io/dct_project/fb/main.html> 
8. Gmail：<https://chite.github.io/dct_project/gmail/index.html> 
9. desktop：<https://chite.github.io/dct_project/desktop/desktop.html> 
10. 駭客頁面：<https://chite.github.io/dct_project/desktop/hackTool.html>



## 下載Git
[載點](https://git-scm.com/downloads)

## 初始化
1. 點開群組的邀請連結
2. 打開Git Bash或command line，進到你想要儲存專案的資料夾
3. 輸入以下程式碼：  
```git clone https://github.com/chite/dct_project.git```
4. 專案下載完成

## 概念
### 工作目錄（Working Directory）
完全新加入的檔案會在這，需要 `git add` 加進暫存區

### 暫存區（Staging Area）
被修改（modified）或是刪除（deleted）的檔案會在這，需要 `git commit` 加進儲存庫

### 儲存庫（Repository）
這裡的檔案已被儲存在本地端，但要`push`才會上傳到遠端
※每次動工請先`pull`下載最新資料，避免發生衝突（但我們的專案應該不太可能發生）
![logo](https://i.imgur.com/DKEUSGk.png)

## 常用指令

* 加入暫存區
```javascript
git add XXX    //把檔名為XXX加至暫存區
git add --all    //等同"add -A"，將此專案的所有異動都加入暫存區
git add .    // 將當前目錄以下的異動加入暫存區，個人偏好這個
```

* 提交版本
```javascript
git commit -m "XXX"    // 提交版本至儲存庫，XXX 是打你的說明文字，說明你動了甚麼手腳 
```

* 上傳至遠端
```javascript
git push origin master // 上傳 master 分支至遠端 origin 節點
```

* 下載遠端進度以同步
```javascript
git pull origin master	// 下載遠端的最新進度並合併進本地端專案，記得若本地若有新進度而遠端未同步到要先commit呀！！
```

* 創建分支
```javascript
git branch XXX	// 創建名為XXX的分支
```

* 刪除分支
```javascript
git branch -d XXX    // 刪除分支XXX
```

* 切換到分支
```javascript
git checkout XXX	// 切換到 XXX 分支
```

* 合併分支，通常會跳出vim編輯：
1. 按a鍵  
2. 寫你的合併訊息，告訴別人你動了什麼手腳  
3. 按 esc  
4. 輸入「:x」  
5. 按 enter
```javascript
git merge XXX    合併分支XXX到目前所在的分支
```

* 呼叫圖形化介面工具，可以看分支和過去commit情況
```javascript
gitk --all &    // --all 顯示所有分支，&是背景執行
```

* 查看本地端檔案儲存狀態
```javascript
git status
```

## 教學資源
[其一](https://zlargon.gitbooks.io/git-tutorial/content/file/modify.html)  
[其二(記得往下滑才能看到目錄)](https://gitbook.tw/)

## 替換工具
如果覺得太難（懶得學）可參考以下工具
* [TortoiseGit](https://backlog.com/git-tutorial/tw/intro/intro2_1.html)  
* [bitbucket](https://bitbucket.org/)


## 其他專案開發工具
* 快速排版 [Bootstrap4](https://medium.com/@weilihmen/bootstrap-%E5%88%9D%E5%AD%B8%E4%BB%8B%E7%B4%B9-%E9%9D%9C%E6%85%8B%E7%AF%87-f20500235b33)
* SVG圖片（需註明出處）[flaticon](https://www.flaticon.com/)

## 其他現成模板
* [FB](http://jvilk.com/cmpsci-326/workshop/05)