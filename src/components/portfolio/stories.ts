import { projectStories } from '../../config/projectStories';
const overviews: Record<string, string> = {
  woonbuddy: '/projects/woonbuddy-portfolio-overview-v2.webp',
  mindflow: '/projects/mindflow-portfolio-overview.webp',
  'focusflow-personal': '/projects/focusflow-personal-portfolio-overview-v2.webp',
};
export const portfolioOrder = ['focusflow-remixed', 'woonbuddy', 'mindflow', 'focusflow-personal', 'focusflow-bewind'];
export const portfolioStories = projectStories.map(story => ({ ...story, media: { ...story.media, overview: { ...story.media.overview, src: overviews[story.slug] || story.media.overview.src } } })).sort((a, b) => portfolioOrder.indexOf(a.slug) - portfolioOrder.indexOf(b.slug));
