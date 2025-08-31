import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="w-full px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold text-foreground">
            Your App
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm">
              About
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Welcome to Your
              <span className="bg-gradient-primary bg-clip-text text-transparent block">
                Blank Canvas
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A beautifully designed foundation ready for your next great idea. 
              Start building something amazing with our clean, modern design system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="default" size="lg" className="shadow-medium">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Modern Design
              </h3>
              <p className="text-muted-foreground text-sm">
                Clean, contemporary design system with beautiful components and smooth animations.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Fully Responsive
              </h3>
              <p className="text-muted-foreground text-sm">
                Perfectly optimized for all devices, from mobile phones to desktop screens.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                Ready to Build
              </h3>
              <p className="text-muted-foreground text-sm">
                Start customizing immediately with our comprehensive component library.
              </p>
            </div>
          </div>
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