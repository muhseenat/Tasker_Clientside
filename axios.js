import axios from "axios";

const serverApi=axios.create({
    baseURL:"https://tkserver.muhseena.tech/api"
});

export default serverApi;