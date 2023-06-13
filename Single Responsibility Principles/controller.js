const email = require("/email");
const { updateUser } = require("./user.model");

async function httpUpdateProfile(req, res) {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await updateUser(userId, userData);
    await new email.sendEmail(updatedUser.name, updatedUser.email);
    console.log("Email has been sent to the user for updating his data");
    return res.status(200).json({
      status: "sucess",
      user: updateUser,
    });
  } catch (err) {
    console.log("Error");
  }
}

model.exports = {
  httpUpdateProfile,
};
