export type numberString = `${number}`
export type countryCodes = 'de-DE'
export type currency = 'EUR'
export type serviceTypes = 'PICKUP'
export type constrainTypes = 'REWE Lieferservice'
export type merchentTypes = 'REWE'
export type merchentIds = 'rewe-online-services'
export type labels = 'Produkte'
export type toggleTypes = string //TODO


export interface Link {
    href: string
}

export interface MediaImage {
    _links: {
        self: Link
    }
}

export interface Media {
    images: MediaImage[]
}

export interface Category {
    id: numberString
    primary: boolean
}

export interface Merchant<merchantType extends merchentTypes = merchentTypes> {
    id: merchentIds
    version: number
    name: merchantType
    type: merchantType
    logo: string
}

export interface Pricing {
    currentRetailPrice: number
    minRetailPrice: number
    maxRetailPrice: number
    currency: currency
    basePrice: number
    baseUnit: {
        G: 100
    }
    grammage: string
}

export interface Listing {
    id: string
    version: number
    pricing: Pricing
    limitations: {
        orderLimit: number
        bulkyGoodsShare: number
    }
}

export interface Article<articleId extends numberString = numberString> {
    id: articleId
    version: number
    gtin: articleId
    _embedded: {
        listing: Listing
        store: {
            id: string
            version: number
        }
        merchant: Merchant
    }
}

export interface Product<productId extends numberString = numberString> {
    id: productId
    productGroupId: productId
    nan: productId
    version: number
    productName: string
    attributes: {} //TODO
    brand: {
        name: string
    }
    media: Media
    _embedded: {
        articles: Article[]
        categories: Category[]
    }
    hasVariants: boolean
    hasDiverseVariantPrices: boolean
    shouldDetailsLinkBeMasked: boolean
    _links: {
        detail: Link
    }
}