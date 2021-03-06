/**
 * 查看所有的全局配置项
 * git config --list --global
 *
 * 查看单个配置的全局项
 * git config user.name
 *
 * 获取帮助信息
 * git config -h
 *
 * 获取git仓库的两种方式：
 * 1.需要将本地文件转化成仓库 git init
 * 在你的工程根目录 自动生成 .git 隐藏文件
 * 2.克隆 git clone 'xxx' 可以将本身存在云端的仓库拉到本地
 *
 * 查看当前文件状态
 * git status
 * 精简方式： git status -s
 *
 * 将文件添加到追踪文件
 * git add 文件名称
 * 三种作用：
 * 1.把未被追踪的文件添加到暂存区
 * 2.把已修改的文件添加到暂存区
 * 3.冲突 -> 解决到以后，git add添加暂存区
 * 将所有文件一次性全部添加到追踪文件
 * git add .
 *
 * U:表示这个文件未被追踪 untracked
 * A:表示这个文件已经添加到追踪文件
 * M:表示这个文件已经被更改了(modified)
 *
 * 提交更新：
 * git commit -m '描述信息'
 *
 * 撤销对文件的修改：
 * git checkout -- 文件名
 *
 * 取消暂存：
 * git reset HEAD 文件名称
 *
 * 跳过添加暂存区：
 * git commit -a -m '描述信息'
 *
 * 移除文件：
 * 1.本地仓库和本地工作区都移除：git rm -f 文件名称
 * 2.本地工作区移除：git rm --cached 文件名称
 *
 * 忽略文件：忽略的是之前没有被添加到追踪文件的
 *
 *
 * 查看历史记录
 * git log --oneline
 * git log q (退出)
 *
 * 回退到某个版本
 * git reset --hard <CommitID>
 *
 * git clone //将远程仓库克隆到本地
 *
 * git branch //查看分支
 *
 * git branch  xxx //创建新分支
 *
 * git checkout  xxx //切换到指定分支进行开发
 *
 * git checkout -b xxx //先创建新分支 并立即切换到新分支上
 *
 * git push -u  远程仓库的别名 本地分支名称:远程分支名称//-u 表示把本地分支和远程分支进行关联，只在第一次推送的时候需要带 -u 参数
 *
 * 
 * 3456
 *
git stash 把代码先缓存起来，先不提交，可以去切换分支

git stash pop 把丢失的代码再拉回来

 * git pull //把远程分支最新的代码下载到本地对应的分支中
 * 
 * git push 远程仓库名称 --delete 远程分支名称 //删除远程仓库中，制定名称的远程分支
 * 
 * 123



 */