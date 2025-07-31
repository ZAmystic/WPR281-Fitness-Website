/* User Data Object */

let ObjUsers = [
  {
    UserID: "1",
    UserName: "Admin",
    UserPsw: "5279",
    TotalCalories: "12350",
    TotalHours: "124",
    NumExcersises: 34,
  },
  {
    UserID: "2",
    UserName: "Jhon",
    UserPsw: "D0lphins",
    TotalCalories: "1100",
    TotalHours: "12",
    NumExcersises: 4,
  }
]

document.addEventListener('DOMContentLoaded', function() {
  if (sessionStorage.getItem('loggedIn') === 'true') {
      const username = sessionStorage.getItem('username');
      console.log(`User ${username} is logged in.`);
      
      let user = document.getElementById("Name");
      user.style.display = "Inline-Block";
      user.textContent = sessionStorage.getItem('username');
      document.getElementById("Login").style.display = "none";
      document.getElementById("Register").style.display = "none";
      document.getElementById("ShowStatsLink").style.display = "Inline-Block"
      document.getElementById("ShowExcersiseLink").style.display = "Inline-Block"
      document.getElementById("ShowGoalsLink").style.display = "Inline-Block"
      document.getElementById("start-workout-btn").style.display = "Block"

      /* User Achievements */
/*       const numExercises = parseInt(sessionStorage.getItem('NumExcercises'));
      const totalCalories = parseInt(sessionStorage.getItem('TotalCalories'));
      let BronzeM = document.getElementById('BronzeMedal');
      let BronzeT = document.getElementById('BronzeText');
      let SilverM = document.getElementById('SilverMedal');
      let SilverT = document.getElementById('SilverText');
      let GoldM = document.getElementById('GoldMedal');
      let GoldT = document.getElementById('GoldText');

        if (2 >= 1) {
            BronzeM.style.visibility = "Visible";
            BronzeT.textContent = "1st Workout Complete";
        }
        if (1200 >= 1000) {
            SilverM.style.visibility = "Visible";
            SilverT.textContent = "1000 Calories Burned";
        }
        if (2 >= 5) {
            GoldM.style.visibility = "Visible";
            GoldT.textContent = "5 Workouts Complete";
        } */
    }
});

/* User data manipulation */

function LogIn (){

  const form = document.getElementById('myForm')
  const ShowUserName = document.getElementById('LUsername').value;
  const UserPassword = document.getElementById('Lpsw')
  
  let foundUser = false;
  let i = 0;
  
  while (i < ObjUsers.length && foundUser === false) {
    if (ObjUsers[i].UserName === ShowUserName && ObjUsers[i].UserPsw === UserPassword.value) {
      foundUser = true;
      sessionStorage.setItem('userID', ObjUsers[i].UserID);
      sessionStorage.setItem('TotalCalories', ObjUsers[i].TotalCalories);
      sessionStorage.setItem('NumExcercises', ObjUsers[i].NumExcersises);
    }
    i++;
  }

  if (foundUser) {
    closeForm();
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', ShowUserName);
    let user = document.getElementById("Name");
    user.style.display = "Inline-Block";
    user.textContent = sessionStorage.getItem('username');
    document.getElementById("Login").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("ShowStatsLink").style.display = "Inline-Block";
    document.getElementById("ShowExcersiseLink").style.display = "Inline-Block";
    document.getElementById("ShowGoalsLink").style.display = "Inline-Block";
    document.getElementById("start-workout-btn").style.display = "Block";
  } else {
    alert("Incorrect UserName or Password");
  }
}

function Register(){
  const form = document.getElementById('myRegister')
  const ShowUserName = document.getElementById('RUsername').value;
  const UserPassword = document.getElementById('Rpsw')
  const CUserPassword = document.getElementById('Cpsw')

  if (UserPassword.value === CUserPassword.value) {
    closeRegister();
    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', ShowUserName);
    let user = document.getElementById("Name");
    user.style.display = "Inline-Block";
    user.textContent = sessionStorage.getItem('username');
    document.getElementById("Login").style.display = "none";
    document.getElementById("Register").style.display = "none";
    document.getElementById("ShowStatsLink").style.display = "Inline-Block"
    document.getElementById("ShowExcersiseLink").style.display = "Inline-Block"
    document.getElementById("ShowGoalsLink").style.display = "Inline-Block"
    document.getElementById("start-workout-btn").style.display = "Block"

    let objNewUser = [
      {
        UserID: `${ObjUsers.length + 1}`,
        UserName: ShowUserName.value,
        UserPsw: UserPassword.value,
      }
    ]
    sessionStorage.setItem('userID', foundUser.UserID)
    ObjUsers.push(objNewUser);
    console.log(ObjUsers);
    
  } else {
    alert("Password must be the same as Confirm password")
  }
}

/* code for opening and closing the sign in form */

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myRegister").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openRegister() {
  document.getElementById("myRegister").style.display = "block";
  document.getElementById("myForm").style.display = "none";
}

function closeRegister() {
  document.getElementById("myRegister").style.display = "none";
}