import { projects } from '../constants/project';

export const get_project = id => ({
  type: projects.get_project,
  id
});
