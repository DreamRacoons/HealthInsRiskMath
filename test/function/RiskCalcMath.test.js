async function start(){
    const apiURL = "https://health-ins-risk-math.azurewebsites.net/"

    const requestData = {
        age: parseFloat(document.getElementById("age").value),
        height: parseFloat(document.getElementById("height").value),
        weight: parseFloat(document.getElementById("weight").value),
        systolicBP: parseFloat(document.getElementById("systolicBP").value),
        diastolicBP: parseFloat(document.getElementById("diastolicBP").value),
        diabetes: document.getElementById("diabetes").value,
        cancer: document.getElementById("cancer").value,
        alzheimers: document.getElementById("alzheimers").value
    }
    const response = await fetch(apiURL)
    const data = await response.json()

    // Display results
    document.getElementById("ageScore").textContent = data.ageScore;
    document.getElementById("bmiScore").textContent = data.bmiScore;
    document.getElementById("bmiValue").textContent = data.bmi.toFixed(2);
    document.getElementById("bpScore").textContent = data.bpScore;
    document.getElementById("familyHistoryScore").textContent = data.familyHistoryScore;
    document.getElementById("riskLevel").textContent = data.riskLevel;
    document.getElementById("result").style.display = "block";
}
 
start()
 
function addAnotherPatient() {
    document.getElementById("patientForm").reset();
    document.getElementById("result").style.display = "none";
}