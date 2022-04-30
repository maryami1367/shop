import { toast } from "react-toastify";
import { Provider } from "use-http";
import Loading from "../components/Loading";
import { useState } from 'react';

const FetchProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)

    const options = {
        interceptors: {
            request: async ({ options, url, path, route }) => {
                setLoading(true)
                let token = localStorage.getItem("token")
                if (token)
                    options.headers.Authorization = `Bearer ${token}`
                return options
            },
            response: async ({ response }) => {
                setLoading(false)
                if (!response.ok) {
                    toast("ERROR")
                }
                return response
            }
        }
    }

    return (
        <Provider options={options}>
            <Loading show={loading} />
            {children}
        </Provider>
    );
}

export default FetchProvider;