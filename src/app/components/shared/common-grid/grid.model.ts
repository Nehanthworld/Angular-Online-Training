export interface GridColumn {
    dataColumns: DataColumn[];
    actions?: ActionColumn[];
}

interface DataColumn {
    dataKey: string;
    header: string;
}

interface ActionColumn {
    title: string;
    cssClass: string;
    icon: string;
    actionName: string;
}