import{_ as s,c as n,o as a,d as l}from"./app.d9716df6.js";const A=JSON.parse('{"title":"vue\u6EDA\u52A8\u89C6\u56FE\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECB\u7ECD","slug":"\u4ECB\u7ECD"},{"level":2,"title":"\u6CE8\u610F\u4E8B\u9879","slug":"\u6CE8\u610F\u4E8B\u9879"},{"level":2,"title":"\u4EE3\u7801\u5C01\u88C5\u5B9E\u73B0","slug":"\u4EE3\u7801\u5C01\u88C5\u5B9E\u73B0"},{"level":2,"title":"\u4EE3\u7801\u6F14\u793A","slug":"\u4EE3\u7801\u6F14\u793A"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u4E0A\u62C9\u52A0\u8F7D","slug":"\u4E0A\u62C9\u52A0\u8F7D"},{"level":3,"title":"\u4E0B\u62C9\u5237\u65B0","slug":"\u4E0B\u62C9\u5237\u65B0"},{"level":3,"title":"\u4E0A\u62C9\u52A0\u8F7D+\u4E0B\u62C9\u5237\u65B0","slug":"\u4E0A\u62C9\u52A0\u8F7D-\u4E0B\u62C9\u5237\u65B0"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u63D0\u793A","slug":"\u81EA\u5B9A\u4E49\u63D0\u793A"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"props","slug":"props"},{"level":3,"title":"event","slug":"event"},{"level":3,"title":"slots","slug":"slots"}],"relativePath":"article/wheel/scroll-view.md","lastUpdated":1661323533000}'),p={name:"article/wheel/scroll-view.md"},o=l(`<h1 id="vue\u6EDA\u52A8\u89C6\u56FE\u7EC4\u4EF6" tabindex="-1">vue\u6EDA\u52A8\u89C6\u56FE\u7EC4\u4EF6 <a class="header-anchor" href="#vue\u6EDA\u52A8\u89C6\u56FE\u7EC4\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4ECB\u7ECD" tabindex="-1">\u4ECB\u7ECD <a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a></h2><p>\u57FA\u4E8E<a href="https://better-scroll.gitee.io/docs/zh-CN/" target="_blank" rel="noreferrer">better-scroll.js\u5E93</a>\u5C01\u88C5\u7684vue2.x\u6EDA\u52A8\u89C6\u56FE\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5C55\u793A\u4E0A\u4E0B\u6EDA\u52A8\u7684\u9875\u9762\uFF0C\u89E3\u51B3\u4E86ios\u624B\u673A\u9875\u9762\u5FEB\u901F\u6EDA\u52A8\u5361\u6B7B\u7684\u95EE\u9898\uFF0C\u540C\u65F6\u6269\u5C55\u4E86\u4E0B\u62C9\u5237\u65B0\u548C\u4E0A\u62C9\u52A0\u8F7D\u7684\u529F\u80FD\uFF0C\u9884\u8BBE\u4E86\u5237\u65B0\u548C\u52A0\u8F7D\u8FC7\u7A0B\u6BCF\u4E2A\u9636\u6BB5\u7684\u63D2\u69FD\uFF0C\u505A\u5230\u6781\u9AD8\u7684\u5B9A\u5236\u5316</p><h2 id="\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><p>better-scroll\u6587\u6863\u89E3\u91CA\u4E86\u6EDA\u52A8\u539F\u7406\uFF1A\u5728\u6EDA\u52A8\u65B9\u5411\u4E0A\uFF0C\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u7684\u957F\u5EA6\u8D85\u8FC7\u4E86\u5BB9\u5668\u7684\u957F\u5EA6\u65F6\u5C31\u53EF\u4EE5\u6EDA\u52A8\uFF0C\u5F53\u4F7F\u7528\u53D1\u73B0\u6EDA\u52A8\u4E0D\u4E86\u65F6\uFF0C\u8BF7\u68C0\u67E5\u5B50\u5143\u7D20\u7684\u957F\u5EA6\u662F\u5426\u8D85\u8FC7\u4E86\u5BB9\u5668\u7684\u957F\u5EA6</p><p><strong style="color:red;font-size:18px;">scroll-view\u7EC4\u4EF6\u5185\u5BB9\u5143\u7D20\u5728\u6EDA\u52A8\u65B9\u5411\u4E0A\u7684\u957F\u5EA6\u5FC5\u987B\u5927\u4E8E\u5BB9\u5668\u5143\u7D20\uFF0Cscroll-view\u7684\u5BBD\u9AD8\u8BBE\u7F6E\u4E3A100%\uFF0C\u6240\u4EE5\u7236\u7EA7\u5143\u7D20\u8981\u7ED9\u5B9A\u5BBD\u9AD8</strong></p><h2 id="\u4EE3\u7801\u5C01\u88C5\u5B9E\u73B0" tabindex="-1">\u4EE3\u7801\u5C01\u88C5\u5B9E\u73B0 <a class="header-anchor" href="#\u4EE3\u7801\u5C01\u88C5\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div</span></span>
<span class="line"><span style="color:#A6ACCD;">        ref=&quot;wrapper&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        class=&quot;wrapper&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :style=&quot;\`--color: \${color};--size:\${vwSize};\`&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;content&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;!-- \u4E0B\u62C9\u5237\u65B0 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div class=&quot;refresh-tips&quot; v-if=&quot;openRefresh&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div v-show=&quot;pulling&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;slot name=&quot;pulling&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;div class=&quot;tips&quot;&gt;{{ pullingText }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div v-show=&quot;loosing&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;slot name=&quot;loosing&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;div class=&quot;tips&quot;&gt;{{ loosingText }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div v-show=&quot;refreshing&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;slot name=&quot;refreshing&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;div class=&quot;loading-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            &lt;div class=&quot;loading&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            &lt;div class=&quot;tips&quot;&gt;{{ refreshingText }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div v-show=&quot;success&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;slot name=&quot;success&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;div class=&quot;tips&quot;&gt;{{ successText }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;!-- \u4E3B\u4F53\u5185\u5BB9 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;slot&gt;&lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;!-- \u4E0A\u62C9\u52A0\u8F7D --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;div class=&quot;load-tips&quot; v-if=&quot;openLoad&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div v-show=&quot;finished&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;slot name=&quot;finished&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;div class=&quot;tips&quot;&gt;{{ finishedText }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div v-show=&quot;!finished &amp;&amp; !loading&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;slot name=&quot;loadingBefore&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;div class=&quot;tips&quot;&gt;{{ loadingBeforeText }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;div v-show=&quot;!finished &amp;&amp; loading&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;slot name=&quot;loading&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;div class=&quot;loading-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            &lt;div class=&quot;loading&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            &lt;div class=&quot;tips&quot;&gt;{{ refreshingText }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    &lt;/slot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import BScroll from &quot;@better-scroll/core&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ObserveDOM from &quot;@better-scroll/observe-dom&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">BScroll.use(ObserveDOM);</span></span>
<span class="line"><span style="color:#A6ACCD;">import Pullup from &quot;@better-scroll/pull-up&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">BScroll.use(Pullup);</span></span>
<span class="line"><span style="color:#A6ACCD;">import PullDown from &quot;@better-scroll/pull-down&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">BScroll.use(PullDown);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const defaultConfig = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    probeType: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6EDA\u52A8\u5230\u9876\u90E8\u6216\u5E95\u90E8\u7684\u56DE\u5F39\u6548\u679C</span></span>
<span class="line"><span style="color:#A6ACCD;">    bounce: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    click: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    scrollX: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    scrollY: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u5F00\u542F\u5BF9 content \u4EE5\u53CA content \u5B50\u5143\u7D20 DOM \u6539\u53D8\u7684\u63A2\u6D4B</span></span>
<span class="line"><span style="color:#A6ACCD;">    observeDOM: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">export default {</span></span>
<span class="line"><span style="color:#A6ACCD;">    name: &quot;ScrollView&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    props: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        scrollConfig: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default() {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return {};</span></span>
<span class="line"><span style="color:#A6ACCD;">            },</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u63D0\u793A\u6587\u6848\u7684\u989C\u8272</span></span>
<span class="line"><span style="color:#A6ACCD;">        color: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;#000&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u63D0\u793A\u6587\u6848\u7684\u5B57\u4F53\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">        size: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Number | String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: 28,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u662F\u5426\u5F00\u542F\u4E0A\u62C9\u52A0\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">        openLoad: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">        loading: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">            required: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">        finished: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">            required: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u52A0\u8F7D\u524D\u7684\u63D0\u793A\u63D0\u793A\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">        loadingBeforeText: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">        loadingText: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;\u52A0\u8F7D\u4E2D&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">        finishedText: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;\u6CA1\u6709\u66F4\u591A\u4E86&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u662F\u5426\u5F00\u542F\u4E0B\u62C9\u5237\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">        openRefresh: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Boolean | Object,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u662F\u5426\u5904\u4E8E\u5237\u65B0\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">        refreshing: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Boolean,</span></span>
<span class="line"><span style="color:#A6ACCD;">            required: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u4E0B\u62C9\u8FC7\u7A0B\u7684\u63D0\u793A\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">        pullingText: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;\u4E0B\u62C9\u5237\u65B0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u91CA\u653E\u8FC7\u7A0B\u7684\u63D0\u793A\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">        loosingText: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;\u624B\u6307\u91CA\u653E\u5237\u65B0&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5237\u65B0\u8FC7\u7A0B\u7684\u63D0\u793A\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">        refreshingText: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;\u5237\u65B0\u4E2D...&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5237\u65B0\u6210\u529F\u7684\u63D0\u793A\u6587\u6848</span></span>
<span class="line"><span style="color:#A6ACCD;">        successText: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: String,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: &quot;\u5237\u65B0\u6210\u529F&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5237\u65B0\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F(ms)</span></span>
<span class="line"><span style="color:#A6ACCD;">        successDuration: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            type: Number,</span></span>
<span class="line"><span style="color:#A6ACCD;">            default: 0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    data() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            pulling: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            loosing: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">            success: false,</span></span>
<span class="line"><span style="color:#A6ACCD;">        };</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    mounted() {</span></span>
<span class="line"><span style="color:#A6ACCD;">        setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.__initScroll();</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u5982\u679C\u5F00\u542F\u4E86\u4E0A\u62C9\u52A0\u8F7D\u7684\u529F\u80FD\uFF0C\u9996\u6B21\u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\u5C31\u901A\u77E5\u7236\u7EC4\u4EF6\u53BB\u62C9\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (this.openLoad) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.pullingUpHandler();</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }, 20);</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u521D\u59CB\u5316\u6EDA\u52A8\u89C6\u56FE\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        __initScroll() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!this.$refs[&quot;wrapper&quot;]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u5408\u5E76\u521D\u59CB\u5316\u7684\u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color:#A6ACCD;">            let config = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (this.openRefresh) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                config.bounce = { top: true, bottom: false };</span></span>
<span class="line"><span style="color:#A6ACCD;">                config.pullDownRefresh = { threshold: 60, stop: 60 };</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            config.pullUpLoad = this.openLoad;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            config = Object.assign(</span></span>
<span class="line"><span style="color:#A6ACCD;">                {},</span></span>
<span class="line"><span style="color:#A6ACCD;">                defaultConfig,</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.scrollConfig,</span></span>
<span class="line"><span style="color:#A6ACCD;">                config</span></span>
<span class="line"><span style="color:#A6ACCD;">            );</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u521D\u59CB\u5316better-scroll</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.scroll = new BScroll(this.$refs[&quot;wrapper&quot;], config);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            this.scroll &amp;&amp; this.addEvent();</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        addEvent() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u6D3E\u53D1\u521D\u59CB\u5316\u6210\u529F\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$emit(&quot;ready&quot;, this.scroll);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            // \u6D3E\u53D1\u6EDA\u52A8\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.scroll.on(&quot;scroll&quot;, (pos) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.$emit(&quot;scroll&quot;, pos);</span></span>
<span class="line"><span style="color:#A6ACCD;">            });</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (this.openLoad) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u76D1\u542C\u4E0A\u62C9\u52A0\u8F7D\u4E8B\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.scroll.on(&quot;pullingUp&quot;, this.pullingUpHandler);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (this.openRefresh) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                // \u76D1\u542C\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6(3\u4E2A\u9636\u6BB5)</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.scroll.on(&quot;enterThreshold&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.clearStatus();</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.pulling = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                });</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.scroll.on(&quot;leaveThreshold&quot;, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.clearStatus();</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.loosing = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                });</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.scroll.on(&quot;pullingDown&quot;, this.pullingDownHandler);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5904\u7406\u4E0A\u62C9\u52A0\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">        pullingUpHandler() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$emit(&quot;update:loading&quot;, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$emit(&quot;load&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u5904\u7406\u4E0B\u62C9\u5237\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">        pullingDownHandler() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.clearStatus();</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$emit(&quot;update:refreshing&quot;, true);</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.$emit(&quot;refresh&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u66F4\u65B0\u6EDA\u52A8\u89C6\u56FE\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">        refresh() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.scroll &amp;&amp; this.scroll.refresh();</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6EDA\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">        scrollToXY(x, y, time = 300) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.scroll &amp;&amp; this.scroll.scrollTo(x, y, time);</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u6E05\u9664\u6240\u6709\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#A6ACCD;">        clearStatus() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.pulling = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.loosing = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">            this.success = false;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        vwSize() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!isNaN(Number(this.size)) || this.size.indexOf(&quot;px&quot;) !== -1) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return \`\${parseFloat(this.size) / 7.5}vw\`;</span></span>
<span class="line"><span style="color:#A6ACCD;">            } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return this.size;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    watch: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u76D1\u542C\u5230loading\u7ED3\u675F\u5C31\u5237\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">        loading(val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.refresh;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.scroll.finishPullUp();</span></span>
<span class="line"><span style="color:#A6ACCD;">                });</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u76D1\u542C\u5230refreshing\u7ED3\u675F\u5C31\u5237\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">        refreshing(val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (!val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                if (this.successDuration &lt; 20) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.clearStatus();</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.success = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.$nextTick(this.scroll.finishPullDown);</span></span>
<span class="line"><span style="color:#A6ACCD;">                } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.clearStatus();</span></span>
<span class="line"><span style="color:#A6ACCD;">                    this.success = true;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    setTimeout(</span></span>
<span class="line"><span style="color:#A6ACCD;">                        this.scroll.finishPullDown,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        this.successDuration</span></span>
<span class="line"><span style="color:#A6ACCD;">                    );</span></span>
<span class="line"><span style="color:#A6ACCD;">                }</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        // \u76D1\u542C\u5230\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0C\u5173\u95ED\u4E0A\u62C9\u52A0\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">        finished(val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (val) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                this.$nextTick(this.scroll.closePullUp);</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;style  scoped&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    overflow: hidden;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.wrapper .refresh-tips {</span></span>
<span class="line"><span style="color:#A6ACCD;">    position: absolute;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    transform: translateY(-100%) translateZ(1px);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.wrapper .tips {</span></span>
<span class="line"><span style="color:#A6ACCD;">    padding: 34px 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    color: var(--color);</span></span>
<span class="line"><span style="color:#A6ACCD;">    font-size: var(--size);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.wrapper .loading-wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    display: flex;</span></span>
<span class="line"><span style="color:#A6ACCD;">    justify-content: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">    align-items: center;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.wrapper .loading-wrapper .loading {</span></span>
<span class="line"><span style="color:#A6ACCD;">    box-sizing: border-box;</span></span>
<span class="line"><span style="color:#A6ACCD;">    width: calc(var(--size) * 1.2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    height: calc(var(--size) * 1.2);</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-width: 2px;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-style: solid;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-color: var(--color);</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-top-color: transparent;</span></span>
<span class="line"><span style="color:#A6ACCD;">    border-radius: 100%;</span></span>
<span class="line"><span style="color:#A6ACCD;">    animation: circle infinite 0.75s linear;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">.wrapper .loading-wrapper .tips {</span></span>
<span class="line"><span style="color:#A6ACCD;">    margin-left: 20px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@keyframes circle {</span></span>
<span class="line"><span style="color:#A6ACCD;">    0% {</span></span>
<span class="line"><span style="color:#A6ACCD;">        transform: rotate(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    100% {</span></span>
<span class="line"><span style="color:#A6ACCD;">        transform: rotate(360deg);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="\u4EE3\u7801\u6F14\u793A" tabindex="-1">\u4EE3\u7801\u6F14\u793A <a class="header-anchor" href="#\u4EE3\u7801\u6F14\u793A" aria-hidden="true">#</a></h2><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u6EDA\u52A8\u533A\u57DF --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;cell&quot; v-for=&quot;i in list&quot; :key=&quot;i&quot;&gt;{{ i }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            list</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            loading</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            finished</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            refreshing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">onLoad</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100vw</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100vh</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">cell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E0A\u62C9\u52A0\u8F7D" tabindex="-1">\u4E0A\u62C9\u52A0\u8F7D <a class="header-anchor" href="#\u4E0A\u62C9\u52A0\u8F7D" aria-hidden="true">#</a></h3><p>scroll-view\u7EC4\u4EF6\u901A\u8FC7loading\u548Cfinished\u4E24\u4E2A\u53D8\u91CF\u63A7\u5236\u52A0\u8F7D\u72B6\u6001\u3002\u5F53\u7EC4\u4EF6\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\uFF0Cscroll-view\u7EC4\u4EF6\u4F1A\u7ED9\u7236\u7EC4\u4EF6\u629B\u51FAload\u4E8B\u4EF6\u540C\u65F6\u5C06\u7236\u7EC4\u4EF6\u7684loading\u8BBE\u7F6E\u4E3Atrue\uFF0C\u7236\u7EC4\u4EF6\u76D1\u542Cload\u4E8B\u4EF6\u53D1\u8D77\u5F02\u6B65\u64CD\u4F5C\u66F4\u65B0\u6570\u636E\uFF0C\u6570\u636E\u66F4\u65B0\u5B8C\u6BD5\u540E\uFF0C\u5C06loading\u8BBE\u7F6E\u4E3Afalse\u5373\u53EF\u3002\u5982\u679C\u6570\u636E\u5DF2\u7ECF\u5168\u90E8\u52A0\u8F7D\u5B8C\u4E86\uFF0C\u5C31\u5C06finishe\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u6EDA\u52A8\u533A\u57DF --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;scroll-view</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openLoad=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :loading.sync=&quot;loading&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :finished=&quot;finished&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @load=&quot;onLoad&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;cell&quot; v-for=&quot;i in list&quot; :key=&quot;i&quot;&gt;{{ i }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            list</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            loading</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            finished</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u52A0\u8F7D\u72B6\u6001\u7ED3\u675F</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">finished</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100vw</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100vh</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">cell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E0B\u62C9\u5237\u65B0" tabindex="-1">\u4E0B\u62C9\u5237\u65B0 <a class="header-anchor" href="#\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a></h3><p>scroll-view\u7EC4\u4EF6\u901A\u8FC7refreshing\u53D8\u91CF\u63A7\u5236\u5237\u65B0\u72B6\u6001\u3002\u5F53\u7EC4\u4EF6\u6EDA\u52A8\u5230\u9876\u90E8\u65F6\u7EE7\u7EED\u4E0B\u62C9\u4E00\u6BB5\u8DDD\u79BB\uFF0Cscroll-view\u7EC4\u4EF6\u4F1A\u7ED9\u7236\u7EC4\u4EF6\u629B\u51FArefresh\u4E8B\u4EF6\u540C\u65F6\u5C06\u7236\u7EC4\u4EF6\u7684refreshing\u8BBE\u7F6E\u4E3Atrue\uFF0C\u7236\u7EC4\u4EF6\u76D1\u542Crefresh\u4E8B\u4EF6\u8FDB\u884C\u64CD\u4F5C\uFF0C\u64CD\u4F5C\u5B8C\u6BD5\u540E\uFF0C\u5C06refreshing\u8BBE\u7F6E\u4E3Afalse\u5373\u53EF\uFF0C\u8868\u793A\u5237\u65B0\u6210\u529F\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u6EDA\u52A8\u533A\u57DF --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;scroll-view</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openRefresh=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :refreshing.sync=&quot;refreshing&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @refresh=&quot;onRefresh&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;cell&quot; v-for=&quot;i in list&quot; :key=&quot;i&quot;&gt;{{ i }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            list</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            refreshing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onRefresh</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">onLoad</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">created</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">onLoad</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">cell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4E0A\u62C9\u52A0\u8F7D-\u4E0B\u62C9\u5237\u65B0" tabindex="-1">\u4E0A\u62C9\u52A0\u8F7D+\u4E0B\u62C9\u5237\u65B0 <a class="header-anchor" href="#\u4E0A\u62C9\u52A0\u8F7D-\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a></h3><p>\u5B8C\u6574\u7684\u7EC4\u4EF6\u529F\u80FD</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u6EDA\u52A8\u533A\u57DF --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;scroll-view</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openLoad=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :loading.sync=&quot;loading&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :finished=&quot;finished&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openRefresh=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :refreshing.sync=&quot;refreshing&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @load=&quot;onLoad&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @refresh=&quot;onRefresh&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;cell&quot; v-for=&quot;i in list&quot; :key=&quot;i&quot;&gt;{{ i }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            list</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            loading</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            finished</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            refreshing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u52A0\u8F7D\u72B6\u6001\u7ED3\u675F</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">finished</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onRefresh</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u91CD\u7F6E\u52A0\u8F7D\u5B8C\u6BD5\u7684\u72B6\u6001</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">finished</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u91CD\u65B0\u52A0\u8F7D\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5C06 loading \u8BBE\u7F6E\u4E3A true\uFF0C\u8868\u793A\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">onLoad</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">cell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u63D0\u793A" tabindex="-1">\u81EA\u5B9A\u4E49\u63D0\u793A <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u63D0\u793A" aria-hidden="true">#</a></h3><p>srcoll-view\u7EC4\u4EF6\u63D0\u4F9B\u4E86color\u548Csize\u4E24\u4E2Aprops\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u7B80\u5355\u7684\u5B9A\u5236\u63D0\u793A\u5185\u5BB9\u7684\u989C\u8272\u548Cfont-size\uFF0Csrcoll-view\u7EC4\u4EF6\u4F7F\u7528vw\u4F5C\u4E3A\u5355\u4F4D\uFF08\u4EE5iphone6 750px\u4E3A\u57FA\u51C6\uFF0C\u4F7F\u7528\u8005\u4E5F\u5E94\u4F20\u5165\u6B64\u57FA\u51C6\u8BBE\u8BA1\u7A3F\u7684\u503C\uFF09\uFF0C\u4F20\u5165\u6570\u5B57\uFF0820\uFF09\u6216\u8005\u5B57\u7B26\u4E32\uFF0820px\uFF09,\u5185\u90E8\u4F1A\u81EA\u52A8\u8F6C\u6210vw\u5355\u4F4D\uFF0C\u4F20\u5165\u7684\u662Frem\u6216em\u5219\u4E0D\u8F6C\u6362</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u6EDA\u52A8\u533A\u57DF --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;scroll-view</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openLoad=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :loading.sync=&quot;loading&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :finished=&quot;finished&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openRefresh=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :refreshing.sync=&quot;refreshing&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        color=&quot;skyblue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        size=&quot;40px&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @load=&quot;onLoad&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @refresh=&quot;onRefresh&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;cell&quot; v-for=&quot;i in list&quot; :key=&quot;i&quot;&gt;{{ i }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            list</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            loading</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            finished</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            refreshing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u52A0\u8F7D\u72B6\u6001\u7ED3\u675F</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">finished</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onRefresh</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u6E05\u7A7A\u5217\u8868\u6570\u636E</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">finished</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u91CD\u65B0\u52A0\u8F7D\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5C06 loading \u8BBE\u7F6E\u4E3A true\uFF0C\u8868\u793A\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">onLoad</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">cell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>srcoll-view\u7EC4\u4EF6\u9884\u8BBE\u4E86\u4E0B\u62C9\u5237\u65B0\u548C\u4E0A\u62C9\u52A0\u8F7D\u5404\u9636\u6BB5\u7684\u63D2\u69FD\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\u81EA\u5B9A\u4E49\u63D0\u793A\u5185\u5BB9\uFF0C\u5177\u6709\u6781\u9AD8\u7684\u81EA\u7531\u5EA6</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&lt;div class=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;!-- \u6EDA\u52A8\u533A\u57DF --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;scroll-view</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openLoad=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :loading.sync=&quot;loading&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :finished=&quot;finished&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :openRefresh=&quot;true&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        :refreshing.sync=&quot;refreshing&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @load=&quot;onLoad&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        @refresh=&quot;onRefresh&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div slot=&quot;pulling&quot; class=&quot;slot-tips&quot;&gt;\u4E0B\u62C9\u5237\u65B0slot&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div slot=&quot;loosing&quot; class=&quot;slot-tips&quot;&gt;\u91CA\u653E\u5237\u65B0slot&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div slot=&quot;refreshing&quot; class=&quot;slot-tips&quot;&gt;\u5237\u65B0\u4E2Dslot&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div slot=&quot;success&quot; class=&quot;slot-tips&quot;&gt;\u5237\u65B0\u6210\u529Fslot&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div class=&quot;cell&quot; v-for=&quot;i in list&quot; :key=&quot;i&quot;&gt;{{ i }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div slot=&quot;loading&quot; class=&quot;slot-tips&quot;&gt;\u52A0\u8F7D\u4E2Dslot&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div slot=&quot;finished&quot; class=&quot;slot-tips&quot;&gt;\u52A0\u8F7D\u5B8C\u6BD5slot&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;div slot=&quot;loadingBefore&quot; class=&quot;slot-tips&quot;&gt;\u4E0A\u62C9\u52A0\u8F7Dslot&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/scroll-view&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            list</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            loading</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            finished</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">            refreshing</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onLoad</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5F02\u6B65\u66F4\u65B0\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// setTimeout \u4EC5\u505A\u793A\u4F8B\uFF0C\u771F\u5B9E\u573A\u666F\u4E2D\u4E00\u822C\u4E3A ajax \u8BF7\u6C42</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">refreshing</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u52A0\u8F7D\u72B6\u6001\u7ED3\u675F</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;">// \u6570\u636E\u5168\u90E8\u52A0\u8F7D\u5B8C\u6210</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">30</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">finished</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">onRefresh</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u6E05\u7A7A\u5217\u8868\u6570\u636E</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">finished</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u91CD\u65B0\u52A0\u8F7D\u6570\u636E</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;">// \u5C06 loading \u8BBE\u7F6E\u4E3A true\uFF0C\u8868\u793A\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">loading</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">onLoad</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button class="copy"></button><span class="lang">css</span><pre><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">cell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ccc</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">line-height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">108px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">slot-tips</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">32px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>openLoad</td><td>\u662F\u5426\u5F00\u542F\u4E0A\u62C9\u52A0\u8F7D</td><td>Boolean</td><td>false</td></tr><tr><td>loading</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\uFF08.sync\uFF09</td><td>Boolean</td><td>false</td></tr><tr><td>finished</td><td>\u662F\u5426\u5DF2\u52A0\u8F7D\u5B8C\u6210</td><td>Boolean</td><td>false</td></tr><tr><td>loadingBeforeText</td><td>\u52A0\u8F7D\u524D\u7684\u63D0\u793A\u63D0\u793A\u6587\u6848</td><td>String</td><td>\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A</td></tr><tr><td>loadingText</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u7684\u63D0\u793A\u6587\u6848</td><td>String</td><td>\u52A0\u8F7D\u4E2D</td></tr><tr><td>finishedText</td><td>\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u63D0\u793A\u6587\u6848</td><td>String</td><td>\u6CA1\u6709\u66F4\u591A\u4E86</td></tr><tr><td>openRefresh</td><td>\u662F\u5426\u5F00\u542F\u4E0B\u62C9\u5237\u65B0</td><td>Boolean\u6216Object</td><td>false</td></tr><tr><td>refreshing</td><td>\u662F\u5426\u5904\u4E8E\u5237\u65B0\u72B6\u6001</td><td>Boolean</td><td>false</td></tr><tr><td>pullingText</td><td>\u4E0B\u62C9\u8FC7\u7A0B\u7684\u63D0\u793A\u6587\u6848</td><td>String</td><td>\u4E0B\u62C9\u5237\u65B0</td></tr><tr><td>loosingText</td><td>\u91CA\u653E\u8FC7\u7A0B\u7684\u63D0\u793A\u6587\u6848</td><td>String</td><td>\u624B\u6307\u91CA\u653E\u5237\u65B0</td></tr><tr><td>refreshingText</td><td>\u5237\u65B0\u8FC7\u7A0B\u7684\u63D0\u793A\u6587\u6848</td><td>String</td><td>\u5237\u65B0\u4E2D...</td></tr><tr><td>successText</td><td>\u5237\u65B0\u6210\u529F\u7684\u63D0\u793A\u6587\u6848</td><td>String</td><td>\u5237\u65B0\u6210\u529F</td></tr><tr><td>successDuration</td><td>\u5237\u65B0\u6210\u529F\u63D0\u793A\u5C55\u793A\u65F6\u957F(ms)</td><td>Number</td><td>0</td></tr><tr><td>color</td><td>\u63D0\u793A\u6587\u6848\u7684\u989C\u8272</td><td>String</td><td>#000</td></tr><tr><td>size</td><td>\u63D0\u793A\u6587\u6848\u7684\u5B57\u4F53\u5927\u5C0F</td><td>Number\u6216String</td><td>28</td></tr></tbody></table><h3 id="event" tabindex="-1">event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>ready</td><td>better-scroll\u521D\u59CB\u5316\u5B8C\u6210\u65F6\u89E6\u53D1</td><td>\u5F53\u524Dbetter-scroll\u5BF9\u8C61</td></tr><tr><td>scroll</td><td>\u9875\u9762\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td>&quot;{x: \u5F53\u524Dx\u8F74\u6EDA\u52A8\u8DDD\u79BB, y: \u5F53\u524Dy\u8F74\u6EDA\u52A8\u8DDD\u79BB}&quot;</td></tr><tr><td>load</td><td>\u4E0A\u62C9\u52A0\u8F7D\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>refresh</td><td>\u4E0B\u62C9\u5237\u65B0\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table><h3 id="slots" tabindex="-1">slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>pulling</td><td>\u4E0B\u62C9\u8FC7\u7A0B\u63D0\u793A\u5185\u5BB9</td><td>-</td></tr><tr><td>loosing</td><td>\u91CA\u653E\u8FC7\u7A0B\u9876\u90E8\u5185\u5BB9</td><td>-</td></tr><tr><td>refreshing</td><td>\u5237\u65B0\u8FC7\u7A0B\u63D0\u793A\u5185\u5BB9</td><td>-</td></tr><tr><td>success</td><td>\u5237\u65B0\u6210\u529F\u63D0\u793A\u5185\u5BB9</td><td>-</td></tr><tr><td>loadingBefore</td><td>\u4E0A\u62C9\u8FC7\u7A0B\u63D0\u793A\u5185\u5BB9</td><td>-</td></tr><tr><td>loading</td><td>\u52A0\u8F7D\u8FC7\u7A0B\u63D0\u793A\u5185\u5BB9</td><td>-</td></tr><tr><td>finished</td><td>\u52A0\u8F7D\u5B8C\u6210\u63D0\u793A\u5185\u5BB9</td><td>-</td></tr></tbody></table>`,44),e=[o];function t(c,r,y,D,C,F){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
