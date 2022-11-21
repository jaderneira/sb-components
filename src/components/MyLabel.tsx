import './mylabel.css';

export interface MyLabelProps {
    /**
     * Button contents
     */
    label: string;
    /**
     * How large should the button be?
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * To uppercase text?
     */
    allCaps?: boolean;
    /**
     * Color for buttom text?
     */
    color?: 'primary'|'secondary'|'tertiary';
    /**
     * Custom color for buttom text?
     */
    fontColor?: string;
    /**
     * Custom color for background?
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span 
        className={`label ${ size } text-${ color }`}
        style={{ color: fontColor, backgroundColor }}
    >
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}