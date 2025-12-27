export interface ThemeColors {
  '--color-primary': string;
  '--color-primary-light': string;
  '--color-primary-dark': string;
  '--color-bg': string;
  '--color-card': string;
  '--color-text': string;
  '--color-text-secondary': string;
  '--color-border': string;
  '--color-pattern': string;
}

export interface Theme {
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  backgroundPattern: string;
}

// Helper to convert raw SVG string to a data URL more reliably than Base64
const svgToUrl = (svg: string) => {
    // Use `currentColor` in SVG definitions for strokes/fills to inherit color
    // INCREASED STROKE-WIDTH TO 14 FOR BOLDNESS
    const coloredSvg = svg.replace(/<svg/g, `<svg fill='none' stroke='currentColor' stroke-width='14'`);
    const optimizedSvg = coloredSvg
        .replace(/"/g, "'")
        .replace(/%/g, "%25")
        .replace(/#/g, "%23")
        .replace(/{/g, "%7B")
        .replace(/}/g, "%7D")
        .replace(/</g, "%3C")
        .replace(/>/g, "%3E")
        .replace(/\s+/g, ' ');
    return `url("data:image/svg+xml,${optimizedSvg}")`;
};

const defaultTheme: Theme = {
  colors: {
    light: {
      '--color-primary': '#00897B', '--color-primary-light': '#4DB6AC', '--color-primary-dark': '#00695C',
      '--color-bg': '#F0F4F8', '--color-card': '#FFFFFF', '--color-text': '#1A202C',
      '--color-text-secondary': '#4A5568', '--color-border': '#E2E8F0', '--color-pattern': 'rgba(0, 0, 0, 0.2)',
    },
    dark: {
      '--color-primary': '#4DB6AC', '--color-primary-light': '#80CBC4', '--color-primary-dark': '#00897B',
      '--color-bg': '#1A202C', '--color-card': '#2D3748', '--color-text': '#F7FAFC',
      '--color-text-secondary': '#A0AEC0', '--color-border': '#4A5568', '--color-pattern': 'rgba(255, 255, 255, 0.15)',
    }
  },
  backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100"/><path d="M10 10L90 90M10 90L90 10"/><circle cx="50" cy="50" r="20"/></svg>')
};


export const stateThemes: Record<string, Theme> = {
  'Default': defaultTheme,
  // Andaman & Nicobar - Coral Reefs (Bolder)
  'Andaman and Nicobar Islands': {
    colors: {
        light: { '--color-primary': '#0097A7', '--color-primary-light': '#26C6DA', '--color-primary-dark': '#00838F', '--color-bg': '#E0F7FA', '--color-card': '#FFFFFF', '--color-text': '#004D40', '--color-text-secondary': '#00796B', '--color-border': '#B2EBF2', '--color-pattern': 'rgba(0, 131, 143, 0.2)' },
        dark: { '--color-primary': '#4DD0E1', '--color-primary-light': '#80DEEA', '--color-primary-dark': '#00BCD4', '--color-bg': '#00363A', '--color-card': '#004F54', '--color-text': '#E0F7FA', '--color-text-secondary': '#B2EBF2', '--color-border': '#00838F', '--color-pattern': 'rgba(77, 208, 225, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M4 180C40 140 80 140 100 180C120 220 160 220 180 180"/><path d="M100 180V14M100 140L80 120M100 140L120 120"/><circle cx="40" cy="80" r="5" stroke-width="0" fill="currentColor"/><circle cx="140" cy="120" r="5" stroke-width="0" fill="currentColor"/></svg>')
  },
  // Kalamkari Peacock Motif (Bolder)
  'Andhra Pradesh': {
    colors: {
        light: { '--color-primary': '#795548', '--color-primary-light': '#A1887F', '--color-primary-dark': '#5D4037', '--color-bg': '#EFEBE9', '--color-card': '#FFFFFF', '--color-text': '#3E2723', '--color-text-secondary': '#6D4C41', '--color-border': '#D7CCC8', '--color-pattern': 'rgba(62, 39, 35, 0.2)' },
        dark: { '--color-primary': '#A1887F', '--color-primary-light': '#D7CCC8', '--color-primary-dark': '#8D6E63', '--color-bg': '#3E2723', '--color-card': '#4E342E', '--color-text': '#ECEFF1', '--color-text-secondary': '#B0BEC5', '--color-border': '#6D4C41', '--color-pattern': 'rgba(215, 204, 200, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M100,80 C160,60 160,140 100,160 C40,140 40,60 100,80Z"/><path d="M100,80 Q90,60,80,50 M100,80 Q110,60,116,50 M100,80 Q132,60,140,50"/></svg>')
  },
  // Apatani Textile Geometry (Bolder)
  'Arunachal Pradesh': {
    colors: {
        light: { '--color-primary': '#D32F2F', '--color-primary-light': '#EF5350', '--color-primary-dark': '#B71C1C', '--color-bg': '#FFEBEE', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFCDD2', '--color-pattern': 'rgba(183, 28, 28, 0.2)' },
        dark: { '--color-primary': '#EF5350', '--color-primary-light': '#E57373', '--color-primary-dark': '#D32F2F', '--color-bg': '#2C0B0A', '--color-card': '#5B1513', '--color-text': '#FFCDD2', '--color-text-secondary': '#E0E0E0', '--color-border': '#880E4F', '--color-pattern': 'rgba(239, 83, 80, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M0 10H60M0 30H60M0 50H60"/><path d="M10 0V30 M10 30L30 60 M30 0L50 30 M50 30V60"/></svg>')
  },
  // Assamese Gamosa Motif (Bolder)
  'Assam': {
    colors: {
        light: { '--color-primary': '#C2185B', '--color-primary-light': '#E91E63', '--color-primary-dark': '#AD1457', '--color-bg': '#FCE4EC', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#F8BBD0', '--color-pattern': 'rgba(173, 20, 87, 0.2)' },
        dark: { '--color-primary': '#F06292', '--color-primary-light': '#F48FB1', '--color-primary-dark': '#E91E63', '--color-bg': '#39061A', '--color-card': '#64102D', '--color-text': '#FCE4EC', '--color-text-secondary': '#E0E0E0', '--color-border': '#880E4F', '--color-pattern': 'rgba(240, 98, 146, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M20,20 L40,20 L40,40 L20,40Z"/><path d="M60,60 L80,60 L80,80 L60,80Z"/></svg>')
  },
  // Madhubani Fish Art (Bolder)
  'Bihar': {
    colors: {
        light: { '--color-primary': '#FF8F00', '--color-primary-light': '#FFB300', '--color-primary-dark': '#FF6F00', '--color-bg': '#FFF8E1', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFE0B2', '--color-pattern': 'rgba(255, 111, 0, 0.2)' },
        dark: { '--color-primary': '#FFC107', '--color-primary-light': '#FFD54F', '--color-primary-dark': '#FFB300', '--color-bg': '#3D2500', '--color-card': '#6A4100', '--color-text': '#FFF8E1', '--color-text-secondary': '#E0E0E0', '--color-border': '#E65100', '--color-pattern': 'rgba(255, 193, 7, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="150" height="150" xmlns="http://www.w3.org/2000/svg"><path d="M30 75C60 45 90 45 120 75C92 105 62 105 30 75"/><circle cx="112" cy="75" r="6" stroke-width="0" fill="currentColor"/><path d="M30 75L22 67 30 60M30 75L22 83 30 90"/></svg>')
  },
  // Chandigarh - Le Corbusier's 'Open Hand' (Bolder)
  'Chandigarh': {
    colors: {
        light: { '--color-primary': '#607D8B', '--color-primary-light': '#90A4AE', '--color-primary-dark': '#455A64', '--color-bg': '#ECEFF1', '--color-card': '#FFFFFF', '--color-text': '#263238', '--color-text-secondary': '#546E7A', '--color-border': '#CFD8DC', '--color-pattern': 'rgba(69, 90, 100, 0.2)' },
        dark: { '--color-primary': '#90A4AE', '--color-primary-light': '#B0BEC5', '--color-primary-dark': '#78909C', '--color-bg': '#263238', '--color-card': '#37474F', '--color-text': '#ECEFF1', '--color-text-secondary': '#B0BEC5', '--color-border': '#546E7A', '--color-pattern': 'rgba(144, 164, 174, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150"><path d="M75 20L75 130 M30 80L50 60 M50 60L80 60 M80 60L95 80 M95 80L65 95"/></svg>')
  },
  // Dhokra Art (Bolder)
  'Chhattisgarh': {
    colors: {
        light: { '--color-primary': '#4CAF50', '--color-primary-light': '#81C784', '--color-primary-dark': '#388E3C', '--color-bg': '#E8F5E9', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#C8E6C9', '--color-pattern': 'rgba(56, 142, 60, 0.2)' },
        dark: { '--color-primary': '#81C784', '--color-primary-light': '#A5D6A7', '--color-primary-dark': '#66BB6A', '--color-bg': '#1B311B', '--color-card': '#2E532F', '--color-text': '#E8F5E9', '--color-text-secondary': '#E0E0E0', '--color-border': '#1B5E20', '--color-pattern': 'rgba(129, 199, 132, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="150" height="150" xmlns="http://www.w3.org/2000/svg"><circle cx="75" cy="45" r="12"/><path d="M75 57V75 M60 85H75 M90 85H75 M68 100L75 95L82 100"/></svg>')
  },
  // Warli Art from Dadra and Nagar Haveli (Bolder)
  'Dadra and Nagar Haveli and Daman and Diu': {
    colors: {
      light: { '--color-primary': '#E53935', '--color-primary-light': '#EF5350', '--color-primary-dark': '#C62828', '--color-bg': '#FFEBEE', '--color-card': '#FFFFFF', '--color-text': '#3E2723', '--color-text-secondary': '#795548', '--color-border': '#FFCDD2', '--color-pattern': 'rgba(62, 39, 35, 0.2)' },
      dark: { '--color-primary': '#EF9A9A', '--color-primary-light': '#FFCDD2', '--color-primary-dark': '#E57373', '--color-bg': '#3E2723', '--color-card': '#5D4037', '--color-text': '#FFEBEE', '--color-text-secondary': '#D7CCC8', '--color-border': '#6D4C41', '--color-pattern': 'rgba(215, 204, 200, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><circle cx="40" cy="40" r="12"/><path d="M35 50L25 65 M35 50L45 65 M25 65L45 65"/><circle cx="120" cy="120" r="12"/><path d="M115 130L105 145 M115 130L125 145 M105 145L125 145"/></svg>')
  },
  // Delhi - Mughal Jaali (Bolder)
  'Delhi': {
    colors: {
        light: { '--color-primary': '#039BE5', '--color-primary-light': '#29B6F6', '--color-primary-dark': '#0277BD', '--color-bg': '#E1F5FE', '--color-card': '#FFFFFF', '--color-text': '#01579B', '--color-text-secondary': '#0288D1', '--color-border': '#B3E5FC', '--color-pattern': 'rgba(2, 119, 189, 0.2)' },
        dark: { '--color-primary': '#4FC3F7', '--color-primary-light': '#81D4FA', '--color-primary-dark': '#29B6F6', '--color-bg': '#014361', '--color-card': '#015C88', '--color-text': '#E1F5FE', '--color-text-secondary': '#B3E5FC', '--color-border': '#039BE5', '--color-pattern': 'rgba(79, 195, 247, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><g><path d="M0 40 H 80"/><path d="M40 0 V80"/><path d="M20 20 L60 60"/><path d="M60 20 L20 60"/></g></svg>')
  },
  // Goan Azulejo Tiles (Bolder)
  'Goa': {
    colors: {
        light: { '--color-primary': '#0097A7', '--color-primary-light': '#26C6DA', '--color-primary-dark': '#00796B', '--color-bg': '#E0F7FA', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#B2EBF2', '--color-pattern': 'rgba(0, 121, 107, 0.2)' },
        dark: { '--color-primary': '#4DD0E1', '--color-primary-light': '#80DEEA', '--color-primary-dark': '#00BCD4', '--color-bg': '#00363A', '--color-card': '#005F6B', '--color-text': '#E0F7FA', '--color-text-secondary': '#E0E0E0', '--color-border': '#006064', '--color-pattern': 'rgba(77, 208, 225, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke-width="0"><path d="M30 0L38 15L30 30L22 15Z"/><path d="M0 30L15 38 30 30 L17 22Z"/><path d="M60 30L45 38 30 30 L43 22Z"/><path d="M30 60L38 45 30 30 L22 45Z"/></svg>')
  },
  // Gujarati Bandhani (Bolder)
  'Gujarat': {
    colors: {
        light: { '--color-primary': '#E91E63', '--color-primary-light': '#F06292', '--color-primary-dark': '#C2185B', '--color-bg': '#FCE4EC', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#F8BBD0', '--color-pattern': 'rgba(194, 24, 91, 0.2)' },
        dark: { '--color-primary': '#F06292', '--color-primary-light': '#F48FB1', '--color-primary-dark': '#EC407A', '--color-bg': '#3F061F', '--color-card': '#6D1137', '--color-text': '#FCE4EC', '--color-text-secondary': '#E0E0E0', '--color-border': '#880E4F', '--color-pattern': 'rgba(240, 98, 146, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="14"/><circle cx="80" cy="60" r="12"/><circle cx="50" cy="90" r="14"/></svg>')
  },
  // Haryanvi Panja Durrie (Bolder)
  'Haryana': {
    colors: {
        light: { '--color-primary': '#7CB342', '--color-primary-light': '#9CCC65', '--color-primary-dark': '#689F38', '--color-bg': '#F1F8E9', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#DCEDC8', '--color-pattern': 'rgba(104, 159, 56, 0.2)' },
        dark: { '--color-primary': '#AED581', '--color-primary-light': '#C5E1A5', '--color-primary-dark': '#9CCC65', '--color-bg': '#192C0C', '--color-card': '#2E4B16', '--color-text': '#F1F8E9', '--color-text-secondary': '#E0E0E0', '--color-border': '#33691E', '--color-pattern': 'rgba(174, 213, 129, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M10 0V20 M30 0V20 M50 0V20 M10 40V60 M30 40V60 M50 40V60"/><path d="M0 10L20 15 M40 20L20 25 M0 30L20 35 M40 40L20 45 M0 50L20 55"/></svg>')
  },
  // Himachali Kullu Shawl (Bolder)
  'Himachal Pradesh': {
    colors: {
        light: { '--color-primary': '#039BE5', '--color-primary-light': '#29B6F6', '--color-primary-dark': '#0288D1', '--color-bg': '#E1F5FE', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#B3E5FC', '--color-pattern': 'rgba(2, 136, 209, 0.2)' },
        dark: { '--color-primary': '#4FC3F7', '--color-primary-light': '#81D4FA', '--color-primary-dark': '#29B6F6', '--color-bg': '#00314A', '--color-card': '#005E8A', '--color-text': '#E1F5FE', '--color-text-secondary': '#E0E0E0', '--color-border': '#01579B', '--color-pattern': 'rgba(79, 195, 247, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg"><path d="M20,20 L100,20 L100,40 L20,40 Z M20,80 L100,80 L100,100 L20,100 Z" stroke-width="0" fill="currentColor"/><path d="M40,50 L50,60 L40,70"/><path d="M80,50 L70,60 L70,60 L80,70"/></svg>')
  },
  // J&K - Paisley Shawl (Bolder)
  'Jammu and Kashmir': {
    colors: {
        light: { '--color-primary': '#C2185B', '--color-primary-light': '#D81B60', '--color-primary-dark': '#880E4F', '--color-bg': '#FCE4EC', '--color-card': '#FFFFFF', '--color-text': '#880E4F', '--color-text-secondary': '#AD1457', '--color-border': '#F48FB1', '--color-pattern': 'rgba(136, 14, 79, 0.2)' },
        dark: { '--color-primary': '#F48FB1', '--color-primary-light': '#F8BBD0', '--color-primary-dark': '#F06292', '--color-bg': '#560223', '--color-card': '#880E4F', '--color-text': '#FCE4EC', '--color-text-secondary': '#F8BBD0', '--color-border': '#AD1457', '--color-pattern': 'rgba(244, 143, 177, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><path d="M90 10C140 30 140 120 70 160 C20 120 40 40 90 10Z"/></svg>')
  },
  // Jharkhandi Sohrai (Bolder)
  'Jharkhand': {
    colors: {
        light: { '--color-primary': '#6D4C41', '--color-primary-light': '#8D6E63', '--color-primary-dark': '#4E342E', '--color-bg': '#EFEBE9', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#D7CCC8', '--color-pattern': 'rgba(78, 52, 46, 0.2)' },
        dark: { '--color-primary': '#A1887F', '--color-primary-light': '#BCAAA4', '--color-primary-dark': '#8D6E63', '--color-bg': '#2B1B14', '--color-card': '#4E342E', '--color-text': '#EFEBE9', '--color-text-secondary': '#E0E0E0', '--color-border': '#3E2723', '--color-pattern': 'rgba(161, 136, 127, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M0,10 C30,0 30,20 60,10 M0,30 C30,20 30,40 60,30 M0,50 C30,40 30,60 60,50"/></svg>')
  },
  // Karnataka Kasuti (Bolder)
  'Karnataka': {
    colors: {
        light: { '--color-primary': '#FFB300', '--color-primary-light': '#FFCA28', '--color-primary-dark': '#FF8F00', '--color-bg': '#FFF8E1', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFECB3', '--color-pattern': 'rgba(255, 143, 0, 0.2)' },
        dark: { '--color-primary': '#FFD54F', '--color-primary-light': '#FFE082', '--color-primary-dark': '#FFC107', '--color-bg': '#402C00', '--color-card': '#6D4B00', '--color-text': '#FFF8E1', '--color-text-secondary': '#E0E0E0', '--color-border': '#FF6F00', '--color-pattern': 'rgba(255, 213, 79, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M30 0L0 30L30 60L60 30Z M30 15L15 30L30 45L45 30Z"/></svg>')
  },
  // Keralan Kasavu Border (Bolder)
  'Kerala': {
    colors: {
        light: { '--color-primary': '#FBC02D', '--color-primary-light': '#FFD700', '--color-primary-dark': '#F9A825', '--color-bg': '#FFFDE7', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFF59D', '--color-pattern': 'rgba(249, 168, 37, 0.25)' },
        dark: { '--color-primary': '#FFEE58', '--color-primary-light': '#FFF176', '--color-primary-dark': '#FDD835', '--color-bg': '#3D3000', '--color-card': '#6A5500', '--color-text': '#FFFDE7', '--color-text-secondary': '#E0E0E0', '--color-border': '#8B4513', '--color-pattern': 'rgba(253, 216, 53, 0.2)' }
    },
    backgroundPattern: svgToUrl('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0,15 L100,15 M0,25 L100,25"/><path d="M0,75 L100,75 M0,85 L100,85"/></svg>')
  },
  // Ladakh - Buddhist Prayer Wheel (Bolder)
  'Ladakh': {
    colors: {
        light: { '--color-primary': '#D84315', '--color-primary-light': '#FF5722', '--color-primary-dark': '#BF360C', '--color-bg': '#FBE9E7', '--color-card': '#FFFFFF', '--color-text': '#3E2723', '--color-text-secondary': '#795548', '--color-border': '#FFCCBC', '--color-pattern': 'rgba(191, 54, 12, 0.2)' },
        dark: { '--color-primary': '#FF8A65', '--color-primary-light': '#FFAB91', '--color-primary-dark': '#FF5722', '--color-bg': '#3E2723', '--color-card': '#5D4037', '--color-text': '#FBE9E7', '--color-text-secondary': '#FFCCBC', '--color-border': '#795548', '--color-pattern': 'rgba(255, 138, 101, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150"><path d="M75 10L105 35 L90 65 L30 55 L35 25Z"/><circle cx="75" cy="75" r="25"/></svg>')
  },
  // Lakshadweep - Cowrie Shells (Bolder)
  'Lakshadweep': {
    colors: {
        light: { '--color-primary': '#03A9F4', '--color-primary-light': '#29B6F6', '--color-primary-dark': '#0288D1', '--color-bg': '#E1F5FE', '--color-card': '#FFFFFF', '--color-text': '#01579B', '--color-text-secondary': '#0288D1', '--color-border': '#B3E5FC', '--color-pattern': 'rgba(2, 136, 209, 0.2)' },
        dark: { '--color-primary': '#81D4FA', '--color-primary-light': '#B3E5FC', '--color-primary-dark': '#4FC3F7', '--color-bg': '#014361', '--color-card': '#015C88', '--color-text': '#E1F5FE', '--color-text-secondary': '#B3E5FC', '--color-border': '#0288D1', '--color-pattern': 'rgba(129, 212, 250, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M20 50C50 20 52 80 80 52"/></svg>')
  },
  // Gond Art (Bolder)
  'Madhya Pradesh': {
    colors: {
        light: { '--color-primary': '#FF9800', '--color-primary-light': '#FFB74D', '--color-primary-dark': '#FB8C00', '--color-bg': '#FFF3E0', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFE0B2', '--color-pattern': 'rgba(251, 140, 0, 0.2)' },
        dark: { '--color-primary': '#FFB74D', '--color-primary-light': '#FFCC80', '--color-primary-dark': '#FFA726', '--color-bg': '#3D1C00', '--color-card': '#6A3000', '--color-text': '#FFF3E0', '--color-text-secondary': '#E0E0E0', '--color-border': '#E65100', '--color-pattern': 'rgba(255, 183, 77, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="150" height="150" xmlns="http://www.w3.org/2000/svg"><path d="M75,30 C120,45 120,105 75,120 C30,105 30,45 75,30" stroke-dasharray="8 12"/><circle cx="75" cy="75" r="10"/></svg>')
  },
  // Maharashtrian Warli (Bolder)
  'Maharashtra': {
    colors: {
        light: { '--color-primary': '#FF5722', '--color-primary-light': '#FF7043', '--color-primary-dark': '#E64A19', '--color-bg': '#FBE9E7', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFCCBC', '--color-pattern': 'rgba(230, 74, 25, 0.2)' },
        dark: { '--color-primary': '#FF8A65', '--color-primary-light': '#FFAB91', '--color-primary-dark': '#FF7043', '--color-bg': '#3A1207', '--color-card': '#64200C', '--color-text': '#FBE9E7', '--color-text-secondary': '#E0E0E0', '--color-border': '#BF360C', '--color-pattern': 'rgba(255, 138, 101, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="12"/><path d="M4 45V80 M25 95L35 80L45 95 M25 120L35 105L45 120"/><circle cx="120" cy="120" r="12"/><path d="M120 125L25 120" stroke-dasharray="8 12"/><path d="M120 125V100 M105 95L115 80L125 95 M105 60L115 45L125 60"/></svg>')
  },
  // Manipuri Leirum Phee (Bolder)
  'Manipur': {
    colors: {
        light: { '--color-primary': '#673AB7', '--color-primary-light': '#9575CD', '--color-primary-dark': '#512DA8', '--color-bg': '#EDE7F6', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#D1C4E9', '--color-pattern': 'rgba(81, 45, 168, 0.2)' },
        dark: { '--color-primary': '#9575CD', '--color-primary-light': '#B39DDB', '--color-primary-dark': '#7E57C2', '--color-bg': '#190E3D', '--color-card': '#2C186B', '--color-text': '#EDE7F6', '--color-text-secondary': '#E0E0E0', '--color-border': '#311B92', '--color-pattern': 'rgba(149, 117, 205, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0 40H80M24 40L40 8L56 40Z"/></svg>')
  },
  // Meghalayan Eri Silk (Bolder)
  'Meghalaya': {
    colors: {
        light: { '--color-primary': '#2196F3', '--color-primary-light': '#64B5F6', '--color-primary-dark': '#1976D2', '--color-bg': '#E3F2FD', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#BBDEFB', '--color-pattern': 'rgba(25, 118, 210, 0.2)' },
        dark: { '--color-primary': '#64B5F6', '--color-primary-light': '#90CAF9', '--color-primary-dark': '#42A5F5', '--color-bg': '#0A2540', '--color-card': '#0D47A1', '--color-text': '#E3F2FD', '--color-text-secondary': '#E0E0E0', '--color-border': '#0D47A1', '--color-pattern': 'rgba(100, 181, 246, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M0 5h8m-4 4h8m-4 4h8m-4 4h8m-4 4h8"/><path d="M20 5h8m-4 4h8m-4 4h8m-4 4h8m-4 4h8"/></svg>')
  },
  // Mizo Puanchei (Bolder)
  'Mizoram': {
    colors: {
        light: { '--color-primary': '#D81B60', '--color-primary-light': '#F06292', '--color-primary-dark': '#AD1457', '--color-bg': '#FCE4EC', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#F8BBD0', '--color-pattern': 'rgba(173, 20, 87, 0.2)' },
        dark: { '--color-primary': '#F06292', '--color-primary-light': '#F48FB1', '--color-primary-dark': '#E91E63', '--color-bg': '#39061A', '--color-card': '#64102D', '--color-text': '#FCE4EC', '--color-text-secondary': '#E0E0E0', '--color-border': '#880E4F', '--color-pattern': 'rgba(240, 98, 146, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg"><path d="M0 5H60M0 15H60M0 25H60M0 35H60M0 45H60M0 55H60"/></svg>')
  },
  // Naga Shawl Spear (Bolder)
  'Nagaland': {
    colors: {
        light: { '--color-primary': '#C62828', '--color-primary-light': '#E53935', '--color-primary-dark': '#B71C1C', '--color-bg': '#FFEBEE', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFCDD2', '--color-pattern': 'rgba(183, 28, 28, 0.2)' },
        dark: { '--color-primary': '#EF5350', '--color-primary-light': '#E57373', '--color-primary-dark': '#D32F2F', '--color-bg': '#2F0909', '--color-card': '#5A1212', '--color-text': '#FFEBEE', '--color-text-secondary': '#E0E0E0', '--color-border': '#8B0000', '--color-pattern': 'rgba(239, 83, 80, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" stroke-width="0" fill="currentColor"><path d="M15 5L10 55L20 55Z"/><path d="M45 5L35 55L55 55Z"/><path d="M15 5L15 0 M45 5L45 0" stroke="currentColor"/></svg>')
  },
  // Odia Pattachitra (Bolder)
  'Odisha': {
    colors: {
        light: { '--color-primary': '#8E24AA', '--color-primary-light': '#AB47BC', '--color-primary-dark': '#6A1B9A', '--color-bg': '#F3E5F5', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#E1BEE7', '--color-pattern': 'rgba(106, 27, 154, 0.2)' },
        dark: { '--color-primary': '#BA68C8', '--color-primary-light': '#CE93D8', '--color-primary-dark': '#AB47BC', '--color-bg': '#2C0A4C', '--color-card': '#4A148C', '--color-text': '#F3E5F5', '--color-text-secondary': '#E0E0E0', '--color-border': '#6A1B9A', '--color-pattern': 'rgba(186, 104, 200, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg width="120" height="120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="40"/><path d="M60,20 A90,40 0 0 1 60,100 A90,40 0 0 1 60,20Z"/></svg>')
  },
  // Puducherry - French Quarter Colors (Bolder)
  'Puducherry': {
    colors: {
        light: { '--color-primary': '#FFC107', '--color-primary-light': '#FFD54F', '--color-primary-dark': '#FFA000', '--color-bg': '#FFF8E1', '--color-card': '#FFFFFF', '--color-text': '#424242', '--color-text-secondary': '#757575', '--color-border': '#FFECB3', '--color-pattern': 'rgba(255, 160, 0, 0.2)' },
        dark: { '--color-primary': '#FFD54F', '--color-primary-light': '#FFE082', '--color-primary-dark': '#FFC107', '--color-bg': '#423A20', '--color-card': '#5C522E', '--color-text': '#FFF8E1', '--color-text-secondary': '#FFECB3', '--color-border': '#FFA000', '--color-pattern': 'rgba(255, 213, 79, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><path d="M0 20L120 20M0 100L120 100M60 0L60 120"/><path d="M30 70L60 50L80 70Z"/></svg>')
  },
  // Punjabi Phulkari (Bolder)
  'Punjab': {
    colors: {
        light: { '--color-primary': '#F57C00', '--color-primary-light': '#FF9800', '--color-primary-dark': '#EF6C00', '--color-bg': '#FFF3E0', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFE0B2', '--color-pattern': 'rgba(239, 108, 0, 0.2)' },
        dark: { '--color-primary': '#FFB74D', '--color-primary-light': '#FFD54F', '--color-primary-dark': '#FFA726', '--color-bg': '#4E342E', '--color-card': '#6D4C41', '--color-text': '#FFF3E0', '--color-text-secondary': '#FFE0B2', '--color-border': '#FF9800', '--color-pattern': 'rgba(255, 183, 77, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><g stroke-width="0" fill="currentColor"><path d="M50 0L60 20L80 20L65 35L70 55L50 45L30 55L35 35L20 20L40 20Z"/><path d="M90 60L80 80L60 80L75 65L70 45L90 55L110 45L105 65L120 80L100 80Z"/></g></svg>')
  },
  // Rajasthani Leheriya (Bolder)
  'Rajasthan': {
    colors: {
        light: { '--color-primary': '#9C27B0', '--color-primary-light': '#BA68C8', '--color-primary-dark': '#7B1FA2', '--color-bg': '#F3E5F5', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#E1BEE7', '--color-pattern': 'rgba(123, 31, 162, 0.2)' },
        dark: { '--color-primary': '#BA68C8', '--color-primary-light': '#CE93D8', '--color-primary-dark': '#AB47BC', '--color-bg': '#2E0A59', '--color-card': '#4A148C', '--color-text': '#F3E5F5', '--color-text-secondary': '#E1BEE7', '--color-border': '#6A1B9A', '--color-pattern': 'rgba(186, 104, 200, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><g><path d="M-20 80L80 -20"/><path d="M0 80L80 0"/><path d="M20 80L80 20"/><path d="M40 80L80 40"/><path d="M60 80L80 60"/></g></svg>')
  },
  // Sikkim - Buddhist Motifs (Bolder)
  'Sikkim': {
    colors: {
        light: { '--color-primary': '#E65100', '--color-primary-light': '#FB8C00', '--color-primary-dark': '#D84315', '--color-bg': '#FFF3E0', '--color-card': '#FFFFFF', '--color-text': '#4E342E', '--color-text-secondary': '#795548', '--color-border': '#FFE0B2', '--color-pattern': 'rgba(216, 67, 21, 0.2)' },
        dark: { '--color-primary': '#FFB74D', '--color-primary-light': '#FFCC80', '--color-primary-dark': '#FFA726', '--color-bg': '#4E342E', '--color-card': '#6D4C41', '--color-text': '#FFF3E0', '--color-text-secondary': '#FFE0B2', '--color-border': '#8D6E63', '--color-pattern': 'rgba(255, 183, 77, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><path d="M60 0C60 60 0 60 60 120S60 60 120 60Z"/></svg>')
  },
  // Tamil Nadu - Kanchipuram Temple Border (Bolder)
  'Tamil Nadu': {
    colors: {
        light: { '--color-primary': '#E53935', '--color-primary-light': '#EF5350', '--color-primary-dark': '#C62828', '--color-bg': '#FFEBEE', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#FFCDD2', '--color-pattern': 'rgba(198, 40, 40, 0.2)' },
        dark: { '--color-primary': '#EF9A9A', '--color-primary-light': '#FFCDD2', '--color-primary-dark': '#E57373', '--color-bg': '#4E0A0A', '--color-card': '#B71C1C', '--color-text': '#FFEBEE', '--color-text-secondary': '#FFCDD2', '--color-border': '#D32F2F', '--color-pattern': 'rgba(239, 154, 154, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M0 0H100V15H0Z M0 85H100V100H0Z" stroke-width="0" fill="currentColor"/><path d="M30 15L35 30L45 30L40 15Z M60 15L35 30L85 30L60 15Z"/></svg>')
  },
  // Telangana - Pochampally Ikat (Bolder)
  'Telangana': {
    colors: {
        light: { '--color-primary': '#AD1457', '--color-primary-light': '#D81B60', '--color-primary-dark': '#880E4F', '--color-bg': '#FCE4EC', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#F8BBD0', '--color-pattern': 'rgba(136, 14, 79, 0.2)' },
        dark: { '--color-primary': '#F06292', '--color-primary-light': '#F48FB1', '--color-primary-dark': '#E91E63', '--color-bg': '#500228', '--color-card': '#880E4F', '--color-text': '#FCE4EC', '--color-text-secondary': '#F48FB1', '--color-border': '#C2185B', '--color-pattern': 'rgba(240, 98, 146, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><path d="M0 20L20 0L40 20L20 40L0 20Z M40 20L20 40L0 60L20 80L40 60L60 80L80 60L60 40L40 20Z"/></svg>')
  },
  // Tripura - Risa Textile (Bolder)
  'Tripura': {
    colors: {
        light: { '--color-primary': '#00897B', '--color-primary-light': '#26A69A', '--color-primary-dark': '#00695C', '--color-bg': '#E0F2F1', '--color-card': '#FFFFFF', '--color-text': '#212121', '--color-text-secondary': '#757575', '--color-border': '#B2DFDB', '--color-pattern': 'rgba(0, 105, 92, 0.2)' },
        dark: { '--color-primary': '#26A69A', '--color-primary-light': '#4DB6AC', '--color-primary-dark': '#00897B', '--color-bg': '#003830', '--color-card': '#004D40', '--color-text': '#E0F2F1', '--color-text-secondary': '#B2DFDB', '--color-border': '#00695C', '--color-pattern': 'rgba(38, 166, 154, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><path d="M0 0L80 80M80 0L0 80"/><path d="M40 0L80 40L40 80L0 40Z"/></svg>')
  },
  // Uttar Pradesh - Chikankari (Bolder)
  'Uttar Pradesh': {
    colors: {
        light: { '--color-primary': '#3949AB', '--color-primary-light': '#5C6BC0', '--color-primary-dark': '#303F9F', '--color-bg': '#E8EAF6', '--color-card': '#FFFFFF', '--color-text': '#1A237E', '--color-text-secondary': '#3F51B5', '--color-border': '#C5CAE9', '--color-pattern': 'rgba(48, 63, 159, 0.2)' },
        dark: { '--color-primary': '#9FA8DA', '--color-primary-light': '#C5CAE9', '--color-primary-dark': '#7986CB', '--color-bg': '#1A237E', '--color-card': '#283593', '--color-text': '#E8EAF6', '--color-text-secondary': '#C5CAE9', '--color-border': '#3F51B5', '--color-pattern': 'rgba(159, 168, 218, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><path d="M60 10C70 40 100 40 100 60C100 80 70 80 60 110C50 80 20 80 20 60C20 40 50 40 60 10Z"/></svg>')
  },
  // Uttarakhand - Aipan (Bolder)
  'Uttarakhand': {
    colors: {
        light: { '--color-primary': '#C62828', '--color-primary-light': '#E53935', '--color-primary-dark': '#B71C1C', '--color-bg': '#FFEBEE', '--color-card': '#FFFFFF', '--color-text': '#3E2723', '--color-text-secondary': '#795548', '--color-border': '#FFCDD2', '--color-pattern': 'rgba(183, 28, 28, 0.2)' },
        dark: { '--color-primary': '#EF9A9A', '--color-primary-light': '#FFCDD2', '--color-primary-dark': '#E57373', '--color-bg': '#3E2723', '--color-card': '#5D4037', '--color-text': '#FFEBEE', '--color-text-secondary': '#FFCDD2', '--color-border': '#8D6E63', '--color-pattern': 'rgba(239, 154, 154, 0.15)' }
    },
    backgroundPattern: svgToUrl('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="50" cy="50" r="40"/><circle cx="50" cy="50" r="25" fill="currentColor" stroke-width="0"/><circle cx="50" cy="10" r="10" fill="currentColor" stroke-width="0"/><circle cx="10" cy="50" r="10" fill="currentColor" stroke-width="0"/><circle cx="90" cy="50" r="10" fill="currentColor" stroke-width="0"/><circle cx="50" cy="90" r="10" fill="currentColor" stroke-width="0"/></svg>')
  },
  // West Bengal - Kantha Stitch (Bolder)
  'West Bengal': {
    colors: {
        light: { '--color-primary': '#E53935', '--color-primary-light': '#EF5350', '--color-primary-dark': '#C62828', '--color-bg': '#FEF2F2', '--color-card': '#FFFFFF', '--color-text': '#1F2937', '--color-text-secondary': '#4B5563', '--color-border': '#FECACA', '--color-pattern': 'rgba(198, 40, 40, 0.25)' },
        dark: { '--color-primary': '#F87171', '--color-primary-light': '#FCA5A5', '--color-primary-dark': '#EF4444', '--color-bg': '#450A0A', '--color-card': '#7F1D1D', '--color-text': '#FEF2F2', '--color-text-secondary': '#FECACA', '--color-border': '#B91C1C', '--color-pattern': 'rgba(248, 113, 113, 0.2)' }
    },
    backgroundPattern: svgToUrl('<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"><path d="M0-5 80 15 M-5 15 80 35 M-5 35 80 55 M-5 55 80 75" stroke-dasharray="10 12"/></svg>')
  }
};