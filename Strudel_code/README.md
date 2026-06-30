# 🎵 Strudel 3D Vibe Station

An interactive local music live-coding playground that pairs a **Strudel JS audio engine** with a real-time **WebGL 3D visualizer** built using Three.js.

## 🚀 How to Run Locally

You can launch and run this music station directly from your terminal.

1. **Start the local server**:
   If the server is not already running, execute the following command in your project directory:
   ```bash
   npx -y vite --port 3000 --host
   ```
2. **Access the application**:
   Open your browser and navigate to:
   👉 **[http://localhost:3000](http://localhost:3000)**

3. **Enjoy the Vibes**:
   * Click **Start Vibe** to trigger the Web Audio context and start playing the synthesized tracks.
   * Watch the floating **3D Torus Knot** morph, shift colors, and dance dynamically to the simulated frequency wave beats!
   * Click **Hush** to stop all playback and return the 3D model to its slow, peaceful idle state.

---

## 📂 Project Structure

*   **[JavaScript.js](file:///c:/Users/senpq/Projects/code_Strudel/JavaScript.js)**: Contains the Strudel music composition (drums, synth bassline, and lead melody). Edit this file to change your music.
*   **[index.html](file:///c:/Users/senpq/Projects/code_Strudel/index.html)**: The frontend player containing the Three.js WebGL 3D render loop, layout styles, and the Strudel runtime integration.

---

## 🎹 Customizing the Music

You can live-edit the soundscape by modifying **[JavaScript.js](file:///c:/Users/senpq/Projects/code_Strudel/JavaScript.js)**. Simply change notes, tempos, or gains, save the file, and refresh the browser (or click Play again) to reload the updated patterns.

### Quick Strudel Reference
*   `cpm(43)`: Sets the cycles per minute (tempo control).
*   `sound("bd*4")`: Triggers a kick drum 4 times per cycle.
*   `note("<f2*8 c2*8>")`: Sequences synth note pitches.
*   `.gain(value)`: Adjusts volume levels (0 to 1).
*   `.room(value)`: Sets reverb room space size (0 to 1).
*   `.lpf(hz)`: Applies a low-pass filter to warm up the sound.
