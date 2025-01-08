export type ThemeMode = 'light' | 'dim' | 'dark';

export type Theme = {
  name: string;
  background: Record<ThemeMode, string>;
  text: Record<ThemeMode, string>;
  primary: Record<ThemeMode, string>;
  secondary: Record<ThemeMode, string>;
  accent: Record<ThemeMode, string>;
}

export const themes: Theme[] = [
  {
    name: 'Ocean',
    background: {
      light: 'bg-[#F0F8FF]',
      dim: 'bg-[#1A2A3A]',
      dark: 'bg-[#0A1A2F]',
    },
    text: {
      light: 'text-[#1A1A1A]',
      dim: 'text-[#E0E0E0]',
      dark: 'text-[#FFFFFF]',
    },
    primary: {
      light: 'bg-[#E1EFFF]',
      dim: 'bg-[#2C3E50]',
      dark: 'bg-[#172A46]',
    },
    secondary: {
      light: 'bg-[#B7DBFF]',
      dim: 'bg-[#34495E]',
      dark: 'bg-[#1F3A5F]',
    },
    accent: {
      light: 'bg-[#4A90E2]',
      dim: 'bg-[#3498DB]',
      dark: 'bg-[#5DADE2]',
    },
  },
  {
    name: 'Sunset',
    background: {
      light: 'bg-[#FFF5E6]',
      dim: 'bg-[#3D2B1F]',
      dark: 'bg-[#1F1209]',
    },
    text: {
      light: 'text-[#1A1A1A]',
      dim: 'text-[#E0E0E0]',
      dark: 'text-[#FFFFFF]',
    },
    primary: {
      light: 'bg-[#FFE0B2]',
      dim: 'bg-[#5D4037]',
      dark: 'bg-[#3E2723]',
    },
    secondary: {
      light: 'bg-[#FFCC80]',
      dim: 'bg-[#795548]',
      dark: 'bg-[#4E342E]',
    },
    accent: {
      light: 'bg-[#FF9800]',
      dim: 'bg-[#F57C00]',
      dark: 'bg-[#FF5722]',
    },
  },
  {
    name: 'Forest',
    background: {
      light: 'bg-[#F1F8E9]',
      dim: 'bg-[#2C3E50]',
      dark: 'bg-[#1A2620]',
    },
    text: {
      light: 'text-[#1A1A1A]',
      dim: 'text-[#E0E0E0]',
      dark: 'text-[#FFFFFF]',
    },
    primary: {
      light: 'bg-[#DCEDC8]',
      dim: 'bg-[#4CAF50]',
      dark: 'bg-[#2E7D32]',
    },
    secondary: {
      light: 'bg-[#C5E1A5]',
      dim: 'bg-[#66BB6A]',
      dark: 'bg-[#388E3C]',
    },
    accent: {
      light: 'bg-[#8BC34A]',
      dim: 'bg-[#4CAF50]',
      dark: 'bg-[#43A047]',
    },
  },
]

export type FontSize = 'small' | 'medium' | 'large';

export const fontSizes: Record<FontSize, string> = {
  small: 'text-sm',
  medium: 'text-base',
  large: 'text-lg',
};

