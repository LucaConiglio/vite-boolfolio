import { reactive } from "vue";
import axios from 'axios';
export const store = reactive({
  

  backendUrl: "http://127.0.0.1:8000",
  //backendUrl: "http://192.168.1.124:8000",

      projects: [],

      fecthProjects() {
        axios.get(this.backendUrl + "/api/projects").then((resp) => {
          this.projects = resp.data.data

  
        });
      }
  });
  
    

