import{r as d,o as s,c as a,a as c,F as f,i as k,b as _,w as x,v as g}from"./index-0fca59b9.js";const u="/TestingApp152med/assets/filled_star-95ccb81b.svg",h="/TestingApp152med/assets/empty_star-9f8cf3f3.svg";const y={class:"feedback-wrapper"},D={key:0,class:"stars-section"},T=["innerHTML"],b={class:"rating"},M=["onMouseover","onClick"],C={key:0,src:u,class:"star"},H={key:1,src:u,class:"star"},L={key:2,src:h,class:"star"},w={key:1,class:"text-section"},F=["innerHTML"],V={__name:"ContentFeedback",props:["componentData","testStyle"],setup(p){const e=p,n=d(0),r=d(0),o=d(!1);e.componentData.feedbackText="";const m=i=>{o.value=!1,i==n.value?n.value=0:n.value=i,e.componentData.rating=n.value};return(i,l)=>(s(),a("div",y,[e.componentData.showStars?(s(),a("div",D,[c("div",{innerHTML:e.componentData.starsDescription,class:"stars-text"},null,8,T),c("div",b,[(s(),a(f,null,k(5,t=>c("span",{key:t,class:"star-container",onMouseover:v=>(r.value=t,o.value=!0),onMouseleave:l[0]||(l[0]=v=>(r.value=n.value,o.value=!1)),onClick:v=>m(t)},[t<=n.value&&!o.value?(s(),a("img",C)):t<=r.value&&o.value?(s(),a("img",H)):(s(),a("img",L))],40,M)),64))])])):_("",!0),e.componentData.showText?(s(),a("div",w,[c("div",{innerHTML:e.componentData.text,class:"stars-text"},null,8,F),x(c("textarea",{"onUpdate:modelValue":l[1]||(l[1]=t=>e.componentData.feedbackText=t),type:"text",class:"feedback-input"},null,512),[[g,e.componentData.feedbackText]])])):_("",!0)]))}};export{V as default};
