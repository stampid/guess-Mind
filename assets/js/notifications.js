const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, color) => {
  console.log(notifications);
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notifications.appendChild(notification);
};

export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just joined!`, "rgb(0, 122, 255)");
  console.log(nickname, " just joined");
};

export const handleDisconnected = ({ nickname }) => {
  fireNotification(`${nickname} just left!`, "rgb(255, 149, 0)");
};
