import{NestInterceptor,ExecutionContext,CallHandler}from "@nestjs/common"
import {map} from"rxjs"

export class CustomInterceptor implements NestInterceptor{
    intercept(context:ExecutionContext,handler:CallHandler){
       
        //eveything here is intercepting the request

        return handler.handle().pipe(
            map((data) => {
                
                //everything here is intercepting the response
                console.log({data});
                const response = {
                    ...data,
                    CreatedAt : data.created_at,
                }

                delete response.created_at;
                delete response.updated_at;
                
                return response;
            })
        )
    }
}