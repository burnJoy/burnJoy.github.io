import{d as X,b as u,e as c,t as Y,n as r,o,m as le,f,u as oe,w as L,g as re,j as ne,k as P,l as de,T as ue,F as ie,p as ce,q as me,s as pe}from"./vue.esm-bundler-Fl0MBJIX.js";const fe=["disabled"],k=X({__name:"DropdownItem",props:{item:{}},setup(n){return(e,a)=>(o(),u("button",{disabled:e.item.disabled,class:r(["py-1.5 px-4 w-full text-left flex text-xs",{"cursor-pointer hover:bg-gray-300":!e.item.disabled}])},[c("span",{class:r(["px-2 rounded-xs uppercase h-5 flex items-center",e.item.style])},Y(e.item.label),3)],10,fe))}});k.__docgenInfo={exportName:"default",displayName:"DropdownItem",description:"",tags:{},props:[{name:"item",required:!0,type:{name:"Item"}}],sourceFiles:["D:/test/sb-dropdown/src/components/DropdownComp/DropdownItem.vue"]};const be=(n,e)=>{const a=x=>{n.value&&!n.value.contains(x.target)&&e()};return setTimeout(()=>{document.addEventListener("click",a)}),()=>{document.removeEventListener("click",a)}},ve=["disabled"],ge={key:0,class:"border-1 border-gray-200 absolute top-full translate-y-1 rounded-xs py-1 shadow-xl shadow-gray-200 bg-white"},ye={class:"flex flex-col text-3 font-medium"},we={key:1},Z=X({__name:"DropdownComp",props:le({label:{default:"select tag"},list:{},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=f(!1),a=oe(n,"modelValue"),x=n,D=s=>{var t;e.value=!1,((t=a.value)==null?void 0:t.id)===s.id?a.value=null:a.value=s},ee=()=>{e.value=!e.value,e.value&&(l.value=-1)},V=()=>{var s,t;l.value=(l.value+1)%d.value.length,(t=(s=d.value[l.value])==null?void 0:s.querySelector("button"))==null||t.focus()},se={ArrowDown:V,ArrowUp:()=>{var s,t;l.value=(l.value-1+d.value.length)%d.value.length,(t=(s=d.value[l.value])==null?void 0:s.querySelector("button"))==null||t.focus()},Enter:()=>l.value>=0&&D(x.list[l.value]),Escape:()=>e.value=!1,Tab:()=>{V()}},_=s=>{if(!e.value)return;const t=se[s.key];t&&(s.preventDefault(),t())};L(e,()=>{e.value?window.addEventListener("keydown",_):window.removeEventListener("keydown",_)}),re(()=>{window.removeEventListener("keydown",_)});const I=f(null);let m;L(e,()=>{e.value?m=be(I,()=>{e.value=!1}):m==null||m()});const d=f([]),l=f(-1);return(s,t)=>{var C,E,S;return o(),u("div",{ref_key:"dropdown",ref:I,class:r(["dropdown-comp relative font-medium z-10",{"opacity-60":s.disabled}])},[c("button",{onClick:ee,class:r(["flex items-center",{"cursor-pointer":!s.disabled}]),disabled:s.disabled},[c("span",{class:r(["px-2 rounded-xs uppercase h-8 flex items-center text-sm font-semibold pr-3",[(C=a.value)==null?void 0:C.style,{"bg-white":!((E=a.value)!=null&&E.style)},a.value?"":["border-1","border-gray-300","text-gray-600"]]])},[ne(Y(((S=a.value)==null?void 0:S.label)||s.label)+" ",1),c("span",{class:r(["border-t-2 border-r-2 w-2 h-2 border-gray-700 ml-2 ease-in-out transition-all",{"rotate-135":!e.value,"-rotate-45":e.value,"mt-2":e.value}])},null,2)],2)],10,ve),P(ue,null,{default:de(()=>[e.value?(o(),u("div",ge,[c("ul",ye,[s.list.length?(o(!0),u(ie,{key:0},ce(s.list,(p,ae)=>{var N;return o(),u("li",{ref_for:!0,ref_key:"items",ref:d},[(o(),pe(k,{onClick:te=>D(p),key:p.id,item:p,onFocus:te=>l.value=ae,class:r(["focus:outline-2 outline-blue-500",[{"bg-gray-300":((N=a.value)==null?void 0:N.id)===p.id}]])},null,8,["onClick","item","onFocus","class"]))],512)}),256)):(o(),u("li",we,[P(k,{item:{id:"",label:"list is empty",disabled:!0}})]))])])):me("",!0)]),_:1})],2)}}});Z.__docgenInfo={exportName:"default",displayName:"DropdownComp",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'select tag'"}},{name:"list",required:!0,type:{name:"Array",elements:[{name:"Item"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],sourceFiles:["D:/test/sb-dropdown/src/components/DropdownComp/DropdownComp.vue"]};const _e={title:"Example/Dropdown",component:Z,tags:["autodocs"]},i=[{id:"draft",label:"draft",style:"bg-white border-1"},{id:"completed",label:"completed",style:"bg-green-100 text-green-700"},{id:"failed",label:"failed",style:"bg-red-100 text-red-600"}],b={args:{list:i,label:"Choose a status",disabled:!1}},v={args:{list:i,modelValue:i[1]}},g={args:{list:i,modelValue:null,disabled:!0}},y={args:{list:i,modelValue:i[1],disabled:!0}},w={args:{list:[{id:"1",label:"SINGLE OPTION"}],modelValue:null}},h={args:{list:[],modelValue:null}};var q,O,T;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    list,
    label: 'Choose a status',
    disabled: false
  }
}`,...(T=(O=b.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var A,B,F;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    list,
    modelValue: list[1]
  }
}`,...(F=(B=v.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var $,M,z;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    list,
    modelValue: null,
    disabled: true
  }
}`,...(z=(M=g.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var G,U,j;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    list,
    modelValue: list[1],
    disabled: true
  }
}`,...(j=(U=y.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var K,H,J;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    list: [{
      id: '1',
      label: 'SINGLE OPTION'
    }],
    modelValue: null
  }
}`,...(J=(H=w.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,R,W;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    list: [],
    modelValue: null
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const ke=["Default","Preselected","Disabled","PreselectedAndDisabled","SingleItem","EmptyList"];export{b as Default,g as Disabled,h as EmptyList,v as Preselected,y as PreselectedAndDisabled,w as SingleItem,ke as __namedExportsOrder,_e as default};
