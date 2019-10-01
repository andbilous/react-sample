import React from 'react';
import UserData from './UserData.component';

class UserForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            expDate: '',
            cvv:'',
            firstName: '',
            lastName: '',
            secretQuestion: '',
            secretAnswer: '',
            errors:[]
        }
      }
    
      handleChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }
    
      handleSubmit=(event)=> {
        event.preventDefault();
        console.log(this.state);
        let errors=this.validate(this.state);
        if(errors.length>0){
            this.setState({ errors });
                return ;
        }
        this.props.onHandleSubmit(this.state);
      };
       validate = (userData)=> {
    const { cardNumber,expDate,cvv,firstName,lastName,secretQuestion,secretAnswer } = userData;
        // we are going to store errors for all fields
        // in a signle array
//         Поля
// - 1 строчка: CreditCard Number (ровно 16 цифр - валидно)
// - 2 сточка: 'Expiration Date' (форма MM/YY - валидна), 'Cvv' (3 или 4 цифры валидно)
// - FirstName (валидировать имя на свое усмотрение), LastName (валидировать фамилию)
// - Secret Question (валидировать на свое усмотрение)
// - Secret Answer (валидировать на свое усмотрение)
// - Button Submit

         const errors = [];
        if(cardNumber.length!==16){
            errors.push("Card number is invalid");
        }
        
        if (!expDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/g)) {
            errors.push("Expiration Date format is incorrect");
          }

        if (!firstName.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)) {
          errors.push("First Name format is incorrect");
        }
        if (!lastName.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)) {
            errors.push("Last Name format is incorrect");
          }
        if(!cvv.length===3 || cvv.length===4){
            errors.push("CVV code format is incorrect"); 
        }
        if(!secretQuestion.match( /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g)){
            errors.push("secret Question format is incorrect"); 
        }
        if(!secretAnswer.match( /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/g)){
            errors.push("secret Answer format is incorrect"); 
        }
        return errors;
      }

    
      render() {
          const {errors} =this.state;
        return (
          <form style={{
          display: 'flex',
          flexDirection:'column',
          background: "#74C3E1",
          padding: "20px",
          margin: "20px"
        }}
           onSubmit={this.handleSubmit}>
               { errors.map(error => (
                <p key={error}>Error: {error}</p>))}
              <h4>Credit Card Details</h4>
            <label>
              Card Number:
              <input name="cardNumber" placeholder="16 digits" type="number" value={this.state.cardNumber} onChange={this.handleChange} />
            </label>
            <label>
              Expiration Date:
              <input name="expDate" placeholder="MM/YY" type="text" value={this.state.value} onChange={this.handleChange} />
              CVV:
              <input name="cvv" type="number" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              First Name:
              <input name="firstName" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Last Name:
              <input name="lastName" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Secret Question:
              <input name="secretQuestion" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Secret Answer:
              <input name="secretAnswer"  type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            <UserData/>
          </form>
        );
      }
}
export default UserForm;