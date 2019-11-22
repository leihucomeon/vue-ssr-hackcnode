import axios from 'axios'
const service = axios.create({
    timeout: 15000
})

service.interceptors.response.use(
    (response) => {
        return new Promise((resolve, reject) => {
            const { data } = response
            if (data && data.success === true) {
                return resolve(data)   
            }
            reject(data)
        })
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service