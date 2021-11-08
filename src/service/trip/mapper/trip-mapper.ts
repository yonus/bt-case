import Trip from "../../../repository/model/trip-model";
import {ITripDto} from "../../../interfaces/dto/trip-dto";


export const tripToITripDtoMapper = (trip:Trip):ITripDto =>{
    const tripDto:ITripDto = {
        id:trip._id,
        startDate:trip.start_date,
        endDate:trip.complete_date,
        type:trip.type
    }

    return  tripDto
}