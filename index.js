// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

//generate two random password when button is clicked
// password needs to be 15 characters long

// Generate a random password
// Generate a random password
function generatePassword() {
    const passwordLength = 15; // Desired password length
    const characters = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
    ]; // Characters to include in the password
    const passwordOne = document.getElementById("passwordOne"); // Element to display the first generated password
    const passwordTwo = document.getElementById("passwordTwo"); // Element to display the second generated password

    // Generate the first password
const generatedPasswordOne = generateRandomPassword(passwordLength, characters); // Generate a random password using the generateRandomPassword function
passwordOne.innerText = generatedPasswordOne; // Set the inner text of passwordOne element to the generated password

// Generate the second password
const generatedPasswordTwo = generateRandomPassword(passwordLength, characters); // Generate another random password using the generateRandomPassword function
passwordTwo.innerText = generatedPasswordTwo; // Set the inner text of passwordTwo element to the generated password

}

// Function to generate a random password
function generateRandomPassword(length, characters) {
    let password = []; // Create an empty array to store the password characters
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // Generate a random index within the characters array
        password.push(characters[randomIndex]); // Add the character at the random index to the password array
    }
    return password.join(""); // Join the password array elements into a string and return it as the generated password
}

