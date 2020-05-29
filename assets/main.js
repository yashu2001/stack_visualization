document.addEventListener('DOMContentLoaded',()=>{
    const stack=new Stack()
    const uiStack=document.getElementById('stack');
    setTimeout(()=>{
       document.getElementById('loader').style.display='none';
       document.getElementById('main-body').style.display='block'; 
    },1000);
    document.getElementById('push').addEventListener('click',()=>{
        let data=Math.round(Math.random()*10);
        let element=document.createElement('div')
        element.className='stack-element';
        element.innerHTML=data;
        stack.push(data)
        if(uiStack.childNodes[0].className!=='stack-element'){
            uiStack.innerHTML='';
            uiStack.appendChild(element);
        }
        else{
            uiStack.insertBefore(element,uiStack.childNodes[0]);
        }
    });
    document.getElementById('pop').addEventListener('click',()=>{
        stack.pop()
        if(uiStack.childNodes[0].className==='stack-element'){
            uiStack.childNodes[0].className='stack-element-removed';
            let tbr=uiStack.childNodes[0];
            setTimeout(()=>{
                tbr.remove();
                if(uiStack.childNodes.length===0){
                    uiStack.innerHTML='Looks like your stack is empty!'
                }
            },500);
        }
    });
});