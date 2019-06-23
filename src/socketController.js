import events from "./event";

const socketController = socket => {
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    console.log(nickname);
  });
};

export default socketController;
