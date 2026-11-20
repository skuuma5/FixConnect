// FixConnect Activity & Logs Component

window.ActivityComponent = {
  render() {
    const logs = window.FixConnectState.activityLogs;

    const logRowsHtml = logs.map(l => {
      let statusClass = 'offline';
      if (l.status === 'Success') statusClass = 'success';
      else if (l.status === 'Declined' || l.status === 'Timeout') statusClass = 'declined';
      else if (l.status === 'Completed') statusClass = 'completed';

      return `
        <tr>
          <td style="color:var(--text-secondary); white-space:nowrap; font-weight:500;">${l.timestamp}</td>
          <td style="font-weight:600; color:var(--text-primary);">${l.actor}</td>
          <td style="font-family:monospace; font-size:12px; color:var(--text-secondary);">${l.targetDevice}</td>
          <td style="font-weight:600; color:var(--text-primary);">${l.eventType}</td>
          <td style="color:var(--text-secondary); max-width:320px;">${l.details}</td>
          <td>
            <span class="status-pill ${statusClass}">${l.status}</span>
          </td>
        </tr>
      `;
    }).join('');

    return `
      <div class="page-container">
        <!-- Page Header -->
        <div class="page-header">
          <div>
            <h1 class="page-title">Activity & Logs</h1>
            <p class="page-subtitle">A detailed chronological audit trail of all platform events, connection attempts, and security actions.</p>
          </div>
          <div class="page-actions">
            <button class="btn btn-outline" onclick="FixConnectApp.exportActivityCSV()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export CSV
            </button>
            <button class="btn btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Last 30 Days
            </button>
          </div>
        </div>

        <!-- Audit Table Card -->
        <div class="card">
          <div class="card-header" style="flex-wrap:wrap; gap:12px;">
            <div style="display:flex; align-items:center; gap:8px; background:var(--bg-page); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:8px 14px; width:300px;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Search activity..." style="border:none; outline:none; background:transparent; font-size:13px; width:100%; color:var(--text-primary);" onkeyup="FixConnectApp.searchActivityLogs(this.value)">
            </div>
            <div style="font-size:13px; color:var(--text-muted); margin-left:auto;">
              Total number of events: <strong>148</strong>
            </div>
          </div>

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Actor</th>
                  <th>Target Device</th>
                  <th>Event Type</th>
                  <th>Details</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody id="activity-logs-tbody">
                ${logRowsHtml}
              </tbody>
            </table>
          </div>

          <div class="pagination-bar">
            <div>Showing 1 to ${logs.length} of 148 logs</div>
            <div class="pagination-btns">
              <button class="page-btn" onclick="FixConnectApp.showToast('First page')">&lt; Previous</button>
              <button class="page-btn" onclick="FixConnectApp.showToast('Loading older audit logs...')">Next &gt;</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
