//8GB unified memory
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateExtraCostValue('memory-cost', 0)
})

//16GB unified memory
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateExtraCostValue('memory-cost', 180)
})

//256GB SSD storage
document.getElementById('storage-256gb').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 0)
})

//512GB SSD storage
document.getElementById('storage-512gb').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 100)
})

//1TB SSD storage
document.getElementById('storage-1tb').addEventListener('click', function () {
    updateExtraCostValue('storage-cost', 180)
})

//Free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    updateExtraCostValue('delivery-cost', 0)
})

//Paid delivery
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateExtraCostValue('delivery-cost', 20)
})


//Function for updating extra-cost amount
function updateExtraCostValue(id, value) {
    const costElement = document.getElementById(id)
    costElement.innerText = value;
    updateTotal() //calling the totalAmount function
}


//Function for updating total Amount
function updateTotal() {
    const bestPriceElement = document.getElementById('best-price')
    const bestPrice = Number(bestPriceElement.innerText)

    const extraMemoryElement = document.getElementById('memory-cost')
    const extraMemoryCost = Number(extraMemoryElement.innerText)

    const extraStorageElement = document.getElementById('storage-cost')
    const extraStorageCost = Number(extraStorageElement.innerText)

    const extraDeliveryElement = document.getElementById('delivery-cost')
    const extraDeliveryCost = Number(extraDeliveryElement.innerText)

    const extraTotalCost = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;

    const extraTotalElement = document.getElementById('extra-total-cost')
    const inTotalElement = document.getElementById('in-total')

    extraTotalElement.innerText = extraTotalCost;
    inTotalElement.innerText = extraTotalCost;
}

// Promo Apply event handler
document.getElementById('apply-btn').addEventListener('click', function () {
    const totalElement = document.getElementById('extra-total-cost')
    const inTotalElement = document.getElementById('in-total')
    const promoInput = document.getElementById('promo-code')
    const promoValue = promoInput.value
    const totalAmount = Number(totalElement.innerText)

    if (promoValue == 'stevekaku') {
        const discount = (totalAmount / 100) * 20;
        inTotalElement.innerText = totalAmount - discount;
        document.getElementById('wrong-promo').classList.add("d-none")
    } else {
        document.getElementById('wrong-promo').classList.remove("d-none")
    }
    promoInput.value = '' // clearing the promo input section
})