import { useNavigate, useParams } from "react-router-dom"

export const RouteNavigation = () => {
    const navigate = useNavigate();
    const params = useParams()

    const navigateTo = (url) => {
        navigate(url)
    }

    const paramsNav = () => {
        return params
    }



    return{
        paramsNav,
        navigateTo
    }
}