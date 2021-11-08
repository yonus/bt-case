import {TripSearchDto} from "../../interfaces/dto/trip-search-dto";
import TripRepository from "../../repository/trip-repository";
import {tripToITripDtoMapper} from "./mapper/trip-mapper";


export const getTrips = async (tripSearchDto:TripSearchDto) =>{
      return  await TripRepository.findTrips(tripSearchDto).then(trips =>trips.map(t => tripToITripDtoMapper(t)));
}

export const getMinMaxTravelDistance = async (tripSearchDto:TripSearchDto) =>{
      return await TripRepository.findMinMaxTravelDistance(tripSearchDto)
}

export  const getTripCountByVehicleYear = async (tripSearchDto:TripSearchDto) =>{
      return await TripRepository.findTripCountByVehicleYear(tripSearchDto)
}

