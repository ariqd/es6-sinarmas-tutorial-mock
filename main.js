// Ambil element
const user = document.getElementById("user");

// ES5
const user_logged = "Ariq";
// user.innerHTML = "Hi, " + user_logged + ". Apa kabar?";

// ES6
user.innerHTML = `Hi, ${user_logged}, apa kabar?`
