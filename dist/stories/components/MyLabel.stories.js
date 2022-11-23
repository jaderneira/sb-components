import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components/MyLabel";
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    }
};
const Template = (args) => _jsx(MyLabel, { ...args });
export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    allCaps: false
};
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true
};
export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black'
};
