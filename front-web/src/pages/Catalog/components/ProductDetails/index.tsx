import { Link, useParams } from 'react-router-dom';
import './styles.scss';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg'
import ProductPrice from 'core/components/ProductPrice';
import { useEffect, useState } from 'react';
import { makeRequest } from 'core/utils/request';
import { Product } from 'core/types/Product';
import ProductInfoLoader from '../Loaders/ProductInfoLoader';
import ProductDescriptionLoader from '../Loaders/ProductDescriptionLoader';


type ParamsType = {
  productId: string;
}

const ProductDetails = () => {
  const { productId } = useParams<ParamsType>();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsloading] = useState(false)

  console.log(isLoading);


  useEffect(() => {
    setIsloading(true);
    makeRequest({ url: `/products/${productId}` })
      .then(response => setProduct(response.data))
      .finally(() => setIsloading(false));
  }, [productId]);

  return (
    <div className="product-details-container">
      <div className="card-base border-radius-20 product-details">
        <Link to="/products" className="product-details-goback">
          <ArrowIcon className="icon-goback" />
          <h1 className="text-goback">Voltar</h1>
        </Link>
        <div className="product-details-info">

          {isLoading ? <ProductInfoLoader /> : (
            <>
              <div className="product-details-card text-center">
                <img src={product?.imgUrl} alt={product?.name} className="product-details-image" />
              </div>

              <div className="product-info-fields">
                <h1 className="product-details-name">
                  {product?.name}
                </h1>
                {product?.price && <ProductPrice price={product?.price} />}
              </div>
            </>
          )}
        </div>
        <div className="product-details-card">
          {isLoading ? <ProductDescriptionLoader /> : (

            <>
              <h1 className="product-description-title">
                Descrição do produto
                </h1>
              <p className="product-description-text">
                {product?.description}
              </p>
            </>

          )}

        </div>

      </div>
    </div>
  );
};

export default ProductDetails;