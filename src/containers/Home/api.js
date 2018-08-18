import { post } from 'axios'

export function postUserInfoService(data) {
  return post(
    'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
    data
  ).catch(error => error.response.data)
}