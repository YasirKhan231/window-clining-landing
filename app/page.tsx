"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  Star,
  Building,
  Home,
  Sparkles,
  ArrowRight,
  Menu,
  X,
  Quote,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedCounter } from "@/components/animated-counter";

// Add this component before the main PremiumWindowCleaning component
function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white">
      <button
        className="w-full px-6 py-5 text-left hover:bg-gradient-to-r hover:from-blue-50 hover:to-slate-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-800 pr-4 group-hover:text-blue-700 transition-colors duration-300">
            {question}
          </h3>
          <div
            className={`transform transition-all duration-500 ease-in-out ${
              isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
            } group-hover:text-blue-600`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="pt-2 border-t border-slate-200">
            <p className="text-slate-700 leading-relaxed animate-fade-in">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PremiumWindowCleaning() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceTypeChange = (value: string) => {
    setFormData({
      ...formData,
      serviceType: value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold font-playfair">
                <span className="text-slate-800">Shine</span>
                <span className="text-blue-600">Pro</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="#gallery"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link
                href="#about"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#reviews"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Reviews
              </Link>
              <Link
                href="#areas"
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                Areas
              </Link>
            </div>

            {/* Phone & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white custom-button">
                <Phone className="h-4 w-4 mr-2" />
                (416) 555-0123
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <Link
                  href="#services"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#gallery"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="#about"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#reviews"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Reviews
                </Link>
                <Link
                  href="#areas"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Areas
                </Link>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full custom-button">
                  <Phone className="h-4 w-4 mr-2" />
                  (416) 555-0123
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Enhanced Background */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 lg:py-20 overflow-hidden">
        {/* Enhanced Background Design */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/window-cleaning-hero.png"
            alt="Professional window cleaning"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>

          {/* Geometric Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-200/25 rounded-full blur-lg"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-slate-300"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Content - Takes 3 columns, positioned more to the right */}
            <div className="lg:col-span-3 lg:col-start-1 space-y-8 lg:pl-8">
              {/* Badge */}
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-0 px-4 py-2 text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                Ontario's Premier Window Cleaning Service
              </Badge>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-slate-800 font-playfair">
                    Crystal Clear
                  </span>
                  <br />
                  <span className="text-blue-600 font-playfair">Windows</span>
                  <br />
                  <span className="text-slate-600 text-3xl lg:text-5xl font-playfair">
                    Every Time
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Professional residential and high-rise window cleaning across
                Ontario. 25+ years of experience, 100% safety record, and
                thousands of satisfied customers.
              </p>

              {/* Trust Indicators with Animated Counters */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">
                      <AnimatedCounter end={100} suffix="%" /> Safety Record
                    </div>
                    <div className="text-slate-600 text-sm">
                      Zero workplace incidents
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">
                      Fully Insured
                    </div>
                    <div className="text-slate-600 text-sm">
                      $<AnimatedCounter end={5} />
                      M+ Coverage
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">
                      <AnimatedCounter end={500} suffix="+" /> Businesses
                    </div>
                    <div className="text-slate-600 text-sm">
                      Served across Ontario
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">
                      <AnimatedCounter end={25} suffix="+" /> Years Experience
                    </div>
                    <div className="text-slate-600 text-sm">
                      IRATA & SPRAT certified
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Quote Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-1 font-playfair">
                      Get Your Free Quote
                    </h3>
                    <p className="text-sm text-slate-600">
                      Professional service, guaranteed results
                    </p>
                  </div>

                  <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <Label
                        htmlFor="fullName"
                        className="text-xs font-medium text-slate-700"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="mt-1 h-9 text-sm border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label
                        htmlFor="phone"
                        className="text-xs font-medium text-slate-700"
                      >
                        Mobile Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(416) 555-0123"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 h-9 text-sm border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-xs font-medium text-slate-700"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 h-9 text-sm border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    {/* Service Type Dropdown */}
                    <div>
                      <Label className="text-xs font-medium text-slate-700 mb-2 block">
                        Service Type *
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={handleServiceTypeChange}
                      >
                        <SelectTrigger className="h-9 text-sm border-slate-200">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">
                            <div className="flex items-center space-x-2">
                              <Home className="h-4 w-4 text-blue-600" />
                              <span>Residential Service</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="commercial">
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4 text-blue-600" />
                              <span>Commercial/High-Rise</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="both">
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                <Home className="h-3 w-3 text-blue-600" />
                                <Building className="h-3 w-3 text-blue-600" />
                              </div>
                              <span>Both Services</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="post-construction">
                            <div className="flex items-center space-x-2">
                              <Sparkles className="h-4 w-4 text-blue-600" />
                              <span>Post-Construction Cleanup</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="pressure-washing">
                            <div className="flex items-center space-x-2">
                              <Zap className="h-4 w-4 text-blue-600" />
                              <span>Pressure Washing</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="gutter-cleaning">
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="h-4 w-4 text-blue-600" />
                              <span>Gutter Cleaning</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label
                        htmlFor="message"
                        className="text-xs font-medium text-slate-700"
                      >
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your needs..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1 text-sm border-slate-200 focus:border-blue-500 focus:ring-blue-500 min-h-[60px]"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 custom-button">
                      Request Free Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting, you agree to receive communications from
                      ShinePro.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-2 font-playfair">
              Certified & Trusted Professionals
            </h2>
            <p className="text-slate-300">
              Industry-leading certifications and safety standards
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { icon: Shield, text: "IRATA Certified", desc: "Rope Access" },
              {
                icon: Award,
                text: "SPRAT Certified",
                desc: "Safety Standards",
              },
              {
                icon: CheckCircle,
                text: "WAH Certified",
                desc: "Work at Height",
              },
              { icon: Shield, text: "WSIB Coverage", desc: "Full Protection" },
              {
                icon: Award,
                text: "$5M+ Liability",
                desc: "Insurance Coverage",
              },
              { icon: Users, text: "WHMIS Certified", desc: "All Employees" },
            ].map((cert, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">
                    {cert.text}
                  </div>
                  <div className="text-slate-400 text-xs">{cert.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From residential homes to commercial high-rises, we provide
              comprehensive window cleaning solutions
            </p>
          </div>

          <Tabs defaultValue="residential" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate-100 max-w-md mx-auto">
              <TabsTrigger
                value="residential"
                className="text-sm sm:text-base py-3 px-4 data-[state=active]:bg-blue-600 data-[state=active]:text-white custom-button"
              >
                <Home className="mr-1 sm:mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Residential</span>
                <span className="sm:hidden">Home</span>
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                className="text-sm sm:text-base py-3 px-4 data-[state=active]:bg-blue-600 data-[state=active]:text-white custom-button"
              >
                <Building className="mr-1 sm:mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Commercial</span>
                <span className="sm:hidden">Business</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="residential" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Single Family Homes",
                    description:
                      "Professional window cleaning for single and multi-story residential homes with interior and exterior service.",
                    image: "/residential-1.png",
                    features: [
                      "Interior & Exterior",
                      "Screen Cleaning",
                      "Sill Wiping",
                      "Eco-Friendly Solutions",
                    ],
                  },
                  {
                    title: "Condominiums",
                    description:
                      "Specialized condo window cleaning services with building management coordination and flexible scheduling.",
                    image: "/residential-2.png",
                    features: [
                      "Building Coordination",
                      "Flexible Scheduling",
                      "Balcony Access",
                      "Safety Protocols",
                    ],
                  },
                  {
                    title: "Townhouses",
                    description:
                      "Complete townhouse window cleaning including hard-to-reach areas and detailed finishing work.",
                    image: "/residential-3.png",
                    features: [
                      "Multi-Level Access",
                      "Detail Finishing",
                      "Gutter Cleaning",
                      "Pressure Washing",
                    ],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 font-playfair">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "High-Rise Buildings",
                    description:
                      "Professional high-rise window cleaning with certified rope access technicians and advanced safety equipment.",
                    image: "/commercial-1.png",
                    features: [
                      "Rope Access Certified",
                      "Advanced Safety",
                      "Weather Monitoring",
                      "Emergency Protocols",
                    ],
                  },
                  {
                    title: "Office Buildings",
                    description:
                      "Corporate office window cleaning with minimal disruption to business operations and flexible scheduling.",
                    image: "/commercial-2.png",
                    features: [
                      "Minimal Disruption",
                      "Flexible Hours",
                      "Corporate Contracts",
                      "Quality Assurance",
                    ],
                  },
                  {
                    title: "Retail & Malls",
                    description:
                      "Retail window cleaning services that enhance storefront appeal and maintain professional appearance.",
                    image: "/commercial-3.png",
                    features: [
                      "Storefront Enhancement",
                      "Regular Maintenance",
                      "Brand Image",
                      "Customer Appeal",
                    ],
                  },
                ].map((service, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 font-playfair">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trusted By Section with Real Company Logos */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12 font-playfair">
            Trusted by Top Organizations in Canada
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              {
                name: "Royal Bank of Canada",
                logo: "data:image/png;base64,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",
              },
              {
                name: "Shoppers Drug Mart",
                logo: "data:image/png;base64,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",
              },
              {
                name: "Canadian Tire",
                logo: "data:image/png;base64,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",
              },
              {
                name: "Tim Hortons",
                logo: "data:image/png;base64,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",
              },
              {
                name: "Loblaws",
                logo: "data:image/png;base64,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",
              },
            ].map((company, i) => (
              <div
                key={i}
                className="flex justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="w-32 h-16 relative">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Redesigned with Smaller Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">
              Why Choose ShinePro?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another cleaning service. We're your trusted
              partners in maintaining pristine windows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {[
              {
                icon: Clock,
                title: "Years Experience",
                number: 25,
                suffix: "+",
                desc: "Decades of expertise in window cleaning",
                color: "bg-blue-500",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
              },
              {
                icon: Shield,
                title: "Safety Record",
                number: 100,
                suffix: "%",
                desc: "Zero workplace incidents with certified technicians",
                color: "bg-green-500",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
              },
              {
                icon: Users,
                title: "Businesses Served",
                number: 500,
                suffix: "+",
                desc: "Trusted by satisfied commercial clients",
                color: "bg-purple-500",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
              },
              {
                icon: Award,
                title: "Insurance Coverage",
                number: 5,
                suffix: "M+",
                prefix: "$",
                desc: "Comprehensive liability coverage",
                color: "bg-orange-500",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200",
              },
              {
                icon: CheckCircle,
                title: "Certified Technicians",
                number: 100,
                suffix: "%",
                desc: "Background-checked cleaning specialists",
                color: "bg-teal-500",
                bgColor: "bg-teal-50",
                borderColor: "border-teal-200",
              },
              {
                icon: Sparkles,
                title: "Customer Satisfaction",
                number: 99,
                suffix: "%",
                desc: "Eco-friendly solutions with guaranteed results",
                color: "bg-pink-500",
                bgColor: "bg-pink-50",
                borderColor: "border-pink-200",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} p-6 rounded-xl border-2 ${item.borderColor} hover:shadow-lg hover:scale-105 transition-all duration-300 group text-center`}
              >
                <div
                  className={`${item.color} p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">
                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                    prefix={item.prefix || ""}
                  />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Circular Images */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Property Manager, Downtown Toronto",
                image: "/client1.jpg",
                quote:
                  "ShinePro has been cleaning our 40-story office building for 3 years. Their safety standards and attention to detail are unmatched. Highly recommended!",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Homeowner, Mississauga",
                image: "/client2.jpg",
                quote:
                  "Amazing service! They cleaned all 32 windows of our home perfectly. Professional, punctual, and reasonably priced. Will definitely use them again.",
                rating: 5,
              },
              {
                name: "Lisa Rodriguez",
                role: "Retail Manager, Yorkdale Mall",
                image: "/client3.jpg",
                quote:
                  "Our storefront windows have never looked better. The team is reliable and always delivers exceptional results. Great customer service too!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="h-8 w-8 text-blue-200 absolute top-4 right-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center border-t pt-6">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover border-4 border-blue-100"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-32 right-16 w-56 h-56 bg-purple-300/15 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 left-1/3 w-32 h-32 bg-teal-300/25 rounded-full blur-xl animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-orange-300/20 rounded-full blur-lg animate-ping"
            style={{ animationDuration: "3s" }}
          ></div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="grid grid-cols-8 gap-8 h-full animate-pulse"
              style={{ animationDuration: "6s" }}
            >
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-slate-400 animate-shimmer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-800 font-playfair">
                Who We Are
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                ShinePro has been Ontario's trusted window cleaning partner for
                over 25 years. Founded on principles of safety, reliability, and
                exceptional service, we've grown from a small local business to
                the province's premier window cleaning company.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our mission is simple: to provide crystal-clear windows while
                maintaining the highest safety standards in the industry. Every
                member of our team is fully certified, insured, and committed to
                delivering results that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white custom-button">
                  Learn More About Us
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent custom-button"
                >
                  View Our Certifications
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/team-photo.jpg"
                alt="Our professional team"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our window cleaning services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Large Image */}
            <div className="relative">
              <Image
                src="/window-cleaning-hero.png"
                alt="Professional window cleaning FAQ"
                width={600}
                height={700}
                className="rounded-2xl shadow-xl object-cover w-full h-[700px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2 font-playfair">
                  Professional Window Cleaning
                </h3>
                <p className="text-lg opacity-90">
                  25+ Years of Excellence in Ontario
                </p>
              </div>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="space-y-4">
              {[
                {
                  question: "How often should I have my windows cleaned?",
                  answer:
                    "For residential properties, we recommend cleaning every 3-6 months. Commercial buildings typically need monthly or bi-monthly service depending on location and environmental factors. High-traffic areas may require more frequent cleaning.",
                },
                {
                  question: "Do you clean windows in winter?",
                  answer:
                    "Yes, we provide year-round window cleaning services. We use specialized equipment and techniques for winter cleaning, including heated water systems and weather-appropriate safety measures. However, extreme weather conditions may require rescheduling for safety.",
                },
                {
                  question: "Are you insured and certified?",
                  answer:
                    "Absolutely! We carry $5M+ liability insurance and our technicians are IRATA and SPRAT certified for rope access work. We're also WSIB covered and WHMIS certified. All certifications are current and available for review.",
                },
                {
                  question: "What's included in your window cleaning service?",
                  answer:
                    "Our comprehensive service includes exterior and interior window cleaning, screen cleaning, sill wiping, and frame cleaning. We use eco-friendly solutions and professional-grade equipment. Post-construction cleanup and pressure washing are also available.",
                },
                {
                  question: "How do you ensure safety for high-rise buildings?",
                  answer:
                    "Safety is our top priority. We use certified rope access techniques, conduct thorough risk assessments, monitor weather conditions, and follow strict safety protocols. Our team has a 100% safety record over 25+ years.",
                },
                {
                  question: "Do you provide free estimates?",
                  answer:
                    "Yes, we offer free, no-obligation estimates for all services. Our team will assess your property and provide a detailed quote including timeline, pricing, and service details. Contact us to schedule your free consultation.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept cash, check, credit cards (Visa, MasterCard, American Express), and e-transfer. For commercial clients, we offer flexible payment terms and can set up recurring billing for regular service contracts.",
                },
              ].map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Quote Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-slate-600">
              Ready to experience crystal clear windows? Contact us now!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Quote Form */}
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 font-playfair">
                    Request Your Free Quote
                  </h3>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24
                    hours
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="contactName"
                        className="text-sm font-medium text-slate-700"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        placeholder="Enter your full name"
                        className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="contactPhone"
                        className="text-sm font-medium text-slate-700"
                      >
                        Phone Number *
                      </Label>
                      <Input
                        id="contactPhone"
                        name="contactPhone"
                        type="tel"
                        placeholder="(416) 555-0123"
                        className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="contactEmail"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="contactEmail"
                      name="contactEmail"
                      type="email"
                      placeholder="your@email.com"
                      className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-slate-700 mb-2 block">
                      Service Type *
                    </Label>
                    <Select>
                      <SelectTrigger className="border-slate-200">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">
                          <div className="flex items-center space-x-2">
                            <Home className="h-4 w-4 text-blue-600" />
                            <span>Residential Service</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="commercial">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-blue-600" />
                            <span>Commercial/High-Rise</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="both">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <Home className="h-3 w-3 text-blue-600" />
                              <Building className="h-3 w-3 text-blue-600" />
                            </div>
                            <span>Both Services</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="contactMessage"
                      className="text-sm font-medium text-slate-700"
                    >
                      Project Details
                    </Label>
                    <Textarea
                      id="contactMessage"
                      name="contactMessage"
                      placeholder="Tell us about your window cleaning needs, number of windows, building height, etc."
                      className="mt-1 border-slate-200 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 custom-button">
                    Get My Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    We respect your privacy. Your information will never be
                    shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Right Side - Map and Location */}
            <div className="space-y-6">
              {/* Location Info */}
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2 font-playfair">
                        Our Location
                      </h3>
                      <p className="text-slate-600 mb-4">
                        604 Mt. Pleasant Road #34012
                        <br />
                        Toronto, ON
                      </p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-blue-600" />
                          <span>(416) 555-0123</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <span>info@shinepro.ca</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-blue-600" />
                          <span>Mon-Fri: 7AM-6PM, Sat: 8AM-4PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-lg border-0 bg-white overflow-hidden">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.1234567890123!2d-79.3831843!3d43.6896123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c6b1234567%3A0x1234567890abcdef!2s604%20Mt%20Pleasant%20Rd%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-slate-800">
                      ShinePro Window Cleaning
                    </p>
                    <p className="text-xs text-slate-600">
                      604 Mt. Pleasant Road #34012
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/window-cleaning-hero.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-0 px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Get Started Today
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-white font-playfair leading-tight">
                Ready for Crystal Clear Windows?
              </h2>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Join hundreds of satisfied customers who trust ShinePro for their
              window cleaning needs. Get your free estimate today and experience
              the difference professional service makes.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-blue-200 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-blue-200 text-sm">Safety Record</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg font-semibold custom-button"
                >
                  Request Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent font-semibold custom-button"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (416) 555-0123
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold font-playfair">
                  ShinePro
                </span>
              </div>
              <p className="text-slate-400">
                Ontario's premier window cleaning service with 25+ years of
                experience and a 100% safety record.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Residential Cleaning</li>
                <li>Commercial Cleaning</li>
                <li>High-Rise Cleaning</li>
                <li>Post-Construction</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>About Us</li>
                <li>Certifications</li>
                <li>Safety Standards</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(416) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@shinepro.ca</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Toronto, Ontario</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} ShinePro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
