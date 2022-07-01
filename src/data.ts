export enum ReportType{
    INCOME="income",
    EXPENSE="expense"
};

interface Data{
    report : {
        id : string,
        source: string,
        amount : number,
        created_at: Date,
        updated_at: Date,
        type: ReportType
        }[]
};


export const data : Data ={
    report : [
        {
            id :"unique",
            source :"salary",
            amount :1000,
            created_at: new Date(),
            updated_at:new Date(),
            type : ReportType.INCOME

        } ,
        {
            id :"not",
            source :"donation",
            amount :500,
            created_at: new Date(),
            updated_at:new Date(),
            type : ReportType.EXPENSE

        }
    ]
};









