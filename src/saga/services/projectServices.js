import axios from 'axios';
import { projectsImg } from "../../resources/projectImg";
import { projectsType } from '../../constants/project';

const addOrientationToArray = imgArray => {
  try {
    let imgObj = new Image();
    for (let i = 0; i < imgArray.length; i++) {
      imgObj.src = imgArray[i].image;
      if (imgObj.height < imgObj.width) {
        imgArray[i].orientation = 'landscape'
      } else {
        imgArray[i].orientation = 'portrait'
      }
    }
    return imgArray;
  } catch (e) {
    console.log(e);
  }
};

const findProject = title => {
  try {
    for (let item  in projectsImg) {
      if (title === item) {
        return projectsImg[item];
      }
    }
  } catch (e) {
    console.log('this from find project in project services', e);
  }
};

export const projectActions = {
  get_project: (data, dispatch) => ({
    type:      projectsType.get_project_async,
    payload:   data.payload
  }),
  get_projects: (data, dispatch) => ({
    type: projectsType.get_projects_async,
    payload: data.payload
  })
};


  export const get_project = (data, dispatch) => {
    console.log('this is from project service ', data.payload, dispatch);
    try {
      debugger
      let project = findProject(data.payload);
      project = addOrientationToArray(project);
      debugger
      return project;
    } catch (e) {
      console.log('this is from project service get project', e);
    }
  }

