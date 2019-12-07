import { create } from "apisauce"

const api = create ({
    baseURL:"https://case-lsx.herokuapp.com/"
})

api.addResponseTransform (response => {
    if (!response.ok) throw response
})

export default api