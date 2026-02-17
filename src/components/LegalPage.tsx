import Layout from "@/components/Layout";

const LegalPage = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Layout>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:font-heading [&_strong]:text-foreground">
          {children}
        </div>
      </div>
    </section>
  </Layout>
);

export default LegalPage;
