import { createContext,useState } from "react";

export const Maincontext = createContext({
    factor: [],
    setFactor: () => { }
})

const Provider = ({ children }) => {
    
    const [factor, setFactor] = useState([])

    return (
        <Maincontext.Provider value={{ factor, setFactor }}>
            {children}
        </Maincontext.Provider>
    );
}

export default Provider;