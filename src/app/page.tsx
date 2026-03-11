"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroCentered from "@/components/sections/hero/HeroCentered";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureBorderGlow from "@/components/sections/feature/featureBorderGlow/FeatureBorderGlow";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import PricingCardEight from "@/components/sections/pricing/PricingCardEight";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { BarChart3, Database, Zap, CheckCircle2, Users, Clock, MessageSquare, User, Package, TrendingUp, AlertCircle, FileText, Award, Layers, ShoppingCart, DollarSign, Shield, Globe, Cpu, GitBranch, Sparkles, Star, Mail, Crown } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Seagull"
          navItems={[
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Pricing", id: "pricing" }
          ]}
          button={{ text: "Request Demo", href: "contact" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Enterprise Software Solutions Built for Scale"
          description="Comprehensive suite of business management applications designed to streamline operations, from ERP and project management to payroll and inventory. Trusted by manufacturing companies and enterprises worldwide."
          background={{ variant: "radial-gradient" }}
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoFU0LcLIpXNS2UhCAOojEZxoW/professional-headshot-of-a-manufacturing-1773251120502-5d34ab3e.png", alt: "Manufacturing executive" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoFU0LcLIpXNS2UhCAOojEZxoW/professional-headshot-of-an-it-director--1773251120329-9d7f8dc1.png", alt: "IT director" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoFU0LcLIpXNS2UhCAOojEZxoW/professional-headshot-of-an-operations-m-1773251119946-e27332de.png", alt: "Operations manager" }
          ]}
          avatarText="Trusted by 500+ enterprises"
          buttons={[
            { text: "Explore Products", href: "#products" },
            { text: "Request Demo", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          ariaLabel="Hero section"
        />
      </div>

      <div id="products" data-section="products">
        <FeatureBento
          title="Complete Software Suite"
          description="Seven powerful modules integrated into one seamless ecosystem, plus Enefinder for global product discovery."
          tag="Products"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          features={[
            {
              title: "Seagull Enterprise",              description: "Full-featured ERP system for comprehensive business resource planning and management",              bentoComponent: "icon-info-cards",              items: [
                { icon: BarChart3, label: "Reporting", value: "Real-time" },
                { icon: Database, label: "Integration", value: "Complete" },
                { icon: Zap, label: "Performance", value: "Optimized" }
              ]
            },
            {
              title: "Task Management",              description: "Advanced project monitoring and management with real-time tracking and collaboration tools",              bentoComponent: "3d-task-list",              items: [
                { icon: CheckCircle2, label: "Track Progress", time: "Real-time" },
                { icon: Users, label: "Collaborate", time: "Instant" },
                { icon: Clock, label: "Monitor Time", time: "Accurate" }
              ]
            },
            {
              title: "Seagull Service",              description: "Complaint and service tracking system ensuring customer satisfaction and issue resolution",              bentoComponent: "chat",              aiIcon: MessageSquare,
              userIcon: User,
              exchanges: [
                { userMessage: "How do I track my service request?", aiResponse: "Monitor your tickets in the Service Dashboard with real-time status updates and priority levels" },
                { userMessage: "Can I assign technicians?", aiResponse: "Yes, use automated or manual assignment with skill-based routing for optimal resolution" }
              ],
              placeholder: "Ask about service tracking"
            },
            {
              title: "Seagull Sales & Reporting",              description: "Comprehensive sales tracking and business intelligence reporting for data-driven decisions",              bentoComponent: "animated-bar-chart"
            },
            {
              title: "Seagull Inventory",              description: "Real-time inventory management with automated tracking and optimization capabilities",              bentoComponent: "icon-info-cards",              items: [
                { icon: Package, label: "Stock Levels", value: "Live" },
                { icon: TrendingUp, label: "Forecasting", value: "Predictive" },
                { icon: AlertCircle, label: "Alerts", value: "Instant" }
              ]
            },
            {
              title: "Seagull Payroll & HR",              description: "Integrated payroll processing and human resource management for complete employee administration",              bentoComponent: "3d-stack-cards",              items: [
                { icon: Users, title: "Payroll", subtitle: "Processing", detail: "Automated salary calculations and compliance" },
                { icon: FileText, title: "Benefits", subtitle: "Management", detail: "Complete employee benefit administration" },
                { icon: Award, title: "Performance", subtitle: "Tracking", detail: "Comprehensive performance review system" }
              ]
            },
            {
              title: "Seagull BillMaster",              description: "ERP solution specifically designed for small businesses with affordable, scalable features",              bentoComponent: "orbiting-icons",              centerIcon: Layers,
              items: [
                { icon: ShoppingCart, ring: 1, duration: 15 },
                { icon: FileText, ring: 2, duration: 12 },
                { icon: DollarSign, ring: 2, duration: 18 },
                { icon: BarChart3, ring: 3, duration: 20 }
              ]
            },
            {
              title: "Enefinder",              description: "Global platform connecting manufacturers with industrial electrical, electronics, and automation products",              bentoComponent: "map"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBorderGlow
          title="Why Choose Our Software Suite"
          description="Designed for modern enterprises with the flexibility, power, and reliability you need to scale"
          tag="Key Benefits"
          tagIcon={Star}
          tagAnimation="slide-up"
          features={[
            { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and compliance with international data protection standards" },
            { icon: Zap, title: "Lightning Fast", description: "Optimized performance with sub-second response times for critical operations" },
            { icon: Users, title: "Seamless Collaboration", description: "Built-in tools for team communication and cross-functional workflows" },
            { icon: Globe, title: "Global Reach", description: "Multi-language, multi-currency support for worldwide operations" },
            { icon: Cpu, title: "AI-Powered Insights", description: "Advanced analytics and machine learning for predictive business intelligence" },
            { icon: GitBranch, title: "Full Integration", description: "Seamless connection between all modules and third-party systems" }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="The Seagull suite transformed how we manage our operations. From project tracking to payroll, everything is now integrated and automated. We've seen a 40% improvement in operational efficiency and significantly reduced manual errors."
          rating={5}
          author="Sarah Chen, Manufacturing Director"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoFU0LcLIpXNS2UhCAOojEZxoW/professional-headshot-of-a-manufacturing-1773251120502-5d34ab3e.png", alt: "Sarah Chen" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoFU0LcLIpXNS2UhCAOojEZxoW/professional-headshot-of-an-it-director--1773251120329-9d7f8dc1.png", alt: "Customer 2" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoFU0LcLIpXNS2UhCAOojEZxoW/professional-headshot-of-an-operations-m-1773251119946-e27332de.png", alt: "Customer 3" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoFU0LcLIpXNS2UhCAOojEZxoW/professional-headshot-of-an-hr-director--1773251119744-7cafc884.png", alt: "Customer 4" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardEight
          title="Flexible Pricing Plans"
          description="Choose the perfect combination of modules for your business needs. All plans include 24/7 support and continuous updates."
          tag="Pricing"
          tagIcon={DollarSign}
          tagAnimation="slide-up"
          plans={[
            {
              id: "starter",              badge: "For Small Teams",              badgeIcon: Sparkles,
              price: "Custom",              subtitle: "BillMaster + Inventory + Sales",              buttons: [{ text: "Request Quote", href: "#contact" }],
              features: [
                "Up to 10 users",                "Inventory management",                "Sales reporting",                "Email support",                "Monthly backups",                "Basic reporting"
              ]
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Star,
              price: "Custom",              subtitle: "Full Suite for Growing Enterprises",              buttons: [
                { text: "Start Free Trial", href: "#contact" },
                { text: "Request Demo", href: "#contact" }
              ],
              features: [
                "Unlimited users",                "All Seagull modules",                "Enterprise dashboard",                "Priority 24/7 support",                "Real-time analytics",                "Custom integrations",                "Advanced automation",                "Dedicated account manager"
              ]
            },
            {
              id: "enterprise",              badge: "For Large Organizations",              badgeIcon: Crown,
              price: "Custom",              subtitle: "Complete Suite + Enefinder Platform",              buttons: [{ text: "Contact Sales", href: "#contact" }],
              features: [
                "Everything in Professional",                "Enefinder platform access",                "Custom development",                "On-premise deployment option",                "SLA guarantee",                "White-label options",                "Multi-organization management",                "Advanced security compliance"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Ready to Transform Your Business?"
          description="Request a personalized demo or get in touch with our team. We'll show you how the Seagull suite can revolutionize your operations."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your business email"
          buttonText="Request Demo"
          termsText="We respect your privacy. We'll reach out to schedule your personalized demo within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Products",              items: [
                { label: "Seagull Enterprise", href: "#products" },
                { label: "Seagull Projects", href: "#products" },
                { label: "Seagull Service", href: "#products" },
                { label: "Seagull Sales", href: "#products" },
                { label: "Enefinder", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "https://example.com/about" },
                { label: "Contact", href: "#contact" },
                { label: "Blog", href: "https://example.com/blog" },
                { label: "Careers", href: "https://example.com/careers" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Security", href: "https://example.com/security" },
                { label: "Compliance", href: "https://example.com/compliance" }
              ]
            }
          ]}
          copyrightText="© 2025 Seagull Software. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
