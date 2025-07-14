import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      title: "Discord Bot Development",
      description: "Custom Discord bots with advanced features, moderation tools, and interactive commands",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1585384107568-5bc588c7eefd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUyNTA1OTI3fDA&ixlib=rb-4.1.0&q=85",
      features: ["Custom Commands", "Moderation Systems", "Database Integration", "API Integrations"],
      stats: { projects: 15, servers: "50K+", uptime: "99.9%" }
    },
    {
      title: "Minecraft Server Development",
      description: "High-performance Minecraft servers with custom plugins and unique gameplay mechanics",
      icon: "⛏️",
      gradient: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1650800316192-0871097a1c1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtaW5lY3JhZnR8ZW58MHx8fHB1cnBsZXwxNzUyNTA1OTM1fDA&ixlib=rb-4.1.0&q=85",
      features: ["Custom Plugins", "Server Optimization", "Economy Systems", "PvP Mechanics"],
      stats: { projects: 8, players: "5K+", performance: "TPS 20" }
    },
    {
      title: "Backend Development",
      description: "Robust backend systems to power your Discord bots and Minecraft servers",
      icon: "⚙️",
      gradient: "from-orange-500 to-red-600",
      image: "https://images.unsplash.com/photo-1545229920-f669c6872fa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjb2Rpbmd8ZW58MHx8fHB1cnBsZXwxNzUyNTA1OTI3fDA&ixlib=rb-4.1.0&q=85",
      features: ["Database Design", "API Development", "Cloud Deployment", "Performance Optimization"],
      stats: { apis: 25, databases: 12, cloud: "AWS" }
    },
    {
      title: "Community Management",
      description: "Tools and systems to help manage and grow your Discord and Minecraft communities",
      icon: "👥",
      gradient: "from-pink-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1536786506364-50dc273a824f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZ3xlbnwwfHx8cHVycGxlfDE3NTI1MDU5NDR8MA&ixlib=rb-4.1.0&q=85",
      features: ["Auto-Moderation", "Welcome Systems", "Role Management", "Analytics Dashboard"],
      stats: { communities: 30, members: "100K+", growth: "+25%" }
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 98px,
            rgba(147, 51, 234, 0.1) 100px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 98px,
            rgba(147, 51, 234, 0.1) 100px
          )`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Specialized in creating powerful Discord bots and Minecraft servers that enhance community experiences
          </p>
          
          {/* Animated underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              data-index={index}
              className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Background image with overlay */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={skill.image} 
                  alt={skill.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300 group-hover:scale-110"
                />
              </div>

              <CardHeader className="text-center relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                  {skill.icon}
                </div>
                <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                  {skill.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {/* Stats section */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(skill.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-2 bg-gray-700/50 rounded-lg">
                      <div className={`text-sm font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2">
                  {skill.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gray-700/50 px-3 py-2 rounded-lg text-sm text-center hover:bg-purple-600/50 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Progress bar animation */}
                <div className="mt-4 bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: hoveredCard === index ? '100%' : '0%',
                      transitionDelay: hoveredCard === index ? '0.2s' : '0s'
                    }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive code snippet */}
        <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
          <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            💻 Quick Code Example
          </h3>
          <pre className="text-green-400 text-sm bg-gray-900 p-4 rounded-lg overflow-x-auto">
            <code>
{`# Discord Bot Example
@bot.command(name='server')
async def server_info(ctx):
    embed = discord.Embed(
        title=f"📊 {ctx.guild.name} Server Info",
        color=discord.Color.purple()
    )
    embed.add_field(name="Members", value=ctx.guild.member_count)
    embed.add_field(name="Created", value=ctx.guild.created_at.strftime("%Y-%m-%d"))
    await ctx.send(embed=embed)`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Skills;