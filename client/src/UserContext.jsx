import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
      if(!user) {
        const getUser = async () => {
          try {
            const userData = await axios.get('/users/profile');
            setUser(userData?.data);
          } catch(err) {
            console.log(err);
          }
        };

        getUser();
      }
    }, []);
    
    return (
        <UserContext.Provider value={{ user, setUser, }}>
            {children}
        </UserContext.Provider>
    );
}