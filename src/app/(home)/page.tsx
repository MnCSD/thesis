"use client";

import { Header } from "../components/header";
import Figure from "../images/teacher-3d.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { useEffect, useRef } from "react";
import { FloatingElement } from "./components/floating-element";
import { HeroSection } from "./components/hero-section";
import { ParallaxWrapper } from "./components/parallax-wrapper";
import { FeatureCard } from "./components/feature-card";
import { GlowingButton } from "./components/glowing-button";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { redirect } from "next/navigation";

const features = [
  {
    icon: "🎯",
    title: "Personalized Learning",
    description:
      "AI-powered curriculum that adapts to your unique learning style and pace.",
  },
  {
    icon: "⚡",
    title: "Real-time Feedback",
    description:
      "Get instant, actionable feedback to improve your understanding.",
  },
  {
    icon: "🧠",
    title: "Smart Progress Tracking",
    description:
      "Visual insights into your learning journey with detailed analytics.",
  },
  {
    icon: "🔄",
    title: "Continuous Adaptation",
    description:
      "Learning experience that evolves with your growing knowledge.",
  },
];

const floatingShapes = [
  { shape: "circle", size: "80px", position: "top-20 left-[10%]", delay: 0 },
  { shape: "square", size: "60px", position: "top-40 right-[15%]", delay: 1.2 },
  {
    shape: "triangle",
    size: "70px",
    position: "bottom-32 left-[20%]",
    delay: 0.8,
  },
  {
    shape: "circle",
    size: "40px",
    position: "bottom-20 right-[25%]",
    delay: 2,
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const { data: user } = useCurrentUser();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    if (user) {
      redirect("/explore");
    }
  }, [user]);

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-hidden">
      <Header />

      <main className="relative">
        {/* Background Effects */}
        <motion.div
          style={{ opacity }}
          className="fixed inset-0 bg-[#0F0F0F]"
        />
        <motion.div style={{ opacity }} className="fixed inset-0">
          <motion.div style={{ y: backgroundY }} className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#55DC49]/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
          </motion.div>
        </motion.div>

        {/* Floating Background Elements */}
        {floatingShapes.map((shape, index) => (
          <FloatingElement
            key={index}
            delay={shape.delay}
            className={`fixed ${shape.position} w-[${shape.size}] h-[${shape.size}] opacity-30 blur-sm pointer-events-none z-0`}
          >
            <div
              className={`w-full h-full bg-[#55DC49]/10 ${
                shape.shape === "circle"
                  ? "rounded-full"
                  : shape.shape === "square"
                    ? "rounded-xl rotate-45"
                    : "clip-triangle"
              }`}
            />
          </FloatingElement>
        ))}

        <div className="relative z-10">
          <HeroSection />

          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
              {features.map((feature, index) => (
                <ParallaxWrapper key={index} offset={30} className="h-full">
                  <FeatureCard {...feature} delay={0.2 + index * 0.1} />
                </ParallaxWrapper>
              ))}
            </div>

            <ParallaxWrapper offset={50}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative rounded-2xl border border-[#55DC49]/10 bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] p-8 lg:p-16 mb-24 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#55DC49]/5 via-transparent to-[#55DC49]/5" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-1">
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Start Your Learning Journey
                      </h2>
                      <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Join thousands of students who are already experiencing
                        the future of education with our AI-powered learning
                        platform.
                      </p>
                      <FloatingElement duration={3}>
                        <GlowingButton>Begin Now →</GlowingButton>
                      </FloatingElement>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex-1 relative"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <FloatingElement duration={6} className="relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#55DC49]/10 to-transparent rounded-full blur-3xl" />
                      <Image
                        src={Figure}
                        alt="3D Teacher"
                        className="w-full max-w-[500px] relative z-10"
                      />
                    </FloatingElement>
                  </motion.div>
                </div>
              </motion.div>
            </ParallaxWrapper>
          </div>
        </div>
      </main>
    </div>
  );
}
