const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const multer = require('multer')
app.use(express.json());
app.use(cors());

const JWT_SECRET = "IUYSDGAF&*(#GF*&@!GFIHJEGBFKJHGJHFG*&#FT*@!#BFG*&^@#FG&^@#FGYUEGFJHWEGF"
const mongoUrl = "mongodb+srv://yuhan:yuhan@cluster0.k5vdxbk.mongodb.net/?retryWrites=true&w=majority"


const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images"); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);

  },
});


const upload = multer({ storage: fileStorageEngine });


  mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

  app.post("/imageupload", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.send("Single File upload success");
  });

  require ("./userDetails")
  const User = mongoose.model("UserInfo");

  app.post("/register", upload.single("image"), async(req,res)=>{

    const email = req.body['email']
    const password = req.body['password']
    const encryptedPass = await bcrypt.hash(password,13)
    try{
      const oldUser = await User.findOne({ email });
      if (oldUser){
        return res.json({error:"email used"})
      }
      await User.create({
        email,
        password:encryptedPass,


      })
      res.send({status:"ok"})
    }catch(error){
      res.send({status:"error"})
    }
  })


  app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401);
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET);
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.status(401);
    return res.json({ status: "error", error: "Invalid Password" });

  });

  app.post("/user", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      console.log(user);
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
  });


  app.listen(5000, () =>{
    console.log('server started');
  })