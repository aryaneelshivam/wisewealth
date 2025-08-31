import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import LightRays from "@/components/LightRays";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Floating Glass Navigation */}
      <nav className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-md md:max-w-lg">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg">
          <div className="flex items-center justify-between gap-4 md:gap-6">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Vector Logo */}
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                  <path d="M19 15L19.5 17L22 17.5L19.5 18L19 20L18.5 18L16 17.5L18.5 17L19 15Z"/>
                  <path d="M5 15L5.5 17L8 17.5L5.5 18L5 20L4.5 18L2 17.5L4.5 17L5 15Z"/>
                </svg>
              </div>
              <div className="text-base md:text-lg font-bold text-white">
                WiseWealth
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="flex gap-1 md:gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-xs md:text-sm px-2 md:px-3"
              >
                About
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-xs md:text-sm px-2 md:px-3"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with LightRays Background */}
      <main className="relative min-h-[600px] flex items-center justify-center">
        {/* Black Background Overlay */}
        <div className="absolute inset-0 bg-black z-0"></div>
        
        {/* LightRays Background */}
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Personal Finance
              <span className="text-emerald-400 block">
                Real results
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              A beautifully designed foundation ready for your next great idea. 
              Start building something amazing with our clean, modern design system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="default" size="lg" className="shadow-medium bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Scrolling Announcement Bar */}
      <div className="bg-black py-3 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <div className="flex items-center gap-4 text-white text-sm md:text-base font-medium">
            <span>🚀</span>
            <span>Join 10,000+ users building wealth with WiseWealth</span>
            <span>💎</span>
            <span>Smart investment strategies that work</span>
            <span>📈</span>
            <span>Average 15% annual returns</span>
            <span>🛡️</span>
            <span>Bank-level security for your investments</span>
            <span>🎯</span>
            <span>Personalized financial planning</span>
            <span>⚡</span>
            <span>Real-time portfolio tracking</span>
            <span>🌟</span>
            <span>Start your wealth journey today</span>
            <span>💰</span>
            <span>Join 10,000+ users building wealth with WiseWealth</span>
            <span>💎</span>
            <span>Smart investment strategies that work</span>
            <span>📈</span>
            <span>Average 15% annual returns</span>
            <span>🛡️</span>
            <span>Bank-level security for your investments</span>
            <span>🎯</span>
            <span>Personalized financial planning</span>
            <span>⚡</span>
            <span>Real-time portfolio tracking</span>
            <span>🌟</span>
            <span>Start your wealth journey today</span>
          </div>
        </div>
      </div>

      {/* Personalized Finance Assessment Form */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Your Personalized Finance Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Answer a few questions and we'll create custom courses and webinars tailored to your financial goals and experience level.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-8 md:p-10">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-6">Personal Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="profession" className="text-gray-300">Profession/Industry</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select your profession" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          <SelectItem value="tech">Technology/IT</SelectItem>
                          <SelectItem value="finance">Finance/Banking</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="entrepreneur">Entrepreneur/Business Owner</SelectItem>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="knowledge" className="text-gray-300">Current Financial Knowledge Level</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          <SelectItem value="beginner">Beginner (New to investing)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (Some experience)</SelectItem>
                          <SelectItem value="advanced">Advanced (Experienced investor)</SelectItem>
                          <SelectItem value="expert">Expert (Professional trader)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="income" className="text-gray-300">Annual Income Range</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select income range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                          <SelectItem value="200k-500k">$200,000 - $500,000</SelectItem>
                          <SelectItem value="over-500k">Over $500,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Financial Goals & Preferences */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-6">Financial Goals & Preferences</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="goal" className="text-gray-300">Primary Financial Goal</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select your main goal" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          <SelectItem value="retirement">Retirement Planning</SelectItem>
                          <SelectItem value="wealth-building">Wealth Building</SelectItem>
                          <SelectItem value="passive-income">Passive Income Generation</SelectItem>
                          <SelectItem value="debt-free">Become Debt Free</SelectItem>
                          <SelectItem value="emergency-fund">Build Emergency Fund</SelectItem>
                          <SelectItem value="tax-optimization">Tax Optimization</SelectItem>
                          <SelectItem value="estate-planning">Estate Planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="method" className="text-gray-300">Preferred Investment Method</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select your preference" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          <SelectItem value="investing">Long-term Investing</SelectItem>
                          <SelectItem value="trading">Active Trading</SelectItem>
                          <SelectItem value="both">Both Investing & Trading</SelectItem>
                          <SelectItem value="passive">Passive Index Funds</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-gray-300">Investment Timeline</Label>
                      <Select>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          <SelectItem value="short-term">Short-term (1-3 years)</SelectItem>
                          <SelectItem value="medium-term">Medium-term (3-10 years)</SelectItem>
                          <SelectItem value="long-term">Long-term (10+ years)</SelectItem>
                          <SelectItem value="retirement">Retirement (20+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Preferences */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Learning Preferences</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Preferred Learning Format</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="video-courses" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="video-courses" className="text-gray-300 text-sm font-normal">Video Courses</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="webinars" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="webinars" className="text-gray-300 text-sm font-normal">Live Webinars</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="workshops" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="workshops" className="text-gray-300 text-sm font-normal">Interactive Workshops</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="coaching" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="coaching" className="text-gray-300 text-sm font-normal">One-on-One Coaching</Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-300">Topics of Interest</Label>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="stock-analysis" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="stock-analysis" className="text-gray-300 text-sm font-normal">Stock Market Analysis</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="crypto-trading" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="crypto-trading" className="text-gray-300 text-sm font-normal">Cryptocurrency Trading</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="real-estate" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="real-estate" className="text-gray-300 text-sm font-normal">Real Estate Investment</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="tax-strategies" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="tax-strategies" className="text-gray-300 text-sm font-normal">Tax Strategies</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="portfolio-management" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="portfolio-management" className="text-gray-300 text-sm font-normal">Portfolio Management</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="risk-management" className="border-white/20 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" />
                          <Label htmlFor="risk-management" className="text-gray-300 text-sm font-normal">Risk Management</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your@email.com"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-emerald-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">Phone Number (Optional)</Label>
                      <Input 
                        id="phone"
                        type="tel" 
                        placeholder="+1 (555) 123-4567"
                        className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get My Personalized Plan
                  </Button>
                  <p className="text-sm text-gray-400 mt-4">
                    We'll create custom content based on your preferences and send it to your email within 24 hours.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Built with love using modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;