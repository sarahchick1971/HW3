import react,{ useState } from "react";


export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const users = [{ username: "Sarah", password: "CFGcourse1" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username);
           
        };
   
    return (
    <div className='auth-form-container'>
        <form className='login-form'onSubmit={handleSubmit}>
            <label for='username'>username</label>
            <input value={username} onChange= {(e) =>setUsername(e.target.value)} type='username' placeholder='yourusername' id='username' name='username'/>
            <label for='password'>password</label>
            <input type='password' placeholder='*******' id='password' name='password'/>
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn' onClick ={() => props.onFormSwitch('register')}> Don't have an account?Register here</button>
    </div>
   
        
    )
}

export default Login;