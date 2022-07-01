import{data,ReportType}from "src/data"
import { Body, Injectable } from "@nestjs/common";
import{v4 as uuid} from"uuid";
import { ReportResponseDTO } from "src/dtos/report.dtos";

interface Report {source:string,amount:number};
interface Updatereport{source?:string,amount?:number};//'?':these are optional

@Injectable()
export class ReportService{
  getAllReports(type:ReportType):ReportResponseDTO[]{
    return data.report.filter((report) => report.type===type).map(report=>new ReportResponseDTO(report)); // its gonna return an array so wen need to iterate over it
  }

  getReportById(type:ReportType,id:string):ReportResponseDTO{
    const report =  data.report
    .filter((report)=>report.type===type)
    .find((report) => report.id===id);

    return new ReportResponseDTO(report); //instance of the class ReportResponseDTO
  }

  createReport(type:ReportType,{source,amount}:Report):ReportResponseDTO{
    const newReport={
      id:uuid(),
      source :source,
      amount :amount,
      created_at:new Date(),
      updated_at: new Date(),
      type : type

  }
    data.report.push(newReport);
    return new ReportResponseDTO(newReport);
  }

  updateReport(type:string,id:string, body:Updatereport):ReportResponseDTO{
    const updatereport=data.report
      .filter((report)=>report.type===type)
      .find((report) => report.id===id);

      if(!updatereport) return; //if the report does not exist , it will return null  
      const reportIndex= data.report.findIndex((report)=>updatereport.id===report.id);
      
      data.report[reportIndex] = {
        ...data.report[reportIndex],

        ...body,

        updated_at:new Date()
      };

      return new ReportResponseDTO (data.report[reportIndex]);
  }


  deleteReport(id:string){
    const reportIndex=data.report.findIndex((report)=>report.id===id);
    if(reportIndex === -1) return;
    data.report.splice(reportIndex,1);

    return ;   

  }
}