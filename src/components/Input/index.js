import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

let Input = props => 
    <input
        style={styles}
        type={props.type} 
        name={props.name} 
        placeholder={props.placeholder}
        onChange={props.onChange}
    />

Input.defaultProps = {
    placeholder:'',
    onChange: ()=>{},
}

Input.propTypes = {
    type: PropTypes.oneOf([ 'text', 'number', 'date', 'checkBox']).isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
}

const styles = {
    width:'40%',
    height:'20pt'
};

Input = Radium(Input);

export default Input;