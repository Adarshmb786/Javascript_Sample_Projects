var addBtn = document.querySelector('.addBtn');
var des = document.querySelector('.des');
var dt = document.querySelector('.dt');
var amt = document.querySelector('.amt');
var totalExp = document.querySelector('#totalExp');
var warningMsg = document.querySelector('#warningMsg');
var letsgoBtn = document.querySelector('.letsgoBtn');
var container2 = document.querySelector('.container2');
var firstContainer = document.querySelector('.firstContainer');
var viewBtn = document.querySelector('#viewBtn');
var newRow = document.querySelector('.newRow');
var noRecords = document.querySelector('.noRecords');



var _des,_dt,_amt;
var addExp = 0;

letsgoBtn.addEventListener('click',function(){
    container2.style.display = "block"
    firstContainer.style.display = "none"



})

addBtn.addEventListener('click',function(){

    if(isNaN(des.value) && dt.value && !isNaN(amt.value)){
        _des = des.value;
        _dt = dt.value;
        _amt = Number(amt.value);
        addExp += _amt;
        totalExp.textContent = addExp+"₹";

        var tr = document.createElement('tr')
        var td = document.createElement('td')
        td.textContent = _dt;
        tr.appendChild(td)

        var td = document.createElement('td')
        td.textContent = _des;
        tr.appendChild(td)

        var td = document.createElement('td')
        td.textContent = _amt;
        var dltBtn = document.createElement('button')
        dltBtn.classList.add('close')
        var icon = document.createElement('i')
        icon.classList.add('bi','bi-trash')
        dltBtn.appendChild(icon)
        td.appendChild(dltBtn)
        tr.appendChild(td)
        newRow.appendChild(tr)
        
        dltBtn.addEventListener('click',function(){

            var a = tr.children[2].textContent
            addExp -= a;
            totalExp.textContent = addExp+"₹";

           
            tr.remove()
        })
        des.value = ""
        amt.value = ""
        dt.value = ""
        noRecords.style.display = "none"
        warningMsg.style.visibility = "hidden"

    }else{
        warningMsg.style.visibility = "visible"

    }    
    
})

