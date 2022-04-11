import CalendarAppConfig from "./calendar/CalendarAppConfig";
import OrganizationAppConfig from "./organization/OrganizationAppConfig";
import TeamsAppConfig from "./teams/TeamsAppConfig";
import ChatAppConfig from "./chat/ChatAppConfig";
import AnalyticsAppConfig from "./analytics/AnalyticsAppConfig";
import VulnerabilitiesAppConfig from "./vulnerabilities/VulnerabilitiesAppConfig";
import VulConfig from "./vulnerabilities/VulReport/VulConfig";
import CloudAppConfig from "./cloud/CloudAppConfig";
import KnowledgeBaseConfig from "./knowledgebase/KnowledgeBaseConfig";
import CompConfig from "./Comp/CompConfig";
import SettingConfig from "./setting/SettingConfig";
import ClientConfig from "./Client/ClientConfig";
import PentesterConfig from "./Pentester/PentesterConfig";
import RegisterConfig from "./Register/RegisterConfig";
import DashboardConfig from "./Dashboard/DashbordConfig";
import ScrumboardAppConfig from "./scrumboard/ScrumboardAppConfig"
const appsConfigs = [
  AnalyticsAppConfig,
  VulnerabilitiesAppConfig,
  KnowledgeBaseConfig,
  CalendarAppConfig,
  OrganizationAppConfig,
  TeamsAppConfig,
  CloudAppConfig,
  CompConfig,
  ChatAppConfig,
  VulConfig,
  SettingConfig,
  ClientConfig,
  PentesterConfig,
  RegisterConfig,
  DashboardConfig,
  ScrumboardAppConfig,
];

export default appsConfigs;
