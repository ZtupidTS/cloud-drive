import axios from 'axios'

let baseURL
if (process.env.NODE_ENV == 'development') {
  baseURL = 'http://localhost:3000'
} else {
  baseURL = 'http://api.xiaodongli.me:3000'
}


const instance = axios.create({
  baseURL: baseURL,
  timeout: 30000
})

console.log(process.env.NODE_ENV)

export default instance