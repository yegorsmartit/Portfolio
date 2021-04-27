import { projectsType } from '../constants/project';

const initialState = {
  project : null| []
};

const projectReducer = ( state = initialState, action) =>{
  console.log('ddddddddddddddddddddddddddddddddddddddddd', state);
  switch (action.type){

    case projectsType.get_project:
      debugger
    {
      console.log('ddddddddddddddddddddddddddddddddddddddddd', state, 'ddddddffffff', action.payload);
      debugger
      return{
        // ...state,
        project: action.payload
      }
      debugger
    } break;
    case projectsType.get_projects:
    {
      console.log('ddddddddddddddddddddddddddddddddddddddddd', state);
      debugger
      return action.data;
      break;
    }
    default:
      return state;
  }
};

export default  projectReducer;
