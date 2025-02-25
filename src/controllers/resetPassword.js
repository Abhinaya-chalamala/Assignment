import { User } from "../models/User.js";

const resetPassword = async (req, res) => {
  const validatePassword = (password) => {
    return password.length >= 6; // Example: Password must be at least 6 characters
  };

  const { email, newPassword } = req.body;

  if (!email || !newPassword)
    return res.status(400).json({ message: "required fields are missing..." });

  if (!validatePassword(newPassword))
    return res.status(400).json({ message: "Password too short" });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { resetPassword };
