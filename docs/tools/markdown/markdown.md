---
title: Markdown 基本语法
---

Markdown 是一种轻量级标记语言，目的是尽可能使其易于阅读和编写。

Markdown 由 John Gruber 在2004年创建，现在是世界上最流行的标记语言之一。

接下来会分两部分介绍，`基础语法` 和 `扩展语法`。

基本上，所有的 Markdown 编辑器都支持 John Gruber 原始设计文档中描述的 `基触语法`，扩展语法则要根据各个编辑器而异。

## 基础语法

### 标题

要创建标题，需要在文本前添加数字符号 `#`，并且和文本之间有空格相隔。

| **Markdown**    | **HTML**            | **Render**        |
|-----------------|---------------------|-------------------|
| # 一级标题      | `<h1>一级标题</h1>` | <h1>一级标题</h1> |
| ## 二级标题     | `<h2>二级标题</h2>` | <h2>二级标题</h2> |
| ### 三级标题    | `<h3>三级标题</h3>` | <h3>三级标题</h3> |
| #### 四级标题   | `<h4>四级标题</h4>` | <h4>四级标题</h4> |
| ##### 五级标题  | `<h5>五级标题</h5>` | <h5>五级标题</h5> |
| ###### 六级标题 | `<h6>六级标题</h6>` | <h6>六级标题</h6> |

#### 替代语法

你还可以在文本下方加上 `==` 或者 `--` 来表示一级或者二级标题。

| **Markdown**            | **HTML**            | **Render**        |
|-------------------------|---------------------|-------------------|
| 一级标题 <br> ======    | `<h1>一级标题</h1>` | <h1>一级标题</h1> |
| 二级标题 <br> --------- | `<h2>二级标题</h2>` | <h2>二级标题</h2> |

#### 标题最佳实践

各个 Markdown 编辑器在处理标题与周围段落之间缺少空白行上并不一致。

所以为了兼容性，请用一个或多个空行分隔各个段落和标题。

| :+1: **好的**                                                | :x: **差的**                                         |
|------------------------------------------------------------|----------------------------------------------------|
| 这里是段落。 <br><br> # 这里是标题 <br><br> 这里是另一个段落。 | 这里是段落。 <br> # 这里是标题 <br> 这里是另一个段落。 |

### 段落

用空白行分隔一个或者多个段落。

| **Markdown**                                         | **HTML**                                                                  | **Render**                                                |
|------------------------------------------------------|---------------------------------------------------------------------------|-----------------------------------------------------------|
| 我喜欢使用 Markdown。 <br><br> 我也喜欢使用 Markdown。 | \<p\>我喜欢使用 Markdown。\</p\> <br><br> \<p\>我也喜欢使用 Markdown\</p\> | <p>我喜欢使用 Markdown。</p> <p>我也喜欢使用 Markdown。</p> |

#### 段落最佳实践

段落开头不要用空格或制表符缩进段落。

| :+1: **好的**                                                     | :x: **差的**                                                                                            |
|-----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| 开头不要缩进，开头不要缩进，开头不要缩进，开头不要缩进，开头不要缩进。 | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开头要缩进，开头要缩进，开头要缩进，开头要缩进，开头要缩进。 |


### 字体

可以通过 **加粗** 或者 *斜体* 来强调文字。

如果要表示 *斜体*，可以用一个 `*` 或者 `_` 将文字包起来。

如果要表示 **加粗**，可以用两个 `*` 或者 `_` 将文字包起来。

如果要表示 ***斜体并加粗***，可以用三个 `*` 或者 `_` 将文字包起来。

| **Markdown**               | **HTML**                                   | **Render**                               |
|----------------------------|--------------------------------------------|------------------------------------------|
| \*我是斜体\*               | `<em>我是斜体</em>`                        | <em>我是斜体</em>                        |
| \_我是斜体\_               | `<em>我是斜体</em>`                        | <em>我是斜体</em>                        |
| \*\*我是粗体\*\*           | `<strong>我是粗体</strong>`                | <strong>我是粗体</strong>                |
| \_\_我是粗体\_\_           | `<strong>我是粗体</strong>`                | <strong>我是粗体</strong>                |
| \*\*\*我是斜体并加粗\*\*\* | `<strong><em>我是斜体并加粗</em></strong>` | <strong><em>我是斜体并加粗</em></strong> |
| \_\_\_我是斜体并加粗\_\_\_ | `<strong><em>我是斜体并加粗</em></strong>` | <strong><em>我是斜体并加粗</em></strong> |

#### 字体最佳实践

在单词中使用 `_` 来加粗或者变斜并不生效，这时候需要用 `*`。

| :+1: **好的**      | :x: **差的**       |
|--------------------|--------------------|
| Love\*is\*bold     | Love\_is\_bold     |
| Love\*\*is\*\*bold | Love\_\_is\_\_bold |

### 引用

要创建标题，需要在文本前添加数字符号 `>`，并且和文本之间有空格相隔。

```
> 这里是一处引用。
```

渲染效果如下：

> 这里是一处引用。

#### 多个段落引用

```
> 这里是一处引用。
>
> 这里是另外一处引用。
```

渲染效果如下：

> 这里是一处引用。
>
> 这里是另外一处引用。

#### 嵌套引用

```
> 这里是一处引用。
>
>> 这里是一个嵌套引用。
```

渲染效果如下：

> 这里是一处引用。
>
>> 这里是一个嵌套引用。

#### 引用里使用其他元素

```
> ### 这里是引用中的标题
>
> 这里是一个普通的段落。
>
> 引用中可以**加粗**。
```

渲染效果如下：

> #### 这里是引用中的标题
>
> 这里是一个普通的段落。
>
> 引用中可以**加粗**。

### 有序列表

要创建有序列表，需要在文本前添加数字和 `.`，并且和文本之间有空格相隔。

数字不必按数字顺序排列，但是第一列应该以 `1` 开头。

缩进两个空格可以生成嵌套列表。

| **Markdown**                                                                                                            | **HTML**                                                                                                                                                                                                                                                                                                                                                                               | **Render**                                                                                          |
|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| 1. 第一项 <br> 2. 第二项 <br> 3. 第三项                                                                                 | \<ol\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ol\>                                                                                                                                                                                                                         | <ol><li>第一项</li><li>第二项</li><li>第三项</li></ol>                                              |
| 1. 第一项 <br> 1. 第二项 <br> 1. 第三项                                                                                 | \<ol\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ol\>                                                                                                                                                                                                                         | <ol><li>第一项</li><li>第二项</li><li>第三项</li></ol>                                              |
| 1. 第一项 <br> 9. 第二项 <br> 7. 第三项                                                                                 | \<ol\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ol\>                                                                                                                                                                                                                         | <ol><li>第一项</li><li>第二项</li><li>第三项</li></ol>                                              |
| 1. 第一项 <br> 1. 第二项 <br>&nbsp;&nbsp;&nbsp;&nbsp;1. 嵌套列表1<br>&nbsp;&nbsp;&nbsp;&nbsp;1. 嵌套列表2<br> 1. 第三项 | \<ol\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<li\>嵌套列表1\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<li\>嵌套列表2\</li><br>&nbsp;&nbsp;&nbsp;&nbsp;\</ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ol\> | <ol><li>第一项</li><li>第二项</li><ul><li>嵌套列表1</li><li>嵌套列表2</li></ul><li>第三项</li></ol> |

### 无序列表

要创建无序列表，需要在文本前添加 `-`，`*` 或者 `+`，并且和文本之间有空格相隔。

缩进两个空格可以生成嵌套列表。

| **Markdown**                                                                                                       | **HTML**                                                                                                                                                                                                                                                                                                                                                                               | **Render**                                                                                          |
|--------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| - 第一项 <br> - 第二项 <br> - 第三项                                                                               | \<ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ul\>                                                                                                                                                                                                                         | <ul><li>第一项</li><li>第二项</li><li>第三项</li></ul>                                              |
| * 第一项 <br> * 第二项 <br> * 第三项                                                                               | \<ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ul\>                                                                                                                                                                                                                         | <ul><li>第一项</li><li>第二项</li><li>第三项</li></ul>                                              |
| - 第一项 <br> * 第二项 <br> + 第三项                                                                               | \<ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ul\>                                                                                                                                                                                                                         | <ul><li>第一项</li><li>第二项</li><li>第三项</li></ul>                                              |
| - 第一项 <br> - 第二项 <br>&nbsp;&nbsp;&nbsp;&nbsp;- 嵌套列表1<br>&nbsp;&nbsp;&nbsp;&nbsp;- 嵌套列表2<br> - 第三项 | \<ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第一项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第二项\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<li\>嵌套列表1\</li\><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\<li\>嵌套列表2\</li><br>&nbsp;&nbsp;&nbsp;&nbsp;\</ul\><br>&nbsp;&nbsp;&nbsp;&nbsp;\<li\>第三项\</li\><br>\</ul\> | <ul><li>第一项</li><li>第二项</li><ul><li>嵌套列表1</li><li>嵌套列表2</li></ul><li>第三项</li></ul> |

#### 列表里使用段落

```
* 第一项
* 第二项

  第二项里引用的段落一。

  第二项里引用的段落二。

* 第三项
```

渲染效果如下：

* 第一项
* 第二项

  第二项里引用的段落一。

  第二项里引用的段落二。

* 第三项

同理，Markdown里的其他元素也能在列表里使用。

### 代码

如果要表示 `代码`，可以用反引号 ` 将文本包起来。

如果文本里有反引号需要转义，可以用双反引号 `` 将文本包起来。

| **Markdown**                 | **HTML**                              | **Render**                        |
|------------------------------|---------------------------------------|-----------------------------------|
| \`hello world\`              | \<code\>hello world\</code\>          | <code>hello world</code>          |
| \`\`const a = \`hello\`;\`\` | \<code\>const a = \`hello\`;\</code\> | <code>const a = \`hello\`;</code> |

::: warning 代码块
原始设计的代码块需要将每一行缩进至少四个空格或一个制表符，这不是一个好设计，所以这里不展开讲。

后面会在**扩展语法**里会讲到使用代码块的新语法，用三个反引号 ` 或者三个波浪号 ~ 将文本包起来形成代码块。
:::

### 水平线

要创建水平线，可以用三个或更多星号 `***` ，破折号 `---` 或下划线 `___` 。

渲染效果如下：

---

### 链接

要创建链接，需要将链接文本括在方括号中，例如[谷歌]，然后立即在其后加上括号中的URL，例如（https://google.com)。

```
使用[谷歌](https://google.com)搜索引擎
```

渲染效果如下：

使用[谷歌](https://google.com)搜索引擎

#### 添加标题

可以给链接添加一个标题，这样当鼠标悬浮在链接上一段时间时，标题会显示出来。

```
使用[谷歌](https://google.com "Google 搜索引擎很好用")搜索引擎
```

渲染效果如下：

使用[谷歌](https://google.com "Google 搜索引擎很好用")搜索引擎

#### 网址和邮件地址

如果要快速将URL或电子邮件地址转换为链接，可以将其放在尖括号中。

```
<https://www.wangyulue.com>

<wangyulue@gmail.com>
```

渲染效果如下：

<https://www.wangyulue.com>

<wangyulue@gmail.com>

#### 格式化链接

链接也可以加粗或者变成斜体。

```
使用 **[谷歌](https://google.com)** 搜索引擎

使用 *[谷歌](https://google.com)* 搜索引擎
```

渲染效果如下：

使用 **[谷歌](https://google.com)** 搜索引擎

使用 *[谷歌](https://google.com)* 搜索引擎


#### 引用式链接

引用式链接是一种特殊的链接，它使得链接在 Markdown 中更容易显示和阅读，文本的可读性也会变得更高。

```
使用 [谷歌][1] 搜索引擎

使用 [谷歌][2] 搜索引擎

[1]: https://google.com
[2]: https://google.com "Google 搜索引擎很好用"
```

渲染效果如下：

使用 [谷歌][1] 搜索引擎

使用 [谷歌][2] 搜索引擎

[1]: https://google.com
[2]: https://google.com "Google 搜索引擎很好用"

### 图片

要添加图像，需要三步操作
1. 首先要添加感叹号 `!` 
1. 然后在方括号中替换文本（替换文本可以为空）
1. 再在圆括号中添加图像的URL，URL可以是相对路径也可以是绝对路径（与链接类似，图片也可以添加标题）

例如一下的写法：

```
![](./images/google-logo.png)

![logo](./images/google-logo.png "google logo")

![logo](https://github.githubassets.com/images/modules/logos_page/Octocat.png "github logo")
```

转变成HTML后如下：

```html
<img src="/assets/img/google-logo.png" alt="">

<img src="/assets/img/google-logo.png" alt="logo" title="google logo">

<img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="logo" title="github logo">
```

渲染效果如下：

![](./images/google-logo.png)

![logo](./images/google-logo.png "google logo")

![logo](https://github.githubassets.com/images/modules/logos_page/Octocat.png "github logo")

#### 将图片变成链接

如果想图片变成链接，点击后可以跳转，参考如下写法：

```
[![logo](./images/google-logo.png "google logo")](https://www.google.com/)
```

渲染效果如下：

[![logo](./images/google-logo.png "google logo")](https://www.google.com/)

<div id='image-control-width'></div>

::: warning 提示
Markdown 语法无法控制图片的宽高，但是可以在文档里使用 HTML 来控制图片的宽高，例如：

```
<img width="20%" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="logo" title="google logo">
```

渲染效果如下：

<img width="20%" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="logo"  title="google logo">
::: 

### 转义字符

如果要显示原本用于格式化 Markdown 文档中的文本的文字字符，可以字符前面添加一个反斜杠 `\`；

```
\* 显示星号

\- 显示减号

\# 显示井号

\+ 显示加号
```

渲染效果如下：

\* 显示星号

\- 显示减号

\# 显示井号

\+ 显示加号

### HTML

很多 Markdown 编辑器允许你在文档中插入HTML，这有助于对文档做更细粒度的控制。

前面在图片一节的[演示](#image-control-width)也说明了这一点。

再比如：

```
**这段文字是加粗的**，<em>这段文字是斜体</em>
```

渲染效果如下：

**这段文字是加粗的**，<em>这段文字是斜体</em>。

::: warning 注意
出于安全考虑，并不是所有的 Markdown 编辑器都支持 HTML，所以在使用HTML时，请考虑到文档的兼容性。
::: 