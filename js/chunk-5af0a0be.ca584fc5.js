(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af0a0be"],{"06c3":function(t,e,r){t.exports=r.p+"img/trash-can-solid.4839a2f8.svg"},"2a0e":function(t,e,r){"use strict";var c=r("7a23"),n=r("06c3"),a=r.n(n),o={class:"w-full text-center"},i={class:"border-b-2"},u=Object(c["i"])("th",{class:"w-1/3"},"商品名稱",-1),s=Object(c["i"])("th",{class:"w-1/6"},"單價",-1),l=Object(c["i"])("th",{class:"w-1/6"},"數量",-1),d=Object(c["i"])("th",{class:"w-1/6"},"小計",-1),b={key:0,class:"w-1/6"},j={class:"flex flex-col items-center py-3 lg:flex-row"},O=["src","alt"],p=["onUpdate:modelValue","onChange"],h={key:1},f={key:0},g=["onClick"],m=Object(c["i"])("td",null,null,-1),y=Object(c["i"])("td",null,null,-1),v=Object(c["i"])("td",null,null,-1),w={class:"pt-2"},k={key:0};function x(t,e,r,n,x,P){return Object(c["y"])(),Object(c["h"])("table",o,[Object(c["i"])("thead",null,[Object(c["i"])("tr",i,[u,s,l,d,r.order?Object(c["g"])("",!0):(Object(c["y"])(),Object(c["h"])("th",b,"刪除"))])]),Object(c["i"])("tbody",null,[(Object(c["y"])(!0),Object(c["h"])(c["a"],null,Object(c["F"])(r.products,(function(t){return Object(c["y"])(),Object(c["h"])("tr",{key:t.id,class:"border-b-[1px]"},[Object(c["i"])("td",j,[Object(c["i"])("img",{src:t.product.imageUrl,alt:t.product.title,class:"w-[100px] mb-2 lg:mb-0 lg:mr-6 object-cover"},null,8,O),Object(c["i"])("p",null,Object(c["K"])(t.product.title),1)]),Object(c["i"])("td",null,Object(c["K"])(t.product.price),1),Object(c["i"])("td",null,[r.order?Object(c["g"])("",!0):Object(c["V"])((Object(c["y"])(),Object(c["h"])("input",{key:0,type:"number",name:"",id:"","onUpdate:modelValue":function(e){return t.qty=e},class:"w-full px-3 border-2 rounded-lg",onChange:function(e){return P.changeProductQuantity(t)}},null,40,p)),[[c["P"],t.qty]]),r.order?(Object(c["y"])(),Object(c["h"])("p",h,Object(c["K"])(t.qty),1)):Object(c["g"])("",!0)]),Object(c["i"])("td",null,Object(c["K"])(t.final_total),1),r.order?Object(c["g"])("",!0):(Object(c["y"])(),Object(c["h"])("td",f,[Object(c["i"])("img",{src:a.a,alt:"刪除",class:"w-[20px] h-[20px] mx-auto hover:scale-150",onClick:function(e){return P.deleteProduct(t.id)}},null,8,g)]))])})),128)),Object(c["i"])("tr",null,[m,y,v,Object(c["i"])("td",null,[Object(c["i"])("p",w,Object(c["K"])(P.sumsPriceTotal),1)]),r.order?Object(c["g"])("",!0):(Object(c["y"])(),Object(c["h"])("td",k,[Object(c["i"])("img",{src:a.a,alt:"刪除",class:"w-[20px] h-[20px] mx-auto hover:scale-150",onClick:e[0]||(e[0]=function(){return P.deleteProduct&&P.deleteProduct.apply(P,arguments)})})]))])])])}r("d3b7");var P={props:{products:{type:Array,relative:!0},order:{type:Boolean,relative:!1}},emits:["change-product-quantity","delete-product"],data:function(){return{productList:[]}},computed:{sumsPriceTotal:function(){return this.products?this.products.reduce((function(t,e){var r=t+e.final_total;return r}),0):0}},watch:{},methods:{changeProductQuantity:function(t){if(t.qty<1)this.deleteProduct(t.id);else{var e={id:t.id,data:{product_id:t.product_id,qty:t.qty}};this.$emit("change-product-quantity",e)}},deleteProduct:function(t){this.$emit("delete-product",t)}}},C=r("6b0d"),D=r.n(C);const _=D()(P,[["render",x]]);e["a"]=_},"37db":function(t,e,r){"use strict";var c=r("7a23"),n={class:"grid grid-cols-1 mb-8 lg:text-lg sm:grid-cols-3"};function a(t,e,r,a,o,i){return Object(c["y"])(),Object(c["h"])("ul",n,[Object(c["i"])("li",{class:Object(c["s"])("cart"===r.mode?["breadcrumb-active","breadcrumb-active-right-arrow"]:["breadcrumb-item","breadcrumb-right-arrow"])}," 購物車 ",2),Object(c["i"])("li",{class:Object(c["s"])("information"===r.mode?["breadcrumb-active","breadcrumb-active-right-arrow"]:["breadcrumb-item","breadcrumb-right-arrow"])}," 輸入訂購人資訊 ",2),Object(c["i"])("li",{class:Object(c["s"])("check"===r.mode?"breadcrumb-active":"breadcrumb-item")},"確認訂單詳情",2)])}var o={props:["mode"]},i=(r("c676"),r("6b0d")),u=r.n(i);const s=u()(o,[["render",a],["__scopeId","data-v-5c504197"]]);e["a"]=s},"93ee":function(t,e,r){},a988:function(t,e,r){"use strict";r.r(e);var c=r("7a23"),n={key:0},a={class:"mt-8 ml-auto lg:w-1/3"},o=Object(c["j"])("下一步"),i={key:1},u=Object(c["i"])("p",{class:"mb-5 text-2xl font-bold"},"購物車沒有東西~快去選購吧",-1),s=Object(c["j"])("去購物");function l(t,e,r,l,d,b){var j=Object(c["H"])("breadcrumb"),O=Object(c["H"])("cart-product-list"),p=Object(c["H"])("base-btn"),h=Object(c["H"])("router-link"),f=Object(c["H"])("base-loading"),g=Object(c["H"])("base-dialog");return Object(c["y"])(),Object(c["h"])(c["a"],null,[0!==b.cartData.length?(Object(c["y"])(),Object(c["h"])("div",n,[Object(c["k"])(j,{mode:"cart"}),Object(c["k"])(O,{products:b.cartData,onChangeProductQuantity:b.changeProductQuantity,onDeleteProduct:b.deleteProduct},null,8,["products","onChangeProductQuantity","onDeleteProduct"]),Object(c["i"])("div",a,[Object(c["k"])(h,{to:"/orderinformation"},{default:Object(c["U"])((function(){return[Object(c["k"])(p,{class:"w-full"},{default:Object(c["U"])((function(){return[o]})),_:1})]})),_:1})])])):Object(c["g"])("",!0),0===b.cartData.length?(Object(c["y"])(),Object(c["h"])("div",i,[u,Object(c["k"])(h,{to:"/product"},{default:Object(c["U"])((function(){return[Object(c["k"])(p,{class:"block w-full",outline:""},{default:Object(c["U"])((function(){return[s]})),_:1})]})),_:1})])):Object(c["g"])("",!0),Object(c["k"])(f,{show:d.isLoading},null,8,["show"]),Object(c["k"])(g,{show:!!d.error,title:"Error",onClose:b.closeError},{default:Object(c["U"])((function(){return[Object(c["j"])(Object(c["K"])(d.error),1)]})),_:1},8,["show","onClose"])],64)}var d=r("1da1"),b=(r("96cf"),r("2a0e")),j=r("37db"),O={components:{CartProductList:b["a"],Breadcrumb:j["a"]},data:function(){return{error:"",isLoading:!1}},computed:{cartData:function(){return this.$store.getters["forestageCart/cartData"]}},methods:{getCartData:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,t.$store.dispatch("forestageCart/getCart");case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.error=e.t0;case 9:return e.prev=9,t.isLoading=!1,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},closeError:function(){this.error=""},changeProductQuantity:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,e.$store.dispatch("forestageCart/changeProductQuantity",t);case 4:e.getCartData(),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),e.error=r.t0;case 10:return r.prev=10,e.isLoading=!1,r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})))()},deleteProduct:function(t){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,e.$store.dispatch("forestageCart/deleteProduct",t);case 4:e.getCartData(),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),e.error=r.t0;case 10:return r.prev=10,e.isLoading=!1,r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})))()}},mounted:function(){this.getCartData()}},p=r("6b0d"),h=r.n(p);const f=h()(O,[["render",l]]);e["default"]=f},c676:function(t,e,r){"use strict";r("93ee")}}]);
//# sourceMappingURL=chunk-5af0a0be.ca584fc5.js.map