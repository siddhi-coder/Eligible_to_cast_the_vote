// Write a program to check whether the user is eligible to cast the vote. The user must
// check following two conditions for casting the vote:
// (a) the age should be equal to or greater than 18 years and
// (b) the nationality should be Indian.


function eligibleToVote() {
    let userAge = document.getElementById("age").value;
    let userNationality = document.getElementById("Nationality").value.toLowerCase();
    let result = document.getElementById("result");
    
    if (userAge === "" || userNationality === "") {
        result.innerHTML = "Please enter both age and nationality.";
    } else if (userAge >= 18 && userNationality === "indian") {
        result.innerHTML = "You are eligible to cast the vote";
    } else {
        result.innerHTML = "You are not eligible to cast the vote";
    }
}






