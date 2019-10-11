export class Product {
    
    productId : number;
    subcategoryId: number;
    productName: string;

    
    constructor(productId: number, subcategoryId: number, productName: string) {
        this.productId = productId;
        this.subcategoryId = subcategoryId;
        this.productName = productName;
    }
}

