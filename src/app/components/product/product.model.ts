import { GridColumn } from "../shared/common-grid/grid.model";

export interface ProductModel {
    id: number;
    name: string;
    price: number;
}

const productGridColums: GridColumn = {
    dataColumns: [
        { dataKey: 'id', header: 'Product Id' },
        { dataKey: 'name', header: 'Name' },
        { dataKey: 'price', header: 'Price' }
    ],
    actions: [
        { title: 'Edit', cssClass: 'btn btn-primary', icon: 'fa fa-edit', actionName: 'edit' },
        { title: 'Delete', cssClass: 'btn btn-danger', icon: 'fa fa-trash' , actionName: 'delete'}
    ]
};

export { productGridColums };