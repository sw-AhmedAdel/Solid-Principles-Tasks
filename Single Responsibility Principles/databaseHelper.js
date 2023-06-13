const User = require("/userDatabae");
async function update(userId, userDate) {
  return await User.update(userId, userDate);
}

model.exports = {
  update,
};
