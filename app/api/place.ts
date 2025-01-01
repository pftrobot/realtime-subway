import { api } from '@/api/index'

interface Population {
  AREA_CONGEST_LVL: string // 장소 혼잡도 지표
  AREA_CONGEST_MSG: string // 장소 혼잡도 지표 관련 메시지
  MALE_PPLTN_RATE: string // 남성 인구 비율
  FEMALE_PPLTN_RATE: string // 여성 인구 비율
  PPLTN_RATE_0: string // 0-10세 실시간 인구 비율
  PPLTN_RATE_10: string // 10대
  PPLTN_RATE_20: string // 20대
  PPLTN_RATE_30: string // 30대
  PPLTN_RATE_40: string // 40대
  PPLTN_RATE_50: string // 50대
  PPLTN_RATE_60: string // 60대
  PPLTN_RATE_70: string // 70대
  PPLTN_TIME: string // 실시간 인구 데이터 업데이트 시간
}

interface RoadTraffic {
  ROAD_MSG: string // 도로소통 평균 현황 메시지
  ROAD_TRAFFIC_IDX: string // 도로소통 평균 현황
  ROAD_TRAFFIC_SPD: number // 도로소통 평균 속도
}

interface Weather {
  TEMP: string // 기온
  SENSIBLE_TEMP: string // 체감온도
  MAX_TEMP: string // 일 최고온도
  MIN_TEMP: string // 일 최저온도
  HUMIDITY: string // 습도
  WIND_SPD: string // 풍속
  PRECIPITATION: string // 강수량
  PRECPT_TYPE: string // 강수형태
  PCP_MSG: string // 강수관련 메시지
  SUNRISE: string // 일출시각
  SUNSET: string // 일몰시각
  UV_INDEX_LVL: string // 자외선지수 단계
  UV_INDEX: string // 자외선지수
  UV_MSG: string // 자외선메시지
  PM25_INDEX: string // 초미세먼지지표
  PM25: string // 초미세먼지농도
  PM10_INDEX: string // 미세먼지지표
  PM10: string // 미세먼지농도
  AIR_IDX: string // 통합대기환경등급
  AIR_MSG: string // 통합대기환경등급별 메세지
  // NEWS_LIST: []
}

export interface CityData {
  AREA_NM: string // 장소명
  AREA_CD: string // 장소코드
  LIVE_PPLTN_STTS: Population // 실시간 인구현황
  ROAD_TRAFFIC_STTS: RoadTraffic // 도로소통현황
  WEATHER_STTS: Weather // 날씨 현황
  AREA_CMRCL_LVL: string // 실시간 상권 현황
}

// NEWS_LIST : 기상관련특보
// WARN_VAL : 기상특보종류
// WARN_STRESS : 기상특보강도
// ANNOUNCE_TIME : 기상특보발효시각
// CANCEL_YNM : 기상특보취소구분
// WARN_MSG : 기상특보 행동강령

interface CityDataAPIResponse {
  CITYDATA?: {
    AREA_NM: string // 장소명
    AREA_CD: string // 장소코드
    LIVE_PPLTN_STTS: Population[] // 실시간 인구현황
    ROAD_TRAFFIC_STTS: {
      AVG_ROAD_DATA: RoadTraffic // 도로소통현황
    }
    WEATHER_STTS: Weather[] // 날씨 현황
    AREA_CMRCL_LVL: string // 실시간 상권 현황
  }
}

export const getCityData = async (name: string): Promise<CityData | null> => {
  try {
    const { data } = await api.get<CityDataAPIResponse>(
      `/citydata/1/5/${decodeURIComponent(name)}`
    )
    const { CITYDATA } = data
    if (CITYDATA) {
      return {
        AREA_NM: CITYDATA.AREA_NM,
        AREA_CD: CITYDATA.AREA_CD,
        LIVE_PPLTN_STTS: CITYDATA.LIVE_PPLTN_STTS[0],
        ROAD_TRAFFIC_STTS: CITYDATA.ROAD_TRAFFIC_STTS.AVG_ROAD_DATA,
        WEATHER_STTS: CITYDATA.WEATHER_STTS[0],
        AREA_CMRCL_LVL: CITYDATA.AREA_CMRCL_LVL,
      } as CityData
    }
    return null
  } catch (error) {
    console.error('Error fetching city data :', error)
    throw error
  }
}
