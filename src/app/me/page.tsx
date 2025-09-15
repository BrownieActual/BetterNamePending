import PageContent from "@/src/components/base/PageContent";
import JumboTron from "@/src/components/base/JumboTron";

export default function Page() {
  return (
    <div className="w-full">
      <JumboTron title="Me" description="Get to know me"></JumboTron>
      <PageContent></PageContent>
    </div>
  );
}
