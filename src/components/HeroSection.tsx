import { MessageSquare, Globe, Zap } from "lucide-react";
import smsIllustration from "@/assets/sms-illustration.png";

export const HeroSection = () => {
  return (
    <div className="flex-1 flex flex-col justify-center space-y-8 px-8 lg:px-12">
      {/* Hero Content */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3 text-primary">
          <MessageSquare className="h-8 w-8" />
          <span className="text-lg font-semibold">2Text Platform</span>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            Connect the World
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              with One Message
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-lg">
            Fast. Reliable. Global SMS Platform
          </p>
        </div>
      </div>

      {/* Feature highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
        <div className="flex items-center space-x-3 text-muted-foreground">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <span className="font-medium">Instant delivery</span>
        </div>
        
        <div className="flex items-center space-x-3 text-muted-foreground">
          <div className="p-2 rounded-lg bg-primary/10">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <span className="font-medium">190+ countries</span>
        </div>
        
        <div className="flex items-center space-x-3 text-muted-foreground">
          <div className="p-2 rounded-lg bg-primary/10">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <span className="font-medium">99.9% uptime</span>
        </div>
      </div>

      {/* Illustration */}
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          <img 
            src={smsIllustration} 
            alt="SMS Communication Illustration" 
            className="w-80 lg:w-96 opacity-80 hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};