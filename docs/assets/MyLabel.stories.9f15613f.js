var i=Object.defineProperty;var a=(e,l)=>i(e,"name",{value:l,configurable:!0});import{j as t}from"./jsx-runtime.87053bc2.js";import"./iframe.8d6fd562.js";const o=a(({label:e="No Label",size:l="normal",allCaps:r=!1,color:s="primary",fontColor:c})=>t("span",{className:`label ${l} text-${s}`,style:{color:c},children:r?e.toUpperCase():e}),"MyLabel");try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Button contents",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"To uppercase text?",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Color for buttom text?",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Custom color for buttom text?",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:o.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const L={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from "../../components/MyLabel";


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}`,locationsMap:{basic:{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},"all-caps":{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},secondary:{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},tertiary:{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}},"custom-font-color":{startLoc:{col:49,line:15},endLoc:{col:82,line:15},startBody:{col:49,line:15},endBody:{col:82,line:15}}}}},title:"UI/MyLabel",component:o,argTypes:{size:{control:"select"},color:{control:"select"},fontColor:{control:"color"}}},n=a(e=>t(o,{...e}),"Template"),p=n.bind({});p.args={size:"normal",allCaps:!1};const d=n.bind({});d.args={size:"normal",allCaps:!0};const y=n.bind({});y.args={size:"normal",color:"secondary"};const m=n.bind({});m.args={size:"normal",color:"tertiary"};const u=n.bind({});u.args={size:"h1",fontColor:"#5517ac"};const g=["Basic","AllCaps","Secondary","Tertiary","CustomFontColor"];export{d as AllCaps,p as Basic,u as CustomFontColor,y as Secondary,m as Tertiary,g as __namedExportsOrder,L as default};
//# sourceMappingURL=MyLabel.stories.9f15613f.js.map
