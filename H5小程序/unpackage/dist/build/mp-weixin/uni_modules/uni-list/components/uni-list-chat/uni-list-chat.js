(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-list/components/uni-list-chat/uni-list-chat"],{"305d":function(t,i,e){},3853:function(t,i,e){"use strict";e.r(i);var a=e("fa02"),n=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(r);i["default"]=n.a},6600:function(t,i,e){"use strict";e.r(i);var a=e("a967"),n=e("3853");for(var r in n)["default"].indexOf(r)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(r);e("ca20");var s=e("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);i["default"]=u.exports},a967:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var a=function(){var t=this.$createElement,i=(this._self._c,this.avatarCircle||0===this.avatarList.length),e=this.isDraft?this.note.slice(14):null;this.$mp.data=Object.assign({},{$root:{g0:i,g1:e}})},n=[]},ca20:function(t,i,e){"use strict";var a=e("305d"),n=e.n(a);n.a},fa02:function(t,i,e){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"UniListChat",emits:["click"],props:{title:{type:String,default:""},note:{type:String,default:""},clickable:{type:Boolean,default:!1},link:{type:[Boolean,String],default:!1},to:{type:String,default:""},badgeText:{type:[String,Number],default:""},badgePositon:{type:String,default:"right"},time:{type:String,default:""},avatarCircle:{type:Boolean,default:!1},avatar:{type:String,default:""},avatarList:{type:Array,default:function(){return[]}}},computed:{isDraft:function(){return"[uni-im-draft]"==this.note.slice(0,14)},isSingle:function(){if("dot"===this.badgeText)return"uni-badge--dot";var t=this.badgeText.toString();return t.length>1?"uni-badge--complex":"uni-badge--single"},computedAvatar:function(){return this.avatarList.length>4?(this.imageWidth=13.95,"avatarItem--3"):this.avatarList.length>1?(this.imageWidth=21.15,"avatarItem--2"):(this.imageWidth=45,"avatarItem--1")}},watch:{avatar:{handler:function(i){var e=this;"cloud://"==i.substr(0,8)?t.getTempFileURL({fileList:[i]}).then((function(t){var i=t.fileList||t.result.fileList;e.avatarUrl=i[0].tempFileURL})):this.avatarUrl=i},immediate:!0}},data:function(){return{isFirstChild:!1,border:!0,imageWidth:50,avatarUrl:""}},mounted:function(){this.list=this.getForm(),this.list&&(this.list.firstChildAppend||(this.list.firstChildAppend=!0,this.isFirstChild=!0),this.border=this.list.border)},methods:{getForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniList",i=this.$parent,e=i.$options.name;while(e!==t){if(i=i.$parent,!i)return!1;e=i.$options.name}return i},onClick:function(){""===this.to?(this.clickable||this.link)&&this.$emit("click",{data:{}}):this.openPage()},openPage:function(){-1!==["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(this.link)?this.pageApi(this.link):this.pageApi("navigateTo")},pageApi:function(t){var i=this,a={url:this.to,success:function(t){i.$emit("click",{data:t})},fail:function(t){i.$emit("click",{data:t})}};switch(t){case"navigateTo":e.navigateTo(a);break;case"redirectTo":e.redirectTo(a);break;case"reLaunch":e.reLaunch(a);break;case"switchTab":e.switchTab(a);break;default:e.navigateTo(a)}}}};i.default=a}).call(this,e("a9ff")["default"],e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-list/components/uni-list-chat/uni-list-chat-create-component',
    {
        'uni_modules/uni-list/components/uni-list-chat/uni-list-chat-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6600"))
        })
    },
    [['uni_modules/uni-list/components/uni-list-chat/uni-list-chat-create-component']]
]);
