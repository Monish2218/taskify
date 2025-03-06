import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { User } from '../types';
import { authService } from '@/services/authService';

export const authAtom = atomWithStorage<{
  token: string | null;
  user: User | null;
}>('auth', { token: null, user: null });

export const loginAtom = atom(
  null,
  async (get, set, { email, password }: { email: string; password: string }) => {
    try {
      const response = await authService.login(email, password);
      const { user, token } = response.data;
      
      set(authAtom, {token: token, user: user});
      return user;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }
);

export const logoutAtom = atom(
  null,
  (get, set) => {
    set(authAtom, { token: null, user: null });
    window.location.href = '/login';
  }
);

export const isAuthenticatedAtom = atom((get) => get(authAtom).user !== null);