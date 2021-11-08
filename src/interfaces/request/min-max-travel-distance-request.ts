import {PointDto} from "../dto/point-dto";

export interface MinMaxTravelDistanceRequest{
    point:PointDto;
    radius:number
}