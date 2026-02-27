import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* TITLE - FIXED: Pehle "Abu Bakar Software Developer" */}
      <title>
        Abu Bakar Software Developer | Java Developer India
      </title>

      {/* DESCRIPTION - FIXED: "Software Developer" pe focus */}
      <meta
        name="description"
        content="Abu Bakar is a professional Software Developer and Java Developer from India, specializing in Spring Boot, backend development, and scalable web applications."
      />

      {/* KEYWORDS (50+ variations) - FIXED: "Abu Bakar Software Developer" pehle */}
      <meta
        name="keywords"
        content="
        Abu Bakar Software Developer,
        Abu Bakar,
        Abu Bakar Java Developer,
        AbuBakar Software Developer,
        AbuBakar,
        AbuBakar Java Developer,
        abubakar software developer,
        abubakar,
        abubakar java developer,
        abu bakar software developer,
        abu bakar,
        abu bakar java developer,
        abu bakar backend developer,
        abu bakar spring boot developer,
        abu bakar java backend developer,
        abu bakar full stack developer,
        abu bakar mumbai developer,
        abu bakar india developer,
        abu bakar software engineer,
        abu bakar java engineer,
        abu bakar api developer,
        abu bakar backend engineer,
        abu bakar spring developer,
        abu bakar rest api developer,
        abu bakar microservices developer,
        abu bakar java programmer,
        abu bakar professional developer,
        abu bakar web developer,
        abu bakar enterprise developer,
        abu bakar fintech developer,
        abu bakar upi developer,
        abu bakar payment api developer,
        abu bakar backend expert,
        abu bakar java specialist,
        best software developer india,
        java developer mumbai,
        spring boot developer up
        "
      />

      {/* AUTHOR */}
      <meta name="author" content="Abu Bakar - Software Developer" />

      {/* INDEXING */}
      <meta name="robots" content="index, follow" />

      {/* OPEN GRAPH (Google + Social) - FIXED */}
      <meta property="og:title" content="Abu Bakar Software Developer | Java Developer India" />
      <meta
        property="og:description"
        content="Abu Bakar - Professional Software Developer & Java Developer from India"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://abubakar.ujiyaar.com" />
      
      {/* Twitter Card - ADDED for better social sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Abu Bakar Software Developer | India" />
      <meta name="twitter:description" content="Abu Bakar - Professional Software Developer & Java Developer from India" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://abubakar.ujiyaar.com" />
    </Helmet>
  );
};

export default SEO;