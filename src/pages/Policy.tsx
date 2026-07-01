import { useTranslation } from "react-i18next";

export default function Policy() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-purple-50/30">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-10">
          <h1 className="mt-4 text-4xl font-bold text-snackly-dark-purple md:text-5xl">
            {t("policy.title")}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {t("policy.description")}
          </p>

          <p className="mt-6 text-sm text-slate-500">
            {t("policy.lastUpdateLabel")} : {t("policy.lastUpdateValue")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Collecte */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.collect.title")}
              </h2>
            </div>

            <div className="space-y-6 px-8 py-6">
              <p className="text-slate-700">{t("policy.collect.intro")}</p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-snackly-purple" />
                  <span>{t("policy.collect.dataWhen.item1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-snackly-purple" />
                  <span>{t("policy.collect.dataWhen.item2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-snackly-purple" />
                  <span>{t("policy.collect.dataWhen.item3")}</span>
                </li>
              </ul>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="font-semibold text-snackly-dark-purple">
                  {t("policy.collect.fieldsTitle")}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-sm ring-1 ring-slate-200">
                    {t("policy.collect.fields.item1")}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm ring-1 ring-slate-200">
                    {t("policy.collect.fields.item2")}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm ring-1 ring-slate-200">
                    {t("policy.collect.fields.item3")}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm ring-1 ring-slate-200">
                    {t("policy.collect.fields.item4")}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm ring-1 ring-slate-200">
                    {t("policy.collect.fields.item5")}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1 text-sm ring-1 ring-slate-200">
                    {t("policy.collect.fields.item6")}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Finalité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.purposes.title")}
              </h2>
            </div>

            <div className="grid gap-4 p-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {t("policy.purposes.item1")}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {t("policy.purposes.item2")}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {t("policy.purposes.item3")}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {t("policy.purposes.item4")}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {t("policy.purposes.item5")}
              </div>
            </div>
          </section>

          {/* Base légale */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.legalBases.title")}
              </h2>
            </div>

            <div className="space-y-4 p-8">
              <div className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4">
                {t("policy.legalBases.item1")}
              </div>

              <div className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4">
                {t("policy.legalBases.item2")}
              </div>

              <div className="rounded-xl border-l-4 border-snackly-purple bg-purple-50 p-4">
                {t("policy.legalBases.item3")}
              </div>
            </div>
          </section>

          {/* Conservation */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.retention.title")}
              </h2>
            </div>

            <div className="space-y-6 p-8">
              <div>
                <p className="font-semibold">
                  {t("policy.retention.prospects.title")}
                </p>
                <p>{t("policy.retention.prospects.description")}</p>
              </div>

              <div>
                <p className="font-semibold">
                  {t("policy.retention.clients.title")}
                </p>
                <p>{t("policy.retention.clients.description")}</p>
              </div>
            </div>
          </section>

          {/* Partage */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.sharing.title")}
              </h2>
            </div>

            <div className="space-y-4 p-8">
              <div className="rounded-2xl border border-slate-200 p-4">
                {t("policy.sharing.item1")}
              </div>

              <div className="rounded-2xl border border-slate-200 p-4">
                {t("policy.sharing.item2")}
              </div>

              <div className="rounded-2xl border border-green-200 bg-green-50 p-5 font-semibold text-green-800">
                {t("policy.sharing.item3")}
              </div>
            </div>
          </section>

          {/* Droits */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 bg-linear-to-r from-snackly-purple/5 to-snackly-blue/5 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.rights.title")}
              </h2>
            </div>

            <div className="p-8 space-y-3">
              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                {t("policy.rights.item1")}
              </div>

              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                {t("policy.rights.item2")}
              </div>

              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                {t("policy.rights.item3")}
              </div>

              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                {t("policy.rights.item4")}
              </div>

              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                {t("policy.rights.item5")}
              </div>

              <div className="mt-6 rounded-2xl bg-snackly-dark-purple p-6 text-white">
                <p className="font-semibold">
                  {t("policy.rights.exerciseTitle")}
                </p>
                <p className="mt-2">{t("policy.company.email")}</p>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.security.title")}
              </h2>
            </div>

            <div className="p-8">
              <p>{t("policy.security.description")}</p>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-snackly-purple/10 px-8 py-5">
              <h2 className="text-xl font-semibold text-snackly-dark-purple">
                {t("policy.update.title")}
              </h2>
            </div>

            <div className="p-8">
              <p>{t("policy.update.description")}</p>
            </div>
          </section>

          {/* Footer */}
          <section className="rounded-3xl bg-snackly-dark-purple p-8 text-white">
            <h2 className="text-xl font-semibold">
              {t("policy.footer.contact")}
            </h2>

            <p className="mt-3">{t("policy.company.email")}</p>

            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
              {t("policy.lastUpdateLabel")} : {t("policy.lastUpdateValue")}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
