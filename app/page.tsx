"use client";

import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  Menu,
  MonitorSmartphone,
  Package,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Atom, Triangle, Wind, Leaf, Coffee, Container, Mail, Phone } from "lucide-react";

const technologies = [
  { name: "React", icon: Atom, color: "#61DAFB", bg: "#E0F7FF" },
  { name: "Next.js", icon: Triangle, color: "#000000", bg: "#F1F1F1" },
  { name: "Tailwind CSS", icon: Wind, color: "#38BDF8", bg: "#E0F5FF" },
  { name: "Spring Boot", icon: Leaf, color: "#6DB33F", bg: "#EAF7E4" },
  { name: "Java", icon: Coffee, color: "#EA2D2E", bg: "#FDEAEA" },
  { name: "MySQL", icon: Database, color: "#00758F", bg: "#E3F3F6" },
  { name: "Docker", icon: Container, color: "#2496ED", bg: "#E5F3FD" },
];

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Powerful software solutions designed specifically around your business requirements.",
  },
  {
    icon: ShoppingCart,
    title: "POS & Inventory Systems",
    description:
      "Manage sales, products, inventory, customers and business operations from one platform.",
  },
  {
    icon: BriefcaseBusiness,
    title: "ERP Solutions",
    description:
      "Streamline complex business processes with customized ERP and management systems.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Fast, modern and scalable web applications built with modern technologies.",
  },
  {
    icon: MonitorSmartphone,
    title: "Business Automation",
    description:
      "Reduce manual work and improve productivity through intelligent digital automation.",
  },
  {
    icon: Workflow,
    title: "System Integration",
    description:
      "Connect APIs, payment gateways and existing systems into one seamless workflow.",
  },
];

const products = [
  {
    title: "Billing Craft",
    category: "Business Management Software",
    description:
      "A complete solution for managing products, sales, stock, customers, suppliers and business reports.",
    features: [
      "Sales & Inventory",
      "Customer Management",
      "Cash Book",
      "Profit Reports",
    ],
    icon: LayoutDashboard,
  },
  {
    title: "Bake Boss",
    category: "Bakery Management System",
    description:
      "A specialized business management platform designed for bakery and food production businesses.",
    features: [
      "Production Management",
      "Raw Materials",
      "Stock Management",
      "Outlet Distribution",
    ],
    icon: Package,
  },
  {
    title: "Custom ERP",
    category: "Enterprise Solution",
    description:
      "A fully customized ERP solution built around your organization's unique workflow.",
    features: [
      "Custom Modules",
      "Multi-user System",
      "Business Reports",
      "Scalable Architecture",
    ],
    icon: Boxes,
  },
];

const features = [
  {
    icon: Zap,
    title: "Modern Technology",
    description:
      "Built using modern technologies such as React, Next.js, Spring Boot and MySQL.",
  },
  {
    icon: Sparkles,
    title: "Custom Built",
    description:
      "Software designed around your actual business requirements instead of forcing generic workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "We focus on secure architecture, reliable systems and maintainable code.",
  },
  {
    icon: BarChart3,
    title: "Business Focused",
    description:
      "We build technology that helps businesses improve operations and make better decisions.",
  },
  {
    icon: Users,
    title: "Multi-user Systems",
    description:
      "Role-based access and multi-user functionality for growing organizations.",
  },
  {
    icon: Database,
    title: "Scalable Solutions",
    description:
      "Your software can evolve and grow as your business requirements expand.",
  },
];

const faqs = [
  {
    question: "What type of software does Iyad Soft develop?",
    answer:
      "Iyad Soft develops custom business software, POS systems, ERP solutions, inventory management systems and modern web applications.",
  },
  {
    question: "Can you create software specifically for my business?",
    answer:
      "Yes. Custom software development is one of our core services. We analyze your business workflow and build software based on your requirements.",
  },
  {
    question: "Do you provide support after software delivery?",
    answer:
      "Yes. Software can require maintenance, improvements and new features as your business grows.",
  },
  {
    question: "Can my existing software be upgraded?",
    answer:
      "Yes. Depending on the existing technology and architecture, we can help improve, modernize or extend your current software.",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* ================= TOP CONTACT BAR ================= */}

      <header className="w-full">

        <div className="bg-slate-950 text-white">
          <div className="container mx-auto flex min-h-10 items-center justify-between px-5">

            {/* Contact Information */}
            <div className="flex items-center gap-5 text-xs sm:text-sm">

              <a
                href="tel:+8801676182277"
                className="flex items-center gap-2 transition hover:text-cyan-400"
              >
                <Phone size={14} />
                <span>01676-182277</span>
              </a>

              <a
                href="mailto:info.iyadsoft@gmail.com"
                className="hidden items-center gap-2 transition hover:text-cyan-400 sm:flex"
              >
                <Mail size={14} />
                <span>info.iyadsoft@gmail.com</span>
              </a>

            </div>

            {/* Right Side */}
            <div className="hidden items-center gap-4 text-xs sm:flex">

              <span className="text-slate-400">
                Software Solutions for Modern Businesses
              </span>

              <a
                href="#contact"
                className="font-medium text-cyan-400 transition hover:text-cyan-300"
              >
                Get in Touch →
              </a>

            </div>

          </div>
        </div>

      </header>


      {/* =====================================================
                      STICKY NAVBAR
     ===================================================== */}

      <nav className="sticky top-0 z-[100] w-full border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">

        <div className="container mx-auto flex h-20 items-center justify-between px-5">

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/img/iyadsoft_logo.png"
              alt="Iyad Soft"
              width={150}
              height={60}
              priority
              className="h-auto w-[150px]"
            />
          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="hidden items-center gap-7 lg:flex">

            <a
              href="#home"
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              Services
            </a>

            <a
              href="#products"
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              Products
            </a>

            <a
              href="#portfolio"
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              Portfolio
            </a>

            <a
              href="#about"
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              Contact
            </a>

          </div>


          {/* ================= DESKTOP CTA ================= */}

          <div className="hidden lg:block">

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get a Quote
              <span>→</span>
            </a>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}

        {mobileMenuOpen && (

          <div className="border-t border-slate-200 bg-white px-5 py-6 shadow-lg lg:hidden">

            <div className="flex flex-col gap-2">

              {[
                "Home",
                "Services",
                "Products",
                "Portfolio",
                "About",
                "Contact",
              ].map((item) => (

                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                >
                  {item}
                </a>

              ))}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-5 py-3 text-center font-semibold text-white shadow-lg"
              >
                Get a Quote
              </a>

            </div>

          </div>

        )}

      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />
        </div>

        <div className="container relative mx-auto px-5 py-20 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <Sparkles size={16} />
                Smart Software Solutions for Modern Businesses
              </div>

              <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                We Make Your Idea{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Visible
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Iyad Soft builds powerful custom software, POS systems, ERP
                solutions and modern web applications that help businesses work
                smarter and grow faster.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1"
                >
                  Explore Solutions
                  <ArrowRight
                    size={19}
                    className="transition group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Start Your Project
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-7 text-sm text-slate-300">
                <div>
                  <strong className="block text-2xl text-white">7+</strong>
                  Years of Coding Experience
                </div>

                <div className="h-12 w-px bg-white/20" />

                <div>
                  <strong className="block text-2xl text-white">Custom</strong>
                  Business Solutions
                </div>

                <div className="h-12 w-px bg-white/20" />

                <div>
                  <strong className="block text-2xl text-white">Modern</strong>
                  Technology Stack
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-950">
                <Image
                  src="/img/banner.jpg"
                  alt="Iyad Soft - Software Solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}


      <section className="border-b bg-slate-50 py-10">
        <div className="container mx-auto px-5">
          <p className="mb-7 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Built With Modern Technology
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
            {technologies.map(({ name, icon: Icon, color, bg }) => (
              <div
                key={name}
                className="group flex items-center gap-3 rounded-xl border bg-white px-6 py-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110"
                  style={{ backgroundColor: bg }}
                >
                  <Icon className="h-5 w-5" style={{ color }} strokeWidth={2.2} />
                </div>
                <span className="font-semibold text-slate-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="py-24">
        <div className="container mx-auto px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 font-semibold text-cyan-600">OUR SOLUTIONS</p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Technology That Works For Your Business
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From custom software to complete business management systems, we
              create digital solutions that simplify operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-cyan-50 p-4 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600"
                  >
                    Learn More <ArrowRight size={17} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section id="products" className="bg-slate-950 py-24 text-white">
        <div className="container mx-auto px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 font-semibold text-cyan-400">
              FEATURED PRODUCTS
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Software Built For Real Businesses
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Powerful solutions designed to help businesses manage operations,
              reduce manual work and make better decisions.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:border-cyan-400/50 hover:bg-white/10"
                >
                  <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700">
                    <Icon size={30} />
                  </div>

                  <p className="text-sm font-semibold text-cyan-400">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">{product.title}</h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    {product.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-cyan-400"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400"
                  >
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section id="about" className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-cyan-600">WHY IYAD SOFT</p>

              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                We Don&apos;t Just Build Software. We Build Business Solutions.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every business has different challenges. Our goal is to
                understand your workflow and build technology that makes your
                business easier to manage.
              </p>

              <div className="mt-9 grid gap-6 sm:grid-cols-2">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.title}>
                      <div className="mb-3 text-cyan-600">
                        <Icon size={28} />
                      </div>

                      <h3 className="font-bold">{feature.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-gradient-to-br from-cyan-500 to-blue-800 p-8 md:p-12">
                <div className="rounded-3xl bg-white p-7 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">
                        Smart Business Management
                      </p>
                      <h3 className="mt-1 text-2xl font-bold">
                        Everything Connected
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-cyan-50 p-4 text-cyan-600">
                      <Workflow />
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      "Sales & Inventory",
                      "Customers & Suppliers",
                      "Reports & Analytics",
                      "Secure Multi-user Access",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
                      >
                        <CheckCircle2 className="text-green-500" size={20} />

                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-semibold text-cyan-600">HOW WE WORK</p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              From Idea To Software
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Discuss", "We understand your business and requirements."],
              ["02", "Plan", "We analyze the workflow and prepare the solution."],
              ["03", "Develop", "We design and build your software solution."],
              ["04", "Launch & Support", "We deploy, improve and support your system."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-5xl font-black text-cyan-100">
                  {number}
                </span>

                <h3 className="mt-6 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-5">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-semibold text-cyan-600">OUR WORK</p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Building Solutions For Real Businesses
            </h2>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border bg-slate-950">
              <div className="flex min-h-[300px] items-center justify-center bg-gradient-to-br from-orange-500/20 to-red-500/10 p-10">
                <Package size={100} className="text-orange-300" />
              </div>

              <div className="p-8 text-white">
                <p className="text-sm font-semibold text-cyan-400">
                  FOOD MANUFACTURING
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Aurora Food & Beverage
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  A business management system for food manufacturing,
                  production, stock management and distribution operations.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Production",
                    "Raw Materials",
                    "Stock",
                    "Distribution",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-2 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border bg-slate-950">
              <div className="flex min-h-[300px] items-center justify-center bg-gradient-to-br from-cyan-500/20 to-blue-600/10 p-10">
                <LayoutDashboard size={100} className="text-cyan-300" />
              </div>

              <div className="p-8 text-white">
                <p className="text-sm font-semibold text-cyan-400">
                  BUSINESS SOFTWARE
                </p>

                <h3 className="mt-2 text-3xl font-bold">Billing Craft</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  A flexible business management system for sales, inventory,
                  customers, suppliers, payments and financial reporting.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Sales",
                    "Inventory",
                    "Cash Book",
                    "Reports",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-2 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-slate-50 py-24">
        <div className="container mx-auto max-w-4xl px-5">
          <div className="mb-14 text-center">
            <p className="font-semibold text-cyan-600">FAQ</p>

            <h2 className="mt-4 text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border bg-white"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left font-bold"
                >
                  {faq.question}

                  <ChevronDown
                    className={`transition ${openFaq === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t px-6 py-5 leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-700 to-blue-900 py-24"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-20 top-0 h-72 w-72 rounded-full bg-white blur-[120px]" />
        </div>

        <div className="container relative mx-auto px-5 text-center text-white">
          <p className="font-semibold text-cyan-100">
            LET&apos;S BUILD SOMETHING GREAT
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            Ready To Digitize Your Business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
            Let&apos;s discuss how custom software can simplify your business
            operations and help your organization grow.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@iyadsoft.com"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1"
            >
              Start Your Project
            </a>

            <a
              href="tel:01676182277"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Contact Iyad Soft
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-slate-950 py-16 text-slate-400">
        <div className="container mx-auto px-5">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 font-black text-white">
                  I
                </div>

                <h3 className="text-xl font-bold text-white">
                  Iyad <span className="text-cyan-400">Soft</span>
                </h3>
              </div>

              <p className="mt-6 leading-7">
                Building smart software solutions for modern businesses.
              </p>
            </div>

            <div>
              <h4 className="mb-5 font-bold text-white">Company</h4>

              <div className="space-y-3">
                <a href="#about" className="block hover:text-cyan-400">
                  About Us
                </a>
                <a href="#portfolio" className="block hover:text-cyan-400">
                  Portfolio
                </a>
                <a href="#services" className="block hover:text-cyan-400">
                  Services
                </a>
                <a href="#contact" className="block hover:text-cyan-400">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-5 font-bold text-white">Solutions</h4>

              <div className="space-y-3">
                <p>Custom Software</p>
                <p>POS Systems</p>
                <p>ERP Solutions</p>
                <p>Web Applications</p>
              </div>
            </div>

            <div>
              <h4 className="mb-5 font-bold text-white">Contact</h4>

              <div className="space-y-3">
                <p>01676-182277</p>
                <p>01976-182277</p>
                <p>info@iyadsoft.com</p>
                <p>Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm">
            © {new Date().getFullYear()} Iyad Soft. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}