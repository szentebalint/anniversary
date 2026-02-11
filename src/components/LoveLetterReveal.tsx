import { useState } from "react";
import { Heart } from "lucide-react";

const LoveLetterReveal = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="love-letter" className="px-5 py-20 bg-gradient-to-b from-background to-rose-light">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Levél, Neked
        </h2>
        <p className="text-muted-foreground font-handwritten text-lg mb-10">
          Nyomd meg az olvasáshoz
        </p>

        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="mx-auto w-24 h-24 flex items-center justify-center rounded-full
              bg-primary/10 hover:bg-primary/20 active:scale-95
              transition-all duration-300 animate-pulse-heart min-h-[44px]"
            aria-label="Reveal love letter"
          >
            <Heart className="w-12 h-12 text-primary fill-primary" />
          </button>
        )}

        {revealed && (
          <div className="animate-letter-reveal bg-card border border-primary/15 rounded-2xl p-7 sm:p-10 shadow-xl text-left">
            <p className="font-handwritten text-2xl text-primary mb-4">Kedves Kisgirl,</p>

            <div className="space-y-4 text-foreground/80 leading-relaxed text-[15px]">
              <p>Először is nem akarok sablonosan írni, mert már pár levelet kaptál tőlem, azok tartalmát hiába írnám újra le. :D </p>

              <p>Amikor először megláttalak az 59-es villamoson a Majornál, még nagyon régen, egyből tudtam, hogy ebből valami lesz, és lám,  itt vagyunk. Most írhatnám, hogy sok jón és nehézségen vagyunk túl, de az sablonos lenne.</p>

              <p>Nagyon hálás vagyok mindazért, amit tettél értem az elmúlt három évben, és azért is, hogy máig mellettem vagy. Sokkal jobb ember lettem, amióta ismerlek, szerintem az eddigi eredményeim felét nem értem volna el egy ilyen támogató és jó útra terelő barátnő nélkül, mint Te. Teljesen máshogy látom a világot, mióta velem vagy, és tudjuk, hogy nem feltétlen jó irányból indultam :D</p>

              <p>Nem is ragozom tovább, hiszen próbálok minden közhelyet mellőzni. Nagyon-nagyon szeretlek Kisgirl, köszönöm ezt a három évet és még százszor ennyit nekünk!</p>
            </div>

            <p className="font-handwritten text-xl text-primary mt-6 text-right">
              Szeretettel,<br />
              Kisboysid 💕
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveLetterReveal;
