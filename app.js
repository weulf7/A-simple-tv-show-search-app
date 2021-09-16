const form=document.querySelector('#form')
form.addEventListener('submit',async function(e){
  e.preventDefault();
  console.log('Submited');
  const searchTerm=form.elements.query.value;
  const config={params:{q:searchTerm}}
  const res=await axios.get(`https://api.tvmaze.com/search/shows`,config)
  makeImages(res.data)

  form.elements.query.value='';

})

const makeImages=(shows)=>{
  const container=document.createElement('div');
  for(let result of shows){
    if (result.show.image) {
      const img =document.createElement('img')
      img.src=result.show.image.medium;
      img.style.marginRight='2rem'
      img.style.marginTop='2rem'
      container.appendChild(img)
      document.body.append(container)
    }

  }
}


  document.querySelector('.remove-btn').addEventListener('click',function(e){
      const container=document.querySelector('div');
      container.remove();
  })
 
  




