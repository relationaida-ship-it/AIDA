// app/page.tsx

type RendezVous = {
  id: string;
  titre: string;
  categorie: "sante" | "administratif" | "social";
  date: string;
  tempsRestant: string;
};

const RDV_MOCK: RendezVous[] = [
  {
    id: "1",
    titre: "Rendez-vous CAF",
    categorie: "social",
    date: "12/03/2026 à 14h00",
    tempsRestant: "Dans 5 jours",
  },
  {
    id: "2",
    titre: "Rendez-vous Préfecture",
    categorie: "administratif",
    date: "20/03/2026 à 09h30",
    tempsRestant: "Dans 13 jours",
  },
];

function categorieCouleur(categorie: RendezVous["categorie"]) {
  switch (categorie) {
    case "sante":
      return "bg-blue-100 text-blue-900";
    case "administratif":
      return "bg-purple-100 text-purple-900";
    case "social":
      return "bg-emerald-100 text-emerald-900";
    default:
      return "bg-gray-100 text-gray-900";
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50 flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-sky-900">Mes rendez-vous</h1>

        {/* Icône IA (accès rapide) */}
        <a
          href="/ia"
          className="flex items-center gap-2 rounded-full bg-sky-600 text-white px-4 py-2 text-sm font-semibold shadow-md"
        >
          🤖 IA
        </a>
      </header>

      {/* Contenu */}
      <main className="flex-1 p-4 flex flex-col gap-4">
        {/* Liste des rendez-vous */}
        <section className="space-y-3">
          {RDV_MOCK.map((rdv) => (
            <article
              key={rdv.id}
              className="rounded-2xl bg-white shadow-sm p-4 flex flex-col gap-2"
            >
              <div
                className={
                  "inline-flex px-3 py-1 rounded-full text-xs font-semibold " +
                  categorieCouleur(rdv.categorie)
                }
              >
                {rdv.titre}
              </div>
              <p className="text-sm text-gray-700">{rdv.date}</p>
              <p className="text-xs font-semibold text-sky-700">
                ⏳ {rdv.tempsRestant}
              </p>
            </article>
          ))}
        </section>
      </main>

      {/* Onglet IA en bas (navigation simple) */}
      <nav className="w-full bg-white border-t border-sky-100 flex justify-around py-3">
        <a className="text-sky-700 font-semibold text-sm" href="/">
          🏠 Accueil
        </a>
        <a className="text-gray-500 text-sm" href="/ia">
          🤖 IA
        </a>
      </nav>
    </div>
  );
}
