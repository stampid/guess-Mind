import events from "./event";

const socketController = socket => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);

  socket.on(events.setNickname, ({ nickname }) => {
    broadcast(events.newUser, { nickname });
    socket.nickname = nickname;
  });

  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
    console.log("disconnect");
  });
};

export default socketController;
