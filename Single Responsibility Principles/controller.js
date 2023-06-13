const profileService = require("/profileService");
const email = require("/email");

async function updateProfile(req, res) {
  const userId = req.params.id;
  const userData = req.body;
  try {
    const updatedUser = await profileService.update(userId, userData);
    await new email.sendEmail(updatedUser.name, updatedUser.email);
    console.log("Email has been sent to the user for updating his data");
  } catch (err) {
    console.log("Error");
  }
}
