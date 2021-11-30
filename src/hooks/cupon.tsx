import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session';
import axios from 'axios'

import ocr from '../consumers/ocr'

interface ICuponProviderProps {
  children: ReactNode
}

interface ICupon {
  _id?: string
  number?: number
  itemsQuantity?: number
  store?: string
  createdAt?: Date
  updatedAt?: Date 
  items?: {
    _id: string
    name: string
    value: number
    quantity: number
  }[]
}

interface IAuthContextData {
  cupon: ICupon,
  updateCupon({ cupon }): Promise<void>
  createCupon({ image }): Promise<void>
}

const AuthContext = createContext({} as IAuthContextData)

const CuponProvider = ({ children }: ICuponProviderProps) => {
  const [cupon, setCupon] = useState<ICupon>({})

  const createCupon = async ({ image }) => {
    try {
      const formData = new FormData()
      formData.append('image', image)
      const response = await ocr.create(formData)
      setCupon(response)
    } catch (error) {
      throw new Error(error as any)
    }
  }
  
  const updateCupon = async ({ cupon }) => {
    try {
      setCupon(cupon)
    } catch (error) {
      throw new Error(error as any)
    }
  }

  return (
    <AuthContext.Provider value={{ updateCupon, createCupon, cupon }}> 
      { children }
    </AuthContext.Provider>
  )
}

const useCupon = () => {
  const context = useContext(AuthContext)

  return context
}

export {
  CuponProvider,
  useCupon
}