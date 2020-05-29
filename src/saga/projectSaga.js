import { all, put, takeLatest, call} from 'redux-saga/effects';
import { projects } from "../constants/project";
import projectService from "./services/projectServices";

function* getProjectWorker(props) {
  const { title } = props;
  // const result = yield
  projectService.get_project(title);
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", title);
}

function* getProject() {
  yield takeLatest(
    projects.get_project,
    getProjectWorker
  )
}

export default function* projectSaga () {
  yield all([
    getProject()
  ])
}
