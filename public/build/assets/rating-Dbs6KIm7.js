import{r as f,f as _,o as c,e as l,b as e,_ as $,p as S,b1 as g,l as s,c as V,d as a,ao as j,t as U,F as h,h as k,s as r}from"./main-B_3U4rnL.js";import{V as m}from"./VRating-Bc7vTT4I.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as F}from"./AppCardCode-CEj7I9jp.js";import{V as I,a as p}from"./VRow-rSP3UPT0.js";import"./vue3-perfect-scrollbar-DXH9MElz.js";import"./VCard-CHvE1CVF.js";import"./VAvatar-K7hB1Kku.js";import"./VCardText-CbE5M2-5.js";import"./VDivider-CHuFBZ5S.js";const B={__name:"DemoRatingItemSlot",setup(d){const n=f(4.5);return(o,i)=>(c(),_(m,{modelValue:s(n),"onUpdate:modelValue":i[0]||(i[0]=t=>g(n)?n.value=t:null)},{item:l(t=>[e($,S(t,{size:25,color:t.isFilled?"success":"secondary",class:"me-3",icon:t.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},T={__name:"DemoRatingIncremented",setup(d){const n=f(4.5);return(o,i)=>(c(),_(m,{modelValue:s(n),"onUpdate:modelValue":i[0]||(i[0]=t=>g(n)?n.value=t:null),"half-increments":"",hover:""},null,8,["modelValue"]))}},L={};function M(d,n){return c(),_(m,{hover:""})}const N=v(L,[["render",M]]),H={};function P(d,n){return c(),_(m,{readonly:"","model-value":4})}const A=v(H,[["render",P]]),E={};function q(d,n){return c(),_(m,{clearable:""})}const G=v(E,[["render",q]]),J={class:"font-weight-medium mb-0"},K={__name:"DemoRatingLength",setup(d){const n=f(5),o=f(2);return(i,t)=>(c(),V(h,null,[t[2]||(t[2]=a("div",{class:"text-caption"}," Custom length ",-1)),e(j,{modelValue:s(n),"onUpdate:modelValue":t[0]||(t[0]=u=>g(n)?n.value=u:null),min:1,max:7},null,8,["modelValue"]),e(m,{modelValue:s(o),"onUpdate:modelValue":t[1]||(t[1]=u=>g(o)?o.value=u:null),length:s(n)},null,8,["modelValue","length"]),a("p",J," Model: "+U(s(o)),1)],64))}},O={class:"d-flex flex-column"},Q={__name:"DemoRatingSize",setup(d){const n=f(4);return(o,i)=>(c(),V("div",O,[e(m,{modelValue:s(n),"onUpdate:modelValue":i[0]||(i[0]=t=>g(n)?n.value=t:null),size:"x-small"},null,8,["modelValue"]),e(m,{modelValue:s(n),"onUpdate:modelValue":i[1]||(i[1]=t=>g(n)?n.value=t:null),size:"small"},null,8,["modelValue"]),e(m,{modelValue:s(n),"onUpdate:modelValue":i[2]||(i[2]=t=>g(n)?n.value=t:null),size:"large"},null,8,["modelValue"])]))}},W={class:"d-flex flex-column"},X={__name:"DemoRatingColors",setup(d){const n=f(4),o=["primary","secondary","success","info","warning","error"];return(i,t)=>(c(),V("div",W,[(c(),V(h,null,k(o,u=>e(m,{key:u,modelValue:s(n),"onUpdate:modelValue":t[0]||(t[0]=R=>g(n)?n.value=R:null),color:u},null,8,["modelValue","color"])),64))]))}},Y={};function Z(d,n){return c(),_(m,{density:"compact"})}const ee=v(Y,[["render",Z]]),te={};function ne(d,n){return c(),_(m)}const oe=v(te,[["render",ne]]),le={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},ae={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},se={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},re={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},ie={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},me={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},ce={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},de={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},pe={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},ue={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`},ze={__name:"rating",setup(d){return(n,o)=>{const i=oe,t=F,u=ee,R=X,y=Q,b=K,x=G,z=A,C=N,w=T,D=B;return c(),_(I,{class:"match-height"},{default:l(()=>[e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Basic",code:s(le)},{default:l(()=>[o[0]||(o[0]=a("p",null,[r("The "),a("code",null,"v-rating"),r(" component provides a simple interface for gathering user feedback.")],-1)),e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Density",code:s(re)},{default:l(()=>[o[1]||(o[1]=a("p",null,[r("Control the space occupied by "),a("code",null,"v-rating"),r(" items using the "),a("code",null,"density"),r(" prop.")],-1)),e(u)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Colors",code:s(se)},{default:l(()=>[o[2]||(o[2]=a("p",null,[r("The "),a("code",null,"v-rating"),r(" component can be colored as you want, you can set both selected and not selected colors.")],-1)),e(R)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Size",code:s(ue)},{default:l(()=>[o[3]||(o[3]=a("p",null,[r("Utilize the same sizing classes available in "),a("code",null,"v-icon"),r(" or provide your own with the "),a("code",null,"size"),r(" prop.")],-1)),e(y)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Length",code:s(de)},{default:l(()=>[o[4]||(o[4]=a("p",null,[r("Change the number of items by modifying the the "),a("code",null,"length"),r(" prop.")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Clearable",code:s(ae)},{default:l(()=>[o[5]||(o[5]=a("p",null,[r("Use "),a("code",null,"clearable"),r(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1)),e(x)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Readonly",code:s(pe)},{default:l(()=>[o[6]||(o[6]=a("p",null,[r("For ratings that are not meant to be changed you can use "),a("code",null,"readonly"),r(" prop.")],-1)),e(z)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Hover",code:s(ie)},{default:l(()=>[o[7]||(o[7]=a("p",null,"Provides visual feedback when hovering over icons",-1)),e(C)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Incremented",code:s(me)},{default:l(()=>[o[8]||(o[8]=a("p",null,[r("The "),a("code",null,"half-increments"),r(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(t,{title:"Item slot",code:s(ce)},{default:l(()=>[o[9]||(o[9]=a("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1)),e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ze as default};
