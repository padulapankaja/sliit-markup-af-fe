import axios from "axios";
import Axios from "axios";
import Config from '../Controller/Config.json'
import { toast } from 'react-toastify';

export async function signin_teacher(email, password) {

    const result = await axios.post(`${Config.host}${Config.port}/api/user/singin/teacher`, {
        email, password
    })
    return result
}
export async function signin_student(email, password) {

    const result = await axios.post(`${Config.host}${Config.port}/api/user/singin/student`, {
        email, password
    })
    return result
}

export async function register_as_teacher(name, email, password) {
    const result = await axios.post(`${Config.host}${Config.port}/api/user/create/teacher`, {
        name, email, password
    })
    return result

}
export async function register_as_student(name, email, password) {

    const result = await axios.post(`${Config.host}${Config.port}/api/user/create/student`, {
        name, email, password
    })
    return result
}


export function setToast(msg) {
    toast(msg, {
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
    });
}

export function setErrorToast(msg) {
    toast.error(msg, {
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
    });
}