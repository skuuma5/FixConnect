// FixConnect Interactive Remote Session Component (No Emojis)

window.RemoteComponent = {
  render() {
    const remote = window.FixConnectState.remoteSession;

    const fileTransferRowsHtml = remote.fileTransfers.map(f => {
      const isProgress = f.status === 'in_progress';
      return `
        <div class="file-item">
          <div class="file-item-header">
            <span>${f.name}</span>
            <span style="color:${isProgress ? '#60a5fa' : '#34d399'}; font-size:10px;">${isProgress ? f.progress + '% &middot; ' + f.eta : f.eta}</span>
          </div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style="width: ${f.progress}%; background: ${isProgress ? '#3b82f6' : '#10b981'};"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:10px; color:#9ca3af;">
            <span>${f.type} &middot; ${f.size}</span>
            <span>${isProgress ? 'Transferring...' : 'Completed'}</span>
          </div>
        </div>
      `;
    }).join('');

    const chatMessagesHtml = remote.chatMessages.map(m => `
      <div class="chat-bubble ${m.sender}">
        <div class="sender">${m.senderName}</div>
        <div>${m.text}</div>
      </div>
    `).join('');

    return `
      <div class="remote-screen-view">
        <!-- Remote Screen Top Bar -->
        <div class="remote-top-bar">
          <div class="remote-top-left">
            <div class="remote-brand" onclick="FixConnectApp.navigate('landing')" style="cursor:pointer;">
              <img src="assets/images/fixconnect-logo-white.png" alt="FixConnect" onerror="this.src='assets/images/fixconnect-logo.png'">
              <span>FixConnect</span>
            </div>
            <div style="color:#6b7280; font-size:12px;">|</div>
            <div class="remote-device-title">
              <span>${remote.targetDevice}</span>
              <span class="badge-green">&bull; Connected</span>
            </div>
          </div>

          <div class="remote-top-right">
            <span style="font-size:12px; color:#34d399; display:flex; align-items:center; gap:6px;">
              <span style="width:7px; height:7px; border-radius:50%; background:#10b981;"></span>
              Excellent
            </span>
            <button class="btn btn-outline btn-sm" style="background:#1f2937; border-color:#374151; color:#fff;" onclick="FixConnectApp.toggleRemoteFullscreen()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
              Fullscreen
            </button>
            <button class="icon-btn" style="color:#fff;" title="Session Settings">
              ${FixIcons.settings('', 16)}
            </button>
            <button class="btn btn-danger btn-sm" onclick="FixConnectApp.navigate('sessions')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
              End Session
            </button>
          </div>
        </div>

        <!-- Remote Main Layout (Canvas + Right Sidebar) -->
        <div class="remote-main-layout" id="remote-workspace-container">
          <!-- Canvas Area (Simulated Desktop) -->
          <div class="remote-canvas-area" id="remote-screen-canvas" onclick="FixConnectApp.handleCanvasClick(event)">
            <!-- Top Floating Pill -->
            <div class="floating-control-badge">
              ${FixIcons.clock('', 14)}
              <span>Controlling mouse & keyboard</span>
            </div>

            <!-- Breadcrumb overlay -->
            <div style="position:absolute; top:14px; left:20px; font-size:12px; color:#cbd5e1; z-index:20; background:rgba(15,23,42,0.6); padding:4px 10px; border-radius:6px;">
              Sessions &gt; <strong>${remote.targetDevice}</strong>
            </div>

            <!-- Simulated Desktop Canvas -->
            <div class="win11-desktop" style="background-image: url('assets/images/win11-remote-screen.jpg');">
              <!-- Desktop Icons (SVGs - No Emojis) -->
              <div style="position:absolute; top:60px; left:20px; display:flex; flex-direction:column; gap:20px; z-index:10;">
                <div style="display:flex; flex-direction:column; align-items:center; width:64px; text-align:center; cursor:pointer;" onclick="FixConnectApp.showToast('Opened This PC')">
                  <div style="width:36px; height:36px; background:rgba(15,23,42,0.6); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#60a5fa; margin-bottom:4px;">
                    ${FixIcons.device('', 20)}
                  </div>
                  <span style="font-size:11px; text-shadow:0 1px 2px #000; color:#fff;">This PC</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; width:64px; text-align:center; cursor:pointer;" onclick="FixConnectApp.showToast('Opened Recycle Bin')">
                  <div style="width:36px; height:36px; background:rgba(15,23,42,0.6); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#94a3b8; margin-bottom:4px;">
                    ${FixIcons.trash('', 20)}
                  </div>
                  <span style="font-size:11px; text-shadow:0 1px 2px #000; color:#fff;">Recycle Bin</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; width:64px; text-align:center; cursor:pointer;" onclick="FixConnectApp.showToast('Opened Chrome')">
                  <div style="width:36px; height:36px; background:rgba(15,23,42,0.6); border-radius:8px; display:flex; align-items:center; justify-content:center; color:#38bdf8; margin-bottom:4px;">
                    ${FixIcons.globe('', 20)}
                  </div>
                  <span style="font-size:11px; text-shadow:0 1px 2px #000; color:#fff;">Chrome</span>
                </div>
              </div>

              <!-- Interactive Simulated Start Menu (SVGs - No Emojis) -->
              <div class="win11-start-menu" id="win11-start-menu">
                <div class="start-menu-grid">
                  <div class="start-menu-col">
                    <h5>Recent</h5>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening This PC...')">
                      ${FixIcons.device('', 14)} <span>This PC</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Desktop...')">
                      ${FixIcons.laptop('', 14)} <span>Desktop</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Recycle Bin...')">
                      ${FixIcons.trash('', 14)} <span>Recycle Bin</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Documents...')">
                      ${FixIcons.file('', 14)} <span>Documents</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Music...')">
                      ${FixIcons.volume('', 14)} <span>Music</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Slack...')">
                      ${FixIcons.slack('', 14)} <span>Slack</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Windows 11 Server...')">
                      ${FixIcons.windows('', 14)} <span>Windows 11 Server</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Work folder...')">
                      ${FixIcons.folder('', 14)} <span>Work</span>
                    </div>
                  </div>
                  <div class="start-menu-col">
                    <h5>Applications</h5>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Slack...')">
                      ${FixIcons.slack('', 14)} <span>Slack</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Code Editor...')">
                      ${FixIcons.code('', 14)} <span>Code Editor</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Explorer...')">
                      ${FixIcons.folder('', 14)} <span>Explorers</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Azure Portal...')">
                      ${FixIcons.cloud('', 14)} <span>Microsoft Azure</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching FixConnect Agent...')">
                      ${FixIcons.activity('', 14)} <span>FixConnect Agent</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Security...')">
                      ${FixIcons.shield('', 14)} <span>Security</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Settings...')">
                      ${FixIcons.settings('', 14)} <span>Settings</span>
                    </div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Device Camera...')">
                      ${FixIcons.device('', 14)} <span>Camera</span>
                    </div>
                  </div>
                </div>
                <div class="start-search-box">
                  ${FixIcons.search('', 14)}
                  <input type="text" placeholder="Search program and files..." style="border:none; outline:none; width:100%; font-size:12px;">
                </div>
              </div>

              <!-- Windows 11 Bottom Taskbar (SVGs - No Emojis) -->
              <div class="win11-taskbar">
                <div style="font-size:11px; color:#1e293b; font-weight:600; display:flex; align-items:center; gap:6px;">
                  ${FixIcons.cloud('', 13)}
                  <span>22°C Clear</span>
                </div>
                <div class="win11-taskbar-center">
                  <div class="win11-task-icon" id="start-btn" onclick="FixConnectApp.toggleStartMenu()" title="Start">
                    ${FixIcons.windows('', 18)}
                  </div>
                  <div class="win11-task-icon" onclick="FixConnectApp.showToast('Windows Search')" title="Search">
                    ${FixIcons.search('', 15)}
                  </div>
                  <div class="win11-task-icon" onclick="FixConnectApp.showToast('Task View')" title="Task View">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="18" rx="1"></rect><rect x="14" y="3" width="7" height="18" rx="1"></rect></svg>
                  </div>
                  <div class="win11-task-icon" onclick="FixConnectApp.showToast('Widgets')" title="Widgets">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </div>
                  <div class="win11-task-icon" onclick="FixConnectApp.showToast('File Explorer')" title="File Explorer">
                    ${FixIcons.folder('', 16)}
                  </div>
                  <div class="win11-task-icon active" onclick="FixConnectApp.showToast('Edge Browser active')" title="Microsoft Edge">
                    ${FixIcons.globe('', 16)}
                  </div>
                  <div class="win11-task-icon" onclick="FixConnectApp.showToast('Microsoft Store')" title="Store">
                    ${FixIcons.subscription('', 15)}
                  </div>
                </div>
                <div class="win11-tray">
                  <span>ENG</span>
                  <span>${FixIcons.volume('', 13)}</span>
                  <span>${FixIcons.wifi('', 13)}</span>
                  <span style="display:flex; align-items:center; gap:3px;">${FixIcons.battery('', 13)} 98%</span>
                  <div style="text-align:right; line-height:1.2;">
                    <div>3:15 PM</div>
                    <div style="font-size:10px; color:#64748b;">1/29/2024</div>
                  </div>
                </div>
              </div>

              <!-- Floating Remote Control Toolbar (Matches Image 6 bottom) -->
              <div class="remote-control-toolbar">
                <div class="toolbar-item active" onclick="FixConnectApp.toggleControl('mouse', this)" title="Mouse Control">
                  ${FixIcons.mouse('', 16)}
                  <span>Mouse</span>
                </div>
                <div class="toolbar-item active" onclick="FixConnectApp.toggleControl('keyboard', this)" title="Keyboard Control">
                  ${FixIcons.keyboard('', 16)}
                  <span>Keyboard</span>
                </div>
                <div class="toolbar-item" onclick="FixConnectApp.changeResolution()" title="Resolution">
                  <span style="font-size:12px; font-weight:700;">95%</span>
                  <span>Resolution</span>
                </div>
                <div class="toolbar-item" onclick="FixConnectApp.showToast('Display 1 / 1 selected')" title="Display">
                  ${FixIcons.device('', 16)}
                  <span>Display</span>
                </div>
                <div class="toolbar-item" onclick="FixConnectApp.toggleRemoteFullscreen()" title="Fullscreen">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                  <span>Fullscreen</span>
                </div>
                <div class="toolbar-item" onclick="FixConnectApp.syncClipboard()" title="Clipboard Sync">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                  <span>Clipboard</span>
                </div>
                <div class="toolbar-item" onclick="FixConnectApp.triggerFileTransfer()" title="File Transfer">
                  ${FixIcons.transfer('', 16)}
                  <span>File</span>
                </div>
                <div class="toolbar-item" onclick="FixConnectApp.takeScreenshot()" title="Screenshot">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  <span>Screenshot</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar Panel -->
          <aside class="remote-side-panel">
            <!-- Section 1: Device Information -->
            <div class="remote-section">
              <div class="remote-section-title">
                <span>Device Information</span>
              </div>
              <div class="info-row">
                <span class="label">Device name</span>
                <span class="val">${remote.targetDevice}</span>
              </div>
              <div class="info-row">
                <span class="label">Operating System</span>
                <span class="val">${remote.os}</span>
              </div>
              <div class="info-row">
                <span class="label">Device ID</span>
                <span class="val">${remote.deviceId}</span>
              </div>
              <div class="info-row">
                <span class="label">Resolution</span>
                <span class="val">${remote.resolution}</span>
              </div>
              <div class="info-row">
                <span class="label">Connection quality</span>
                <span class="val" style="color:#34d399;">${remote.connectionQuality}</span>
              </div>
            </div>

            <!-- Section 2: Session Information -->
            <div class="remote-section">
              <div class="remote-section-title">
                <span>Session Information</span>
              </div>
              <div class="info-row">
                <span class="label">Connected since</span>
                <span class="val">${remote.connectedSince}</span>
              </div>
              <div class="info-row">
                <span class="label">Session duration</span>
                <span class="val" id="remote-live-duration" style="font-family:monospace; color:#60a5fa;">27:30</span>
              </div>
              <div class="info-row">
                <span class="label">Encryption status</span>
                <span class="val">${remote.encryption}</span>
              </div>
            </div>

            <!-- Section 3: File Transfer Panel -->
            <div class="remote-section">
              <div class="remote-section-title">
                <div style="display:flex; align-items:center; gap:6px;">
                  ${FixIcons.transfer('', 14)}
                  <span>File Transfer Panel</span>
                </div>
                <span style="font-size:10px; cursor:pointer; color:#9ca3af;" onclick="FixConnectApp.showToast('Showing all file transfers')">View all &and;</span>
              </div>

              <div id="file-transfer-list">
                ${fileTransferRowsHtml}
              </div>

              <!-- Drag & Drop Zone -->
              <input type="file" id="real-file-input" style="display:none;" onchange="FixConnectApp.handleFileSelect(event)">
              <div class="drop-zone" onclick="document.getElementById('real-file-input').click()">
                <div style="margin-bottom:4px; color:#60a5fa;">${FixIcons.upload('', 20)}</div>
                <div style="font-weight:600; font-size:11px;">Drag & drop area</div>
                <div style="font-size:10px; color:#6b7280;">or click to upload files</div>
              </div>
            </div>

            <!-- Section 4: Remote Chat Panel -->
            <div class="remote-section" style="flex:1; display:flex; flex-direction:column; border-bottom:none;">
              <div class="remote-section-title">
                <div style="display:flex; align-items:center; gap:6px;">
                  ${FixIcons.chat('', 14)}
                  <span>Remote Chat Panel</span>
                </div>
                <span style="font-size:10px; color:#9ca3af;">&and;</span>
              </div>

              <div class="chat-messages-wrap" id="remote-chat-messages">
                ${chatMessagesHtml}
              </div>

              <div class="chat-input-bar">
                <input type="text" id="remote-chat-input" placeholder="Write a message..." onkeydown="if(event.key==='Enter') FixConnectApp.sendChatMessage()">
                <button class="icon-btn" style="color:#60a5fa; padding:2px;" onclick="FixConnectApp.sendChatMessage()">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>

              <div style="margin-top:16px; display:flex; flex-direction:column; gap:8px;">
                <button class="btn btn-outline btn-sm" style="background:#1f2937; border-color:#374151; color:#d1d5db; width:100%; justify-content:flex-start; font-size:11px; gap:8px;" onclick="FixConnectApp.pauseAccess()">
                  ${FixIcons.pause('', 12)}
                  <span>Pause keyboard/mouse access</span>
                </button>
                <button class="btn btn-outline btn-sm" style="background:#1f2937; border-color:#374151; color:#ef4444; width:100%; justify-content:flex-start; font-size:11px; gap:8px;" onclick="FixConnectApp.navigate('devices')">
                  ${FixIcons.stop('', 12)}
                  <span>End Session immediately</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    `;
  }
};
