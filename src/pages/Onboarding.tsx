import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      navigate('/platform');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Form */}
      <div className="w-1/2 flex flex-col p-12">
        <div className="flex items-center gap-2 mb-16">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <span className="font-bold text-xl text-gray-950">Amplify</span>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
          {step === 1 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-950 tracking-tight">Welcome to Amplify</h1>
              <p className="text-gray-500">Let's set up your Generative Engine Optimization workspace.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="Acme Corp" 
                    className="w-full h-11 px-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-950 tracking-tight">Company Size</h1>
              <p className="text-gray-500">Help us tailor your workspace to your team's needs.</p>
              
              <div className="grid grid-cols-2 gap-4">
                {['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'].map((size, i) => (
                  <button 
                    key={size}
                    className={`h-12 border rounded-lg font-medium transition-colors ${i === 2 ? 'bg-gray-950 text-white border-gray-950' : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'}`}
                  >
                    {size} employees
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-950 tracking-tight">Target Platforms</h1>
              <p className="text-gray-500">Select the AI engines you want to optimize for.</p>
              
              <div className="space-y-3">
                {['ChatGPT', 'Perplexity', 'Google AI Overviews', 'Yandex Alice', 'GigaChat'].map((platform, i) => (
                  <label key={platform} className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${i < 3 ? 'border-brand-600 bg-brand-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${i < 3 ? 'bg-brand-600 border-brand-600' : 'border-gray-300'}`}>
                        {i < 3 && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <span className="font-medium text-gray-950">{platform}</span>
                    </div>
                    {i >= 3 && <span className="px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 text-xs font-medium">CIS</span>}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-950 tracking-tight">Brand Topics</h1>
              <p className="text-gray-500">What topics should your brand be the answer for?</p>
              
              <div className="space-y-3">
                {['Generative Engine Optimization', 'AI Marketing Tools', 'B2B SaaS SEO', 'Brand Visibility AI'].map((topic, i) => (
                  <label key={topic} className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${i < 2 ? 'border-brand-600 bg-brand-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${i < 2 ? 'bg-brand-600 border-brand-600' : 'border-gray-300'}`}>
                      {i < 2 && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <span className="font-medium text-gray-950">{topic}</span>
                  </label>
                ))}
                <div className="p-4 border border-dashed border-gray-300 rounded-xl text-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                  + Add custom topic
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 space-y-6">
            <button 
              onClick={handleNext} 
              className="w-full bg-gray-950 text-white h-12 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {step === 4 ? 'Go to Workspace' : 'Continue'}
            </button>
            
            <div className="flex items-center justify-between">
              {step > 1 ? (
                <button onClick={handleBack} className="text-sm font-medium text-gray-500 hover:text-gray-950 transition-colors">
                  ← Back
                </button>
              ) : <div />}
              
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div 
                    key={s} 
                    className={`w-2 h-2 rounded-full transition-colors ${s === step ? 'bg-brand-600' : s < step ? 'bg-gray-950' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
              <div className="w-10" /> {/* Spacer for centering dots */}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Dotted Background & Testimonial */}
      <div 
        className="w-1/2 relative overflow-hidden flex items-center justify-center p-12"
        style={{
          backgroundColor: '#F9FAFB',
          backgroundImage: 'radial-gradient(#E5E7EB 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }}
      >
        <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-md relative z-10 border border-gray-100">
          <div className="text-brand-600 mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl text-gray-950 font-medium leading-relaxed mb-8">
            "Amplify gave us the control we needed over our brand narrative in AI search. We saw a 40% increase in positive brand mentions across ChatGPT and Perplexity within two months."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <div className="font-medium text-gray-950">Sarah Jenkins</div>
              <div className="text-sm text-gray-500">CMO at TechFlow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
