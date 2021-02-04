import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from 'core/types/Products';
import { makeRequest } from 'core/utils/request';
import ProductCard from './components/ProductCard';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import './styles.scss';
import Pagination from 'core/components/Pagination';

const Catalog = () => {
   
    const [productResponse, setProductResponse] = useState<ProductsResponse>();
    const [isLoading, setIsloading] = useState(false)
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 12
        }

        setIsloading(true);
        makeRequest({ url: '/products', params})
        .then(response => setProductResponse(response.data))
        .finally(() => {
            setIsloading(false);
        })
    }, [activePage]);   
    
    
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
            {productResponse && (
            <Pagination
            totalPages={productResponse.totalPages}
            activePage={activePage}
            onChange={page => setActivePage(page)}
            />
            
            )}
        </div>
    
    );

}

export default Catalog;