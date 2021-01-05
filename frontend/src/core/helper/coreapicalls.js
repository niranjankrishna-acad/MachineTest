import { API } from '../../backend'

const coreapicalls = () => {
    return fetch(`${API}product`, { method: "GET" })
        .then(response => {
            return response.json()
        })

        .catch(err => console.log(err))
}

export default coreapicalls
