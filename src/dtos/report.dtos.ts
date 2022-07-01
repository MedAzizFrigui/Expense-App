import{IsNumber,IsPositive,IsNotEmpty,IsString,IsOptional} from"class-validator";
import { ReportType } from "src/data";
import{Exclude,Expose}from "class-transformer";

//creating the required type + adding the necessary conditions for the validation
export class CreateReportDTO{

    @IsNotEmpty()
    @IsString()
    source :string ;

    @IsNumber()
    @IsPositive()
    amount : number ;
}


//for the update it's important to create a new DTO so that we can add the IsOptional decorator
export class UpdateReportDTO{
   
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    source :string ;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount : number ;
}

//to affect the output data (not returning an element)
//  1-Create the class and add the Exclude Decorator
//  2-make sure to assign the new class as a return type for all methods that u want to affect
//  3-create instances of the class  : create constructor of the class + create instances in every function using the "new"
//  4-go to the main and tell nestjs that it's allowed to make transformation to our object
//  5-set an interceptor

export class ReportResponseDTO{
    id:string;
    source:string;
    amount:number;
    @Expose({name : "createdAt"})
    transformCreatedAt(){
        return this.created_at;
    }
    @Exclude()
    created_at:Date;

    @Exclude()
    updated_at:Date;
    type:ReportType;

    constructor(partial : Partial<ReportResponseDTO>){
        Object.assign(this,partial);
    }
}

