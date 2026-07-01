import { useTranslation } from "react-i18next";

export default function LegalNotices() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-purple-50/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className="mt-4 text-4xl font-bold text-snackly-dark-purple md:text-5xl">
            {t("legal.title")}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {t("legal.description")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Éditeur */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("legal.publisher.title")}
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                {t("legal.publisher.descriptionPrefix")}{" "}
                <a
                  href={t("legal.company.website")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("legal.company.website")}
                </a>{" "}
                {t("legal.publisher.descriptionSuffix")}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    {t("legal.publisher.company.label")}
                  </p>
                  <p className="mt-1 font-semibold text-snackly-dark-purple">
                    {t("legal.company.name")}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">
                    {t("legal.publisher.contact.label")}
                  </p>
                  <p className="mt-1 font-semibold text-snackly-dark-purple">
                    {t("legal.company.email")}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("legal.hosting.title")}
              </h2>
            </div>

            <div className="p-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">
                  {t("legal.hosting.provider.label")}
                </p>
                <p className="mt-1 font-semibold text-snackly-dark-purple">
                  {t("legal.company.host")}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm text-slate-500">
                  {t("legal.hosting.website.label")}
                </p>

                <a
                  href={t("legal.company.hostWebsite")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-medium text-snackly-purple hover:text-snackly-blue"
                >
                  {t("legal.hosting.website.value")}
                </a>
              </div>
            </div>
          </section>

          {/* Activité (SANS TABLEAU) */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("legal.activity.title")}
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                {t("legal.activity.description")}
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                  {t("legal.activity.item1")}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                  {t("legal.activity.item2")}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                  {t("legal.activity.item3")}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                  {t("legal.activity.item4")}
                </div>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("legal.intellectualProperty.title")}
              </h2>
            </div>

            <div className="space-y-6 p-8">
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="font-semibold text-amber-900">
                  {t("legal.intellectualProperty.cardTitle")}
                </p>
                <p className="mt-3 leading-8 text-amber-800">
                  {t("legal.intellectualProperty.cardDescription")}
                </p>
              </div>

              <p className="leading-8 text-slate-700">
                {t("legal.intellectualProperty.description1")}
              </p>

              <p className="leading-8 text-slate-700">
                {t("legal.intellectualProperty.description2")}
              </p>
            </div>
          </section>

          {/* Responsabilité (SANS TABLEAU) */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("legal.responsibility.title")}
              </h2>
            </div>

            <div className="p-8">
              <p className="mb-6 text-slate-700">
                {t("legal.responsibility.description")}
              </p>

              <div className="space-y-4">
                <div className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4 text-slate-700">
                  {t("legal.responsibility.item1")}
                </div>

                <div className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4 text-slate-700">
                  {t("legal.responsibility.item2")}
                </div>

                <div className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4 text-slate-700">
                  {t("legal.responsibility.item3")}
                </div>
              </div>
            </div>
          </section>

          {/* Liens externes */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("legal.externalLinks.title")}
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl border border-snackly-blue/20 bg-snackly-blue/5 p-6">
                <p className="leading-8 text-slate-700">
                  {t("legal.externalLinks.description")}
                </p>
              </div>
            </div>
          </section>

          {/* Données personnelles */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("legal.privacy.title")}
              </h2>
            </div>

            <div className="p-8">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-slate-700">
                  {t("legal.privacy.description")}
                </p>

                <a
                  href={t("legal.privacy.href")}
                  className="mt-4 inline-flex font-medium text-snackly-purple transition hover:text-snackly-blue"
                >
                  {t("legal.privacy.link")}
                </a>
              </div>
            </div>
          </section>

          {/* Droit applicable */}
          <section className="rounded-3xl bg-snackly-dark-purple p-8 text-white">
            <h2 className="text-xl font-semibold">
              {t("legal.applicableLaw.title")}
            </h2>

            <p className="mt-4 leading-8 text-white/80">
              {t("legal.applicableLaw.description")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
