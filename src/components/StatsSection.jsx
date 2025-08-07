import React, { useEffect, useState } from 'react';
import { FaUsers, FaSeedling, FaTruck, FaAward } from 'react-icons/fa';
import './StatsSection.css';

function CountUp({ end, duration = 800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // approx 60fps
    let animationFrame;

    function update() {
      start += increment;
      if (start >= end) {
        setCount(end);
        cancelAnimationFrame(animationFrame);
      } else {
        setCount(Math.floor(start));
        animationFrame = requestAnimationFrame(update);
      }
    }

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>; // adds commas for thousands
}

const stats = [
  { icon: <FaUsers />, title: 10000, suffix: '+', subtitle: 'Happy Customers' },
  { icon: <FaSeedling />, title: 500, suffix: '+', subtitle: 'Hectares Cultivated' },
  { icon: <FaTruck />, title: 1200, suffix: '+', subtitle: 'Deliveries Monthly' },
  { icon: <FaAward />, title: 25, suffix: '+', subtitle: 'Agricultural Awards' },
];

export default function StatsSection() {
  return (
    <section className="stats-section py-5">
      <h2 className="section-title text-center text-success mb-5" style={{ fontSize: '1.8rem' }}>
        Our Achievements
      </h2>
      <div className="stats-wrapper">
        <div className="container">
          <div className="stats-row">
            {stats.map(({ icon, title, suffix, subtitle }, idx) => (
              <div key={idx} className="stat-col">
                <div className="stat-card text-center p-4 bg-white rounded shadow-sm h-100">
                  <div className="stat-icon mb-3">{icon}</div>
                  <h3 className="fw-bold text-success">
                    <CountUp end={title} />{suffix}
                  </h3>
                  <p className="text-muted mb-0">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
