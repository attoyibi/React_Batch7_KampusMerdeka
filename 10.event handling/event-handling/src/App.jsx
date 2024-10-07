import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let count = 0;
  let name = 'data dari form nama masuk kesini';
  let email = 'data dari form email';
  let dataUser = { name: '', email: '' };
  const namaFunction = () => {
    // baru diisi logika
    console.log('button click');
  }

  const handleClick = () => {
    console.log(count++);
    console.log('harun');
  }
  const handleKeyUp = (events) => {
    console.log(events);
    console.log(events.target.value);
    console.log('console handleKeyUp');
  }
  const handleKeyDown = (events) => {
    console.log(events.target.value);
    let data = events.target.value;
    if (data == 'kata kasar' && data.length < 2) {
      alert('kasar banget bro');
    }
    console.log('console handleKeyDown')
  }
  const handleChangeName = (events) => {
    name = events.target.value;
    console.log('console handleChange name =' + name);
  }

  const handleChangeEmail = (events) => {
    email = events.target.value;
    console.log('console handleChange name =' + email);
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name)
    dataUser[name] = value
    console.log(dataUser);
  }

  const handleMouseEnter = () => {
    console.log('console onMouseEnter');
  }

  const handleMouseLeave = () => {
    console.log('console onMouseLeave');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit name = ' + name + " | email =" + email);
  }

  return (
    <div className='p-5'>
      <h1 className='text-5xl pb-3 text-center'>Event Handling - {count}</h1>
      <form className='my-2' onSubmit={handleSubmit}>
        Contoh onSubbmit
        <input name="name" type="text" onChange={handleChange} className='border border-2' placeholder="name" />
        <input name="email" type="email" onChange={handleChange} className='border border-2' placeholder="email" />
        <button type="submit" className='border border-2'>Submit</button>
      </form>
      <hr />
      <button onClick={namaFunction} type="button" className="py-3 mt-5 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        onClick
      </button>
      <button onClick={handleClick} type="button">
        Harun
      </button>
      <button onClick={() => console.log('inline click')}>inline Event Handle</button>
      <hr className='py-2' />
      <input onKeyUp={handleKeyUp} type="text" className='border border-2' placeholder="handler onKeyUp" />
      {/* buatkan conoth untuk keyDown */}
      <input onKeyDown={handleKeyDown} type="text" className='border border-2' placeholder="KeyDown" />
      <input type="text" onChange={handleChangeEmail} className='border border-2' placeholder="onChange" />
      <hr />
      <button onMouseEnter={() => console.log("mouuse enter")}
        onMouseLeave={() => console.log("mouuse leave")}
        className="mt-2 border border-2">OnMouse Enter and Over</button>
      <button onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} className="mt-2 border border-2">Lintang Isnandar</button>

    </div>
  )
}

export default App
