import { Product } from './classes/product.model';
import { Component, OnInit, ViewChildren } from '@angular/core';
import { Category } from './classes/category.model';
import { Subcategory } from './classes/subcategory.model';
import { UtilService } from './services/util.service';
import { CustomData } from './interfaces/customData';
import { MatTableDataSource, MatTable } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mat-system-test';
  items: CustomData[];

  @ViewChildren('matTables') matTables: MatTable<Element[]>;

  elementData: CustomData[] = [
    {categoryName: '', subcategoryName: '', productName: ''},
  ];

  selectedCategory: Category;
  selectedSubcategory: Subcategory;
  categories: Category[];
  subcategories: Subcategory[];
  products: Product[];
  data: CustomData[] = [];


  displayedColumns: string[] = ['categoryName', 'subcategoryName', 'productName'];
  dataSource = new MatTableDataSource(this.data);


  constructor(private utilService: UtilService) { 
    this.items = [];
  }

  ngOnInit() {
    this.categories = this.utilService.getCategories();
  }

  onSelect(categoryId) {
    if (categoryId && categoryId != '0') {
      this.subcategories = this.utilService.getSubCategories().filter((item) => item.categoryId == categoryId);
    } else {
      this.dataSource = new MatTableDataSource(this.elementData);
    }
  }

  onSubSelect(subcategoryId) {
    if (subcategoryId && subcategoryId != '0') {
      this.products = this.utilService.getProducts().filter((item) => item.subcategoryId == subcategoryId);
      this.data = this.utilService.getTableData(subcategoryId);
      this.dataSource = new MatTableDataSource(this.data);
      this.matTables['_results'][0].renderRows();
    } else {
      this.dataSource = new MatTableDataSource(this.elementData);
    }
  }

  /*  
      Hover over Product Name to create new input text box.  
  */
  addElement() {
    if (this.data && this.data.length != 0 && this.data[0]) {
      this.data.push({categoryName: this.data[0].categoryName, subcategoryName: this.data[0].subcategoryName, productName: ''});
      this.matTables['_results'][0].renderRows();
    }
  }
  
}
