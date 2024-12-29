'use client'

import { usePlaceStore } from '@/store/placeStore'

export default function SearchPlaceInfo() {
  const { searchQuery, arrivalList, setSearchQuery, loadArrivalList } =
    usePlaceStore()

  const handleSearch = async () => {
    await loadArrivalList(searchQuery)
  }

  const handleKeyDown = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      await loadArrivalList(searchQuery)
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
      {arrivalList.length === 0 ? (
        <p>No arrivals found. Please search for a station.</p>
      ) : (
        <ul>
          {arrivalList.map((item, index) => (
            <li key={index}>
              {item.trainLineNm}: {item.arvlMsg2}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
