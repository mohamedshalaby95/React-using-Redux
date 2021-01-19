import { Component ,createRef ,useRef} from "react";
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'
import { getCars } from '../actions'

const Search = (props) => {
    console.log(props)
    const myRef = useRef()
    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control rounded-pill text-center" 
                placeholder="search by brand" 
                ref={myRef}/>
            </div>
            <div className="form-group text-center">
                <input type="button" value="search" className="btn btn-primary w-50" 
                onClick={()=>{
                    console.log(myRef.current.value)
                    props.getCars(myRef.current.value)
                }}
                />
            </div>
        </form>
    )
}

const mapDispatchToProps = (dispatch)=>{

return bindActionCreators({getCars},dispatch)
}

export default connect(null,mapDispatchToProps)(Search)


// export default class Search extends Component{
//     constructor(){
//         super()    

//         this.myref = createRef()
//     }

//     render = () => {

//         return (
//             <form>    
//                 <div className="form-group">
//                     <input ref={this.myref} type="text" className="form-control rounded-pill text-center" 
//                     placeholder="search by brand" />
//                 </div>
//                 <div className="form-group text-center">
//                     <input type="button" value="search" className="btn btn-primary w-50" 
//                     onClick={()=>{
//                         console.log(this.myref.current.value)    
//                     }}/>
//                 </div>
//             </form>
//         )
//     }
// }



// dispatch(action){

//     let result = action()

//     carsList(state,result)
//     carsList(state,result)
// }






















