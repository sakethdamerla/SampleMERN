import express from 'express';
import User from '../models/User.js';

const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

   
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and Email are required' });
    }

    const user = new User({ name, email });
    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.error('❌ Error saving user:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
