import axios from 'axios'

const token = '7097172420046892'
const baseUrl = 'https://api.github.com/users'

const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
    }
})

const getUser = (username) => {
    const request = axiosInstance.get(`${username}`)
    return request.then(response => response.data)
}

const getRepos = (username) => {
    const request = axiosInstance.get(`${username}/repos`)
    return request.then(response => response.data)
}

export default { getUser, getRepos }