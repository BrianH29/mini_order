import{D as d,s as p,H as _,_ as i,g as m,o as c,e as h,c as n,a,I as f,b as u,d as v,E as P,A as g,B as y,G as S,J as b}from"./index.f9bf42c2.js";const T=d({id:"useCart",state:()=>({cartList:[],showSlide:!1,totalPrice:0,count:1}),getters:{getSaveGoods:e=>e.cartList,getTotalPrice:e=>e.totalPrice,getTotalQuantity:e=>e.count},actions:{saveGoods(e){const s=p();console.log(e),this.cartList.some(o=>o.id===e.id)?(s.setToastPopup(`\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 ${e.name} \uC0C1\uD488\uC744 \uCD94\uAC00\uD588\uC2B5\uB2C8\uB2E4.`),this.increaseQuantity(e.id)):(s.setToastPopup(`\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 ${e.name} \uC0C1\uD488\uC744 \uB2F4\uC558\uC2B5\uB2C8\uB2E4.`),this.cartList=[...this.cartList,{...e,selectedCount:1,totalPrice:e.price}],this.totalPrice=e.price)},increaseQuantity(e){const s=p(),t=this.cartList.find(r=>r.id===e);let o=++t.selectedCount;t.totalPrice=t.price+t.totalPrice,o>t.orderMaxQuantity&&(--t.selectedCount,t.totalPrice=t.totalPrice-t.price,--o,s.setToastPopup("\uB354 \uC774\uC0C1 \uC218\uB7C9\uC744 \uCD94\uAC00\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.")),this.totalPrice=t.totalPrice,this.count=o},decreaseQuantity(e){const s=this.cartList.find(o=>o.id===e),t=--s.selectedCount;s.totalPrice=s.totalPrice-s.price,t<1&&(this.setSlide(!1),this.cartList=this.cartList.filter(o=>o.id!==e)),this.totalPrice=this.totalPrice-s.totalPrice,this.count=this.count-t},deleteGoods(e){this.cartList=this.cartList.filter(s=>s.id!==e),this.cartList.length<=0&&this.setSlide(!1)},setSlide(e){this.showSlide=e}}}),H=d("useOrder",{state:()=>({saveOrder:[],totalOrderPrice:0,perPerson:1}),getters:{getSaveOrder:e=>e.saveOrder,getOrderNumber:e=>e.saveOrder.length,getTotalOrderPrice:e=>e.totalOrderPrice,getPerPerson:e=>e.perPerson},actions:{setSaveOrder(){const e=T();this.saveOrder.length===0?this.saveOrder=[{orderTime:_.currentTime(),item:e.getSaveGoods}]:this.saveOrder=[{orderTime:_.currentTime(),item:e.getSaveGoods},...this.saveOrder],e.cartList=[]},setSaveTotalPrice(e){this.totalOrderPrice+=parseInt(e)},increasePerPerson(){++this.perPerson},decreasePerPerson(){--this.perPerson===0&&++this.perPerson}}});const k={__name:"HamburgMenuBtn",emits:["clickEvent"],setup(e,{emit:s}){const t=o=>{s("clickEvent",o)};return(o,r)=>{const l=m("font-awesome-icon");return c(),h(l,{icon:"fa-solid fa-bars",color:"#ffffff",size:"3x",onClick:r[0]||(r[0]=Q=>t("menu"))})}}},N=i(k,[["__scopeId","data-v-f423fd07"]]);const O={key:0,class:"nav-control"},C={__name:"NavControl",props:{controlType:{type:String,default:"main"}},emits:["clickEvent"],setup(e,{emit:s}){const t=o=>{s("clickEvent",o)};return(o,r)=>e.controlType==="main"?(c(),n("div",O,[a(N)])):(c(),n("div",{key:1,class:"nav-control",onClick:r[0]||(r[0]=l=>t("history"))},[a(f,{icon:"fa-solid fa-angle-left",size:"3x"}),a(u)]))}},x=i(C,[["__scopeId","data-v-2d5a0ae9"]]);const L=e=>(g("data-v-51218581"),e=e(),y(),e),w={class:"table-wrapper"},B=L(()=>v("p",{class:"table-wrapper-title"},"Table No.",-1)),E={class:"table-wrapper-number"},I={__name:"TableNumber",props:{title:{type:String,default:"Menu"}},setup(e){return(s,t)=>(c(),n("div",w,[B,v("p",E,P(e.title),1)]))}},$=i(I,[["__scopeId","data-v-51218581"]]);const G={class:"nav-wrapper"},M={__name:"NavBar",props:{controlType:{type:String},content:{type:String},tableNumber:{type:String}},setup(e){const s=b(),t=o=>{switch(o){case"history":s.go(-1);break}};return(o,r)=>(c(),n("div",G,[a(x,{controlType:e.controlType,onClickEvent:t},null,8,["controlType"]),a(u,{content:e.content,class:S(e.controlType==="main"?"nav-wrapper-main":"nav-wrapper-sub")},null,8,["content","class"]),a($,{title:e.tableNumber},null,8,["title"])]))}},z=i(M,[["__scopeId","data-v-5782e074"]]);export{z as N,H as a,T as u};