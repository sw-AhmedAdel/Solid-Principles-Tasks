const User = require("./user.mongo");

async function updateProfile(userID, userData) {
  return await User.updateOne(userID, userData, {
    new: true,
    runValidator: true,
  });
}

model.exports = {
  updateProfile,
};
