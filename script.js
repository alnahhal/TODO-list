let i = 1;

let addRow = function () {

    //  let row =  document.getElementsByClassName('tr-body')[0];
    //  let input = document.querySelector("input[type = 'text']");
    //  let inputVal = input.value;
    //  let col2 = document.getElementById('b-td2');
    //  inputVal = col2;



    let inTxt = document.querySelector('input[type = "text"]').value;
    if (inTxt == '') {
        alert('Enter Task')

    } else {

        let Tboby = document.getElementsByTagName('tbody')[0];
        let Tr = document.createElement('tr');


        let td1 = document.createElement('td');


        let Input = document.createElement('input');

        Input.setAttribute('type', 'checkbox');
        Tr.setAttribute('id', i++)
        // id
        let tr_id = Tr.getAttribute('id')
        if (tr_id % 2 == 0) {

            Tr.classList.add('even')
        } else {
            Tr.classList.add('odd')
        }


        let td2 = document.createElement('td')
        td2.innerText = inTxt;
        let td3 = document.createElement('td')
        let icon = document.createElement('i')
        ////////////////////////////////////
        Tboby.appendChild(Tr);
        Tr.appendChild(td1);
        Tr.appendChild(td2)
        Tr.appendChild(td3)
        td1.appendChild(Input);
        td3.appendChild(icon)

        icon.setAttribute('class', "fa-solid fa-trash-can")
        icon.setAttribute('onclick', `removeRow(${tr_id})`)


    }



}

let removeRow = function (id) {
   
   let gid =document.getElementById(id)
    gid.remove();

}   
