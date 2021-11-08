import Trip, {TripModel} from "./model/trip-model";
import {TripSearchDto} from "../interfaces/dto/trip-search-dto";
import {findTripsCriteria} from "./criteria/trip-search-criteria";
import {MinMaxTravelDistanceDto} from "../interfaces/dto/min-max-travel-distance-dto";
import logger from "../core/logger";
import {TripCountYearDto} from "../interfaces/dto/trip-count-year-dto";


export default class TripRepository {
    public static  async findTrips(tripSearchDto:TripSearchDto):Promise<Trip[]>{
       return TripModel.find(findTripsCriteria(tripSearchDto)).exec()
    }

    public static  findMinMaxTravelDistance(tripSearchDto:TripSearchDto):Promise<MinMaxTravelDistanceDto>{

        const minMaxTravelDistance =  TripModel.aggregate<MinMaxTravelDistanceDto>([
             {"$geoNear":
                 {"near":{ "type": "Point", "coordinates": [tripSearchDto.pointSearchDto.longitude, tripSearchDto.pointSearchDto.latitude] },
                     "maxDistance":tripSearchDto.pointSearchDto.maxDistance,
                     'distanceField' : 'dist.distance',
                     "key":"start",
                      spherical: true
                 }
              },
             {
                 "$group": {
                     "_id": null,
                     "maxTravelDistance": {"$max": "$distance_travelled"},
                     "minTravelDistance": {"$min": "$distance_travelled"}
                 }

             },
            {
                "$project": {
                        "_id": 0
                }

            }
         ]).exec().then(i => i[0]);

        return minMaxTravelDistance;
    }

    public static findTripCountByVehicleYear(tripSearchDto:TripSearchDto){
        const tripCountYears =  TripModel.aggregate<TripCountYearDto>([
            {"$geoNear":
                    {"near":{ "type": "Point", "coordinates": [tripSearchDto.pointSearchDto.longitude, tripSearchDto.pointSearchDto.latitude] },
                        "maxDistance":tripSearchDto.pointSearchDto.maxDistance,
                        'distanceField' : 'dist.distance',
                        "key":"start",
                        spherical: true
                    }
            },
            {
                "$group": {
                    "_id": "$year",
                    "count": {"$sum": 1}
                }

            },
            {
                $project: {
                    year:"$_id",
                    count:1,
                    _id:false
                }
            }


        ]).exec();
        return tripCountYears;
    }

}