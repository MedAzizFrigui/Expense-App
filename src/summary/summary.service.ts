import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';


@Injectable()
export class SummaryService {
    constructor(private readonly ReportService: ReportService){};
    calculateSummary(){
        const allExpenses = this.ReportService.getAllReports(ReportType.EXPENSE).reduce((sum,re) => sum+re.amount,0);
        const allIncome = this.ReportService.getAllReports(ReportType.INCOME).reduce((sum,re) => sum+re.amount,0);
        

        return{
            totalIncome:allIncome,
            totalExpense:allExpenses,
            netIncome:allIncome-allExpenses,
        }
    }
}
