// FixConnect Mock Data Store (Client-Side State)

const initialMockData = {
  user: {
    fullName: "Yassine Zekhnini",
    email: "yassinez@fixconnect.com",
    phone: "(123) 235-7800",
    avatar: "assets/images/user-avatar.png",
    workspace: "Pro Workspace",
    role: "Administrator",
    twoFactorEnabled: true,
    activeSessionsCount: 3,
    appearance: "light", // 'light' | 'dark' | 'system'
    notifications: {
      email: true,
      inApp: true,
      specificEvents: true,
      inAppEvents: true,
      disableEvents: false
    }
  },

  devices: [
    {
      id: "FC-7F3-KQ9",
      name: "DESKTOP-7F3KQ9",
      os: "Windows 11 Pro",
      osType: "windows",
      status: "online",
      lastSeen: "Just now",
      ip: "192.168.1.102",
      cpu: "Intel Core i9-13900K",
      ram: "32 GB",
      resolution: "2560x1440"
    },
    {
      id: "FC-902-134",
      name: "PC-BERKANE",
      os: "Windows 10",
      osType: "windows",
      status: "offline",
      lastSeen: "2 hours ago",
      ip: "192.168.1.88",
      cpu: "AMD Ryzen 7 5800X",
      ram: "16 GB",
      resolution: "1920x1080"
    },
    {
      id: "FC-448-912",
      name: "LAPTOP-USER",
      os: "Windows 11 Pro",
      osType: "windows",
      status: "online",
      lastSeen: "5 min ago",
      ip: "192.168.1.15",
      cpu: "Intel Core i7-12700H",
      ram: "16 GB",
      resolution: "1920x1080"
    },
    {
      id: "FC-892-410",
      name: "MacBook Pro M3 Max",
      os: "macOS Sonoma",
      osType: "mac",
      status: "active",
      lastSeen: "Active Session",
      ip: "192.168.1.45",
      cpu: "Apple M3 Max (16-core)",
      ram: "64 GB",
      resolution: "3456x2234"
    },
    {
      id: "FC-552-301",
      name: "UBUNTU-SERVER-PROD",
      os: "Ubuntu 22.04 LTS",
      osType: "linux",
      status: "online",
      lastSeen: "12 min ago",
      ip: "10.0.4.12",
      cpu: "AMD EPYC 7763",
      ram: "128 GB",
      resolution: "Headless"
    }
  ],

  activeSession: {
    deviceId: "FC-892-410",
    deviceName: "MacBook Pro M3 Max",
    os: "macOS Sonoma",
    osType: "mac",
    ip: "192.168.1.45",
    startedAt: "10:24 PM",
    durationSeconds: 2535, // 00:42:15
    connectionQuality: "Excellent",
    resolution: "1920x1080",
    fps: 60,
    latency: "14ms",
    encryption: "AES-256 Enabled"
  },

  recentSessions: [
    {
      id: "s-1",
      status: "active",
      deviceName: "DESKTOP-7F3KQ9",
      startedAt: "10:24 PM, Nov 8",
      duration: "12 min",
      deviceId: "FC-7F3-KQ9"
    },
    {
      id: "s-2",
      status: "ended",
      deviceName: "PC-BERKANE",
      startedAt: "08:12 PM, Nov 8",
      duration: "1h 8 min",
      deviceId: "FC-902-134"
    },
    {
      id: "s-3",
      status: "ended",
      deviceName: "LAPTOP-USER",
      startedAt: "07:45 PM, Nov 8",
      duration: "22 min",
      deviceId: "FC-448-912"
    }
  ],

  sessionsHistory: [
    {
      id: "sh-1",
      targetDevice: "Windows 11 Workstation",
      os: "Windows 11 Pro",
      osType: "windows",
      sessionId: "FC-892-410",
      startTime: "Apr 12, 2024, 8:38 PM",
      duration: "01:15:42",
      status: "Completed"
    },
    {
      id: "sh-2",
      targetDevice: "Ubuntu Server",
      os: "Ubuntu Server",
      osType: "linux",
      sessionId: "FC-892-410",
      startTime: "Apr 12, 2024, 9:17 PM",
      duration: "00:14:05",
      status: "Completed"
    },
    {
      id: "sh-3",
      targetDevice: "MacBook Air",
      os: "MacBook Air",
      osType: "mac",
      sessionId: "FC-892-410",
      startTime: "Apr 12, 2024, 8:00 PM",
      duration: "00:00:00",
      status: "Rejected"
    },
    {
      id: "sh-4",
      targetDevice: "PC-BERKANE",
      os: "Windows 10",
      osType: "windows",
      sessionId: "FC-902-134",
      startTime: "Nov 9, 2026, 3:15 PM",
      duration: "00:27:30",
      status: "Completed"
    },
    {
      id: "sh-5",
      targetDevice: "LAPTOP-USER",
      os: "Windows 11 Pro",
      osType: "windows",
      sessionId: "FC-448-912",
      startTime: "Nov 8, 2026, 7:45 PM",
      duration: "00:22:18",
      status: "Completed"
    },
    {
      id: "sh-6",
      targetDevice: "DEV-MAC-STUDIO",
      os: "macOS Sequoia",
      osType: "mac",
      sessionId: "FC-339-110",
      startTime: "Nov 7, 2026, 11:10 AM",
      duration: "02:04:11",
      status: "Completed"
    }
  ],

  activityLogs: [
    {
      id: "log-1",
      timestamp: "Nov 9, 2026 - 15:42",
      actor: "Yassine Zekhnini (me)",
      targetDevice: "DESKTOP-7F3KQ9",
      eventType: "Approved connection request",
      details: "Granted mouse/keyboard control",
      status: "Success"
    },
    {
      id: "log-2",
      timestamp: "Nov 9, 2026 - 15:35",
      actor: "System",
      targetDevice: "Laptop: WORK-LAPTOP",
      eventType: "New device registration",
      details: "Intel i9, Windows 11 Pro",
      status: "Registered"
    },
    {
      id: "log-3",
      timestamp: "Nov 9, 2026 - 14:12",
      actor: "Remote User (Berkane)",
      targetDevice: "PC-BERKANE",
      eventType: "Rejected connection request",
      details: "User consent declined (User consent required)",
      status: "Declined"
    },
    {
      id: "log-4",
      timestamp: "Nov 8, 2026 - 18:01",
      actor: "Yassine Zekhnini",
      targetDevice: "PC-BERKANE",
      eventType: "File transfer event",
      details: "patch_update_v2.zip (45 MB)",
      status: "Completed"
    },
    {
      id: "log-5",
      timestamp: "Nov 8, 2026 - 17:55",
      actor: "Admin User",
      targetDevice: "Yassine Z.'s Account",
      eventType: "Configuration change",
      details: "Upgraded to Pro subscription",
      status: "Applied"
    },
    {
      id: "log-6",
      timestamp: "Nov 8, 2026 - 10:20",
      actor: "Connection Attempt",
      targetDevice: "DESKTOP-7F3KQ9",
      eventType: "Connection attempt",
      details: "Port 443",
      status: "Timeout"
    },
    {
      id: "log-7",
      timestamp: "Nov 7, 2026 - 16:30",
      actor: "Yassine Zekhnini",
      targetDevice: "MacBook Pro M3 Max",
      eventType: "Session terminated normally",
      details: "Remote session finished cleanly after 42m",
      status: "Success"
    },
    {
      id: "log-8",
      timestamp: "Nov 7, 2026 - 09:14",
      actor: "Security Engine",
      targetDevice: "API Gateway",
      eventType: "Two-Factor Auth Verified",
      details: "Google Authenticator code verified successfully",
      status: "Success"
    }
  ],

  apiKeys: [
    {
      id: "key-1",
      name: "Production Agent Access",
      keyMasked: "fc_live_269859d8****4569a9352960",
      fullKey: "fc_live_269859d8112e43bc4569a9352960f89c",
      createdDate: "Aug 28, 2023",
      lastUsed: "Oct 3, 2023"
    },
    {
      id: "key-2",
      name: "Desktop Client Integration",
      keyMasked: "fc_live_26348905****569a9352978",
      fullKey: "fc_live_26348905987a22dc569a9352978a55ef",
      createdDate: "Aug 22, 2023",
      lastUsed: "Oct 3, 2023"
    }
  ],

  integrations: [
    {
      id: "gcal",
      name: "Google Calendar",
      icon: "calendar",
      status: "Connected",
      lastSync: "10:33 am"
    },
    {
      id: "slack",
      name: "Slack",
      icon: "slack",
      status: "Connected",
      lastSync: "10:33 am"
    },
    {
      id: "trello",
      name: "Trello",
      icon: "trello",
      status: "Not Configured",
      lastSync: "Never"
    }
  ],

  remoteSession: {
    targetDevice: "PC-BERKANE",
    os: "Windows 11 Pro",
    deviceId: "FC-902-134",
    resolution: "1920x1080",
    connectionQuality: "Excellent",
    connectedSince: "3:15 PM",
    durationSeconds: 1650, // 27:30
    encryption: "AES-256 Enabled",
    mouseControl: true,
    keyboardControl: true,
    startMenuOpen: false,
    fileTransfers: [
      {
        id: "ft-1",
        name: "patch_update_v3.zip",
        type: "Upload",
        size: "105MB",
        progress: 75,
        status: "in_progress",
        eta: "1:15 rem."
      },
      {
        id: "ft-2",
        name: "config_data.json",
        type: "Download",
        size: "1.2MB",
        progress: 100,
        status: "completed",
        eta: "Completed"
      },
      {
        id: "ft-3",
        name: "log_file.txt",
        type: "Upload",
        size: "12KB",
        progress: 100,
        status: "completed",
        eta: "Completed"
      }
    ],
    chatMessages: [
      {
        id: "msg-1",
        sender: "technician",
        senderName: "Technician: Yassine Z.",
        text: "I see the issue. Checking logs.",
        time: "3:17 PM"
      },
      {
        id: "msg-2",
        sender: "remote",
        senderName: "Remote User",
        text: "Okay, go ahead.",
        time: "3:18 PM"
      }
    ]
  }
};

// Global reactive state
window.FixConnectState = JSON.parse(JSON.stringify(initialMockData));
