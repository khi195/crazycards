import React, {Component} from 'react';
import FormAttr from './FormAttr.json';
import InputComponent from '../../components/Input';
import Radium from 'radium';

class Input extends Component {
    state = {
        Title:'',
        FirstName:'',
        LastName:'',
        DOB:'',
        AnnualIncome: '',
        EmploymentStatus: '',
        HouseNumber: '',
        Postcode: '',
    };

    statesAreEnabled = () => {
        for(let state in this.state){
            if (!this.state[state] ) return false;
        }
        return true;
    }

    onChange = e => {
        let stateObj ={}
        let disabled;
        stateObj[e.target.name] = e.target.value;

        this.setState(stateObj,()=>{
            if(this.statesAreEnabled()){
                disabled= false;
        }else{
                disabled = true;
        }
        this.props.callback(disabled,this.state);
        })   
    }
    
    constructFormAttr = () => 
    FormAttr.map(
        attr => 
            <InputComponent
                    key={attr.name}
                    type={attr.type}
                    name={attr.name} 
                    placeholder={attr.placeholder}
                    onChange={this.onChange}
            />
    )

    render(){
        return(
            <div style={styles}>
                {this.constructFormAttr()}
            </div>
        )
    }

}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10pt'
};

Input = Radium(Input)

export default Input;