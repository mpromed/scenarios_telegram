import{o as s,c as n,F as p,i as u,n as d,a as o,l as k,b as g,t as C}from"./index-6c847999.js";const h="/scenarios_telegram/assets/check-green-fa2e30dc.svg";const v={class:"content-sections"},f=["onClick"],b={class:"section-image-container"},D=["src"],S=["src"],x={class:"section-text-container"},B={__name:"ContentSections",props:["componentData"],emits:["action"],setup(i,{emit:l}){const e=i,r=l,m=(c,a)=>{e.componentData.sectionsList[a].isComplete=!0,r("action",c)};return(c,a)=>(s(),n("div",v,[(s(!0),n(p,null,u(e.componentData.sectionsList,(t,_)=>(s(),n("div",{class:d(["section-button",{"section-button-complete":t.isComplete&&e.componentData.markCompletedSections!==!1}]),onClick:y=>m(t.action,_)},[o("div",b,[t.isComplete&&e.componentData.markCompletedSections!==!1?(s(),n("img",{key:0,src:k(h),alt:"section",class:"check-mark"},null,8,D)):g("",!0),o("img",{src:t.image.imageURL,alt:"section",class:"section-button-image"},null,8,S)]),o("div",x,C(t.buttonName),1)],10,f))),256))]))}};export{B as default};
