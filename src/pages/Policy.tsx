export default function Policy() {
  const collectedData = [
    "Remplissez un formulaire de contact",
    "Demandez un devis",
    "Naviguez sur le site",
  ];

  const collectedFields = [
    "Nom",
    "Adresse e-mail",
    "Numéro de téléphone",
    "Entreprise",
    "Besoin marketing",
    "Adresse IP",
  ];

  const purposes = [
    "Répondre à vos demandes",
    "Élaborer des propositions commerciales",
    "Gérer la relation client",
    "Améliorer les performances du site",
    "Analyser les comportements utilisateurs",
  ];

  const legalBases = [
    "Votre consentement",
    "L’exécution d’une relation précontractuelle ou contractuelle",
    "L’intérêt légitime lié à l’amélioration des services",
  ];

  const rights = [
    "Droit d’accès",
    "Droit de rectification",
    "Droit de suppression",
    "Droit d’opposition",
    "Droit à la portabilité",
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-purple-50/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className="mt-4 text-4xl font-bold text-snackly-dark-purple md:text-5xl">
            Politique de confidentialité
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Découvrez quelles données nous collectons, pourquoi nous les
            utilisons et quels sont vos droits concernant leur traitement.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            Dernière mise à jour : 24 juin 2026
          </p>
        </div>

        <div className="space-y-8">
          {/* Collecte */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Quelles données collectons-nous ?
              </h2>
            </div>

            <div className="space-y-6 px-8 py-6">
              <p className="text-slate-700">
                Snackly collecte des données lorsque vous :
              </p>

              <ul className="space-y-3">
                {collectedData.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-snackly-purple" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-snackly-dark-purple">
                  Données susceptibles d'être collectées
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {collectedFields.map((field) => (
                    <span
                      key={field}
                      className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Finalité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Pourquoi utilisons-nous vos données ?
              </h2>
            </div>

            <div className="grid gap-4 p-8 md:grid-cols-2">
              {purposes.map((purpose) => (
                <div
                  key={purpose}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700"
                >
                  {purpose}
                </div>
              ))}
            </div>
          </section>

          {/* Base légale */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Sur quelle base légale reposent les traitements ?
              </h2>
            </div>

            <div className="space-y-4 p-8">
              {legalBases.map((base) => (
                <div
                  key={base}
                  className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4 text-slate-700"
                >
                  {base}
                </div>
              ))}
            </div>
          </section>

          {/* Conservation */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Combien de temps conservons-nous vos données ?
              </h2>
            </div>

            <div className="space-y-6 p-8">
              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-snackly-purple" />

                <div>
                  <p className="font-semibold text-snackly-dark-purple">
                    Prospects
                  </p>

                  <p className="text-slate-700">
                    3 ans après le dernier contact.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-snackly-blue" />

                <div>
                  <p className="font-semibold text-snackly-dark-purple">
                    Clients
                  </p>

                  <p className="text-slate-700">
                    Entre 5 et 10 ans selon les obligations légales, notamment
                    celles liées à la facturation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Partage */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Avec qui partageons-nous vos données ?
              </h2>
            </div>

            <div className="space-y-4 p-8">
              <div className="rounded-2xl border border-slate-200 p-4">
                Outils marketing (analytics, CRM, emailing)
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                Prestataires techniques (hébergement, maintenance)
              </div>

              <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
                <p className="font-semibold text-green-800">
                  Les données ne sont jamais revendues à des tiers.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          {/* <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Comment utilisons-nous les cookies ?
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl border border-snackly-purple/20 bg-snackly-purple/5 p-6">
                <ul className="space-y-3 text-slate-700">
                  <li>• Mesurer l’audience</li>
                  <li>• Optimiser l’expérience utilisateur</li>
                  <li>• Suivre les performances marketing</li>
                </ul>
              </div>

              <p className="mt-5 text-slate-600">
                Un bandeau de consentement vous permet de gérer vos préférences
                à tout moment.
              </p>
            </div>
          </section> */}

          {/* Droits */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Quels sont vos droits ?
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-3xl border border-snackly-purple/20 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 p-6">
                <div className="grid gap-3 md:grid-cols-2">
                  {rights.map((right) => (
                    <div
                      key={right}
                      className="rounded-xl bg-white/80 p-3 text-slate-700"
                    >
                      {right}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-snackly-dark-purple p-6">
                <p className="font-semibold text-white">Exercer vos droits</p>

                <p className="mt-2 text-white/80">contact@snacklyagency.com</p>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Comment protégeons-nous vos données ?
              </h2>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-700">
                Snackly met en place des mesures techniques et
                organisationnelles destinées à protéger vos données contre tout
                accès, modification, divulgation ou destruction non autorisés.
              </p>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                Mise à jour de cette politique
              </h2>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-700">
                Cette politique de confidentialité peut être modifiée à tout
                moment afin de rester conforme aux évolutions réglementaires et
                aux changements apportés à nos services.
              </p>
            </div>
          </section>

          {/* Footer */}
          <section className="rounded-3xl bg-snackly-dark-purple p-8 text-white">
            <h2 className="text-xl font-semibold">Contact</h2>

            <p className="mt-3 text-white/80">contact@snacklyagency.com</p>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
              Dernière mise à jour : 24 juin 2026
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
