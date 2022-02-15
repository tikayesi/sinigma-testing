import client from "../../../shared/http-client/Client";

const LoginService = () => {
    const login = async(user) => {
        const res = await client.post("/auth", user,  { responseType: 'json' })
        return res
    }

    const logout = async() => {
        const res = await client.post("/auth/logout")
        return res
    }

    return {login, logout}
}

export default LoginService;