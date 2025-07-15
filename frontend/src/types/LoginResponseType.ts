interface _User {
  id: number
  nombre: string
}

export interface LoginResponseType {
  token: string
  message: string
  user: _User
}