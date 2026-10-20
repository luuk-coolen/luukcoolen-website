import { PortfolioHome } from './components/portfolio/PortfolioHome';
import { PortfolioImages } from './components/portfolio/PortfolioImages';
import { PortfolioStory, PortfolioPrivacy } from './components/portfolio/PortfolioStory';
import { portfolioStories } from './components/portfolio/stories';

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const story = portfolioStories.find(item => item.href === pathname);
  return <PortfolioImages>{pathname === '/privacy' ? <PortfolioPrivacy /> : story ? <PortfolioStory story={story} /> : pathname.startsWith('/projecten/') ? <main className="wrap story-section"><h1>Project niet gevonden</h1><p>Deze projectpagina bestaat niet.</p><a href="/#voorbeelden">Bekijk mijn projecten</a></main> : <PortfolioHome />}</PortfolioImages>;
}
