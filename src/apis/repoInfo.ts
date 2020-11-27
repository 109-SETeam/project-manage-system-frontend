import axios from "axios"
import { host } from "../config/config"

export const getCommitInfo = (repoId:number|null) =>{
    return axios.get(`${host}/repoInfo/commit/${repoId}`);
}

export const getContributeInfo = (repoId:number|null) =>{
    return axios.get(`${host}/repoInfo/contribute/${repoId}`);
}