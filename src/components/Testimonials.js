import { HiStar } from "react-icons/hi";
import { HiChatAlt2 } from "react-icons/hi";
import AnimatedOnScroll from "./AnimatedOnScroll";

const testimonials = [
  {
    name: "Matas P.",
    role: "Startuolio įkūrėjas",
    quote:
      "Viskas tiesiog veikia. Jokios painiavos ar paslėptų kaštų. Profesionalus požiūris ir kokybiškas rezultatas.",
    rating: 5,
  },
  {
    name: "Emilija G.",
    role: "Marketingo vadovė",
    quote:
      "Pamačiau, kiek daug praradome su senąja svetaine. Viskas įgyvendinta greitai ir efektyviai. Rekomenduoju visiems!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedOnScroll animation="fade-in-up">
          <h2 className="section-title text-white">
            Ką sako mūsų <span className="text-primary-200">klientai</span>
          </h2>
        </AnimatedOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <AnimatedOnScroll key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={index * 0.15}>
              <div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 relative hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
              <HiChatAlt2 className="absolute top-4 right-4 w-8 h-8 text-white/20" />
              <div className="flex text-yellow-300 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-white">{item.name}</div>
                <div className="text-primary-200 text-sm">{item.role}</div>
              </div>
            </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
