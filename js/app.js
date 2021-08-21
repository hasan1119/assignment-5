document.getElementById('memory-8gb').addEventListener('click', function () {
    updateValue('memory-cost', 0)

})

document.getElementById('memory-16gb').addEventListener('click', function () {
    updateValue('memory-cost', 180)
})

document.getElementById('storage-256gb').addEventListener('click', function () {
    updateValue('storage-cost', 0)
})

document.getElementById('storage-512gb').addEventListener('click', function () {
    updateValue('storage-cost', 100)
})

document.getElementById('storage-1tb').addEventListener('click', function () {
    updateValue('storage-cost', 180)
})

document.getElementById('free-delivery').addEventListener('click', function () {
    updateValue('delivery-cost', 0)
})

document.getElementById('paid-delivery').addEventListener('click', function () {
    updateValue('delivery-cost', 20)
})



function updateValue(id, value) {
    var costElement = document.getElementById(id)
    costElement.innerText = value;

    let bestPriceElement = document.getElementById('best-price')
    let bestPrice = Number(bestPriceElement.innerText)

    let extraMemoryElement = document.getElementById('memory-cost')
    let extraMemoryCost = Number(extraMemoryElement.innerText)

    let extraStorageElement = document.getElementById('storage-cost')
    let extraStorageCost = Number(extraStorageElement.innerText)


    let extraDeliveryElement = document.getElementById('delivery-cost')
    let extraDeliveryCost = Number(extraDeliveryElement.innerText)

    let extraTotalCost = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;

    let extraTotalElement = document.getElementById('extra-total-cost')
    let inTotalElement = document.getElementById('in-total')
    extraTotalElement.innerText = extraTotalCost;
    inTotalElement.innerText = extraTotalCost;

}

document.getElementById('apply-btn').addEventListener('click', function () {
    let totalElement = document.getElementById('extra-total-cost')
    let inTotalElement = document.getElementById('in-total')
    let promoInput = document.getElementById('promo-code')
    let promoValue = promoInput.value
    let totalAmount = Number(totalElement.innerText)

    if (promoValue == 'stevekaku') {
        let discount = (totalAmount / 100) * 20;
        inTotalElement.innerText = totalAmount - discount;
    }

    promoInput.value = ''
})