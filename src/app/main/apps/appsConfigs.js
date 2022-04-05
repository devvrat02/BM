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
  SettingConfig
];

export default appsConfigs;
