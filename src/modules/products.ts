import axios from 'axios'
import type { ProductsResponse } from '../api/products'

export const getProducts = async (market: number, page = 0) => {
    const { data } = await axios.get<ProductsResponse>(`https://shop.rewe.de/api/products?page=${page + 1}&market=${market}`, {
        responseType: 'json'
    })
    return data
}