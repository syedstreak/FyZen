import React, { useState, useEffect } from 'react';
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
    message: '',
    budget: '',
    timeline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [typingEffect, setTypingEffect] = useState('');

  useEffect(() => {
    const text = "Let's build something amazing together! 🚀";
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypingEffect(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    // Show success animation
    const successMessage = document.createElement('div');
    successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 z-50';
    successMessage.textContent = '✅ Message sent successfully!';
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
      successMessage.remove();
    }, 3000);
    
    setFormData({ name: '', email: '', project: '', message: '', budget: '', timeline: '' });
    setIsSubmitting(false);
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
      description: "Primary communication - Available 24/7",
      icon: "💬",
      gradient: "from-blue-500 to-purple-600",
      action: "Add Friend",
      status: "Online"
    },
    {
      platform: "Contact",
      username: "syed_streak",
      description: "Alternative contact - Quick response",
      icon: "📞",
      gradient: "from-green-500 to-blue-500",
      action: "Message",
      status: "Active"
    },
    {
      platform: "Email",
      username: "syed.dcbotdev@gmail.com",
      description: "Professional inquiries & contracts",
      icon: "✉️",
      gradient: "from-purple-500 to-pink-500",
      action: "Send Email",
      status: "Monitored"
    }
  ];

  const services = [
    { name: "Discord Bot Development", price: "$50-200", time: "1-2 weeks" },
    { name: "Minecraft Server Setup", price: "$100-500", time: "3-5 days" },
    { name: "Custom Plugin Development", price: "$75-300", time: "1-3 weeks" },
    { name: "Server Optimization", price: "$25-100", time: "1-3 days" },
    { name: "Community Management Tools", price: "$60-250", time: "1-2 weeks" },
    { name: "Database Integration", price: "$40-150", time: "2-5 days" },
    { name: "API Development", price: "$80-400", time: "1-4 weeks" },
    { name: "24/7 Support Package", price: "$30/month", time: "Ongoing" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            linear-gradient(45deg, transparent 40%, rgba(147, 51, 234, 0.1) 50%, transparent 60%)
          `
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            {typingEffect}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                📞 Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index} 
                    className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                            {contact.icon}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className={`font-bold text-lg bg-gradient-to-r ${contact.gradient} bg-clip-text text-transparent`}>
                                {contact.platform}
                              </h4>
                              <Badge className="bg-green-500 text-white text-xs animate-pulse">
                                {contact.status}
                              </Badge>
                            </div>
                            <p className="text-gray-300 font-mono text-sm">{contact.username}</p>
                            <p className="text-gray-500 text-sm">{contact.description}</p>
                          </div>
                        </div>
                        <Button 
                          className={`bg-gradient-to-r ${contact.gradient} hover:opacity-90 text-white rounded-full px-6 transform hover:scale-105 transition-all duration-200 relative overflow-hidden group`}
                        >
                          <span className="relative z-10">{contact.action}</span>
                          <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Services & Pricing */}
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  💰 Services & Pricing
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Transparent pricing for all development services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {services.map((service, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg hover:bg-purple-600/20 transition-colors duration-200">
                      <div>
                        <div className="font-semibold text-gray-300 text-sm">{service.name}</div>
                        <div className="text-xs text-gray-500">{service.time}</div>
                      </div>
                      <Badge variant="outline" className="border-purple-500 text-purple-400">
                        {service.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-purple-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                🚀 Start Your Project
              </CardTitle>
              <CardDescription className="text-gray-400">
                Tell me about your Discord bot or Minecraft server vision
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-300"
                      required
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -top-2 left-3 bg-purple-500 text-white text-xs px-2 py-1 rounded animate-pulse">
                        What should I call you?
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 transition-all duration-300"
                      required
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -top-2 left-3 bg-purple-500 text-white text-xs px-2 py-1 rounded animate-pulse">
                        For project updates
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="project"
                      placeholder="Project Type"
                      value={formData.project}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="budget"
                      placeholder="Budget Range"
                      value={formData.budget}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="timeline"
                    placeholder="Desired Timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>
                
                <div className="relative">
                  <Textarea
                    name="message"
                    placeholder="Describe your project vision, requirements, and any specific features you need..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
                    required
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                    {formData.message.length}/1000
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">🚀 Send Message</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Response time indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Usually responds within 2 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;