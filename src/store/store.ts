import { create } from 'zustand';

interface States {
  showMenuButton: boolean;
  firstVisit: boolean;
  pageName?: string;
}

interface Actions {
  setPageName: (pageName?: string) => void;
  setFirstVisit: () => void;
  setShowMenuButton: (showMenuButton: boolean) => void;
}

export const useStore = create<States & Actions>((set) => ({
  showMenuButton: true,
  firstVisit: true,
  pageName: undefined,
  setPageName: (pageName) => set(() => ({ pageName })),
  setFirstVisit: () => set(() => ({ firstVisit: false })),
  setShowMenuButton: (showMenuButton) => set(() => ({ showMenuButton })),
}));
