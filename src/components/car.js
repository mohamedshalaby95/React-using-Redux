const Car = ({ carInfo,history }) => {
    if (carInfo)
        return (
            <div className="m-2 alert  d-flex justify-content-between align-items-center">
                <h3 className=""> Model :{carInfo.model}</h3>
               
                <img className="w-25 rounded-circle" style={{cursor:'pointer'}} src={`/images/${carInfo.image}`} 
                onClick={()=>{
                    //navigate to car details with id
                    history.push(`/cars/${carInfo.id}`)
                }}/>
            </div>
        )
    return <p>
        Car info is not available.
     </p>
}

export default Car