import { api } from '@/app/api/index'

interface ArrivalItem {
  subwayId: string
  updnLine: string
  trainLineNm: string
  trnsitCo: string
  btrainSttus: string
  barvlDt: string
  btrainNo: string
  arvlMsg2: string
  arvlMsg3: string
  arvlCd: string
  lstcarAt: string
}

export const fetchArrivalList = async () => {
  const { data } = await api.get(`/json/realtimeStationArrival/0/5/모란`)
  const temp = data.realtimeArrivalList
  console.log('::: fetchArrivalList : data : ', temp)
  return temp
}
