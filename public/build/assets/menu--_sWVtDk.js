import{V as l,a as x}from"./VList-CrjmOZbb.js";import{f as b,o as V,e,b as t,b8 as L,d as p,ah as m,ai as c,aj as d,p as M,s as i,b0 as u,r as y,a as k,l as v,b1 as h,c as _,F as C,h as D,t as P}from"./main-B6snbbeR.js";import{a as S}from"./avatar-1-mrBiEG2D.js";import{V as I,d as A}from"./VCard-HETOwAdS.js";import{V as $}from"./VDivider-BP2GefMD.js";import{V as j}from"./VCardText-BSdQ4zK2.js";import{_ as F}from"./AppCardCode-B87-U3v-.js";import{V as E,a as O}from"./VRow-B2681vdV.js";import"./ssrBoot-C-ymkyqZ.js";import"./VAvatar-DkcJ3saq.js";import"./vue3-perfect-scrollbar-DtQxLb6n.js";const R={__name:"DemoMenuActivatorAndTooltip",setup(f){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),b(u,{location:"top"},{activator:e(({props:n})=>[t(L,{location:"top"},{activator:e(({props:r})=>[t(m,c(d(M(n,r))),{default:e(()=>[...o[0]||(o[0]=[i(" Dropdown w/ Tooltip ",-1)])]),_:1},16)]),default:e(()=>[o[1]||(o[1]=p("span",null,"I am a Tooltip",-1))]),_:2},1024)]),default:e(()=>[t(l,{items:a})]),_:1}))}},G={__name:"DemoMenuPopover",setup(f){const a=y(!1);return(s,o)=>{const n=k("IconBtn");return V(),b(u,{modelValue:v(a),"onUpdate:modelValue":o[0]||(o[0]=r=>h(a)?a.value=r:null),location:"top"},{activator:e(({props:r})=>[t(m,c(d(r)),{default:e(()=>[...o[1]||(o[1]=[i(" Menu as Popover ",-1)])]),_:1},16)]),default:e(()=>[t(I,{"max-width":"300"},{default:e(()=>[t(l,null,{default:e(()=>[t(x,{"prepend-avatar":v(S),title:"John Leider",subtitle:"Founder of Vuetify",class:"mx-0"},null,8,["prepend-avatar"])]),_:1}),t($),t(j,null,{default:e(()=>[...o[2]||(o[2]=[i(" Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake. Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee. ",-1)])]),_:1}),t(A,null,{default:e(()=>[t(n,{icon:"tabler-heart"}),t(n,{icon:"tabler-bookmark"}),t(n,{icon:"tabler-thumb-down"})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},H={__name:"DemoMenuOpenOnHover",setup(f){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),b(u,{"open-on-hover":""},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[0]||(o[0]=[i(" On hover ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1}))}},J={class:"demo-space-x"},N={__name:"DemoMenuLocation",setup(f){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),_("div",J,[t(u,{location:"top"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[0]||(o[0]=[i(" Top ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{location:"bottom"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[1]||(o[1]=[i(" Bottom ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{location:"start"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[2]||(o[2]=[i(" Start ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{location:"end"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[3]||(o[3]=[i(" End ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1})]))}},X={class:"demo-space-x"},Y={__name:"DemoMenuCustomTransitions",setup(f){const a=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(s,o)=>(V(),_("div",X,[t(u,{transition:"scale-transition"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[0]||(o[0]=[i(" Scale Transition ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{transition:"slide-x-transition"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[1]||(o[1]=[i(" Slide X Transition ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1}),t(u,{transition:"slide-y-transition"},{activator:e(({props:n})=>[t(m,c(d(n)),{default:e(()=>[...o[2]||(o[2]=[i(" Slide Y Transition ",-1)])]),_:1},16)]),default:e(()=>[t(l,{items:a})]),_:1})]))}},U={class:"demo-space-x"},z={__name:"DemoMenuBasic",setup(f){const a=["primary","secondary","success","info","warning","error"],s=[{title:"Option 1",value:"Option 1"},{title:"Option 2",value:"Option 2"},{title:"Option 3",value:"Option 3"}];return(o,n)=>(V(),_("div",U,[(V(),_(C,null,D(a,r=>t(u,{key:r},{activator:e(({props:B})=>[t(m,M({color:r},{ref_for:!0},B),{default:e(()=>[i(P(r),1)]),_:2},1040,["color"])]),default:e(()=>[t(l,{items:s})]),_:2},1024)),64))]))}},W={ts:`<script lang="ts" setup>
import { mergeProps } from 'vue'

const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
import { mergeProps } from 'vue'

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu location="top">
    <template #activator="{ props: menuProps }">
      <VTooltip location="top">
        <template #activator="{ props: tooltipProps }">
          <VBtn v-bind="mergeProps(menuProps, tooltipProps)">
            Dropdown w/ Tooltip
          </VBtn>
        </template>
        <span>I am a Tooltip</span>
      </VTooltip>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},q={ts:`<script lang="ts" setup>
const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const menusVariant = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]

const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu
      v-for="menu in menusVariant"
      :key="menu"
    >
      <template #activator="{ props }">
        <VBtn
          :color="menu"
          v-bind="props"
        >
          {{ menu }}
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},K={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu transition="scale-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Scale Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-x-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide X Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu transition="slide-y-transition">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Slide Y Transition
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Q={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <div class="demo-space-x">
    <VMenu location="top">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Top
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="bottom">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Bottom
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="start">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          Start
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>

    <VMenu location="end">
      <template #activator="{ props }">
        <VBtn v-bind="props">
          End
        </VBtn>
      </template>

      <VList :items="items" />
    </VMenu>
  </div>
</template>
`},Z={ts:`<script lang="ts" setup>
const items = [{ title: 'Option 1', value: 'Option 1' }, { title: 'Option 2', value: 'Option 2' }, { title: 'Option 3', value: 'Option 3' }]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Option 1',
    value: 'Option 1',
  },
  {
    title: 'Option 2',
    value: 'Option 2',
  },
  {
    title: 'Option 3',
    value: 'Option 3',
  },
]
<\/script>

<template>
  <VMenu open-on-hover>
    <template #activator="{ props }">
      <VBtn v-bind="props">
        On hover
      </VBtn>
    </template>

    <VList :items="items" />
  </VMenu>
</template>
`},tt={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const menu = ref(false)
<\/script>

<template>
  <VMenu
    v-model="menu"
    location="top"
  >
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Menu as Popover
      </VBtn>
    </template>

    <VCard max-width="300">
      <VList>
        <VListItem
          :prepend-avatar="avatar1"
          title="John Leider"
          subtitle="Founder of Vuetify"
          class="mx-0"
        />
      </VList>

      <VDivider />

      <VCardText>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </VCardText>

      <VCardActions>
        <IconBtn icon="tabler-heart" />
        <IconBtn icon="tabler-bookmark" />
        <IconBtn icon="tabler-thumb-down" />
      </VCardActions>
    </VCard>
  </VMenu>
</template>
`},ct={__name:"menu",setup(f){return(a,s)=>{const o=z,n=F,r=Y,B=N,w=H,g=G,T=R;return V(),b(E,{class:"match-height"},{default:e(()=>[t(O,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Basic",code:v(q)},{default:e(()=>[s[0]||(s[0]=p("p",null," Remember to put the element that activates the menu in the activator slot. ",-1)),t(o)]),_:1},8,["code"])]),_:1}),t(O,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Custom transitions",code:v(K)},{default:e(()=>[s[1]||(s[1]=p("p",null,[i("Vuetify comes with 3 standard transitions, "),p("code",null,"scale"),i(", "),p("code",null,"slide-x"),i(" and "),p("code",null,"slide-y"),i(". Use "),p("code",null,"transition"),i(" prop to add transition to a menu.")],-1)),t(r)]),_:1},8,["code"])]),_:1}),t(O,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Location",code:v(Q)},{default:e(()=>[s[2]||(s[2]=p("p",null,[i("Menu can be offset relative to the activator by using the "),p("code",null,"location"),i(" prop.")],-1)),t(B)]),_:1},8,["code"])]),_:1}),t(O,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Open on hover",code:v(Z)},{default:e(()=>[s[3]||(s[3]=p("p",null,[i("Menus can be accessed using hover instead of clicking with the "),p("code",null,"open-on-hover"),i(" prop.")],-1)),t(w)]),_:1},8,["code"])]),_:1}),t(O,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Popover",code:v(tt)},{default:e(()=>[s[4]||(s[4]=p("p",null,"A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.",-1)),t(g)]),_:1},8,["code"])]),_:1}),t(O,{cols:"12",md:"6"},{default:e(()=>[t(n,{title:"Activator and tooltip",code:v(W)},{default:e(()=>[s[5]||(s[5]=p("p",null,[i("With the new "),p("code",null,"v-slot"),i(" syntax, nested activators such as those seen with a "),p("code",null,"v-menu"),i(" and "),p("code",null,"v-tooltip"),i(" attached to the same activator button, need a particular setup in order to function correctly")],-1)),t(T)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ct as default};
