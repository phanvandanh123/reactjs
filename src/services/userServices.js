import axios from '../axios'
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data)
}

const deleteUser = (userId) => {
    return axios.delete('/api/delete-new-user', {
        data: {
            id: userId
        }
    })
}

const EditUserService = (inputData) => {
    return axios.put('/api/edit-new-user', inputData)
}

export { handleLoginApi, getAllUsers, createNewUserService, deleteUser, EditUserService }  