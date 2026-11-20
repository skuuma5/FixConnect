// FixConnect Navigation & Sidebar Component (Exact match to uploaded design)

window.NavbarComponent = {
  renderUniversalSwitcher(currentView) {
    return '';
  },

  renderSidebar(currentView) {
    const navItems = [
      { id: 'home', label: 'Home', icon: FixIcons.home('', 18) },
      { id: 'devices', label: 'Devices', icon: FixIcons.device('', 18) },
      { id: 'sessions', label: 'Sessions', icon: FixIcons.clock('', 18) },
      { id: 'activity', label: 'Activity', icon: FixIcons.activity('', 18) },
      { id: 'settings', label: 'Settings', icon: FixIcons.settings('', 18) }
    ];

    const navLinksHtml = navItems.map(item => {
      const isActive = currentView === item.id;
      return `
        <a class="sidebar-link ${isActive ? 'active' : ''}" onclick="FixConnectApp.navigate('${item.id}')">
          ${item.icon}
          <span>${item.label}</span>
        </a>
      `;
    }).join('');

    return `
      <aside class="sidebar">
        <div class="sidebar-header" onclick="FixConnectApp.navigate('landing')" style="cursor:pointer;" title="FixConnect">
          <img src="assets/images/fixconnect-logo.png" alt="FixConnect Logo" class="sidebar-logo">
          <div class="sidebar-brand-name">FixConnect</div>
        </div>
        <nav class="sidebar-nav">
          ${navLinksHtml}
        </nav>
        <div class="sidebar-footer" onclick="FixConnectApp.navigate('settings')">
          <div class="user-badge-initials" style="width:28px; height:28px; font-size:11px; font-weight:700; background:#e2e8f0; color:#334155; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            YZ
          </div>
          <div class="sidebar-user-info" style="margin-left:4px;">
            <div class="sidebar-user-name" style="font-size:13px; font-weight:600; color:var(--text-primary);">Yassine Zekhnini</div>
          </div>
          <svg class="sidebar-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:auto; color:#94a3b8;"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </div>
      </aside>
    `;
  },

  renderTopHeader(sectionName, searchPlaceholder, currentView) {
    const isHomeOrDevices = currentView === 'home' || currentView === 'devices';

    return `
      <header class="top-header" style="background:transparent; border-bottom:none; height:54px; padding:0 32px; justify-content:${isHomeOrDevices ? 'flex-end' : 'space-between'};">
        ${!isHomeOrDevices ? `
          <div class="header-left">
            <div class="breadcrumb">
              <span>Platform</span>
              <span>&gt;</span>
              <span class="current">${sectionName}</span>
            </div>
            <div class="top-search-box">
              ${FixIcons.search('', 14)}
              <input type="text" placeholder="${searchPlaceholder || 'Search...'}" id="global-search-input" onkeyup="FixConnectApp.handleSearch(event)">
            </div>
          </div>
        ` : ''}

        <div class="header-right" style="display:flex; align-items:center; gap:18px;">
          <div class="system-status-badge" style="font-size:12px; color:#475569; font-weight:500; display:flex; align-items:center; gap:6px;">
            <span style="width:7px; height:7px; border-radius:50%; background:#10b981; display:inline-block;"></span>
            <span>All systems online</span>
          </div>
          <button class="icon-btn" title="Notifications" style="color:#475569; padding:4px;" onclick="FixConnectApp.showToast('No new notifications')">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          </button>
          <div class="user-badge-initials" onclick="FixConnectApp.navigate('settings')" title="Yassine Zekhnini" style="width:30px; height:30px; border-radius:50%; background:#f1f5f9; border:1px solid #e2e8f0; color:#334155; font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center; cursor:pointer;">
            YZ
          </div>
        </div>
      </header>
    `;
  }
};
