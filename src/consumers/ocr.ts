import { AxiosResponse } from 'axios'
import api from '../global/api'

const audio = {
  create: async (data: FormData) => {
    try {
      const config = { headers: { 'Content-Type': 'multipart/form-data' } }
      
      const response: any = await api.post('/auth/ocr', data, config)

      return response?.data
    } catch (err: any) {
      // if (err.name === 'ERR_INTERNET_DISCONNECTED') throw new ErrInternetDisconnected()
      // if (!err.response) throw new ConnectionFailed()
      throw err.response.data?.data
    }
  },
  list: async () => {
    try {
      const response: any = await api.get('/auth/ocr')
      return response?.data
    } catch (err: any) {
      // if (err.name === 'ERR_INTERNET_DISCONNECTED') throw new ErrInternetDisconnected()
      // if (!err.response) throw new ConnectionFailed()
      throw err.response.data
    }
  }
}

export default audio