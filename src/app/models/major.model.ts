import { Student } from "./user.model"

export interface Major {
  id?: bigint
  name: string
  description: string
  students: Student[]
}
