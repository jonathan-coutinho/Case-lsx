import { create } from "apisauce"

const api = create ({
    baseURL:"localhost:4000"
})

api.addResponseTransform (response => {
    if (!response.ok) throw response
})

export default api