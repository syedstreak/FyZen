import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const skills = [
    {
      title: "Discord Bot Development",
      description: "Custom Discord bots with advanced features, moderation tools, and interactive commands",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600",
      features: ["Custom Commands", "Moderation Systems", "Database Integration", "API Integrations"]
    },
    {
      title: "Minecraft Server Development",
      description: "High-performance Minecraft servers with custom plugins and unique gameplay mechanics",
      icon: "⛏️",
      gradient: "from-green-500 to-emerald-600",
      features: ["Custom Plugins", "Server Optimization", "Economy Systems", "PvP Mechanics"]
    },
    {
      title: "Backend Development",
      description: "Robust backend systems to power your Discord bots and Minecraft servers",
      icon: "⚙️",
      gradient: "from-orange-500 to-red-600",
      features: ["Database Design", "API Development", "Cloud Deployment", "Performance Optimization"]
    },
    {
      title: "Community Management",
      description: "Tools and systems to help manage and grow your Discord and Minecraft communities",
      icon: "👥",
      gradient: "from-pink-500 to-purple-600",
      features: ["Auto-Moderation", "Welcome Systems", "Role Management", "Analytics Dashboard"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized in creating powerful Discord bots and Minecraft servers that enhance community experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-lg">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {skill.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gray-700 px-3 py-2 rounded-lg text-sm text-center hover:bg-purple-600 transition-colors duration-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;