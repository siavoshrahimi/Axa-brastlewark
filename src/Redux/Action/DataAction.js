//search action
export const searchAction = (data,textInput) =>{
  return {
    type:'Search',
    data,
    textInput
  }
}
export const loaderAction = () => {
  return{
    type:'Loader'
  }
}
/*change page number bye number*/
export const PageAction = (page) =>{
  return{
    type: 'Get_Page',
    page
  }
}
/*go to next page with next button pagination*/
export const NextPageAction = () =>{
  return{
    type: 'Next_Page',
  }
}
/*go to prev page with prev button pagination*/
export const PrevPageAction = () =>{
  return{
    type: 'Prev_Page',
  }
}
export const ProfessionArrayAction = (data) =>{
  return{
    type:'Profession',
    data
  }
}

