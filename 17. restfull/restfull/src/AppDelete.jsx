import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [user, setUser] = useState([])
  const [inputUser, setInputUser] = useState({
    Product: '',
    price: '',
  })
  useEffect(() => {
    console.log("use effect");
    fetchData()
  }, []);

  // function fetchData() {
  //   console.log("fetch data");
  // }
  const fetchData = async () => {
    console.log("fetch data with arrow func");
    // axios di pasang pada function
    try {
      // berjalan diawal dan ketika berhasil akan diakhiri
      const respond = await axios.get("https://6718b0277fc4c5ff8f4a92a7.mockapi.io/assets/v2/users");
      console.log("respond dari try", respond.data);
      setUser(respond.data);
    } catch (error) {
      // akan berjalan jika try mengalami error
      console.error("error dari exios", error);
    }
  };
  const postData = async (e) => {
    e.preventDefault();
    console.log("data yang dikirimkan", inputUser);
    try {
      const response = await axios.post("https://6718b0277fc4c5ff8f4a92a7.mockapi.io/assets/v2/users", inputUser);
      // tambah logikan untuk menambah data ke useState
      console.log("response post ", response);
      fetchData();
      // window.location.reload()
    } catch (error) {
      console.error(error);
    }
  }
  const handleChange = (e) => {
    console.log("tamkap data", e.target.value);
    setInputUser(
      {
        ...inputUser,
        [e.target.name]: e.target.value,
      }
    );
  }
  console.log("inputUser", inputUser);
  const handleDelete = async (idDariUser) => {
    let id = idDariUser;
    console.log("id", id);
    try {
      const response = await axios.delete(`https://6718b0277fc4c5ff8f4a92a7.mockapi.io/assets/v2/users/${id}`)
      fetchData();
    } catch (error) {
      console.error("error", error)
    }
  }
  return (
    <>
      <h1>Axios</h1>
      <form onSubmit={postData}>
        <div>
          <label>Product Name</label>
          <input name="Product" onChange={handleChange} type="text" required></input>
        </div>
        <div>
          <label>Price Name</label>
          <input onChange={handleChange} name="price" type="text" required></input>
        </div>

        <button onClick={postData}>Post Data</button>
      </form>
      {/* {user[3].Product} */}
      <p>{user.map((data, index) => (
        <>
          <p key={index}>{index} - {data.Product}</p>
          <p>{data.price}</p>
          <button style={{ backgroundColor: "red" }} onClick={() => handleDelete(data.id)}>Delete</button>
          <hr></hr>
          {/* <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <img
              className="w-full h-auto rounded-t-xl"
              src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
              alt="Card Image"
            />
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {data.Product}
              </h3>
              <p className="mt-1 text-gray-500 dark:text-neutral-400">
                {data.price}
              </p>
              <a
                className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Go somewhere
              </a>
            </div>
          </div> */}
        </>
      ))}</p>
    </>
  )
}

export default App
