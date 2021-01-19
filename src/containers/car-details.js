import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCarById,clearDetails } from '../actions'

class CarDetails extends Component {
    render() {
        console.log(this.props)

        return (
            <div>
                {this.renderCar(this.props)}
            </div>
        )
    }

    renderCar({ details }) {
        if (details && details.id) {
            return (<div class="row" >

                <div className="col-6 ">
                
                 <h3>Name : <span className="text-primary ">  {details.brand} </span></h3>  
                  <h3> Model :<span className="text-primary "> {details.model}</span></h3>  
                  <h3> Year : <span className="text-primary ">  {details.year}</span></h3> 
                    
                    
                
                <p>
                    <h4 className="m-5 text-center">Description</h4>
                    {details.description}
                </p>
                </div>
                <div className="col-6"><img src={`/images/${details.image}`}  className=" m-auto w-100 rounded h-100vh"/></div>
               
                
               
            </div>)
        }


        return <p>
            car details is not available.
        </p>
    }
    componentDidMount() {
        // debugger
        this.props.getCarById(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.clearDetails()
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.cars.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCarById ,clearDetails}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)