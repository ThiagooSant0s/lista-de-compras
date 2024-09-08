let totalPrice = 0;

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if (itemName && itemQuantity > 0 && itemPrice > 0) {
        const itemTotal = itemQuantity * itemPrice;

        const table = document.getElementById('item-list');
        const row = table.insertRow();

        row.insertCell(0).innerText = itemName;
        row.insertCell(1).innerText = itemQuantity;
        row.insertCell(2).innerText = itemPrice.toFixed(2);
        row.insertCell(3).innerText = itemTotal.toFixed(2);
        
        const deleteCell = row.insertCell(4);
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Remover';
        deleteBtn.onclick = function () {
            removeItem(row, itemTotal);
        };
        deleteCell.appendChild(deleteBtn);

        totalPrice += itemTotal;
        updateTotal();
        clearInputs();
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function removeItem(row, itemTotal) {
    row.remove();
    totalPrice -= itemTotal;
    updateTotal();
}

function updateTotal() {
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}

function clearInputs() {
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
    document.getElementById('item-price').value = '';
}
