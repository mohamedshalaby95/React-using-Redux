import { connect } from 'react-redux'
import Car from '../components/car';
const CarsList = ({ cars ,history}) => {
    console.log(cars)
    if (cars) {
        if (cars.length > 0)
            return cars.map(car => (
                <Car key={car.id} carInfo={car} history={history}/>
            ))
        return(
            <p className="text-muted text-center">
                   this brand is not available, plz search for another brand.
                </p>
       
        )
    }

    return <p>
        no cars available, plz search for a brand.
    </p>
}


const mapStateToProps = (state) => {
    console.log(state)
    return { cars: state.cars.list }
}


export default connect(mapStateToProps, null)(CarsList)