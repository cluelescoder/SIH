const User = require("../models/Users");
// const CryptoJS = require("crypto-js");
const router = require("express").Router();


//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json("Wrong username!");
        }
        // const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        // const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        // const inputPassword = req.body.password;

        // if (originalPassword !== inputPassword) {
        //     return res.status(401).json("Wrong Password");
        // }
        // const accessToken=jwt.sign({
        //     id:user._id,
        //     isAdmin:user.isAdmin,
        // },
        // process.env.JWT_SEC,
        // {expiresIn:"3d"})
        // const {password,...others}=user._doc;
        res.status(200).json("user found");
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal Server Error");
    }
});



module.exports = router;