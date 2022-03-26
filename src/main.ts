import { getProducts } from './modules/products'
import { getDelivery, getMarkets } from './modules/getMarket'

export * from './modules/products'
export * from './modules/getMarket'

export default {
    getProducts,
    getDelivery,
    getMarkets
}