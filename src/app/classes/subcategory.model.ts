export class Subcategory {
    subcategoryId : number;
    categoryId: number;
    subcategoryName: string;
    

    constructor(subcategoryId: number, categoryId: number, subcategoryName: string) {
        this.subcategoryId = subcategoryId;
        this.categoryId = categoryId;
        this.subcategoryName = subcategoryName;
    }
}

