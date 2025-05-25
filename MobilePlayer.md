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
            padding: 20px;
        }

        .player-header {
            text-align: center;
            margin-bottom: 30px;
            color: white;
        }

        .player-header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .player-header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .audio-player {
            background: white;
            border-radius: 15px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            position: sticky;
            top: 20px;
            z-index: 100;
        }

        .current-station {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .station-logo {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            margin-right: 15px;
            object-fit: cover;
            border: 2px solid #eee;
        }

        .station-info h3 {
            font-size: 1.2rem;
            margin-bottom: 5px;
            color: #333;
        }

        .station-info p {
            color: #666;
            font-size: 0.9rem;
        }

        #audioPlayer {
            width: 100%;
            margin-top: 15px;
            border-radius: 8px;
        }

        .loading {
            text-align: center;
            padding: 20px;
            color: #666;
        }

        .stations-grid {
            background: white;
            border-radius: 15px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .section-title {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #333;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
        }

        .section-title::before {
            content: "📻";
            margin-right: 10px;
            font-size: 1.3rem;
        }

        .stations-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 15px;
        }

        .station-card {
            background: #f8f9ff;
            border-radius: 12px;
            padding: 15px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
            position: relative;
            overflow: hidden;
        }

        .station-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
            border-color: #667eea;
        }

        .station-card.playing {
            border-color: #28a745;
            background: #e8f5e8;
        }

        .station-card.playing::after {
            content: "🔊";
            position: absolute;
            top: 5px;
            right: 8px;
            font-size: 0.8rem;
        }

        .station-card img {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            margin-bottom: 10px;
            object-fit: cover;
            border: 1px solid #ddd;
        }

        .station-card h4 {
            font-size: 0.85rem;
            color: #333;
            line-height: 1.2;
            height: 2.4em;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .error-message {
            background: #ffe6e6;
            color: #d63384;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #d63384;
        }

        .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 10px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            .player-header h1 {
                font-size: 2rem;
            }
            
            .stations-container {
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                gap: 10px;
            }
            
            .station-card {
                padding: 10px;
            }
            
            .station-card img {
                width: 60px;
                height: 60px;
            }
        }

        @media (max-width: 480px) {
            .stations-container {
                grid-template-columns: repeat(3, 1fr);
            }
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
            <div class="current-station" id="currentStation">
                <img src="" alt="Station Logo" class="station-logo" id="currentLogo" style="display: none;">
                <div class="station-info">
                    <h3 id="currentName">Select a station to start listening</h3>
                    <p id="currentState"></p>
                </div>
            </div>
            <audio id="audioPlayer" controls style="display: none;">
                Your browser does not support the audio element.
            </audio>
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
                this.currentStation = null;
                this.hls = null;
                this.stations = [];
                this.loadStations();
            }

            async loadStations() {
                try {
                    const response = await fetch('https://ejukebox05.blob.core.windows.net/securestreams/demo.json');
                    const data = await response.json();
                    this.stations = data.stations;
                    this.renderStations();
                } catch (error) {
                    document.getElementById('stationsContainer').innerHTML = `
                        <div class="error-message">
                            Failed to load stations. Please check your internet connection and try again.
                        </div>
                    `;
                }
            }

            renderStations() {
                const container = document.getElementById('stationsContainer');
                
                // Group stations by state
                const whisperscape = this.stations.filter(s => s.name.includes('Whisperscape'));
                const nsw = this.stations.filter(s => s.state === 'NSW');
                const vic = this.stations.filter(s => s.state === 'VIC');
                const qld = this.stations.filter(s => s.state === 'QLD');
                const wa = this.stations.filter(s => s.state === 'WA');
                const sa = this.stations.filter(s => s.state === 'SA');
                const nt = this.stations.filter(s => s.state === 'NT');
                const tas = this.stations.filter(s => s.state === 'TAS');
                const national = this.stations.filter(s => s.state === 'AU' && !s.name.includes('Whisperscape'));

                let html = '';

                if (whisperscape.length > 0) {
                    html += this.createStationSection('🌟 Whisperscape Premium', whisperscape);
                }
                if (nsw.length > 0) {
                    html += this.createStationSection('🏙️ New South Wales', nsw);
                }
                if (vic.length > 0) {
                    html += this.createStationSection('🌆 Victoria', vic);
                }
                if (qld.length > 0) {
                    html += this.createStationSection('☀️ Queensland', qld);
                }
                if (wa.length > 0) {
                    html += this.createStationSection('🌊 Western Australia', wa);
                }
                if (sa.length > 0) {
                    html += this.createStationSection('🍷 South Australia', sa);
                }
                if (nt.length > 0) {
                    html += this.createStationSection('🏜️ Northern Territory', nt);
                }
                if (tas.length > 0) {
                    html += this.createStationSection('🏔️ Tasmania', tas);
                }
                if (national.length > 0) {
                    html += this.createStationSection('🇦🇺 National', national);
                }

                container.innerHTML = html;
                this.attachEventListeners();
            }

            createStationSection(title, stations) {
                const stationsHtml = stations.map(station => `
                    <div class="station-card" data-station='${JSON.stringify(station)}'>
                        <img src="${station.logo}" alt="${station.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjZjBmMGYwIi8+Cjx0ZXh0IHg9IjQwIiB5PSI0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5Ij7wn5O7PC90ZXh0Pgo8L3N2Zz4K'">
                        <h4>${station.name}</h4>
                    </div>
                `).join('');

                return `
                    <div class="stations-grid">
                        <h2 class="section-title">${title}</h2>
                        <div class="stations-container">
                            ${stationsHtml}
                        </div>
                    </div>
                `;
            }

            attachEventListeners() {
                document.querySelectorAll('.station-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const station = JSON.parse(card.dataset.station);
                        this.playStation(station, card);
                    });
                });
            }

            playStation(station, cardElement) {
                // Update UI
                document.querySelectorAll('.station-card').forEach(card => {
                    card.classList.remove('playing');
                });
                cardElement.classList.add('playing');

                // Update current station display
                document.getElementById('currentLogo').src = station.logo;
                document.getElementById('currentLogo').style.display = 'block';
                document.getElementById('currentName').textContent = station.name;
                document.getElementById('currentState').textContent = this.getStateFullName(station.state);
                document.getElementById('audioPlayer').style.display = 'block';

                this.currentStation = station;
                this.loadAudioStream(station.url);
            }

            loadAudioStream(url) {
                // Stop any existing stream
                if (this.hls) {
                    this.hls.destroy();
                    this.hls = null;
                }

                this.audioPlayer.pause();
                this.audioPlayer.src = '';

                if (url.includes('.m3u8')) {
                    // HLS stream
                    if (Hls.isSupported()) {
                        this.hls = new Hls();
                        this.hls.loadSource(url);
                        this.hls.attachMedia(this.audioPlayer);
                        this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                            this.audioPlayer.play().catch(e => console.log('Autoplay prevented:', e));
                        });
                    } else if (this.audioPlayer.canPlayType('application/vnd.apple.mpegurl')) {
                        // Safari native HLS support
                        this.audioPlayer.src = url;
                        this.audioPlayer.addEventListener('loadedmetadata', () => {
                            this.audioPlayer.play().catch(e => console.log('Autoplay prevented:', e));
                        });
                    }
                } else {
                    // Direct audio stream
                    this.audioPlayer.src = url;
                    this.audioPlayer.addEventListener('loadedmetadata', () => {
                        this.audioPlayer.play().catch(e => console.log('Autoplay prevented:', e));
                    });
                }
            }

            getStateFullName(state) {
                const stateNames = {
                    'NSW': 'New South Wales',
                    'VIC': 'Victoria', 
                    'QLD': 'Queensland',
                    'WA': 'Western Australia',
                    'SA': 'South Australia',
                    'NT': 'Northern Territory',
                    'TAS': 'Tasmania',
                    'AU': 'Australia'
                };
                return stateNames[state] || state;
            }
        }

        // Initialize the player when the page loads
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

