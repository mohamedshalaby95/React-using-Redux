const baseURL = "http://localhost:3002/cars"

export async function getCars(brand) {
    //fetch 
    console.log('get cars action', brand)
    let payload = null;
    try {
        let response = await fetch(`${baseURL}?brand=${brand}`)
        payload = await response.json()
    }
    catch (err) {
        console.log(err)
    }

    console.log('after fetch')
    return {
        type: 'CARS_LIST',
        payload
    }
}



export async function getCarById(id) {
    //fetch
    let payload = null;
    try {
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'CAR_DETAILS',
        payload
    }
}

export function clearDetails(){
    return {
        type:'CLEAR_DETAILS',
        payload:null
    }
}