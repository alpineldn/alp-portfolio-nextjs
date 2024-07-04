import { create } from 'zustand';

interface States {
  firstVisit: boolean;
  pageName?: string;
}

interface Actions {
  setPageName: (pageName: string) => void;
  setFirstVisit: () => void;
}

export const useStore = create<States & Actions>((set) => ({
  firstVisit: true,
  pageName: undefined,
  setPageName: (pageName) => set(() => ({ pageName })),
  setFirstVisit: () => set(() => ({ firstVisit: false })),
}));
