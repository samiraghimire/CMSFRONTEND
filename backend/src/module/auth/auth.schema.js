import  {optional, z} from  "zod"
import { Roles } from "../../constans/roles.js"

export const registerSchema=z.object({
    fullName:z.string().trim().min(3,"Fullname must be at least 3 characters"),
    email:z.string().trim().email("Invalid email address"),
    phone:z.string().trim().min(10,"phone number must be at least 10digits").max(15,"phone number cannot exceed 15 dgits ").optional(),
    password:z.string().min(8, 'password must be at least 8 characters'),
    role: z
  .enum([
    Roles.ADMIN,
    Roles.DOCTOR,
    Roles.PATIENT,
    Roles.STAFF,
  ])
  .optional()
})



export const loginSchema=z.object({
  email:z.strin().trim().email("Invalid email address"),
  password:z.string().min(8,"pasword mut be at least same as we used in the register"),
  rememberMe:z.boolean().default(false),
})