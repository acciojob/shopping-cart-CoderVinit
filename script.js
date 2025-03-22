//your code here

document.getElementById("add").addEventListener("click",()=>{
	let item = document.getElementById("item-name-input").value.trim();
	let price = document.getElementById("item-price-input").value.trim();
	console.log(item,price)

	let priceNumber = parseFloat(price);
	if (item === "" || isNaN(priceNumber) || priceNumber <= 0) {
        alert("Please enter a valid item name and price.");
        return;
    }
	const tableBody = document.getElementById("shopping-list");
    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item;

    const priceCell = document.createElement("td");
    priceCell.textContent = priceNumber.toFixed(2);

    newRow.appendChild(nameCell);
    newRow.appendChild(priceCell);

    tableBody.insertBefore(newRow, tableBody.lastElementChild);

    updateTotal(priceNumber);

    document.getElementById("item-name-input").value = "";
    document.getElementById("item-price-input").value = "";
})

function updateTotal(price) {
    const totalElement = document.getElementById("total");
    const currentTotal = parseFloat(totalElement.textContent);
    totalElement.textContent = (currentTotal + price).toFixed(2);
}
