// FixConnect Landing Page Component (Clean Professional - No Emojis, No AI Slop)

window.LandingComponent = {
  render() {
    return `
      <div class="landing-page">
        <!-- Landing Navbar -->
        <header class="landing-navbar">
          <a href="#" class="landing-logo" onclick="FixConnectApp.navigate('landing')">
            <img src="assets/images/fixconnect-logo.png" alt="FixConnect Logo">
          </a>
          <ul class="landing-nav-links">
            <li><a href="#hero" onclick="FixConnectApp.navigate('landing')">Home</a></li>
            <li><a href="#features" onclick="document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})">Features</a></li>
            <li><a href="#how-it-works" onclick="document.getElementById('how-it-works')?.scrollIntoView({behavior: 'smooth'})">How It Works</a></li>
            <li><a href="#about" onclick="document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})">About</a></li>
          </ul>
          <div style="display:flex; align-items:center; gap:12px;">
            <button class="btn btn-outline btn-sm" onclick="FixConnectApp.navigate('home')">Login</button>
            <button class="btn btn-blue btn-sm" onclick="FixConnectApp.navigate('home')">Get Started</button>
          </div>
        </header>

        <!-- Hero Section -->
        <section class="landing-hero" id="hero">
          <div class="hero-left">
            <h1 class="hero-title">Remote Support.<br>Made Simple.</h1>
            <p class="hero-subtitle">
              Connect to any computer remotely, provide technical assistance, and manage devices securely — all from one simple platform.
            </p>
            <div class="hero-cta-group">
              <button class="btn btn-blue" onclick="FixConnectApp.navigate('home')">Get Started</button>
              <button class="btn btn-outline" onclick="document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})">Learn More</button>
            </div>
            
            <!-- Features Sub-Section (matches Image 3 lower left) -->
            <div style="margin-top: 40px;">
              <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Features</h3>
              <p style="font-size: 13px; color: #64748b; margin-bottom: 20px;">
                Connect to any computer assistance, and connection statistics, and maintenance activities.
              </p>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                <div class="feature-box" style="padding: 16px;">
                  <div class="feature-icon-wrap" style="width: 32px; height: 32px; margin-bottom: 8px;">
                    ${FixIcons.headset('', 18)}
                  </div>
                  <h5 style="font-size: 13px; font-weight: 700;">Real-Time Support</h5>
                  <p style="font-size: 11px; color: #64748b;">Instant low-latency remote assistance.</p>
                </div>
                <div class="feature-box" style="padding: 16px;">
                  <div class="feature-icon-wrap" style="width: 32px; height: 32px; margin-bottom: 8px;">
                    ${FixIcons.device('', 18)}
                  </div>
                  <h5 style="font-size: 13px; font-weight: 700;">Device Management</h5>
                  <p style="font-size: 11px; color: #64748b;">Manage laptop dashboard & systems.</p>
                </div>
                <div class="feature-box" style="padding: 16px;">
                  <div class="feature-icon-wrap" style="width: 32px; height: 32px; margin-bottom: 8px;">
                    ${FixIcons.chat('', 18)}
                  </div>
                  <h5 style="font-size: 13px; font-weight: 700;">Live Chat</h5>
                  <p style="font-size: 11px; color: #64748b;">In-session chat & diagnostics.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Hero Right: Productivity Cards & Preview Frame -->
          <div class="hero-right">
            <!-- Mac Window Preview Frame -->
            <div class="hero-preview-frame" style="margin-bottom: 32px; cursor: pointer;" onclick="FixConnectApp.navigate('remote')" title="Launch Remote Support Session">
              <div class="preview-titlebar">
                <div class="window-dot red"></div>
                <div class="window-dot yellow"></div>
                <div class="window-dot green"></div>
                <span style="font-size: 11px; color: #64748b; font-weight: 600; margin: 0 auto;">FixConnect — PC-BERKANE</span>
              </div>
              <div style="position: relative; height: 260px; overflow: hidden; background: #0f172a;">
                <img src="assets/images/win11-remote-screen.jpg" alt="Remote Desktop Preview" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
                <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff;">
                  <div style="background: rgba(15,23,42,0.85); padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; display: flex; align-items: center; gap: 8px; backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.2);">
                    ${FixIcons.device('', 16)}
                    <span>View Remote Desktop</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Productivity, from any distance Section (Image 3 Right) -->
            <div id="features">
              <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; color: #0f172a;">Productivity, from any distance.</h2>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;">
                <div class="feature-box">
                  <div class="feature-icon-wrap">
                    ${FixIcons.mouse('', 20)}
                  </div>
                  <h4>Remote Desktop Control</h4>
                  <p>Connect any computer remotely, and take remote desktop control.</p>
                </div>
                <div class="feature-box">
                  <div class="feature-icon-wrap">
                    ${FixIcons.lock('', 20)}
                  </div>
                  <h4>Secure Connections</h4>
                  <p>Secure connections on end-to-end encrypted TLS tunnels.</p>
                </div>
                <div class="feature-box">
                  <div class="feature-icon-wrap">
                    ${FixIcons.transfer('', 20)}
                  </div>
                  <h4>File Transfer</h4>
                  <p>Upload and download files smoothly with progress tracking.</p>
                </div>
                <div class="feature-box">
                  <div class="feature-icon-wrap">
                    ${FixIcons.headset('', 20)}
                  </div>
                  <h4>Real-Time Support</h4>
                  <p>Real-time support and instant device connection.</p>
                </div>
                <div class="feature-box">
                  <div class="feature-icon-wrap">
                    ${FixIcons.laptop('', 20)}
                  </div>
                  <h4>Device Management</h4>
                  <p>Manage laptop devices and headless systems.</p>
                </div>
                <div class="feature-box">
                  <div class="feature-icon-wrap">
                    ${FixIcons.chat('', 20)}
                  </div>
                  <h4>Live Chat</h4>
                  <p>Live chat communication and start remote support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Getting Started Section (Image 3 Bottom) -->
        <section class="steps-section" id="how-it-works">
          <h2 style="font-size: 24px; font-weight: 800; color: #0f172a;">Getting started takes less than a minute.</h2>
          <div class="steps-grid">
            <div class="step-item">
              <div class="step-num">1.</div>
              <div class="step-title">Create your account</div>
              <div class="step-desc">Create your account for full access and start configuring your workspace.</div>
            </div>
            <div class="step-item">
              <div class="step-num">2.</div>
              <div class="step-title">Share or enter the device ID</div>
              <div class="step-desc">Share or enter the device ID to enter the device ID.</div>
            </div>
            <div class="step-item">
              <div class="step-num">3.</div>
              <div class="step-title">Approve the connection and start remote support</div>
              <div class="step-desc">Approve the connection and start remote support.</div>
            </div>
          </div>
        </section>

        <!-- Landing Footer -->
        <footer class="landing-footer" id="about">
          <div style="display:flex; align-items:center; gap:8px;">
            <img src="assets/images/fixconnect-logo.png" alt="FixConnect" style="height: 24px;">
          </div>
          <div class="footer-links">
            <a href="#about">About Us</a>
            <a href="#features">Features</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Support</a>
          </div>
        </footer>
      </div>
    `;
  }
};
