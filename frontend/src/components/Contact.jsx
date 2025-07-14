import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', project: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      platform: "Discord",
      username: "syed.cpp",
      description: "Main communication platform",
      icon: "💬",
      gradient: "from-blue-500 to-purple-600",
      action: "Add Friend"
    },
    {
      platform: "Contact",
      username: "syed_streak",
      description: "Alternative contact method",
      icon: "📞",
      gradient: "from-green-500 to-blue-500",
      action: "Message"
    },
    {
      platform: "Email",
      username: "Available on request",
      description: "Professional inquiries",
      icon: "✉️",
      gradient: "from-purple-500 to-pink-500",
      action: "Request"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your Discord bot or Minecraft server vision to life? Let's discuss your project!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className={`font-bold text-lg bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`}>
                            {contact.platform}
                          </h4>
                          <p className="text-gray-300 font-mono text-sm">{contact.username}</p>
                          <p className="text-gray-500 text-sm">{contact.description}</p>
                        </div>
                      </div>
                      <Button 
                        className={`bg-gradient-to-r ${contact.gradient} hover:opacity-90 text-white rounded-full px-6 transform hover:scale-105 transition-all duration-200`}
                      >
                        {contact.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-cyan-400">Services Available</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Discord Bot Development",
                  "Minecraft Server Setup",
                  "Custom Plugin Development",
                  "Server Optimization",
                  "Community Management Tools",
                  "Database Integration",
                  "API Development",
                  "24/7 Support"
                ].map((service, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-gray-700 text-gray-300 hover:bg-purple-600 transition-colors duration-200">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Start Your Project
              </CardTitle>
              <CardDescription className="text-gray-400">
                Tell me about your Discord bot or Minecraft server idea
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="project"
                    placeholder="Project Type (Discord Bot / Minecraft Server / Both)"
                    value={formData.project}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Describe your project idea, requirements, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;