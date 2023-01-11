import React, {useState} from 'react';

const BasicForm =() => {
    // const [username, setUsername] = useState();
    // const [mail, setMail] = useState();
    const [account, setAccount] = useState({username: '', email: '', age: 0});
    const handleChange =(e) => {
    //    setUsername(e.target.value);
    if (e.target.name === "age") {
        if (isNaN(e.target.value)) {alert("Not a number")}
     else
    setAccount({...account, [e.target.name]:e.target.value})}
    else
    setAccount({...account, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        // setUsername(e.target[0].value);
    }

    return (
        <div className='container'>
           <form onSubmit={handleSubmit}>
           {account.username} - {account.email} - {account.age}
           <br></br>
            <input name='username' placeholder="Enter Your Name" value={account.username || ''} onChange={handleChange}></input>
            <br></br>
            <input name='email' placeholder="Enter Your Email" value={account.email || ''} onChange={handleChange}></input>
            <br></br>
            <input name='age' placeholder="Enter Your Age" value={account.age || ''} onChange={handleChange}></input>
            <br></br>
            <input type='submit'></input>
           </form>
        </div>
    );
}

export default BasicForm;