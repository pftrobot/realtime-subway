'use client'

import { usePlaceStore } from '@/store/placeStore'

export default function SearchPlaceInfo() {
  const { searchQuery, cityData, setSearchQuery, setCityData } = usePlaceStore()

  const handleSearch = async () => {
    await setCityData(searchQuery)
  }

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      await setCityData(searchQuery)
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter place name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {cityData ? (
        <section>
          <p>지금 {cityData.AREA_NM}은</p>
          <p>{cityData.LIVE_PPLTN_STTS?.AREA_CONGEST_MSG}</p>
          <br />
          <p>장소 혼잡도 지표 : {cityData.LIVE_PPLTN_STTS?.AREA_CONGEST_LVL}</p>
          <p>남성 인구 비율 : {cityData.LIVE_PPLTN_STTS?.MALE_PPLTN_RATE}</p>
          <p>여성 인구 비율 : {cityData.LIVE_PPLTN_STTS?.FEMALE_PPLTN_RATE}</p>
          <p>
            0-10세 실시간 인구 비율 :{cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_0}
          </p>
          <p>10대 : {cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_10}</p>
          <p>20대 : {cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_20}</p>
          <p>30대 : {cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_30}</p>
          <p>40대 : {cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_40}</p>
          <p>50대 : {cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_50}</p>
          <p>60대 : {cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_60}</p>
          <p>70대 : {cityData.LIVE_PPLTN_STTS?.PPLTN_RATE_70}</p>
          <br />
          <p>{cityData.ROAD_TRAFFIC_STTS?.ROAD_MSG}</p>
          <p>
            도로소통 평균 현황: {cityData.ROAD_TRAFFIC_STTS?.ROAD_TRAFFIC_IDX}
          </p>
          <p>
            도로소통 평균 속도 : {cityData.ROAD_TRAFFIC_STTS?.ROAD_TRAFFIC_SPD}
          </p>
          <br />
          <p>온도 : {cityData.WEATHER_STTS?.TEMP}</p>
          <p>체감온도 : {cityData.WEATHER_STTS?.SENSIBLE_TEMP}</p>
          <p>일 최고온도 : {cityData.WEATHER_STTS?.MAX_TEMP}</p>
          <p>일 최저온도 : {cityData.WEATHER_STTS?.MIN_TEMP}</p>
          <p>습도 : {cityData.WEATHER_STTS?.HUMIDITY}</p>
          <p>풍속 : {cityData.WEATHER_STTS?.WIND_SPD}</p>
          <br />
          <p>{cityData.WEATHER_STTS?.PCP_MSG}</p>
          <p>강수량 : {cityData.WEATHER_STTS?.PRECIPITATION}</p>
          <p>강수형태 : {cityData.WEATHER_STTS?.PRECPT_TYPE}</p>
          <p>일출시각 : {cityData.WEATHER_STTS?.SUNRISE}</p>
          <p>일몰시각 : {cityData.WEATHER_STTS?.SUNSET}</p>
          <br />
          <p>{cityData.WEATHER_STTS?.UV_MSG}</p>
          <p>자외선지수 단계 : {cityData.WEATHER_STTS?.UV_INDEX_LVL}</p>
          <p>자외선지수 : {cityData.WEATHER_STTS?.UV_INDEX}</p>
          <br />
          <p>{cityData.WEATHER_STTS?.AIR_MSG}</p>
          <p>통합대기환경등급 : {cityData.WEATHER_STTS?.AIR_IDX}</p>
          <p>초미세먼지지표 : {cityData.WEATHER_STTS?.PM25_INDEX}</p>
          <p>초미세먼지 : {cityData.WEATHER_STTS?.PM25}</p>
          <p>미세먼지지표 : {cityData.WEATHER_STTS?.PM10_INDEX}</p>
          <p>미세먼지농도 : {cityData.WEATHER_STTS?.PM10}</p>
        </section>
      ) : (
        <p>No arrivals found. Please search for a station.</p>
      )}
    </div>
  )
}
