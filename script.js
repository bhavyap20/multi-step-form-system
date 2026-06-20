let currentStep = 0;

const steps = document.querySelectorAll(".step");

function showStep(index){

    steps.forEach(step=>{
        step.classList.remove("active");
    });

    steps[index].classList.add("active");

    updateProgress();
}

function nextStep(){

    if(currentStep === 0){

        let name =
        document.getElementById("name").value;

        if(name === ""){

            alert("Please enter name");
            return;
        }
    }

    currentStep++;

    showStep(currentStep);

    updateSummary();
}

function prevStep(){

    currentStep--;

    showStep(currentStep);
}

function updateSummary(){

    document.getElementById("summary").innerHTML=
    `
    Name: ${localStorage.getItem("name")} <br>
    Email: ${localStorage.getItem("email")} <br>
    College: ${localStorage.getItem("college")} <br>
    Branch: ${localStorage.getItem("branch")}
    `;
}

function submitForm(){

    alert("Form Submitted");

    localStorage.clear();
}
document.querySelectorAll("input").forEach(input=>{

    input.addEventListener("input",()=>{

        localStorage.setItem(
            input.id,
            input.value
        );

    });

});

window.onload=()=>{

    document.querySelectorAll("input").forEach(input=>{

        input.value=
        localStorage.getItem(input.id) || "";

    });

}
function updateProgress(){

    const progress =
    document.getElementById("progressBar");

    if(currentStep === 0){
        progress.style.width = "33%";
    }

    else if(currentStep === 1){
        progress.style.width = "66%";
    }

    else{
        progress.style.width = "100%";
    }
}