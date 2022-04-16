import axios from "axios";

const serverApi=axios.create({
    baseURL:"https://tasker-01.herokuapp.com/api"
});

export default serverApi;