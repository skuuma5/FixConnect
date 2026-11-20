// FixConnect Devices & Quick Connect Dashboard Component (Exact Match to Screenshot)

window.DevicesComponent = {
  render() {
    return `
      <div class="page-container" style="padding: 24px 32px; max-width: 1200px;">
        <!-- Page Title -->
        <div style="margin-bottom: 24px;">
          <h1 style="font-size: 28px; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; margin-bottom: 4px;">Devices</h1>
          <p style="font-size: 14px; color: #64748b;">Manage and access your devices remotely.</p>
        </div>

        <!-- Quick Connect Bar -->
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:8px 12px 8px 18px; display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; box-shadow:0 1px 2px rgba(0,0,0,0.03);">
          <div style="display:flex; align-items:center; gap:12px; flex:1;">
            <div style="color:#64748b; display:flex; align-items:center;">
              ${FixIcons.device('', 18)}
            </div>
            <input type="text" id="quick-device-id" placeholder="Enter device ID..." value="" style="border:none; outline:none; background:transparent; font-size:14px; color:#0f172a; width:100%; font-family:inherit;" onkeydown="if(event.key==='Enter') FixConnectApp.handleQuickConnect()">
          </div>
          <button class="btn btn-primary" style="background:#0f172a; border-radius:8px; padding:8px 20px; font-size:13px; font-weight:600; display:flex; align-items:center; gap:8px;" onclick="FixConnectApp.handleQuickConnect()">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            <span>Connect</span>
          </button>
        </div>

        <!-- Your Devices Card -->
        <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:20px 24px; margin-bottom:24px; box-shadow:0 1px 2px rgba(0,0,0,0.03);">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
            <div style="display:flex; align-items:center; gap:8px; font-size:15px; font-weight:700; color:#0f172a;">
              ${FixIcons.device('', 18)}
              <span>Your Devices</span>
            </div>
            <span style="font-size:12px; color:#94a3b8;">3 devices</span>
          </div>

          <div class="table-responsive">
            <table class="data-table" style="width:100%; border-collapse:collapse;">
              <thead>
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <th style="padding:10px 16px 10px 0; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Device</th>
                  <th style="padding:10px 16px; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Status</th>
                  <th style="padding:10px 16px; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Type</th>
                  <th style="padding:10px 16px; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Last Seen</th>
                  <th style="padding:10px 0 10px 16px; font-size:12px; font-weight:500; color:#64748b; text-align:right;">Actions</th>
                </tr>
              </thead>
              <tbody>
                <!-- Row 1: DESKTOP-7F3KQ9 -->
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:14px 16px 14px 0;">
                    <div style="display:flex; align-items:center; gap:12px;">
                      <img src="assets/images/device-thumb-1.jpg" alt="Screen" style="width:48px; height:30px; border-radius:4px; object-fit:cover; border:1px solid rgba(0,0,0,0.1);" onerror="this.style.background='#1e293b'">
                      <div>
                        <div style="font-size:13px; font-weight:600; color:#0f172a;">DESKTOP-7F3KQ9</div>
                        <div style="font-size:12px; color:#64748b;">Windows 11 Pro</div>
                      </div>
                    </div>
                  </td>
                  <td style="padding:14px 16px;">
                    <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:500; color:#10b981;">
                      <span style="width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
                      Online
                    </span>
                  </td>
                  <td style="padding:14px 16px; color:#0f172a;">
                    ${FixIcons.windows('', 16)}
                  </td>
                  <td style="padding:14px 16px; font-size:13px; color:#0f172a;">Just now</td>
                  <td style="padding:14px 0 14px 16px; text-align:right;">
                    <div style="display:inline-flex; align-items:center; gap:8px;">
                      <button class="btn btn-outline btn-sm" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:5px 14px; font-size:12px; font-weight:500; color:#0f172a; display:inline-flex; align-items:center; gap:6px;" onclick="FixConnectApp.connectToDevice('FC-7F3-KQ9', 'DESKTOP-7F3KQ9')">
                        ${FixIcons.device('', 13)}
                        <span>Connect</span>
                      </button>
                      <button class="icon-btn" style="color:#64748b;" onclick="FixConnectApp.showDeviceOptions('FC-7F3-KQ9')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <!-- Row 2: PC-BERKANE -->
                <tr style="border-bottom:1px solid #f1f5f9;">
                  <td style="padding:14px 16px 14px 0;">
                    <div style="display:flex; align-items:center; gap:12px;">
                      <img src="assets/images/device-thumb-2.jpg" alt="Screen" style="width:48px; height:30px; border-radius:4px; object-fit:cover; border:1px solid rgba(0,0,0,0.1);" onerror="this.style.background='#1e293b'">
                      <div>
                        <div style="font-size:13px; font-weight:600; color:#0f172a;">PC-BERKANE</div>
                        <div style="font-size:12px; color:#64748b;">Windows 10</div>
                      </div>
                    </div>
                  </td>
                  <td style="padding:14px 16px;">
                    <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:500; color:#94a3b8;">
                      <span style="width:6px; height:6px; border-radius:50%; background:#94a3b8;"></span>
                      Offline
                    </span>
                  </td>
                  <td style="padding:14px 16px; color:#0f172a;">
                    ${FixIcons.windows('', 16)}
                  </td>
                  <td style="padding:14px 16px; font-size:13px; color:#0f172a;">2 hours ago</td>
                  <td style="padding:14px 0 14px 16px; text-align:right;">
                    <div style="display:inline-flex; align-items:center; gap:8px;">
                      <button class="btn btn-outline btn-sm" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:5px 14px; font-size:12px; font-weight:500; color:#0f172a; display:inline-flex; align-items:center; gap:6px;" onclick="FixConnectApp.connectToDevice('FC-902-134', 'PC-BERKANE')">
                        ${FixIcons.device('', 13)}
                        <span>Connect</span>
                      </button>
                      <button class="icon-btn" style="color:#64748b;" onclick="FixConnectApp.showDeviceOptions('FC-902-134')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                      </button>
                    </div>
                  </td>
                </tr>

                <!-- Row 3: LAPTOP-USER -->
                <tr>
                  <td style="padding:14px 16px 14px 0;">
                    <div style="display:flex; align-items:center; gap:12px;">
                      <img src="assets/images/device-thumb-3.jpg" alt="Screen" style="width:48px; height:30px; border-radius:4px; object-fit:cover; border:1px solid rgba(0,0,0,0.1);" onerror="this.style.background='#1e293b'">
                      <div>
                        <div style="font-size:13px; font-weight:600; color:#0f172a;">LAPTOP-USER</div>
                        <div style="font-size:12px; color:#64748b;">Windows 11 Pro</div>
                      </div>
                    </div>
                  </td>
                  <td style="padding:14px 16px;">
                    <span style="display:inline-flex; align-items:center; gap:6px; font-size:13px; font-weight:500; color:#10b981;">
                      <span style="width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
                      Online
                    </span>
                  </td>
                  <td style="padding:14px 16px; color:#0f172a;">
                    ${FixIcons.windows('', 16)}
                  </td>
                  <td style="padding:14px 16px; font-size:13px; color:#0f172a;">5 min ago</td>
                  <td style="padding:14px 0 14px 16px; text-align:right;">
                    <div style="display:inline-flex; align-items:center; gap:8px;">
                      <button class="btn btn-outline btn-sm" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:5px 14px; font-size:12px; font-weight:500; color:#0f172a; display:inline-flex; align-items:center; gap:6px;" onclick="FixConnectApp.connectToDevice('FC-448-912', 'LAPTOP-USER')">
                        ${FixIcons.device('', 13)}
                        <span>Connect</span>
                      </button>
                      <button class="icon-btn" style="color:#64748b;" onclick="FixConnectApp.showDeviceOptions('FC-448-912')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Bottom Grid: Recent Sessions & Current Session -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
          <!-- Left Card: Recent Sessions -->
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:20px 24px; box-shadow:0 1px 2px rgba(0,0,0,0.03);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
              <div style="display:flex; align-items:center; gap:8px; font-size:15px; font-weight:700; color:#0f172a;">
                ${FixIcons.clock('', 16)}
                <span>Recent Sessions</span>
              </div>
              <a href="#" style="font-size:12px; color:#0f172a; text-decoration:none; font-weight:500;" onclick="FixConnectApp.navigate('sessions')">View all &rarr;</a>
            </div>

            <div class="table-responsive">
              <table style="width:100%; border-collapse:collapse; font-size:13px;">
                <thead>
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <th style="padding:8px 8px 8px 0; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Status</th>
                    <th style="padding:8px 8px; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Device</th>
                    <th style="padding:8px 8px; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Started At</th>
                    <th style="padding:8px 8px; font-size:12px; font-weight:500; color:#64748b; text-align:left;">Duration</th>
                    <th style="padding:8px 0 8px 8px; font-size:12px; font-weight:500; color:#64748b; text-align:right;"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid #f8fafc;">
                    <td style="padding:10px 8px 10px 0;">
                      <span style="display:inline-flex; align-items:center; gap:6px; color:#10b981; font-weight:500; font-size:12px;">
                        <span style="width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
                        Active
                      </span>
                    </td>
                    <td style="padding:10px 8px; font-weight:600; color:#0f172a; font-size:12px;">DESKTOP-7F3KQ9</td>
                    <td style="padding:10px 8px; color:#0f172a; font-size:12px;">10:24 PM, Nov 8</td>
                    <td style="padding:10px 8px; color:#0f172a; font-size:12px;">12 min</td>
                    <td style="padding:10px 0 10px 8px; text-align:right;">
                      <button class="btn btn-outline btn-sm" style="padding:3px 10px; font-size:11px; border-radius:6px;" onclick="FixConnectApp.navigate('remote')">View</button>
                    </td>
                  </tr>
                  <tr style="border-bottom:1px solid #f8fafc;">
                    <td style="padding:10px 8px 10px 0;">
                      <span style="display:inline-flex; align-items:center; gap:6px; color:#94a3b8; font-weight:500; font-size:12px;">
                        <span style="width:6px; height:6px; border-radius:50%; background:#94a3b8;"></span>
                        Ended
                      </span>
                    </td>
                    <td style="padding:10px 8px; font-weight:600; color:#0f172a; font-size:12px;">PC-BERKANE</td>
                    <td style="padding:10px 8px; color:#0f172a; font-size:12px;">08:12 PM, Nov 8</td>
                    <td style="padding:10px 8px; color:#0f172a; font-size:12px;">1h 8 min</td>
                    <td style="padding:10px 0 10px 8px; text-align:right;">
                      <button class="btn btn-outline btn-sm" style="padding:3px 10px; font-size:11px; border-radius:6px;" onclick="FixConnectApp.navigate('remote')">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 8px 10px 0;">
                      <span style="display:inline-flex; align-items:center; gap:6px; color:#94a3b8; font-weight:500; font-size:12px;">
                        <span style="width:6px; height:6px; border-radius:50%; background:#94a3b8;"></span>
                        Ended
                      </span>
                    </td>
                    <td style="padding:10px 8px; font-weight:600; color:#0f172a; font-size:12px;">LAPTOP-USER</td>
                    <td style="padding:10px 8px; color:#0f172a; font-size:12px;">07:45 PM, Nov 8</td>
                    <td style="padding:10px 8px; color:#0f172a; font-size:12px;">22 min</td>
                    <td style="padding:10px 0 10px 8px; text-align:right;">
                      <button class="btn btn-outline btn-sm" style="padding:3px 10px; font-size:11px; border-radius:6px;" onclick="FixConnectApp.navigate('remote')">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Right Card: Current Session -->
          <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:20px 24px; box-shadow:0 1px 2px rgba(0,0,0,0.03);">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:16px;">
              <div style="display:flex; align-items:center; gap:8px; font-size:15px; font-weight:700; color:#0f172a;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                <span>Current Session</span>
              </div>
              <span style="display:inline-flex; align-items:center; gap:5px; font-size:11px; font-weight:600; color:#16a34a; background:#f0fdf4; border:1px solid #bbf7d0; padding:2px 8px; border-radius:12px;">
                <span style="width:5px; height:5px; border-radius:50%; background:#16a34a;"></span>
                Active
              </span>
            </div>

            <div style="display:flex; gap:16px; align-items:center; margin-bottom:16px;">
              <img src="assets/images/current-session-thumb.jpg" alt="Current Session" style="width:76px; height:48px; border-radius:4px; object-fit:cover; border:1px solid rgba(0,0,0,0.1);" onerror="this.style.background='#1e293b'">
              <div>
                <div style="font-weight:700; font-size:14px; color:#0f172a;">DESKTOP-7F3KQ9</div>
                <div style="font-size:12px; color:#64748b; margin:2px 0;">You are currently connected to this device.</div>
                <div style="font-size:11px; color:#64748b; display:flex; align-items:center; gap:4px;">
                  ${FixIcons.clock('', 11)}
                  <span>Since 10:24 PM &middot; 12 min</span>
                </div>
              </div>
            </div>

            <!-- Notice box with End Session button -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:10px 14px; display:flex; align-items:center; justify-content:space-between; gap:12px;">
              <div style="font-size:12px; color:#0f172a; font-weight:500; display:flex; align-items:center; gap:6px;">
                <span style="font-size:13px; color:#64748b;">ⓘ</span>
                <span>The remote user must approve your access request.</span>
              </div>
              <button class="btn btn-primary btn-sm" style="background:#0f172a; border-radius:8px; padding:6px 14px; font-size:12px; font-weight:600; display:flex; align-items:center; gap:6px; flex-shrink:0;" onclick="FixConnectApp.showToast('Ending current session...')">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"></rect></svg>
                <span>End Session</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
