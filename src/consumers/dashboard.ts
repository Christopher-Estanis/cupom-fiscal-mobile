import { AxiosResponse } from 'axios'
import api from '../global/api'

const dashboard = {
  main: async ({ type }: any) => {
    try {
      let url = '/auth/dashboard'
      if (type) url = url + `?type=${type}`

      const response: any = await api.get(url)
      return response?.data
    } catch (err: any) {
      // if (err.name === 'ERR_INTERNET_DISCONNECTED') throw new ErrInternetDisconnected()
      // if (!err.response) throw new ConnectionFailed()
      throw err.response.data
    }
  }
}

export default dashboard