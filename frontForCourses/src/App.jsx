/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import InputVacancy from "./components/InputVacancy";
import RequestButton from "./components/RequestButton";
import Container from "./components/Container";
import Skrepka from "./assets/images/skreopka.png";
import PepstersLogo from "./assets/images/pepsLogo.png";
import GeekLogo from "./assets/images/logoGeek.png";
import OrgLogo from "./assets/images/orgLogo.png";

function App() {
  const [file, setFile] = useState("");
  const [children, setChildren] = useState([
    {
      name: "Go developer",
      url: "http://example.com",
      coverage: 0.66,
      skills: {
        html: false,
        css: true,
        javascript: true,
      },
    },
    {
      name: "React developer",
      url: "http://example.com",
      coverage: 0.5,
      skills: {
        html: false,
        css: false,
        javascript: true,
      },
    },
  ]);

  useEffect(() => {
    setChildren([
      {
        name: "Go developer",
        url: "http://example.com",
        coverage: 0.66,
        skills: {
          html: false,
          css: true,
          javascript: true,
        },
      },
      {
        name: "React developer",
        url: "http://example.com",
        coverage: 0.5,
        skills: {
          html: false,
          css: false,
          javascript: true,
        },
      },
    ]);
  }, []);

  const handleFile = () => {};

  return (
    <div className="h-[800px] w-[550px] bg-blue-200 m-4 rounded-lg">
      <div className="flex m-4">
        <img src={PepstersLogo} alt="pepsLogo" className="h-20" />
        <img src={GeekLogo} alt="logoGeek" className="h-20" />
        <img src={OrgLogo} alt="orgLogo" className="h-20" />
      </div>
      <div className="flex flex-col">
        <InputVacancy />
        <div className="flex w-1/4 mt-4 relative left-[70%] top-[-6rem] h-0">
          <label onChange={handleFile} htmlFor="formId">
            <img src={Skrepka} alt="skreopka" className="h-10 w-10" />
            <input name="" type="file" id="formId" hidden />
          </label>
          <RequestButton />
        </div>
      </div>
      <div></div>
      <div className="flex m-4 gap-5">
        <Container>{children}</Container>
      </div>
    </div>
  );
}

export default App;
