import axios from 'axios'
const baseUrl = 'https://api.github.com'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default { getAll }