<meta name="referrer" content="no-referrer" >

# 本地部署

因为国内网络环境等原因，我们提供的网页运行代码服务可能无法正常使用。因此我们建议您在本地安装一个 Python

为了方便，我们已经将 Python 的安装包传到了国内的网盘。您也可以去 [Python官网](python.org) 自行下载，可能访问较慢或者根本访问不了

::: tip 网盘链接

**地址：** https://www.123pan.com/s/dBKZVv-nuh6v.html

**提取码：** 0801

:::

首先我们需要将 Python 安装包从网盘或者官网中下载下来

![下载安装包](https://image.alphaalist.xyz/下载安装包.png)

双击运行，勾选 `Add Python 3.8 to PATH` 选项

![双击运行](https://image.alphaalist.xyz/双击运行.png)

点击下面的 `Customize installation` 选项，这里什么都不用改，直接点 `Next`

![配置安装](https://image.alphaalist.xyz/配置安装.png)

这里基本上也什么都不用改，直接点 `Next`。如果你需要给电脑上的所有用户安装可以勾选 `Install for all users`，但这需要管理员权限

![开始安装](https://image.alphaalist.xyz/开始安装.png)

之后你会看到 Python 正在安装

![安装中](https://image.alphaalist.xyz/安装中.png)

安装完成后，你可以测试 Python 的环境是否全部正常安装。我们先测试 Python 本身

按 `Win + X` 打开终端或 powershell 亦或者在系统的搜索中搜索 `cmd`

![打开终端](https://image.alphaalist.xyz/打开终端.png)

之后输入 `python`，如果一切正常应该会输出类似的信息

![测试本体](https://image.alphaalist.xyz/测试本体.png)

之后我们再开一个终端（不是 Windows 11 按照前面的步骤再运行一个就好），输入 `pip --version`'

如果正常应该会输出类似的信息

![测试pip](https://image.alphaalist.xyz/测试pip.png)

在系统搜索中搜索 `IDLE`，应该你就能找到 Python 的编辑器

![运行编辑器](https://image.alphaalist.xyz/运行编辑器.png)
