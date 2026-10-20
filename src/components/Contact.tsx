import { Section } from './ui/Section';
import { Linkedin, Mail, MessageSquare } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export function Contact() {
  return (
    <Section bg="white" id="contact" className="text-center">
      <Reveal
        className="max-w-4xl mx-auto relative"
      >
        <div className="relative z-10">
          <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MessageSquare size={32} />
          </div>
          <p className="eyebrow mb-5">Contact</p>
          <h2 className="section-title mb-6">Laten we in gesprek gaan.</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl mx-auto">
            Nieuwsgierig naar mijn leerportfolio of mijn kijk op zorginnovatie, digitale ondersteuning en procesverbetering? Ik ga graag in gesprek.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:luuk.coolen@gmail.com"
              className="button-primary w-full sm:w-auto"
            >
              <Mail size={20} />
              Stuur een e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/luuk-coolen-6b8a2968/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary w-full sm:w-auto"
            >
              <Linkedin size={20} className="text-[#0077b5]" />
              LinkedIn
            </a>
          </div>
        </div>

      </Reveal>
    </Section>
  );
}
