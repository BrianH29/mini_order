import{S as b}from"./SubNavBar.b98eaa00.js";import{_ as i,t as P,o as n,c as s,d as m,a as e,b as c,u as r,H as v,F as y,r as h}from"./index.f9bf42c2.js";import{a as d}from"./NavBar.3e7bc420.js";import{C as f}from"./CartQuantity.2688af7f.js";const B={class:"bill-content"},$={class:"bill-content-main"},C={class:"bill-goods"},x={class:"bill-content-sub"},S={__name:"BillContent",props:{goodsName:{type:String},goodsQuantity:{type:Number},goodsOriginPrice:{type:Number}},setup(a){const t=a,o=d(),{goodsQuantity:l,goodsOriginPrice:_}=P(t),u=()=>l.value*_.value;return o.setSaveTotalPrice(u()),(p,g)=>(n(),s("div",B,[m("div",$,[e(c,{content:a.goodsName,class:"goods-name"},null,8,["content"]),m("section",C,[e(c,{content:`${r(l)}\uAC1C`,class:"goods-quantity"},null,8,["content"]),e(c,{content:r(v).withComma(u()),class:"goods-total-price"},null,8,["content"])])]),m("div",x,[e(c,{content:"\uAE30\uBCF8",class:"goods-type"}),e(c,{content:r(v).withComma(r(_)),class:"goods-origin-price"},null,8,["content"])])]))}},w=i(S,[["__scopeId","data-v-ab05edfc"]]);const N={class:"bill-total"},k={__name:"BillTotalPrice",setup(a){const t=d();return(o,l)=>(n(),s("div",N,[e(c,{content:"\uCD1D\uC8FC\uBB38\uAE08\uC561"}),e(c,{content:o.$commons.withComma(r(t).getTotalOrderPrice)},null,8,["content"])]))}},O=i(k,[["__scopeId","data-v-50788d8e"]]);const T={class:"bill-wrapper"},I={__name:"BillContentWrapper",setup(a){const t=d();return(o,l)=>(n(),s("div",T,[(n(!0),s(y,null,h(r(t).getSaveOrder,(_,u)=>(n(),s("div",{class:"bill-content-wrapper",key:u},[(n(!0),s(y,null,h(_.item,(p,g)=>(n(),s("div",{key:g},[e(w,{goodsName:p.name,goodsQuantity:p.selectedCount,goodsOriginPrice:p.price},null,8,["goodsName","goodsQuantity","goodsOriginPrice"])]))),128))]))),128)),e(O,{class:"bill-total-wrapper"})]))}},Q=i(I,[["__scopeId","data-v-0c50d3e3"]]);const R={class:"bill-result"},W={__name:"BillResult",setup(a){const t=d();return(o,l)=>(n(),s("div",R,[e(c,{content:"1\uC778\uB2F9",class:"bill-result-title"}),e(c,{content:`${o.$commons.withComma(r(t).getTotalOrderPrice/r(t).getPerPerson)}\uC6D0`,class:"bill-result-amount"},null,8,["content"])]))}},q=i(W,[["__scopeId","data-v-c84d1954"]]);const D={class:"dutch-pay-wrapper"},E={__name:"DutchPay",setup(a){const t=d(),o=l=>{switch(l){case"increase":t.increasePerPerson();break;case"decrease":t.decreasePerPerson();break}};return(l,_)=>(n(),s("div",D,[e(c,{content:"\uB354\uCE58\uD398\uC774",class:"title"}),e(f,{quantity:r(t).getPerPerson,onClickEvent:o},null,8,["quantity"])]))}},F=i(E,[["__scopeId","data-v-cceef3be"]]),V={__name:"BillWrapper",setup(a){return(t,o)=>(n(),s("div",null,[e(Q),e(F),e(q)]))}},A={__name:"billPage",setup(a){return(t,o)=>(n(),s("div",null,[e(b,{content:"\uACC4\uC0B0\uC11C"}),e(V)]))}};export{A as default};