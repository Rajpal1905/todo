import { apiConnector } from "../apicontector"
import {endPoints} from "../apis"

const {LOGIN,SIGNUP} = endPoints

export const login_fn = async(email,password)=>{
    try {
        const res = await apiConnector("POST",LOGIN,{email,password})
        console.log(res);
        return res;
    } catch (error) {
        console.error("Error in loginApi ,",error)
    }
}
export const signin_fn = async(name,email,password,confirmPassword)=>{
    try {
        const res = await apiConnector("POST",SIGNUP,{
            name,
            email,
            password,
            confirmPassword
        })
        console.log(res)
        return res
    } catch (error) {
            console.error("Error in loginApi ,",error)
    }
}