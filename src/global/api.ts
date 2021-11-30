import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://172.21.137.42:5000',
  timeout: 30000
})

api.defaults.headers.post['Content-Type'] = 'application/json'

api.interceptors.response.use(
  (response) => {
    return response
  }, (error: AxiosError) => {
    // if (error.response && error.response.status === 401) {
    //   setTimeout(() => {
    //     modal.warning({
    //       title: 'Sua sessão expirou!',
    //       content: 'Faça o login novamente.',
    //       close: () => {
    //         document.location.href = '/'
    //         clearStorage()
    //       },
    //       cancel: () => {
    //         document.location.href = '/'
    //         clearStorage()
    //       }
    //     })
    //   }, 1000)
    // }
    return Promise.reject(error)
  }
)

export default api