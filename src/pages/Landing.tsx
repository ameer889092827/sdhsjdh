import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <span className="font-bold text-xl text-gray-950">Amplify</span>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-brand-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-brand-600 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-brand-600 transition-colors">Customers</a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/platform" className="text-sm font-medium text-gray-700 hover:text-brand-600 transition-colors">Log in</Link>
          <Link to="/onboarding" className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-600/90 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          Introducing Amplify 2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-950 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          Be the Answer.<br />Not Just a Result.
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          The first Generative Engine Optimization platform built for B2B SaaS. 
          Control how AI platforms like ChatGPT, Perplexity, and Yandex Alice perceive your brand.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/onboarding" className="bg-brand-600 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-brand-600/90 transition-colors">
            Start Free Trial
          </Link>
          <button className="bg-white text-gray-700 px-8 py-3 rounded-lg text-base font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            Book Demo
          </button>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Trusted by innovative teams worldwide
        </p>
        <div className="flex justify-center items-center gap-12 opacity-50 grayscale">
          <div className="font-bold text-xl">Acme Corp</div>
          <div className="font-bold text-xl">Globex</div>
          <div className="font-bold text-xl">Soylent</div>
          <div className="font-bold text-xl">Initech</div>
          <div className="font-bold text-xl">Umbrella</div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 divide-x divide-gray-200">
          <div className="text-center px-4">
            <div className="text-4xl font-bold text-gray-950 mb-2">40%</div>
            <div className="text-sm text-gray-500">Increase in AI visibility</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl font-bold text-gray-950 mb-2">10x</div>
            <div className="text-sm text-gray-500">Faster content optimization</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl font-bold text-gray-950 mb-2">15+</div>
            <div className="text-sm text-gray-500">AI engines tracked</div>
          </div>
          <div className="text-center px-4">
            <div className="text-4xl font-bold text-gray-950 mb-2">24/7</div>
            <div className="text-sm text-gray-500">Continuous monitoring</div>
          </div>
        </div>
      </section>

      {/* Features (Alternating) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 space-y-32">
          {/* Feature 1 */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-950 mb-4">Track your brand across all AI platforms</h2>
              <p className="text-lg text-gray-500 mb-6">
                Monitor how ChatGPT, Perplexity, Google AI Overviews, and CIS platforms like Yandex Alice and GigaChat perceive your brand.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Real-time visibility tracking
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Competitor benchmarking
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Sentiment analysis
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              {/* Mock UI */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="font-medium text-gray-950">Visibility Score</div>
                  <div className="text-success font-medium">+12.4%</div>
                </div>
                <div className="h-48 bg-gray-50 rounded-lg border border-gray-100 flex items-end p-4 gap-2">
                  <div className="w-1/6 bg-brand-600/20 rounded-t h-1/3"></div>
                  <div className="w-1/6 bg-brand-600/40 rounded-t h-1/2"></div>
                  <div className="w-1/6 bg-brand-600/60 rounded-t h-2/3"></div>
                  <div className="w-1/6 bg-brand-600/80 rounded-t h-3/4"></div>
                  <div className="w-1/6 bg-brand-600 rounded-t h-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid grid-cols-2 gap-16 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 order-2 md:order-1">
              {/* Mock UI */}
              <div className="space-y-4">
                <div className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                  <div className="text-sm font-medium text-gray-950 mb-2">Optimize Content</div>
                  <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                </div>
                <div className="p-4 border border-gray-100 rounded-lg bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    <span className="text-sm font-medium text-gray-950">Citations Added</span>
                  </div>
                  <div className="text-xs text-gray-500">Your brand is now referenced in 3 new sources.</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-950 mb-4">Optimize content for AI engines</h2>
              <p className="text-lg text-gray-500 mb-6">
                Get actionable recommendations to improve your brand's presence in AI-generated answers.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Citation building strategies
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Content gap analysis
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Automated workflows
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-950 mb-6">"Amplify completely changed how we approach SEO. It's not about links anymore, it's about answers."</h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="text-left">
                <div className="font-medium text-gray-950">Sarah Jenkins</div>
                <div className="text-sm text-gray-500">CMO at TechFlow</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
              <p className="text-gray-700 mb-6">"We saw a 40% increase in brand mentions across ChatGPT and Perplexity within two months of using Amplify."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium text-gray-950 text-sm">David Chen</div>
                  <div className="text-xs text-gray-500">VP Marketing, ScaleUp</div>
                </div>
              </div>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
              <p className="text-gray-700 mb-6">"The insights into CIS platforms like Yandex Alice are invaluable for our regional strategy. Nobody else offers this."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium text-gray-950 text-sm">Elena Volkova</div>
                  <div className="text-xs text-gray-500">Growth Lead, RegionTech</div>
                </div>
              </div>
            </div>
            <div className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
              <p className="text-gray-700 mb-6">"Finally, a tool that makes Generative Engine Optimization measurable and actionable. A must-have for B2B."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-medium text-gray-950 text-sm">Marcus Johnson</div>
                  <div className="text-xs text-gray-500">SEO Director, Enterprise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA (Dark) */}
      <section className="py-24 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to control your AI narrative?</h2>
          <p className="text-xl text-gray-400 mb-10">Join hundreds of B2B companies optimizing for the next generation of search.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/onboarding" className="bg-brand-600 text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-brand-600/90 transition-colors">
              Start Free Trial
            </Link>
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg text-base font-medium border border-gray-700 hover:bg-gray-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-5 gap-8 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                <span className="font-bold text-xl text-gray-950">Amplify</span>
              </div>
              <p className="text-sm text-gray-500 max-w-xs">
                Be the Answer. Not Just a Result. The leading Generative Engine Optimization platform for B2B SaaS.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-950 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-600">Features</a></li>
                <li><a href="#" className="hover:text-brand-600">Pricing</a></li>
                <li><a href="#" className="hover:text-brand-600">Integrations</a></li>
                <li><a href="#" className="hover:text-brand-600">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-950 mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-600">Blog</a></li>
                <li><a href="#" className="hover:text-brand-600">Documentation</a></li>
                <li><a href="#" className="hover:text-brand-600">GEO Guide</a></li>
                <li><a href="#" className="hover:text-brand-600">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-950 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-brand-600">About Us</a></li>
                <li><a href="#" className="hover:text-brand-600">Careers</a></li>
                <li><a href="#" className="hover:text-brand-600">Contact</a></li>
                <li><a href="#" className="hover:text-brand-600">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              © 2026 Amplify. All rights reserved. Headquartered in Almaty, Kazakhstan.
            </div>
            <div className="flex items-center gap-4">
              <select className="text-sm text-gray-500 bg-transparent border-none focus:ring-0 cursor-pointer">
                <option>English</option>
                <option>Русский</option>
                <option>Қазақша</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
