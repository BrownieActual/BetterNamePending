import JumboTron from "@/components/base/JumboTron";

export default function Home() {
  return (
    <div className="flex justiy-center">
      <JumboTron
        title="Welcome"
        description="A Sandbox for my experimental projects"
        navigation={{ title: "Projects", path: "/projects" }}
      />
    </div>
  );
}
