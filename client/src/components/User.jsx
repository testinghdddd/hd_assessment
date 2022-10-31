import React, { Component } from "react";
import styles,{ layout } from "../style";


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    document.title = 'Account Page - HD';

    fetch("http://localhost:5000/user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
        <section id="product" className={layout.sectionReverse}>
              <div className={layout.sectionImgReverse}>

                </div>

                <div className={layout.sectionInfo}>
                <h2 className={`${styles.heading2form} text-gradient`}>         
                           Account Page
                  </h2>
                <div className={`${styles.heading2form} text-gradient mt-10`}>
                Email: <h1>{this.state.userData.email}</h1>
              </div>
                </div>
          </section> 
    );
  }
}