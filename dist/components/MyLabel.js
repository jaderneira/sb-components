import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
export const MyLabel = ({ label = 'No Label', size = 'normal', allCaps = false, color = 'primary', fontColor, backgroundColor = 'transparent' }) => {
    return (_jsx("span", { className: `label ${size} text-${color}`, style: { color: fontColor, backgroundColor }, children: allCaps ? label.toUpperCase() : label }));
};
