import { useState } from "react";
const {log} = console
const Form = () => {
    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    const [formData, setFormData] = useState({email:'', password:'', passwordconfirmed:'',okayToEmail:true})

    const handleDataChange = (event) => {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value

            }
        })

        // log(formData)
    }

    const getFormData = (e) =>{
        e.preventDefault()
       const checkInfo = formData.password === formData.passwordconfirmed ? 'Successfully signed up' : 'Password do not match'
       const newsResponse = formData.okayToEmail === true? 'Thanks for signing up for our newsletter':''
        log(formData)
        log(checkInfo)
        log(newsResponse)
    }

    const formStyle = {
        display:'grid',
        padding:'20px',
        backgroundColor:'greenyellow',
        marginTop:'50px'
    }
    return ( 
        <form className="form" style={formStyle}>
        <input 
            type="email" 
            placeholder="Email address"
            className="form--input"
            name="email"
            value={formData.email}
            onChange={handleDataChange}
        />
        <br />
        <input 
            type="password" 
            placeholder="Password"
            className="form--input"
            name="password"
            value={formData.password}
            onChange={handleDataChange}
        />
        <br />
        <input 
            type="password" 
            placeholder="Confirm password"
            className="form--input"
            name="passwordconfirmed"
            value={formData.passwordconfirmed}
            onChange={handleDataChange}
        />
        <br />
        
        <div className="form--marketing">
            <input
                id="okayToEmail"
                type="checkbox"
                name="okayToEmail"
                checked={formData.okayToEmail}
                onChange={handleDataChange}
                
            />
            <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <br />
        <button 
            className="form--submit"
            onClick={getFormData}
        >
            Sign up
        </button>
    </form>
     );
}
 
export default Form;