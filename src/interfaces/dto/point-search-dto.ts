import {PointDto} from "./point-dto";


export interface PointSearchDto extends PointDto{
     minDistance:number
     maxDistance:number
}