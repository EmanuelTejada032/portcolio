import React from 'react'

const Form = () => {
    return (
        <>
                <form 
                    name="contact-form"
                    method="POST"
                    data-netlify="true"
                 >
                     <input type="hidden" name="form-name" value="contact-form"/>
      <div>
        <label>Name<br />
            <input type="text" name="name" />
        </label>
      </div>

      <div>
        <label htmlFor="email" >Email</label><br />
        <input id="email" type="email" name="email" />
      </div>

      <div>
        <label>Your message<br />
          <textarea name="message"></textarea>
        </label>
      </div>

      <button type="submit">Submit The Results</button>

    </form>
        </>
    )
}

export default Form
