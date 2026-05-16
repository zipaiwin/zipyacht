import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Anchor,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Compass,
  LifeBuoy,
  MapPin,
  Menu,
  ShipWheel,
  Sparkles,
  Star,
  Users,
  Waves,
} from 'lucide-react';
import './styles.css';

const yachts = [
  {
    name: 'Azzurra 62',
    location: 'Miami Beach, FL',
    price: '$8,900',
    image:
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=900&q=80',
    details: ['62 ft', '12 guests', 'Chef + captain'],
    badge: 'Most booked',
  },
  {
    name: 'Serenity Sunseeker',
    location: 'Nassau, Bahamas',
    price: '$14,500',
    image:
      'https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=900&q=80',
    details: ['74 ft', '10 guests', 'Snorkel gear'],
    badge: 'Island hop',
  },
  {
    name: 'Marina Eclipse',
    location: 'Newport, RI',
    price: '$6,750',
    image:
      'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=900&q=80',
    details: ['54 ft', '8 guests', 'Sunset route'],
    badge: 'New fleet',
  },
];

const itinerarySteps = [
  {
    icon: CalendarDays,
    title: 'Choose your window',
    text: 'Pick a half-day escape, full-day celebration, or multi-night island itinerary.',
  },
  {
    icon: ShipWheel,
    title: 'Match with a yacht',
    text: 'ZipYacht curates crewed vessels based on your group, budget, vibe, and destination.',
  },
  {
    icon: Sparkles,
    title: 'Customize every detail',
    text: 'Add catering, water toys, transfers, photographers, DJs, and special occasion touches.',
  },
];

const destinations = ['Miami', 'Bahamas', 'Newport', 'Hamptons', 'San Diego', 'BVI'];

function App() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="ZipYacht home">
          <span className="brand-mark">
            <Waves size={24} />
          </span>
          ZipYacht
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#fleet">Fleet</a>
          <a href="#how-it-works">How it works</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Concierge</a>
        </div>
        <a className="nav-cta" href="#contact">
          Plan charter
        </a>
        <button className="menu-button" aria-label="Open navigation">
          <Menu />
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content">
          <div className="eyebrow">
            <Anchor size={18} />
            Private yacht charters, booked beautifully
          </div>
          <h1>Sell the dream day at sea before your guests even step aboard.</h1>
          <p>
            ZipYacht is a polished charter marketplace for showcasing premium vessels, curated
            itineraries, and white-glove concierge upsells in one conversion-focused experience.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#fleet">
              Browse charters <ArrowRight size={19} />
            </a>
            <a className="secondary-button" href="#contact">
              Talk to concierge
            </a>
          </div>
          <div className="trust-row" aria-label="Trust statistics">
            <div>
              <strong>240+</strong>
              <span>verified yachts</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>guest rating</span>
            </div>
            <div>
              <strong>18</strong>
              <span>coastal markets</span>
            </div>
          </div>
        </div>
        <div className="booking-card" aria-label="Charter search card">
          <div className="card-topline">Instant estimate</div>
          <h2>Find your perfect charter</h2>
          <label>
            Destination
            <span>
              <MapPin size={18} /> Miami Beach Marina
            </span>
          </label>
          <label>
            Date
            <span>
              <CalendarDays size={18} /> Sat, June 20
            </span>
          </label>
          <label>
            Group size
            <span>
              <Users size={18} /> 10 guests
            </span>
          </label>
          <button>
            Request availability <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <section className="section fleet" id="fleet">
        <div className="section-heading">
          <span>Featured fleet</span>
          <h2>Charters designed to close premium bookings.</h2>
          <p>
            Highlight vessel details, inclusions, and starting prices with editorial-grade cards that
            make every listing feel aspirational and easy to compare.
          </p>
        </div>
        <div className="yacht-grid">
          {yachts.map((yacht) => (
            <article className="yacht-card" key={yacht.name}>
              <div className="image-wrap">
                <img src={yacht.image} alt={`${yacht.name} yacht charter`} />
                <span>{yacht.badge}</span>
              </div>
              <div className="yacht-body">
                <div>
                  <h3>{yacht.name}</h3>
                  <p>
                    <MapPin size={16} /> {yacht.location}
                  </p>
                </div>
                <strong>{yacht.price}<small>/day</small></strong>
                <ul>
                  {yacht.details.map((detail) => (
                    <li key={detail}>
                      <CheckCircle2 size={16} /> {detail}
                    </li>
                  ))}
                </ul>
                <a href="#contact">Reserve this yacht</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="how-it-works">
        <div className="section-heading compact">
          <span>How it works</span>
          <h2>From wish list to wheels up, the flow feels effortless.</h2>
        </div>
        <div className="steps">
          {itinerarySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title}>
                <div className="step-number">0{index + 1}</div>
                <Icon size={30} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="split-section" id="destinations">
        <div className="destination-panel">
          <span className="eyebrow dark">
            <Compass size={18} /> Destination engine
          </span>
          <h2>Promote local routes, seasonal escapes, and event-week packages.</h2>
          <p>
            Sell by occasion with suggested anchorages, swim stops, lunch reservations, and harbor
            cruise packages tailored for each market.
          </p>
          <div className="destination-tags">
            {destinations.map((destination) => (
              <span key={destination}>{destination}</span>
            ))}
          </div>
        </div>
        <div className="concierge-card">
          <LifeBuoy size={34} />
          <h3>Concierge upsells</h3>
          <p>
            Bundle catering, premium bar, water toys, transportation, and celebration planning into
            every inquiry.
          </p>
          <div className="mini-metric">
            <Clock3 size={20} />
            <span>Average response under 12 minutes</span>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="stars" aria-label="Five star rating">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} fill="currentColor" size={22} />
          ))}
        </div>
        <blockquote>
          “ZipYacht turned our charter catalog into a luxury buying experience. Guests understand the
          value faster, and our team gets better-qualified requests.”
        </blockquote>
        <p>Marina Torres, Charter Sales Director</p>
      </section>

      <section className="contact" id="contact">
        <div>
          <span>Ready to launch?</span>
          <h2>Start selling yacht charters with a destination-first storefront.</h2>
        </div>
        <form>
          <input aria-label="Email address" placeholder="captain@example.com" type="email" />
          <button type="submit">Get demo access</button>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
