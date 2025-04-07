import { PageLayout } from "@/components/layout/PageLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      {/* Page content can go here */}
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          This is the about us page. You can add your content here.
        </p>
      </div>
    </PageLayout>
  );
};

export default AboutPage;
