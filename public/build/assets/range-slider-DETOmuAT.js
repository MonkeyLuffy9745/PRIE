import{au as G,a1 as H,r as V,aN as J,du as K,aM as Q,dv as X,bU as ee,Y as L,a6 as le,bY as N,b as u,p as ae,bZ as te,dw as se,b_ as ue,cC as oe,dx as Y,d as n,dy as ne,dz as A,b3 as re,F as ie,f as h,o as R,b1 as x,l as v,e as d,_ as de,s as p}from"./main-B6snbbeR.js";import{_ as ce}from"./AppCardCode-B87-U3v-.js";import{V as me,a as $}from"./VRow-B2681vdV.js";import"./vue3-perfect-scrollbar-DtQxLb6n.js";import"./VCard-HETOwAdS.js";import"./VAvatar-DkcJ3saq.js";import"./VCardText-BSdQ4zK2.js";import"./VDivider-BP2GefMD.js";const pe=H({...oe(),...ue(),...se(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),w=G()({name:"VRangeSlider",props:pe(),emits:{"update:focused":l=>!0,"update:modelValue":l=>!0,end:l=>!0,start:l=>!0},setup(l,s){let{slots:a,emit:o}=s;const e=V(),i=V(),_=V(),{rtlClasses:U}=J();function P(f){if(!e.value||!i.value)return;const m=Y(f,e.value.$el,l.direction),r=Y(f,i.value.$el,l.direction),b=Math.abs(m),D=Math.abs(r);return b<D||b===D&&m<0?e.value.$el:i.value.$el}const T=K(l),t=Q(l,"modelValue",void 0,f=>f?.length?f.map(m=>T.roundValue(m)):[0,0]),{activeThumbRef:c,hasLabels:O,max:C,min:y,mousePressed:W,onSliderMousedown:E,onSliderTouchstart:Z,position:B,trackContainerRef:q,disabled:k,readonly:g}=X({props:l,steps:T,onSliderStart:()=>{if(k.value||g.value){c.value?.blur();return}o("start",t.value)},onSliderEnd:f=>{let{value:m}=f;if(k.value||g.value)c.value?.blur();else{const r=c.value===e.value?.$el?[m,t.value[1]]:[t.value[0],m];!l.strict&&r[0]<r[1]&&(t.value=r)}o("end",t.value)},onSliderMove:f=>{let{value:m}=f;const[r,b]=t.value;if(k.value||g.value){c.value?.blur();return}!l.strict&&r===b&&r!==y.value&&(c.value=m>r?i.value?.$el:e.value?.$el,c.value?.focus()),c.value===e.value?.$el?t.value=[Math.min(m,b),b]:t.value=[r,Math.max(r,m)]},getActiveThumb:P}),{isFocused:F,focus:M,blur:j}=ee(l),I=L(()=>B(t.value[0])),z=L(()=>B(t.value[1]));return le(()=>{const f=N.filterProps(l),m=!!(l.label||a.label||a.prepend);return u(N,ae({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!a["tick-label"]||O.value,"v-slider--focused":F.value,"v-slider--pressed":W.value,"v-slider--disabled":k.value},U.value,l.class],style:l.style,ref:_},f,{focused:F.value}),{...a,prepend:m?r=>n(ie,null,[a.label?.(r)??(l.label?u(re,{class:"v-slider__label",text:l.label},null):void 0),a.prepend?.(r)]):void 0,default:r=>{let{id:b,messagesId:D}=r;return n("div",{class:"v-slider__container",onMousedown:g.value?void 0:E,onTouchstartPassive:g.value?void 0:Z},[n("input",{id:`${b.value}_start`,name:l.name||b.value,disabled:k.value,readonly:g.value,tabindex:"-1",value:t.value[0]},null),n("input",{id:`${b.value}_stop`,name:l.name||b.value,disabled:k.value,readonly:g.value,tabindex:"-1",value:t.value[1]},null),u(ne,{ref:q,start:I.value,stop:z.value},{"tick-label":a["tick-label"]}),u(A,{ref:e,"aria-describedby":D.value,focused:F&&c.value===e.value?.$el,modelValue:t.value[0],"onUpdate:modelValue":S=>t.value=[S,t.value[1]],onFocus:S=>{M(),c.value=e.value?.$el,C.value!==y.value&&t.value[0]===t.value[1]&&t.value[1]===y.value&&S.relatedTarget!==i.value?.$el&&(e.value?.$el.blur(),i.value?.$el.focus())},onBlur:()=>{j(),c.value=void 0},min:y.value,max:t.value[1],position:I.value,ripple:l.ripple},{"thumb-label":a["thumb-label"]}),u(A,{ref:i,"aria-describedby":D.value,focused:F&&c.value===i.value?.$el,modelValue:t.value[1],"onUpdate:modelValue":S=>t.value=[t.value[0],S],onFocus:S=>{M(),c.value=i.value?.$el,C.value!==y.value&&t.value[0]===t.value[1]&&t.value[0]===C.value&&S.relatedTarget!==e.value?.$el&&(i.value?.$el.blur(),e.value?.$el.focus())},onBlur:()=>{j(),c.value=void 0},min:t.value[0],max:C.value,position:z.value,ripple:l.ripple},{"thumb-label":a["thumb-label"]})])}})}),te({focus:()=>e.value?.$el.focus()},_)}}),ve={__name:"DemoRangeSliderVertical",setup(l){const s=V([20,40]);return(a,o)=>(R(),h(w,{modelValue:v(s),"onUpdate:modelValue":o[0]||(o[0]=e=>x(s)?s.value=e:null),direction:"vertical"},null,8,["modelValue"]))}},fe={__name:"DemoRangeSliderThumbLabel",setup(l){const s=["Winter","Spring","Summer","Fall"],a=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=V([1,2]);return(e,i)=>(R(),h(w,{modelValue:v(o),"onUpdate:modelValue":i[0]||(i[0]=_=>x(o)?o.value=_:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:_})=>[u(de,{icon:a[_]},null,8,["icon"])]),_:1},8,["modelValue"]))}},be={__name:"DemoRangeSliderStep",setup(l){const s=V([20,40]);return(a,o)=>(R(),h(w,{modelValue:v(s),"onUpdate:modelValue":o[0]||(o[0]=e=>x(s)?s.value=e:null),step:"10"},null,8,["modelValue"]))}},Ve={__name:"DemoRangeSliderColor",setup(l){const s=V([10,60]);return(a,o)=>(R(),h(w,{modelValue:v(s),"onUpdate:modelValue":o[0]||(o[0]=e=>x(s)?s.value=e:null),color:"success"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderDisabled",setup(l){const s=V([30,60]);return(a,o)=>(R(),h(w,{modelValue:v(s),"onUpdate:modelValue":o[0]||(o[0]=e=>x(s)?s.value=e:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},ge={__name:"DemoRangeSliderBasic",setup(l){const s=V([10,60]);return(a,o)=>(R(),h(w,{modelValue:v(s),"onUpdate:modelValue":o[0]||(o[0]=e=>x(s)?s.value=e:null)},null,8,["modelValue"]))}},Se={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},he={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},xe={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Be={__name:"range-slider",setup(l){return(s,a)=>{const o=ge,e=ce,i=_e,_=Ve,U=be,P=fe,T=ve;return R(),h(me,null,{default:d(()=>[u($,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Basic",code:v(Se)},{default:d(()=>[a[0]||(a[0]=n("p",null,[p("The "),n("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1)),u(o)]),_:1},8,["code"])]),_:1}),u($,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Disabled",code:v(Re)},{default:d(()=>[a[1]||(a[1]=n("p",null,[p("You cannot interact with "),n("code",null,"disabled"),p(" sliders.")],-1)),u(i)]),_:1},8,["code"])]),_:1}),u($,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Color",code:v(he)},{default:d(()=>[a[2]||(a[2]=n("p",null,[p("Use "),n("code",null,"color"),p(" prop to the sets the slider color. "),n("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1)),u(_)]),_:1},8,["code"])]),_:1}),u($,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Step",code:v(ke)},{default:d(()=>[a[3]||(a[3]=n("p",null,[n("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1)),u(U)]),_:1},8,["code"])]),_:1}),u($,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Thumb label",code:v($e)},{default:d(()=>[a[4]||(a[4]=n("p",null,[p(" Using the "),n("code",null,"tick-labels"),p(" prop along with the "),n("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1)),u(P)]),_:1},8,["code"])]),_:1}),u($,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Vertical",code:v(xe)},{default:d(()=>[a[5]||(a[5]=n("p",null,[p("You can use the "),n("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1)),u(T)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Be as default};
