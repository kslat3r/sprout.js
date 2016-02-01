export const defaultState = {
  chorus: {
    rate: 1.5,
    feedback: 0.2,
    delay: 0.0045,
    bypass: true
  },
  delay: {
    feedback: 0.45,
    delayTime: 150,
    wetLevel: 0.25,
    dryLevel: 1,
    cutoff: 2000,
    bypass: true
  },
  phaser: {
    rate: 1.2,
    depth: 0.3,
    feedback: 0.2,
    stereoPhase: 30,
    baseModulationFrequency: 700,
    bypass: true
  },
  overdrive: {
    outputGain: 0.5,
    drive: 0.7,
    curveAmount: 1,
    algorithmIndex: 0,
    bypass: true
  },
  compressor: {
    threshold: 0.5,
    makeupGain: 1,
    attack: 1,
    release: 0,
    ratio: 4,
    knee: 5,
    automakeup: true,
    bypass: true
  },
  convolver: {
    highCut: 22050,
    lowCut: 20,
    dryLevel: 1,
    wetLevel: 1,
    level: 1,
    impulse: 'Block Inside.wav',
    bypass: true
  },
  filters: {
    bypass: true,
    items: [
      {
        frequency: 32,
        Q: 1,
        gain: 0,
        filterType: 'lowshelf',
        bypass: 0
      },
      {
        frequency: 64,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 125,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 250,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 500,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 1000,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 2000,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 4000,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 8000,
        Q: 1,
        gain: 0,
        filterType: 'peaking',
        bypass: 0
      },
      {
        frequency: 16000,
        Q: 1,
        gain: 0,
        filterType: 'highshelf',
        bypass: 0
      }
    ]
  },
  tremolo: {
    intensity: 0.3,
    rate: 4,
    stereoPhase: 0,
    bypass: true
  },
  wahWah: {
    automode: true,
    baseFrequency: 0.5,
    excursionOctaves: 2,
    sweep: 0.2,
    resonance: 10,
    sensitivity: 0.5,
    bypass: true
  },
  bitcrusher: {
    bits: 4,
    normfreq: 0.1,
    bufferSize: 4096,
    bypass: true
  },
  pingPongDelay: {
    wetLevel: 0.5,
    feedback: 0.3,
    delayTimeLeft: 150,
    delayTimeRight: 200,
    bypass: true
  }
};
