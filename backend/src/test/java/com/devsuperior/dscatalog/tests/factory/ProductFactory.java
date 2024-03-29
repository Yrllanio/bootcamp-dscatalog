package com.devsuperior.dscatalog.tests.factory;

import java.time.Instant;

import com.devsuperior.dscatalog.dto.ProductDTO;
import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Product;

public class ProductFactory {

	public static Product createProduct() {
		Product product = new Product(1L, "Phone", "Good Phone", 800.0, "http://img.com/img.png", Instant.parse("2020-10-20T03:00:00Z"));
		product.getCategories().add(new Category(1L, null));
		return product;
	}
	
	public static ProductDTO creatProductDTO() {
		Product product = createProduct();
		return new ProductDTO(product, product.getCategories());
		
	}
	
	public static ProductDTO creatProductDTO(Long id) {
		ProductDTO dto = creatProductDTO();
		dto.setId(id);
		return dto;
		
	}
}
