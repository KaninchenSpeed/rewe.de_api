import axios from 'axios'
import { numberString } from '../api/common'

export interface MarketResponse<zip extends number> {
    zipCode: `${zip}`
    hasDelivery: boolean
    hasPickup: boolean
    hasParcel: boolean
    lsfk: []
    deliveryMarketWwIdent: numberString
}

export const getDelivery = async <zipCode extends number>(zip: zipCode) => {
    const { data } = await axios.get<MarketResponse<zipCode>>(`https://shop.rewe.de/api/marketselection/zipcodes/${zip}/services`, {
        responseType: 'json'
    })
    return data
}

type serviceTypes = 'pickup'
interface ServiceMap {
    pickup: 'Abholservice'
}

export interface Market<zip extends number, serviceType extends serviceTypes> {
    pickupStation: boolean
    wwIdent: numberString
    displayName: string
    distance: number
    latitude: numberString
    longitude: numberString
    companyName: string
    zipCode: `${zip}`
    street: string
    city: string
    houseNumber: string
    signedMapsUrl: string
    isPickupStation: boolean
    pickupVariant: ServiceMap[serviceType]
}

export const getMarkets = async <zipCode extends number, serviceType extends serviceTypes>(zip: zipCode, type?: serviceType) => {
    const { data } = await axios.get<Market<zipCode, serviceType>[]>(`https://shop.rewe.de/api/marketselection/zipcodes/${zip}/services/${type ?? 'pickup'}`, {
        responseType: 'json'
    })
    return data
}