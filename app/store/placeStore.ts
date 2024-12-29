import { create } from 'zustand'
import { fetchArrivalList } from '@/api/place'

interface ArrivalItem {
  trainLineNm: string
  arvlMsg2: string
}

interface PlaceState {
  searchQuery: string
  arrivalList: ArrivalItem[]
  setSearchQuery: (query: string) => void
  loadArrivalList: (name: string) => Promise<void>
}

export const usePlaceStore = create<PlaceState>((set) => ({
  searchQuery: '',
  arrivalList: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  loadArrivalList: async (name) => {
    if (!name.trim()) {
      set({ arrivalList: [] })
      return
    }

    try {
      const data = await fetchArrivalList(name)
      set({ arrivalList: data })
    } catch (error) {
      console.error('Failed to load arrival list:', error)
      set({ arrivalList: [] })
    }
  },
}))
