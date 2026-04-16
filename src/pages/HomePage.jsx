import { Link } from 'react-router-dom';
import { Github, Users, GitFork, Code2, SearchCode, ExternalLink, Star, Zap, Shield, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 space-y-24 md:space-y-32">
        {/* Hero Section */}
        <section className="relative text-center space-y-8 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider animate-slide-up">
            <Zap className="w-3 h-3 fill-current" />
            New: Enhanced Search Experience
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Find <span className="text-gradient">GitHub</span> Developers <br className="hidden sm:block" />
              With Precision.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Discover, explore, and connect with the world's most talented developers using our lightning-fast GitHub exploration engine.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/search">
              <Button 
                variant="vibrant"
                size="md"
                className="h-14 px-10 text-lg rounded-full shadow-lg"
                icon={<SearchCode className="w-6 h-6" />}
              >
                Start Searching
              </Button>
            </Link>
            <a href="#features" className="text-muted-foreground hover:text-foreground font-medium transition-colors p-4">
              Explore Features
            </a>
          </div>
        </section>

        {/* Live Preview "Mockup" Section */}
        <section className="relative max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="glass overflow-hidden rounded-2xl border border-border/50 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
            <div className="h-10 border-b border-border/50 bg-muted/40 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 flex justify-center ml-[-48px]">
                <div className="h-6 w-1/2 rounded-md bg-background/50 border border-border/40 flex items-center px-3 text-[10px] text-muted-foreground">
                  github.com/torvalds
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center bg-card/20 overflow-hidden">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-colors" />
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
                  <img 
                    src="https://avatars.githubusercontent.com/u/1024025?v=4" 
                    alt="Mock Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div className="space-y-1">
                  <h3 className="text-3xl md:text-4xl font-bold">Linus Torvalds</h3>
                  <p className="text-primary text-lg font-mono">@torvalds</p>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                  Born in Helsinki, Finland. Father of Linux and Git. Professional world-changer focused on open source efficiency.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Repos', count: '10', icon: Code2 },
                    { label: 'Followers', count: '180k', icon: Users },
                    { label: 'Stars', count: '2k', icon: Star }
                  ].map((stat, i) => (
                    <div key={i} className="glass-card rounded-xl p-3 flex flex-col items-center">
                      <stat.icon className="w-4 h-4 text-primary mb-1" />
                      <span className="text-xl font-bold">{stat.count}</span>
                      <span className="text-[10px] text-muted-foreground uppercase">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="hidden lg:block absolute -top-10 -right-10 w-32 h-32 glass rounded-2xl p-4 animate-float border-primary/20">
             <div className="flex flex-col gap-2 h-full justify-center items-center text-center">
                <Shield className="w-8 h-8 text-primary" />
                <p className="text-[10px] font-bold">Verified Data</p>
             </div>
          </div>
          <div className="hidden lg:block absolute -bottom-6 -left-12 w-48 h-18 glass rounded-2xl p-4 animate-float border-accent/20" style={{ animationDelay: '1.5s' }}>
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                   <Zap className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">Instant Sync</p>
                  <p className="text-[8px] text-muted-foreground">GitHub API v4</p>
                </div>
             </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="space-y-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to explore</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our tool streamlines the way you interact with the GitHub ecosystem, making profile discovery seamless and beautiful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Search',
                desc: 'Access millions of GitHub users instantly with our optimized query engine.',
                icon: Search,
                color: 'bg-blue-500/10 text-blue-500'
              },
              {
                title: 'Rich Insights',
                desc: 'Get deep dives into repositories, activity history, and language distributions.',
                icon: Code2,
                color: 'bg-indigo-500/10 text-indigo-500'
              },
              {
                title: 'Direct Links',
                desc: 'Navigate directly to followers, following, and repositories with a single tap.',
                icon: GitFork,
                color: 'bg-purple-500/10 text-purple-500'
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group relative p-8 glass-card rounded-2xl text-center space-y-4 hover:translate-y-[-8px] transition-all duration-300"
              >
                <div className={`mx-auto w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 space-y-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Seamless Workflow</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-[28%] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: '01', title: 'Search', desc: 'Type any GitHub username and press enter.', icon: SearchCode },
                { step: '02', title: 'Discover', desc: 'Analyze detailed profiles and repository stats.', icon: Code2 },
                { step: '03', title: 'Connect', desc: 'Jump to external links and social profiles.', icon: ExternalLink }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center relative border-primary/20 shadow-lg">
                      <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center ring-4 ring-background">
                        {item.step}
                      </span>
                      <item.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-[200px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="relative overflow-hidden glass rounded-3xl p-10 md:p-20 text-center border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />
            
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Ready to find your <br className="sm:hidden" /> next <span className="text-gradient">inspiration?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join thousands of users who explore GitHub profiles every day with DevFinder. 
                Fast, responsive, and completely free.
              </p>
              <div className="pt-4">
                <Link to="/search">
                  <Button 
                    variant="vibrant"
                    size="md"
                    className="h-16 px-12 text-xl rounded-full shadow-2xl"
                  >
                    Launch Explorer
                  </Button>
                </Link>
                <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-1">
                   <Shield className="w-3 h-3 text-primary" />
                   Powered by official GitHub API
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
