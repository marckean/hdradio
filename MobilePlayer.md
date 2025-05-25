---
layout: page
title: Mobile Player
subtitle: High Quality Radio, Listen Live Online
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HD Radio Mobile Player</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 10px;
        }

        .player-header {
            text-align: center;
            margin-bottom: 20px;
            color: white;
            padding: 20px 0;
        }

        .player-header h1 {
            font-size: 2.2rem;
            margin-bottom: 8px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .player-header p {
            font-size: 1rem;
            opacity: 0.9;
        }

        .audio-player {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            position: sticky;
            top: 10px;
            z-index: 100;
        }

        .current-station {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .station-logo {
            width: 70px;
            height: 70px;
            border-radius: 15px;
            margin-right: 15px;
            object-fit: cover;
            border: 3px solid #eee;
            background: #f8f9fa;
        }

        .station-info h3 {
            font-size: 1.3rem;
            margin-bottom: 5px;
            color: #333;
            font-weight: 600;
        }

        .station-info p {
            color: #666;
            font-size: 0.95rem;
        }

        .player-controls {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 15px;
        }

        .play-pause-btn {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .play-pause-btn:hover {
            transform: scale(1.1);
        }

        .play-pause-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .volume-control {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .volume-slider {
            flex: 1;
            height: 8px;
            border-radius: 4px;
            background: #ddd;
            outline: none;
            -webkit-appearance: none;
            cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #667eea;
            cursor: pointer;
        }

        .loading {
            text-align: center;
            padding: 40px 20px;
            color: white;
            font-size: 1.1rem;
        }

        .stations-grid {
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .section-title {
            font-size: 1.4rem;
            margin-bottom: 20px;
            color: #333;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
            font-weight: 600;
        }

        .stations-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 15px;
        }

        .station-card {
            background: #f8f9ff;
            border-radius: 15px;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            position: relative;
        }

        .station-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
            border-color: #667eea;
            background: #fff;
        }

        .station-card.playing {
            border-color: #28a745;
            background: linear-gradient(135deg, #e8f5e8, #f0f8f0);
        }

        .station-card.playing::after {
            content: "♪";
            position: absolute;
            top: 8px;
            right: 10px;
            font-size: 1.4rem;
            color: #28a745;
            font-weight: bold;
        }

        .station-card img {
            width: 90px;
            height: 90px;
            border-radius: 12px;
            margin-bottom: 12px;
            object-fit: cover;
            border: 2px solid #ddd;
            transition: all 0.3s ease;
            background: #f8f9fa;
        }

        .station-card:hover img {
            transform: scale(1.1);
            border-color: #667eea;
        }

        .station-card h4 {
            font-size: 0.9rem;
            color: #333;
            line-height: 1.3;
            height: 2.6em;
            overflow: hidden;
            font-weight: 500;
        }

        .error-message {
            background: rgba(255, 230, 230, 0.9);
            color: #d63384;
            padding: 20px;
            border-radius: 15px;
            margin: 20px 0;
            border-left: 5px solid #d63384;
            font-weight: 500;
        }

        .loading-spinner {
            display: inline-block;
            width: 30px;
            height: 30px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid #fff;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 15px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .status-indicator {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 10px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            margin-top: 10px;
            font-size: 0.9rem;
            color: #666;
        }

        @media (max-width: 768px) {
            .container { padding: 8px; }
            .player-header h1 { font-size: 1.8rem; }
            .stations-container { grid-template-columns: repeat(3, 1fr); gap: 10px; }
            .station-card { padding: 12px; }
            .station-card img { width: 70px; height: 70px; }
            .station-logo { width: 60px; height: 60px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="player-header">
            <h1>🎵 HD Radio Player</h1>
            <p>High Quality Radio Streaming Across Australia</p>
        </div>

        <div class="audio-player">
            <div class="current-station">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjZjhmOWZhIiByeD0iMTUiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjcwZGQiIHN0cm9rZS13aWR0aD0iMiI+CjxwYXRoIGQ9Im0zIDlsOS03djE0bC05LTd6Ii8+CjxwYXRoIGQ9Im0yMSAxNS05LTctOSA3IDktNyA5IDd6Ii8+Cjwvc3ZnPgo8L3N2Zz4K" alt="Station Logo" class="station-logo" id="currentLogo">
                <div class="station-info">
                    <h3 id="currentName">Select a station to start listening</h3>
                    <p id="currentState">Choose from our collection of high-quality radio stations</p>
                </div>
            </div>
            <div class="player-controls" id="playerControls" style="display: none;">
                <button class="play-pause-btn" id="playPauseBtn">▶️</button>
                <div class="volume-control">
                    <span>🔊</span>
                    <input type="range" class="volume-slider" id="volumeSlider" min="0" max="100" value="70">
                </div>
            </div>
            <div class="status-indicator" id="statusIndicator" style="display: none;">
                <span id="statusText">Ready to play</span>
            </div>
            <audio id="audioPlayer" preload="none" style="display: none;"></audio>
        </div>

        <div id="stationsContainer" class="loading">
            <div class="loading-spinner"></div>
            Loading stations...
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
    <script>
        class RadioPlayer {
            constructor() {
                this.audioPlayer = document.getElementById('audioPlayer');
                this.playPauseBtn = document.getElementById('playPauseBtn');
                this.volumeSlider = document.getElementById('volumeSlider');
                this.statusIndicator = document.getElementById('statusIndicator');
                this.statusText = document.getElementById('statusText');
                this.currentStation = null;
                this.hls = null;
                this.stations = [];
                this.isPlaying = false;
                
                this.init();
            }

            init() {
                this.setupEventListeners();
                this.loadStations();
            }

            setupEventListeners() {
                this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
                this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
                
                this.audioPlayer.addEventListener('playing', () => {
                    this.setStatus('Playing');
                    this.isPlaying = true;
                    this.playPauseBtn.textContent = '⏸️';
                });
                
                this.audioPlayer.addEventListener('pause', () => {
                    this.setStatus('Paused');
                    this.isPlaying = false;
                    this.playPauseBtn.textContent = '▶️';
                });
                
                this.audioPlayer.addEventListener('error', () => {
                    this.setStatus('Error loading stream');
                    console.error('Audio error');
                });
                
                this.audioPlayer.addEventListener('waiting', () => this.setStatus('Buffering...'));
                this.audioPlayer.volume = 0.7;
            }

            setStatus(text) {
                this.statusText.textContent = text;
                this.statusIndicator.style.display = 'flex';
            }

            togglePlayPause() {
                if (!this.currentStation) return;
                
                if (this.isPlaying) {
                    this.audioPlayer.pause();
                } else {
                    this.audioPlayer.play().catch(e => {
                        console.error('Play failed:', e);
                        this.setStatus('Failed to play');
                    });
                }
            }

            setVolume(value) {
                this.audioPlayer.volume = value / 100;
            }

            async loadStations() {
                try {
                    console.log('Loading stations from Azure...');
                    
                    const response = await fetch('https://20250525mobileplayer.blob.core.windows.net/directory/directory.json');
                    
                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                    }
                    
                    const data = await response.json();
                    this.stations = data.stations || [];
                    
                    console.log(`Loaded ${this.stations.length} stations`);
                    this.renderStations();
                    
                } catch (error) {
                    console.error('Failed to load stations:', error);
                    document.getElementById('stationsContainer').innerHTML = `
                        <div class="error-message">
                            <strong>Failed to load stations</strong><br>
                            Error: ${error.message}<br><br>
                            <button onclick="location.reload()" style="background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;">Try Again</button>
                        </div>
                    `;
                }
            }

            renderStations() {
                if (!this.stations.length) {
                    document.getElementById('stationsContainer').innerHTML = '<div class="error-message">No stations available</div>';
                    return;
                }

                // Group and sort stations alphabetically
                const whisperscape = this.stations.filter(s => s.name && s.name.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const nsw = this.stations.filter(s => s.state === 'NSW' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const vic = this.stations.filter(s => s.state === 'VIC' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const qld = this.stations.filter(s => s.state === 'QLD' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const wa = this.stations.filter(s => s.state === 'WA' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const sa = this.stations.filter(s => s.state === 'SA' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const nt = this.stations.filter(s => s.state === 'NT' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const tas = this.stations.filter(s => s.state === 'TAS' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));
                const national = this.stations.filter(s => s.state === 'AU' && !s.name?.toLowerCase().includes('whisperscape'))
                    .sort((a, b) => a.name.localeCompare(b.name));

                let html = '';
                
                if (whisperscape.length > 0) html += this.createSection('⭐ Whisperscape Premium', whisperscape);
                if (nsw.length > 0) html += this.createSection('🏙️ New South Wales', nsw);
                if (vic.length > 0) html += this.createSection('🌆 Victoria', vic);
                if (qld.length > 0) html += this.createSection('☀️ Queensland', qld);
                if (wa.length > 0) html += this.createSection('🌊 Western Australia', wa);
                if (sa.length > 0) html += this.createSection('🍷 South Australia', sa);
                if (nt.length > 0) html += this.createSection('🏜️ Northern Territory', nt);
                if (tas.length > 0) html += this.createSection('🏔️ Tasmania', tas);
                if (national.length > 0) html += this.createSection('🇦🇺 National', national);

                document.getElementById('stationsContainer').innerHTML = html;
                this.attachClickListeners();
            }

            createSection(title, stations) {
                const stationsHtml = stations.map(station => {
                    const fallback = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjkwIiBoZWlnaHQ9IjkwIiBmaWxsPSIjZjhmOWZhIiByeD0iMTIiLz4KPHN2ZyB4PSIzMCIgeT0iMzAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjcwZGQiIHN0cm9rZS13aWR0aD0iMiI+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz4KPHBhdGggZD0ibTMgMTIgMy0zIDMgMyI+PC9wYXRoPgo8cGF0aCBkPSJtMjEgMTItMy0zLTMgMyI+PC9wYXRoPgo8cGF0aCBkPSJNNyAyMWwtMy0zIDMtMyI+PC9wYXRoPgo8cGF0aCBkPSJtMTcgM2wzIDMtMyAzIj48L3BhdGg+CjwvZz4KPC9zdmc+Cjwvc3ZnPgo=";
                    
                    return `
                        <div class="station-card" data-url="${station.url}" data-name="${station.name}" data-logo="${station.logo || fallback}" data-state="${station.state}">
                            <img src="${station.logo || fallback}" alt="${station.name}" onerror="this.src='${fallback}'">
                            <h4>${station.name}</h4>
                        </div>
                    `;
                }).join('');

                return `
                    <div class="stations-grid">
                        <h2 class="section-title">${title}</h2>
                        <div class="stations-container">${stationsHtml}</div>
                    </div>
                `;
            }

            attachClickListeners() {
                document.querySelectorAll('.station-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const station = {
                            url: card.dataset.url,
                            name: card.dataset.name,
                            logo: card.dataset.logo,
                            state: card.dataset.state
                        };
                        this.playStation(station, card);
                    });
                });
            }

            playStation(station, cardElement) {
                if (!station.url) return;

                // Update UI
                document.querySelectorAll('.station-card').forEach(card => card.classList.remove('playing'));
                cardElement.classList.add('playing');

                // Update display
                document.getElementById('currentLogo').src = station.logo;
                document.getElementById('currentName').textContent = station.name;
                document.getElementById('currentState').textContent = this.getStateName(station.state);
                document.getElementById('playerControls').style.display = 'flex';

                this.currentStation = station;
                this.loadStream(station.url);
            }

            loadStream(url) {
                // Stop existing stream
                if (this.hls) {
                    this.hls.destroy();
                    this.hls = null;
                }

                this.audioPlayer.pause();
                this.audioPlayer.src = '';
                this.setStatus('Connecting...');

                try {
                    if (url.includes('.m3u8')) {
                        // HLS stream
                        if (Hls.isSupported()) {
                            this.hls = new Hls();
                            this.hls.loadSource(url);
                            this.hls.attachMedia(this.audioPlayer);
                            this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                                this.audioPlayer.play().catch(e => console.log('Autoplay prevented'));
                            });
                        } else if (this.audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
                            this.audioPlayer.src = url;
                            this.audioPlayer.play().catch(e => console.log('Autoplay prevented'));
                        }
                    } else {
                        // Direct stream
                        this.audioPlayer.src = url;
                        this.audioPlayer.play().catch(e => console.log('Autoplay prevented'));
                    }
                } catch (error) {
                    console.error('Stream load error:', error);
                    this.setStatus('Failed to load stream');
                }
            }

            getStateName(state) {
                const names = {
                    'NSW': 'New South Wales',
                    'VIC': 'Victoria',
                    'QLD': 'Queensland',
                    'WA': 'Western Australia',
                    'SA': 'South Australia',
                    'NT': 'Northern Territory',
                    'TAS': 'Tasmania',
                    'AU': 'Australia'
                };
                return names[state] || state || 'Unknown';
            }
        }

        // Start the player
        document.addEventListener('DOMContentLoaded', () => {
            new RadioPlayer();
        });
    </script>
</body>
</html>

## Features

### 🎵 **Premium Audio Quality**
Experience high-quality audio streaming with support for multiple formats including HLS and direct audio streams.

### 📱 **Mobile Optimized**
Responsive design that works perfectly on all devices - phones, tablets, and desktops.

### 🎛️ **Smart Stream Handling**
Automatically detects and handles different audio formats (MP3, AAC, M3U8/HLS) for seamless playback.

### 🏷️ **Organized by Location**
Stations are intelligently grouped by Australian states and territories for easy browsing.

### ⚡ **Fast Loading**
Dynamic station loading from cloud-based JSON source ensures always up-to-date station listings.

---

### Technical Notes

**Stream Formats**: This player automatically handles various streaming formats including HLS (.m3u8) and direct audio streams.

**Performance**: Station loading speed depends on the individual radio station's server configuration and your internet connection.

**Compatibility**: Works across all modern browsers with fallback support for older devices.

