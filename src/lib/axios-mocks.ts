import { Issues } from "@/constants/issues";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

// Create mock adapter
const mock = new AxiosMockAdapter(axios, { delayResponse: 1500 });

// Mock get request to /issues
mock.onGet("/issues").reply(200, Issues);

// Regular expression to match /issue/:issueId
const searchByIssue = new RegExp(`\/issue\/*`);

// Mock get request to /issue/:issueId
mock.onGet(searchByIssue).reply((config) => {
  const match = config.url?.match(/\/issue\/(\d+)/);
  const issueId = match ? match[1] : null;
  const issue = Issues.find((issue) => issue.id === issueId);
  return [200, issue];
});

// Mock delete request to /issue/:issueId
mock.onDelete(searchByIssue).reply((config) => {
  const match = config.url?.match(/\/issue\/(\d+)/);
  const issueId = match ? match[1] : null;
  const index = Issues.findIndex((issue) => issue.id === issueId);
  Issues.splice(index, 1);
  return [200, Issues];
});

export default mock;
