import{Controller,Get,Post,Put,Delete,Param,Body,HttpCode,ParseUUIDPipe,ParseEnumPipe} from "@nestjs/common";
import{data,ReportType} from"src/data";
import{v4 as uuid} from"uuid";
import { ReportService} from "./report.service";
import {CreateReportDTO,ReportResponseDTO,UpdateReportDTO} from"src/dtos/report.dtos";
import { request } from "http";


@Controller('report/:type')
export class ReportController{
  constructor(private readonly reportService:ReportService){}

    @Get()
    getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type:string):ReportResponseDTO[]{
      const reportType= type==="income" ? ReportType.INCOME : ReportType.EXPENSE;

       return this.reportService.getAllReports(reportType);
     
    }

    @Get(":id")
    getReportByID(@Param ("type", new ParseEnumPipe(ReportType)) type:string,
                  @Param ("id",ParseUUIDPipe) id:string):ReportResponseDTO{
        const reportType= type==="income" ? ReportType.INCOME : ReportType.EXPENSE;
       return this.reportService.getReportById(reportType,id);
    }

    @Post()
    createReport( @Body() body:CreateReportDTO,
                  @Param('type', new ParseEnumPipe(ReportType)) type:string):ReportResponseDTO{
      const reportType= type==="income" ? ReportType.INCOME : ReportType.EXPENSE;
      return this.reportService.createReport(reportType,body);
    }

    @Put(':id')
    updateReport(@Body() body:UpdateReportDTO,
                 @Param('id',ParseUUIDPipe) id:string,
                 @Param('type', new ParseEnumPipe(ReportType)) type:string):ReportResponseDTO{

      const reportType= type==="income" ? ReportType.INCOME : ReportType.EXPENSE;
      return this.reportService.updateReport(reportType,id,body);
      
    }


    @HttpCode(220)
    @Delete(':id')
    deleteReport(@Param('id',ParseUUIDPipe) id: string){
     return this.reportService.deleteReport(id);
    }
  
}

// http://localhost:3000/report/income