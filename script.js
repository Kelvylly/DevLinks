function trocartema(){
    const html = document.documentElement
  
    /*if(html.classList.contains('light')){
    html.classList.remove('light')
    }else{
      html.classList.add('light')
    }*/
    html.classList.toggle('light')
    
    const img = document.querySelector('#perfil')
    const tag = document.querySelector('#tag')
  
    if(html.classList.contains('light')){
      img.setAttribute('src', 'image/perfild-light.jpg')
      tag.textContent = '@Kl';
    }else{
      img.setAttribute('src', 'image/perfil.jpeg')
      tag.textContent = '@Kelvyllyz';
      
    }
  }