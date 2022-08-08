import create from 'zustand'
import { PaletteMode } from '@mui/material'

interface globalState {
  mode: PaletteMode
  setMode: (_mode: PaletteMode) => void

  isLoading: boolean
  setIsLoading: (val: boolean) => void
}

const storeCommon = create<globalState>((set) => ({
  mode: 'dark' as PaletteMode,
  setMode: (_mode) => set((state) => ({ mode: _mode })),

  isLoading: false,
  setIsLoading: (_isLoading) => set((state) => ({ isLoading: _isLoading })),
}))

export default storeCommon
