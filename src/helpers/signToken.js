import Jwt from "jsonwebtoken"
import { SECRET, USER_KEY, ADMIN_KEY } from "../config/config.js"

export const signToken = (user) =>{
   const token = Jwt.sign({
    id: user._id,
    role: user.role
   }, SECRET)
   
   const authObj = {
      token: token ,
      key: user.role == "admin" ? ADMIN_KEY : USER_KEY
   }
   return authObj
}