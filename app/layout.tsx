import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://www.orbis360studios.in';
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Orbis 360 Studios | 360° Virtual Tours in Rajasthan', template: '%s | Orbis 360 Studios' },
  description: 'Professional 360° virtual tours and immersive property photography for cafés, hotels, resorts, banquets, real estate, government buildings and events across Rajasthan. Based in Udaipur.',
  keywords: ['360 virtual tour Rajasthan','360 degree virtual tour Udaipur','VR tour services Rajasthan','virtual tour photography Jaipur','Google Street View virtual tour','hotel virtual tour','resort virtual tour','cafe 360 tour','real estate virtual tour','banquet hall virtual tour'],
  alternates: { canonical: '/' },
  openGraph: { title: 'Orbis 360 Studios | Step Inside Before You Visit', description: 'Immersive 360° virtual tours for businesses and spaces across Rajasthan.', url: siteUrl, siteName: 'Orbis 360 Studios', locale: 'en_IN', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Orbis 360 Studios', description: 'Professional 360° virtual tours across Rajasthan.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const businessSchema = {
    '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Orbis 360 Studios', url: siteUrl,
    image: `${siteUrl}/orbis360-logo.png`, telephone: '+91-8387967670', address: { '@type': 'PostalAddress', addressLocality: 'Udaipur', addressRegion: 'Rajasthan', addressCountry: 'IN' },
    areaServed: ['Udaipur','Jaipur','Jodhpur','Kota','Ajmer','Bikaner','Jaisalmer','Pushkar','Mount Abu','Rajasthan'],
    description: '360-degree virtual tour photography and immersive digital walkthroughs for commercial spaces, hospitality, real estate and events across Rajasthan.',
    serviceType: ['360° Virtual Tour Photography','Virtual Property Tours','Immersive Business Tours','360° Event Coverage']
  };
  return <html lang="en-IN"><head>
    <meta name="google-site-verification" content="WkKLCdqPyqtmQftt7op5TrwintNtv7OuvoSWEcCGl3M" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} /></head><body>{children}</body></html>;
}
