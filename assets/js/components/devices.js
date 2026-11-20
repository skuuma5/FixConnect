// FixConnect Devices View - Exact Match to Screenshot (PC-BERKANE Remote Desktop Session)

window.DevicesComponent = {
  render() {
    const remote = window.FixConnectState.remoteSession;

    const fileTransferRowsHtml = remote.fileTransfers.map(f => {
      const isProgress = f.status === 'in_progress';
      return `
        <div style="background:#ffffff; border:1px solid #f1f5f9; border-radius:8px; padding:10px 12px; margin-bottom:8px;">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; font-size:12px; font-weight:600; color:#0f172a;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="color:#64748b;">${FixIcons.file('', 14)}</span>
              <span>${f.name}</span>
            </div>
            <span style="color:${isProgress ? '#2563eb' : '#10b981'}; font-size:11px; font-weight:500;">
              ${isProgress ? f.progress + '% &middot; ' + f.eta : 'Completed'}
            </span>
          </div>
          <div style="width:100%; height:4px; background:#f1f5f9; border-radius:4px; overflow:hidden; margin-bottom:4px;">
            <div style="height:100%; width:${f.progress}%; background:${isProgress ? '#10b981' : '#10b981'}; border-radius:4px;"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:11px; color:#64748b;">
            <span>${f.type} - ${f.size}</span>
            <span>${isProgress ? '' : 'Completed'}</span>
          </div>
        </div>
      `;
    }).join('');

    const chatMessagesHtml = remote.chatMessages.map(m => `
      <div style="display:flex; flex-direction:column; align-items:${m.sender === 'technician' ? 'flex-start' : 'flex-end'}; margin-bottom:8px;">
        <div style="font-size:10px; color:#64748b; margin-bottom:2px;">${m.senderName}</div>
        <div style="background:${m.sender === 'technician' ? '#f1f5f9' : '#0f172a'}; color:${m.sender === 'technician' ? '#0f172a' : '#ffffff'}; padding:8px 12px; border-radius:10px; font-size:12px; max-width:85%; line-height:1.35;">
          ${m.text}
        </div>
      </div>
    `).join('');

    return `
      <div style="display:flex; flex-direction:column; flex:1; height:100vh; overflow:hidden; background:#ffffff;">
        <!-- Top Bar inside Content Area (Matches Screenshot Top) -->
        <div style="height:54px; padding:0 24px; border-bottom:1px solid #f1f5f9; display:flex; align-items:center; justify-content:space-between; flex-shrink:0; background:#ffffff;">
          <!-- Left: Device Title -->
          <div style="display:flex; align-items:center; gap:10px;">
            <h2 style="font-size:16px; font-weight:700; color:#0f172a; margin:0;">${remote.targetDevice}</h2>
            <span style="display:inline-flex; align-items:center; gap:5px; font-size:12px; color:#64748b;">
              <span style="width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
              Connected
            </span>
          </div>

          <!-- Right: Status & Actions -->
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="display:flex; align-items:center; gap:6px; font-size:12px; color:#0f172a; font-weight:500;">
              <span style="width:6px; height:6px; border-radius:50%; background:#10b981;"></span>
              <span>Excellent</span>
            </div>

            <button class="btn btn-outline btn-sm" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:5px 12px; font-size:12px; color:#0f172a; display:inline-flex; align-items:center; gap:6px;" onclick="FixConnectApp.toggleRemoteFullscreen()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
              <span>Fullscreen</span>
            </button>

            <button class="icon-btn" style="color:#64748b; padding:6px; border-radius:6px;" title="Settings">
              ${FixIcons.settings('', 16)}
            </button>

            <button class="btn btn-danger btn-sm" style="background:#dc2626; color:#ffffff; border-radius:8px; padding:6px 14px; font-size:12px; font-weight:600; display:inline-flex; align-items:center; gap:6px;" onclick="FixConnectApp.navigate('home')">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
              <span>End Session</span>
            </button>
          </div>
        </div>

        <!-- Main Split: Central Remote Workspace + Right Sidebar -->
        <div style="display:flex; flex:1; min-height:0; overflow:hidden;">
          <!-- Center Canvas Area -->
          <div style="flex:1; display:flex; flex-direction:column; padding:16px 20px 20px 20px; background:#fafafa; overflow:hidden; position:relative;" id="remote-screen-canvas" onclick="FixConnectApp.handleCanvasClick(event)">
            <!-- Breadcrumbs -->
            <div style="font-size:12px; color:#64748b; margin-bottom:12px;">
              <span>Sessions</span> &gt; <strong style="color:#0f172a;">${remote.targetDevice}</strong>
            </div>

            <!-- Remote Desktop Container -->
            <div style="flex:1; position:relative; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px -5px rgba(0,0,0,0.1); border:1px solid #e2e8f0; display:flex; flex-direction:column; background:#0f172a;">
              <!-- Floating status badge on top -->
              <div style="position:absolute; top:12px; left:50%; transform:translateX(-50%); background:rgba(255,255,255,0.95); backdrop-filter:blur(8px); padding:6px 16px; border-radius:20px; font-size:12px; font-weight:600; color:#0f172a; display:flex; align-items:center; gap:8px; box-shadow:0 4px 12px rgba(0,0,0,0.12); z-index:30;">
                ${FixIcons.clock('', 13)}
                <span>Controlling mouse & keyboard</span>
              </div>

              <!-- Desktop Image -->
              <img src="assets/images/win11-exact-screen.jpg" alt="Windows 11 Desktop" style="width:100%; height:100%; object-fit:cover; flex:1;" onerror="this.src='assets/images/win11-remote-screen.jpg'">

              <!-- Simulated Start Menu overlay (interactive) -->
              <div class="win11-start-menu" id="win11-start-menu">
                <div class="start-menu-grid">
                  <div class="start-menu-col">
                    <h5>Recent</h5>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening This PC...')">${FixIcons.device('', 14)} <span>This PC</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Desktop...')">${FixIcons.laptop('', 14)} <span>Desktop</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Recycle Bin...')">${FixIcons.trash('', 14)} <span>Recycle Bin</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Documents...')">${FixIcons.file('', 14)} <span>Documents</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Music...')">${FixIcons.volume('', 14)} <span>Music</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Slack...')">${FixIcons.slack('', 14)} <span>Slack</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Windows 11 Server...')">${FixIcons.windows('', 14)} <span>Windows 11 Server</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Work folder...')">${FixIcons.folder('', 14)} <span>Work</span></div>
                  </div>
                  <div class="start-menu-col">
                    <h5>Applications</h5>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Slack...')">${FixIcons.slack('', 14)} <span>Slack</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Code Editor...')">${FixIcons.code('', 14)} <span>Code Editor</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Explorer...')">${FixIcons.folder('', 14)} <span>Explorers</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Launching Azure Portal...')">${FixIcons.cloud('', 14)} <span>Microsoft Azure</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Security...')">${FixIcons.shield('', 14)} <span>Security</span></div>
                    <div class="start-app-item" onclick="FixConnectApp.showToast('Opening Settings...')">${FixIcons.settings('', 14)} <span>Settings</span></div>
                  </div>
                </div>
                <div class="start-search-box">
                  ${FixIcons.search('', 14)}
                  <input type="text" placeholder="Search program and files..." style="border:none; outline:none; width:100%; font-size:12px;">
                </div>
              </div>

              <!-- Start Button Click Target on Taskbar -->
              <div style="position:absolute; bottom:0; left:37%; width:40px; height:40px; cursor:pointer; z-index:25;" id="start-btn" onclick="FixConnectApp.toggleStartMenu()" title="Click to Toggle Start Menu"></div>

              <!-- Floating Remote Control Toolbar (Matches Screenshot Bottom Exactly) -->
              <div style="position:absolute; bottom:20px; left:50%; transform:translateX(-50%); background:#ffffff; border:1px solid #e2e8f0; border-radius:12px; padding:6px 14px; display:flex; align-items:center; gap:16px; box-shadow:0 8px 24px rgba(0,0,0,0.12); z-index:40;">
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.toggleControl('mouse', this)">
                  ${FixIcons.mouse('', 16)}
                  <span>Mouse</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.toggleControl('keyboard', this)">
                  ${FixIcons.keyboard('', 16)}
                  <span>Keyboard</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.changeResolution()">
                  <span style="font-size:11px; font-weight:700;">95%</span>
                  <span>Resolution</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.showToast('Display 1 active')">
                  ${FixIcons.device('', 16)}
                  <span>Display</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.toggleRemoteFullscreen()">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                  <span>Fullscreen</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.syncClipboard()">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                  <span>Clipboard</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.triggerFileTransfer()">
                  ${FixIcons.file('', 15)}
                  <span>File</span>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:2px; font-size:10px; color:#0f172a; cursor:pointer;" onclick="FixConnectApp.takeScreenshot()">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  <span>Screenshot</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar Panel (Exact Match to Screenshot) -->
          <div style="width:310px; border-left:1px solid #f1f5f9; display:flex; flex-direction:column; overflow-y:auto; background:#ffffff; font-size:12px;">
            <!-- Device Information -->
            <div style="padding:16px 20px; border-bottom:1px solid #f1f5f9;">
              <h4 style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:12px;">Device Information</h4>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; color:#64748b;">
                <span>Device name</span>
                <span style="font-weight:600; color:#0f172a;">${remote.targetDevice}</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; color:#64748b;">
                <span>Operating System</span>
                <span style="font-weight:600; color:#0f172a;">${remote.os}</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; color:#64748b;">
                <span>Device ID</span>
                <span style="font-weight:600; color:#0f172a;">RD-902-134</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; color:#64748b;">
                <span>Resolution</span>
                <span style="font-weight:600; color:#0f172a;">${remote.resolution}</span>
              </div>
              <div style="display:flex; justify-content:space-between; color:#64748b;">
                <span>Connection quality</span>
                <span style="font-weight:600; color:#0f172a;">Excellent</span>
              </div>
            </div>

            <!-- Session Information -->
            <div style="padding:16px 20px; border-bottom:1px solid #f1f5f9;">
              <h4 style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:12px;">Session Information</h4>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; color:#64748b;">
                <span>Connected since</span>
                <span style="font-weight:600; color:#0f172a;">3:15 PM</span>
              </div>
              <div style="display:flex; justify-content:space-between; margin-bottom:8px; color:#64748b;">
                <span>Session duration</span>
                <span style="font-weight:600; color:#0f172a;" id="devices-live-duration">27:30</span>
              </div>
              <div style="display:flex; justify-content:space-between; color:#64748b;">
                <span>Encryption status</span>
                <span style="font-weight:600; color:#0f172a;">AES-256 Enabled</span>
              </div>
            </div>

            <!-- File Transfer Panel -->
            <div style="padding:16px 20px; border-bottom:1px solid #f1f5f9;">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
                <div style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700; color:#0f172a;">
                  ${FixIcons.file('', 14)}
                  <span>File Transfer Panel</span>
                </div>
                <span style="font-size:11px; color:#64748b; cursor:pointer;" onclick="FixConnectApp.showToast('Showing all file transfers')">View all &and;</span>
              </div>

              ${fileTransferRowsHtml}

              <!-- Drag & Drop Zone -->
              <input type="file" id="real-file-input" style="display:none;" onchange="FixConnectApp.handleFileSelect(event)">
              <div style="border:1px dashed #cbd5e1; border-radius:8px; padding:12px; text-align:center; color:#64748b; cursor:pointer; margin-top:8px; font-size:11px;" onclick="document.getElementById('real-file-input').click()">
                <div style="display:flex; justify-content:center; margin-bottom:4px; color:#64748b;">${FixIcons.upload('', 16)}</div>
                <div style="font-weight:500;">Drag & drop area</div>
              </div>
            </div>

            <!-- Remote Chat Panel -->
            <div style="padding:16px 20px; flex:1; display:flex; flex-direction:column;">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px;">
                <div style="display:flex; align-items:center; gap:8px; font-size:13px; font-weight:700; color:#0f172a;">
                  ${FixIcons.chat('', 14)}
                  <span>Remote Chat Panel</span>
                </div>
                <span style="font-size:11px; color:#64748b;">&and;</span>
              </div>

              <div style="flex:1; max-height:140px; overflow-y:auto; margin-bottom:10px;" id="remote-chat-messages">
                ${chatMessagesHtml}
              </div>

              <div style="display:flex; align-items:center; gap:8px; border:1px solid #e2e8f0; border-radius:8px; padding:6px 10px; margin-bottom:12px;">
                <input type="text" id="remote-chat-input" placeholder="Write a message..." style="border:none; outline:none; font-size:11px; width:100%; color:#0f172a;" onkeydown="if(event.key==='Enter') FixConnectApp.sendChatMessage()">
                <button class="icon-btn" style="color:#64748b; padding:2px;" onclick="FixConnectApp.sendChatMessage()">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>

              <div style="display:flex; flex-direction:column; gap:6px;">
                <button class="btn btn-outline btn-sm" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:6px; color:#0f172a; width:100%; justify-content:flex-start; font-size:11px; padding:6px 10px; gap:8px;" onclick="FixConnectApp.pauseAccess()">
                  <span style="color:#64748b;">⏸</span>
                  <span>Pause keyboard/mouse access</span>
                </button>
                <button class="btn btn-outline btn-sm" style="background:#ffffff; border:1px solid #e2e8f0; border-radius:6px; color:#0f172a; width:100%; justify-content:flex-start; font-size:11px; padding:6px 10px; gap:8px;" onclick="FixConnectApp.navigate('home')">
                  <span style="color:#64748b;">⇥</span>
                  <span>End Session immediately</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
