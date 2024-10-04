// dinamakan komponen
import LandingPages from "./pages/LandingPage";
import ClassComponent from "./components/ClassComponent";
export default function App() {
  // tempat logikan, variabel
  let name = "muchson";
  // let age = 23;
  const dataUser = {
    firstName: "Muchson",
    lastName: "Toyib",
    avatarUrl: "linknya",
  };
  function formatName(user) {
    //logika itu di taruh diatasnya return

    return user.firstName + " " + user.lastName;
  }

  // if (name == "muchson1") {
  //   name = "toyib";
  // }
  //praktik kalian
  const university = "University Amikom Yogyakarta";
  const university2 = "Universitas Islam Nusantara";

  const handleClick = (data) => {
    //logika dari handle click

    alert(`Button Clicked + ${data}`);
  };
  return (
    <>
      <div>
        <LandingPages
          onButtonClick={handleClick}
          namaProps={dataUser}
          university={university}
        />
      </div>
      {name == "inal" ? (
        <div className="">{university2}</div>
      ) : (
        <div className="">{university}</div>
      )}

      <h1 onClick={() => handleClick("muchson")}>Variabel Nama = {name}</h1>
      {name == "muchson1" && <div> University = {university}</div>}
      <div>Expression = {formatName(dataUser)}</div>
      <img src={dataUser.avatarUrl}></img>
      <hr></hr>
      <ClassComponent />
    </>
  ); // apa yang tampilkan pada layar
}
