import{a as c,V}from"./VTabs-B5UOu9E1.js";import{r as C,c as b,o as d,d as r,b as e,e as t,s as n,_ as q,b1 as m,l as i,F as p,h as v,t as w,w as $,f as T,ah as h}from"./main-B6snbbeR.js";import{V as I}from"./VCardText-BSdQ4zK2.js";import{V as W,a as f}from"./VWindowItem-D4o67KVx.js";import{V as _}from"./VCard-HETOwAdS.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as U}from"./AppCardCode-B87-U3v-.js";import{V as N,a as k}from"./VRow-B2681vdV.js";import"./VSlideGroup-Db53_zVb.js";import"./ssrBoot-C-ymkyqZ.js";import"./VAvatar-DkcJ3saq.js";import"./vue3-perfect-scrollbar-DtQxLb6n.js";import"./VDivider-BP2GefMD.js";const E={class:"d-flex gap-6"},M={__name:"DemoTabsVerticalPill",setup(g){const a=C(0);return(s,l)=>(d(),b("div",E,[r("div",null,[e(V,{modelValue:i(a),"onUpdate:modelValue":l[0]||(l[0]=o=>m(a)?a.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(c,null,{default:t(()=>[e(q,{start:"",icon:"tabler-user"}),l[2]||(l[2]=n(" Option 1 ",-1))]),_:1}),e(c,null,{default:t(()=>[e(q,{start:"",icon:"tabler-lock"}),l[3]||(l[3]=n(" Option 2 ",-1))]),_:1}),e(c,null,{default:t(()=>[e(q,{start:"",icon:"tabler-access-point"}),l[4]||(l[4]=n(" Option 3 ",-1))]),_:1})]),_:1},8,["modelValue"])]),e(_,null,{default:t(()=>[e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=o=>m(a)?a.value=o:null)},{default:t(()=>[e(f,null,{default:t(()=>[...l[5]||(l[5]=[r("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),r("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1)])]),_:1}),e(f,null,{default:t(()=>[...l[6]||(l[6]=[r("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1)])]),_:1}),e(f,null,{default:t(()=>[...l[7]||(l[7]=[r("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}},G="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",H={__name:"DemoTabsBasicPill",setup(g){const a=C("window1");return(s,l)=>(d(),b(p,null,[e(V,{modelValue:i(a),"onUpdate:modelValue":l[0]||(l[0]=o=>m(a)?a.value=o:null),class:"v-tabs-pill"},{default:t(()=>[e(c,null,{default:t(()=>[...l[2]||(l[2]=[n("Tab One",-1)])]),_:1}),e(c,null,{default:t(()=>[...l[3]||(l[3]=[n("Tab Two",-1)])]),_:1}),e(c,null,{default:t(()=>[...l[4]||(l[4]=[n("Tab Three",-1)])]),_:1})]),_:1},8,["modelValue"]),e(_,{class:"mt-5"},{default:t(()=>[e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=o=>m(a)?a.value=o:null)},{default:t(()=>[(d(),b(p,null,v(3,o=>e(f,{key:`window${o}`},{default:t(()=>[n(w(G))]),_:1})),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})],64))}},R={__name:"DemoTabsDynamic",setup(g){const a=C(3),s=C(0);return $(a,l=>{s.value=l-1}),(l,o)=>(d(),T(_,null,{default:t(()=>[e(V,{modelValue:i(s),"onUpdate:modelValue":o[0]||(o[0]=u=>m(s)?s.value=u:null)},{default:t(()=>[(d(!0),b(p,null,v(i(a),u=>(d(),T(c,{key:u,value:u},{default:t(()=>[n(" Tab "+w(u),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(I,{class:"text-center d-flex items-center gap-y-2 flex-wrap"},{default:t(()=>[e(h,{disabled:!i(a),class:"me-4",variant:i(a)?void 0:"tonal",onClick:o[1]||(o[1]=u=>a.value--)},{default:t(()=>[...o[3]||(o[3]=[n(" Remove Tab ",-1)])]),_:1},8,["disabled","variant"]),e(h,{onClick:o[2]||(o[2]=u=>a.value++)},{default:t(()=>[...o[4]||(o[4]=[n(" Add Tab ",-1)])]),_:1})]),_:1})]),_:1}))}},L={class:"d-flex justify-center gap-4 mt-3"},J="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",K={__name:"DemoTabsProgrammaticNavigation",setup(g){const a=C(1),s=["Appetizers","Entrees","Deserts","Cocktails"],l=s.length,o=()=>{a.value!==1&&(a.value-=1)},u=()=>{a.value!==l&&(a.value+=1)};return(P,y)=>(d(),T(_,null,{default:t(()=>[e(V,{modelValue:i(a),"onUpdate:modelValue":y[0]||(y[0]=x=>m(a)?a.value=x:null),grow:""},{default:t(()=>[(d(!0),b(p,null,v(s.length,x=>(d(),T(c,{key:x,value:x},{default:t(()=>[n(w(s[x-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":y[1]||(y[1]=x=>m(a)?a.value=x:null)},{default:t(()=>[(d(!0),b(p,null,v(s.length,x=>(d(),T(f,{key:x,value:x},{default:t(()=>[n(w(J))]),_:1},8,["value"]))),128))]),_:1},8,["modelValue"]),r("div",L,[e(h,{disabled:i(a)===1,onClick:o},{default:t(()=>[...y[2]||(y[2]=[n(" Previous ",-1)])]),_:1},8,["disabled"]),e(h,{disabled:i(a)===i(l),onClick:u},{default:t(()=>[...y[3]||(y[3]=[n(" Next ",-1)])]),_:1},8,["disabled"])])]),_:1})]),_:1}))}},Q="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",X={__name:"DemoTabsGrow",setup(g){const a=C("Appetizers"),s=["Appetizers","Entrees","Deserts","Cocktails"];return(l,o)=>(d(),T(_,null,{default:t(()=>[e(V,{modelValue:i(a),"onUpdate:modelValue":o[0]||(o[0]=u=>m(a)?a.value=u:null),grow:""},{default:t(()=>[(d(),b(p,null,v(s,u=>e(c,{key:u,value:u},{default:t(()=>[n(w(u),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":o[1]||(o[1]=u=>m(a)?a.value=u:null)},{default:t(()=>[(d(),b(p,null,v(s,u=>e(f,{key:u,value:u},{default:t(()=>[n(w(Q))]),_:1},8,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},Y="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",Z={__name:"DemoTabsFixed",setup(g){const a=C("Appetizers"),s=["Fixed Tab 1","Fixed Tab 2","Fixed Tab 3","Fixed Tab 4"];return(l,o)=>(d(),T(_,null,{default:t(()=>[e(V,{modelValue:i(a),"onUpdate:modelValue":o[0]||(o[0]=u=>m(a)?a.value=u:null),"fixed-tabs":""},{default:t(()=>[(d(),b(p,null,v(s,u=>e(c,{key:u,value:u},{default:t(()=>[n(w(u),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":o[1]||(o[1]=u=>m(a)?a.value=u:null)},{default:t(()=>[(d(),b(p,null,v(s,u=>e(f,{key:u,value:u},{default:t(()=>[n(w(Y))]),_:1},8,["value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ee="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",te={__name:"DemoTabsCustomIcons",setup(g){const a=C(0);return(s,l)=>(d(),T(_,null,{default:t(()=>[e(V,{"next-icon":"tabler-arrow-right","prev-icon":"tabler-arrow-left"},{default:t(()=>[(d(),b(p,null,v(10,o=>e(c,{key:o},{default:t(()=>[n(" Item "+w(o),1)]),_:2},1024)),64))]),_:1}),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":l[0]||(l[0]=o=>m(a)?a.value=o:null)},{default:t(()=>[(d(),b(p,null,v(10,o=>e(f,{key:o},{default:t(()=>[n(w(ee))]),_:1})),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},ae="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.",le={__name:"DemoTabsPagination",setup(g){const a=C("item1");return(s,l)=>(d(),T(_,null,{default:t(()=>[e(V,{modelValue:i(a),"onUpdate:modelValue":l[0]||(l[0]=o=>m(a)?a.value=o:null)},{default:t(()=>[(d(),b(p,null,v(10,o=>e(c,{key:o},{default:t(()=>[n(" Item "+w(o),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=o=>m(a)?a.value=o:null)},{default:t(()=>[(d(),b(p,null,v(10,o=>e(f,{key:o},{default:t(()=>[n(w(ae))]),_:1})),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},oe={};function ne(g,a){return d(),T(_,null,{default:t(()=>[e(I,{class:"d-flex flex-column gap-4"},{default:t(()=>[r("div",null,[e(V,null,{default:t(()=>[e(c,null,{default:t(()=>[...a[0]||(a[0]=[n("Home",-1)])]),_:1}),e(c,null,{default:t(()=>[...a[1]||(a[1]=[n("Service",-1)])]),_:1}),e(c,null,{default:t(()=>[...a[2]||(a[2]=[n("Account",-1)])]),_:1})]),_:1})]),r("div",null,[e(V,{"align-tabs":"center"},{default:t(()=>[e(c,null,{default:t(()=>[...a[3]||(a[3]=[n("Home",-1)])]),_:1}),e(c,null,{default:t(()=>[...a[4]||(a[4]=[n("Service",-1)])]),_:1}),e(c,null,{default:t(()=>[...a[5]||(a[5]=[n("Account",-1)])]),_:1})]),_:1})]),r("div",null,[e(V,{"align-tabs":"end"},{default:t(()=>[e(c,null,{default:t(()=>[...a[6]||(a[6]=[n("Home",-1)])]),_:1}),e(c,null,{default:t(()=>[...a[7]||(a[7]=[n("Service",-1)])]),_:1}),e(c,null,{default:t(()=>[...a[8]||(a[8]=[n("Account",-1)])]),_:1})]),_:1})])]),_:1})]),_:1})}const se=O(oe,[["render",ne]]),re={class:"d-flex"},ie={__name:"DemoTabsVertical",setup(g){const a=C(0);return(s,l)=>(d(),T(_,null,{default:t(()=>[r("div",re,[r("div",null,[e(V,{modelValue:i(a),"onUpdate:modelValue":l[0]||(l[0]=o=>m(a)?a.value=o:null),direction:"vertical"},{default:t(()=>[e(c,null,{default:t(()=>[e(q,{start:"",icon:"tabler-user"}),l[2]||(l[2]=n(" Option 1 ",-1))]),_:1}),e(c,null,{default:t(()=>[e(q,{start:"",icon:"tabler-lock"}),l[3]||(l[3]=n(" Option 2 ",-1))]),_:1}),e(c,null,{default:t(()=>[e(q,{start:"",icon:"tabler-access-point"}),l[4]||(l[4]=n(" Option 3 ",-1))]),_:1})]),_:1},8,["modelValue"])]),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=o=>m(a)?a.value=o:null),class:"ms-3"},{default:t(()=>[e(f,null,{default:t(()=>[...l[5]||(l[5]=[r("p",null," fsdfSed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),r("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget. ",-1)])]),_:1}),e(f,null,{default:t(()=>[...l[6]||(l[6]=[r("p",{class:"mb-0"}," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero. ",-1)])]),_:1}),e(f,null,{default:t(()=>[...l[7]||(l[7]=[r("p",{class:"mb-0"}," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper. ",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1}))}},ue="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",ce={__name:"DemoTabsStacked",setup(g){const a=C("tab-1");return(s,l)=>(d(),T(_,null,{default:t(()=>[e(V,{modelValue:i(a),"onUpdate:modelValue":l[0]||(l[0]=o=>m(a)?a.value=o:null),grow:"",stacked:""},{default:t(()=>[e(c,null,{default:t(()=>[e(q,{icon:"tabler-phone",class:"mb-2"}),l[2]||(l[2]=r("span",null,"Recent",-1))]),_:1}),e(c,null,{default:t(()=>[e(q,{icon:"tabler-heart",class:"mb-2"}),l[3]||(l[3]=r("span",null,"Favorites",-1))]),_:1}),e(c,null,{default:t(()=>[e(q,{icon:"tabler-user",class:"mb-2"}),l[4]||(l[4]=r("span",null,"Nearby",-1))]),_:1})]),_:1},8,["modelValue"]),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=o=>m(a)?a.value=o:null)},{default:t(()=>[(d(),b(p,null,v(3,o=>e(f,{key:o},{default:t(()=>[n(w(ue))]),_:1})),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},de="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",me={__name:"DemoTabsBasic",setup(g){const a=C("item-1");return(s,l)=>(d(),T(_,null,{default:t(()=>[e(V,{modelValue:i(a),"onUpdate:modelValue":l[0]||(l[0]=o=>m(a)?a.value=o:null)},{default:t(()=>[e(c,null,{default:t(()=>[...l[2]||(l[2]=[n("Tab One",-1)])]),_:1}),e(c,null,{default:t(()=>[...l[3]||(l[3]=[n("Tab Two",-1)])]),_:1}),e(c,null,{default:t(()=>[...l[4]||(l[4]=[n("Tab Three",-1)])]),_:1})]),_:1},8,["modelValue"]),e(I,null,{default:t(()=>[e(W,{modelValue:i(a),"onUpdate:modelValue":l[1]||(l[1]=o=>m(a)?a.value=o:null)},{default:t(()=>[(d(),b(p,null,v(3,o=>e(f,{key:o},{default:t(()=>[n(w(de))]),_:1})),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},be={ts:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<template>
  <VCard>
    <VCardText class="d-flex flex-column gap-4">
      <!-- Default -->
      <div>
        <VTabs>
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- Center -->
      <div>
        <VTabs align-tabs="center">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>

      <!-- End -->
      <div>
        <VTabs align-tabs="end">
          <VTab>Home</VTab>
          <VTab>Service</VTab>
          <VTab>Account</VTab>
        </VTabs>
      </div>
    </VCardText>
  </VCard>
</template>
`},pe={ts:`<script lang="ts" setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item-1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab>Tab One</VTab>
      <VTab>Tab Two</VTab>
      <VTab>Tab Three</VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ve={ts:`<script lang="ts" setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('window1')
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="\`window\${item}\`"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Te={ts:`<script setup lang="ts">
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs
      next-icon="tabler-arrow-right"
      prev-icon="tabler-arrow-left"
    >
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},fe={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="n in totalTabs"
        :key="n"
        :value="n"
      >
        Tab {{ n }}
      </VTab>
    </VTabs>

    <!-- buttons -->
    <VCardText class="text-center d-flex items-center gap-y-2 flex-wrap">
      <VBtn
        :disabled="!totalTabs"
        class="me-4"
        :variant="!totalTabs ? 'tonal' : undefined"
        @click="totalTabs--"
      >
        Remove Tab
      </VBtn>

      <VBtn @click="totalTabs++">
        Add Tab
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},ve={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      fixed-tabs
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},we={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},ge={ts:`<script setup lang="ts">
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('item1')
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer.'
<\/script>

<template>
  <VCard>
    <VTabs v-model="currentTab">
      <VTab
        v-for="i in 10"
        :key="i"
      >
        Item {{ i }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 10"
          :key="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},xe={ts:`<script lang="ts" setup>
const currentTab = ref(1)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(1)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
    >
      <VTab
        v-for="item in items.length"
        :key="item"
        :value="item"
      >
        {{ items[item - 1] }}
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in items.length"
          :key="item"
          :value="item"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>

      <div class="d-flex justify-center gap-4 mt-3">
        <VBtn
          :disabled="currentTab === 1"
          @click="preTab"
        >
          Previous
        </VBtn>

        <VBtn
          :disabled="currentTab === totalTabs"
          @click="nextTab"
        >
          Next
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
`},ke={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab"
      grow
      stacked
    >
      <VTab>
        <VIcon
          icon="tabler-phone"
          class="mb-2"
        />
        <span>Recent</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-heart"
          class="mb-2"
        />
        <span>Favorites</span>
      </VTab>

      <VTab>
        <VIcon
          icon="tabler-user"
          class="mb-2"
        />
        <span>Nearby</span>
      </VTab>
    </VTabs>

    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="i in 3"
          :key="i"
        >
          {{ tabItemText }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},Ce={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem>
            <p>
              fsdfSed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VCard>
    <div class="d-flex">
      <div>
        <VTabs
          v-model="currentTab"
          direction="vertical"
        >
          <VTab>
            <VIcon
              start
              icon="tabler-user"
            />
            Option 1
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-lock"
            />
            Option 2
          </VTab>

          <VTab>
            <VIcon
              start
              icon="tabler-access-point"
            />
            Option 3
          </VTab>
        </VTabs>
      </div>

      <VCardText>
        <VWindow
          v-model="currentTab"
          class="ms-3"
        >
          <VWindowItem>
            <p>
              fsdfSed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </div>
  </VCard>
</template>
`},Ie={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <div class="d-flex gap-6">
    <div>
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </div>

    <VCard>
      <VCardText>
        <VWindow v-model="currentTab">
          <VWindowItem>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
            </p>
          </VWindowItem>

          <VWindowItem>
            <p class="mb-0">
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>
          </VWindowItem>
        </VWindow>
      </VCardText>
    </VCard>
  </div>
</template>
`},$e={__name:"tabs",setup(g){return(a,s)=>{const l=me,o=U,u=ce,P=ie,y=se,x=le,S=te,D=Z,F=X,j=K,B=R,z=H,A=M;return d(),T(N,{class:"match-height"},{default:t(()=>[e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",variant:"outlined",code:i(pe)},{default:t(()=>[s[0]||(s[0]=r("p",null,[n("The "),r("code",null,"v-tabs"),n(" component is used for hiding content behind a selectable item.")],-1)),e(l)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Stacked",variant:"outlined",code:i(ke)},{default:t(()=>[s[1]||(s[1]=r("p",null,[n("Using "),r("code",null,"stacked"),n(" prop you can have buttons that use both icons and text.")],-1)),e(u)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical",variant:"outlined",code:i(Ce)},{default:t(()=>[s[2]||(s[2]=r("p",null,[n("The "),r("code",null,"vertical"),n(" prop allows for "),r("code",null,"v-tab"),n(" components to stack vertically.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Alignment",variant:"outlined",code:i(be)},{default:t(()=>[s[3]||(s[3]=r("p",null,[n("Use "),r("code",null,"align-tabs"),n(" prop to change the tabs alignment.")],-1)),e(y)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Pagination",variant:"outlined",code:i(ge)},{default:t(()=>[s[4]||(s[4]=r("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1)),e(x)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom Icons",variant:"outlined",code:i(Te)},{default:t(()=>[s[5]||(s[5]=r("p",null,[r("code",null,"prev-icon"),n(" and "),r("code",null,"next-icon"),n(" props can be used for applying custom pagination icons.")],-1)),e(S)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Fixed",variant:"outlined",code:i(ve)},{default:t(()=>[s[6]||(s[6]=r("p",null,[n("The "),r("code",null,"fixed-tabs"),n(" prop forces "),r("code",null,"v-tab"),n(" to take up all available space up to the maximum width (300px).")],-1)),e(D)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Grow",variant:"outlined",code:i(we)},{default:t(()=>[s[7]||(s[7]=r("p",null,[n("The "),r("code",null,"grow"),n(" prop will make the tab items take up all available space with no limit.")],-1)),e(F)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Programmatic Navigation",variant:"outlined",code:i(xe)},{default:t(()=>[e(j)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Dynamic",variant:"outlined",code:i(fe)},{default:t(()=>[s[8]||(s[8]=r("p",null,[n("Tabs can be dynamically added and removed. This allows you to update to any number and the "),r("code",null,"v-tabs"),n(" component will react.")],-1)),e(B)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic Pill",variant:"outlined",code:i(Ve)},{default:t(()=>[s[9]||(s[9]=r("p",null,[n("Use our custom class "),r("code",null,".v-tabs-pill"),n(" along with "),r("code",null,"v-tabs"),n(" component to style pill tabs.")],-1)),e(z)]),_:1},8,["code"])]),_:1}),e(k,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical Pill",variant:"outlined",code:i(Ie)},{default:t(()=>[s[10]||(s[10]=r("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1)),e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{$e as default};
