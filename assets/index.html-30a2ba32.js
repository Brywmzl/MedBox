import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,a as i}from"./app-268a5ce0.js";const l={};function d(t,n){return a(),e("div",null,[...n[0]||(n[0]=[i(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><p><code>docs/guide/</code> 目录现在只放命令 <code>.md</code> 文件，不再按分类拆文件夹。</p><p>左侧命令列表的搜索和标签筛选，统一读取 <code>docs/.vuepress/command-index.json</code> 里的 <code>tags</code> 字段；一个命令可以挂多个标签，不再受单一分类限制。</p><h2 id="维护规则" tabindex="-1"><a class="header-anchor" href="#维护规则" aria-hidden="true">#</a> 维护规则</h2><ul><li><code>docs/guide/</code> 根目录只保留命令 <code>.md</code> 和当前这个 <code>README.md</code></li><li>命令标签统一写在每个命令文档的 frontmatter <code>tag:</code> 中</li><li>左侧筛选标签统一维护在 <code>docs/.vuepress/command-index.json</code> 的 <code>tags</code></li><li>命令相关图片统一放在 <code>docs/.vuepress/public/media/</code></li></ul><h2 id="新增命令模板" tabindex="-1"><a class="header-anchor" href="#新增命令模板" aria-hidden="true">#</a> 新增命令模板</h2><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> B_CommandName
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 标签 1
  <span class="token punctuation">-</span> 标签 2</span>
<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> B_CommandName</span>

<span class="token title important"><span class="token punctuation">##</span> 功能说明</span>

一句话说明这个命令做什么。

<span class="token title important"><span class="token punctuation">##</span> 使用场景</span>

<span class="token list punctuation">-</span> 场景 1
<span class="token list punctuation">-</span> 场景 2

<span class="token title important"><span class="token punctuation">##</span> 输入</span>

<span class="token list punctuation">-</span> 输入物件
<span class="token list punctuation">-</span> 输入条件

<span class="token title important"><span class="token punctuation">##</span> 输出</span>

<span class="token list punctuation">-</span> 输出结果
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签建议" tabindex="-1"><a class="header-anchor" href="#标签建议" aria-hidden="true">#</a> 标签建议</h2><ul><li>点</li><li>曲线</li><li>曲面</li><li>标注</li><li>选择</li><li>变换</li><li>物件</li><li>图层</li><li>文字</li><li>分组</li><li>工具</li><li>统计</li><li>分析</li></ul>`,9)])])}const p=s(l,[["render",d],["__file","index.html.vue"]]);export{p as default};
