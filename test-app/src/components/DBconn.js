import axios from 'axios'


export const switchFavoriteItem = (newprod) => {
    // console.log(newprod.fav)
    axios({
        method: 'put',
        url: `http://localhost:3001/prods/${newprod.id}`,
        data: {...newprod, fav: !newprod.fav}
      }).then(response => {
        return response.data
    })
}

export const addAppointment = (app) => {
    // console.log(newprod.fav)
    axios({
        method: 'put',
        url: `http://localhost:3001/prods/${app.id}`,
        data: app
      }).then(response => {
        return response.data
    })
}

export const switchKeyAssignment = (newKey) => {
    return axios({
        method: 'put',
        url: `http://localhost:3001/keys/${newKey.id}`,
        data: {...newKey, assigned: !newKey.assigned}
      }).then(response => {
          console.log(response.data)
          return response.data
      })
}

export const putClient = (newClient) => {
    return axios({
        method: 'put',
        url: `http://localhost:3001/keys/${newClient.id}`,
        data: newClient
      }).then(response => {
        //   console.log(response.data)
          return response.data
      })
}

export const putKey = (newKey) => {
    return axios({
        method: 'put',
        url: `http://localhost:3001/keys/${newKey.id}`,
        data: newKey
      }).then(response => {
        //   console.log(response.data)
          return response.data
      })
}

export const unlockKey = (key) => {
    return axios({
        method: 'put',
        url: `http://localhost:3001/keys/${key.id}`,
        data: {...key, assigned: false}
      }).then(response => {
        //   console.log(response.data)
          return response.data
      })

      //TODO!!
      //in the server this should also release the key from the cient
      //and check out the client from the 
}

export const getSpecificKey = (keyId) => {
    return axios.get(`http://localhost:3001/keys?id=${keyId}`)
         .then(function (response) {
            // console.log(response.data)
            return response.data
      })
}


export const getSpecificClient = (clientId) => {
    return axios.get(`http://localhost:3001/clients?id=${clientId}`)
         .then(function (response) {
            // console.log(response.data)
            return response.data
      })
}

export const getAppsByDateandField = async ({date, field}) => {
    // console.log(date + ' ' + field)
    return axios.get(`http://localhost:3001/apps?date=${date}&field=${field}`)
         .then(function (response) {
            // console.log(response.data)
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
            return response.data
      })
}

export const getTennisCourts = async ({date}) => {
    return axios.get(`http://localhost:3001/tennis`)
         .then(function (response) {
            // console.log(response.data)
            return response.data
      })
}

export const updateClient = async (client) => {
    return axios({
        method: 'put',
        url: `http://localhost:3001/clients/${client.id}`,
        data: client
      }).then(response => {
          console.log(response.data)
          return response.data
      })
}

const API = 'http://localhost:3001/'

export  const fetchProds = async () => {
    const res = await fetch('http://localhost:3001/prods')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchKeys = async () => {
    const res = await fetch('http://localhost:3001/keys')
    const data = await res.json()
    // console.log(data)
    return data
}

export const fetchSuppliers = async () => {
    const res = await fetch('http://localhost:3001/suppliers')
    const data = await res.json()
    return data
}

export  const fetchTypes = async () => {
    const res = await fetch('http://localhost:3001/productTypes')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchApprow = async () => {
    const res = await fetch('http://localhost:3001/apps')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchAppoitments = async () => {
    const res = await fetch('http://localhost:3001/appointments')
    const data = await res.json()
    // console.log(data)
    return data
}

export  const fetchClients = async () => {
    const res = await fetch('http://localhost:3001/clients')
    const data = await res.json()
    // console.log(data)
    return data
}


//-----------------------------Setters--------------
export const addCartList = async (list)=>{
    //send to db new cartlist
    // console.log(list)
}

export  const fetchCartProdLists = async () => {
    const res = await fetch('http://localhost:3001/cartlists')
    const data = await res.json()
    // console.log(data)
    return data
}



export default function DBconn() {
    return (
        <div>
            
        </div>
    )
}
