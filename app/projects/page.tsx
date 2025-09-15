import PageContent from "@/components/PageContent";
import JumboTron from "@/components/JumboTron";

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
