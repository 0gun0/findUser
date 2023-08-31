import express from "express";
import User from '../schemas/user.schemas.js'

const router = express.Router();

/* 회원 등록 API */
router.post("/user", async (req, res, next) => {
  const {name, pw, id, email} = req.body
  try {
    const user = new User({ name, id, pw, email });
    await user.save();

    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
});

/* 회원 조회 API */
router.get("/user", async (req, res, next) => {
  const Users = await User.find({}, 'name id').exec();
  return res.status(200).json(Users);
});

/* 회원 상세 조회 API */
router.get("/user/:userId", async (req, res, next) => {
  const { userId } = req.params;
  const user = await User.findById(userId).exec() //왜 안나오냐?
  return res.status(200).json(user)
})


export default router;