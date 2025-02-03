import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { User } from '../types';
import { authService } from '@/services/authService';

export const userAtom = atomWithStorage<User | null>('user', null);

export const loginAtom = atom(
  null,
  async (get, set, { email, password }: { email: string; password: string }) => {
    try {
      const response = await authService.login(email, password);
      const { user, token } = response.data;
      
      localStorage.setItem('token', token);
      set(userAtom, user);
      
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
    localStorage.removeItem('token');
    set(userAtom, null);
  }
);

export const isAuthenticatedAtom = atom((get) => get(userAtom) !== null);