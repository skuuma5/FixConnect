// FixConnect Settings Component (No Emojis)

window.SettingsComponent = {
  render() {
    const user = window.FixConnectState.user;
    const apiKeys = window.FixConnectState.apiKeys;
    const integrations = window.FixConnectState.integrations;

    const apiKeyRowsHtml = apiKeys.map(k => `
      <tr>
        <td style="font-family:monospace; font-size:11px; color:var(--text-secondary);">${k.keyMasked}</td>
        <td style="color:var(--text-muted); font-size:12px;">${k.createdDate}</td>
        <td style="color:var(--text-secondary); font-size:12px;">${k.lastUsed}</td>
        <td>
          <div style="display:flex; align-items:center; gap:6px;">
            <button class="icon-btn" title="Copy key" onclick="FixConnectApp.copyApiKey('${k.fullKey}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
            <button class="icon-btn" title="Revoke key" onclick="FixConnectApp.revokeApiKey('${k.id}')">
              ${FixIcons.trash('', 13)}
            </button>
          </div>
        </td>
      </tr>
    `).join('');

    return `
      <div class="page-container">
        <!-- Page Header -->
        <div class="page-header">
          <div>
            <h1 class="page-title">Settings</h1>
            <p class="page-subtitle">Manage your profile, security preferences, and integration configurations.</p>
          </div>
          <div class="page-actions">
            <button class="btn btn-outline" onclick="FixConnectApp.exportSettingsConfig()">
              ${FixIcons.download('', 14)}
              Export Configuration
            </button>
          </div>
        </div>

        <!-- 2x2 Grid of Settings Cards -->
        <div class="grid-2">
          <!-- Card 1: Profile & Account -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Profile & Account</h3>
              <span class="status-pill online">Active</span>
            </div>

            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
              <img src="assets/images/user-avatar.png" alt="Avatar" style="width:64px; height:64px; border-radius:50%; object-fit:cover; border:2px solid var(--border-color);" onerror="this.src='https://ui-avatars.com/api/?name=Yassine+Zekhnini&background=2563eb&color=fff'">
              <div>
                <button class="btn btn-outline btn-sm" onclick="FixConnectApp.showToast('Select image to change avatar')">Change Avatar</button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" class="form-input" id="setting-fullname" value="${user.fullName}">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" id="setting-email" value="${user.email}">
            </div>
            <div class="form-group">
              <label class="form-label">Phone</label>
              <input type="text" class="form-input" id="setting-phone" value="${user.phone}">
            </div>
          </div>

          <!-- Card 2: Security & Privacy -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Security & Privacy</h3>
            </div>

            <div class="form-group">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                <label class="form-label" style="margin-bottom:0;">Password</label>
                <button class="btn btn-outline btn-sm" style="font-size:11px; padding:3px 8px;" onclick="FixConnectApp.showToast('Password change prompt')">Change Password</button>
              </div>
              <input type="password" class="form-input" value="••••••••••••" readonly>
              <span style="font-size:11px; color:var(--text-muted); margin-top:4px; display:block;">Last changed timestamp: 23:25</span>
            </div>

            <div style="border-top:1px solid var(--border-subtle); padding-top:16px; margin-top:16px;">
              <div style="display:flex; align-items:flex-start; justify-content:space-between; margin-bottom:4px;">
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Two-Factor Authentication (2FA)</div>
                  <div style="font-size:12px; color:var(--accent-green-text);">Status: <strong>Enabled</strong></div>
                  <div style="font-size:11px; color:var(--text-muted);">Authenticator App (Recommended) - Google Authenticator</div>
                </div>
                <div style="display:flex; gap:6px;">
                  <button class="btn btn-outline btn-sm" style="font-size:11px; padding:3px 8px;" onclick="FixConnectApp.showToast('Reconfiguring 2FA...')">Reconfigure</button>
                  <button class="btn btn-outline btn-sm" style="font-size:11px; padding:3px 8px; color:var(--accent-red);" onclick="FixConnectApp.showToast('2FA cannot be disabled by policy.')">Disable</button>
                </div>
              </div>
            </div>

            <div style="border-top:1px solid var(--border-subtle); padding-top:16px; margin-top:16px;">
              <div style="display:flex; align-items:flex-start; justify-content:space-between;">
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Session Management</div>
                  <div style="font-size:12px; color:var(--text-secondary);">Review and manage active browser and device sessions.</div>
                  <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Total Active Sessions: <strong>${user.activeSessionsCount}</strong></div>
                </div>
                <button class="btn btn-outline btn-sm" style="font-size:11px; padding:3px 8px;" onclick="FixConnectApp.showToast('Viewing active sessions')">Manage Sessions</button>
              </div>
            </div>
          </div>

          <!-- Card 3: Integrations & API -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Integrations & API</h3>
            </div>

            <!-- Integrations row -->
            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-bottom:20px;">
              <div style="background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; font-size:12px;">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                  <div style="color:#2563eb;">${FixIcons.calendar('', 16)}</div>
                  <span class="status-pill online" style="font-size:10px; padding:1px 6px;">Connected</span>
                </div>
                <div style="font-weight:700;">Google Calendar</div>
                <div style="font-size:10px; color:var(--text-muted);">Last sync 10:33 am</div>
              </div>

              <div style="background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; font-size:12px;">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                  <div style="color:#4a154b;">${FixIcons.slack('', 16)}</div>
                  <span class="status-pill online" style="font-size:10px; padding:1px 6px;">Connected</span>
                </div>
                <div style="font-weight:700;">Slack</div>
                <div style="font-size:10px; color:var(--text-muted);">Last sync 10:33 am</div>
              </div>

              <div style="background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:12px; font-size:12px;">
                <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                  <div style="color:#0079bf;">${FixIcons.trello('', 16)}</div>
                  <span class="status-pill offline" style="font-size:10px; padding:1px 6px;">Not Configured</span>
                </div>
                <div style="font-weight:700;">Trello</div>
                <div style="font-size:10px; color:var(--text-muted);">Not Configured</div>
              </div>
            </div>

            <!-- API Keys Table -->
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <span style="font-size:13px; font-weight:700; color:var(--text-primary);">API Keys</span>
              <div style="display:flex; gap:6px;">
                <button class="btn btn-outline btn-sm" style="font-size:11px; padding:2px 8px;" onclick="FixConnectApp.createNewApiKey()">+ Create New API Key</button>
                <button class="btn btn-outline btn-sm" style="font-size:11px; padding:2px 8px;" onclick="FixConnectApp.showToast('Revoke all keys requested')">Revoke</button>
              </div>
            </div>

            <div class="table-responsive">
              <table class="data-table" style="font-size:11px;">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Create Date</th>
                    <th>Last Used</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="api-keys-tbody">
                  ${apiKeyRowsHtml}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Card 4: Advanced & Team -->
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Advanced & Team</h3>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-bottom:20px;">
              <div>
                <label class="form-label">Notification</label>
                <label class="form-checkbox-label">
                  <input type="checkbox" id="notif-email" ${user.notifications.email ? 'checked' : ''}>
                  <span>Email</span>
                </label>
                <label class="form-checkbox-label">
                  <input type="checkbox" id="notif-inapp" ${user.notifications.inApp ? 'checked' : ''}>
                  <span>In-app</span>
                </label>

                <div style="margin-top:12px;">
                  <label class="form-label">Specific Events</label>
                  <label class="form-checkbox-label">
                    <input type="checkbox" ${user.notifications.specificEvents ? 'checked' : ''}>
                    <span>Specific events</span>
                  </label>
                  <label class="form-checkbox-label">
                    <input type="checkbox" ${user.notifications.inAppEvents ? 'checked' : ''}>
                    <span>In-app events</span>
                  </label>
                  <label class="form-checkbox-label">
                    <input type="checkbox" ${user.notifications.disableEvents ? 'checked' : ''}>
                    <span>Disable events</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="form-label">Appearance</label>
                <select class="form-select" id="setting-appearance" onchange="FixConnectApp.handleAppearanceChange(this.value)">
                  <option value="light" ${user.appearance === 'light' ? 'selected' : ''}>Light (default)</option>
                  <option value="dark" ${user.appearance === 'dark' ? 'selected' : ''}>Dark</option>
                  <option value="system" ${user.appearance === 'system' ? 'selected' : ''}>System</option>
                </select>

                <div style="margin-top:32px;">
                  <label class="form-label">Team & Permissions</label>
                  <a href="#" style="font-size:13px; color:#2563eb; text-decoration:none; font-weight:600; display:inline-block;" onclick="FixConnectApp.showToast('Opening Team Management...')">
                    Manage Team Members &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Settings Bottom Save/Discard Bar -->
        <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
          <button class="btn btn-outline" onclick="FixConnectApp.discardSettings()">Discard Changes</button>
          <button class="btn btn-primary" onclick="FixConnectApp.saveSettings()">Save Changes</button>
        </div>
      </div>
    `;
  }
};
