import axios from "axios"
import { host } from "@/config/config"
import store from '@/store';

export const getProjects: any = () => {
    console.log(store.getters.token)
    return axios.get(`${host}/project/`, {
        headers: {
            Authorization: `Bearer ${store.getters.token}`
        }
    }).then(function (response) {
        return response
    }).catch(err => {
        return false
    })
}

export const addProject = (ProjectName: string | null, UserId: string | null) => {
    return axios.post(`${host}/project`, {
        ProjectName: ProjectName,
        UserId: UserId
    }, {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    }).then(response => {
        return response;
    }).catch(err => {
        return false;
    });
}