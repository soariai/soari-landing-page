"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import './landing.css'

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = ['/images/logo.png', '/images/hero-phone.png'].map((src) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image()
          img.onload = resolve
          img.onerror = reject
          img.src = src
        })
      })

      try {
        await Promise.all(imagePromises)
        setImagesLoaded(true)
      } catch (error) {
        console.warn('Some images failed to preload:', error)
        setImagesLoaded(true)
      }
    }
    preloadImages()
  }, [])

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
      </div>
    )
  }

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
    </div>
  )

  const PrivacyModal = () => (
    <div className="modal-section">
      <h1>Privacy Policy</h1>
      <p className="contact-info">Contact: privacy@soari.ai</p>
      <div className="section-block">
        <h2>What We Collect</h2>
        <ul>
          <li><strong>Account Data:</strong> Email, name, PIN</li>
          <li><strong>App Content:</strong> Chat messages, journal entries, mood data</li>
          <li><strong>Device Info:</strong> Device type, OS, identifiers</li>
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
          <li><strong>AI Coaches:</strong> Soft Era (supportive) & Real One (honest feedback)</li>
          <li><strong>Wellness Tools:</strong> Journal, situationship navigator, boundary builder</li>
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
            <Image 
              src="/images/logo.png" 
              alt="Soari" 
              width={80} 
              height={32} 
              className="logo"
              priority
            />
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-actions">
            <button className="nav-cta">Download App</button>
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6L18 18" />
                ) : (
                  <>
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              <button className="mobile-menu-cta" onClick={() => setIsMobileMenuOpen(false)}>
                Download App
              </button>
            </div>
          </div>
        )}
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
              Build emotional intelligence, set healthy boundaries, and navigate any relationship situation with AI coaches who understand your journey.
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
            {imagesLoaded ? (
              <>
                <Image
                  src="/images/hero-phone.png"
                  alt="Soari App Dashboard"
                  width={400}
                  height={800}
                  className="app-screenshot"
                  priority
                />
                <div className="phone-glow"></div>
              </>
            ) : (
              <div className="loading-spinner" />
            )}
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
              <p>Get personalized guidance from Soft Era (supportive) or Real One (direct) coaches for any relationship challenge</p>
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
    </div>
  )
}
