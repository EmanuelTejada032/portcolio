import React from 'react'

const Form = () => {
    return (
        <>
                <form 
      name="contact v1"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v1" />

      <div hidden>
        <input name="bot-field" />
      </div>

      <div>
        <label>Name<br />
            <input type="text" name="first-name" />
        </label>
      </div>

      <div>
        <label htmlFor="email" >Email</label><br />
        <input id="email" type="email" name="email" />
      </div>

      <div>
        <label>Your message<br />
          <textarea name="comments"></textarea>
        </label>
      </div>

      <button type="submit">Submit The Results</button>

    </form>
        </>
    )
}

export default Form
