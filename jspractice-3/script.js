const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.getElementById('search');

/*search product using serach box*/

searchBox.addEventListener('keyup',(e)=>{
    searchText= e.target.value.toLowerCase().trim();
    buttons[0].classList.add('btn-clicked')
     boxes.forEach((box)=>{
        const data = box.dataset.item;
        console.log(data);
        if(data.includes(searchText)){
            box.style.display='block';
        }
        else{
            box.style.display='none';
        }
    });
});

/* buttons  */
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const btnfilter= e.target.dataset.filter;

        boxes.forEach((box)=>{
            if(btnfilter=='all'){
                box.style.display="block";
            }
            else{
                const boxfilter=box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display="block";
                }
                else{
                    box.style.display="none";
                }
            }
        })
       
    })
});

function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked')
}
