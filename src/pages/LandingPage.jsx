import "../styles/landing.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  ChartNoAxesCombined,
  Leaf,
  ArrowRight,
  MapPin,
  QrCode,
  FileText,
  Settings,
  CheckCircle2,
  Building2,
  Menu,
  Eye,
  ClipboardCheck,
} from "lucide-react";

import "../App.css";

export default function LandingPage() {
  const heroFeatures = [
    {
      icon: <ShieldCheck />,
      title: "Easy Reporting",
      description: "Scan QR or log in",
    },
    {
      icon: <Users />,
      title: "Quick Resolution",
      description: "Right department",
    },
    {
      icon: <ChartNoAxesCombined />,
      title: "Track Progress",
      description: "Stay updated",
    },
    {
      icon: <Leaf />,
      title: "Better Campus",
      description: "For everyone",
    },
  ];

  const purposeFeatures = [
    {
      number: "01",
      icon: <ClipboardCheck />,
      title: "Report with clarity",
      description:
        "Submit campus issues through a structured reporting process.",
    },
    {
      number: "02",
      icon: <ChartNoAxesCombined />,
      title: "Track every update",
      description:
        "Understand whether an issue is pending, in progress or resolved.",
    },
    {
      number: "03",
      icon: <Eye />,
      title: "Build transparency",
      description:
        "Follow approved public updates and see how campus issues progress.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: <QrCode />,
      title: "Scan or Login",
      description:
        "Scan the QR code at the location or log in with your college email.",
    },
    {
      number: "02",
      icon: <FileText />,
      title: "Report the Problem",
      description:
        "Fill in the details with description, category and optional photo.",
    },
    {
      number: "03",
      icon: <Settings />,
      title: "Assigned & Resolved",
      description:
        "Management assigns the issue to the right department and staff.",
    },
    {
      number: "04",
      icon: <CheckCircle2 />,
      title: "Track the Update",
      description:
        "Get status updates and verify the resolution.",
    },
  ];

  const campusBenefits = [
    {
      icon: <Building2 />,
      title: "Cleaner Campus",
      description: "Through your support",
    },
    {
      icon: <ShieldCheck />,
      title: "Safer Environment",
      description: "For all students",
    },
    {
      icon: <ChartNoAxesCombined />,
      title: "Better Facilities",
      description: "Together we improve",
    },
    {
      icon: <Users />,
      title: "Stronger Community",
      description: "Small actions, big impact",
    },
  ];

  return (
    <div className="cp-page">
      {/* NAVIGATION */}
      <header className="cp-header">
        <Link to="/" className="cp-logo">
          <span className="cp-logo-icon">
            <ShieldCheck size={25} />
          </span>

          <span className="cp-logo-text">
            Campus<span>Pulse</span>
          </span>
        </Link>

        <nav className="cp-navigation">
          <a className="cp-nav-active" href="#home">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="cp-header-actions">
          <Link to="/login" className="cp-login">
            Login
          </Link>

          <Link to="/register" className="cp-get-started">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="cp-menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded="false"
          onClick={(event) => {
            const menu = document.querySelector(
              ".cp-mobile-navigation"
            );

            const isOpen = menu?.classList.toggle(
              "cp-mobile-navigation-open"
            );

            event.currentTarget.setAttribute(
              "aria-expanded",
              String(Boolean(isOpen))
            );
          }}
        >
          <Menu size={25} />
        </button>

        <nav className="cp-mobile-navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="cp-hero" id="home">
          <img
            className="cp-hero-background"
            src="/campus-building.png"
            alt="Campus building illuminated by warm lights"
          />

          <div className="cp-hero-shade" />

          <div className="cp-hero-content">
            <div className="cp-tagline">
              REPORT <span>✦</span> RESOLVE <span>✦</span> A BETTER CAMPUS
            </div>

            <h1>
              A Cleaner,
              <br />
              Safer, Better
              <br />
              Campus — <span>Together.</span>
            </h1>

            <p className="cp-hero-description">
              Report campus issues in seconds. Scan a QR code
              or log in to submit a problem. Help us make our
              campus a better place for everyone.
            </p>

            <div className="cp-hero-actions">
              <Link to="/login" className="cp-report-button">
                <FileText size={18} />
                Report a Problem
                <ArrowRight size={17} />
              </Link>

              <a href="#how-it-works" className="cp-learn-button">
                Learn More
              </a>
            </div>

            <div className="cp-hero-features">
              {heroFeatures.map((feature) => (
                <div
                  className="cp-hero-feature"
                  key={feature.title}
                >
                  <div className="cp-hero-feature-icon">
                    {feature.icon}
                  </div>

                  <div className="cp-hero-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cp-campus-label">
            <div className="cp-campus-label-icon">
              <MapPin size={22} />
            </div>

            <div>
              <h3>Our Campus</h3>
              <p>
                A place to learn, grow and build a better tomorrow.
              </p>
            </div>
          </div>
        </section>

        {/* PURPOSE SECTION */}
        <section className="cp-about-section" id="about">
          <div className="cp-purpose-layout">
            <div className="cp-purpose-content">
              <div className="cp-purpose-label">
                <span />
                WHY CAMPUSPULSE EXISTS
              </div>

              <h2>
                Every campus problem deserves a{" "}
                <span>solution.</span>
              </h2>

              <p className="cp-purpose-description">
                Campus issues can get lost in informal messages
                and lack clear ownership or follow-up. CampusPulse
                provides a structured way to report problems and
                follow their progress towards resolution.
              </p>

              <Link
                to="/login"
                className="cp-purpose-button"
              >
                Make your voice count
                <ArrowRight size={17} />
              </Link>

              <div className="cp-purpose-note">
                <ShieldCheck size={18} />
                <span>
                  Your reports help build a better campus.
                </span>
              </div>
            </div>

            <div className="cp-purpose-cards">
              {purposeFeatures.map((feature) => (
                <article
                  className="cp-purpose-card"
                  key={feature.number}
                >
                  <div className="cp-purpose-card-icon">
                    {feature.icon}
                  </div>

                  <div className="cp-purpose-card-content">
                    <div className="cp-purpose-card-heading">
                      <h3>{feature.title}</h3>
                      <span>{feature.number}</span>
                    </div>

                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          className="cp-process-section"
          id="how-it-works"
        >
          <div className="cp-process-heading">
            <div className="cp-process-title">
              <span className="cp-heading-accent" />

              <div>
                <h2>How It Works</h2>
                <p>
                  From reporting to resolution, CampusPulse makes it simple.
                </p>
              </div>
            </div>

            <Link to="/login" className="cp-process-link">
              Report an Issue <ArrowRight size={16} />
            </Link>
          </div>

          <div className="cp-process-grid">
            {processSteps.map((step) => (
              <article
                className="cp-process-card"
                key={step.number}
              >
                <div className="cp-process-card-top">
                  <div className="cp-process-icon">
                    {step.icon}
                  </div>

                  <span className="cp-step-number">
                    {step.number}
                  </span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CAMPUS BENEFITS */}
        <section
          className="cp-benefits-section"
          id="features"
        >
          <div className="cp-benefits-strip">
            {campusBenefits.map((benefit) => (
              <article
                className="cp-benefit"
                key={benefit.title}
              >
                <div className="cp-benefit-icon">
                  {benefit.icon}
                </div>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="cp-footer" id="contact">
        <Link to="/" className="cp-logo cp-footer-logo">
          <span className="cp-logo-icon">
            <ShieldCheck size={23} />
          </span>

          <span className="cp-logo-text">
            Campus<span>Pulse</span>
          </span>
        </Link>

        <p>
          A better campus begins with a problem reported.
        </p>

        <span className="cp-copyright">
          © {new Date().getFullYear()} CampusPulse
        </span>
      </footer>
    </div>
  );
}
