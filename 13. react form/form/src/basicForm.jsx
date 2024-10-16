import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [username, setUsername] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [gender, setGender] = useState('');
  const [selectedFile, setSelectedFile] = useState({ name: 'default' });
  function handleChange(e) {
    console.log('handleChange')
    setUsername(e.target.value);

  }
  function handleChangeCheckBox() {
    setCheckBox(!checkBox);
  }
  function handleChangeRadio(e) {
    console.log('handleChangeRadio Value', e.target.value)
    setGender(e.target.value);
  }
  // Handle file selection
  function handleFileChange(e) {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    } else {
      console.log('No file selected');
    }
  }
  console.log(checkBox);

  return (
    <>
      <h1>React Form Controlled</h1>
      <input name='username' type="text" onChange={handleChange} />
      <h3>Select Your Gender</h3>
      <label htmlFor="">
        <input
          type="radio"
          name="gender"
          value="male"
          // checked={gender === 'male'}
          onChange={handleChangeRadio}
        />Male</label>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            // checked={gender === 'other'}
            onChange={handleChangeRadio}
          />
          Female
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />

        <button type="submit">Upload</button>
      </form>
      <label htmlFor="">
        <input type="checkbox" name="" id="" onChange={handleChangeCheckBox} /> Kamu sudah membaca peraturan - <a>Link</a>
      </label>
      <hr />
      {username} - {gender}-{selectedFile.name}
      {/* <hr /> */}
      {/* <h1>React Form UnControlled</h1> */}
      {/* <form ref={formRef} onSubmit={handleSubmitUncontrolled} >
        <input name='username' type="text" />
        <input type="text" name="firstName" />
        <button type="submit">Submit</button>
      </form > */}
      {/* {enteredUsername}
      -
      {stateEnteredUsername} */}
    </>
  )
}

export default App


// // contoh Uncontroller
// const formRef = useRef();
// // const firstNameRef = useRef();

// let enteredUsername = 'default';
// // const [stateEnteredUsername, setStateEnteredUsername] = useState('state entered');
// function handleSubmitUncontrolled(e) {
//   e.preventDefault();

//   console.log(formRef);
//   const { username, firstName } = formRef.current.elements;
//   console.log(username.value);
//   console.log(firstName.value);
//   // enteredUsername = formRef;
//   // setStateEnteredUsername(enteredUsername);
//   // console.log('enteredUsername =', enteredUsername);

//   // console.log('First Name = ', firstNameRef.current.value)
//   // const enterUsername = usernameRef

// }