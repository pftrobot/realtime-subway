import { api } from '@/api/index'

interface RealPopulation {
  AREA_CONGEST_LVL: string // 장소 혼잡도 지표
  AREA_CONGEST_MSG: string // 장소 혼잡도 지표 관련 메시지
}

interface PlaceInfo {
  trainLineNm: string
  arvlMsg2: string
  AREA_NM: string // 장소명
  LIVE_PPLTN_STTS: RealPopulation[] // 실시간 인구현황
}
// ROAD_ADDR : 도로명주소
// ADDRESS : 지번주소
// PPLTN_RATE_0 : 0-10세 실시간 인구 비율
// PPLTN_RATE_1 : 10대
// PPLTN_RATE_2 : 20대
// PPLTN_RATE_3 : 30대
// PPLTN_RATE_4 : 40대
// PPLTN_RATE_5 : 50대
// PPLTN_RATE_6 : 60대
// PPLTN_RATE_7 : 70대
// MALE_PPLTN_RATE : 남성 인구 비율
// FEMALE_PPLTN_RATE : 여성 인구 비율
// PPLTN_TIME : 실시간 인구 데이터 업데이트 시간

// ROAD_TRAFFIC_STTS : 도로소통현황
// ROAD_TRAFFIC_SPD : 전체도로소통평균속도
// ROAD_MSG : 전체도로소통평균현황 메시지
// SUB_FACINFO : 교통약자 이용시설 현황

// WEATHER_STTS : 날씨 현황
// TEMP : 기온
// SENSIBLE_TEMP : 체감온도
// MAX_TEMP : 일 최고온도
// MIN_TEMP : 일 최저온도
// HUMIDITY : 습도
// WIND_SPD : 풍속
// PRECIPITATION : 강수량
// PRECPT_TYPE : 강수형태
// RAIN_CHANCE : 강수확률
// PCP_MSG : 강수관련 메시지
// SUNRISE : 일출시각
// SUNSET : 일몰시각
// UV_INDEX_LVL : 자외선지수 단계
// UV_INDEX : 자외선지수
// UV_MSG : 자외선메시지
// PM25_INDEX : 초미세먼지지표
// PM25 : 초미세먼지농도
// PM10_INDEX : 미세먼지지표
// PM10 : 미세먼지농도
// AIR_IDX : 통합대기환경등급
// AIR_MSG : 통합대기환경등급별 메시지
// NEWS_LIST : 기상관련특보
// WARN_VAL : 기상특보종류
// WARN_STRESS : 기상특보강도
// ANNOUNCE_TIME : 기상특보발효시각
// CANCEL_YNM : 기상특보취소구분
// WARN_MSG : 기상특보 행동강령
// SKY_STTS : 하늘상태

// LIVE_CMRCL_STTS : 실시간 상권 현황
// AREA_CMRCL_LVL : 장소 실시간 상권 현황

// REPLACE_YN : 대체 데이터 여부
// 주차 관련 다수 ..
// 전기차 충전 관련 다수 ..
// 따릉이 관련 다수 ..
// 문화행사 관련 다수 ..

export const fetchArrivalList = async (name: string): Promise<PlaceInfo[]> => {
  try {
    const { data } = await api.get<{ realtimeArrivalList: PlaceInfo[] }>(
      `/citydata/1/5/${decodeURIComponent(name)}`
    )
    return data?.realtimeArrivalList || []
  } catch (error) {
    console.error('Error fetching arrival list:', error)
    throw error
  }
}
