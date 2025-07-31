"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedCounter } from "@/components/animated-counter"

// Add this component before the main PremiumWindowCleaning component
function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: { question: string; answer: string; defaultOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

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
            className={`transform transition-all duration-500 ease-in-out ${isOpen ? "rotate-180 text-blue-600" : "text-slate-400"} group-hover:text-blue-600`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 pb-5 bg-gradient-to-r from-slate-50 to-blue-50">
          <div className="pt-2 border-t border-slate-200">
            <p className="text-slate-700 leading-relaxed animate-fade-in">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PremiumWindowCleaning() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleServiceTypeChange = (value: string) => {
    setFormData({
      ...formData,
      serviceType: value,
    })
  }

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
              <Link href="#services" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="#gallery" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Gallery
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#reviews" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Reviews
              </Link>
              <Link href="#areas" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Areas
              </Link>
            </div>

            {/* Phone & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white custom-button">
                <Phone className="h-4 w-4 mr-2" />
                (416) 555-0123
              </Button>
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
                <Link href="#gallery" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Gallery
                </Link>
                <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="#reviews" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Reviews
                </Link>
                <Link href="#areas" className="text-slate-600 hover:text-blue-600 transition-colors">
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
            src="/window-cleaning-hero.jpg"
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
                  <span className="text-slate-800 font-playfair">Crystal Clear</span>
                  <br />
                  <span className="text-blue-600 font-playfair">Windows</span>
                  <br />
                  <span className="text-slate-600 text-3xl lg:text-5xl font-playfair">Every Time</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Professional residential and high-rise window cleaning across Ontario. 25+ years of experience, 100%
                safety record, and thousands of satisfied customers.
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
                    <div className="text-slate-600 text-sm">Zero workplace incidents</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">Fully Insured</div>
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
                    <div className="text-slate-600 text-sm">Served across Ontario</div>
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
                    <div className="text-slate-600 text-sm">IRATA & SPRAT certified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Quote Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800 mb-1 font-playfair">Get Your Free Quote</h3>
                    <p className="text-sm text-slate-600">Professional service, guaranteed results</p>
                  </div>

                  <form className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName" className="text-xs font-medium text-slate-700">
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
                      <Label htmlFor="phone" className="text-xs font-medium text-slate-700">
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
                      <Label htmlFor="email" className="text-xs font-medium text-slate-700">
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
                      <Label className="text-xs font-medium text-slate-700 mb-2 block">Service Type *</Label>
                      <Select value={formData.serviceType} onValueChange={handleServiceTypeChange}>
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
                      <Label htmlFor="message" className="text-xs font-medium text-slate-700">
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
                      By submitting, you agree to receive communications from ShinePro.
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
            <h2 className="text-2xl font-bold text-white mb-2 font-playfair">Certified & Trusted Professionals</h2>
            <p className="text-slate-300">Industry-leading certifications and safety standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[
              { icon: Shield, text: "IRATA Certified", desc: "Rope Access" },
              { icon: Award, text: "SPRAT Certified", desc: "Safety Standards" },
              { icon: CheckCircle, text: "WAH Certified", desc: "Work at Height" },
              { icon: Shield, text: "WSIB Coverage", desc: "Full Protection" },
              { icon: Award, text: "$5M+ Liability", desc: "Insurance Coverage" },
              { icon: Users, text: "WHMIS Certified", desc: "All Employees" },
            ].map((cert, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="bg-blue-600 p-4 rounded-full w-fit mx-auto">
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{cert.text}</div>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From residential homes to commercial high-rises, we provide comprehensive window cleaning solutions
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
                    image: "/residential-1.jpg",
                    features: ["Interior & Exterior", "Screen Cleaning", "Sill Wiping", "Eco-Friendly Solutions"],
                  },
                  {
                    title: "Condominiums",
                    description:
                      "Specialized condo window cleaning services with building management coordination and flexible scheduling.",
                    image: "/residential-2.jpg",
                    features: ["Building Coordination", "Flexible Scheduling", "Balcony Access", "Safety Protocols"],
                  },
                  {
                    title: "Townhouses",
                    description:
                      "Complete townhouse window cleaning including hard-to-reach areas and detailed finishing work.",
                    image: "/residential-3.jpg",
                    features: ["Multi-Level Access", "Detail Finishing", "Gutter Cleaning", "Pressure Washing"],
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
                      <h3 className="text-xl font-bold text-slate-800 mb-3 font-playfair">{service.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
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
                    image: "/commercial-1.jpg",
                    features: ["Rope Access Certified", "Advanced Safety", "Weather Monitoring", "Emergency Protocols"],
                  },
                  {
                    title: "Office Buildings",
                    description:
                      "Corporate office window cleaning with minimal disruption to business operations and flexible scheduling.",
                    image: "/commercial-2.jpg",
                    features: ["Minimal Disruption", "Flexible Hours", "Corporate Contracts", "Quality Assurance"],
                  },
                  {
                    title: "Retail & Malls",
                    description:
                      "Retail window cleaning services that enhance storefront appeal and maintain professional appearance.",
                    image: "/commercial-3.jpg",
                    features: ["Storefront Enhancement", "Regular Maintenance", "Brand Image", "Customer Appeal"],
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
                      <h3 className="text-xl font-bold text-slate-800 mb-3 font-playfair">{service.title}</h3>
                      <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
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
              { name: "Royal Bank of Canada", logo: "https://logos-world.net/wp-content/uploads/2020/12/RBC-Logo.png" },
              {
                name: "Shoppers Drug Mart",
                logo: "https://logos-world.net/wp-content/uploads/2021/03/Shoppers-Drug-Mart-Logo.png",
              },
              {
                name: "Canadian Tire",
                logo: "https://logos-world.net/wp-content/uploads/2020/12/Canadian-Tire-Logo.png",
              },
              { name: "Tim Hortons", logo: "https://logos-world.net/wp-content/uploads/2020/12/Tim-Hortons-Logo.png" },
              { name: "Loblaws", logo: "https://logos-world.net/wp-content/uploads/2021/03/Loblaws-Logo.png" },
            ].map((company, i) => (
              <div key={i} className="flex justify-center opacity-60 hover:opacity-100 transition-opacity">
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">Why Choose ShinePro?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're not just another cleaning service. We're your trusted partners in maintaining pristine windows.
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
                  <AnimatedCounter end={item.number} suffix={item.suffix} prefix={item.prefix || ""} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Circular Images */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">What Our Clients Say</h2>
            <p className="text-xl text-slate-600">Don't just take our word for it</p>
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
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed text-lg">"{testimonial.quote}"</p>
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
                    <p className="font-bold text-slate-800 text-lg">{testimonial.name}</p>
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
            <div className="grid grid-cols-8 gap-8 h-full animate-pulse" style={{ animationDuration: "6s" }}>
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
              <h2 className="text-4xl font-bold text-slate-800 font-playfair">Who We Are</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                ShinePro has been Ontario's trusted window cleaning partner for over 25 years. Founded on principles of
                safety, reliability, and exceptional service, we've grown from a small local business to the province's
                premier window cleaning company.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our mission is simple: to provide crystal-clear windows while maintaining the highest safety standards
                in the industry. Every member of our team is fully certified, insured, and committed to delivering
                results that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white custom-button">Learn More About Us</Button>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our window cleaning services</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Large Image */}
            <div className="relative">
              <Image
                src="/window-cleaning-hero.jpg"
                alt="Professional window cleaning FAQ"
                width={600}
                height={700}
                className="rounded-2xl shadow-xl object-cover w-full h-[700px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2 font-playfair">Professional Window Cleaning</h3>
                <p className="text-lg opacity-90">25+ Years of Excellence in Ontario</p>
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
                <FAQItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Quote Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 font-playfair">Get Your Free Quote Today</h2>
            <p className="text-xl text-slate-600">Ready to experience crystal clear windows? Contact us now!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Quote Form */}
            <Card className="shadow-xl border-0 bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 font-playfair">Request Your Free Quote</h3>
                  <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName" className="text-sm font-medium text-slate-700">
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
                      <Label htmlFor="contactPhone" className="text-sm font-medium text-slate-700">
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
                    <Label htmlFor="contactEmail" className="text-sm font-medium text-slate-700">
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
                    <Label className="text-sm font-medium text-slate-700 mb-2 block">Service Type *</Label>
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
                    <Label htmlFor="contactMessage" className="text-sm font-medium text-slate-700">
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
                    We respect your privacy. Your information will never be shared with third parties.
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
                      <h3 className="text-xl font-bold text-slate-800 mb-2 font-playfair">Our Location</h3>
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
                    <p className="text-sm font-semibold text-slate-800">ShinePro Window Cleaning</p>
                    <p className="text-xs text-slate-600">604 Mt. Pleasant Road #34012</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/window-cleaning-hero.jpg')] bg-cover bg-center opacity-10"></div>
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
              Join hundreds of satisfied customers who trust ShinePro for their window cleaning needs. Get your free
              estimate today and experience the difference professional service makes.
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
                <span className="text-xl font-bold font-playfair">ShinePro</span>
              </div>
              <p className="text-slate-400">
                Ontario's premier window cleaning service with 25+ years of experience and a 100% safety record.
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
            <p>&copy; {new Date().getFullYear()} ShinePro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
