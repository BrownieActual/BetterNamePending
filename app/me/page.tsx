import PageContent from "@/components/PageContent";
import JumboTron from "@/components/JumboTron";

export default function Page() {
  return (
    <div className="w-full">
      <JumboTron title="Me" description="Get to know me"></JumboTron>
      <PageContent></PageContent>
    </div>
  );
}
