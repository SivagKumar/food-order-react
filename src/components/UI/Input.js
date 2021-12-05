import classes from './Input.module.css';
import React from "react";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/*Add all available properties in the input properties as the
            input tag properties*/}
            <input ref={ref} {...props.input} />
        </div>
    );
});

export default Input;