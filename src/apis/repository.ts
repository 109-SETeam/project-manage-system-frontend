import axios from "axios";
import { host } from "../config/config";
import store from '@/store';

export const getRepository = (projectId: string) => {
  return axios.get(`${host}/repo/${projectId}`, {
    headers: {
      Authorization: `Bearer ${store.auth.getToken}`
    }
  })
}

export const addRepo: any = (projectId: number, url: string,sonarqubeUrl: string,account:string,pw:string,projectKey:string) => {
  const accountColonPw = btoa(account+":"+pw);
  return axios.post(`${host}/repo`, { projectId, url,sonarqubeUrl,accountColonPw,projectKey }, {
    headers: {
      Authorization: `Bearer ${store.auth.getToken}`
    }
  });
}

export const deleteRepo: any = (projectId: number, repoId: number) => {
  return axios.delete(`${host}/repo/?projectId=${projectId}&repoId=${repoId}`, {
    headers: {
      Authorization: `Bearer ${store.auth.getToken}`
    }
  });
}