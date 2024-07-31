function authenticateUser() {
  // Get the entered username and password
  var enteredUsername = document.getElementById("username").value;
  var enteredPassword = document.getElementById("password").value;

  var correctCredentials = {   //if user enter this username and password then only the Login successful message shows
    "printnova": "password",
    "rohan": "rohandev",
    "nikita": "nikita@001",
    "pawal": "p@w@l",
    "bhupendra": "bhupen@123"
  };

  // Check if the entered credentials are correct
  if (correctCredentials.hasOwnProperty(enteredUsername) && enteredPassword === correctCredentials[enteredUsername]) {
    showLoginMessage("Login successful! Welcome back, " + enteredUsername + "!");
  } else {
    alert("Login failed. Please check your credentials.");
  }
}

function showLoginMessage(message) {
  alert(message);
}


