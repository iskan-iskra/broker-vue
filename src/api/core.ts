import axios from "axios"

const basicURL = "https://my-json-server.typicode.com/iskan-iskra/my_cloud_db/"


const coreApi = axios.create({
    baseURL: basicURL,
})

export default coreApi