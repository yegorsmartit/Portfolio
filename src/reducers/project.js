import { projects } from '../constants/project';

const initialState = null;

const projectReducer = ( state = initialState, action) =>{
  switch (action.type){
    case projects.get_project:
    {

        return action.data;
      break;
    }
    case projects.get_projects:
    {

      return action.data;
      break;
    }
    default:
      return state;
  }
};

export default projectReducer;
