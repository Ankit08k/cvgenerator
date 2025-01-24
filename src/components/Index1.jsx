import React, { useState } from "react";
import Sbar from "./Sbar";
import Personaldetails from "./personaldetails";
import Summary from "./Summary";
import Sociallinks from "./Sociallinks";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

function Index1() {
  const [step, setStep] = useState("");
  return (
    <div>
      <Sbar setStep={setStep} />
      {step === "personaldetails" && <Personaldetails />}
      {step === "Summary" && <Summary />}
      {step === "Sociallinks" && <Sociallinks />}
      {step === "Education" && <Education />}
      {step === "Experience" && <Experience />}

      {step === "Projects" && <Projects />}

      {step === "Skills" && <Skills />}
    </div>
  );
}

export default Index1;
