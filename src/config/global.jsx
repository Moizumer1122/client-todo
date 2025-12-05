import { notification } from "antd";

notification.config({
  placement: "top",
  duration: 3,
});

const notify = {
  success(message, description) {
    notification.success({ message, description });
  },
  error(message, description) {
    notification.error({ message, description });
  },
  warning(message, description) {
    notification.warning({ message, description });
  },
  info(message, description) {
    notification.info({ message, description });
  },
};
window.notify = notify;
export default notify;
