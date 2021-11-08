import {TripSearchDto} from "../../interfaces/dto/trip-search-dto";


export const findTripsCriteria = (tripSearchDto:TripSearchDto):Object =>{
    const criteria = {}
    if(tripSearchDto.pointSearchDto){
        criteria["start"] = {
            "$near": {
                $geometry: {type: "Point", coordinates: [tripSearchDto.pointSearchDto.longitude, tripSearchDto.pointSearchDto.latitude]},
                $minDistance: tripSearchDto.pointSearchDto.minDistance,
                $maxDistance: tripSearchDto.pointSearchDto.maxDistance
            }
        }

    }

    if(tripSearchDto.startDate){
        criteria["start_date"] = {$gte: tripSearchDto.startDate}
    }

    if(tripSearchDto.endDate){
        criteria["complete_date"] = {$lte: tripSearchDto.endDate}
    }
    return criteria

}

