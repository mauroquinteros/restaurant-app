import { createContext, ReactNode } from "react";
import { useSocket } from "@hooks";
import { Socket } from "socket.io-client";

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketContext = createContext<{
  socket: Socket | null;
  online: boolean;
} | null>(null);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { socket, online } = useSocket("https://api.mauroquinteros.site");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
