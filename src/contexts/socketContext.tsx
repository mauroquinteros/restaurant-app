import { createContext, ReactNode } from "react";
import { useSocket } from "@hooks";

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketContext = createContext<unknown>(null);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { socket, online } = useSocket("http://localhost:3000");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
