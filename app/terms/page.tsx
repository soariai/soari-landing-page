"use client"

import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="terms-page">
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
      <main className="terms-content">
        <div className="terms-container">
          <header className="terms-header">
            <h1>Terms of Service</h1>
            <p className="contact-info">
              Contact: <a href="mailto:legal@soari.ai">legal@soari.ai</a>
            </p>
            <p className="last-updated">Last updated: January 2025</p>
          </header>

          <section className="section-block">
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
          </section>

          <section className="section-block">
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
          </section>

          <section className="section-block">
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
          </section>

          <section className="section-block">
            <h2>Acceptable Use</h2>
            <ul>
              <li>
                <strong>Respectful Communication:</strong> Maintain respectful interactions with AI and other users
              </li>
              <li>
                <strong>No Harassment:</strong> Prohibited to use service for harassment or abuse
              </li>
              <li>
                <strong>No Illegal Activity:</strong> Service cannot be used for illegal purposes
              </li>
              <li>
                <strong>Content Guidelines:</strong> All user content must comply with community standards
              </li>
            </ul>
          </section>

          <section className="section-block">
            <h2>Intellectual Property</h2>
            <ul>
              <li>
                <strong>User Content:</strong> You retain rights to your personal content
              </li>
              <li>
                <strong>AI Responses:</strong> AI-generated content subject to our license terms
              </li>
              <li>
                <strong>App Content:</strong> Soari owns app design, features, and proprietary technology
              </li>
              <li>
                <strong>Trademarks:</strong> Soari name and logos are protected trademarks
              </li>
            </ul>
          </section>

          <section className="section-block">
            <h2>Payment & Refunds</h2>
            <ul>
              <li>
                <strong>Billing:</strong> Subscriptions billed monthly or annually
              </li>
              <li>
                <strong>Cancellation:</strong> Cancel anytime through app settings
              </li>
              <li>
                <strong>Refunds:</strong> Refunds handled according to platform policies (App Store/Google Play)
              </li>
              <li>
                <strong>Token Purchases:</strong> $SOARI tokens are non-refundable
              </li>
            </ul>
          </section>

          <section className="section-block">
            <h2>Termination</h2>
            <ul>
              <li>
                <strong>User Termination:</strong> You may delete your account at any time
              </li>
              <li>
                <strong>Service Termination:</strong> We may suspend accounts for violations
              </li>
              <li>
                <strong>Data Retention:</strong> Account data deleted within 30 days of termination
              </li>
              <li>
                <strong>Survival:</strong> Certain terms survive termination (payments, intellectual property)
              </li>
            </ul>
          </section>

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
              <li>
                <strong>Entertainment Purpose:</strong> AI responses are for entertainment and self-reflection only
              </li>
            </ul>
          </div>

          <footer className="terms-footer">
            <p>&copy; 2025 Soari. All rights reserved.</p>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <a href="mailto:legal@soari.ai">Contact Legal Team</a>
            </div>
          </footer>
        </div>
      </main>

      <style jsx global>{`
        .terms-page {
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

        .terms-content {
          padding: 60px 0 120px;
        }

        .terms-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .terms-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .terms-header h1 {
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

        .terms-footer {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid #e5e5e5;
          margin-top: 60px;
        }

        .terms-footer p {
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
          .terms-header h1 {
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