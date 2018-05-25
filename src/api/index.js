export const getJSONData = () => fetch('https://api.myjson.com/bins/qe3uy')

export const calculateCreditScore = async formValues => {    
    let response = await getJSONData();
    let CreditCards = await response.json();
    const creditCardsAvailable =  filterResults(CreditCards, formValues);
    return creditCardsAvailable;
}


const filterResults = (CreditCards, formValues) => {
    return CreditCards.filter(credit=>{
        if(credit.ID === 'Student' && formValues.EmploymentStatus.toLowerCase() === 'student') return credit;
        if(credit.ID === 'Liquid' && Number(formValues.AnnualIncome) > 16000 ) return credit
        if(credit.ID === 'Anywhere') return credit;
        return null;
    })
}
