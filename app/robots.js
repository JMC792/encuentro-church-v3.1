export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/blog/',
        '/post',
      ],
    },
    sitemap: 'https://www.encuentro.church/sitemap.xml',
  }
}