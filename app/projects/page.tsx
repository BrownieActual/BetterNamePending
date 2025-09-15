import PageContent from "@/components/base/PageContent";
import JumboTron from "@/components/base/JumboTron";

export default function Page() {
  return (
    <div className="w-full">
      <JumboTron
        title="Projects"
        description="What I'm playing aroud with"
      ></JumboTron>
      <PageContent></PageContent>
    </div>
  );
}
