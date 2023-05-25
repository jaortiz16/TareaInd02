const btn1 = document.getElementById('btn1');
    const v1 = document.getElementById('v1');
    const i1 = document.getElementById('i1');
    const v2 = document.getElementById('v2');
    const i2 = document.getElementById('i2');
    const an1 = document.getElementById('an1');
    const in1 = document.getElementById('in1');
    const show1 = document.getElementById('show1');
    const hide1 = document.getElementById('hide1');
    const hide2 = document.getElementById('hide2');
    const text1 = document.getElementById('text1');
    //show1
    show1.addEventListener('click',()=>{
        hide1.style.display = 'none';
        hide2.style.display = 'block';
        show1.style.display = 'none';
        btn1.innerText= 'Guardar';
        an1.style.display = 'none';
        text1.innerText = 'Formulario';

        
    })
    btn1.addEventListener('click',(e)=>{
     //preventdeafult
        e.preventDefault();
    })
  //validar form
    btn1.addEventListener('click',(e)=>{
        //preventdeafult
         e.preventDefault();
         if(i1.value.length < 1){
            v1.style.display = 'block';
         }else{
            v1.style.display = 'none';
         }
     })
        btn1.addEventListener('click',(e)=>{
            //preventdeafult
            e.preventDefault();
            if(i2.value.length < 1){
                v2.style.display = 'block';
            }else{
                v2.style.display = 'none';
            }
        })

        btn1.addEventListener('click',(e)=>{
            //preventdeafult
            e.preventDefault();
            if(in1.value.length < 1){
                an1.style.display = 'block';
            }else{
                an1.style.display = 'none';
            }
        })