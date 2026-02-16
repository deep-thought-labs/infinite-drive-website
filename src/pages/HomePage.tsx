import dontPanicImage from "../assets/dontpanic-space.jpg";

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="flex-1 px-4 md:px-8 py-12 max-w-7xl mx-auto w-full">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 
            className="font-mono" 
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
              letterSpacing: '0.1em', 
              color: '#e6edf3',
              lineHeight: '1.2'
            }}
          >
            INFINITE DRIVE
          </h1>
          <p 
            className="font-mono" 
            style={{ 
              fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
              opacity: 0.8, 
              letterSpacing: '0.05em',
              color: '#8b949e'
            }}
          >
            The Engine of Digital Freedom
          </p>
        </div>

        {/* Visual Element */}
        <div className="max-w-3xl mx-auto">
          <img 
            src={dontPanicImage}
            alt="Don't Panic - The Hitchhiker's Guide"
            className="w-full h-full object-cover rounded"
            style={{ maxHeight: '400px', opacity: 0.9 }}
          />
        </div>

        {/* Main Description */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.8' }}>
            A <strong>complete digital ecosystem</strong> — a new kind of internet built from the ground up.
          </p>
          
          <div className="p-8 rounded" style={{ 
            backgroundColor: '#1c2128', 
            border: '1px solid #444c56'
          }}>
            <blockquote className="italic mb-4" style={{ fontSize: '1rem', lineHeight: '1.8', opacity: 0.9 }}>
              "Space is big. Really big. You just won't believe how vastly, hugely, mind-bogglingly big it is."
            </blockquote>
            <p className="text-sm" style={{ color: '#8b949e' }}>
              — Douglas Adams
            </p>
          </div>

          <p style={{ fontSize: '1.1rem', opacity: 0.85, lineHeight: '1.8' }}>
            Infinite Drive is not just storage. It's a <strong>living infrastructure</strong> that powers a sovereign digital nation.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
              SECURE FOUNDATION
            </h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
              A blockchain that rewards builders and secures the network
            </p>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
              GLOBAL P2P NETWORK
            </h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
              BabelFish Network — millions of devices forming a planetary mesh
            </p>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
              SOVEREIGN SERVICES
            </h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
              DNS, hosting, email, storage — all decentralized and user-controlled
            </p>
          </div>

          <div className="p-6 rounded" style={{ backgroundColor: '#1c2128', border: '1px solid #30363d' }}>
            <h3 className="font-mono mb-3" style={{ color: '#6ba3db', letterSpacing: '0.05em' }}>
              YOUR UNIVERSE
            </h3>
            <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
              Build websites, metaverses, games — you own it all
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-6 mt-16">
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
            <strong>This is infrastructure for everyone.</strong>
          </p>
          <p style={{ fontSize: '1rem', opacity: 0.7 }}>
            From individuals to enterprises — democratizing tools once controlled by the kraken.
          </p>
          
          <div className="p-6 rounded mt-6" style={{ backgroundColor: '#161b22', border: '1px solid #30363d' }}>
            <p style={{ fontSize: '0.95rem', color: '#c9d1d9' }}>
              <strong style={{ color: '#6ba3db' }}>100% Open Source.</strong> Every protocol. Every service. Every line of code — <strong>built in the open, owned by humanity</strong>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => onNavigate('/project42')}
              className="px-8 py-3 rounded font-mono transition-all"
              style={{
                background: 'linear-gradient(135deg, #00d9ff 0%, #a855f7 100%)',
                color: '#0d1117',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 217, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 217, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Project 42 →
            </button>

            <button
              onClick={() => onNavigate('/services')}
              className="px-8 py-3 rounded font-mono transition-all"
              style={{
                backgroundColor: '#1c2128',
                color: '#6ba3db',
                border: '1px solid #6ba3db',
                cursor: 'pointer',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6ba3db';
                e.currentTarget.style.color = '#0d1117';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1c2128';
                e.currentTarget.style.color = '#6ba3db';
              }}
            >
              Explore the BabelFish Network
            </button>
            
            <button
              onClick={() => onNavigate('/blockchain')}
              className="px-8 py-3 rounded font-mono transition-all"
              style={{
                backgroundColor: '#1c2128',
                color: '#6ba3db',
                border: '1px solid #6ba3db',
                cursor: 'pointer',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6ba3db';
                e.currentTarget.style.color = '#0d1117';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1c2128';
                e.currentTarget.style.color = '#6ba3db';
              }}
            >
              Discover the Foundation
            </button>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #30363d', margin: '3rem 0' }} />

        {/* Join Community CTA */}
        <section className="mb-16">
          <div className="p-8 rounded text-center" style={{ backgroundColor: '#1c2128', border: '1px solid #6ba3db' }}>
            <h2 className="font-mono mb-4" style={{ fontSize: '1.5rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
              Join the Movement
            </h2>
            <p className="mb-6" style={{ fontSize: '1.1rem', color: '#c9d1d9', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              Follow our development, connect with builders, and be part of building a sovereign digital future.
            </p>
            <a
              href="https://t.me/+nt8ysid_-8VlMDVh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded font-mono transition-all"
              style={{
                backgroundColor: '#6ba3db',
                color: '#0d1117',
                textDecoration: 'none',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8dbde8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6ba3db';
              }}
            >
              Join Telegram Community →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}