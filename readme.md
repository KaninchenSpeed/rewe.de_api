# Rewe.de api
This is an inofficial package to use the rewe api

## Usage

### Import
```typescript
import rewe from 'rewe.de_api'// reccomendet

const rewe = require('rewe.de_api')
```

### get markets in area
```typescript
const res = await rewe.getMarkets(/* zip code */)
const market_id = Number(res[0].wwIdent)
```

### get all products from specific market
```typescript
const res = await rewe.getProducts(/* market_id */, /* page 1-end */)
const products = res._embedded.products
```