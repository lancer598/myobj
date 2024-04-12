import { createPinia } from "pinia";
//仓库持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

let pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;