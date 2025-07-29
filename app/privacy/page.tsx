"use client"

import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <Link href="/" className="nav-brand">
            <span>Soari</span>
          </Link>
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="privacy-content">
        <div className="privacy-container">
          <header className="privacy-header">
            <h1>Privacy Policy</h1>
            <p className="contact-info">
              Contact: <a href="mailto:privacy@soari.ai">privacy@soari.ai</a>
            </p>
            <p className="last-updated">Last updated: January 2025</p>
          </header>

          <section className="section-block">
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
          </section>

          <section className="section-block">
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
          </section>

          <section className="section-block">
            <h2>Data Sharing</h2>
            <ul>
              <li>
                <strong>AI Partners:</strong> Chat content processed by OpenAI and Anthropic for AI responses
              </li>
              <li>
                <strong>Analytics:</strong> Anonymized usage data for app improvement
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect safety
              </li>
              <li>
                <strong>No Selling:</strong> We never sell your personal data to third parties
              </li>
            </ul>
          </section>

          <section className="section-block">
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
              <li>
                <strong>Portability:</strong> Export your data in common formats
              </li>
            </ul>
          </section>

          <section className="section-block">
            <h2>Data Security</h2>
            <ul>
              <li>
                <strong>Encryption:</strong> All data encrypted in transit and at rest
              </li>
              <li>
                <strong>Local Storage:</strong> Sensitive data stored locally when possible
              </li>
              <li>
                <strong>Access Controls:</strong> Strict employee access policies
              </li>
              <li>
                <strong>Regular Audits:</strong> Security reviews and updates
              </li>
            </ul>
          </section>

          <section className="section-block">
            <h2>Contact & Updates</h2>
            <ul>
              <li>
                <strong>Privacy Questions:</strong> <a href="mailto:privacy@soari.ai">privacy@soari.ai</a>
              </li>
              <li>
                <strong>General Support:</strong> <a href="mailto:hello@soari.ai">hello@soari.ai</a>
              </li>
              <li>
                <strong>Policy Updates:</strong> Users notified of material changes
              </li>
              <li>
                <strong>Response Time:</strong> Privacy requests handled within 30 days
              </li>
            </ul>
          </section>

          <div className="disclaimer">
            <h3>Important Disclaimers</h3>
            <ul>
              <li>AI content for entertainment purposes only</li>
              <li>Not medical/mental health advice</li>
              <li>Users assume risk for decisions made based on AI responses</li>
              <li>Emergency services: Call 911 or local crisis hotlines for emergencies</li>
            </ul>
          </div>

          <footer className="privacy-footer">
            <p>&copy; 2025 Soari. All rights reserved.</p>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/terms">Terms of Service</Link>
              <a href="mailto:privacy@soari.ai">Contact Privacy Team</a>
            </div>
          </footer>
        </div>
      </main>

      <style jsx global>{`
        .privacy-page {
          min-height: 100vh;
          background: #F7F7F2;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
        }

        .nav {
          background: rgba(247, 247, 242, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          position: sticky;
          top: 0;
          z-index: 100;
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
          text-decoration: none;
        }

        .back-link {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: #333633;
        }

        .privacy-content {
          padding: 60px 0 120px;
        }

        .privacy-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .privacy-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .privacy-header h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #333633;
          letter-spacing: -0.02em;
        }

        .contact-info {
          color: #666;
          margin-bottom: 8px;
          font-size: 18px;
        }

        .contact-info a {
          color: #333633;
          text-decoration: none;
          font-weight: 600;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }

        .last-updated {
          color: #999;
          font-size: 14px;
          font-style: italic;
        }

        .section-block {
          background: white;
          padding: 40px;
          border-radius: 16px;
          margin-bottom: 32px;
          border: 1px solid #f0f0f0;
        }

        .section-block h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 24px;
          color: #333633;
        }

        .section-block ul {
          list-style: none;
          padding: 0;
        }

        .section-block li {
          margin-bottom: 16px;
          padding-left: 20px;
          position: relative;
          line-height: 1.6;
          color: #333633;
        }

        .section-block li:before {
          content: "•";
          color: #CAE7CA;
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 18px;
        }

        .section-block a {
          color: #333633;
          text-decoration: none;
          font-weight: 600;
        }

        .section-block a:hover {
          text-decoration: underline;
        }

        .disclaimer {
          background: #F7E783;
          padding: 32px;
          border-radius: 16px;
          margin: 40px 0;
        }

        .disclaimer h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #333633;
        }

        .disclaimer ul {
          list-style: none;
          padding: 0;
        }

        .disclaimer li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
          line-height: 1.5;
          color: #333633;
        }

        .disclaimer li:before {
          content: "⚠️";
          position: absolute;
          left: 0;
          font-size: 14px;
        }

        .privacy-footer {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid #e5e5e5;
          margin-top: 60px;
        }

        .privacy-footer p {
          color: #666;
          margin-bottom: 16px;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 32px;
        }

        .footer-links a {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #333633;
        }

        @media (max-width: 768px) {
          .privacy-header h1 {
            font-size: 36px;
          }

          .section-block {
            padding: 24px;
          }

          .disclaimer {
            padding: 24px;
          }

          .footer-links {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </div>
  )
} 