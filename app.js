//Init Github
const github = new Github();
//Init UI
const ui = new UI();

// Search input

const searchUser = document.getElementById("searchUser");

//Search input even listener
searchUser.addEventListener("keyup", e => {
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    //Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //Show Alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        //Show the Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //Clear the profile
    ui.clearProfile();
  }
});
