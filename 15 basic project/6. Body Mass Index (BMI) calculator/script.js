const form = document.querySelector("form");
const results = document.getElementById("results");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide valid height and weight`;
    } else {
        const bmi = calculateBMI(height, weight);
        results.innerHTML = `BMI: ${bmi.toFixed(2)}`;
    }
});

function calculateBMI(height, weight) {
    // BMI calculation formula: BMI = weight (kg) / (height (m) * height (m))
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}
