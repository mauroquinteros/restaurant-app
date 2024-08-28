import { useEffect, useMemo, useState } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = (
  server: string
): { socket: Socket; online: boolean } => {
  const socket = useMemo(() => io(server), [server]);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected!");
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      console.log("disconnected!");
      setOnline(false);
    });
  }, [socket]);

  return {
    socket,
    online,
  };
};
