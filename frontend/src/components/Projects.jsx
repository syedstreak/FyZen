import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.dataset.project);
            setVisibleProjects(prev => [...prev, projectIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = document.querySelectorAll('[data-project]');
    projects.forEach(project => observer.observe(project));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "NexusBot - Advanced Moderation System",
      description: "Revolutionary Discord moderation bot with AI-powered chat monitoring, automated punishment systems, and detailed analytics dashboard. Features real-time threat detection and customizable moderation rules.",
      image: "https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUyNTA1OTI3fDA&ixlib=rb-4.1.0&q=85",
      tech: ["Discord.py", "SQLite", "AI Integration", "Webhooks", "Redis"],
      gradient: "from-blue-500 to-cyan-500",
      status: "Live",
      users: "50K+ servers",
      features: ["AI Chat Monitoring", "Auto-Punishments", "Custom Rules", "Analytics Dashboard"],
      metrics: { uptime: "99.9%", commands: "200+", languages: "12" }
    },
    {
      title: "CraftRealms - Survival Plus Server",
      description: "Enhanced Minecraft survival server with custom economy system, land claiming mechanics, and unique PvP elements. Features custom enchantments, quests, and player progression systems.",
      image: "https://images.unsplash.com/photo-1650800316192-0871097a1c1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtaW5lY3JhZnR8ZW58MHx8fHB1cnBsZXwxNzUyNTA1OTM1fDA&ixlib=rb-4.1.0&q=85",
      tech: ["Spigot", "Java", "MySQL", "Custom Plugins", "Redis"],
      gradient: "from-green-500 to-emerald-500",
      status: "Active",
      users: "2K+ players",
      features: ["Custom Economy", "Land Claims", "PvP System", "Quest System"],
      metrics: { tps: "20.0", plugins: "25+", worlds: "5" }
    },
    {
      title: "AdminPanel - Community Dashboard",
      description: "Comprehensive web-based dashboard for Discord server management with real-time statistics, member management, and automated reporting features. Built with modern React and Node.js.",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZ3xlbnwwfHx8cHVycGxlfDE3NTI1MDU5NDR8MA&ixlib=rb-4.1.0&q=85",
      tech: ["React", "Node.js", "Discord API", "MongoDB", "Socket.io"],
      gradient: "from-purple-500 to-pink-500",
      status: "Beta",
      users: "500+ admins",
      features: ["Real-time Stats", "Member Management", "Auto Reports", "Role Control"],
      metrics: { response: "50ms", features: "100+", security: "OAuth2" }
    },
    {
      title: "GameHub - Mini-Game Network",
      description: "Multi-game Minecraft server featuring custom mini-games, tournaments, and sophisticated ranking system with rewards. Includes parkour, PvP arenas, and creative building contests.",
      image: "https://images.unsplash.com/photo-1536786506364-50dc273a824f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZ3xlbnwwfHx8cHVycGxlfDE3NTI1MDU5NDR8MA&ixlib=rb-4.1.0&q=85",
      tech: ["Bukkit", "Redis", "Custom API", "Particle Effects", "WebSocket"],
      gradient: "from-orange-500 to-red-500",
      status: "Live",
      users: "3K+ players",
      features: ["Mini-Games", "Tournaments", "Ranking System", "Rewards"],
      metrics: { games: "15+", tournaments: "50+", prizes: "$5K+" }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase of my latest Discord bots and Minecraft servers that demonstrate technical expertise and creativity
          </p>
        </div>

        {/* Project navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full p-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeProject === index ? 'bg-purple-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              data-project={index}
              className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 group overflow-hidden relative ${
                visibleProjects.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Status badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-none`}>
                    {project.status}
                  </Badge>
                  <Badge variant="outline" className="border-white/50 text-white bg-black/30 backdrop-blur-sm">
                    {project.users}
                  </Badge>
                </div>

                {/* Animated metrics overlay */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-400 capitalize">{key}</div>
                        <div className="text-sm font-bold text-white">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <CardHeader className="relative z-10">
                <CardTitle className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {/* Features grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gray-700/50 px-2 py-1 rounded-md text-xs text-center hover:bg-purple-600/50 transition-all duration-200 transform hover:scale-105"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-700/50 text-gray-300 hover:bg-purple-600/50 transition-colors duration-200 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-2">
                  <Button 
                    className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white flex-1 rounded-full transform hover:scale-105 transition-all duration-200 relative overflow-hidden group`}
                  >
                    <span className="relative z-10">🚀 View Details</span>
                    <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-purple-500 rounded-full px-4 transform hover:scale-105 transition-all duration-200"
                  >
                    🎮 Demo
                  </Button>
                </div>

                {/* Progress indicator */}
                <div className="mt-4 bg-gray-700/50 rounded-full h-1 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${project.gradient} transition-all duration-1000 ease-out`}
                    style={{ width: visibleProjects.includes(index) ? '100%' : '0%' }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive timeline */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Development Timeline
          </h3>
          <div className="flex justify-center items-center space-x-4 overflow-x-auto">
            {["Planning", "Development", "Testing", "Launch", "Maintenance"].map((phase, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-gray-800 rounded-full p-3 border-2 border-purple-500/50 hover:border-purple-500 transition-all duration-300 transform hover:scale-110">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
                <div className="ml-2 text-sm text-gray-400">{phase}</div>
                {index < 4 && <div className="w-8 h-0.5 bg-purple-500/50 mx-2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;