import { createContext, ReactNode } from "react";
import { Socket } from "socket.io-client";
import { useSocket } from "../hooks";
import { config } from "../common/config";

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketContext = createContext<{
  socket: Socket | null;
  online: boolean;
} | null>(null);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { socket, online } = useSocket(config.url);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
