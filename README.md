# 🎵 RhythmCode: Strudel 3D Vibe Station 🌌

<p align="center">
  <img src="https://img.shields.io/badge/Vite-64748B?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Strudel.js-FF5733?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Strudel.js" />
  <img src="https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=opengl&logoColor=white" alt="WebGL" />
  <img src="https://img.shields.io/badge/State-Dynamic%20Audio-d946ef?style=for-the-badge" alt="Dynamic Audio" />
</p>

An interactive, local live-coding playground that binds a high-fidelity **Strudel JS audio synthesis engine** directly to a **WebGL 3D visualizer** crafted in **Three.js**. Experience music not just through your speakers, but through custom reactive 3D animations that dance dynamically to your code.

---

## ✨ Features

- **🎹 Live-Coded Soundscapes**: Powered by [Strudel.js](https://strudel.cc/), allowing you to write music using concise, patterns-based JavaScript.
- **🌀 Reactive WebGL Visualizer**: A beautiful 3D Torus Knot morphs, rotates, and shifts colors dynamically in real-time, responding to the frequencies and beats of the music.
- **🎛️ Glassmorphic Control Panel**: Modern, premium user interface with neon glowing accents, interactive wave badges, and simple controls (**Start Vibe** / **Hush**).
- **⚡ Hot Reloading Workflow**: Change the patterns in your code, save the file, and watch the visuals and audio update seamlessly in your browser.

---

## 🚀 Quick Start

Launch your personal Vibe Station locally in just a couple of steps.

### 1. Run the Dev Server
From the root of your project directory, launch the local server using Vite:

```bash
cd Strudel
npx -y vite --port 3000 --host
```

### 2. Open the App
Navigate to the following address in your web browser:
👉 **[http://localhost:3000](http://localhost:3000)**

### 3. Vibe!
- Click the **Start Vibe** button to initialize the audio context and kick off the synth and drum sequences.
- Enjoy the morphing, pulsing 3D Torus Knot as it reacts to the bass and melody.
- Click **Hush** to silence all sound and return the 3D model to its gentle idle rotation.

---

## 📂 Project Structure

```directory
RhythmCode/
└── Strudel/
    ├── JavaScript.js   # 🎵 Strudel audio patterns (Kick, hi-hats, bassline, synth riffs)
    ├── index.html       # 🎨 WebGL canvas, Three.js render loops, and Glassmorphic UI
    └── README.md        # 📖 Local project guide
```

---

## 🎼 Customizing the Beats

You can live-edit your music by modifying **[Strudel/JavaScript.js](file:///C:/Users/senpq/Projects/RhythmCode/Strudel/JavaScript.js)**. Simply change notes, tempo multipliers, instrument characteristics, or volume controls, save the file, and refresh the page to reload the patterns.

```javascript
// --- Strudel JS Snippet (JavaScript.js) ---
cpm(43) // Tempo (Cycles Per Minute)

stack(
    // 🥁 DRUMS: Four-on-the-floor kick & crisp claps
    sound("bd*4").gain(0.9),
    sound("~ cp ~ cp").gain(0.6).room(0.6),
    sound("hh*16").gain(0.2),

    // 🎸 BASSLINE: Pulsing 8th-note sawtooth bass
    note("<f2*8 c2*8 eb2*8 bb1*8>")
        .sound("sawtooth")
        .lpf(1200)
        .gain(0.5),

    // 🎹 MELODY: Iconic synth progression
    note("<[~ f4 ~ f4] [eb4 f4 g4 c4] [~ c5 ~ c5] [bb4 c5 g4 f4]>")
        .sound("square")
        .room(0.8)
        .gain(0.4)
)
```

### 🧠 Strudel cheatsheet:
| Operator | Function | Example |
| :--- | :--- | :--- |
| `cpm(n)` | Sets cycles per minute (tempo) | `cpm(43)` |
| `sound("name")` | Loads a sound sample pattern | `sound("bd*4")` |
| `note("notes")` | Plays pitch notes (`c4`, `eb4`, etc.) | `note("<c4 d4>")` |
| `.gain(val)` | Sets amplitude / volume (0 to 1) | `.gain(0.7)` |
| `.room(val)` | Adds reverb/room simulation | `.room(0.8)` |
| `.lpf(hz)` | Low-pass filter frequency cutoff | `.lpf(1000)` |

---

## 🎨 Creative Aesthetics

- **Color Scheme**: Cyberpunk-inspired neon pinks (`#d946ef`), electric blues (`#3b82f6`), deep obsidian background (`#050508`), and glowing visualizer lights.
- **Visual Mechanics**: Three.js standard material reacting dynamically to the frequency values fetched from the Strudel audio output, creating organic geometric expansion and contraction.
- **Glassmorphism**: Backdrop blur filters on cards to blend controls seamlessly with the real-time rendered 3D background.

---

<p align="center">Made with 💖 and 🎵 by the RhythmCode team</p>
