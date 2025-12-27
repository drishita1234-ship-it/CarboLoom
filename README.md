# CarboLoom 🌿

**CarboLoom** is a gamified sustainability web application designed for young people in India to track, reduce, and gamify their carbon footprint. By combining granular daily logging with hyper-local data and Google Gemini AI, CarboLoom transforms climate action into a rewarding and culturally resonant experience.

## 🚀 Key Features

- **🤖 AI Eco-Coach:** Get personalized, hyper-local "Eco-Swaps" and carbon savings predictions powered by **Gemini 2.5 Flash**.
- **📊 Comprehensive Tracking:** Log emissions across five core categories:
  - **Travel:** Mode-specific calculations (Metro, Auto-Rickshaw, Bus, etc.).
  - **Diet:** Impact analysis of Red Meat vs. Plant-based proteins.
  - **Shopping:** Materials-based footprint for clothing and footwear.
  - **Electronics:** Lifecycle estimates for devices.
  - **Home Appliances:** Usage tracking based on energy ratings and regional grid factors.
- **🎮 Gamification Engine:** Stay motivated with daily streaks, custom challenges, points, and a collection of unique badges (e.g., "Commuter Hero", "Eco Starter").
- **🇮🇳 India-Specific Precision:** 
  - Automatically fetches **state-level grid emission factors** for more accurate home energy calculations.
  - Provides hyper-local environmental reports and sustainability news using **Google Search grounding**.
- **🎨 Dynamic State Theming:** A unique UI experience with colors and SVG patterns inspired by the cultural heritage and textiles of individual Indian states (e.g., *Madhubani* for Bihar, *Kasuti* for Karnataka, *Bandhani* for Gujarat).
- **🧠 Learn Hub:** Real-time sustainability news, interactive quizzes with progress saving, and a standalone CO₂ travel calculator for planning trips.

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript
- **Styling:** Tailwind CSS (with custom semantic theming engine)
- **Intelligence:** Google Gemini API (Generative AI & Search Grounding)
- **Data Visualization:** Recharts (Progress trends and footprint breakdowns)
- **Icons:** Custom SVG Icon system
- **State Management:** React Hooks (useState, useMemo, useEffect) with LocalStorage persistence

## 📂 Project Structure

- `index.tsx`: Application entry point and Authentication wrapper.
- `App.tsx`: Main layout and routing logic.
- `types.ts`: Centralized TypeScript interfaces and enums.
- `constants.ts`: Emission factors and static data (Shopping, Electronics, Appliances).
- `services/`:
  - `geminiService.ts`: Integration with Google Gemini API for suggestions, news, and reports.
  - `authService.ts`: User registration, login, and log persistence.
  - `gamificationService.ts`: Logic for points, badges, and challenge tracking.
- `themes/`:
  - `stateThemes.ts`: Cultural motif-based UI configurations for all 36 Indian States/UTs.
- `components/`: Modular UI components for Dashboard, Forms, Quizzes, and Icons.

## ⚙️ Setup & Requirements

1. **API Key:** The application requires a Google Gemini API key.
2. **Permissions:** The app requests `geolocation` for providing location-aware environmental data.
3. **Installation:**
   ```bash
   npm install
   npm start
   ```

## 🌍 Environmental Impact

CarboLoom is built on the philosophy that local action leads to global change. By providing users with data that feels relevant to their specific city and state, we bridge the gap between abstract climate science and daily habits.

---
*Weave a greener future, one habit at a time.*
