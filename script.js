// ===== DATA =====
const meditationCategories = {
    mindfulness: {
        name: 'Mindfulness',
        icon: '🎯',
        sessions: [
            {
                id: 'mf1',
                title: 'Morning Mindfulness',
                duration: 5,
                description: 'Start your day with clarity and intention',
                guidance: [
                    'Settle into a comfortable position. Let your shoulders drop.',
                    'Close your eyes gently and take three deep breaths.',
                    'Notice the sensations in your body without judgment.',
                    'Bring awareness to the present moment.',
                    'Feel the calm washing over you.'
                ]
            },
            {
                id: 'mf2',
                title: 'Body Awareness',
                duration: 10,
                description: 'Develop awareness of your physical presence',
                guidance: [
                    'Begin by feeling your feet on the ground.',
                    'Notice the weight of your body in the seat.',
                    'Scan awareness up through your legs.',
                    'Feel the sensations in your torso and arms.',
                    'Let mind and body come into harmony.'
                ]
            }
        ]
    },
    sleep: {
        name: 'Sleep',
        icon: '😴',
        sessions: [
            {
                id: 'sl1',
                title: 'Bedtime Relaxation',
                duration: 10,
                description: 'Prepare your mind and body for restful sleep',
                guidance: [
                    'Let your body become heavy and comfortable.',
                    'Release any tension from your day.',
                    'Allow your breathing to become slow and natural.',
                    'With each breath, let go a little more.',
                    'Drift toward peaceful sleep.'
                ]
            },
            {
                id: 'sl2',
                title: 'Deep Sleep Induction',
                duration: 20,
                description: 'Journey toward deep, restorative sleep',
                guidance: [
                    'Imagine yourself in a peaceful place.',
                    'Feel the safety and comfort around you.',
                    'Let sleep come naturally and gently.',
                    'Your body knows how to rest.',
                    'Sleep now claims your consciousness.'
                ]
            }
        ]
    },
    anxiety: {
        name: 'Breathing',
        icon: '🌬️',
        sessions: [
            {
                id: 'an1',
                title: 'Calming Breath',
                duration: 5,
                description: 'Reduce stress with simple breathing techniques',
                guidance: [
                    'Breathe in slowly for a count of four.',
                    'Hold for a count of four.',
                    'Breathe out slowly for a count of four.',
                    'Feel the calm with each cycle.',
                    'Your breath is your anchor.'
                ]
            },
            {
                id: 'an2',
                title: 'Anxiety Release',
                duration: 15,
                description: 'Release anxiety and find inner peace',
                guidance: [
                    'Let your breathing be natural and easy.',
                    'With each exhale, release what you are holding.',
                    'Tension leaves your body with each breath.',
                    'You are safe, grounded, and calm.',
                    'Peace flows through you.'
                ]
            }
        ]
    },
    focus: {
        name: 'Focus',
        icon: '💡',
        sessions: [
            {
                id: 'fo1',
                title: 'Mental Clarity',
                duration: 10,
                description: 'Clear your mind and enhance focus',
                guidance: [
                    'Bring attention to the space between thoughts.',
                    'Notice your mind becoming clearer.',
                    'Focus gently on a single point of awareness.',
                    'Distractions fall away naturally.',
                    'Your mind is sharp and clear.'
                ]
            },
            {
                id: 'fo2',
                title: 'Work Focus Flow',
                duration: 5,
                description: 'Enter a state of productive focus',
                guidance: [
                    'Set your intention for focused work.',
                    'Feel yourself entering a flow state.',
                    'Distractions dissolve around you.',
                    'Your mind is aligned with purpose.',
                    'Ready to accomplish your goals.'
                ]
            }
        ]
    },
    gratitude: {
        name: 'Gratitude',
        icon: '💖',
        sessions: [
            {
                id: 'gr1',
                title: 'Gratitude Practice',
                duration: 5,
                description: 'Cultivate appreciation and contentment',
                guidance: [
                    'Think of something simple you are grateful for.',
                    'Feel the warmth of appreciation in your heart.',
                    'Expand this feeling to more things.',
                    'Notice the joy this brings.',
                    'Gratitude opens your heart.'
                ]
            },
            {
                id: 'gr2',
                title: 'Extended Appreciation',
                duration: 10,
                description: 'Deepen your practice of gratitude',
                guidance: [
                    'Reflect on the people who support you.',
                    'Appreciate the beauty around you.',
                    'Feel gratitude for your own body and mind.',
                    'Expand love to all living beings.',
                    'You are part of something beautiful.'
                ]
            }
        ]
    },
    'body-scan': {
        name: 'Body Scan',
        icon: '🫀',
        sessions: [
            {
                id: 'bs1',
                title: 'Quick Body Scan',
                duration: 15,
                description: 'Release tension with a guided body scan',
                guidance: [
                    'Begin at the top of your head.',
                    'Notice without trying to change anything.',
                    'Slowly move awareness down through your body.',
                    'Release tension as you scan.',
                    'Feel relaxation spreading through you.'
                ]
            },
            {
                id: 'bs2',
                title: 'Complete Body Relaxation',
                duration: 30,
                description: 'Thorough relaxation through full body awareness',
                guidance: [
                    'Find complete physical comfort.',
                    'With patient awareness, scan your entire body.',
                    'Notice areas of tension and let them go.',
                    'Each breath brings deeper relaxation.',
                    'Complete peace fills your being.'
                ]
            }
        ]
    }
};

// ===== STATE =====
let currentState = {
    currentScreen: 'home',
    currentCategory: null,
    currentSession: null,
    isPlaying: false,
    isPaused: false,
    timeRemaining: 0,
    sessionDuration: 10,
    currentSound: 'none',
    timerInterval: null,
    guidanceIndex: 0,
    sessionStats: {
        totalMinutes: 0,
        totalSessions: 0,
        lastDate: null,
        sessionHistory: []
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadStats();
    setupEventListeners();
    updateHomeScreen();
});

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Category selection
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            selectCategory(category);
        });
    });

    // Navigation
    document.getElementById('backBtn').addEventListener('click', goHome);
    document.getElementById('backFromMedBtn').addEventListener('click', goHome);
    document.getElementById('homeBtn').addEventListener('click', goHome);
    document.getElementById('settingsBtn').addEventListener('click', () => {});
    document.getElementById('statsBtn').addEventListener('click', showStats);
    document.getElementById('closeStatsBtn').addEventListener('click', goHome);

    // Meditation controls
    document.getElementById('playBtn').addEventListener('click', startMeditation);
    document.getElementById('pauseBtn').addEventListener('click', pauseMeditation);
    document.getElementById('skipBtn').addEventListener('click', skipSession);

    // Duration selection
    document.querySelectorAll('.duration-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentState.sessionDuration = parseInt(btn.dataset.duration);
            currentState.timeRemaining = currentState.sessionDuration * 60;
            updateTimerDisplay();
        });
    });

    // Sound selection
    document.querySelectorAll('.sound-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sound-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentState.currentSound = btn.dataset.sound;
            playAmbientSound(btn.dataset.sound);
        });
    });
}

// ===== NAVIGATION =====
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    currentState.currentScreen = screenId;
}

function selectCategory(category) {
    currentState.currentCategory = category;
    const categoryData = meditationCategories[category];
    document.getElementById('categoryTitle').textContent = categoryData.name;
    
    const sessionsList = document.getElementById('sessionsList');
    sessionsList.innerHTML = '';
    
    categoryData.sessions.forEach(session => {
        const sessionDiv = document.createElement('div');
        sessionDiv.className = 'session-item';
        sessionDiv.innerHTML = `
            <h4>${session.title}</h4>
            <p>${session.description}</p>
            <p style="font-size: 12px; margin-top: 8px;">Duration: ${session.duration} min</p>
        `;
        sessionDiv.addEventListener('click', () => selectSession(session));
        sessionsList.appendChild(sessionDiv);
    });
    
    showScreen('sessionsScreen');
}

function selectSession(session) {
    currentState.currentSession = session;
    currentState.sessionDuration = session.duration;
    currentState.timeRemaining = session.duration * 60;
    currentState.guidanceIndex = 0;
    
    document.getElementById('meditationTitle').textContent = session.title;
    updateGuidanceText();
    updateTimerDisplay();
    
    // Reset buttons
    document.getElementById('playBtn').style.display = 'block';
    document.getElementById('pauseBtn').style.display = 'none';
    currentState.isPlaying = false;
    currentState.isPaused = false;
    
    // Update duration buttons
    const durationBtn = document.querySelector(`.duration-btn[data-duration="${session.duration}"]`);
    if (durationBtn) {
        document.querySelectorAll('.duration-btn').forEach(b => b.classList.remove('active'));
        durationBtn.classList.add('active');
    }
    
    showScreen('meditationScreen');
}

function goHome() {
    stopMeditation();
    currentState.currentCategory = null;
    currentState.currentSession = null;
    updateHomeScreen();
    showScreen('homeScreen');
}

// ===== MEDITATION CONTROLS =====
function startMeditation() {
    currentState.isPlaying = true;
    currentState.isPaused = false;
    document.getElementById('playBtn').style.display = 'none';
    document.getElementById('pauseBtn').style.display = 'flex';
    
    runTimer();
}

function pauseMeditation() {
    currentState.isPaused = !currentState.isPaused;
    const pauseBtn = document.getElementById('pauseBtn');
    pauseBtn.innerHTML = currentState.isPaused ? '<span>▶️ Resume</span>' : '<span>⏸️ Pause</span>';
}

function stopMeditation() {
    currentState.isPlaying = false;
    currentState.isPaused = false;
    clearInterval(currentState.timerInterval);
    stopAllSounds();
    document.getElementById('playBtn').style.display = 'block';
    document.getElementById('pauseBtn').style.display = 'none';
}

function skipSession() {
    if (currentState.isPlaying) {
        completeSession();
    }
}

function runTimer() {
    currentState.timerInterval = setInterval(() => {
        if (!currentState.isPaused && currentState.isPlaying) {
            currentState.timeRemaining--;
            updateTimerDisplay();
            updateGuidanceText();
            
            if (currentState.timeRemaining <= 0) {
                completeSession();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(currentState.timeRemaining / 60);
    const seconds = currentState.timeRemaining % 60;
    
    document.getElementById('timerMinutes').textContent = minutes;
    document.getElementById('timerSeconds').textContent = seconds.toString().padStart(2, '0');
}

function updateGuidanceText() {
    if (!currentState.currentSession) return;
    
    const guidance = currentState.currentSession.guidance;
    const totalTime = currentState.currentSession.duration * 60;
    const elapsed = totalTime - currentState.timeRemaining;
    const indexProgress = Math.floor((elapsed / totalTime) * guidance.length);
    
    currentState.guidanceIndex = Math.min(indexProgress, guidance.length - 1);
    document.getElementById('guidanceText').innerHTML = `<p>${guidance[currentState.guidanceIndex]}</p>`;
}

function completeSession() {
    clearInterval(currentState.timerInterval);
    currentState.isPlaying = false;
    
    const minutesCompleted = currentState.currentSession.duration;
    currentState.sessionStats.totalMinutes += minutesCompleted;
    currentState.sessionStats.totalSessions += 1;
    currentState.sessionStats.lastDate = new Date().toISOString().split('T')[0];
    
    // Record session history
    currentState.sessionStats.sessionHistory.push({
        date: currentState.sessionStats.lastDate,
        category: currentState.currentCategory,
        duration: minutesCompleted,
        session: currentState.currentSession.id
    });
    
    saveStats();
    showCompletion(minutesCompleted);
}

function showCompletion(minutes) {
    document.getElementById('completionMessage').textContent = `You completed your ${currentState.currentSession.title}`;
    document.getElementById('completionTime').textContent = `${minutes} min`;
    document.getElementById('completionTotal').textContent = currentState.sessionStats.totalSessions;
    showScreen('completionScreen');
}

// ===== AMBIENT SOUNDS =====
let audioContext = null;
let currentSoundOscillators = [];
let currentGainNodes = [];

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function stopAllSounds() {
    currentSoundOscillators.forEach(osc => {
        try { osc.stop(); } catch(e) {}
    });
    currentGainNodes.forEach(gain => {
        gain.gain.setValueAtTime(0, audioContext.currentTime);
    });
    currentSoundOscillators = [];
    currentGainNodes = [];
}

function playAmbientSound(sound) {
    if (sound === 'none') {
        stopAllSounds();
        return;
    }
    
    const ctx = initAudioContext();
    stopAllSounds();
    
    if (sound === 'rain') {
        playRainSound(ctx);
    } else if (sound === 'ocean') {
        playOceanSound(ctx);
    } else if (sound === 'forest') {
        playForestSound(ctx);
    } else if (sound === 'birds') {
        playBirdsSound(ctx);
    }
}

function playRainSound(ctx) {
    // Create white noise buffer
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        noiseData[i] = Math.random() * 2 - 1;
    }
    
    // Create noise source
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    
    // Low-pass filter for rain effect
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 1500;
    filter.Q.value = 1;
    
    // Soft volume
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
    
    noiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    noiseSource.start(0);
    
    currentSoundOscillators.push(noiseSource);
    currentGainNodes.push(gainNode);
}

function playOceanSound(ctx) {
    // Low frequency sine wave for waves
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(0.5, ctx.currentTime);
    osc1.frequency.linearRampToValueAtTime(1, ctx.currentTime + 6);
    
    // White noise for texture
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        noiseData[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    
    // Low-pass filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800;
    
    // Oscillator gain for wave modulation
    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.5, ctx.currentTime);
    
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.2, ctx.currentTime);
    
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.3, ctx.currentTime);
    
    // Modulate noise with low frequency oscillator
    osc1.connect(oscGain);
    oscGain.connect(noiseGain.gain);
    
    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);
    osc1.connect(masterGain);
    masterGain.connect(ctx.destination);
    
    osc1.start(0);
    noiseSource.start(0);
    
    currentSoundOscillators.push(osc1, noiseSource);
    currentGainNodes.push(masterGain);
}

function playForestSound(ctx) {
    // Ambient noise base
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        noiseData[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;
    
    // Mid-range filter for forest ambience
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 0.5;
    
    // Add low-frequency rumble
    const rumble = ctx.createOscillator();
    rumble.type = 'sine';
    rumble.frequency.value = 60;
    
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.setValueAtTime(0.1, ctx.currentTime);
    
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.25, ctx.currentTime);
    
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.3, ctx.currentTime);
    
    noiseSource.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(masterGain);
    
    rumble.connect(rumbleGain);
    rumbleGain.connect(masterGain);
    
    masterGain.connect(ctx.destination);
    
    noiseSource.start(0);
    rumble.start(0);
    
    currentSoundOscillators.push(noiseSource, rumble);
    currentGainNodes.push(masterGain);
}

function playBirdsSound(ctx) {
    // Create chirpy bird sounds with oscillators
    const playBirdChirp = (time, frequency, duration) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(frequency, time);
        osc.frequency.exponentialRampToValueAtTime(frequency * 1.5, time + duration * 0.3);
        osc.frequency.exponentialRampToValueAtTime(frequency * 0.7, time + duration);
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.15, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(time);
        osc.stop(time + duration);
        
        return osc;
    };
    
    // Play multiple chirps with randomness
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.3, ctx.currentTime);
    masterGain.connect(ctx.destination);
    
    const chirpOsc1 = ctx.createOscillator();
    chirpOsc1.type = 'sine';
    chirpOsc1.frequency.setValueAtTime(3000, ctx.currentTime);
    chirpOsc1.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.15);
    
    const chirpGain1 = ctx.createGain();
    chirpGain1.gain.setValueAtTime(0.15, ctx.currentTime);
    chirpGain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    
    chirpOsc1.connect(chirpGain1);
    chirpGain1.connect(masterGain);
    
    const chirpOsc2 = ctx.createOscillator();
    chirpOsc2.type = 'sine';
    chirpOsc2.frequency.setValueAtTime(2500, ctx.currentTime + 0.3);
    chirpOsc2.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.45);
    
    const chirpGain2 = ctx.createGain();
    chirpGain2.gain.setValueAtTime(0.15, ctx.currentTime + 0.3);
    chirpGain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);
    
    chirpOsc2.connect(chirpGain2);
    chirpGain2.connect(masterGain);
    
    chirpOsc1.start(ctx.currentTime);
    chirpOsc1.stop(ctx.currentTime + 0.15);
    chirpOsc2.start(ctx.currentTime + 0.3);
    chirpOsc2.stop(ctx.currentTime + 0.45);
    
    // Repeat pattern
    const repeatPattern = () => {
        if (currentSoundOscillators.includes(chirpOsc1) || currentSoundOscillators.includes(chirpOsc2)) {
            setTimeout(() => {
                playAmbientSound('birds');
            }, 2000 + Math.random() * 1000);
        }
    };
    
    setTimeout(repeatPattern, 500);
    
    currentSoundOscillators.push(chirpOsc1, chirpOsc2);
    currentGainNodes.push(masterGain);
}

// ===== STATISTICS =====
function showStats() {
    // Update stats
    const today = new Date().toISOString().split('T')[0];
    const todayMinutes = currentState.sessionStats.sessionHistory
        .filter(s => s.date === today)
        .reduce((sum, s) => sum + s.duration, 0);
    
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);
    const weekStartStr = weekStart.toISOString().split('T')[0];
    const weekMinutes = currentState.sessionStats.sessionHistory
        .filter(s => s.date >= weekStartStr)
        .reduce((sum, s) => sum + s.duration, 0);
    
    document.getElementById('weekTotalMinutes').textContent = weekMinutes;
    document.getElementById('allTimeMinutes').textContent = currentState.sessionStats.totalMinutes;
    document.getElementById('currentStreak').textContent = calculateStreak();
    
    // Favorite category
    const categoryCount = {};
    currentState.sessionStats.sessionHistory.forEach(s => {
        categoryCount[s.category] = (categoryCount[s.category] || 0) + 1;
    });
    const favorite = Object.keys(categoryCount).length > 0 
        ? Object.keys(categoryCount).reduce((a, b) => categoryCount[a] > categoryCount[b] ? a : b)
        : '-';
    const favoriteName = favorite !== '-' ? meditationCategories[favorite].name : '-';
    document.getElementById('favoriteCategory').textContent = favoriteName;
    
    // Weekly chart
    updateWeeklyChart();
    
    showScreen('statsScreen');
}

function calculateStreak() {
    if (currentState.sessionStats.sessionHistory.length === 0) return 0;
    
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < 365; i++) {
        const checkDate = new Date(today);
        checkDate.setDate(checkDate.getDate() - i);
        const dateStr = checkDate.toISOString().split('T')[0];
        
        if (currentState.sessionStats.sessionHistory.some(s => s.date === dateStr)) {
            streak++;
        } else if (i > 0) {
            break;
        }
    }
    return streak;
}

function updateWeeklyChart() {
    const chart = document.getElementById('weeklyChart');
    chart.innerHTML = '';
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        const dayMinutes = currentState.sessionStats.sessionHistory
            .filter(s => s.date === dateStr)
            .reduce((sum, s) => sum + s.duration, 0);
        
        const maxHeight = 100;
        const height = dayMinutes > 0 ? (dayMinutes / 30) * maxHeight : 5; // Assume 30 min is max
        
        const chartBar = document.createElement('div');
        chartBar.className = 'chart-bar';
        chartBar.innerHTML = `
            <div class="bar" style="height: ${height}px;" title="${dayMinutes} min"></div>
            <div class="day-label">${days[date.getDay()]}</div>
        `;
        chart.appendChild(chartBar);
    }
}

// ===== HOME SCREEN =====
function updateHomeScreen() {
    const today = new Date().toISOString().split('T')[0];
    const todayMinutes = currentState.sessionStats.sessionHistory
        .filter(s => s.date === today)
        .reduce((sum, s) => sum + s.duration, 0);
    
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - 7);
    const weekStartStr = weekStart.toISOString().split('T')[0];
    const weekMinutes = currentState.sessionStats.sessionHistory
        .filter(s => s.date >= weekStartStr)
        .reduce((sum, s) => sum + s.duration, 0);
    
    document.getElementById('todayMinutes').textContent = todayMinutes;
    document.getElementById('weekMinutes').textContent = weekMinutes;
    document.getElementById('totalSessions').textContent = currentState.sessionStats.totalSessions;
}

// ===== PERSISTENCE =====
function saveStats() {
    localStorage.setItem('meditationStats', JSON.stringify(currentState.sessionStats));
}

function loadStats() {
    const saved = localStorage.getItem('meditationStats');
    if (saved) {
        currentState.sessionStats = JSON.parse(saved);
    }
}

// Simple alert for settings (can be expanded)
window.addEventListener('beforeunload', () => {
    saveStats();
});
