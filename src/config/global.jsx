import { notification } from "antd";

notification.config({
  placement: "top",
  duration: 3,
});

const notify = {
  success(title, description) {
    notification.success({ title, description });
  },
  error(title, description) {
    notification.error({ title, description });
  },
  warning(title, description) {
    notification.warning({ title, description });
  },
  info(title, description) {
    notification.info({ title, description });
  },
};
window.notify = notify;
export default notify;
