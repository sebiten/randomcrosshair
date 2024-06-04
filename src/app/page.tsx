import CrosshairGenerator from "./components/CrosshairGen";
import Meme from "./components/meme";
import VisualCrosshair from "./components/VisualCrosshair";

export default async function Home() {
  const res = await fetch("https://frasedeldia.azurewebsites.net/api/phrase", {
    next: { revalidate: 10 },
  });
  // fetch('https://meme-api.com/gimme', { next: { revalidate: 3600 } })
  const data = await res.json();
  return (
    <main className="flex items-center justify-center max-w-5xl mx-auto h-full  ">
      <CrosshairGenerator />
      {/* <Meme url={data.phrase} title={data.author} /> */}
    </main>
  );
}
