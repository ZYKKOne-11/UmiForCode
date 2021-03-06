import { request } from 'umi'

type loginBody = {
  account: string
  user: { password: string }
}
type user = {
  name: string
  password: string
  email: string
}
type registerBody = {
  user: user
  code: string
}

type checkBody = {
  user: {
    name?: string
    email?: string
  }
}

type changeBody = {
  reqType: string
  oldPassword?: string
  newPassword?: string
  newName?: string
  newEmail?: string
  code?: string
}

type userUpdataBody = {
  tag: string[]
  user: {
    sign: string
  }
}

export const queryUser = () => {
  return request('/core-api/user/query', { method: 'get' })
}

export const logoutFunc = () => {
  return request('/core-api/user/logout', { method: 'get' })
}

export const signInFunc = (data: loginBody) => {
  return request('/core-api/user/login', { method: 'post', data })
}

export const signUpFunc = (data: registerBody) => {
  return request('/core-api/user/register', { method: 'post', data })
}

export const sendEmailFunc = (data: any) => {
  return request('/core-api/user/send-email', { method: 'post', data })
}

export const changePassword = (data: string) => {
  return request('/core-api/user/send-email', { method: 'post', data })
}

export const checkRepeatStatus = (data: checkBody) => {
  return request('/core-api/user/check-param', { method: 'post', data })
}

export const uploadAva = (data: any) => {
  return request('/core-api/user/uploadImg', { method: 'post', data })
}

export const userUpdate = (data: userUpdataBody) => {
  return request('/core-api/user/update', { method: 'post', data })
}

export const changeInfo = (data: changeBody) => {
  return request('/core-api/user/change', { method: 'post', data })
}
