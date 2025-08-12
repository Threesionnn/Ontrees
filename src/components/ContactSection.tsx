import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Send,
  MapPin,
  Phone
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/sion-yehezkiel-712525238",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/Threesionnn",
      color: "hover:text-gray-600"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://www.instagram.com/threesionnn",
      color: "hover:text-pink-500"
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:sionyehezkiel16@gmail.com",
      color: "hover:text-accent"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mgvzlbne', { 
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: "", email: "", message: "" }); 
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setFormStatus('error');
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact-section" className="section-black py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-portfolio-white">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-gray-300">sionyehezkiel16@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="text-gray-300">+62 81317942131</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span className="text-gray-300">Cimahi, West Java</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-accent">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-full text-gray-300 transition-all duration-300 hover:bg-gray-700 ${link.color} hover:scale-110`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-accent mb-3">Current Availability</h4>
                <p className="text-gray-300 mb-4">
                  I'm currently accepting new projects and collaborations. 
                  Typical response time is within 24 hours.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Available for new projects</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700 animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-accent mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how we can work together..."
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-accent"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full button-gold text-lg py-3 transition-all duration-300 hover:shadow-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          © 2025 Sion Yehezkiel Nababan. All rights reserved. | Built with passion and precision.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;