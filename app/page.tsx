import JumboTron from "@/components/JumboTron";

export default function Home() {
  return (
    <div className="flex justiy-center">
      <JumboTron
        title="Welcome"
        description="An experimental playground for my experimental projects"
        navigation={{ title: "Projects", path: "" }}
      />
    </div>
  );
}
