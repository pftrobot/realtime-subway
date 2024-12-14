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

export const fetchArrivalList = async (): Promise<ArrivalItem[]> => {
  const { data } = await api.get<{ realtimeArrivalList: ArrivalItem[] }>(
    `/json/realtimeStationArrival/0/5/모란`
  )
  return data.realtimeArrivalList || [] // 빈 배열로 기본값 처리
}
