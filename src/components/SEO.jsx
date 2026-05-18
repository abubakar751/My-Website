import { Helmet } from "react-helmet-async";

const SITE_URL = "https://abubakar.ujiyaar.com";

export default function SEO({
  title,
  description,
  path = "/",
  type = "website",
  image = "/og-image.jpg",
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} — Abu Bakar | Full Stack Developer`
    : "Abu Bakar — Full Stack Developer";

  const desc =
    description ||
    "Abu Bakar — Full Stack Developer building enterprise software with Java, Spring Boot, React, and Angular.";

  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={desc} />

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}${image}`} />
      <meta property="og:site_name" content="Abu Bakar Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${SITE_URL}${image}`} />

      {/* Theme */}
      <meta name="theme-color" content="#0f172a" />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}