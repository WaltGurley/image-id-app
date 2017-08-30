webpackJsonp([0],[,,function(t,e,i){function n(t){i(10)}var a=i(0)(i(6),i(19),n,null,null);t.exports=a.exports},,function(t,e,i){function n(t){i(12)}var a=i(0)(i(7),i(21),n,null,null);t.exports=a.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),a=i(4),o=i.n(a);n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:o.a}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),a={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(n.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(n.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,i=0;this.$children.forEach(function(t){e=Math.max(e,t.width),i=Math.max(i,t.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var e in t){var i=t[e];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),a[e]=i}},icons:a}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(17),a=i.n(n),o=i(18),r=i.n(o),s=i(15),c=i.n(s),d=i(14),l=i.n(d),u=(i(16),i(2)),h=i.n(u);e.default={name:"app",components:{Card:a.a,Modal:r.a,Icon:h.a},data:function(){return{pageInfo:[],imageInfo:[],randomThree:[],currentImage:{},newCardButtonText:"Skip Card",identifiedCount:0,pageInfoLoaded:!1,imageInfoLoaded:!1,allIdentified:!1,cardSwitch:!0,showInfo:!1}},methods:{getRandomThreeSetImg:function(){var t=this;if(l.a.every(this.imageInfo,["identified",!0]))return void(this.allIdentified=!0);this.currentImage=l.a.sample(l.a.filter(this.imageInfo,function(t){return!t.identified}));var e=l.a.map(this.imageInfo,function(t){return t.entityname}),i=l.a.uniq(e);this.randomThree=l.a.sampleSize(l.a.filter(i,function(e){return e!==t.currentImage.entityname}),2),this.randomThree.push(this.currentImage.entityname)},setIdentified:function(){this.currentImage.identified=!0,this.identifiedCount=l.a.filter(this.imageInfo,function(t){return t.identified}).length},newCard:function(){this.cardSwitch=!this.cardSwitch,this.newCardButtonText="Skip Card"},changeNewCardButtonText:function(){this.newCardButtonText="Next Card"}},beforeMount:function(){var t=this;fetch("./static/config.json").then(function(t){return t.json()}).then(function(t){return c.a.urlToKey(t.GoogleSheetsURL)}).then(function(t){return c.a.getWorkbook(t).then(function(e){var i=l.a.findIndex(e.sheets,function(t){return"Image Info"===t.name}),n=l.a.findIndex(e.sheets,function(t){return"App Info"===t.name});return{spreadsheetKey:t,entitySheet:e.sheets[i].id,appSheet:e.sheets[n].id}})}).then(function(e){c.a.getSheet(e.spreadsheetKey,e.appSheet).then(function(e){t.pageInfo=e.rows[0],t.pageInfoLoaded=!0}),c.a.getSheet(e.spreadsheetKey,e.entitySheet).then(function(e){e.rows.forEach(function(t){t.identified=!1}),t.imageInfo=e.rows,t.imageInfoLoaded=!0,t.getRandomThreeSetImg()})})}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(25),a=i.n(n),o=new a.a({bgOpacity:0,onBeforeOpen:function(){document.querySelector(".img-zoomable").setAttribute("style","border-radius: 6px;"),document.querySelector("#new-card-button").setAttribute("disabled",!0)},onClose:function(){document.querySelector(".img-zoomable").setAttribute("style","border-bottom-right-radius: 0; border-bottom-left-radius: 0"),document.querySelector("#new-card-button").removeAttribute("disabled")}});e.default={name:"card",props:["entityNames","correctImage"],data:function(){return{allIdentified:!1,isFlipped:!1,isCorrect:!1,randomThree:[]}},methods:{flipped:function(t){this.isFlipped=!this.isFlipped,this.$emit("choiceMade"),this.checkAnswer(t)},checkAnswer:function(t){this.correctImage.entityname===t?(this.correctImage.identified=!0,this.isCorrect=!0,this.$emit("identified")):this.isCorrect=!1}},computed:{imageSource:function(){return"./static/images/"+this.correctImage.imagename}},mounted:function(){o.listen(".img-zoomable")}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"modal",props:["appInfo"],data:function(){return{}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,i){function n(t){i(11)}var a=i(0)(i(8),i(20),n,"data-v-7301273a",null);t.exports=a.exports},function(t,e,i){function n(t){i(13)}var a=i(0)(i(9),i(22),n,"data-v-c803c12c",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return i("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return i("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"card-front will-flip",class:{flippedToFront:t.isFlipped}},[i("div",{staticClass:"img-holder"},[i("img",{staticClass:"img-responsive img-zoomable",attrs:{src:t.imageSource,alt:"Can you tell what is in this image?","data-action":"zoom"}})]),t._v(" "),i("div",{staticClass:"question-choices"},[i("h2",{staticClass:"card-header question"},[t._v("What is this?")]),t._v(" "),i("div",{staticClass:"buttons"},t._l(t.entityNames,function(e){return i("button",{staticClass:"card-button",on:{click:function(i){t.flipped(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])}))])]),t._v(" "),i("div",{staticClass:"card-back will-flip",class:{flippedToBack:!t.isFlipped}},[i("div",{staticClass:"img-holder"},[i("img",{staticClass:"img-responsive",attrs:{src:t.imageSource,alt:"Can you tell what is in this image?"}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCorrect,expression:"isCorrect"}],staticClass:"correct-answer"},[i("h2",{staticClass:"card-header"},[t._v("You are correct!")]),t._v(" "),i("h2",{staticClass:"card-header"},[t._v(t._s(t.correctImage.entityname))]),t._v(" "),i("h2",{staticClass:"card-header"},[t._v(t._s(t.correctImage.entitydescription))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCorrect,expression:"!isCorrect"}],staticClass:"incorrect-answer"},[i("h2",{staticClass:"card-header"},[t._v("Sorry, that's incorrect.")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{name:"slide-down"}},[t.pageInfoLoaded?i("nav",[i("h2",{staticClass:"app-title"},[t._v(t._s(t.pageInfo.appname))]),t._v(" "),i("h3",{staticClass:"group-name"},[t._v("Digital Library Initiatives")]),t._v(" "),i("icon",{staticClass:"info-button",attrs:{name:"info-circle"},nativeOn:{click:function(e){t.showInfo=!t.showInfo}}})],1):t._e()]),t._v(" "),i("div",{staticClass:"main-container"},[i("transition",{attrs:{name:"slide-left"}},[t.imageInfoLoaded?i("div",{staticClass:"app-containers card-container"},[i("transition",{attrs:{name:"switch-card"}},[t.cardSwitch?i("card",{key:"card-1",attrs:{entityNames:t.randomThree,correctImage:t.currentImage},on:{identified:t.setIdentified,choiceMade:t.changeNewCardButtonText}}):i("card",{key:"card-2",attrs:{entityNames:t.randomThree,correctImage:t.currentImage},on:{identified:t.setIdentified,choiceMade:t.changeNewCardButtonText}})],1)],1):t._e()]),t._v(" "),i("transition",{attrs:{name:"slide-right"}},[t.imageInfoLoaded?i("div",{staticClass:"app-containers score-container"},[i("h2",{staticClass:"score"},[t._v(t._s(t.identifiedCount)+" / "+t._s(t.imageInfo.length))])]):t._e()]),t._v(" "),i("transition",{attrs:{name:"slide-up"}},[t.imageInfoLoaded?i("div",{staticClass:"app-containers main-controls"},[i("button",{staticClass:"main-controls-buttons",attrs:{id:"new-card-button"},on:{click:function(e){t.getRandomThreeSetImg(),t.newCard()}}},[t._v(t._s(t.newCardButtonText))])]):t._e()])],1),t._v(" "),t.showInfo?i("modal",{attrs:{appInfo:t.pageInfo},on:{closeModal:function(e){t.showInfo=!1}}}):t._e(),t._v(" "),t.imageInfoLoaded?t._e():i("div",{staticClass:"loading-icon"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"modal"}},[i("div",{staticClass:"modal"},[i("div",{staticClass:"modal-background",on:{click:function(e){t.$emit("closeModal")}}},[i("div",{staticClass:"modal-holder"},[i("h4",[t._v("About "+t._s(t.appInfo.appname))]),t._v(" "),i("p",{staticClass:"modal-paragraph"},[t._v(t._s(t.appInfo.appdescription))]),t._v(" "),i("a",{attrs:{href:t.appInfo.sitelink}},[t._v(t._s(t.appInfo.sitelink))]),t._v(" "),i("button",{staticClass:"modal-button",on:{click:function(e){t.$emit("closeModal")}}},[t._v("Close")])])])])])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.609bbccf9f05fcbb032d.js.map