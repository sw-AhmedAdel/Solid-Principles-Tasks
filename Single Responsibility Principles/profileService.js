const update = require("/databaseHelper");

async function updateProfile(userID, userData) {
  return await update(userID, userData);
}

model.exports = {
  updateProfile,
};
