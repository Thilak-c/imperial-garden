export default function sitemap() {
  const baseUrl = 'https://imperialgardenpatna.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}

