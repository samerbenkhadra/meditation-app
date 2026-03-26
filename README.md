# 🧘 Serenity - Meditation App

A beautiful, responsive web-based meditation app built with vanilla HTML, CSS, and JavaScript. Get started with guided meditations, track your progress, and develop a consistent mindfulness practice.

## Features

✨ **6 Meditation Categories**
- 🎯 **Mindfulness** - Build present-moment awareness
- 😴 **Sleep** - Relax into restful sleep
- 🌬️ **Breathing** - Manage anxiety with calming techniques
- 💡 **Focus** - Enhance mental clarity and productivity
- 💖 **Gratitude** - Cultivate appreciation and contentment
- 🫀 **Body Scan** - Release tension through body awareness

📊 **Progress Tracking**
- Daily meditation minutes
- Weekly and all-time statistics
- Session history and streaks
- Favorite category tracking
- Visual weekly chart

⏱️ **Customizable Timer**
- Sessions from 5 to 30 minutes
- Adjustable duration before or during meditation
- Breathing animation during session
- Real-time countdown display

🎵 **Ambient Sounds** (Ready for audio integration)
- Rain, ocean, forest, and bird sounds
- Enhances relaxation experience
- Toggle during meditation

## Getting Started

1. **Open the App**
   - Simply open `index.html` in any modern web browser
   - No installation required!

2. **Choose Your Practice**
   - Browse 6 meditation categories from the home screen
   - Select a specific guided meditation session

3. **Start Meditating**
   - Choose your session duration (5-30 minutes)
   - Select ambient sound if desired
   - Click "Start" and follow the guidance

4. **Track Progress**
   - View your statistics by clicking the 📊 icon
   - See daily, weekly, and all-time meditation stats
   - Track your meditation streak

## How to Use

### Starting a Meditation
1. Click on a category card (Mindfulness, Sleep, etc.)
2. Select a guided meditation from the list
3. Choose your preferred session duration
4. (Optional) Select ambient sound
5. Click **Start** to begin

### During Meditation
- **Pause/Resume** - Click the pause button anytime
- **Skip** - Jump to completion if needed
- **Ambient Sound** - Switch sounds during the session
- Follow the guidance text for cues

### After Meditation
- View completion summary
- See your total sessions and time
- Return to home to continue or end

### Track Progress
- Click the **📊** icon in the header
- View daily, weekly, and lifetime statistics
- See your meditation streak
- Check your favorite category
- Review the weekly breakdown chart

## App Structure

```
Serenity/
├── index.html      # Main HTML structure and layout
├── style.css       # Complete styling (responsive design)
├── script.js       # All functionality and logic
└── README.md       # This file
```

## Files Included

- **index.html** - Complete app structure with all screens (home, sessions, meditation, completion, stats)
- **style.css** - Beautiful gradient design with mobile-responsive layout
- **script.js** - Full meditation functionality, timer, stats tracking, and localStorage persistence

## Features in Detail

### 6+ Guided Meditation Sessions
Each category includes carefully crafted guidance text that progresses throughout your session:
- Mindfulness: Morning practice, body awareness
- Sleep: Bedtime relaxation, deep sleep induction
- Breathing: Calming breath, anxiety relief
- Focus: Mental clarity, work flow
- Gratitude: Appreciation practice, extended appreciation
- Body Scan: Quick scan, complete relaxation

### Smart Statistics
Your meditation history is saved locally:
- Daily minutes tracked
- Weekly and all-time totals
- Consecutive day streaks
- Category preferences
- Visual weekly activity chart

### Responsive Design
Works perfectly on:
- Desktop browsers
- Tablets
- Mobile phones (iPhone, Android)
- Any screen size

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Any modern browser with ES6 support

## Customization

Want to customize the app? Here are some easy modifications:

### Add New Meditations
Edit the `meditationCategories` object in `script.js`:
```javascript
sessions: [
    {
        id: 'unique-id',
        title: 'Session Name',
        duration: 10,
        description: 'Brief description',
        guidance: ['Step 1', 'Step 2', 'Step 3']
    }
]
```

### Change Colors
Edit CSS variables in `style.css`:
- `--primary-color`: Main theme color
- `--secondary-color`: Accent color
- `--success-color`: Completion color

### Add Ambient Sounds
Add audio files and update `playAmbientSound()` in `script.js` to use real audio files instead of placeholders.

## Data Storage

All your meditation stats are saved locally using browser localStorage:
- No server required
- Privacy-focused (data stays on your device)
- Persists across browser sessions
- Cleared only if you clear browser data

## Technical Details

- **No Dependencies** - Pure vanilla JavaScript
- **Lightweight** - Under 100KB total
- **Offline-Ready** - Works without internet connection
- **Accessible** - Keyboard-friendly controls
- **Performance** - Smooth animations, fast load times

## Tips for Best Results

1. **Find a Quiet Space** - Minimize distractions
2. **Get Comfortable** - Use a cushion or chair
3. **Consistent Practice** - Even 5 minutes daily helps
4. **Use Ambient Sounds** - Can enhance relaxation
5. **Experiment** - Try different sessions to find favorites
6. **Track Progress** - Check stats to stay motivated

## Future Enhancements

Potential features for expansion:
- Real ambient sound audio files
- Custom meditation creation
- Social sharing and community
- Push notifications/reminders
- Cloud backup of statistics
- Offline mode with service workers
- Multiple languages
- Voice guidance recordings

## License

This meditation app is provided as-is for personal use.

## Support

Questions or issues? The app is designed to be intuitive and self-guided. All functionality is built into the interface. For the best experience, use a modern web browser and try different meditation sessions to find what works for you.

---

**Namaste** 🧘‍♀️ 
*May you find peace and calm with every meditation.*
