关于 Hide Top Bar
------------------

这个 GNOME 扩展帮助您在顶部栏妨碍您时将其隐藏。

在扩展的首选项中，可以指定不同的行为：鼠标悬停时显示、按下键盘快捷键时显示，或者当没有窗口需要该空间时显示。

![clip](./preview.gif)

从 extensions.gnome.org 安装
---------------------------

除非您使用的是 Debian 或 Ubuntu（请参见下面的部分），否则推荐通过 [extensions.gnome.org/.../hide-top-bar/](https://extensions.gnome.org/extension/545/hide-top-bar/) 上的官方构建来安装 Hide Top Bar。

如果您通过 Chrome 浏览器安装，请确保您阅读了 [Chrome 的 GNOME Shell 集成安装指南](https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome/Installation)。

[Debian](https://packages.debian.org/unstable/gnome-shell-extension-autohidetopbar)
------

如果您使用的是基于 Debian 的发行版，首选的安装方法是使用打包版本。通过这种方式，可以避免由您发行版中不同的 gnome-shell 版本引起的兼容性问题。您可以使用以下命令安装该包：

    sudo apt install gnome-shell-extension-autohidetopbar

如果您发现 _Debian 打包版本_ 有问题，请在 [Debian 错误跟踪系统](https://www.debian.org/Bugs/Reporting) 中提交错误报告。

从源码安装
----------

如果您坚持从源码安装，需要 `gettext` 包中的 `xgettext` 和 `msgfmt` 命令（包名可能因您的发行版而异）。

从源码安装的步骤如下：检出源代码，运行 `make` 编译，安装并重启 GNOME Shell。例如：

    git clone https://gitlab.gnome.org/tuxor1337/hidetopbar.git
    cd hidetopbar
    make
    gnome-extensions install ./hidetopbar.zip

然后您需要注销并重新登录以使安装过程生效。或者，您可以尝试以下命令之一：

    # 如果您运行的是 X11 会话，请运行以下命令
    gnome-shell --replace &
    # 如果您运行的是 wayland 会话，请运行以下命令
    dbus-run-session -- gnome-shell --nested --wayland

您可以通过 [extensions.gnome.org](https://extensions.gnome.org) 上的界面、[gnome-extensions-app](https://apps.gnome.org/de/Extensions/) 或以下命令行来启用扩展：

    gnome-extensions enable hidetopbar@mathieu.bidon.ca

更新语言字符串
-------------

每当您注意到 Hide Top Bar 中有本地化字符串没有被 `./locale/` 中的字符串覆盖时，您可以使用以下命令重新生成 `*.pot` 文件：

    make ./locale/hidetopbar.pot

然后将更改合并到每种语言的实际翻译文件中，运行以下命令之一：

    make all-po                                 # 更新所有语言的文件
    make ./locale/XX/LC_MESSAGES/hidetopbar.po  # 更新特定的 po 文件，其中 'XX' 是语言代码

如前一节所述，运行 `make` 需要安装 `gettext` 包（包名可能因您的发行版而异）。

故障排除
---------

### 我可以分配一个快捷键来临时完全禁用自动隐藏吗？

请按照 [分配系统范围快捷键来禁用/启用扩展的说明](https://gitlab.gnome.org/tuxor1337/hidetopbar/issues/43#issuecomment-796583424)。

### 通知弹出窗口导致顶部栏隐藏。

使用扩展 [Panel OSD](https://extensions.gnome.org/extension/708/panel-osd/)，您可以配置通知弹出窗口显示在不同的位置（例如向下几像素），这样它们就不会与顶部栏重叠。

### 面板与仪表板/停靠栏重叠。

这是扩展 [Dash to Dock](https://github.com/micheleg/dash-to-dock) 的问题，另请参见 [此评论](https://github.com/tuxor1337/hidetopbar/issues/149#issuecomment-964419677)。

许可证
------

版权所有 (c) 2013-2023 Thomas Vogt。

版权所有 (c) 2012-2013 Mathieu Lutfy。

版权所有 (c) 2012 Philip Witte。

Hide Top Bar 是自由软件：您可以根据自由软件基金会发布的 GNU 通用公共许可证的条款重新分发和/或修改它，许可证版本 3，或（根据您的选择）任何更高版本。

Hide Top Bar 的分发希望它有用，但不提供任何保证；甚至不提供适销性或特定用途适用性的暗示保证。有关更多详细信息，请参见 GNU 通用公共许可证。

您应该已经收到了与 Hide Top Bar 一起的 GNU 通用公共许可证副本（参见 COPYING.txt）。如果没有，请参见 gnu.org/licenses/。
