// FixConnect Master Application Controller & Router

const FixConnectApp = {
  currentView: 'landing', // default initial view: 'landing' (Opens Landing Page first)
  theme: 'light',
  remoteDurationSec: 1650, // 27:30
  activeSessionDurationSec: 2535, // 00:42:15
  timerInterval: null,

  init() {
    // Check URL hash if present
    const hash = window.location.hash.replace('#', '');
    if (['landing', 'home', 'devices', 'sessions', 'activity', 'settings', 'remote', 'subscription'].includes(hash)) {
      this.currentView = hash;
    }

    this.render();
    this.startTimers();
    this.setupListeners();
  },

  navigate(viewId) {
    if (viewId === 'subscription') {
      this.showToast('Pro Workspace Subscription: Active (Billed annually)');
      viewId = 'settings';
    }

    this.currentView = viewId;
    window.location.hash = viewId;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  render() {
    const root = document.getElementById('app-root');
    if (!root) return;

    let contentHtml = '';

    if (this.currentView === 'landing') {
      contentHtml = `
        ${LandingComponent.render()}
      `;
    } else if (this.currentView === 'remote') {
      contentHtml = `
        ${RemoteComponent.render()}
      `;
    } else {
      // Standard Dashboard Layout
      let pageContent = '';
      let sectionName = 'Devices';
      let searchPlaceholder = 'Search devices...';

      if (this.currentView === 'home') {
        sectionName = 'Devices';
        searchPlaceholder = 'Search devices...';
        pageContent = HomeComponent.render();
      } else if (this.currentView === 'devices') {
        sectionName = 'Devices';
        searchPlaceholder = 'Search devices...';
        pageContent = DevicesComponent.render('devices');
      } else if (this.currentView === 'sessions') {
        sectionName = 'Sessions';
        searchPlaceholder = 'Search sessions...';
        pageContent = SessionsComponent.render();
      } else if (this.currentView === 'activity') {
        sectionName = 'Activity';
        searchPlaceholder = 'Search activity...';
        pageContent = ActivityComponent.render();
      } else if (this.currentView === 'settings') {
        sectionName = 'Settings';
        searchPlaceholder = 'Search settings...';
        pageContent = SettingsComponent.render();
      }

      contentHtml = `
        <div class="app-container">
          ${NavbarComponent.renderSidebar(this.currentView)}
          <main class="main-wrapper">
            ${NavbarComponent.renderTopHeader(sectionName, searchPlaceholder)}
            ${pageContent}
          </main>
        </div>
      `;
    }

    root.innerHTML = contentHtml;
    this.updateThemeUi();
  },

  startTimers() {
    if (this.timerInterval) clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      this.activeSessionDurationSec++;
      this.remoteDurationSec++;

      // Update active session stopwatch
      const activeEl = document.getElementById('session-live-stopwatch');
      if (activeEl) {
        activeEl.innerText = this.formatTime(this.activeSessionDurationSec);
      }

      // Update remote live duration
      const remoteEl = document.getElementById('remote-live-duration');
      if (remoteEl) {
        remoteEl.innerText = this.formatTimeMinutes(this.remoteDurationSec);
      }
    }, 1000);
  },

  formatTime(totalSec) {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  formatTimeMinutes(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  },

  // Remote desktop interactions
  handleQuickConnect() {
    const input = document.getElementById('quick-device-id');
    const deviceId = input ? input.value.trim() : 'FC-902-134';
    if (!deviceId) {
      this.showToast('Please enter a valid Device ID');
      return;
    }

    this.showToast(`Connecting to ${deviceId}... Establishing encrypted TLS tunnel...`);
    setTimeout(() => {
      window.FixConnectState.remoteSession.deviceId = deviceId;
      this.navigate('remote');
    }, 700);
  },

  connectToDevice(id, name) {
    this.showToast(`Initiating session with ${name} (${id})...`);
    setTimeout(() => {
      window.FixConnectState.remoteSession.deviceId = id;
      window.FixConnectState.remoteSession.targetDevice = name;
      this.navigate('remote');
    }, 600);
  },

  toggleStartMenu() {
    const menu = document.getElementById('win11-start-menu');
    const btn = document.getElementById('start-btn');
    if (menu) {
      menu.classList.toggle('open');
      if (btn) btn.classList.toggle('active', menu.classList.contains('open'));
    }
  },

  handleCanvasClick(event) {
    // If click is outside start menu and start button, close start menu
    const menu = document.getElementById('win11-start-menu');
    const btn = document.getElementById('start-btn');
    if (menu && menu.classList.contains('open')) {
      if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove('open');
        if (btn) btn.classList.remove('active');
      }
    }
  },

  toggleControl(type, el) {
    el.classList.toggle('active');
    const isActive = el.classList.contains('active');
    this.showToast(`${type.charAt(0).toUpperCase() + type.slice(1)} control ${isActive ? 'enabled' : 'paused'}.`);
  },

  changeResolution() {
    const resolutions = ['95%', '100%', 'Fit Screen'];
    const current = window.FixConnectState.remoteSession.resolution;
    this.showToast('Resolution adjusted to 1920x1080 (Optimized 60 FPS)');
  },

  syncClipboard() {
    navigator.clipboard?.writeText('https://app.fixconnect.com/session/FC-902-134');
    this.showToast('Clipboard synchronized: Remote & host clipboard in sync.');
  },

  takeScreenshot() {
    const canvas = document.getElementById('remote-screen-canvas');
    if (canvas) {
      canvas.style.transition = 'filter 0.1s ease';
      canvas.style.filter = 'brightness(1.5)';
      setTimeout(() => {
        canvas.style.filter = 'none';
      }, 150);
    }
    this.showToast('Screenshot saved: FixConnect_PC-BERKANE_snap.png');
  },

  triggerFileTransfer() {
    const input = document.getElementById('real-file-input');
    if (input) input.click();
  },

  handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const newTransfer = {
      id: 'ft-' + Date.now(),
      name: file.name,
      type: 'Upload',
      size: (file.size / (1024 * 1024)).toFixed(1) + 'MB',
      progress: 0,
      status: 'in_progress',
      eta: 'Transferring...'
    };

    window.FixConnectState.remoteSession.fileTransfers.unshift(newTransfer);
    this.showToast(`Starting upload: ${file.name}`);
    this.render();

    // Simulate animated upload progress
    let p = 0;
    const interval = setInterval(() => {
      p += 20;
      newTransfer.progress = p;
      if (p >= 100) {
        newTransfer.status = 'completed';
        newTransfer.eta = 'Completed';
        clearInterval(interval);
        this.showToast(`File upload complete: ${file.name}`);
      }
      this.render();
    }, 400);
  },

  sendChatMessage() {
    const input = document.getElementById('remote-chat-input');
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;

    const newMsg = {
      id: 'msg-' + Date.now(),
      sender: 'technician',
      senderName: 'Technician: Yassine Z.',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    window.FixConnectState.remoteSession.chatMessages.push(newMsg);
    input.value = '';
    this.render();

    // Scroll chat to bottom
    const container = document.getElementById('remote-chat-messages');
    if (container) container.scrollTop = container.scrollHeight;

    // Automated simulated reply
    setTimeout(() => {
      const replies = [
        "Received. I'm keeping the window open.",
        "Understood, thank you!",
        "Yes, I see your mouse moving now.",
        "System is running much smoother now, thanks!"
      ];
      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      window.FixConnectState.remoteSession.chatMessages.push({
        id: 'msg-rep-' + Date.now(),
        sender: 'remote',
        senderName: 'Remote User',
        text: randomReply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.render();
      const c = document.getElementById('remote-chat-messages');
      if (c) c.scrollTop = c.scrollHeight;
    }, 1200);
  },

  pauseAccess() {
    this.showToast('Keyboard and mouse input temporarily paused for remote user.');
  },

  toggleRemoteFullscreen() {
    const elem = document.getElementById('remote-workspace-container') || document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen?.().catch(() => {});
      this.showToast('Entered Fullscreen mode (Press ESC to exit)');
    } else {
      document.exitFullscreen?.().catch(() => {});
      this.showToast('Exited Fullscreen mode');
    }
  },

  // Export functions
  exportActivityCSV() {
    const logs = window.FixConnectState.activityLogs;
    let csv = "Timestamp,Actor,Target Device,Event Type,Details,Status\n";
    logs.forEach(l => {
      csv += `"${l.timestamp}","${l.actor}","${l.targetDevice}","${l.eventType}","${l.details}","${l.status}"\n`;
    });
    this.downloadFile('fixconnect_activity_logs.csv', csv, 'text/csv');
    this.showToast('Exported audit trail to fixconnect_activity_logs.csv');
  },

  exportSessionLogs() {
    const history = window.FixConnectState.sessionsHistory;
    let csv = "Target Device,OS,Session ID,Start Time,Duration,Status\n";
    history.forEach(h => {
      csv += `"${h.targetDevice}","${h.os}","${h.sessionId}","${h.startTime}","${h.duration}","${h.status}"\n`;
    });
    this.downloadFile('fixconnect_sessions_export.csv', csv, 'text/csv');
    this.showToast('Exported session records to fixconnect_sessions_export.csv');
  },

  exportSettingsConfig() {
    const data = JSON.stringify(window.FixConnectState, null, 2);
    this.downloadFile('fixconnect_configuration.json', data, 'application/json');
    this.showToast('Exported workspace configuration to JSON');
  },

  downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Settings Actions
  saveSettings() {
    const nameEl = document.getElementById('setting-fullname');
    const emailEl = document.getElementById('setting-email');
    const phoneEl = document.getElementById('setting-phone');

    if (nameEl) window.FixConnectState.user.fullName = nameEl.value;
    if (emailEl) window.FixConnectState.user.email = emailEl.value;
    if (phoneEl) window.FixConnectState.user.phone = phoneEl.value;

    this.showToast('Changes saved successfully!');
    this.render();
  },

  discardSettings() {
    this.showToast('Settings changes reverted.');
    this.render();
  },

  createNewApiKey() {
    const newKey = {
      id: 'key-' + Date.now(),
      name: 'API Key ' + (window.FixConnectState.apiKeys.length + 1),
      keyMasked: 'fc_live_' + Math.random().toString(36).substring(2, 10) + '****' + Math.random().toString(36).substring(2, 6),
      fullKey: 'fc_live_' + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2),
      createdDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      lastUsed: 'Just now'
    };
    window.FixConnectState.apiKeys.unshift(newKey);
    this.showToast('Created new API Key: ' + newKey.name);
    this.render();
  },

  revokeApiKey(id) {
    window.FixConnectState.apiKeys = window.FixConnectState.apiKeys.filter(k => k.id !== id);
    this.showToast('API key revoked.');
    this.render();
  },

  copyApiKey(key) {
    navigator.clipboard?.writeText(key);
    this.showToast('Copied API Key to clipboard: ' + key.substring(0, 16) + '...');
  },

  handleAppearanceChange(val) {
    window.FixConnectState.user.appearance = val;
    if (val === 'dark') {
      this.theme = 'dark';
      document.body.classList.add('theme-dark');
    } else {
      this.theme = 'light';
      document.body.classList.remove('theme-dark');
    }
    this.updateThemeUi();
    this.showToast(`Theme changed to ${val}`);
  },

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    window.FixConnectState.user.appearance = this.theme;
    if (this.theme === 'dark') {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
    this.updateThemeUi();
  },

  updateThemeUi() {
    // Theme UI updated
  },

  promptAddDevice() {
    const name = prompt('Enter Device Name (e.g. WORKSTATION-01):', 'WORKSTATION-01');
    if (!name) return;
    const newDev = {
      id: 'FC-' + Math.floor(100 + Math.random() * 900) + '-' + Math.floor(100 + Math.random() * 900),
      name: name,
      os: 'Windows 11 Pro',
      osType: 'windows',
      status: 'online',
      lastSeen: 'Just now',
      ip: '192.168.1.' + Math.floor(20 + Math.random() * 200),
      cpu: 'Intel Core i7-13700',
      ram: '32 GB',
      resolution: '1920x1080'
    };
    window.FixConnectState.devices.unshift(newDev);
    this.showToast(`Device registered: ${name} (${newDev.id})`);
    this.render();
  },

  showDeviceOptions(id) {
    this.showToast(`Device options for ${id}: Reboot, Wake-on-LAN, Diagnostics available.`);
  },

  filterSessionHistory(status) {
    const tbody = document.getElementById('sessions-history-tbody');
    if (!tbody) return;
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(r => {
      if (status === 'all') {
        r.style.display = '';
      } else {
        r.style.display = r.innerText.includes(status) ? '' : 'none';
      }
    });
  },

  searchSessionHistory(query) {
    const q = query.toLowerCase();
    const tbody = document.getElementById('sessions-history-tbody');
    if (!tbody) return;
    tbody.querySelectorAll('tr').forEach(r => {
      r.style.display = r.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  },

  searchActivityLogs(query) {
    const q = query.toLowerCase();
    const tbody = document.getElementById('activity-logs-tbody');
    if (!tbody) return;
    tbody.querySelectorAll('tr').forEach(r => {
      r.style.display = r.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  },

  handleSearch(event) {
    const q = event.target.value.toLowerCase();
    if (event.key === 'Enter' && q) {
      this.showToast(`Searching for "${q}" across platform...`);
    }
  },

  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span>${window.FixIcons ? window.FixIcons.check('', 14) : ''}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.2s, transform 0.2s';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  },

  setupListeners() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && hash !== this.currentView) {
        this.navigate(hash);
      }
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  FixConnectApp.init();
});
