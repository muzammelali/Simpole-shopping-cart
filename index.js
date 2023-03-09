function plus_quantity(qunatity_id, phoneprice){
    let getValueId = document.getElementById(qunatity_id)
    getValueId = getValueId.value++


    // update total 
    let phonePrice = document.getElementById(phoneprice)
    phonePrice = parseFloat(phonePrice.innerText)

    let totalAmount = document.getElementById('total')
    totalAmount = parseFloat(totalAmount.innerText)

    // update phone price 

    updatePhonePrice = (getValueId+1) * phonePrice

    // update subtotal 

    let subtotal = document.getElementById('subtotal')
    subtotal = parseFloat(subtotal.innerText)

    let finalSubTotal = subtotal +  phonePrice
    document.getElementById('subtotal').innerText = finalSubTotal

    // update total 

    totalAmount = finalSubTotal
    document.getElementById('total').innerText = totalAmount

}
function minus_quantity(qunatity_id,phoneprice){
    let getValueId = document.getElementById(qunatity_id)
    
    if (getValueId.value <= 1){
        getValueId.value = 1
    } else {
        getValueId.value--
    }
    

    // update total 
    let phonePrice = document.getElementById(phoneprice)
    phonePrice = parseFloat(phonePrice.innerText)

    let totalAmount = document.getElementById('total')
    totalAmount = parseFloat(totalAmount.innerText)

    // update subtotal 

    let subtotal = document.getElementById('subtotal')
    subtotal = parseFloat(subtotal.innerText)

    let finalSubTotal = subtotal -  phonePrice
    if(finalSubTotal < 0){
        finalSubTotal = 0
    } else{
        document.getElementById('subtotal').innerText = finalSubTotal
    }
    

    // update total 

    totalAmount = finalSubTotal
    

    if(totalAmount < 0){
        totalAmount = 0
    } else{
        document.getElementById('total').innerText = totalAmount
    }
}