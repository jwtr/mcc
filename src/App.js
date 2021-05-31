import Header from './components/Header';
import HeroStats from './components/HeroStats';
import VillainStats from './components/VillainStats';

function App() {
  return (
    <div className="flex flex-col h-screen text-white bg-gray-700">
      <Header />
      <main className="flex flex-wrap overflow-y-auto p-5 text-center">
        <HeroStats />
        <VillainStats />
      </main>
    </div>
  );
}

export default App;
