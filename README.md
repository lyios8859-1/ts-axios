# ts-axios

typescript 实现简单的 axios 库

## 项目初始化

> 使用脚手架工具生成 typescript 的项目
> 脚手架工具： `typescript-library-starter`

```bash
# 克隆脚手架
git clone https://github.com/alexjoverm/typescript-library-starter.git tx-axios # (You Floder Name)

# 切换到项目工作目录
cd tx-axios # (You Floder Name)

# 安装包
npm install [--registry=https://registry.npm.taobao.org]

# 查看是否存在远程的仓库
git ls-remote
git remote -v

# 关联已经在远程端创建的个人 git 仓库 ts-axios
git remote add origin https://github.com/lyios8859-1/ts-axios.git# origin 任意，最好是 origin 表示远程端仓库名

# 显示远程仓库标识名, 这里是 origin
git remote show

# 拉取远程仓库的代码
git pull origin master

# 查看当前分支
git branch

# 使用 git-cz 替代 git commit -am
npm run commit

# 推送到远程仓库
git push origin master

```
