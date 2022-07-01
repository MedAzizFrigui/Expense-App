import{Controller,Get,Post,Put,Delete,Param,Body,HttpCode,ParseUUIDPipe,ParseEnumPipe} from "@nestjs/common";
import{data,ReportType} from"src/data";
import{v4 as uuid} from"uuid";
import { AppService } from "./app.service";
import {CreateReportDTO,ReportResponseDTO,UpdateReportDTO} from"./dtos/report.dtos";


@Controller()
export class AppController{}

// http://localhost:3000/report/income