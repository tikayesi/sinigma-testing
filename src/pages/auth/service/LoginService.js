import client from "../../../shared/http-client/Client";

const LoginService = () => {
    const login = async() => {
        const res = await client.post("/auth")
    }
}

export default LoginService;