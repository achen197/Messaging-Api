import axios from "axios";
import { MessageDto, SubscriptionDto } from "../models/interfaces";

const BASE_URL = "https://sms-app-dev.herokuapp.com/api";

export const getMessages = () => {
  return axios
    .get(`${BASE_URL}/messages`)
    .then((res) => res.data as MessageDto[])
    .catch((e) => {
      throw e;
    });
};

export const getSubscription = () => {
    return axios
    .get(`${BASE_URL}/subscriptions`)
    .then((res) => res.data as SubscriptionDto[])
    .catch((e) => {
      throw e;
    });
};

export const login = () => {
	return axios
	.post(`${BASE_URL}/users/login`,{username: 'Michael', password: 'qwaszx'},{
		withCredentials: true
	})
	.then(res => window.location.href = '/messages') //FIXME: Maybe use react router here??
	.catch(e => {
	 throw e;
	})
}
