import CarsList from "../containers/cars-list"
import Search from "../containers/search"

const Home = (props)=>{

    return (
        <div>
            <Search/>
            <div class="container">  
        <div class="row">
            <div  className="col-3"></div>
            <div  className="col-6 text-center text-muted">
            <CarsList {...props}/>
            </div> 
            <div  className="col-3"></div>
        </div>
             
            
        </div>
            
        </div>
    )
}

export default Home