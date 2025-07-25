"use client"

import { useState } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const SupportModal = () => (
    <div className="modal-section">
      <h1>Support</h1>
      <p className="contact-info">We're here to help you on your relationship wellness journey</p>

      <div className="section-block">
        <h2>Contact Methods</h2>
        <div className="support-methods">
          <a href="mailto:hello@soari.ai" className="support-method">
            <strong>General Support</strong>
            hello@soari.ai
          </a>
          <a href="mailto:privacy@soari.ai" className="support-method">
            <strong>Privacy Questions</strong>
            privacy@soari.ai
          </a>
          <a href="mailto:legal@soari.ai" className="support-method">
            <strong>Legal Issues</strong>
            legal@soari.ai
          </a>
        </div>
      </div>

      <div className="section-block">
        <h2>Common Support Topics</h2>
        <ul>
          <li>
            <strong>Account Issues:</strong> Login problems, password reset, profile setup
          </li>
          <li>
            <strong>App Functionality:</strong> Feature questions, how-to guides, troubleshooting
          </li>
          <li>
            <strong>Tokens & Crypto:</strong> $SOARI earning, wallet connection, NFT access
          </li>
          <li>
            <strong>Subscriptions:</strong> Billing questions, plan changes, cancellations
          </li>
          <li>
            <strong>Technical Issues:</strong> App crashes, performance problems, bugs
          </li>
          <li>
            <strong>Safety Concerns:</strong> Inappropriate content, harassment, crisis support
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2>Response Times</h2>
        <ul>
          <li>
            <strong>General Inquiries:</strong> 24-48 hours
          </li>
          <li>
            <strong>Technical Issues:</strong> 12-24 hours
          </li>
          <li>
            <strong>Safety/Crisis:</strong> Immediate escalation to appropriate resources
          </li>
          <li>
            <strong>Billing:</strong> Same business day
          </li>
        </ul>
      </div>
    </div>
  )

  const PrivacyModal = () => (
    <div className="modal-section">
      <h1>Privacy Policy</h1>
      <p className="contact-info">Contact: privacy@soari.ai</p>

      <div className="section-block">
        <h2>What We Collect</h2>
        <ul>
          <li>
            <strong>Account Data:</strong> Email, name, PIN
          </li>
          <li>
            <strong>App Content:</strong> Chat messages, journal entries, mood data, situationship info
          </li>
          <li>
            <strong>Device Info:</strong> Device type, OS, identifiers
          </li>
          <li>
            <strong>Usage Analytics:</strong> App interactions, feature usage, token activity
          </li>
          <li>
            <strong>Biometric Data:</strong> Face ID/Touch ID (stored locally only)
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2>How We Use Data</h2>
        <ul>
          <li>
            <strong>AI Processing:</strong> Messages sent to OpenAI (GPT) and Anthropic (Claude)
          </li>
          <li>
            <strong>Personalization:</strong> Custom recommendations and insights
          </li>
          <li>
            <strong>Analytics:</strong> App improvement and performance
          </li>
          <li>
            <strong>Security:</strong> Fraud prevention and account protection
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2>Your Rights</h2>
        <ul>
          <li>
            <strong>Access:</strong> Request copies of your data
          </li>
          <li>
            <strong>Delete:</strong> Request account and data deletion
          </li>
          <li>
            <strong>Opt-out:</strong> Disable usage analytics
          </li>
          <li>
            <strong>Local Storage:</strong> Most data stays on your device
          </li>
        </ul>
      </div>

      <div className="disclaimer">
        <h3>Key Disclaimers</h3>
        <ul>
          <li>AI content for entertainment purposes only</li>
          <li>Not medical/mental health advice</li>
          <li>Users assume risk for decisions made</li>
        </ul>
      </div>
    </div>
  )

  const TermsModal = () => (
    <div className="modal-section">
      <h1>Terms of Service</h1>
      <p className="contact-info">Contact: legal@soari.ai</p>

      <div className="section-block">
        <h2>Service Description</h2>
        <ul>
          <li>
            <strong>AI Coaches:</strong> Soft Era (supportive) & Real One (honest feedback)
          </li>
          <li>
            <strong>Wellness Tools:</strong> Journal, situationship navigator, boundary builder
          </li>
          <li>
            <strong>Token Rewards:</strong> Earn $SOARI for engagement and growth
          </li>
          <li>
            <strong>Premium Features:</strong> Enhanced AI personalities and insights
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2>Subscription Tiers</h2>
        <ul>
          <li>
            <strong>Rent Free:</strong> $0/month - Basic features, limited chats
          </li>
          <li>
            <strong>Main Character:</strong> $11.99/month - Unlimited chats, 2x tokens, NFT access
          </li>
          <li>
            <strong>Villain Era:</strong> $24.99/month - Exclusive coaches, 5x tokens, priority support
          </li>
        </ul>
      </div>

      <div className="section-block">
        <h2>User Responsibilities</h2>
        <ul>
          <li>
            <strong>Age:</strong> Must be 18+ years old
          </li>
          <li>
            <strong>Behavior:</strong> No harmful, abusive, or illegal content
          </li>
          <li>
            <strong>Security:</strong> Protect account credentials
          </li>
          <li>
            <strong>Compliance:</strong> Follow app guidelines
          </li>
        </ul>
      </div>

      <div className="disclaimer">
        <h3>Critical Disclaimers</h3>
        <ul>
          <li>
            <strong>Not Emergency Service:</strong> Call 911 or crisis hotlines for emergencies
          </li>
          <li>
            <strong>Not Professional Advice:</strong> AI content not medical/legal guidance
          </li>
          <li>
            <strong>User Risk:</strong> All decisions and outcomes are user's responsibility
          </li>
          <li>
            <strong>Liability Limits:</strong> Service provided "as is" with no guarantees
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">
            <Image src="/images/logo.png" alt="Soari" width={80} height={32} className="logo" />
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
          </div>
          <button className="nav-cta">Download App</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>✨ Relationship Wellness Reimagined</span>
            </div>
            <h1 className="hero-title">
              Master your
              <span className="hero-gradient"> relationship wellness</span>
            </h1>
            <p className="hero-description">
              Build emotional intelligence, set healthy boundaries, and navigate any relationship situation with AI
              coaches who understand your journey.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                <span>Download for iOS</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </button>
              <button className="btn-secondary">
                <span>Android - Coming Soon</span>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/hero-phone.png"
              alt="Soari App Dashboard"
              width={1000}
              height={1200}
              className="app-screenshot"
              priority
            />
            <div className="phone-glow"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-container">
          <div className="section-header">
            <h2>Everything you need for relationship wellness</h2>
            <p>Comprehensive tools designed to help you build healthier, more fulfilling connections</p>
          </div>

          <div className="features-grid">
            <div className="feature-card card-green">
              <div className="feature-icon">🧠</div>
              <h3>AI Relationship Coaching</h3>
              <p>
                Get personalized guidance from Soft Era (supportive) or Real One (direct) coaches for any relationship
                challenge
              </p>
            </div>

            <div className="feature-card card-yellow">
              <div className="feature-icon">📊</div>
              <h3>Mood & Progress Tracking</h3>
              <p>Daily check-ins and emotional insights help you understand patterns and track your wellness journey</p>
            </div>

            <div className="feature-card card-blue">
              <div className="feature-icon">👥</div>
              <h3>Situationship Navigator</h3>
              <p>Track your connections, understand relationship dynamics, and get clarity on where you stand</p>
            </div>

            <div className="feature-card card-mint">
              <div className="feature-icon">📝</div>
              <h3>Smart Journaling</h3>
              <p>AI-powered insights help you identify patterns, process emotions, and accelerate personal growth</p>
            </div>

            <div className="feature-card card-lavender">
              <div className="feature-icon">🪙</div>
              <h3>Token Rewards</h3>
              <p>Earn $SOARI tokens for engagement, unlock premium features, and access exclusive NFT collections</p>
            </div>

            <div className="feature-card card-green">
              <div className="feature-icon">🛡️</div>
              <h3>Boundary Building</h3>
              <p>Interactive tools and exercises to help you set, communicate, and maintain healthy boundaries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15K+</div>
              <div className="stat-label">People building healthier relationships</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Wellness insights generated</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">92%</div>
              <div className="stat-label">Report improved emotional intelligence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <button onClick={() => setActiveModal("support")} className="footer-link">
              <span className="footer-icon">💬</span>
              <span>Support</span>
            </button>
            <button onClick={() => setActiveModal("terms")} className="footer-link">
              <span className="footer-icon">📋</span>
              <span>Terms of Service</span>
            </button>
            <button onClick={() => setActiveModal("privacy")} className="footer-link">
              <span className="footer-icon">🔒</span>
              <span>Privacy Policy</span>
            </button>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Soari. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6L18 18" />
              </svg>
            </button>
            {activeModal === "support" && <SupportModal />}
            {activeModal === "terms" && <TermsModal />}
            {activeModal === "privacy" && <PrivacyModal />}
          </div>
        </div>
      )}

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
          line-height: 1.6;
          color: #333633;
          background: #F7F7F2;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(247, 247, 242, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          font-size: 24px;
          font-weight: 700;
          color: #333633;
        }

        .logo {
          height: 32px;
          width: auto;
        }

        .nav-links {
          display: flex;
          gap: 32px;
        }

        .nav-links a {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: #272727;
        }

        .nav-cta {
          background: #272727;
          color: white;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-cta:hover {
          background: #333633;
          transform: translateY(-1px);
        }

        /* Hero Section */
        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #F7F7F2 0%, #F5F5F5 100%);
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(202, 231, 202, 0.3);
          border: 1px solid rgba(202, 231, 202, 0.5);
          padding: 8px 16px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 500;
          color: #2d5a2d;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .hero-gradient {
          background: linear-gradient(135deg, #CAE7CA 0%, #86808F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 20px;
          color: #666;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
        }

        .btn-primary {
          background: #272727;
          color: white;
          border: none;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          background: #333633;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        .btn-secondary {
          background: transparent;
          color: #333633;
          border: 2px solid #e5e5e5;
          padding: 16px 32px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          border-color: #333633;
          transform: translateY(-2px);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: visible;
        }

        .app-screenshot {
          max-width: 180%;
          height: auto;
          filter: drop-shadow(0 20px 80px rgba(0, 0, 0, 0.15));
        }

        .phone-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(202, 231, 202, 0.3) 0%, transparent 70%);
          z-index: -1;
          border-radius: 50%;
        }

        /* Features Section */
        .features {
          padding: 120px 0;
          background: #F7F7F2;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .section-header p {
          font-size: 20px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .feature-card {
          background: white;
          border: 1px solid #f0f0f0;
          padding: 32px;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
          border-color: #CAE7CA;
        }

        .feature-icon {
          font-size: 32px;
          margin-bottom: 20px;
          display: block;
        }

        .feature-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #333633;
        }

        .feature-card p {
          color: #666;
          line-height: 1.6;
        }

        /* Stats Section */
        .stats {
          padding: 80px 0;
          background: #F7F7F2;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 64px;
          text-align: center;
        }

        .stat-number {
          font-size: 56px;
          font-weight: 800;
          color: #333633;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          color: #666;
          font-size: 16px;
          font-weight: 500;
        }

        /* Footer */
        .footer {
          background: #272727;
          color: white;
          padding: 60px 0 40px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .footer-content {
          display: flex;
          justify-content: center;
          gap: 64px;
          margin-bottom: 40px;
        }

        .footer-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .footer-link:hover {
          color: #CAE7CA;
          transform: translateY(-2px);
        }

        .footer-icon {
          font-size: 24px;
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 24px;
          text-align: center;
          color: #999;
          font-size: 14px;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          backdrop-filter: blur(8px);
        }

        .modal-content {
          background: white;
          border-radius: 20px;
          max-width: 600px;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
          padding: 40px;
          width: 100%;
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.2);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f5f5f5;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .modal-close:hover {
          background: #e5e5e5;
        }

        .modal-section h1 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #333633;
        }

        .modal-section h2 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #333633;
        }

        .modal-section h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #333633;
        }

        .contact-info {
          color: #666;
          margin-bottom: 32px;
          font-style: italic;
        }

        .section-block {
          margin-bottom: 32px;
        }

        .section-block ul {
          list-style: none;
          padding: 0;
        }

        .section-block li {
          margin-bottom: 12px;
          padding-left: 20px;
          position: relative;
          line-height: 1.6;
        }

        .section-block li:before {
          content: "•";
          color: #CAE7CA;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .disclaimer {
          background: #F7E783;
          padding: 20px;
          border-radius: 12px;
          margin-top: 20px;
        }

        .support-methods {
          display: grid;
          gap: 16px;
          margin-bottom: 32px;
        }

        .support-method {
          background: #CAE7CA;
          padding: 20px;
          border-radius: 12px;
          text-decoration: none;
          color: #333633;
          transition: all 0.2s ease;
        }

        .support-method:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .support-method strong {
          display: block;
          margin-bottom: 4px;
          font-weight: 600;
        }

        /* Brand Color Cards */
        .card-green {
          background: #CAE7CA !important;
          border-color: #CAE7CA !important;
        }

        .card-yellow {
          background: #F7E783 !important;
          border-color: #F7E783 !important;
        }

        .card-purple {
          background: #86808F !important;
          border-color: #86808F !important;
          color: white !important;
        }

        .card-purple h3,
        .card-purple p {
          color: white !important;
        }

        .card-cream {
          background: #F7F7F2 !important;
          border-color: #F7F7F2 !important;
        }

        .card-lavender {
          background: #A195A8 !important;
          border-color: #A195A8 !important;
        }

        .card-blue {
          background: #CAD1E8 !important;
          border-color: #CAD1E8 !important;
        }

        .card-mint {
          background: #CAE8E8 !important;
          border-color: #CAE8E8 !important;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
            text-align: center;
          }

          .hero-title {
            font-size: 48px;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-content {
            gap: 40px;
          }

          .modal-content {
            padding: 24px;
            margin: 10px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 0 16px;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .footer-content {
            flex-direction: column;
            gap: 24px;
          }
        }
      `}</style>
    </div>
  )
}
