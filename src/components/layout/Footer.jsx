/* eslint-disable no-unused-vars */
import { GithubIcon, Globe, LinkedinIcon, TwitterIcon } from "lucide-react"
import { Link } from "react-router-dom";


const Footer = () => {
  const linkItems = [
    { url: 'https://github.com/4lecboy', Icon: GithubIcon },
    { url: 'https://linkedin.com/in/nrquiambao', Icon: LinkedinIcon },
    { url: 'https://x.com/NewelleDev', Icon: TwitterIcon },
    { url: 'https://newelle-dev.vercel.app', Icon: Globe },
  ];

  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8 relative z-10 glass">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <p>© 2025 DevFinder by</p> 
            <a href="https://newelle-dev.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-primary hover:text-primary/80 transition-colors">@NewelleDev</a>
          </div>
          <div className="flex items-center space-x-6 text-muted-foreground">
            {linkItems.map(({ url, Icon }) => (
              <a 
                key={url} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-all duration-300 hover:scale-125"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
