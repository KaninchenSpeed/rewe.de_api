import rewe from '../src/main'

rewe.getDelivery(67346).then(res => { //obviously random
    console.log(res)
})

rewe.getMarkets(67346, 'pickup').then(res => {
    console.log(res[0])
})

rewe.getProducts(840838).then(res => {
    console.log(res)
})