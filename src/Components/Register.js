import React from 'react'

const Register = () => {
  return (
    <div>
       <div className='contact'>
      <h2>Register</h2>
      <div className='form'>
       <label>Name</label>
       <input type='text' name='name' placeholder='enter your name' />
       <label>Email Id</label>
       <input type='text' name='mail' placeholder='enter your mail Id' />
       <label>Phone number</label>
       <input type='text' name='name' placeholder='enter your number' />
       <label>Pass word</label>
       <input type='text' name='name' placeholder='enter your pass word' />
       <label>Confirm Pass Word</label>
       <input type='text' name='name' placeholder='enter your confirm password' />
       <button>Submit</button>
       </div>
        </div>
    </div>
  )
}

export default Register