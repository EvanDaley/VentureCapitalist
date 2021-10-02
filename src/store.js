import create from 'zustand'

const useStore = create(set => ({
  videoPaths: [
    '/video/blue_hex.mp4',
    '/video/red_hex.mp4',
    // '/video/hex_hdri.mp4',
  ],
  videoIndex: 0,
  switchVideos: () => set(state => ({ 
    videoIndex: ((state.videoIndex + 1) % (state.videoPaths.length)) 
  })),

  sceneIndex: 0,
  selectScene0: () => set(() => {
    return { sceneIndex: 0 }
  }),
  selectScene1: () => set(() => ({ sceneIndex: 1 })),
  selectScene2: () => set(() => ({ sceneIndex: 2 })),
  selectScene3: () => set(() => ({ sceneIndex: 3 })),
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useStore