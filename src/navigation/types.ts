export type AuthParamsList = {
  login: undefined;
  signup: undefined;

  Verification: undefined;
  ForgetPassword: undefined;

  ResetPassword: any;
};
export type TabParamsList = {
  Home: any;
  Connections: any;
  Calendar: any;
  Camera: any;
  Bag: any;
};
export type AppParamsList = {
  JobDetails: undefined;
  Search: undefined;
  Home: undefined;
  Cv: undefined;
  Connections: undefined;
  Reels: undefined;
  UserProfile: undefined;
  TabBar: undefined;
  ProfileScreen: undefined;
  CompleteProfileScreen: undefined;
  CompleteCompanyProfileScreen: undefined;
  UpdateAchievementCard: undefined;
  UpdateOneAchievements: undefined;
  UpdateSkillsCard: undefined;
  CreatePhoto2: undefined;
  Location: undefined;
  UpdateOneSkills: undefined;
  UpdateOneRefernceCheck: undefined;
  UpdateReferenceCheckCard: undefined;
  UpdateCompanyAbout: undefined;
  UpdateRecordVideoCompany: undefined;
  UpdateLanguageCard: undefined;
  UpdateOneLanguage: undefined;
  UpdateTrainingCard: undefined;
  UpdateOneTraining: undefined;
  CV: undefined;
  SaveVideoCompany: undefined;
  ProfileCompanyScreen: undefined;
  UpdateAboutCard: undefined;
  UpdateEducationCard: undefined;
  UpdateOneEducation: undefined;
  UpdateInfoCard: undefined;
  AddNewExperience: undefined;
  UpdateOneExperience: undefined;
  UpdateExperienceCard: undefined;
  SaveVideo: undefined;
  UpdateCompanyInfo: undefined;
  UpdateRecordVideo: undefined;
  UpdateAbout: undefined;
  MyVideoCV: undefined;
  UpdateLanguages: undefined;
  SearchPeople: undefined;
  TagPeople: undefined;
  CreatePollLink: undefined;
  UpdateInfo: undefined;
  CreateShareLink: any;
  UpdateEducation: undefined;
  UpdateAchievements: undefined;
  UpdateRefernceCheck: undefined;
  UpdateExperience: undefined;
  UpdateSkills: undefined;
  UpdateTraining: undefined;
  CreateVideo: undefined;
  CreateVoice: undefined;
  Analytics: undefined;
  AddPhoto: any;
  CreateVideo2: any;
  CreatePull: any;
  MyConnection: undefined;
  Market: undefined;
  ExterinalLinks: undefined;
  MYPolls: undefined;
  HealthProfile: undefined;
  JobOpportunity: undefined;
  Form2: undefined;
  MyJob: undefined;
  JobDescraption: undefined;
  UpdateExterinalLinks: undefined;
  UpdateCV: undefined;
  MyJobToJobSeeker: undefined;
  ApplayForJob: undefined;
  SecondApplayPage: undefined;
  JobOpportunityCompany: undefined;
  PreviewJob: undefined;
  Form2JobOpportunity: undefined;
  ThirdApplayPage: undefined;
  FourthApplayPage: undefined;
  FifthApplayPage: undefined;
  SixApplayPage: undefined;
  SavedJob: undefined;
  ApplicationsJob: undefined;
  Assignment: undefined;
  JobDescraptionCompany: undefined;
  ReviewUser: undefined;
  ShortedList: undefined;
  WatingList: undefined;
  EmployeeAppliedList: undefined;
  RejectedList: undefined;
  DynamicQuestionsComponent: undefined;
  MyCalendarScreen: undefined;
};
export type RootParamsList = {
  auth: any;
  app: any;
  Splash: any;
  Connections: any;
};

export type PrimaryParamsList = RootParamsList &
  AppParamsList &
  TabParamsList &
  AuthParamsList;

export type PrimaryParamListKeys = keyof PrimaryParamsList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends PrimaryParamsList {}
  }
}
