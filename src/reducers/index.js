import { combineReducers} from 'redux'
import { carsList} from './cars-list'
import { carDetails} from './car-details'
import { cars} from './cars'
export default combineReducers({
   cars
})
// export default combineReducers({
//     carsList,
//     carDetails
// })