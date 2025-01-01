import { create } from 'zustand'
import { getCityData, CityData } from '@/api/place'

interface PlaceState {
  searchQuery: string
  cityData: CityData | null
  setSearchQuery: (query: string) => void
  setCityData: (name: string) => Promise<void>
}

export const usePlaceStore = create<PlaceState>((set) => ({
  searchQuery: '',
  cityData: null,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCityData: async (name) => {
    if (!name.trim()) {
      set({ cityData: null })
      return
    }

    try {
      const data = await getCityData(name)
      set({ cityData: data })
    } catch (error) {
      set({ cityData: null })
      console.error('Error fetching city data:', error)
    }
  },
}))
