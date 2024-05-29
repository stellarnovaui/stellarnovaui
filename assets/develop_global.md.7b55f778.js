import{_ as s,o as n,c as o,e as a}from"./app.0c5af9f5.js";const u=JSON.parse('{"title":"Global Component Import","description":"","frontmatter":{},"headers":[],"relativePath":"develop/global.md"}'),l={name:"develop/global.md"},p=a(`<h1 id="global-component-import" tabindex="-1">Global Component Import <a class="header-anchor" href="#global-component-import" aria-hidden="true">#</a></h1><blockquote><p>If your component library needs to support global component hints, you can add the components we developed to the src/components.d.ts file.</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#BABED8;"> components </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">declare</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">module</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vue/runtime-core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">interface</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">GlobalComponents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    EaButton</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">components</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">Button</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    EaIcon</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">components</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">Icon</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><blockquote><p>When using our component library, users need to configure <code>types: [&quot;stellarnovaui/lib/src/components&quot;]</code> in their <code>tsconfig.json</code> file. Of course, this should be based on the name of your component library.</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stellarnovaui/lib/src/components</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(c,r,y,F,D,i){return n(),o("div",null,e)}const m=s(l,[["render",t]]);export{u as __pageData,m as default};
