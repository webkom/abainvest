// Define the structure of your design tokens
export const tokens = {
  colors: {
    bg: {
      page: 'var(--bg-page)',
      surface: 'var(--bg-surface)',
      surfaceHover: 'var(--bg-surface-hover)',
    },
    text: {
      primary: 'var(--text-primary)',
      secondary: 'var(--text-secondary)',
      inverse: 'var(--text-inverse)',
    },
    accent: {
      default: 'var(--accent-default)',
      hover: 'var(--accent-hover)',
      muted: 'var(--accent-muted)',
    },
    border: {
      subtle: 'var(--border-subtle)',
      strong: 'var(--border-strong)',
    },
  },
} as const;

export type ThemeTokens = typeof tokens;
