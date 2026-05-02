const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");

const upperBtn = document.getElementById("upperBtn");
const lowerBtn = document.getElementById("lowerBtn");
const clearBtn = document.getElementById("clearBtn");

function updateCount() {
  const text = textInput.value;

  charCount.innerText = text.length;

  const words = text.trim().split(/\s+/);

  if (text.trim() === "") {
    wordCount.innerText = 0;
  } else {
    wordCount.innerText = words.length;
  }
}

textInput.addEventListener("input", updateCount);

upperBtn.addEventListener("click", function () {
  textInput.value = textInput.value.toUpperCase();
  updateCount();
});

lowerBtn.addEventListener("click", function () {
  textInput.value = textInput.value.toLowerCase();
  updateCount();
});

clearBtn.addEventListener("click", function () {
  textInput.value = "";
  updateCount();
});
const birthDate = document.getElementById("birthDate");
const ageBtn = document.getElementById("ageBtn");
const ageResult = document.getElementById("ageResult");

ageBtn.addEventListener("click", function () {
  const birthValue = birthDate.value;

  if (birthValue === "") {
    ageResult.innerText = "Please select your date of birth.";
    return;
  }

  const birth = new Date(birthValue);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();

  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  ageResult.innerText = "Your age is " + age + " years.";
});
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const bmiBtn = document.getElementById("bmiBtn");
const bmiResult = document.getElementById("bmiResult");

bmiBtn.addEventListener("click", function () {
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (height === 0 || weight === 0) {
    bmiResult.innerText = "Please enter both height and weight.";
    return;
  }

  if (height < 0 || weight < 0) {
    bmiResult.innerText = "Height and weight cannot be negative.";
    return;
  }

  const heightInMeter = height / 100;

  const bmi = weight / (heightInMeter * heightInMeter);

  const finalBmi = bmi.toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  bmiResult.innerText = "Your BMI is " + finalBmi + " - " + category;
});
const passwordLength = document.getElementById("passwordLength");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generatePasswordBtn = document.getElementById("generatePasswordBtn");
const copyPasswordBtn = document.getElementById("copyPasswordBtn");
const passwordResult = document.getElementById("passwordResult");

generatePasswordBtn.addEventListener("click", function () {
  const length = Number(passwordLength.value);

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = "";

  if (includeUppercase.checked) {
    characters += uppercaseLetters;
  }

  if (includeLowercase.checked) {
    characters += lowercaseLetters;
  }

  if (includeNumbers.checked) {
    characters += numbers;
  }

  if (includeSymbols.checked) {
    characters += symbols;
  }

  if (characters === "") {
    passwordResult.innerText = "Please select at least one option.";
    return;
  }

  if (length < 4 || length > 30) {
    passwordResult.innerText = "Password length must be between 4 and 30.";
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordResult.innerText = password;
});

copyPasswordBtn.addEventListener("click", function () {
  const password = passwordResult.innerText;

  if (password === "Your password will show here.") {
    passwordResult.innerText = "Please generate a password first.";
    return;
  }

  navigator.clipboard.writeText(password);
  alert("Password copied!");
});
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.innerText = "Light Mode";
  } else {
    darkModeBtn.innerText = "Dark Mode";
  }
});