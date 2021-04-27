import { all, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { projectsType } from "../constants/project";
import {inviteMe, DRNKAR, TextRecognition, workControl, mixFit, CommunicationsControl,
  StaffControl, privetMir, wLingua} from '../resources/projectList';

const addOrientationToArray = async(imgArray) => {
  try {
    let imgObj = new Image();
    debugger
      for (let i = 0; i < imgArray.length; i++) {
        // let imgObj = new Image();
        imgObj.src = imgArray[i].image;
        console.log('this is from add orientation to array ', imgObj.src, 'aaaaaaaaaaaaaa', imgObj.height, imgObj.width);
        debugger
        if (imgObj.height < imgObj.width) {
          debugger
          imgArray[i].orientation = 'landscape'
        } else {
          debugger
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
    const projectsInfo = [inviteMe, DRNKAR, TextRecognition, workControl, mixFit, CommunicationsControl,
      StaffControl, privetMir, wLingua];
    for (let item  in projectsInfo) {
      if (title === projectsInfo[item].title) {
        return projectsInfo[item];
      }
    }
  } catch (e) {
    console.log('this from find project in projectSaga error', e);
  }
};

const findAllProjects = () => {
  try {
    return  [inviteMe, DRNKAR, TextRecognition, workControl, mixFit, CommunicationsControl,
      StaffControl, privetMir, wLingua];

  }catch(err){
    console.log('this is from find alll projects', err)
  }
};

function* getProjectWorker(props) {
  debugger
  try {
    // const title = props.payload;
    debugger
    let project = yield call( ()=> findProject(props.payload) );
    debugger
    project.projectImg = yield call( ()=> addOrientationToArray(project.projectImg) );
    debugger
    yield put({
      type: projectsType.get_project_success_async,
      payload: project
    });
    debugger
    return project;
  } catch (err) {
    console.log('this is from project service get project', err);
  }
  // const project = yield call( ()=> { projectActions.get_project(title)} );
  // debugger
}

function* getAllProjectsWorker() {
  try{
    const projects = yield call( () => findAllProjects());
    debugger
    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', projects);
    yield put({
      type: projectsType.get_projects_success_async,
      payload: projects
    })
    return projects
  }catch(err){
    console.log('this is from project service get projects', err)
  }
}

export function* getProject() {
  debugger
  yield takeLatest(
    projectsType.get_project_async,
    getProjectWorker
  )
}

export function* getAllProjects() {
  yield takeLatest(
    projectsType.get_projects_async,
    getAllProjectsWorker
  )
}

export default function* projectSaga () {
  debugger
  yield all([
    getAllProjects(),
    getProject()
  ])
}
