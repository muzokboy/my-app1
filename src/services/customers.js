import { service } from ".";

export default {
  getList: () => service.get("/customers"),
};
