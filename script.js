
let body = document.querySelector('body')
let  label_chechbox = [
  'lorem qweerts','Re: Olfjaf', 'ladfjaepef','Ioeuq eqor erqor erqo',
  'Lofggl gfldsj gjs gfsl uipy gfdsg'
]
let  header_content = `<h2>Automatic selection of elements</h2>`
let  content_logic  =  `<p>Content logic: Shift + click</p>`



let class_wrapper  = `<div class='wrapper'>`
let e_div          = `</div>`
let label          = `<label>`
let e_label        =  `</label>`
let items          = `<div class='items'>`
let item           = `<div class='item'>`
let input          = `<input type='checkbox'>`

let element_generation = ``
let sample  = ``          
                   
for(let i = 0; i < label_chechbox.length; i++){

  element_generation += 
                        `${item}
                           ${input}
                           ${label}
                             ${label_chechbox[i]}
                           ${e_label}
                         ${e_div}`

 }   


 sample  += 
                      `${class_wrapper} 
                         ${header_content}
                         ${content_logic}
                         ${items}
                           ${element_generation}
                         ${e_div}
                       ${e_div}`;
 


body.innerHTML = sample//.replace(/^ +| +$|( ) +/g,"$1")


const checkboxes = document.querySelectorAll('.items input[type="checkbox"]')
console.log(checkboxes)






                  








