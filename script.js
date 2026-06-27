/* Core Styling Configurations Variables */
:root {
  --cyber-black: #030712;
  --cyber-card-bg: #0b1329;
  --neon-cyan: #00f0ff;
  --neon-green: #39ff14;
  --text-pure: #ffffff;
  --text-muted: #94a3b8;
  --glass-border: rgba(255, 255, 255, 0.08);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body {
  background-color: var(--cyber-black);
  color: var(--text-pure);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  overflow-x: hidden;
  position: relative;
}

/* Background Cyber Tech Grid Layout Overlay */
.grid-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  z-index: 1;
}

/* Header Element Layout Styling (Image 1 Style) */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid var(--glass-border);
  background: rgba(3, 7, 18, 0.7);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 200;
}
.logo-area { display: flex; align-items: center; gap: 10px; }
.logo-icon { background: var(--text-pure); color: var(--cyber-black); font-weight: 900; width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; text-transform: lowercase; }
.logo-text { font-weight: 700; font-size: 18px; letter-spacing: -0.5px; }
.lang-selector-btn { background: #111827; border: 1px solid var(--glass-border); color: var(--text-pure); padding: 8px 16px; border-radius: 99px; font-weight: 600; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 6px; }
.hamburger-menu-btn { background: #111827; border: 1px solid var(--glass-border); color: var(--text-pure); width: 36px; height: 36px; border-radius: 50%; font-size: 16px; cursor: pointer; margin-left: 8px; }

/* Main Hero Typography Architecture (Image 1 Style) */
.hero-container {
  padding: 80px 24px;
  text-align: center;
  position: relative;
  z-index: 10;
  background: radial-gradient(circle at 50% 10%, #0f172a 0%, transparent 60%);
}
.pill-badge { display: inline-flex; align-items: center; gap: 8px; border: 1px solid rgba(0, 240, 255, 0.3); background: rgba(0, 240, 255, 0.05); color: var(--neon-cyan); font-weight: 700; font-size: 11px; letter-spacing: 1.5px; padding: 6px 16px; border-radius: 99px; margin-bottom: 24px; }
.pulse-dot { width: 6px; height: 6px; background: var(--neon-cyan); border-radius: 50%; animation: pulse-glow 1.5s infinite; }
h1 { font-size: 40px; font-weight: 800; line-height: 1.1; letter-spacing: -1px; margin-bottom: 16px; }
.cyan-gradient-text { background: linear-gradient(90deg, #fff, var(--neon-cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-container p { color: var(--text-muted); font-size: 15px; line-height: 1.5; max-width: 550px; margin: 0 auto 32px auto; }
.hero-action-row { display: flex; flex-direction: column; gap: 12px; align-items: center; }

/* Buttons */
.btn-primary { width: 100%; max-width: 320px; background: var(--text-pure); color: var(--cyber-black); border: none; padding: 16px; border-radius: 99px; font-weight: 700; font-size: 15px; cursor: pointer; transition: transform 0.2s; }
.btn-secondary { width: 100%; max-width: 320px; background: transparent; color: var(--text-pure); border: 1px solid var(--glass-border); padding: 16px; border-radius: 99px; font-weight: 700; font-size: 15px; cursor: pointer; }
.btn-primary:hover { transform: translateY(-2px); }

/* Infinite Running Text Marquee (Image 2 Section) */
.infinite-marquee { background: #000; border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border); padding: 14px 0; overflow: hidden; position: relative; z-index: 10; transform: rotate(-1deg); width: 110%; margin-left: -5%; }
.marquee-track { display: inline-block; white-space: nowrap; animation: marquee-run 25s linear infinite; }
.marquee-track span { color: var(--text-pure); font-weight: 800; font-size: 12px; letter-spacing: 1px; }

/* Advanced Dashboard & Embedded Card Layout (Image 2 & 5 Configuration) */
.dashboard-section { padding: 60px 24px; position: relative; z-index: 10; background: #fff; color: #000; border-radius: 32px 32px 0 0; }
.section-heading { font-size: 28px; font-weight: 800; text-align: center; margin-bottom: 8px; letter-spacing: -0.5px; }
.section-subheading { text-align: center; color: #475569; font-size: 14px; max-width: 400px; margin: 0 auto 40px auto; line-height: 1.4; }
.dashboard-grid { display: grid; grid-template-columns: 1fr; gap: 20px; max-width: 600px; margin: 0 auto; }
.dash-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 24px; padding: 24px; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.dash-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.card-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; }
.blue-tint { background: #e0f2fe; }
.green-tint { background: #dcfce7; }
.card-tag { font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 99px; }
.status-active { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }
.dash-card h3 { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.dash-card p { color: #64748b; font-size: 13px; line-height: 1.5; margin-bottom: 16px; }
.card-action-link { font-size: 13px; font-weight: 700; color: #0284c7; }

/* Smooth Embedded Container Viewports */
.form-panel-hide { display: none; }
.form-panel-show { display: block; margin-top: 30px; background: #fff; padding: 10px; border-radius: 24px; border: 2px dashed #cbd5e1; }
.close-form-btn { width: 100%; background: #ef4444; color: white; padding: 12px; border: none; border-radius: 12px; font-weight: bold; margin-bottom: 15px; cursor: pointer; }
.iframe-wrapper { border-radius: 16px; overflow: hidden; }

/* Glowing AI Command Box (Image 4 Alignment) */
.ai-interaction-section { padding: 40px 24px; background: #fff; color: #000; }
.gradient-ai-box { background: linear-gradient(135deg, #00d2ff 0%, #0072ff 100%); border-radius: 28px; padding: 32px 24px; text-align: center; color: white; max-width: 500px; margin: 0 auto; box-shadow: 0 20px 40px rgba(0, 114, 255, 0.25); }
.ai-logo-sphere { width: 44px; height: 44px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; margin: 0 auto 16px auto; backdrop-filter: blur(5px); }
.gradient-ai-box h3 { font-size: 22px; font-weight: 800; margin-bottom: 8px; }
.gradient-ai-box p { font-size: 13px; opacity: 0.9; line-height: 1.4; margin-bottom: 24px; }
.ai-search-capsule { background: #fff; border-radius: 99px; padding: 6px; display: flex; align-items: center; }
.ai-search-capsule input { border: none; padding: 12px 16px; flex: 1; border-radius: 99px; outline: none; font-size: 14px; }
.ai-submit-btn { background: #000; color: #fff; border: none; padding: 12px 28px; border-radius: 99px; font-weight: 700; cursor: pointer; }

/* Premium Clean FAQ Accordions (Image 3 Design Layout) */
.faq-container-block { padding: 60px 24px; background: #f8fafc; color: #000; }
.faq-main-title { text-align: center; font-size: 26px; font-weight: 800; margin-bottom: 6px; }
.faq-main-subtitle { text-align: center; color: #64748b; font-size: 14px; margin-bottom: 32px; }
.faq-wrapper { max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
.accordion-row { background: #fff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; cursor: pointer; transition: border 0.2s; }
.accordion-trigger { display: flex; justify-content: space-between; align-items: center; }
.faq-q-text { font-weight: 700; font-size: 15px; color: #0f172a; padding-right: 15px; }
.accordion-indicator { font-size: 18px; color: #94a3b8; font-weight: bold; }
.accordion-content { display: none; padding-top: 12px; border-top: 1px solid #f1f5f9; margin-top: 12px; color: #475569; font-size: 13px; line-height: 1.5; }

/* The True Fixed Smart Corner Avatar (Image 1 Component Overlay) */
.floating-cyber-avatar { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background: #000; border: 2px solid var(--neon-cyan); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; box-shadow: 0 0 20px rgba(0, 240, 255, 0.3); }
.avatar-core { color: var(--neon-cyan); font-weight: 900; font-size: 16px; letter-spacing: -0.5px; }
.online-indicator-ping { position: absolute; top: 2px; right: 2px; width: 10px; height: 10px; background: var(--neon-green); border-radius: 50%; border: 1px solid #000; }

/* Hidden Timed Offer CSS Card styling */
.hidden-popup-card { position: fixed; bottom: -400px; left: 24px; right: 24px; max-width: 400px; margin: 0 auto; background: #000; border: 2px dashed #ff4757; padding: 24px; border-radius: 24px; z-index: 10000; transition: bottom 0.5s ease-in-out; box-shadow: 0 20px 40px rgba(0,0,0,0.5); color: #fff; }
.hidden-popup-card.show-popup { bottom: 90px; }
.popup-inner { position: relative; }
.close-popup { position: absolute; top: -10px; right: 0; font-size: 24px; cursor: pointer; color: #94a3b8; }
.popup-badge { display: inline-block; font-size: 10px; font-weight: 800; color: #ff4757; border: 1px solid #ff4757; padding: 4px 10px; border-radius: 99px; margin-bottom: 12px; }
.popup-inner h3 { font-size: 18px; margin-bottom: 8px; }
.popup-inner p { font-size: 13px; color: #94a3b8; line-height: 1.4; margin-bottom: 16px; }
.popup-btn { display: inline-block; text-align: center; width: 100%; background: #ff4757; color: white; padding: 12px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; }

/* Keyframe Animations Engine */
@keyframes marquee-run { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
@keyframes pulse-glow { 0% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0.7); } 70% { box-shadow: 0 0 0 8px rgba(0, 240, 255, 0); } 100% { box-shadow: 0 0 0 0 rgba(0, 240, 255, 0); } }
