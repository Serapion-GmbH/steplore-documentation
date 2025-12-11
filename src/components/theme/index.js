const baseTheme = {
  fonts: {
    mono: '"SF Mono", monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    main: '#e2e8f0',
    background: '#F8F9FA',
    heading: '#221F20',
    text: '#71717A',
    preFormattedText: '#e9eef2',
    link: '#5f8db2',
    hover: '#80b0ee',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    main: '#e2e8f0',
    background: '#001933',
    heading: '#638dc0',
    text: '#D1D5DB',
    preFormattedText: '#2D3748',
    link: '#3669a9',
    hover: '#618dc5',
  },
};

export { lightTheme, darkTheme };
