import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* TITLE */}
      <title>
        Abu Bakar | Java Developer | Software Developer in India
      </title>

      {/* DESCRIPTION */}
      <meta
        name="description"
        content="Abu Bakar is a Java Developer and Software Developer from India, specializing in Spring Boot, backend development, and scalable web applications."
      />

      {/* KEYWORDS (50+ variations) */}
      <meta
        name="keywords"
        content="
        Abu Bakar,
        Abu Bakar Java Developer,
        Abu Bakar Software Developer,
        AbuBakar,
        AbuBakar Java Developer,
        AbuBakar Software Developer,
        abubakar,
        abubakar java developer,
        abubakar software developer,
        abu bakar,
        abu bakar java developer,
        abu bakar software developer,
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
        abu bakar java specialist
        "
      />

      {/* AUTHOR */}
      <meta name="author" content="Abu Bakar" />

      {/* INDEXING */}
      <meta name="robots" content="index, follow" />

      {/* OPEN GRAPH (Google + Social) */}
      <meta property="og:title" content="Abu Bakar | Java Developer" />
      <meta
        property="og:description"
        content="Java Developer & Software Developer – Abu Bakar"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.yoursite.com" />
    </Helmet>
  );
};

export default SEO;
