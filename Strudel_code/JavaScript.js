// Set the tempo to match the fast, driving feel of the song (approx 171 BPM)
cpm(43)

stack(
    // --- DRUMS ---
    // Four-on-the-floor kick drum
    sound("bd*4").gain(0.9),
    // Crisp claps/snares on beats 2 and 4 with heavy 80s reverb
    sound("~ cp ~ cp").gain(0.6).room(0.6),
    // Driving, fast 16th-note hi-hats
    sound("hh*16").gain(0.2),

    // --- BASSLINE ---
    // Pulsing 8th-note synth bass moving through the chord progression: Fm, Cm, Eb, Bb
    note("<f2*8 c2*8 eb2*8 bb1*8>")
        .sound("sawtooth")
        .lpf(1200) // Low-pass filter to make it sound deep and retro
        .gain(0.5),

    // --- MELODY ---
    // The iconic synth riff
    note("<[~ f4 ~ f4] [eb4 f4 g4 c4] [~ c5 ~ c5] [bb4 c5 g4 f4]>")
        .sound("square")
        .room(0.8) // High reverb to sound huge
        .gain(0.4)
)