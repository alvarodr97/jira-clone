import { IssueI } from "./issue";
import { UserI } from "./user";

export interface ProjectTypeI {
  id: string;
  projectName: string;
  url: string;
  description: string;
  category: ProjectCategoryEnum;
  createdAt: string;
  updatedAt: string;
  issues: IssueI[];
  users: UserI[];
}

export enum ProjectCategoryEnum {
  SOFTWARE = 'Software',
  MARKETING = 'Marketing',
  BUSINESS = 'Business'
}