const name = "Susan";
const height = Math.min(39, Math.max(1, 40)); // Ensures height stays between 1 and 39
const message = `${name} is ${height} inches tall`;

module.exports = {name, height, message};
