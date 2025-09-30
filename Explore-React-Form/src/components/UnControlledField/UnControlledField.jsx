import React, { useRef } from 'react';

const UnControlledField = () => {
    const nameRef = useRef("")
    const emailRef = useRef("")

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
    }

    return (
        <div>
            <h2>UnControlled Field</h2>
            <form onSubmit={handleSubmit}>

            <input ref={nameRef} type="text" name='name' placeholder='Your Name'/> <br />
                <input ref={emailRef} type="email" name="email" placeholder='Your Email' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledField;