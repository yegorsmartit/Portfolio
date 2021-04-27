import axios from 'axios';
import { projectsImg } from "../resources/projectImg";
import { projectsType } from '../constants/project';

// export const get_project = ( data, dispatch ) => dispatch({
//   // type: projectsType.get_project,
//   // id
//   type: data.type,
//   title: data.title
// });

export const get_project = ( title ) => {
  return {
    type: projectsType.get_project_async,
    payload: title
  }

  // console.log('this is from project service ', data.payload, dispatch);
  // try {
  //   debugger
  //   let project = findProject(data.payload);
  //   project = addOrientationToArray(project);
  //   debugger
  //   return project;
  // } catch (e) {
  //   console.log('this is from project service get project', e);
  // }
};

export const getAllProjectsAction = () => {
  return {
    type: projectsType.get_projects_async,
    // payload:
  }
};
