import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Figure from "../../images/teacher-3d.png";

export function QuestionSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0F0F0F] p-8 py-20 border border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <Image
          src={Figure}
          alt="AI Tutor"
          width={400}
          height={400}
          className="object-contain absolute right-0 top-[-50px]"
          priority
        />
      </div>
      <div className="relative z-10 max-w-lg">
        <h2 className="text-2xl font-bold text-white mb-ss4">
          Have a Question? I&apos;m Here to Help!
        </h2>
        <p className="text-gray-400 mb-6">
          Get instant help with any topic. Our AI tutor is available 24/7 to
          assist you with explanations, practice problems, and step-by-step
          solutions.
        </p>
        <Link href="/home/chat">
          <Button className="bg-[#55DC49] hover:bg-[#4bc73f] gap-2">
            <MessageSquare className="w-4 h-4" />
            Start a Conversation
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0F0F0F] to-transparent" />
    </section>
  );
}
