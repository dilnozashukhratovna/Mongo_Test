const { errorHandler } = require("../helpers/error_handler");
const User = require("../models/User");

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (name == "" || email == "" || password == "") {
            return res
                .status(400)
                .send({ message: "Ma'lumotlarni toliq yuboring" });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).send({ message: "Bunday email mavjud" });
        }
        const newUser = await User({
            name: name,
            email: email,
            password: password,
        });
        await newUser.save();
        res.status(200).send({ message: "Foydalanuvchi qoshildi" });
    } catch (error) {
        errorHandler(res, error);
    }
};

const getUsers = async (req, res) => {
    try {
        //GET USERS
        const users = await User.find({});
        if (!users) {
            return res
                .status(400)
                .send({ message: "Foydalanuvchilar topilmadi" });
        }
        res.json(users);
    } catch (error) {
        errorHandler(res, error);
    }
};
const getUsersById = async (req, res) => {
    try {
        //GET USER BY ID
        const user = await User.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(400).send({ message: "Foydalanuvchi topilmadi" });
        }
        res.json(user);
    } catch (error) {
        errorHandler(res, error);
    }
};

const updateUser = async (req, res) => {
    try {
        //UPDATE USER
        const user = await User.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                },
            }
        );
        if (!user) {
            return res.status(400).send({ message: "Foydalanuvchi topilmadi" });
        }
        res.json({ message: "Update qilindi" });
    } catch (error) {
        errorHandler(res, error);
    }
};

const deleteUser = async (req, res) => {
    try {
        //DELETE USER
        const user = await User.deleteOne({ _id: req.params.id });
        if (!user) {
            return res.status(400).send({ message: "Foydalanuvchi topilmadi" });
        }
        res.json({ message: "Foydalanuvchi o'chirildi" });
    } catch (error) {
        errorHandler(res, error);
    }
};

const loginUser = async (req, res) => {
    try {
        //LOGIN
    } catch (error) {
        errorHandler(res, error);
    }
};

module.exports = {
    addUser,
    getUsers,
    getUsersById,
    updateUser,
    loginUser,
    deleteUser,
};
