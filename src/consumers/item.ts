import { AxiosResponse } from 'axios'
import api from '../global/api'

const dashboard = {
  list: async () => {
    try {
      const response: any = await api.get('auth/items')
      return response?.data
    } catch (err: any) {
      // if (err.name === 'ERR_INTERNET_DISCONNECTED') throw new ErrInternetDisconnected()
      // if (!err.response) throw new ConnectionFailed()
      throw err.response.data
    }
  }
}

export default dashboard