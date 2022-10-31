import React, { useState} from 'react'
import styles,{ layout } from "../style";
import  { useEffect } from 'react';
import { homeLogo } from '../assets';

const Login = () => {
  useEffect(() => {
    document.title = 'Login - HD';
  });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [feedback,setFeedback] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
      
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "logged in ");
        if (data.status =="ok"){
          window.localStorage.setItem("token",data.data);
          window.location.href="./user"
        }
      });
  
      setLoader(true);
      setEmail("");
      setPassword("");
      setFeedback("Submitted.");

  };
  return (
    <div className=" w-full overflow-hidden">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

        <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
                  <img src={homeLogo} alt="contact" className="w-[80%] h-[80%] object-scale-down relative z-[5]" />

                </div>

                <div className={layout.sectionInfo}>
                  <h2 className={`${styles.heading2form} text-gradient`}>
                    Login
                  </h2>
                  <div className={styles.form}>
                      <form className=" flex flex-col space-y-4 mt-3" onSubmit={handleSubmit}>
                          <div>
                            <label className="text-lg font-poppins font-bold text-gradient">Email Address</label>
                            <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="" className='mt-2 ring-1 text-gradient font-poppins ring-gray-300 w-full rounded-md px-4 py-2 outline-none bg-black focus:ring-2 focus:ring-teal-300 mb-2'>
                            </input>
                          </div>
                          <div>
                            <label className="text-lg font-poppins font-bold text-gradient">Password</label>
                            <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="" className='mt-2 ring-1 text-gradient font-poppins ring-gray-300 w-full bg-black rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mb-2'>
                            </input>
                          </div>          
                          <button type="submit"  style={{ background: loader ? "#ccc" :" rgb(9, 101, 110)"}} className="z-30 font-arial inline-block self-center text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                            Login
                          </button>
                          <div className="z-30 text-gradient font-arial inline-block self-center text-green font-bold px-6 py-2 text-sm xs:w-max">
                            {feedback}
                          </div>
                      </form>
                   </div>

                </div>
          </section> 

        </div>
      </div>
    </div>
  )
}

export default Login