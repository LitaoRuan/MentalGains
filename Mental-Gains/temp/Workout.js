
function setHeaderImage(imageUrl) {
    document.getElementById("header-image").src = imageUrl;
}


setHeaderImage("Benchpress.jpg"); 


document.getElementById("toggle-arrow").addEventListener("click", function() {
    let details = document.getElementById("exercise-details");
    let arrow = document.getElementById("toggle-arrow");

    if (details.style.display === "none" || details.classList.contains("hidden")) {
        details.style.display = "block";
        details.classList.remove("hidden");
        arrow.textContent = "▲"; 
    } else {
        details.style.display = "none";
        details.classList.add("hidden");
        arrow.textContent = "▼"; 
    }
});


document.getElementById("add-to-list").addEventListener("click", function() {
    let repsNum = document.getElementById("reps-num").value;
    let weightNum = document.getElementById("weight-num").value;
    let exerciseList = document.getElementById("exercise-list");

    if (repsNum > 0 || weightNum > 0) {
        let listItem = document.createElement("li");
        listItem.textContent = `Bench Press - ${repsNum} reps, ${weightNum} kg`;
        exerciseList.appendChild(listItem);
    }
});