let total = 0;

function addToBill(item, price) {
    const billList = document.getElementById("bill-list");
    const totalSpan = document.getElementById("total");

    const li = document.createElement("li");
    li.innerHTML = `${item} - $${price.toFixed(2)} 
                    <button onclick="removeItem(this, ${price})">Remove</button>`;
    
    billList.appendChild(li);

    
    total += price;
    totalSpan.textContent = total.toFixed(2);
}

function removeItem(element, price) {
    element.parentElement.remove();  
    total -= price;  
    document.getElementById("total").textContent = total.toFixed(2);
}

function clearBill() {
    document.getElementById("bill-list").innerHTML = "";
    document.getElementById("total").textContent = "0.00";
    total = 0;
}


