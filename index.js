const armenianRegions={title:'Հայաստան', children:[
    {title:'Շիրակ', children:[
        {title:'Գյումրի', children:[
          {title:'Սլաբոդկա', children:null}
        ]}
    ]},
    {title:'Տավուշ', children:[
        {title:'Իջևան', children:[
            {title:'Երիտասարդական', children: null}
        ]}
    ]},
    {title:'Լոռի', children:[
        {title:'Վանաձոր', children:[
            {title:'Դիմաց', children:null}
        ]}
    ]},
    {title:'Արագածոտն', children:[
        {title:'Աշտարակ', children:null}
    ]},
    {title:'Արմավիր', children:[
        {title:'Արմավիր', children:null}
    ]},
    {title:'Արարատ', children:[
        {title:'Արտաշատ', children:null}
    ]},
    {title:'Սյունիք', children:[
        {title:'Կապան', children:null}
    ]},
    {title:'Վայոց Ձոր', children:[
        {title:'Եղեգնաձոր', children:[
            {title:'Միկոյան', children:[
                {title:'Նորից Նոր', children:[]}
            ]}
        ]}
    ]},
    {title:'Գեղարքունիք', children:[
        {title:'Գավառ', children:null}
    ]},  
    {title:'Կոտայք', children:[
        {title:'Հրազդան', children:null}
    ]},
    {title:'Երևան', children:null},
]}

function createList(obj) {
    let ul=document.createElement('ul');  
    let li=document.createElement('li');
    let anchor=document.createElement('a');
    anchor.innerHTML=obj['title'];
      ul.append(li); 
      li.append(anchor); 
    if(obj['children']){           
        li.className="parent";  
    for(let i=0; i<obj['children'].length; i++){ 
        li.append(createList(obj['children'][i]))
    }
    }
    return ul
  }

let container = document.getElementById('regions');
container.append(createList(armenianRegions));
let parentList = Array.from(document.getElementsByClassName("parent"));
parentList.forEach(item => item.addEventListener('click', (e)=>{  
  e.target.classList.toggle("open");
  e.stopPropagation();
}));
