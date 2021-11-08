import {PointDto} from "../dto/point-dto";


export interface TripSearchRequest{
    point:PointDto;
    radius:number
    startDate?:Date;
    endDate?:Date
}