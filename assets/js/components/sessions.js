// FixConnect Sessions Page Component (No Emojis)

window.SessionsComponent = {
  render() {
    const active = window.FixConnectState.activeSession;
    const history = window.FixConnectState.sessionsHistory;

    const historyRowsHtml = history.map(h => {
      const isCompleted = h.status.toLowerCase() === 'completed';
      const isRejected = h.status.toLowerCase() === 'rejected';

      let statusPillClass = 'online';
      if (isRejected) statusPillClass = 'rejected';
      else if (isCompleted) statusPillClass = 'completed';

      return `
        <tr>
          <td>
            <div style="display:flex; align-items:center; gap:12px;">
              <div style="width:32px; height:32px; background:#1e293b; border-radius:6px; display:flex; align-items:center; justify-content:center; color:#fff;">
                ${FixIcons.device('', 16)}
              </div>
              <div>
                <div style="font-weight:700; color:var(--text-primary);">${h.targetDevice}</div>
                <div style="font-size:12px; color:var(--text-muted);">${h.os}</div>
              </div>
            </div>
          </td>
          <td style="font-family:monospace; font-size:12px; color:var(--text-secondary);">${h.sessionId}</td>
          <td style="color:var(--text-secondary);">${h.startTime}</td>
          <td style="color:var(--text-secondary);">${h.duration}</td>
          <td>
            <span class="status-pill ${statusPillClass}">${h.status}</span>
          </td>
          <td>
            <div style="display:flex; align-items:center; gap:8px;">
              <button class="icon-btn" title="View details" onclick="FixConnectApp.navigate('remote')">
                ${FixIcons.device('', 15)}
              </button>
              <button class="icon-btn" title="More options" onclick="FixConnectApp.showToast('Session options: FC-892-410')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    return `
      <div class="page-container">
        <!-- Page Header -->
        <div class="page-header">
          <div>
            <h1 class="page-title">Sessions</h1>
            <p class="page-subtitle">Monitor active connections and review historical remote support sessions.</p>
          </div>
          <div class="page-actions">
            <button class="btn btn-outline" onclick="FixConnectApp.exportSessionLogs()">
              ${FixIcons.download('', 14)}
              Export Logs
            </button>
            <button class="btn btn-primary" onclick="FixConnectApp.promptAddDevice()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              New Connection
            </button>
          </div>
        </div>

        <!-- Active Session Card -->
        <div class="active-session-banner">
          <div class="banner-head">
            <h4>Active Session</h4>
            <span>Total 1 live connection</span>
          </div>

          <div class="active-session-row">
            <div class="device-main-info">
              <div class="device-icon-box">
                ${FixIcons.device('', 24)}
              </div>
              <div class="device-text-group">
                <div class="name">${active.deviceName}</div>
                <div class="os">
                  ${FixIcons.apple('', 14)}
                  <span>${active.os}</span>
                </div>
              </div>
            </div>

            <div class="session-meta-group">
              <div class="meta-item">
                <span class="label">ID</span>
                <span class="val">${active.deviceId}</span>
              </div>
              <div class="meta-item">
                <span class="label">Connected from</span>
                <span class="val">${active.ip}</span>
              </div>
              <div class="meta-item">
                <span class="live-timer">
                  ${FixIcons.clock('', 14)}
                  <span id="session-live-stopwatch">00:42:15</span>
                </span>
              </div>
            </div>

            <div style="display:flex; align-items:center; gap:10px;">
              <button class="btn btn-blue" onclick="FixConnectApp.navigate('remote')">
                View Session
              </button>
              <button class="btn btn-danger" onclick="FixConnectApp.showToast('Active session ended.')">
                End
              </button>
            </div>
          </div>
        </div>

        <!-- Session History Section -->
        <div class="card">
          <div class="card-header" style="flex-wrap: wrap; gap: 12px;">
            <h3 class="card-title">Session History</h3>
            <div style="display:flex; align-items:center; gap:10px; margin-left:auto;">
              <select class="form-select" style="width: auto; padding: 6px 12px; font-size: 12px;" onchange="FixConnectApp.filterSessionHistory(this.value)">
                <option value="all">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
              <button class="btn btn-outline btn-sm">
                ${FixIcons.calendar('', 14)}
                Date filter
              </button>
              <div style="display:flex; align-items:center; gap:6px; background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:6px 10px; font-size:12px;">
                ${FixIcons.search('', 12)}
                <input type="text" placeholder="Search" style="border:none; outline:none; background:transparent; font-size:12px; width:100px; color:var(--text-primary);" onkeyup="FixConnectApp.searchSessionHistory(this.value)">
              </div>
            </div>
          </div>

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Target Device</th>
                  <th>Session ID</th>
                  <th>Start Time</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="sessions-history-tbody">
                ${historyRowsHtml}
              </tbody>
            </table>
          </div>

          <div class="pagination-bar">
            <div>Showing 1 to 3 of 48 sessions</div>
            <div class="pagination-btns">
              <button class="page-btn" onclick="FixConnectApp.showToast('Page 1')">&lt; Previous</button>
              <button class="page-btn" onclick="FixConnectApp.showToast('Loading next sessions...')">Next &gt;</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
