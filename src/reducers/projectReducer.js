import { projectsType } from '../constants/project';

const initialState = {
  project : null | [] | {},
  projects: null | []
};

const projectReducer = ( state = initialState, action) =>{
  console.log('ddddddddddddddddddddddddddddddddddddddddd', state,'ffffffffffffffff',  projectsType);
  switch (action.type){
    case projectsType.get_project_success_async:
      debugger
    {
      console.log('ddddddddddddddddddddddddddddddddddddddddd', state, 'ddddddffffff', action.payload, ';;;;;;;;;;', action);
      debugger
      return{
        // ...state,
        project: action.payload
      }
      debugger
    } break;
    case projectsType.get_projects_success_async:
    {
      console.log('ddddddddddddddddddddddddddddddddddddddddd', state, 'lllllllllllllllllllllll', action);
      debugger
      return{
        ...state,
        projects: action.payload
      };
      break;
    }
    default:
      return state;
  }
};

export default  projectReducer;
