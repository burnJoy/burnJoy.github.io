import{d as Y,b as i,e as c,t as Z,n as r,o,m as oe,f,u as re,w as q,g as ne,j as de,k as O,l as ie,T as ue,F as ce,p as me,q as pe,s as fe}from"./vue.esm-bundler-Fl0MBJIX.js";const be=["disabled"],k=Y({__name:"DropdownItem",props:{item:{}},setup(n){return(e,a)=>(o(),i("button",{disabled:e.item.disabled,class:r(["py-1.5 px-4 w-full text-left flex text-xs",{"cursor-pointer hover:bg-gray-300":!e.item.disabled}])},[c("span",{class:r(["px-2 rounded-xs uppercase h-5 flex items-center",e.item.style])},Z(e.item.label),3)],10,be))}});k.__docgenInfo={exportName:"default",displayName:"DropdownItem",description:"",tags:{},props:[{name:"item",required:!0,type:{name:"Item"}}],sourceFiles:["D:/test/sb-dropdown/src/components/DropdownComp/DropdownItem.vue"]};const ge=(n,e)=>{const a=x=>{n.value&&!n.value.contains(x.target)&&e()};return setTimeout(()=>{document.addEventListener("click",a)}),()=>{document.removeEventListener("click",a)}},ve=["disabled"],ye={key:0,class:"border-1 border-gray-200 absolute top-full translate-y-1 rounded-xs py-1 shadow-xl shadow-gray-200 bg-white"},we={class:"flex flex-col text-3 font-medium"},he={key:1},ee=Y({__name:"DropdownComp",props:oe({label:{default:"select tag"},list:{},disabled:{type:Boolean}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const e=f(!1),a=re(n,"modelValue"),x=n,D=s=>{var t;e.value=!1,((t=a.value)==null?void 0:t.id)===s.id?a.value=null:a.value=s},se=()=>{e.value=!e.value,e.value&&(l.value=-1)},V=()=>{var s,t;l.value=(l.value+1)%d.value.length,(t=(s=d.value[l.value])==null?void 0:s.querySelector("button"))==null||t.focus()},I=()=>{var s,t;l.value=(l.value-1+d.value.length)%d.value.length,(t=(s=d.value[l.value])==null?void 0:s.querySelector("button"))==null||t.focus()},ae={ArrowDown:V,ArrowUp:I,Enter:()=>l.value>=0&&D(x.list[l.value]),Escape:()=>e.value=!1,Tab:s=>{s.shiftKey?I():V()}},_=s=>{if(!e.value)return;const t=ae[s.key];t&&(s.preventDefault(),t(s))};q(e,()=>{e.value?window.addEventListener("keydown",_):window.removeEventListener("keydown",_)}),ne(()=>{window.removeEventListener("keydown",_)});const C=f(null);let m;q(e,()=>{e.value?m=ge(C,()=>{e.value=!1}):m==null||m()});const d=f([]),l=f(-1);return(s,t)=>{var E,S,N;return o(),i("div",{ref_key:"dropdown",ref:C,class:r(["dropdown-comp relative font-medium z-10",{"opacity-60":s.disabled}])},[c("button",{onClick:se,class:r(["flex items-center",{"cursor-pointer":!s.disabled}]),disabled:s.disabled},[c("span",{class:r(["px-2 rounded-xs uppercase h-8 flex items-center text-sm font-semibold pr-3",[(E=a.value)==null?void 0:E.style,{"bg-white":!((S=a.value)!=null&&S.style)},a.value?"":["border-1","border-gray-300","text-gray-600"]]])},[de(Z(((N=a.value)==null?void 0:N.label)||s.label)+" ",1),c("span",{class:r(["border-t-2 border-r-2 w-2 h-2 border-gray-700 ml-2 ease-in-out transition-all",{"rotate-135":!e.value,"-rotate-45 mt-2":e.value}])},null,2)],2)],10,ve),O(ue,null,{default:ie(()=>[e.value?(o(),i("div",ye,[c("ul",we,[s.list.length?(o(!0),i(ce,{key:0},me(s.list,(p,te)=>{var L;return o(),i("li",{ref_for:!0,ref_key:"items",ref:d},[(o(),fe(k,{onClick:le=>D(p),key:p.id,item:p,onFocus:le=>l.value=te,class:r(["focus:outline-2 outline-blue-500",[{"bg-gray-300":((L=a.value)==null?void 0:L.id)===p.id}]])},null,8,["onClick","item","onFocus","class"]))],512)}),256)):(o(),i("li",he,[O(k,{item:{id:"",label:"list is empty",disabled:!0}})]))])])):pe("",!0)]),_:1})],2)}}});ee.__docgenInfo={exportName:"default",displayName:"DropdownComp",description:"",tags:{},props:[{name:"label",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'select tag'"}},{name:"list",required:!0,type:{name:"Array",elements:[{name:"Item"}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],sourceFiles:["D:/test/sb-dropdown/src/components/DropdownComp/DropdownComp.vue"]};const _e={title:"Example/Dropdown",component:ee,tags:["autodocs"]},u=[{id:"draft",label:"draft",style:"bg-white border-1"},{id:"completed",label:"completed",style:"bg-green-100 text-green-700"},{id:"failed",label:"failed",style:"bg-red-100 text-red-600"}],b={args:{list:u,label:"Choose a status",disabled:!1}},g={args:{list:u,modelValue:u[1]}},v={args:{list:u,modelValue:null,disabled:!0}},y={args:{list:u,modelValue:u[1],disabled:!0}},w={args:{list:[{id:"1",label:"SINGLE OPTION"}],modelValue:null}},h={args:{list:[],modelValue:null}};var P,T,A;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    list,
    label: 'Choose a status',
    disabled: false
  }
}`,...(A=(T=b.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,F,$;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    list,
    modelValue: list[1]
  }
}`,...($=(F=g.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var M,z,G;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    list,
    modelValue: null,
    disabled: true
  }
}`,...(G=(z=v.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,U,j;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    list,
    modelValue: list[1],
    disabled: true
  }
}`,...(j=(U=y.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var H,J,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    list: [{
      id: '1',
      label: 'SINGLE OPTION'
    }],
    modelValue: null
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var R,W,X;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    list: [],
    modelValue: null
  }
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ke=["Default","Preselected","Disabled","PreselectedAndDisabled","SingleItem","EmptyList"];export{b as Default,v as Disabled,h as EmptyList,g as Preselected,y as PreselectedAndDisabled,w as SingleItem,ke as __namedExportsOrder,_e as default};
