import{_ as y,V as C}from"./AppCombobox-CaXqzFgz.js";import{r as c,f as b,o as V,b1 as d,l as a,w as I,e as s,b as l,s as p,d as n,t as v,b7 as P}from"./main-B6snbbeR.js";import{a as A,b as D}from"./VList-CrjmOZbb.js";import{a as r,V as x}from"./VRow-B2681vdV.js";import{V as w}from"./VChip-D8r7GnSM.js";import{V as U}from"./VAvatar-DkcJ3saq.js";import{_ as L}from"./AppCardCode-B87-U3v-.js";import"./VSelect-5Eb_uP-l.js";import"./VTextField-DR58sDH5.js";import"./autofocus-BfAo_r6c.js";import"./VCounter-x5LZ_YaQ.js";import"./VField-CXJI-EvL.js";import"./VDivider-BP2GefMD.js";import"./VCheckboxBtn-C4UbZbdp.js";import"./VSelectionControl-B5OrGKrL.js";import"./filter-Cb0iJ2iP.js";import"./ssrBoot-C-ymkyqZ.js";import"./VSlideGroup-Db53_zVb.js";import"./vue3-perfect-scrollbar-DtQxLb6n.js";import"./VCard-HETOwAdS.js";import"./VCardText-BSdQ4zK2.js";const k={__name:"DemoComboboxClearable",setup(g){const e=c(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(o,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=i=>d(e)?e.value=i:null),items:m,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}},R={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],m=c(["Vuetify"]),u=c(null);return I(m,t=>{t.length>5&&P(()=>m.value.pop())}),(t,o)=>{const i=y;return V(),b(i,{modelValue:a(m),"onUpdate:modelValue":o[0]||(o[0]=f=>d(m)?m.value=f:null),"search-input":a(u),"onUpdate:searchInput":o[1]||(o[1]=f=>d(u)?u.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":s(()=>[l(A,null,{default:s(()=>[l(D,null,{default:s(()=>[o[2]||(o[2]=p(' No results matching "',-1)),n("strong",null,v(a(u)),1),o[3]||(o[3]=p('". Press ',-1)),o[4]||(o[4]=n("kbd",null,"enter",-1)),o[5]||(o[5]=p(" to create a new one ",-1))]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}},N={__name:"DemoComboboxMultiple",setup(g){const e=c(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(x,null,{default:s(()=>[l(r,{cols:"12"},{default:s(()=>[l(o,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=i=>d(e)?e.value=i:null),items:m,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12"},{default:s(()=>[l(o,{modelValue:a(e),"onUpdate:modelValue":t[1]||(t[1]=i=>d(e)?e.value=i:null),items:m,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12"},{default:s(()=>[l(o,{modelValue:a(e),"onUpdate:modelValue":t[2]||(t[2]=i=>d(e)?e.value=i:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12"},{default:s(()=>[l(o,{modelValue:a(e),"onUpdate:modelValue":t[3]||(t[3]=i=>d(e)?e.value=i:null),items:m,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:s(({item:i})=>[l(w,{size:"small"},{prepend:s(()=>[l(U,{start:"",color:"primary",size:"16"},{default:s(()=>[p(v(String(i.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:s(()=>[p(" "+v(i.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},T={__name:"DemoComboboxVariant",setup(g){const e=c(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>(V(),b(x,null,{default:s(()=>[l(r,{cols:"12"},{default:s(()=>[l(C,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=o=>d(e)?e.value=o:null),items:m,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12"},{default:s(()=>[l(C,{modelValue:a(e),"onUpdate:modelValue":t[1]||(t[1]=o=>d(e)?e.value=o:null),multiple:"",items:m,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12"},{default:s(()=>[l(C,{modelValue:a(e),"onUpdate:modelValue":t[2]||(t[2]=o=>d(e)?e.value=o:null),multiple:"",items:m,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12"},{default:s(()=>[l(C,{modelValue:a(e),"onUpdate:modelValue":t[3]||(t[3]=o=>d(e)?e.value=o:null),multiple:"",items:m,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12"},{default:s(()=>[l(C,{modelValue:a(e),"onUpdate:modelValue":t[4]||(t[4]=o=>d(e)?e.value=o:null),multiple:"",items:m,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},$={__name:"DemoComboboxDensity",setup(g){const e=c(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(o,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=i=>d(e)?e.value=i:null),items:m,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}},S={__name:"DemoComboboxBasic",setup(g){const e=c("Programming"),m=["Programming","Design","Vue","Vuetify"];return(u,t)=>{const o=y;return V(),b(o,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=i=>d(e)?e.value=i:null),items:m,placeholder:"deployment"},null,8,["modelValue"])}}},j={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},z={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},M={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},W={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},re={__name:"combobox",setup(g){return(e,m)=>{const u=S,t=L,o=$,i=T,f=N,h=R,_=k;return V(),b(x,{class:"match-height"},{default:s(()=>[l(r,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Basic",code:a(j)},{default:s(()=>[m[0]||(m[0]=n("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1)),l(u)]),_:1},8,["code"])]),_:1}),l(r,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Density",code:a(B)},{default:s(()=>[m[1]||(m[1]=n("p",null,[p(" You can use "),n("code",null,"Density"),p(" prop to reduce combobox height and lower max height of list items. Available options are: "),n("code",null,"default"),p(", "),n("code",null,"comfortable"),p(", and "),n("code",null,"compact"),p(". ")],-1)),l(o)]),_:1},8,["code"])]),_:1}),l(r,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Variant",code:a(F)},{default:s(()=>[m[2]||(m[2]=n("p",null,[p("Use "),n("code",null,"solo"),p(", "),n("code",null,"outlined"),p(", "),n("code",null,"underlined"),p(", "),n("code",null,"filled"),p(" and "),n("code",null,"plain"),p(" options of "),n("code",null,"variant"),p(" prop to change the look of combobox. ")],-1)),l(i)]),_:1},8,["code"])]),_:1}),l(r,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Multiple",code:a(M)},{default:s(()=>[m[3]||(m[3]=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),l(f)]),_:1},8,["code"])]),_:1}),l(r,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"No data with chips",code:a(W)},{default:s(()=>[m[4]||(m[4]=n("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),l(h)]),_:1},8,["code"])]),_:1}),l(r,{cols:"12",md:"6"},{default:s(()=>[l(t,{title:"Clearable",code:a(z)},{default:s(()=>[m[5]||(m[5]=n("p",null,[p("Use "),n("code",null,"clearable"),p(" prop to clear combobox.")],-1)),l(_)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{re as default};
