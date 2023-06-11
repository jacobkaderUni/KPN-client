import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export interface User {
  id: string;
  name: string;
}
const AuthContext = createContext<User | null>(null);

export const useAuth = (): User | null => useContext(AuthContext);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
