import type { countryCodes, serviceTypes, constrainTypes, merchentTypes, labels, toggleTypes, Product } from './common'


export interface Search {
    term: string
    sorting: 'RELEVANCE_DESC'
    autoCorrect: {
        originalSearchTerm: string
    }
    marketCode: string
    serviceTypes: serviceTypes[]
    selectedFacets: {}
    locale: countryCodes
    debugMode: boolean
}

export interface Pagination {
    page: number
    totalPages: number
    objectsPerPage: number
    totalResultCount: number
}

export interface Constrain<merchant extends merchentTypes = merchentTypes> {
    name: merchant
    label: constrainTypes
    count: number
    applied: boolean
    facetFilterQuery: `merchantType=${merchant}`
    isMaskedLink: boolean
}

export interface Facet {
    name: 'MERCHANT_TYPE'
    label: labels
    displayType: 'MERCHANT_TYPE_TOGGLE'
    facetConstraints: Constrain[]
    parameterNames: {
        type: 'SINGLE'
        name: 'merchantType'
    }
}

export interface Toggle {
    name: toggleTypes
    active: boolean
}

export type quickConstrainTypes = string //TODO
export type quickConstrainLabels = string //TODO
export interface QuickConstrain<type extends quickConstrainTypes = quickConstrainTypes> {
    id: type
    label: quickConstrainLabels
    toggleQuery: `attribute=${Lowercase<type>}`
    applied: boolean
    count: number
    parameters: [{
        key: 'attribute'
        value: Lowercase<type>
    }]
}

export interface ProductsResponse {
    type: 'SEARCH_RESULT',
    search: Search
    pagination: Pagination
    facets: Facet[]
    _embedded: {
        products: Product[]
    }
    toggles: Toggle[]
    marketInfo: {
        bulkyGoodsText: string
    }
    quickFacets: {
        resetQuery: null
        constraints: QuickConstrain[]
    }
}
export default ProductsResponse