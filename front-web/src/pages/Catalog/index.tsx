import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from 'core/types/Products';
import { makeRequest } from 'core/utils/request';
import ProductCard from './components/ProductCard';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import './styles.scss';

const Catalog = () => {
   
    const [productResponse, setProductResponse] = useState<ProductsResponse>();
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        const params = {
            page: 0,
            linesPerPage: 12
        }

        setIsloading(true);
        makeRequest({ url: '/products', params})
        .then(response => setProductResponse(response.data))
        .finally(() => {
            setIsloading(false);
        })
    }, []);   
    
    
    return (
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catálogo de produtos
            </h1>
            <div className="catalog-products">
                {isLoading ? <ProductCardLoader /> : (
                    productResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product}/>
                        </Link>
                   ))
                )}
                     
            </div>
        </div>
    
    );

}

export default Catalog;