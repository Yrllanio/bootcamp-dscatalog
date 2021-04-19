import { useEffect, useState } from "react";
import { ProductsResponse } from "core/types/Products";
import { useHistory } from "react-router-dom";
import Card from "../Card";
import { makeRequest } from "core/utils/request";
import Pagination from "core/components/Pagination";

const List = () => {
    const [productResponse, setProductResponse] = useState<ProductsResponse>();
    const [isLoading, setIsloading] = useState(false)
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();

    useEffect(() => {
        const params = {
            page: activePage,
            linesPerPage: 4
        }
        setIsloading(true);
        makeRequest({ url: '/products', params})
        .then(response => setProductResponse(response.data))
        .finally(() => {
            setIsloading(false);
        })
    }, [activePage]); 


    
    const handleCreate = () => {
        history.push('/admin/products/create');
    }


    return (
        <div className="admin-product-list">
            <button className = "btn btn-primary btn-lg" onClick={handleCreate}>
                ADICIONAR
            </button>
            <div className="admin-list-container">
                {productResponse?.content.map(product => (
                    <Card product={product} key={product.id} />
                ))}
                {productResponse && (
                <Pagination
                    totalPages={productResponse.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            
            )}
            </div>
        </div>
);}

export default List;