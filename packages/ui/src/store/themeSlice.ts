import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import type { THEMES, VARIANTS } from '../themes/colors/constants';

export interface ThemeState {
  theme: (typeof THEMES)[number];
  variant: (typeof VARIANTS)[number];
}

// Read initial state from cookies
const initialTheme = (Cookies.get('theme') as ThemeState['theme']) || 'purple';
const initialVariant =
  (Cookies.get('variant') as ThemeState['variant']) || 'mantine';

const initialState: ThemeState = {
  theme: initialTheme,
  variant: initialVariant
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      Cookies.set('theme', action.payload);
    },
    setVariant: (state, action) => {
      state.variant = action.payload;
      Cookies.set('variant', action.payload);
    }
  }
});

export const { setTheme, setVariant } = themeSlice.actions;

export default themeSlice.reducer;
