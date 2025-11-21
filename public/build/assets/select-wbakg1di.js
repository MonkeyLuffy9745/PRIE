import{_ as b}from"./AppSelect-COGYCTau.js";import{a as D}from"./avatar-1-mrBiEG2D.js";import{a as I}from"./avatar-2-J3iDMrW6.js";import{a as B}from"./avatar-3-CCfT4M2Q.js";import{a as w}from"./avatar-4-CkT0aFRW.js";import{a as x}from"./avatar-5-roKDnu6B.js";import{V as O}from"./VChip-BAqKzKSp.js";import{V as k}from"./VAvatar-K7hB1Kku.js";import{r as f,f as d,o as u,e as a,b as e,d as s,t as y,b1 as v,l as r,s as i}from"./main-B_3U4rnL.js";import{a as n,V as A}from"./VRow-rSP3UPT0.js";import{V}from"./VSelect-DQ-4196m.js";import{_ as G}from"./AppCardCode-CEj7I9jp.js";import"./VSlideGroup-CCtB-AAW.js";import"./VTextField-eMdtVNtb.js";import"./autofocus-Bw9dR2w9.js";import"./VCounter-D_guRIhI.js";import"./VField-3YJ8FXmc.js";import"./VList-Ce9acDAh.js";import"./ssrBoot-DCfCAOKs.js";import"./VDivider-CHuFBZ5S.js";import"./VCheckboxBtn-DobkZaJy.js";import"./VSelectionControl-DLNDeEFn.js";import"./vue3-perfect-scrollbar-DXH9MElz.js";import"./VCard-CHvE1CVF.js";import"./VCardText-CbE5M2-5.js";const $={__name:"DemoSelectSelectionSlot",setup(S){const l=[{name:"Sandra Adams",avatar:D},{name:"Ali Connors",avatar:I},{name:"Trevor Hansen",avatar:B},{name:"Tucker Smith",avatar:w},{name:"Britta Holt",avatar:x}],t=f(["Sandra Adams"]);return(p,o)=>{const m=b;return u(),d(m,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=c=>v(t)?t.value=c:null),items:l,"item-title":"name","item-value":"name",label:"Select Item",placeholder:"Select Item",multiple:"",clearable:"","clear-icon":"tabler-x"},{selection:a(({item:c})=>[e(O,null,{prepend:a(()=>[e(k,{start:"",image:c.raw.avatar},null,8,["image"])]),default:a(()=>[s("span",null,y(c.title),1)]),_:2},1024)]),_:1},8,["modelValue"])}}},N={__name:"DemoSelectMultiple",setup(S){const l=f(["Alabama"]),t=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(p,o)=>{const m=b;return u(),d(m,{modelValue:r(l),"onUpdate:modelValue":o[0]||(o[0]=c=>v(l)?l.value=c:null),items:t,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","persistent-hint":"",placeholder:"Select State"},null,8,["modelValue"])}}},j={__name:"DemoSelectMenuProps",setup(S){const l=["Foo","Bar","Fizz","Buzz"];return(t,p)=>{const o=b;return u(),d(o,{items:l,"menu-props":{transition:"scroll-y-transition"},label:"Label",placeholder:"Select Item"})}}},T={__name:"DemoSelectChips",setup(S){const l=["foo","bar","fizz","buzz"],t=f(["foo","bar","fizz","buzz"]);return(p,o)=>{const m=b;return u(),d(m,{modelValue:r(t),"onUpdate:modelValue":o[0]||(o[0]=c=>v(t)?t.value=c:null),items:l,placeholder:"Select Item",label:"Chips",chips:"",multiple:"","closable-chips":""},null,8,["modelValue"])}}},U={__name:"DemoSelectIcons",setup(S){const l=f("Florida"),t=f("Texas"),p=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam"];return(o,m)=>{const c=b;return u(),d(A,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(c,{modelValue:r(l),"onUpdate:modelValue":m[0]||(m[0]=_=>v(l)?l.value=_:null),items:p,label:"Select","prepend-icon":"tabler-map","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(c,{modelValue:r(t),"onUpdate:modelValue":m[1]||(m[1]=_=>v(t)?t.value=_:null),items:p,"append-icon":"tabler-map",label:"Select","single-line":"",variant:"filled",placeholder:"Select State"},null,8,["modelValue"])]),_:1})]),_:1})}}},M={__name:"DemoSelectCustomTextAndValue",setup(S){const l=f({state:"Florida",abbr:"FL"}),t=[{state:"Florida",abbr:"FL"},{state:"Georgia",abbr:"GA"},{state:"Nebraska",abbr:"NE"},{state:"California",abbr:"CA"},{state:"New York",abbr:"NY"}];return(p,o)=>{const m=b;return u(),d(m,{modelValue:r(l),"onUpdate:modelValue":o[0]||(o[0]=c=>v(l)?l.value=c:null),hint:`${r(l).state}, ${r(l).abbr}`,items:t,"item-title":"state","item-value":"abbr",label:"Select","persistent-hint":"","return-object":"","single-line":"",placeholder:"Select State"},null,8,["modelValue","hint"])}}},R={__name:"DemoSelectVariant",setup(S){const l=["Foo","Bar","Fizz","Buzz"];return(t,p)=>(u(),d(A,null,{default:a(()=>[e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:l,label:"Outlined",placeholder:"Select Item"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:l,label:"Filled",placeholder:"Select Item",variant:"filled"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:l,label:"Solo",placeholder:"Select Item",variant:"solo"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:l,label:"Plain",placeholder:"Select Item",variant:"plain"})]),_:1}),e(n,{cols:"12",sm:"6"},{default:a(()=>[e(V,{items:l,label:"Underlined",variant:"underlined",placeholder:"Select Item"})]),_:1})]),_:1}))}},H={__name:"DemoSelectDensity",setup(S){const l=["Foo","Bar","Fizz","Buzz"];return(t,p)=>{const o=b;return u(),d(o,{items:l,label:"Density",density:"compact",placeholder:"Select Item"})}}},L={__name:"DemoSelectBasic",setup(S){const l=["Foo","Bar","Fizz","Buzz"];return(t,p)=>{const o=b;return u(),d(o,{items:l,label:"Standard",placeholder:"Select Item"})}}},P={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Standard"
    placeholder="Select Item"
  />
</template>
`},Y={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <AppSelect
    v-model="selected"
    :items="items"
    placeholder="Select Item"
    label="Chips"
    chips
    multiple
    closable-chips
  />
</template>
`},E={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
    placeholder="Select State"
  />
</template>
`},q={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    label="Density"
    density="compact"
    placeholder="Select Item"
  />
</template>
`},J={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>

    <VCol cols="12">
      <AppSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
        placeholder="Select State"
      />
    </VCol>
  </VRow>
</template>
`},K={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <AppSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
    placeholder="Select Item"
  />
</template>
`},Q={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <AppSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
    placeholder="Select State"
  />
</template>
`},W={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <AppSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    placeholder="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <template #prepend>
          <VAvatar
            start
            :image="item.raw.avatar"
          />
        </template>

        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </AppSelect>
</template>
`},X={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
        placeholder="Select Item"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        placeholder="Select Item"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        placeholder="Select Item"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        placeholder="Select Item"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        placeholder="Select Item"
      />
    </VCol>
  </VRow>
</template>
`},ge={__name:"select",setup(S){return(l,t)=>{const p=L,o=G,m=H,c=R,_=M,C=U,h=T,z=j,g=N,F=$;return u(),d(A,null,{default:a(()=>[e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",code:r(P)},{default:a(()=>[t[0]||(t[0]=s("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1)),e(p)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Density",code:r(q)},{default:a(()=>[t[1]||(t[1]=s("p",null,[i("You can use "),s("code",null,"density"),i(" prop to reduce the field height and lower max height of list items.")],-1)),e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(o,{title:"Variant",code:r(X)},{default:a(()=>[t[2]||(t[2]=s("p",null,[i(" Use "),s("code",null,"filled"),i(", "),s("code",null,"outlined"),i(", "),s("code",null,"solo"),i(", "),s("code",null,"underlined"),i(" and "),s("code",null,"plain"),i(" options of "),s("code",null,"variant"),i(" prop to change appearance of select. ")],-1)),e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Custom text and value",code:r(E)},{default:a(()=>[t[3]||(t[3]=s("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1)),e(_)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Icons",code:r(J)},{default:a(()=>[t[4]||(t[4]=s("p",null,[i("Use a custom "),s("code",null,"prepend"),i(" or "),s("code",null,"appended"),i(" icon.")],-1)),e(C)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Chips",code:r(Y)},{default:a(()=>[t[5]||(t[5]=s("p",null,[i("Use "),s("code",null,"chips"),i(" prop to make selected option as chip.")],-1)),e(h)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Menu Props",code:r(K)},{default:a(()=>[t[6]||(t[6]=s("p",null,[i("Custom props can be passed directly to "),s("code",null,"v-menu"),i(" using "),s("code",null,"menuProps"),i(" prop.")],-1)),e(z)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Multiple",code:r(Q)},{default:a(()=>[t[7]||(t[7]=s("p",null,[i("Use "),s("code",null,"multiple"),i(" prop to select multiple option.")],-1)),e(g)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Selection slot",code:r(W)},{default:a(()=>[t[8]||(t[8]=s("p",null,[i("The "),s("code",null,"selection"),i(" slot can be used to customize the way selected values are shown in the input.")],-1)),e(F)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ge as default};
