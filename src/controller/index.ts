import AuthenticationController from "./auth/auth-controller";
import TripController from "./trip/trip-controller";


const controllers = [
    new AuthenticationController(),
    new TripController()
]

export default  controllers