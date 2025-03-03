import{d as r}from"./vendor-2ac6fe9f.js";import{C as l}from"./index-bd74e160.js";import{n as i,M as p,a as h,u as g}from"./index-79a0877a.js";const u={name:"RelatedPost",props:{post:{type:Object,default:()=>({})}},computed:{postCategory(){return this.post.category&&this.post.category.title||"未分类"},showTagText(){return this.post.tags&&this.post.tags.length>0}}};var d=function(){var t=this,s=t._self._c;return s("router-link",{staticClass:"related-post",attrs:{to:{name:"Post",params:{number:t.post.number}}}},[s("figure",{staticClass:"post-cover-wrap"},[t.post.cover?s("img",{staticClass:"post-cover",attrs:{src:t.post.cover,alt:"Cover"}}):s("img",{staticClass:"post-cover",attrs:{src:t.$config.defaultCover,alt:"Cover"}})]),s("div",{staticClass:"post-info"},[s("div",{staticClass:"post-meta"},[s("span",{staticClass:"post-cate"},[t._v(t._s(t.postCategory))]),s("span",{staticClass:"post-tags"},[t.showTagText?[s("SvgIcon",{attrs:{name:"biaoqian"}}),t._l(t.post.tags,function(e){return s("span",{key:e.id,staticClass:"post-tag"},[t._v(t._s(e.name))])})]:t._e(),t.post.tags.length===0?s("span",{staticClass:"post-tag"},[t._v("暂无标签")]):t._e()],2)]),s("div",{staticClass:"post-text"},[s("h2",{staticClass:"post-title"},[t._v(" "+t._s(t.post.title)+" ")])])])])},m=[],_=i(u,d,m,!1,null,"e4e08129",null,null);const v=_.exports;const C={name:"Post",components:{Comment:l,Markdown:p,RelatedPost:v},data(){return{post:{},relates:[],toc:"",currentLink:0,content:"",loading:!0,commentVisible:!1}},computed:{postNumber(){var s,e;const t=window.location.href.match(/\/post\/(\d+)/)[1];return((e=(s=this.$route)==null?void 0:s.params)==null?void 0:e.number)||Number(t)},showTagText(){return this.post.tags&&this.post.tags.length>0}},watch:{$route(){this.commentVisible=!1,this.initAllData(),this.getPostFn(),this.generateRelatesFn()}},created(){this.getPostFn(),this.generateRelatesFn()},mounted(){this.$nextTick(()=>{window.addEventListener("scroll",this.updateCurrentTocLink)})},methods:{...r({getPostsCountAction:"github/getPostsCountAction",getPostsAction:"github/getPostsAction",getPostAction:"github/getPostAction",increaseHotAction:"leancloud/increaseHotAction"}),async getPostsCountFn(){return await this.getPostsCountAction().catch(o=>{throw this.$message({content:"获取文章总数失败",type:"error"}),new Error(o)})},async getPostsFn(){const o=await this.getPostsCountFn().catch(t=>{throw new Error(t)});return await this.getPostsAction({page:1,pageSize:o}).catch(t=>{throw this.$message({content:"获取文章列表失败",type:"error"}),new Error(t)})},async getPostFn(){const o=new h;if(this.post=await this.getPostAction({number:this.postNumber}).catch(s=>{throw this.$message({content:"获取文章失败",type:"error"}),new Error(s)}).finally(()=>{this.loading=!1}),localStorage.getItem("configLeancloud")==="yes"){const s=await this.increaseHotAction({post:this.post}).catch(e=>{throw this.$message({content:"增加文章热度失败",type:"error"}),new Error(e)});this.$set(this.post,"hot",s)}const t=await o.parse(this.post.body).catch(s=>{throw this.$message({content:"解析文章失败",type:"error"}),new Error(s)});window.document.title=this.post.title,this.commentVisible=!0,this.toc=t==null?void 0:t.toc,this.content=t==null?void 0:t.content},async generateRelatesFn(){const s=await this.getPostsFn().catch(e=>{throw this.$message({content:"获取文章列表失败",type:"error"}),new Error(e)});for(this.relates=[];;){const e=s.length,a=Math.floor(Math.random()*e),n=s[a],c=this.postNumber;if(!this.relates.includes(n)&&(n.number!==c&&this.relates.push(n),e<=2||this.relates.length>=2))break}},initAllData(){this.post={},this.relates=[],this.toc="",this.content="",this.loading=!0},handleClick(o){const t=document.querySelectorAll(".toc-link");if(o.target.classList.contains("toc-link")){t.forEach(n=>{n.classList.remove("active")});const s=o.target.getAttribute("href"),e=document.querySelector(s),a=100;if(e){const n=e.getBoundingClientRect().top+window.pageYOffset-a;window.scrollTo({top:n,behavior:"smooth"})}}},updateCurrentTocLink(){g(".toc-link")},backLastPage(){this.$router.back()},showToc(){this.$refs.tocWrap.classList.add("show")},hideToc(){this.$refs.tocWrap.classList.remove("show")}}};var f=function(){var e;var t=this,s=t._self._c;return s("article",{staticClass:"post"},[s("section",{ref:"tocWrap",staticClass:"toc-wrap"},[s("div",{staticClass:"toc-header"},[s("div",{staticClass:"toc-title"},[s("SvgIcon",{attrs:{name:"toc"}}),s("span",[t._v("文章目录")])],1),s("div",{staticClass:"toc-close",on:{click:t.hideToc}},[s("SvgIcon",{attrs:{name:"close"}})],1)]),s("div",{staticClass:"toc",domProps:{innerHTML:t._s(t.toc)},on:{click:function(a){return a.preventDefault(),t.handleClick.apply(null,arguments)}}})]),s("section",{staticClass:"post-header"},[s("div",{staticClass:"page-control"},[s("div",{staticClass:"back",on:{click:t.backLastPage}},[s("SvgIcon",{attrs:{name:"back"}})],1),s("div",{staticClass:"show-toc",on:{click:t.showToc}},[s("SvgIcon",{attrs:{name:"toc"}})],1)]),s("figure",{staticClass:"post-cover-wrap"},[s("img",{staticClass:"post-cover",attrs:{src:t.post.cover||t.$config.defaultCover,alt:"cover"}})])]),s("section",{staticClass:"post-body"},[s("div",{staticClass:"post-info"},[s("div",{staticClass:"title-wrap"},[s("div",{staticClass:"cate-wrap"},[t.post.category?[s("router-link",{staticClass:"cate-link",attrs:{to:{name:"Category",params:{category:(e=t.post.category)==null?void 0:e.title,number:t.post.category.number}}}},[t._v(" "+t._s(t.post.category.title)+" ")])]:s("span",{staticClass:"cate-text"},[t._v("未分类")])],2),s("h1",{staticClass:"post-title"},[t._v(" "+t._s(t.post.title)+" ")])]),s("div",{staticClass:"tags-wrap"},[s("div",{staticClass:"author"},[s("figure",{staticClass:"author-avatar"},[s("img",{attrs:{src:t.$config.avatar,alt:"头像"}})]),s("div",{staticClass:"text"},[s("p",{staticClass:"author-name"},[t._v(" "+t._s(t.$config.author)+" ")]),s("div",{staticClass:"meta"},[s("span",{staticClass:"time"},[s("SvgIcon",{attrs:{name:"shijian"}}),t._v(" "+t._s(t.post.created_by))],1),s("span",{staticClass:"hot"},[s("SvgIcon",{attrs:{name:"huore"}}),t._v(" "+t._s(t.post.hot))],1)])])]),s("div",{staticClass:"tags"},[s("SvgIcon",{attrs:{name:"biaoqian"}}),t.showTagText?t._l(t.post.tags,function(a){return s("span",{key:a.id,staticClass:"tag",style:{color:`#${a.color}`}},[t._v(" # "+t._s(a.name)+" ")])}):s("span",[t._v("无标签")])],2)])]),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"post-main"},[s("Markdown",{attrs:{content:t.content,parsed:!0}})],1)]),s("section",{staticClass:"post-footer"},[s("div",{staticClass:"related-posts"},t._l(t.relates,function(a){return s("RelatedPost",{key:a.id,attrs:{post:a}})}),1)]),t.commentVisible?s("Comment"):t._e()],1)},w=[],y=i(C,f,w,!1,null,"068d895c",null,null);const $=y.exports;export{$ as default};
