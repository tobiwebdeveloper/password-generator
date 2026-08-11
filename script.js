const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const passwordOutput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const strengthValue = document.getElementById("strength-value");

const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()_+-=[]{}|;:,.<>?";



function generatePassword () {
    let availableCharacters = "";
    let password = ""
    if (uppercaseInput.checked){
        availableCharacters += uppercaseList;
    }
    if (lowercaseInput.checked){
        availableCharacters += lowercaseList;
    }
    if (numbersInput.checked) {
        availableCharacters += numbersList;
    }
    if (symbolsInput.checked) {
        availableCharacters += symbolsList;
    }
    if (availableCharacters.length === 0) {
    return;
}
    for (let i = 0; i < lengthInput.value; i++){
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        const randomCharacter = availableCharacters[randomIndex];
        password += randomCharacter;
    }
    passwordOutput.textContent = password;
    checkPasswordStrength();
}
async function copyPassword(){
const password = passwordOutput.textContent;

await navigator.clipboard.writeText(password)
copyBtn.textContent = "Copied!";
await new Promise(resolve => setTimeout(resolve, 2000));
copyBtn.textContent = "Copy";
}
function checkPasswordStrength() {
    let score = 0;

    if (lengthInput.value >= 12) {
        score += 1;
    } 
    if (lengthInput.value >= 20) {
        score += 1;
    }

    if (uppercaseInput.checked) {
        score += 1;
    }

    if (numbersInput.checked) {
        score += 1;
    }

    if (symbolsInput.checked) {
        score += 1;
    }

    if (score <= 1) {
        strengthValue.textContent = "Weak";
        strengthValue.style.color = "#ff6b6b";
    } else if (score === 2) {
        strengthValue.textContent = "Medium";
        strengthValue.style.color = "#ffd166";
    } else if (score === 3) {
        strengthValue.textContent = "Strong";
        strengthValue.style.color = "#84f064";
    } else {
        strengthValue.textContent = "Excellent";
        strengthValue.style.color = "#64f0dd";
    }
}

generateBtn.addEventListener("click", generatePassword)
copyBtn.addEventListener("click", copyPassword)

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
})