import { Request, Response } from 'express'
import {BaseController} from "../../core/base-controller";


import {LoginRequest} from "../../interfaces/request/login-request";
import {SuccessResponse} from "../../core/response/app-response";
import authChecker from "../../core/auth";
import * as tripService from "../../service/trip/trip-service";
import {TripSearchRequest} from "../../interfaces/request/trip-search-request";
import {TripSearchDto} from "../../interfaces/dto/trip-search-dto";
import {MinMaxTravelDistanceRequest} from "../../interfaces/request/min-max-travel-distance-request";
import {TripCountYearRequest} from "../../interfaces/request/trip-count-year-request";


const BASE_PATH = "/trip";
const SEARCH_PATH = BASE_PATH + "/search";
const MIN_MAX_TRAVEL_DISTANCE_PATH = BASE_PATH + "/min-max-travel-distance";
const TRIP_COUNT_YEAR_PATH = BASE_PATH + "/trip-count-by-year";

class TripController extends BaseController {

    constructor() {
        super();

    }

    protected initializeRouters(): void {
        this.router.post(SEARCH_PATH,authChecker,this.search.bind(this))
        this.router.post(MIN_MAX_TRAVEL_DISTANCE_PATH,authChecker,this.getMinMaxTravelDistance.bind(this))
        this.router.post(TRIP_COUNT_YEAR_PATH,authChecker,this.getTripCountByVehicleYear.bind(this))

    }

     search(req:Request<{},{},TripSearchRequest>,res:Response){
        const tripSearchDto = this.tripSearchRequestToTripSearchDto(req.body)
        return  tripService.getTrips(tripSearchDto).then(trips =>  new SuccessResponse('Search is successful',trips).send(res))
    }

    getMinMaxTravelDistance(req:Request<{},{},MinMaxTravelDistanceRequest>,res:Response){
        const tripSearchDto = this.minMaxTravelDistanceRequestToTripSearchDto(req.body)
        return tripService.getMinMaxTravelDistance(tripSearchDto).then(r =>  new SuccessResponse('Successful',r).send(res))
    }

    getTripCountByVehicleYear(req:Request<{},{},TripCountYearRequest>,res:Response){
        const tripSearchDto = this.tripCountYearRequestToTripSearchDto(req.body);
        return tripService.getTripCountByVehicleYear(tripSearchDto).then(r =>  new SuccessResponse('Successful',r).send(res));
    }

    private tripSearchRequestToTripSearchDto(req:TripSearchRequest):TripSearchDto{
           return {
               pointSearchDto:{
                   latitude:req.point.latitude,
                   longitude:req.point.longitude,
                   minDistance:10,
                   maxDistance:req.radius

               },
               startDate:req.startDate,
               endDate:req.endDate
           }
    }

    private minMaxTravelDistanceRequestToTripSearchDto(req:MinMaxTravelDistanceRequest):TripSearchDto{
        return {
            pointSearchDto:{
                latitude:req.point.latitude,
                longitude:req.point.longitude,
                minDistance:10,
                maxDistance:req.radius

            }
        }
    }

    private tripCountYearRequestToTripSearchDto(req:TripCountYearRequest):TripSearchDto{
        return {
            pointSearchDto:{
                latitude:req.point.latitude,
                longitude:req.point.longitude,
                minDistance:10,
                maxDistance:req.radius

            }
        }
    }

}

export default  TripController