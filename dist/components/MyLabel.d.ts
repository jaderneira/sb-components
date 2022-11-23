/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Button contents
     */
    label: string;
    /**
     * How large should the button be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * To uppercase text?
     */
    allCaps?: boolean;
    /**
     * Color for buttom text?
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Custom color for buttom text?
     */
    fontColor?: string;
    /**
     * Custom color for background?
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;
