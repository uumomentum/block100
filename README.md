# 
<p align="center">
<img src="https://user-images.githubusercontent.com/91664985/138204882-91148e1a-36af-4ac4-a395-f17233b6cbb8.png" width="200" height="200" />
</p>

<h1 align="center">拦截100</h1>

拦截100是一款Safari浏览器扩展，完全基于iOS 15/iPadOS 15开发，能够拦截恶意的网页内app应用跳转，去除诱导广告，以此来进一步保护用户在浏览网页时的隐私和阻止广告追踪。除此之外，对于许多网页为了恶意跳转app而隐藏长文内容的行为，拦截100也会将其拦截并且自动展开长文内容，提高用户网页的体验。
#
# 使用手册
### 安装和运行：
1：在Xcode中创建Safari Extension App项目。  
2：创建成功后，替换SafarWebExtension所在扩展文件夹下的Resources文件夹为此仓库Resources文件夹，  
3：运行项目  
  在Safari中打开扩展查看。


### 代码目录：
Resources/jumpapp 文件夹为防App跳转目录：  
此目录下可新增或修改防止网站跳转App代码  
每个App跳转单独文件夹，在对应文件夹下创建编写js文件  
在content.js中判断域名等执行对应的js  

Resources/domain 文件夹为目前匹配站点的展开全文和去除广告目录：  
此目录下每个文件夹以用来匹配的站点域名为名称如xx.xx.com，包含call.js和read.js和网站中文名.md。  
call.js ：去除当前站点广告代码  
read.js 阅读当前站点时的展开全文代码  
domain/domain.js：目前匹配站点清单及url地址匹配规则，key与具体站点文件夹名字对应。  
新增修改代码时，根据需要可能需同步修改background.js和content.js或插件配置代码。  
# 
# 社区
  技术相关讨论，可以在issue中交流。
  
  # License
   Copyright (c) 2021-2028 UU Momentum Network Technology Co., Ltd., All rights reserved.

Licensed under The GNU General Public License version 2 (GPLv2) (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

https://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 
 
