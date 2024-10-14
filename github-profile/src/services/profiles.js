import axios from 'axios'
const baseUrl = 'https://api.github.com/users'

const getUser = (username) => {
    const request = axios.get(`${baseUrl}/${username}`)
    return request.then(response => response.data)
}

export default { getUser }