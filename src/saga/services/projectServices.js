import axios from 'axios';
import projectImg from "../../resources/projectImg";

// import wLingua1 from "../../resources/images/wLingua/wLingua1.png";
// import wLingua2 from "../../resources/images/wLingua/wLingua2.png";
// import wLingua3 from "../../resources/images/wLingua/wLingua3.png";
// import wLingua4 from "../../resources/images/wLingua/wLingua4.png";
// import wLingua5 from "../../resources/images/wLingua/wLingua5.png";
// import wLingua6 from "../../resources/images/wLingua/wLingua6.png";
// import wLingua7 from "../../resources/images/wLingua/wLingua7.png";
// import wLingua8 from "../../resources/images/wLingua/wLingua8.png";
//
// let wLinguaImgArray = [
//   {image: wLingua1, title: 'wLingua'},
//   {image: wLingua2, title: 'wLingua'},
//   {image: wLingua3, title: 'wLingua'},
//   {image: wLingua4, title: 'wLingua'},
//   {image: wLingua5, title: 'wLingua'},
//   {image: wLingua6, title: 'wLingua'},
//   {image: wLingua7, title: 'wLingua'},
//   {image: wLingua8, title: 'wLingua'},
//   ];

const addOrientationToArray = imgArray =>{
  try{
    let imgObj = new Image();
    for(let i =0; i < imgArray.length; i++){
      imgObj.src= imgArray[i].image;
      if(imgObj.height < imgObj.width) {
        imgArray[i].orientation = 'landscape'
      }else{
        imgArray[i].orientation = 'portrait'
      }
    }
    return imgArray;
  }catch (e) {
    console.log(e);
  }
};

const findProject = title =>{
  console.log('hhhhhhhhhhhhhhhhhhhhhhhhhh', projectImg);
  for(let i = 0; i < 6; i++){
    // if()
  }
};

export default {
  get_project: async (title)=> {
    try{
      let project = findProject(title);
      project = addOrientationToArray(project);
      return project;
    }catch (e) {
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhggggggggggggggggggg', e);
    }
  }
}
