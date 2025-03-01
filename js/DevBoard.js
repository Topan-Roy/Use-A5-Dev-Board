
const allBtnDisebol = document.querySelectorAll("#btnComplect");
for (let i = 0; i < allBtnDisebol.length; i++) {
    const allBtnComplect = allBtnDisebol[i];
    allBtnComplect.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Board updated successfully");
        allBtnComplect.disabled = true;
    });
}

const allBtn = document.querySelectorAll("#btnComplect"); 
for (let i = 0; i < allBtn.length; i++) {
    const allBtnComplec = allBtn[i];
    allBtnComplec.addEventListener("click", function(event) {
        event.preventDefault();
        const total = document.getElementById('total').innerText;
        let convertedTotal = parseFloat(total);
        const totalvalue = document.getElementById('totalValue').innerText;
        let convertedTotalValue = parseFloat(totalvalue);

        convertedTotal -= 1;
        convertedTotalValue += 1;
        document.getElementById('total').innerText = convertedTotal;
        document.getElementById('totalValue').innerText = convertedTotalValue
    });
}
