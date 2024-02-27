//user login

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error logging in:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};