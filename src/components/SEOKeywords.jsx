import { useEffect } from 'react';

const brandTerms = [
  "Velnora", "VelnoraTech", "Velnora Tech", "VelnoraTech Software",
  "VelnoraTech Pvt Ltd", "VelnoraTech Software Pvt Ltd"
];

const coreTerms = [
  "software company", "software development company", "custom software development",
  "software engineering", "tech company", "IT company", "technology solutions",
  "digital transformation", "enterprise software", "business software"
];

const serviceTerms = [
  "SaaS solutions", "AI solutions", "web development", "mobile app development",
  "cloud solutions", "DevOps services", "UI UX design", "automation software",
  "enterprise applications", "startup software development"
];

const intentTerms = [
  "best", "top", "leading", "professional", "trusted", "hire",
  "affordable", "expert", "modern", "scalable"
];

const locations = [
  "India", "USA", "UK", "Canada", "Dubai", "Ahmedabad", "Mumbai",
  "Bangalore", "Delhi", "Pune", "Remote"
];

const modifiers = [
  "services", "agency", "provider", "company", "consulting",
  "development", "solutions", "experts", "firm", "platform"
];

const getSEOKeywords = () => {
  const keywordsSet = new Set();

  brandTerms.forEach(brand => {
    keywordsSet.add(brand);
    coreTerms.forEach(core => {
      keywordsSet.add(`${brand} ${core}`);
      keywordsSet.add(`${core} ${brand}`);
    });
    serviceTerms.forEach(service => {
      keywordsSet.add(`${brand} ${service}`);
      keywordsSet.add(`${service} ${brand}`);
    });
  });

  intentTerms.forEach(intent => {
    coreTerms.forEach(core => {
      keywordsSet.add(`${intent} ${core}`);
      locations.forEach(loc => {
        keywordsSet.add(`${intent} ${core} in ${loc}`);
        keywordsSet.add(`${core} in ${loc}`);
        keywordsSet.add(`${intent} ${core} near me`);
      });
    });
  });

  serviceTerms.forEach(service => {
    modifiers.forEach(mod => {
      keywordsSet.add(`${service} ${mod}`);
      keywordsSet.add(`${mod} for ${service}`);
      locations.forEach(loc => {
        keywordsSet.add(`${service} company in ${loc}`);
        keywordsSet.add(`${service} services in ${loc}`);
      });
    });
  });

  intentTerms.forEach(intent => {
    serviceTerms.forEach(service => {
      keywordsSet.add(`${intent} ${service}`);
      keywordsSet.add(`${intent} ${service} company`);
      keywordsSet.add(`${intent} ${service} provider`);
    });
  });

  const extraPatterns = [
    "hire {} developers",
    "{} for startups",
    "{} for enterprises",
    "{} for small business",
    "{} solutions company",
    "{} consulting services",
    "custom {} solutions",
    "{} outsourcing company"
  ];

  [...coreTerms, ...serviceTerms].forEach(term => {
    extraPatterns.forEach(pattern => {
      keywordsSet.add(pattern.replace("{}", term));
    });
  });

  return Array.from(keywordsSet);
};

const SEOKeywords = () => {
  useEffect(() => {
    const keywords = getSEOKeywords().join(', ');
    
    // Check if meta keywords exists
    let metaTag = document.querySelector('meta[name="keywords"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.name = "keywords";
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", keywords);
  }, []);

  return null; // This component doesn't render any visible UI
};

export default SEOKeywords;
