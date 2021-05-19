import React from 'react'
import './styles.css'
const Form = () => {
    return (
        <div className='form-center'>
            <form 
              name='contact-form'
              method='POST'
              data-netlify='true'
              className='contact-form'
            >
                <input type='hidden' name='form-name' value='contact-form'/>
              <div className='form-inputs'>
                <div className='sender-info'>
                  <div>
                     <label htmlFor='name' >Name</label><br />
                    <input id='name' placeholder='Name' type='text' name='name' data-error='Please add a user' aria-required="true" required />
                  </div>
                  <div>
                    <label htmlFor='email' >Email</label><br />
                    <input id='email' placeholder='Email' type='email' name='email' aria-required="true" required/>
                  </div>
                  
                </div>
                <div>
                  <label htmlFor='message' >Your message</label><br />
                  <textarea name='message' placeholder='Your message'  id='message' aria-required="true" required></textarea>
                </div>
              </div>

              <button type='submit' className='form-button'>Submit</button>

            </form>
        </div>
    )
}

export default Form
