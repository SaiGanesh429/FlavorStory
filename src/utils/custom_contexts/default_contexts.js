import { createContext } from "react";

const DefaultContexts = createContext({
    theme: 'light',
    loggedInUser: "Default User"
});

export default DefaultContexts;
