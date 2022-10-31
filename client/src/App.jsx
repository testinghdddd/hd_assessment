import './App.css'
import {   homeLogo,  } from "./assets";
import styles from "./style";
import { Home, Login, SignUp, User} from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => (
  
<>  

    <Routes>
      
      <Route path="/" element ={
        <div className=" w-full overflow-hidden">
          <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                  <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[32px] text-white ss:leading-[60.8px] leading-[45px]">
                  <br className="sm:block hidden" />{" "}
                      <span className="text-gradient">Test assessment</span>{" "}
                    </h1>
                  </div>
                  <h1 className="font-poppins font-semibold ss:text-[62px] text-[32px] text-white ss:leading-[60.8px] leading-[45px] w-full">
                  <span className="text-gradient"> For HD</span>
                  </h1>
                  <p className={`${styles.paragraph} max-w-[470px] mt-5 self-center`}>
                    This is an assessment.
                  </p>
                </div>
                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={homeLogo} alt="canvathegoat" className="xs:w-[56%] w-[49%]" />
                </div>
           </section>
           <section>
              <h1 className="font-poppins xs:mt-20  mt-0 font-semibold ss:text-[27px] text-[22px] text-white ss:leading-[60.8px] leading-[45px] w-full">
              <span className="text-gradient"> This applicaiton allow users to sign up or login.</span>
              </h1>
           </section>
            <Home />
        </div>
        
      } />
      <Route path="/login" element ={<Login />} />  
      <Route path="/user" element ={<User />} />  
      <Route path="/signup" element ={<SignUp />} />  
    </Routes>
</>
);

export default App;