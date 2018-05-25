import React, {Component} from 'react';
class Results extends Component {
   state={total: 0}
   handleCheck = (e) => {
        let checked = e.target.checked;
        let total = e.target.value; 
        if(checked){
            this.setState((state,props)=>({total: state.total + Number(total)}))
        }else if (checked === false){
            this.setState((state,props)=>({total: state.total - Number(total)}))
        }

   }
    
   renderItems = () => 
            this.props.Results.map( 
                Result =>
                <ul key={Result.ID}>
                    <li> Description: {Result.Description}</li>
                    <li> APR: {Result.Apr}%</li>
                    <li> Balance Transfer Offer Duration: {Result.BalanceTransferOfferDuration} months</li>
                    <li> Purchase Offer Duration: {Result.PurchaseOfferDuration} months</li>
                    <li> Credit Available: £{Result.CreditAvailable}</li>
                    <input value={Result.CreditAvailable} type="checkBox" name={Result.ID} onChange={this.handleCheck}/>
                </ul>
            )
               
    render(){
        return(
            <div>
                {this.renderItems()}
                Total credit available:
                {this.state.total}
            </div>
        )
    }
}

export default Results