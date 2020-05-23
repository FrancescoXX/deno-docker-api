import { Router } from 'https://deno.land/x/oak/mod.ts';
import {getProducts, getOneProduct, createProduct, updateProduct, deleteProduct} from './controllers/products.ts'

const router = new Router();

router.get('/api/v1/products', getProducts)
    .get('/api/v1/products/:id', getOneProduct)
    .post('/api/v1/products', createProduct)
    .put('/api/v1/products/:id', updateProduct)
    .delete('/api/v1/products/:id', deleteProduct);

export default router