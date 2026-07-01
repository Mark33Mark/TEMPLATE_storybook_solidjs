import { mergeProps, splitProps } from 'solid-js';

export const Button = _props => {
    const [props, rest] = splitProps(
        mergeProps({ primary: false, active: true, size: 'medium', backgroundColor: null }, _props),
        ['primary', 'active', 'backgroundColor', 'size', 'label']
    );
    const mode = props.primary ? 'W8D-Button_primary' : 'W8D-Button_secondary';
    const isActive = props.active ? true : false;

    return (
        <button
            type="button"
            className={['W8D-Button', `W8D-Button_${props.size}`, mode].join(' ')}
            style={props.backgroundColor ? { 'background-color': props.backgroundColor } : undefined}
            disabled={!isActive}
            {...rest}
        >
            {props.label}
        </button>
    );
};
