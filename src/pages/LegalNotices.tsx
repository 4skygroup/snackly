export default function LegalNotices() {
  const activities = [
    "Vidéos publicitaires",
    "Motion design",
    "Contenus pour réseaux sociaux",
    "Production audiovisuelle",
  ];

  const responsibilityLimits = [
    "Des erreurs ou omissions",
    "D’une indisponibilité temporaire du site",
    "De l’utilisation des informations par l’utilisateur",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-purple-50/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className="mt-4 text-4xl font-bold text-snackly-dark-purple md:text-5xl">
            Mentions légales
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Informations relatives à l’éditeur du site, à son hébergement, aux
            droits de propriété intellectuelle et aux conditions d’utilisation
            du site Snackly.
          </p>
        </div>

        <div className="space-y-8">
          {/* Éditeur */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Éditeur du site
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                Le site présent :{" "}
                <a href="https://www.snacklyagency.com">
                  https://www.snacklyagency.com
                </a>
                ⁠ est édité par :
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Société</p>

                  <p className="mt-1 font-semibold text-snackly-dark-purple">
                    Visuance Agency
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Contact</p>

                  <p className="mt-1 font-semibold text-snackly-dark-purple">
                    contact@visuanceagency.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Hébergement
              </h2>
            </div>

            <div className="p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Hébergeur</p>

                  <p className="mt-1 font-semibold text-snackly-dark-purple">
                    OVH Cloud
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Site web</p>

                  <a
                    href="https://www.ovhcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block font-medium text-snackly-purple hover:text-snackly-blue"
                  >
                    www.ovhcloud.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Activité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Activité
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                Snackly est une agence spécialisée dans la création de contenus
                digitaux courts (snack content), incluant notamment :
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {activities.map((activity) => (
                  <div
                    key={activity}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Propriété intellectuelle
              </h2>
            </div>

            <div className="space-y-6 p-8">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="font-semibold text-amber-900">
                  Protection des contenus
                </p>

                <p className="mt-3 leading-8 text-amber-800">
                  Tous les contenus présents sur le site (vidéos, textes,
                  branding, éléments graphiques, etc.) sont protégés par le
                  droit de la propriété intellectuelle.
                </p>
              </div>

              <p className="leading-8 text-slate-700">
                Toute reproduction, modification ou exploitation sans
                autorisation préalable est interdite.
              </p>

              <p className="leading-8 text-slate-700">
                Les créations réalisées pour les clients restent soumises aux
                conditions définies dans les contrats ou devis.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Responsabilité
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                Snackly met tout en œuvre pour assurer l’exactitude des
                informations présentes sur le site. Toutefois, l’agence ne
                saurait être tenue responsable :
              </p>

              <div className="space-y-4">
                {responsibilityLimits.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Liens externes */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Liens externes
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl border border-snackly-blue/20 bg-snackly-blue/5 p-6">
                <p className="leading-8 text-slate-700">
                  Le site peut contenir des liens vers des sites tiers. Snackly
                  n’exerce aucun contrôle sur ces sites et décline toute
                  responsabilité quant à leur contenu.
                </p>
              </div>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Données personnelles
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-slate-700">
                  Les données collectées sont traitées conformément à notre
                  politique de confidentialité.
                </p>

                <a
                  href="/privacy-policy"
                  className="mt-4 inline-flex font-medium text-snackly-purple transition hover:text-snackly-blue"
                >
                  Consulter la politique de confidentialité →
                </a>
              </div>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="rounded-3xl bg-snackly-dark-purple p-8 text-white">
            <h2 className="text-xl font-semibold">Droit applicable</h2>

            <p className="mt-4 leading-8 text-white/80">
              Le site est soumis au droit français. Tout litige relève des
              tribunaux compétents du ressort du siège social de Snackly.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
