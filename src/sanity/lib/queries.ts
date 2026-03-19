import { groq } from 'next-sanity';

// Status Bar — homepage operational metrics
export const statusBarQuery = groq`*[_type == "statusBar"][0]{
  activeMissions,
  statesServed,
  respondersCredentialed,
  yearsOfOperations,
  watchStatus
}`;

// Deployments — for map and cards
export const deploymentsQuery = groq`*[_type == "deployment"] | order(startDate desc){
  _id,
  name,
  disasterType,
  jurisdiction,
  state,
  role,
  teamSize,
  outcome,
  startDate,
  endDate,
  status,
  coordinates
}`;

// Featured deployments — for homepage
export const featuredDeploymentsQuery = groq`*[_type == "deployment" && featured == true] | order(startDate desc)[0...3]{
  _id,
  name,
  disasterType,
  jurisdiction,
  state,
  role,
  teamSize,
  outcome,
  startDate,
  endDate,
  status,
  coordinates
}`;

// Services
export const servicesQuery = groq`*[_type == "service"] | order(orderRank asc){
  _id,
  title,
  description,
  slug,
  icon,
  esfAlignment
}`;

// Leadership team
export const leadersQuery = groq`*[_type == "leader"] | order(orderRank asc){
  _id,
  name,
  title,
  bio,
  photo,
  certifications,
  slug
}`;

// Case studies
export const caseStudiesQuery = groq`*[_type == "caseStudy"] | order(publishedAt desc){
  _id,
  title,
  slug,
  disaster,
  jurisdiction,
  summary,
  publishedAt,
  coverImage
}`;

// Contract vehicles
export const contractVehiclesQuery = groq`*[_type == "contractVehicle"] | order(orderRank asc){
  _id,
  name,
  contractNumber,
  agency,
  scope,
  periodOfPerformance,
  status
}`;

// Intel / articles
export const intelQuery = groq`*[_type == "intel"] | order(publishedAt desc)[0...3]{
  _id,
  title,
  slug,
  category,
  author,
  excerpt,
  publishedAt,
  coverImage
}`;

// Programs (Grey Sky, Drone, NDD)
export const programsQuery = groq`*[_type == "program"] | order(orderRank asc){
  _id,
  name,
  slug,
  description,
  teamStructure,
  status
}`;
