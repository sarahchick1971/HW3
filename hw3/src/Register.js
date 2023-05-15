import react,{ useState } from "react";


export const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("");
    
    const users = [{ username: "Sarah", password: "CFGcourse1" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username);
           
        };
   
    return (
    <div className='auth-form-container'>
        <h2>Regiser</h2>
        <form onSubmit={handleSubmit}>
            <label className='register-form'for='name'>Full name</label>
            <input value={name} name='name' id='name' placeholder='full name'/>
            <label for='username'>username</label>
            <input value='username' type='username' placeholder='your username' id='username' name='username'/>
            <label for='password'>password</label>
            <input type='password' placeholder='*******' id='password' name='password'/>
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn'onClick ={() => props.onFormSwitch('Login')}>Already have an account?LogIn here</button>
    </div>
   
        
    )
}

export default Register;