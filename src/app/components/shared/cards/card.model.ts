export interface ICardColumn {
    dataColumns: IDataColumn[];
    actions?: IActionColumn[];
}

export interface IDataColumn {
    dataKey: string;
    header: string;
    dataType?: string; //string, number, date, boolean
    format?: string; //for date and number
}

interface IActionColumn {
    title: string;
    cssClass: string;
    icon: string;
    actionName: string;
    actionType?: ActionType;
}

export type ActionType = 'IconOnly' | 'TextOnly' | 'TextAndIcon';
