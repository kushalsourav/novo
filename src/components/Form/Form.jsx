import { useLocation } from "react-router-dom";
import Input from "./Input/Input";
import './Form.css';


const Form = ({authState,authDispatch, onHandleSubmit, passVisible, setPassVisible, error}) => {
    const location = useLocation();
    let form;
        if(location.pathname === '/SignIn') {
         form =   <>
             <Input  name="email" placeholder="Enter your email"  id="Email" value={authState.email} setInput={authDispatch}  /> 
             <Input  name="password" placeholder="Enter your password"  id="password" value={authState.password} setInput={authDispatch} passVisible={passVisible} 
             setPassVisible={setPassVisible}  /> 
            </>
        } else {
            form = <>
             <Input  name="email" placeholder="Enter your email" id="Email" value={authState.email} setInput={authDispatch} error={error} /> 
             <Input  name="firstName" placeholder="Enter your firstname"  id="firstname" value={authState.firstName} setInput={authDispatch} error={error} /> 
             <Input  name="lastName" placeholder="Enter your lastname" id="lastname" value={authState.lastName} setInput={authDispatch} error={error} />
             <Input  name="password" placeholder="Enter your password" value={authState.password} id="password" setInput={authDispatch} passVisible={passVisible} setPassVisible={setPassVisible} error={error} /> 
             <Input  name="confirmPassword" placeholder="Confirm your password" value={authState.confirmPassword} id="confirmpassword" setInput={authDispatch} passVisible={passVisible} setPassVisible={setPassVisible} error={error} />
            </>
        }
    return(
        <>
        <form className="form-box" onSubmit={onHandleSubmit}>
              {form}
            <div className="form-btn">
                 <button className="btn btn-primary btn-large">submit</button> 
            </div>
        </form>
        </>
    )
};

export default Form;