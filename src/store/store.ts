import { create } from 'zustand';

interface States {
  pageName?: string;
}

interface Actions {
  setPageName: (pageName: string) => void;
}

export const useStore = create<States & Actions>((set) => ({
  pageName: undefined,
  setPageName: (pageName) => set(() => ({ pageName })),
}));
