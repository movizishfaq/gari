const registerUser = (req, res) => {
  const { name, email, age, adress } = req.body;
  if (!name || !email || !age || !adress) {
    throw new Error("PLESE ENTER ALL THE FIELDS !");
  }
  res.json({ name, email, age, adress });
};

module.exports = {
  registerUser,
};
