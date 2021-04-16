import React from 'react'
import './styles.css'
const Form = () => {
    return (
        <>
                <form 
                    name='contact-form'
                    method='POST'
                    data-netlify='true'
                    className='contact-form'
                 >
                <input type='hidden' name='form-name' value='contact-form'/>
              <div className='form-inputs'>
                <div>
                  <label htmlFor='name' >Name</label><br />
                  <input id='name' placeholder='Name' type='text' name='name' />
                </div>
                <div>
                  <label htmlFor='email' >Email</label><br />
                  <input id='email' placeholder='Email' type='email' name='email' />
                </div>
                <div>
                  <label htmlFor='message' >Your message</label><br />
                  <textarea name='message' placeholder='Your message'  id='message'></textarea>
                </div>
              </div>

              <button type='submit' className='form-button'>Submit</button>

              </form>
        </>
    )
}

export default Form
