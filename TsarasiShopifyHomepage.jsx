import React from "react";

// Example image and icon URLs for illustration purposes
const heroImage =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80"; // Replace with your own
const giftIcon =
  "https://img.icons8.com/color/96/000000/gift--v1.png";
const airplaneIcon =
  "https://img.icons8.com/color/48/000000/airplane-take-off.png";
const safetyIcons = [
  "https://img.icons8.com/color/48/000000/eco-friendly.png",
  "https://img.icons8.com/color/48/000000/organic-food.png",
  "https://img.icons8.com/color/48/000000/security-checked.png",
];

// Fonts: Baloo 2 (headers), Inter (body)
const fontUrl1 =
  "https://fonts.googleapis.com/css2?family=Baloo+2:wght@700&display=swap";
const fontUrl2 =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap";

export default function TsarasiShopifyHomepage() {
  // Newsletter popup state
  const [showNewsletter, setShowNewsletter] = React.useState(true);

  // Dummy data
  const ageGroups = [
    { label: "0–2", color: "#FEE7E6" },
    { label: "3–5", color: "#FFF8E1" },
    { label: "6–8", color: "#E0F7FA" },
    { label: "9–12", color: "#FFF3E6" },
  ];
  const featuredToys = [
    {
      name: "Rainbow Stacker",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      price: "$24.99",
    },
    {
      name: "Wooden Train Set",
      img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80",
      price: "$34.99",
    },
    {
      name: "Plush Bunny",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
      price: "$19.99",
    },
  ];
  const testimonials = [
    {
      name: "Emma R.",
      text: "Tsarasi toys are beautifully made and totally safe. My kids love them!",
      avatar:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Luis M.",
      text: "The toys are vibrant, durable, and spark so much joy. Highly recommend!",
      avatar:
        "https://randomuser.me/api/portraits/men/35.jpg",
    },
  ];
  const instagramImages = [
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  ];

  return (
    <>
      {/* Fonts */}
      <link href={fontUrl1} rel="stylesheet" />
      <link href={fontUrl2} rel="stylesheet" />

      {/* Newsletter Popup */}
      {showNewsletter && (
        <div style={styles.newsletterOverlay}>
          <div style={styles.newsletterModal}>
            <img src={giftIcon} alt="Gift" style={styles.giftIcon} />
            <h3 style={styles.newsletterTitle}>Sign Up & Get a Surprise Gift!</h3>
            <input
              type="email"
              placeholder="Your email"
              style={styles.newsletterInput}
            />
            <button style={styles.newsletterButton}>Subscribe</button>
            <button
              style={styles.newsletterClose}
              onClick={() => setShowNewsletter(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <section style={styles.heroSection}>
        <div style={styles.heroBg} />
        <img
          src={airplaneIcon}
          alt="Flying airplane"
          style={styles.airplane}
          className="flying-airplane"
        />
        <div style={styles.heroContent}>
          <img src={heroImage} alt="Happy child playing" style={styles.heroImage} />
          <div style={styles.heroText}>
            <h1 style={styles.headline}>Where Little Dreams Grow</h1>
            <div style={styles.heroButtons}>
              <button style={{ ...styles.ctaButton, ...styles.bounce }}>Shop Toys</button>
              <button style={{ ...styles.ctaButton, ...styles.ctaOutline, ...styles.bounce }}>
                Explore by Age
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Age Group */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Shop by Age Group</h2>
        <div style={styles.ageGroups}>
          {ageGroups.map((group) => (
            <div
              key={group.label}
              style={{
                ...styles.ageCard,
                background: group.color,
              }}
            >
              <span style={styles.ageLabel}>{group.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Toys */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Featured Toys</h2>
        <div style={styles.featuredToys}>
          {featuredToys.map((toy) => (
            <div key={toy.name} style={styles.toyCard}>
              <img src={toy.img} alt={toy.name} style={styles.toyImage} />
              <span style={styles.toyName}>{toy.name}</span>
              <span style={styles.toyPrice}>{toy.price}</span>
              <button style={{ ...styles.toyCartButton, ...styles.bounceMini }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Parent Testimonials */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Parent Testimonials</h2>
        <div style={styles.testimonials}>
          {testimonials.map((t) => (
            <div key={t.name} style={styles.testimonialCard}>
              <img src={t.avatar} alt={t.name} style={styles.testimonialAvatar} />
              <p style={styles.testimonialText}>"{t.text}"</p>
              <span style={styles.testimonialName}>{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Certifications */}
      <section style={styles.certifications}>
        {safetyIcons.map((icon, i) => (
          <img key={i} src={icon} alt="Safety Certification" style={styles.certIcon} />
        ))}
      </section>

      {/* Instagram Carousel */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Follow Us on Instagram</h2>
        <div style={styles.instagramCarousel}>
          {instagramImages.map((img, i) => (
            <img key={i} src={img} alt="Instagram" style={styles.instaImage} />
          ))}
        </div>
      </section>

      {/* Floating Add to Cart Button */}
      <button style={{ ...styles.floatingCart, ...styles.bounceMini }}>
        🛒 Add to Cart
      </button>

      {/* Animations */}
      <style>
        {`
        .flying-airplane {
          animation: airplane-fly 6s linear infinite;
        }
        @keyframes airplane-fly {
          0% { left: -48px; top: 20px; opacity: 0.4; }
          30% { opacity: 1; }
          50% { left: 80vw; top: 0px; opacity: 1; }
          70% { opacity: 1; }
          100% { left: 120vw; top: 30px; opacity: 0.4; }
        }
        .bounce, .bounceMini {
          animation: bounce 1.2s infinite alternate;
        }
        .bounceMini {
          animation: bounceMini 0.9s infinite alternate;
        }
        @keyframes bounce {
          0% { transform: translateY(0);}
          100% { transform: translateY(-8px);}
        }
        @keyframes bounceMini {
          0% { transform: translateY(0);}
          100% { transform: translateY(-4px);}
        }
        `}
      </style>
    </>
  );
}

// Styles
const skyBlue = "#B9E7FE";
const sunshineYellow = "#FFF176";
const coralPink = "#FFB6B6";
const creamWhite = "#FFF9F3";
const deepBlue = "#1E4E7C";
const softGray = "#F6F5F7";

const styles = {
  heroSection: {
    background: `linear-gradient(135deg, ${skyBlue} 60%, ${coralPink} 100%)`,
    minHeight: 480,
    position: "relative",
    padding: "0",
    overflow: "hidden",
  },
  heroBg: {
    position: "absolute",
    inset: 0,
    background: `radial-gradient(circle at 70% 30%, ${sunshineYellow} 0%, transparent 70%)`,
    zIndex: 1,
  },
  airplane: {
    position: "absolute",
    top: 20,
    left: -48,
    width: 48,
    zIndex: 2,
    opacity: 0.7,
  },
  heroContent: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "48px 24px",
    gap: 48,
  },
  heroImage: {
    borderRadius: "36px",
    width: 350,
    height: 350,
    objectFit: "cover",
    boxShadow: "0 8px 32px rgba(30,78,124,0.08)",
    border: `8px solid ${creamWhite}`,
    background: creamWhite,
  },
  heroText: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 32,
  },
  headline: {
    fontFamily: "'Baloo 2', sans-serif",
    fontWeight: 700,
    fontSize: "3rem",
    color: deepBlue,
    margin: 0,
    letterSpacing: 1,
    lineHeight: 1.1,
  },
  heroButtons: {
    display: "flex",
    gap: 24,
  },
  ctaButton: {
    fontFamily: "'Baloo 2', sans-serif",
    fontSize: "1.25rem",
    padding: "16px 36px",
    borderRadius: 32,
    border: "none",
    background: sunshineYellow,
    color: deepBlue,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(255,183,102,0.13)",
    transition: "background 0.2s",
  },
  ctaOutline: {
    background: creamWhite,
    border: `2px solid ${deepBlue}`,
    color: deepBlue,
  },
  section: {
    padding: "64px 0 32px 0",
    background: creamWhite,
  },
  sectionHeader: {
    fontFamily: "'Baloo 2', sans-serif",
    fontSize: "2.2rem",
    color: deepBlue,
    textAlign: "center",
    marginBottom: 36,
    fontWeight: 700,
    letterSpacing: 0.5,
  },
  ageGroups: {
    display: "flex",
    justifyContent: "center",
    gap: 32,
    flexWrap: "wrap",
  },
  ageCard: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Baloo 2', sans-serif",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: deepBlue,
    boxShadow: "0 2px 8px rgba(30,78,124,0.07)",
    cursor: "pointer",
    transition: "transform 0.15s",
    margin: 8,
  },
  ageLabel: {
    fontWeight: 700,
  },
  featuredToys: {
    display: "flex",
    gap: 32,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  toyCard: {
    background: "#fff",
    borderRadius: 32,
    width: 240,
    boxShadow: "0 2px 14px rgba(30,78,124,0.09)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24,
    gap: 16,
    transition: "box-shadow 0.2s",
    margin: 8,
  },
  toyImage: {
    width: 160,
    height: 160,
    borderRadius: 24,
    objectFit: "cover",
    background: softGray,
    marginBottom: 12,
  },
  toyName: {
    fontFamily: "'Baloo 2', sans-serif",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: deepBlue,
  },
  toyPrice: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: "1.1rem",
    color: coralPink,
  },
  toyCartButton: {
    fontFamily: "'Baloo 2', sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    background: skyBlue,
    color: deepBlue,
    border: "none",
    borderRadius: 24,
    padding: "12px 24px",
    cursor: "pointer",
    marginTop: 8,
    transition: "background 0.2s",
  },
  testimonials: {
    display: "flex",
    gap: 32,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  testimonialCard: {
    background: "#fff",
    borderRadius: 32,
    boxShadow: "0 2px 14px rgba(30,78,124,0.08)",
    width: 300,
    padding: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    margin: 8,
  },
  testimonialAvatar: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    objectFit: "cover",
    border: `3px solid ${skyBlue}`,
  },
  testimonialText: {
    fontFamily: "'Inter', sans-serif",
    fontStyle: "italic",
    fontSize: "1.1rem",
    color: deepBlue,
    textAlign: "center",
    margin: "16px 0 0 0",
  },
  testimonialName: {
    fontFamily: "'Baloo 2', sans-serif",
    fontWeight: 700,
    color: coralPink,
    fontSize: "1rem",
  },
  certifications: {
    display: "flex",
    gap: 36,
    justifyContent: "center",
    alignItems: "center",
    background: softGray,
    padding: "24px 0",
    borderRadius: 40,
    margin: "40px 0",
  },
  certIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    background: "#fff",
    boxShadow: "0 1px 8px rgba(30,78,124,0.06)",
    padding: 8,
  },
  instagramCarousel: {
    display: "flex",
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    padding: "12px 0",
  },
  instaImage: {
    width: 120,
    height: 120,
    borderRadius: 24,
    objectFit: "cover",
    boxShadow: "0 2px 8px rgba(255,182,182,0.12)",
    border: `3px solid ${creamWhite}`,
  },
  floatingCart: {
    position: "fixed",
    bottom: 32,
    right: 32,
    borderRadius: 32,
    background: coralPink,
    color: "#fff",
    fontFamily: "'Baloo 2', sans-serif",
    fontSize: "1.2rem",
    padding: "16px 36px",
    boxShadow: "0 6px 24px rgba(255,182,182,0.18)",
    border: "none",
    cursor: "pointer",
    zIndex: 999,
    fontWeight: 700,
    transition: "background 0.19s",
  },
  // Newsletter styles
  newsletterOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(30,78,124,0.12)",
    zIndex: 2000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  newsletterModal: {
    background: "#fff",
    borderRadius: 32,
    boxShadow: "0 2px 24px rgba(30,78,124,0.14)",
    width: 360,
    padding: "36px 32px 32px 32px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    border: `4px solid ${skyBlue}`,
  },
  giftIcon: {
    width: 56,
    height: 56,
    marginBottom: 8,
  },
  newsletterTitle: {
    fontFamily: "'Baloo 2', sans-serif",
    fontWeight: 700,
    fontSize: "1.2rem",
    color: deepBlue,
    margin: 0,
  },
  newsletterInput: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 24,
    border: `1.5px solid ${skyBlue}`,
    fontSize: "1rem",
    fontFamily: "'Inter', sans-serif",
    marginBottom: 12,
  },
  newsletterButton: {
    background: sunshineYellow,
    color: deepBlue,
    fontFamily: "'Baloo 2', sans-serif",
    fontWeight: 700,
    border: "none",
    borderRadius: 24,
    padding: "12px 24px",
    fontSize: "1.05rem",
    cursor: "pointer",
  },
  newsletterClose: {
    position: "absolute",
    top: 12,
    right: 18,
    background: "none",
    border: "none",
    fontSize: 28,
    color: "#aaa",
    cursor: "pointer",
  },
  bounce: {},
  bounceMini: {},
};