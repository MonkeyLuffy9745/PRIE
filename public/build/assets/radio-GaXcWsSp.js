import{a as u,V as c}from"./VRadioGroup-BxIvm3DX.js";import{r as m,f as _,o as p,e as i,c as f,F as b,h as G,b as o,l as s,b1 as R,d as l,s as n}from"./main-BEYAFsWY.js";import{V as y}from"./VDivider-CFXljG1d.js";import{_ as L}from"./AppCardCode-CmZOBrtk.js";import{V as $,a as V}from"./VRow-DhucUJ_c.js";import"./VSelectionControl-Dq5wMchr.js";import"./vue3-perfect-scrollbar-Btz7gMfB.js";import"./VCard-DAB_Bu5L.js";import"./VAvatar-B5UblNHH.js";import"./VCardText-BoDvIV3o.js";const C={__name:"DemoRadioValidation",setup(v){const a=m(1),t=[d=>d!==3?!0:"Do not select the third one!"];return(d,e)=>(p(),_(c,{modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=r=>R(a)?a.value=r:null),inline:"",rules:t},{default:i(()=>[(p(),f(b,null,G(3,r=>o(u,{key:r,error:s(a)===3,label:`Radio ${r}`,value:r},null,8,["error","label","value"])),64))]),_:1},8,["modelValue"]))}},U={__name:"DemoRadioIcon",setup(v){const a=m(1);return(t,d)=>(p(),_(c,{modelValue:s(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null),"false-icon":"tabler-bell-off","true-icon":"tabler-bell"},{default:i(()=>[(p(),f(b,null,G(2,e=>o(u,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))}},w={__name:"DemoRadioLabelSlot",setup(v){const a=m("DuckDuckGo");return(t,d)=>(p(),_(c,{modelValue:s(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null)},{label:i(()=>[...d[1]||(d[1]=[l("div",null,[n("Your favorite "),l("strong",null,"search engine")],-1)])]),default:i(()=>[o(u,{value:"Google"},{label:i(()=>[...d[2]||(d[2]=[l("div",null,[n(" Of course it's "),l("span",{class:"text-success"}," Google ")],-1)])]),_:1}),o(u,{value:"DuckDuckGo"},{label:i(()=>[...d[3]||(d[3]=[l("div",null,[n(" Definitely "),l("span",{class:"text-primary"}," DuckDuckGo ")],-1)])]),_:1})]),_:1},8,["modelValue"]))}},S={__name:"DemoRadioDensity",setup(v){const a=m("radio-1"),t=m("radio-1");return(d,e)=>(p(),f(b,null,[o(c,{modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=r=>R(a)?a.value=r:null)},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1",density:"compact"}),o(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"]),o(y,{class:"my-3"}),o(c,{modelValue:s(t),"onUpdate:modelValue":e[1]||(e[1]=r=>R(t)?t.value=r:null),inline:""},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1",density:"compact"}),o(u,{label:"Option 2",value:"radio-2",density:"compact"})]),_:1},8,["modelValue"])],64))}},I={__name:"DemoRadioInline",setup(v){const a=m("radio-1"),t=m("radio-1");return(d,e)=>(p(),f(b,null,[o(c,{modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=r=>R(a)?a.value=r:null)},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1"}),o(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"]),o(y,{class:"my-4"}),o(c,{modelValue:s(t),"onUpdate:modelValue":e[1]||(e[1]=r=>R(t)?t.value=r:null),inline:""},{default:i(()=>[o(u,{label:"Option 1",value:"radio-1"}),o(u,{label:"Option 2",value:"radio-2"})]),_:1},8,["modelValue"])],64))}},j={__name:"DemoRadioColors",setup(v){const a=m("primary"),t=["Primary","Secondary","Success","Info","Warning","Error"];return(d,e)=>(p(),_(c,{modelValue:s(a),"onUpdate:modelValue":e[0]||(e[0]=r=>R(a)?a.value=r:null),inline:""},{default:i(()=>[l("div",null,[(p(),f(b,null,G(t,r=>o(u,{key:r,label:r,color:r.toLocaleLowerCase(),value:r.toLocaleLowerCase()},null,8,["label","color","value"])),64))])]),_:1},8,["modelValue"]))}},B={class:""},E={__name:"DemoRadioBasic",setup(v){const a=m(1);return(t,d)=>(p(),f("div",B,[o(c,{modelValue:s(a),"onUpdate:modelValue":d[0]||(d[0]=e=>R(a)?a.value=e:null)},{default:i(()=>[(p(),f(b,null,G(2,e=>o(u,{key:e,label:`Radio ${e}`,value:e},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))}},A={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},F={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`},N={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},P={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},T={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},W={ts:`<script lang="ts" setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('DuckDuckGo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>
          Of course it's <span class="text-success">
            Google
          </span>
        </div>
      </template>
    </VRadio>

    <VRadio value="DuckDuckGo">
      <template #label>
        <div>
          Definitely <span class="text-primary">
            DuckDuckGo
          </span>
        </div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},Y={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},oo={__name:"radio",setup(v){return(a,t)=>{const d=E,e=L,r=j,D=I,g=S,k=w,O=U,x=C;return p(),_($,{class:"match-height"},{default:i(()=>[o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Basic",code:s(A)},{default:i(()=>[t[0]||(t[0]=l("p",null,[n("The "),l("code",null,"v-radio"),n(" component is a simple radio button.")],-1)),o(d)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Colors",code:s(F)},{default:i(()=>[t[1]||(t[1]=l("p",null,[n("Radios can be colored by using any of the built-in colors and contextual names using the "),l("code",null,"color"),n(" prop.")],-1)),o(r)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Inline",code:s(T)},{default:i(()=>[t[2]||(t[2]=l("p",null,[n("Use "),l("code",null,"inline"),n(" prop to displays radio buttons in row.")],-1)),o(D)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Density",code:s(N)},{default:i(()=>[t[3]||(t[3]=l("p",null,[n("Use "),l("code",null,"density"),n(" prop to adjusts the spacing within the component. Available options are: "),l("code",null,"default"),n(", "),l("code",null,"comfortable"),n(", and "),l("code",null,"compact"),n(".")],-1)),o(g)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Label Slot",code:s(W)},{default:i(()=>[t[4]||(t[4]=l("p",null,[n("Radio Group labels can be defined in "),l("code",null,"label"),n(" slot - that will allow to use HTML content.")],-1)),o(k)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Icon",code:s(P)},{default:i(()=>[t[5]||(t[5]=l("p",null,[n("Use "),l("code",null,"false-icon"),n(" and "),l("code",null,"true-icon"),n(" prop to set icon on inactive and active state.")],-1)),o(O)]),_:1},8,["code"])]),_:1}),o(V,{cols:"12",md:"6"},{default:i(()=>[o(e,{title:"Validation",code:s(Y)},{default:i(()=>[t[6]||(t[6]=l("p",null,[n("Use "),l("code",null,"rules"),n(" prop to validate a radio. Accepts a mixed array of types "),l("code",null,"function"),n(", "),l("code",null,"boolean"),n(" and "),l("code",null,"string"),n(". Functions pass an input value as an argument and must return either "),l("code",null,"true"),n(" / "),l("code",null,"false"),n(" or a string containing an error message.")],-1)),o(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{oo as default};
