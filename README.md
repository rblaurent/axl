# Axl - Your AI Gaming Buddy 🎮

Ever wanted an AI sidekick that watches your gameplay and roasts you in Discord voice chat? Meet **Axl** - your new gaming companion that brings the commentary, the banter, and occasionally the emotional support (but mostly the roasts).

![Version](https://img.shields.io/badge/version-0.1.6-blue)
![Platform](https://img.shields.io/badge/platform-Windows-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## What Does It Do?

Axl joins your Discord voice channel and watches your gameplay through periodic screenshots. Using Claude AI vision, she analyzes what's happening and decides if something's worth commenting on. When she does, she generates natural-sounding voice commentary through ElevenLabs TTS and plays it right in your voice channel.

Think of her as having a gaming buddy who's always there to celebrate your wins, mock your fails, and occasionally say something actually helpful.

**Key Features:**
- 📸 **Auto-captures your screen** every minute (or hit the hotkey for instant reactions)
- 🧠 **Claude AI analyzes** what's happening in your game
- 🎭 **Emotion-aware voice** - sarcastic roasts, excited cheers, disappointed sighs
- 🔊 **Plays directly in Discord** - no external audio routing needed
- 💬 **Remembers context** - callbacks to earlier moments, ongoing commentary
- 🎯 **Smart about it** - won't spam, only comments when something interesting happens
- ✨ **Easy setup** - Windows app with a friendly setup wizard

## Download & Install

### Quick Install (Recommended)

1. **Download the installer** from our [website](https://rblaurent.github.io/axl/) or [GitHub Releases](https://github.com/rblaurent/axl/releases/latest)
2. **Run AxlSetup.exe** (Windows might show a SmartScreen warning - click "More info" → "Run anyway")
3. **Launch Axl** and follow the setup wizard

The app will guide you through:
- Getting your Claude API key
- Setting up ElevenLabs voice
- Connecting to your Discord server
- Choosing Axl's personality
- Setting your hotkey

### Auto-Updates

Once installed, Axl automatically updates itself. No need to download new versions manually!

## First Time Setup

When you launch Axl for the first time, you'll go through a quick setup wizard:

### 1. Claude API Key
Get your API key from [Anthropic Console](https://console.anthropic.com/):
- Sign up / log in
- Go to API Keys → Create Key
- Copy and paste into Axl

**Cost:** ~$0.09/hour of gameplay (30 screenshots)

### 2. ElevenLabs Voice
Get your API key and pick a voice from [ElevenLabs](https://elevenlabs.io/):
- Sign up (10,000 free characters/month)
- Profile Settings → Copy API Key
- Voice Library → Pick a voice → Copy Voice ID

**Cost:** ~$0.06/hour of gameplay (or free tier!)

### 3. Discord Setup
Create a Discord bot and invite it to your server:
- Go to [Discord Developer Portal](https://discord.com/developers/applications)
- New Application → Bot section → Add Bot
- Copy the bot token
- OAuth2 → URL Generator:
  - Scopes: `bot`
  - Permissions: `Connect`, `Speak`
- Use the URL to invite bot to your server

Then get your Server and Voice Channel IDs:
- Enable Developer Mode (Settings → Advanced)
- Right-click your server → Copy Server ID
- Right-click your voice channel → Copy Channel ID

### 4. Customize Axl's Personality
Choose Axl's vibe - sarcastic roaster, wholesome hype person, or something custom!

### 5. Set Your Hotkey
Pick a key for instant screenshot captures (default: F8)

## Using Axl

1. **Launch Axl** from your desktop
2. **Join your Discord voice channel**
3. **Start gaming** - Axl will automatically start capturing and commenting
4. **Hit your hotkey** (F8) when something epic/terrible happens for instant commentary
5. **Check the Console tab** to see what Axl is thinking

### Tips for Best Results
- Make sure you're in the voice channel before starting
- Windowed or borderless windowed mode works best for captures
- Give Axl a personality that matches your vibe
- She decides when to comment - won't spam on boring moments

## Customization

### Personality Tab
Change Axl's personality anytime:
- **Sarcastic roaster** - Classic gaming trash talk
- **Wholesome hype person** - Positive vibes only
- **Custom** - Write your own personality prompt

### Settings Tab
Fine-tune everything:
- **Capture interval** - How often to auto-capture (default: 60s)
- **Hotkey** - Change the instant capture key
- **Voice listening** - Enable/disable voice transcription (requires Azure Speech API)
- **Context size** - How much Axl remembers
- **Language** - Commentary language

## How It Works

```
You're Gaming
     ↓
Screenshot every 60s (or hit hotkey)
     ↓
Claude AI analyzes: "What's happening? Should I comment?"
     ↓
Claude generates witty commentary with emotion ([sarcastic], [excited])
     ↓
ElevenLabs converts to natural speech with emotions
     ↓
Plays in Discord voice channel
     ↓
Axl remembers for callbacks later
```

## Cost Breakdown

Running Axl costs money (AI services aren't free yet 😅):

**Typical gaming session (1 hour):**
- Claude API: ~$0.09 (analyzing 60 screenshots)
- ElevenLabs: ~$0.06 (generating ~30 comments)
- **Total: ~$0.15/hour**

**Free tiers:**
- Anthropic: $5 free credit when you sign up
- ElevenLabs: 10,000 characters/month free (covers ~3-5 hours)
- Discord: Completely free

So you can try it out for free, and if you love it, costs are pretty reasonable!

## Troubleshooting

### Axl won't join voice channel
- Make sure the bot is invited to your server
- Check Server ID and Voice Channel ID are correct
- Verify bot has "Connect" and "Speak" permissions

### No audio playing
- Join the voice channel yourself first
- Check Axl is showing as connected in the UI
- Look for errors in the Console tab

### Screenshots failing
- Try running as administrator
- Make sure Windows screen capture permissions are enabled
- Check if antivirus is blocking screen capture

### "API Key Invalid" errors
- Double-check you copied the full key (no extra spaces)
- Verify you have credits remaining in your API account
- For Discord token, try regenerating it

### SmartScreen Warning
Since I'm an indie dev, Windows SmartScreen doesn't recognize Axl yet. Click "More info" → "Run anyway". The more people download, the more Windows will trust it!

## What's New

**v0.1.6** (Latest)
- ✨ Dynamic version display in UI
- 🔄 Automatic updates that actually work
- 🐛 Various bug fixes

**v0.1.5**
- 📊 Session tracking (shows current game, players in channel)
- 🎨 Improved UI with Discord-style sidebar
- 🔧 Better error handling

**v0.1.4**
- 🚀 First public release
- ✅ Complete setup wizard
- 🎯 Auto-capture and manual hotkey
- 🗣️ Emotion-aware voice commentary

## Building from Source

Want to tinker with the code?

```bash
# Clone the repo
git clone https://github.com/rblaurent/redroaster.git
cd redroaster

# Build the UI
.\build-ui.bat

# Or build manually
cd Roaster.UI
dotnet build
dotnet run
```

This is a private repo but the releases are public at [github.com/rblaurent/axl](https://github.com/rblaurent/axl).

## Tech Stack

Built with:
- **Claude AI** (Anthropic) - Vision analysis and commentary generation
- **ElevenLabs** - Emotion-aware text-to-speech
- **Discord.Net** - Discord bot integration
- **WPF + Material Design** - Modern Windows UI
- **.NET 9** - The good stuff

## Support the Project

If you love Axl, consider:
- ⭐ **Starring the repo** on GitHub
- ☕ **Buying me a coffee** at [ko-fi.com/redbamboo](https://ko-fi.com/redbamboo)
- 🐛 **Reporting bugs** on GitHub Issues
- 💡 **Suggesting features** you'd love to see

## Roadmap

Coming soon (maybe):
- [ ] Multi-language support (Spanish, French, etc.)
- [ ] Custom voice training
- [ ] Multiple personality presets
- [ ] Game-specific contexts (LOL, Valorant, etc.)
- [ ] Highlight clip generation
- [ ] Web dashboard for settings
- [ ] Mac/Linux support (don't hold your breath)

## FAQ

**Q: Is my data private?**
A: Yep! Screenshots go to Claude API for analysis, then deleted. Nothing is stored anywhere except your local settings. Axl doesn't phone home with your data.

**Q: Can I use my own voice?**
A: Not yet, but custom voice training is on the roadmap!

**Q: Does it work with [insert game here]?**
A: Yep! Axl works with any game. She just captures your screen.

**Q: Can I stream with Axl?**
A: Absolutely! Your viewers will hear Axl in your Discord channel.

**Q: Why is it called Axl?**
A: Because "Roaster" was too on-the-nose, and Axl sounds like a gaming buddy's name 😎

**Q: Wait, Axl is a she?**
A: Yep! By default, Axl uses a female voice, but you can pick any ElevenLabs voice you want.

## License

MIT License - do whatever you want with it! Just don't blame me if Axl roasts you too hard.

## Credits

Made with ❤️ (and way too much coffee) by an indie dev who wanted an AI gaming buddy.

Special thanks to:
- Anthropic for Claude
- ElevenLabs for amazing TTS
- Discord for the platform
- Everyone who tried Axl and gave feedback

---

**Enjoy your gaming sessions with Axl! And remember - if you can't handle the roasts, don't show her your gameplay. 🔥**
