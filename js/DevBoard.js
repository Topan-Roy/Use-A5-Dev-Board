document.getElementById("change-color").addEventListener("click", function() {
    document.getElementById("body").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215.).toString(16);
})


const timeDay = document.getElementById("time-day")
const timeDayP = document.createElement("p");
timeDayP.innerText = new Date().toLocaleDateString("en-BD",{weekday: "short"});
timeDay.appendChild(timeDayP)

const timeDate = document.getElementById("time-date");
const timeDateP = document.createElement("p");
timeDateP.innerText = new Date().toLocaleDateString("en-BD", {month: "short", day: "numeric", year: "numeric"}).replaceAll(",", " ");
timeDate.appendChild(timeDateP)
// blogQuestionBtn.addEventListener("click", function() {
//     window.location.href = "./blog.html"
// })

// const allBtnDisebol = document.querySelectorAll("#btnComplect");
// for (let i = 0; i < allBtnDisebol.length; i++) {
//     const allBtnComplect = allBtnDisebol[i];
//     allBtnComplect.addEventListener("click", function(event) {
//         event.preventDefault();
//         alert("Board updated successfully");
//         allBtnComplect.disabled = true;
//     });
// }

const allBtnDisebol = document.querySelectorAll("#btnComplect"); 
for (let i = 0; i < allBtnDisebol.length; i++) {
    const allBtnComplect = allBtnDisebol[i];
    allBtnComplect.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Board updated successfully");
        allBtnComplect.disabled = true;

        const total = document.getElementById('total').innerText;
        let convertedTotal = parseFloat(total);
        const totalvalue = document.getElementById('totalValue').innerText;
        let convertedTotalValue = parseFloat(totalvalue);
        convertedTotal -= 1;
        convertedTotalValue += 1;
        document.getElementById('total').innerText = convertedTotal;
        document.getElementById('totalValue').innerText = convertedTotalValue;


        const value = event.target.parentElement.parentElement.querySelector("h1").innerText;
         const p = document.createElement("p");
         const dateSet= new Date().toLocaleTimeString();
        
         p.innerText = `${value} at ${dateSet}`;
         
         const container = document.getElementById("container");
         if (container) {
             container.appendChild(p);
         } else {
             console.log("Container not found!");
         }
    })
}



// const allBtnDiseboll = document.querySelectorAll("#btnComplect");
// for (let i = 0; i < allBtnDiseboll.length; i++) {
//     const allBtnComplectl = allBtnDiseboll[i];
//     allBtnComplectl.addEventListener("click", function(event) {
       
//    const value = event.target.parentElement.parentElement.querySelector("h1").innerText;
//    console.log(value)
//     const p = document.createElement("p");
//     const dateSet= new Date().toLocaleTimeString();
   
//     p.innerText = `${value} at ${dateSet}`;
    
//     const container = document.getElementById("container");
//     if (container) {
//         container.appendChild(p);
//     } else {
//         console.log("Container not found!");
//     }
//     });
// }
document.getElementById("clear-btn").addEventListener("click", function() {
    container.innerHTML = "";
})
