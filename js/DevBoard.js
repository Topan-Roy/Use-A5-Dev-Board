document.getElementById("change-color").addEventListener("click", function() {
    document.getElementById("body").style.backgroundColor = "#" + Math.floor(Math.random() * 16777215.).toString(16);
})
document.getElementById('blog-question').addEventListener('click',function(){
      window.location.href = "./blog.html"
})

const timeDay = document.getElementById("time-day")
const timeDayP = document.createElement("p");
timeDayP.innerText = new Date().toLocaleDateString("en-BD",{weekday: "short"});
timeDay.appendChild(timeDayP)

const timeDate = document.getElementById("time-date");
const timeDateP = document.createElement("p");
timeDateP.innerText = new Date().toLocaleDateString("en-BD", {month: "short", day: "numeric", year: "numeric"}).replaceAll(",", " ");
timeDate.appendChild(timeDateP);

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
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="mt-1 mx-2  p-1 rounded-xl">
                <h3>You have completed the task ${value} at ${new Date().toLocaleTimeString()}</h3>
            </div>
        `
         const container = document.getElementById("container");
         if (container) {
             container.appendChild(div);
         } else {
             console.log("Container not found!");
         }
    })
}

    document.getElementById("clear-btn").addEventListener("click", function() {
    container.innerHTML = "";
})
