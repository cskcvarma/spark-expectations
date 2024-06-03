import { create } from 'zustand';

interface RepoState {
  selectedRepo: Repo | null;
  selectRepo: (repo: Repo) => void;
}

export const useRepoStore = create<RepoState>((set) => ({
  selectedRepo: null,
  selectRepo: (repo: Repo) => set(() => ({ selectedRepo: repo })),
}));
