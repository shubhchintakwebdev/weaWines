import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [state, setState] = useState(localStorage.getItem("user"));
	return (
		<UserContext.Provider value={{ state, setState }}>
			{children}
		</UserContext.Provider>
	);
};
