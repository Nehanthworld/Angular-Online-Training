import { IGridColumn } from "../shared/common-grid/grid.model";

export interface ProductModel {
    id: number;
    name: string;
    price: number;
    MFGDate: Date;
    userRating: number;
}

const productGridColums: IGridColumn = {
    dataColumns: [
        { dataKey: 'id', header: 'Product Id' },
        { dataKey: 'name', header: 'Name' },
        { dataKey: 'price', header: 'Price', dataType: 'currency', format: '1.2-2' },
        { dataKey: 'MFGDate', header: 'Manufactured date', dataType: 'date', format: 'dd/MM/yyyy hh:mm' },
        { dataKey: 'userRating', header: 'User Reviews', dataType: 'rating' },
    ],
    actions: [
        { title: 'Edit', cssClass: 'btn btn-primary', icon: 'fa fa-edit', actionName: 'edit' },
        { title: 'Delete', cssClass: 'btn btn-danger', icon: 'fa fa-trash', actionName: 'delete' }
    ]
};

export { productGridColums };