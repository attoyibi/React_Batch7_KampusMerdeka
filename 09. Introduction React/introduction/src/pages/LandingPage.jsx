import HeroSection from "../components/HeroSection";
import InformationSection from "../components/InformationSection";
export default function LandingPage({ namaProps, university, onButtonClick }) {
  console.log("Landing Page Component");
  console.log(namaProps);
  console.log("===========");
  console.log("button click", onButtonClick);
  const classKampusMerdeka = "react B";
  //di component dilakukan fech data
  return (
    <>
      <h1 onClick={() => onButtonClick("data yang di fech")}>LandingPage</h1>
      <div>
        Data dari Props
        <div>{namaProps.firstName}</div>
        <div>{university}</div>
      </div>

      <hr></hr>
      <HeroSection kirim={classKampusMerdeka} university={university} />
      <HeroSection kirim={classKampusMerdeka} university={university} />
      <InformationSection namaProps={namaProps} />

      <hr />
    </>
  );
}
