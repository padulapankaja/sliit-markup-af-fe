import axios from "axios";
import Axios from "axios";
import Config from '../Controller/Config.json'
import { toast } from 'react-toastify';


export async function insert_course(title,
    img,
    description,
    link,
    content,
    teacher_id) {

    const result = await axios.post(`${Config.host}${Config.port}/api/course/create`, {
        title,
        img,
        description,
        link,
        content,
        teacher_id
    })
    return result
}
export async function get_all_courses() {

    const result = await axios.get(`${Config.host}${Config.port}/api/course/all`,)
    return result
}
export async function get_single_course_details(id) {

    const result = await axios.get(`${Config.host}${Config.port}/api/course/${id}`,)
    return result
}
export async function get_courses_by_teacher(id) {

    const result = await axios.get(`${Config.host}${Config.port}/api/course/byteacher/${id}`,)
    return result
}
export async function add_my_collcriton_api(_id,course_id, token ) {

    const result = await axios.post(`${Config.host}${Config.port}/api/user/add/course`,{
        _id,
        course_id
    } ,
    {
        headers:{
            Authorization : `Bearer ${token}`
        }
    } )
    return result
}