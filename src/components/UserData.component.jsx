import React from 'react';

class UserData extends React.Component{
    render(){
        const {userData}=this.props;
        console.log(this.props.userData);
        return(
        <div>
            {
           userData ?<p>{Object.values(userData)}</p>:''
            }
        </div>
        )
        
    }
}
export default UserData;