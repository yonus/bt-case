import {PointSearchDto} from "./point-search-dto";

export interface TripSearchDto {
    pointSearchDto:PointSearchDto;
    minDistance?:number,
    maxDistance?:number
    startDate?:Date;
    endDate?:Date


}