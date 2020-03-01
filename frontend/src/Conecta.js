import axios from 'axios'

const Conecta = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })

export default Conecta