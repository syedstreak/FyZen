import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Advanced Moderation Bot",
      description: "Comprehensive Discord moderation bot with AI-powered chat monitoring, automated punishment systems, and detailed logging capabilities.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&h=300&fit=crop",
      tech: ["Discord.py", "SQLite", "AI Integration", "Webhooks"],
      gradient: "from-blue-500 to-cyan-500",
      status: "Live",
      users: "50K+ servers"
    },
    {
      title: "Survival Plus Server",
      description: "Enhanced Minecraft survival server with custom economy, land claiming, and unique PvP mechanics that create an immersive gameplay experience.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop",
      tech: ["Spigot", "Java", "MySQL", "Custom Plugins"],
      gradient: "from-green-500 to-emerald-500",
      status: "Active",
      users: "1K+ players"
    },
    {
      title: "Community Dashboard",
      description: "Web-based dashboard for Discord server management with real-time statistics, member management, and automated reporting features.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "Discord API", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
      status: "Beta",
      users: "500+ admins"
    },
    {
      title: "Mini-Game Hub",
      description: "Multi-game Minecraft server featuring custom mini-games, tournaments, and a sophisticated ranking system with rewards.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
      tech: ["Bukkit", "Redis", "Custom API", "Particle Effects"],
      gradient: "from-orange-500 to-red-500",
      status: "Live",
      users: "2K+ players"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcase of my latest Discord bots and Minecraft servers that demonstrate technical expertise and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="bg-green-500 text-white">{project.status}</Badge>
                  <Badge variant="outline" className="border-white text-white">{project.users}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-purple-600 transition-colors duration-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white flex-1 rounded-full transform hover:scale-105 transition-all duration-200`}
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 rounded-full px-6"
                  >
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;