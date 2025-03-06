const BASE_URL = 'http://localhost:3000/api/v1'

export const endPoints = {
    LOGIN : BASE_URL + '/auth/login',
    SIGNUP : BASE_URL+ '/auth/signup'
};

export const tasks = {
    ADD_TODO : BASE_URL + '/task/createTask'
}