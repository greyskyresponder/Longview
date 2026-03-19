import statusBar from './statusBar';
import deployment from './deployment';
import service from './service';
import caseStudy from './caseStudy';
import leader from './leader';
import contractVehicle from './contractVehicle';
import intel from './intel';
import program from './program';
import page from './page';
import capabilityStatement from './capabilityStatement';

export const schemaTypes = [
  // Operations
  statusBar,
  deployment,

  // Content
  service,
  caseStudy,
  intel,
  program,
  capabilityStatement,

  // People
  leader,

  // Structure
  contractVehicle,
  page,
];
