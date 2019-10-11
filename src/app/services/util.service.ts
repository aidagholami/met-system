import { Injectable } from '@angular/core';
import { Category } from '../classes/category.model';
import { Subcategory } from '../classes/subcategory.model';
import { Product } from '../classes/product.model';
import { CustomData } from '../interfaces/customData';

@Injectable()
export class UtilService {

  getCategories() {
    return [
     new Category(1, 'Category1' ),
     new Category(2, 'Category2' ),
     new Category(3, 'Category3' )
    ];
  }
  
  getSubCategories() {
   return [
     new Subcategory(1, 1, 'Sub1' ),
     new Subcategory(2, 1, 'Sub2' ),
     new Subcategory(3, 1, 'Sub3'),
     new Subcategory(4, 1, 'Sub4'),
     new Subcategory(5, 2, 'Sub5' ),
     new Subcategory(6, 2, 'Sub6'),
     new Subcategory(7, 3, 'Sub7' ),
     new Subcategory(8, 3, 'Sub8' ),
     new Subcategory(9, 3, 'Sub9' ),
     new Subcategory(10, 3, 'Sub10' )
    ];
  }

  getProducts() {
   return [
     new Product(1, 1, 'Product1' ),
     new Product(2, 1, 'Product2' ),
     new Product(3, 2, 'Product3'),
     new Product(4, 2, 'Product4'),
     new Product(5, 2, 'Product5' ),
     new Product(6, 2, 'Product6'),
     new Product(7, 3, 'Product7' ),
     new Product(8, 4, 'Product8' ),
     new Product(9, 4, 'Product9' ),
     new Product(10, 4, 'Product10' ),
     new Product(11, 5, 'Product11' ),
     new Product(12, 5, 'Product12' )
    ];
  }

  getCategoryBySubId(subcategoryId) {
    let subcategory = this.getSubCategories().find((item) => {return item.subcategoryId == subcategoryId});
    return subcategory.categoryId;
  }

  getTableData(subcategoryId): CustomData[] {
    let productList: Product[] = [];
    productList = this.getProducts().filter((item) => item.subcategoryId == subcategoryId);
    let subcategory = this.getSubCategories().find((item) => {return item.subcategoryId == subcategoryId});
    let category = this.getCategories().find((item) => {return item.categoryId == subcategory.categoryId});

    let list: CustomData[] = [];
    productList.forEach(element => {
      list.push({categoryName: category.categoryName, subcategoryName: subcategory.subcategoryName, productName: element.productName})
    });
    return list;
  }

}