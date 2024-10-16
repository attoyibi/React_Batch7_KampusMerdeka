import { useState, useRef } from 'react'

import './App.css'

function App() {
  const [username, setUsername] = useState(false);
  const [checkBox, setCheckBox] = useState(false);
  const [gender, setGender] = useState('');
  const [selectedFile, setSelectedFile] = useState({ name: 'default' });
  const [formData, setFormData] = useState({
    username: '',
    checkbox: '',
    gender: '',
    selectedFile: ''
  });
  const [errors, setErrors] = useState({
  });
  function handleChange(e) {
    const { name, value } = e.target
    console.log('name = ', name);
    console.log('valuue  =   ', value);
    let fieldError = '';
    if (name === 'username') {
      console.log('data username validasi');
      const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
      console.log("value trim", value.trim());
      if (value.trim()) {
        fieldError = 'Username tida boleh kosong';
      } else if (!usernameRegex.test(value)) {
        fieldError = 'Username must be at least 3 characters and alphanumeric';
      }
      //logic validasi username ada disini
    }
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  // console.log('value dari formData=', formData);
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
    e.preventDefault();
    console.log('Form Data:', formData);
    alert(`Form Submitted\nName: ${formData.username}\nEmail: ${formData.checkBox}\nPhone Number: ${formData.gender}`);
  }


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
          onChange={handleChange}
        />Male</label>
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            // checked={gender === 'other'}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <label htmlFor="">
        <input type="checkbox" name="checkBox" id="checkBox" onChange={handleChange} /> Kamu sudah membaca peraturan - <a>Link</a>
      </label>
      <form onSubmit={handleSubmit}>
        <input name='selectedFile' type="file" onChange={handleChange} />

        <button type="submit">Sumbit</button>
      </form>

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