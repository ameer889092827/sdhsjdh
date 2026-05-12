import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { LayoutDashboard, LineChart, MessageSquare, Globe, FileText, Settings, Search, Download, Plus } from 'lucide-react';

export default function Platform() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('visibility');

  const navGroups = [
    {
      label: 'Analytics',
      items: [
        { name: 'Overview', icon: LayoutDashboard, path: '/platform' },
        { name: 'Visibility', icon: LineChart, path: '/platform/visibility' },
        { name: 'Prompts', icon: MessageSquare, path: '/platform/prompts' },
        { name: 'Citations', icon: Globe, path: '/platform/citations' },
      ]
    },
    {
      label: 'Action',
      items: [
        { name: 'Content', icon: FileText, path: '/platform/content' },
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <div className="w-[240px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        <div className="h-[60px] flex items-center px-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-600 rounded flex items-center justify-center text-white font-bold text-xs">A</div>
            <span className="font-bold text-gray-950">Amplify</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="text-xs uppercase font-semibold text-gray-400 mb-3 px-2 tracking-wider">
                {group.label}
              </div>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== '/platform' && location.pathname.startsWith(item.path));
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        isActive 
                          ? 'bg-gray-100 text-gray-950 font-medium' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                      {item.name === 'Prompts' && <span className="ml-auto px-1.5 py-0.5 rounded-full bg-brand-50 text-brand-600 text-[10px] font-medium leading-none">Beta</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200">
          <Link to="/platform/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </Link>
          <div className="mt-4 flex items-center gap-3 px-3">
            <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-950 truncate">John Doe</div>
              <div className="text-xs text-gray-500 truncate">Acme Corp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <div className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors">
              Acme Corp Workspace
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-shadow w-64"
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          <Routes>
            <Route path="/" element={<Navigate to="visibility" replace />} />
            <Route path="/visibility" element={<InsightsTab activeTab="visibility" />} />
            <Route path="/prompts" element={<InsightsTab activeTab="prompts" />} />
            <Route path="/citations" element={<InsightsTab activeTab="citations" />} />
            <Route path="/content" element={<ContentHome />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function InsightsTab({ activeTab }: { activeTab: string }) {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-950">Answer Engine Insights</h1>
          <p className="text-sm text-gray-500 mt-1">Track your brand's visibility across major AI platforms.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-600">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>This Quarter</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-600/90 transition-colors">
            <Plus className="w-4 h-4" />
            Add Topic
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
        {['Visibility', 'Prompts', 'Platforms', 'Citations'].map((tab) => (
          <button
            key={tab}
            onClick={() => navigate(`/platform/${tab.toLowerCase()}`)}
            className={`pb-3 text-sm font-medium transition-colors relative ${
              activeTab === tab.toLowerCase() 
                ? 'text-brand-600' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'visibility' && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            {/* Chart Section */}
            <div className="col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-950">Visibility Trend</h3>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                    Amplify
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    Competitors
                  </span>
                </div>
              </div>
              <div className="h-64 flex items-end gap-2">
                {/* Mock Chart */}
                {[40, 45, 42, 50, 55, 58, 65, 70, 68, 75, 80, 85].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full">
                    <div className="w-full bg-gray-200 rounded-t" style={{ height: `${val - 20}%` }}></div>
                    <div className="w-full bg-brand-600 rounded-t" style={{ height: `${val}%` }}></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ranking Table Section */}
            <div className="flex flex-col bg-gray-50/50">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-950">Top Competitors</h3>
              </div>
              <div className="flex-1 overflow-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200 sticky top-0">
                    <tr>
                      <th className="px-4 py-3 font-medium">Brand</th>
                      <th className="px-4 py-3 font-medium text-right">Share</th>
                      <th className="px-4 py-3 font-medium text-right">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors bg-brand-50/30">
                      <td className="px-4 py-3 font-medium text-gray-950 flex items-center gap-2">
                        <div className="w-5 h-5 bg-brand-600 rounded flex items-center justify-center text-[10px] text-white font-bold">A</div>
                        Amplify
                      </td>
                      <td className="px-4 py-3 text-right font-medium">34%</td>
                      <td className="px-4 py-3 text-right text-success font-medium">+4.2%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-700 flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">C</div>
                        CompetitorX
                      </td>
                      <td className="px-4 py-3 text-right">28%</td>
                      <td className="px-4 py-3 text-right text-danger font-medium">-1.5%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-700 flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">S</div>
                        SearchPro
                      </td>
                      <td className="px-4 py-3 text-right">15%</td>
                      <td className="px-4 py-3 text-right text-success font-medium">+0.8%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-700 flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-[10px] text-gray-500 font-bold">O</div>
                        OptiAI
                      </td>
                      <td className="px-4 py-3 text-right">12%</td>
                      <td className="px-4 py-3 text-right text-gray-500">0.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'prompts' && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <h3 className="font-semibold text-gray-950">Prompt Performance</h3>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Filter prompts..." className="px-3 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-brand-600" />
            </div>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-medium">Topic / Prompt</th>
                <th className="px-6 py-3 font-medium">Volume</th>
                <th className="px-6 py-3 font-medium">Visibility</th>
                <th className="px-6 py-3 font-medium">Sentiment</th>
                <th className="px-6 py-3 font-medium">Platforms</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-gray-50/50">
                <td colSpan={5} className="px-6 py-2 font-semibold text-gray-950 text-xs uppercase tracking-wider">Generative Engine Optimization</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-950">What is the best GEO tool for B2B?</td>
                <td className="px-6 py-4 text-gray-500">12.5k</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">85%</span>
                    <span className="text-success text-xs font-medium">+5%</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-success/10 text-success text-xs font-medium">Positive</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[10px] font-bold z-30">C</div>
                    <div className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[10px] font-bold z-20">P</div>
                    <div className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[10px] font-bold z-10">G</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'citations' && (
        <div className="bg-white border border-gray-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <h3 className="font-semibold text-gray-950">Citation Sources</h3>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">Export CSV</button>
            </div>
          </div>
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-medium cursor-pointer hover:text-gray-900">Domain ↑</th>
                <th className="px-6 py-3 font-medium cursor-pointer hover:text-gray-900">Authority</th>
                <th className="px-6 py-3 font-medium cursor-pointer hover:text-gray-900">Mentions</th>
                <th className="px-6 py-3 font-medium cursor-pointer hover:text-gray-900">Sentiment</th>
                <th className="px-6 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                <td className="px-6 py-4 font-medium text-brand-600 hover:underline">techcrunch.com</td>
                <td className="px-6 py-4">92</td>
                <td className="px-6 py-4 font-medium">14</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-success/10 text-success text-xs font-medium">Positive</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-brand-600 transition-colors">View Details</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                <td className="px-6 py-4 font-medium text-brand-600 hover:underline">g2.com</td>
                <td className="px-6 py-4">88</td>
                <td className="px-6 py-4 font-medium">45</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-success/10 text-success text-xs font-medium">Positive</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-brand-600 transition-colors">View Details</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
                <td className="px-6 py-4 font-medium text-brand-600 hover:underline">reddit.com/r/SaaS</td>
                <td className="px-6 py-4">91</td>
                <td className="px-6 py-4 font-medium">8</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full bg-amber/10 text-amber text-xs font-medium">Mixed</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-brand-600 transition-colors">View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function ContentHome() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-950">Content Optimization</h1>
          <p className="text-sm text-gray-500 mt-1">Create and optimize content to improve your AI visibility.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-1.5 bg-brand-600 text-white rounded-lg text-sm font-medium hover:bg-brand-600/90 transition-colors">
          <Plus className="w-4 h-4" />
          New Content
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:border-brand-600 transition-colors cursor-pointer group">
          <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-950 mb-2">Create New Content</h3>
          <p className="text-sm text-gray-500">Generate AI-optimized content briefs and drafts based on your target prompts.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:border-brand-600 transition-colors cursor-pointer group">
          <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-gray-950 mb-2">Optimize Existing</h3>
          <p className="text-sm text-gray-500">Audit and update your current pages to better answer AI engine queries.</p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
          <h3 className="font-semibold text-gray-950">Recent Content</h3>
          <input type="text" placeholder="Search content..." className="px-3 py-1.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-brand-600" />
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-500 bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 font-medium">Title</th>
              <th className="px-6 py-3 font-medium">Target Topic</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
              <td className="px-6 py-4 font-medium text-gray-950">Complete Guide to GEO in 2026</td>
              <td className="px-6 py-4 text-gray-500">Generative Engine Optimization</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 rounded-full bg-amber/10 text-amber text-xs font-medium">Draft</span>
              </td>
              <td className="px-6 py-4 text-gray-500">2 hours ago</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors cursor-pointer">
              <td className="px-6 py-4 font-medium text-gray-950">Amplify vs CompetitorX Comparison</td>
              <td className="px-6 py-4 text-gray-500">B2B SaaS SEO</td>
              <td className="px-6 py-4">
                <span className="px-2.5 py-1 rounded-full bg-success/10 text-success text-xs font-medium">Published</span>
              </td>
              <td className="px-6 py-4 text-gray-500">3 days ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
