import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Input from '../../containers/Input';

import {calculateCreditScore} from '../../api';
import Radium from 'radium';
class Form extends Component {

    state ={disabled: true, values:[]}

    callback = (disabled, values )=> {
        this.setState(()=>({values}))
        if(!disabled)this.setState(()=>({disabled}))
    }

    getCalculateCreditScore = async e => {
        e.preventDefault();
        const result = await calculateCreditScore(this.state.values);
        this.props.callback(result);
    }

    render(){
        return(
            <form style={styles.Form} onSubmit={this.getCalculateCreditScore}>
                <Input  callback={this.callback} onChange={this.onChange} />
                <Button style={styles.Button}  type="submit" disabled={this.state.disabled}> 
                    Submit
                </Button>
            </form>
        )
    }
}

Form.propTypes = {
    callback: PropTypes.func.isRequired
}

const styles = {
    Form:{
        display: 'flex',
        flexDirection: 'column',
        margin: '150pt'
    },
    
    Button:{
        alignSelf: 'center'
    }
}

Form = Radium(Form);

export default Form;