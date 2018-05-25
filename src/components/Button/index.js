import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import color from 'color';

let Button = props =>
    <button
        style={[
          props.disabled ? styles.disabled : styles.primary,
          styles.base
        ]} 
        type={props.type} 
        onClick={props.onClick}
        disabled={props.disabled}

        >
            {props.children} 
    </button>

Button.defaultProps = {
    onClick: ()=>{},
    disabled: true,
}

Button.propTypes = {
    type: PropTypes.oneOf([ 'submit']).isRequired,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
}

var styles = {
    base: {
      color: '#fff',
      ':hover': {
        background: color('#0074d9').lighten(0.5).hex()
      },
      'fontSize': 20,
      'width':200,
      'alignSelf' : 'center'
    },
   
    primary: {
      background: '#0074d9'
    },
    disabled: {
        background: '#979ca3'
      }
};


Button = Radium(Button);


export default Button;