import axios, { AxiosRequestConfig } from 'axios'

const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_OPENAPI_KEY || '',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
}

export const api = axios.create(baseConfig)
