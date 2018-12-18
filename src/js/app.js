import $ from 'jquery';
import {parseCode, assignment2} from './code-analyzer';



$(document).ready(function () {
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let params= $('#params').val();
        let parsedCode = parseCode(codeToParse);
        let newTextArray= assignment2(params,codeToParse);
        $('#parsedCode').val(JSON.stringify(parsedCode, null, 2));
        tokensTable(parsedCode);
        tableAss2(newTextArray);
    });
});

function tokensTable(parsedCode){
    let table= document.getElementById('ans_table');
    emptyTable(table);
    for(let i=1;i<parsedCode.length;i++) {
        var row = table.insertRow(i);
        var line_cell = row.insertCell(0);
        var type_cell = row.insertCell(1);
        var name_cell = row.insertCell(2);
        var condition_cell = row.insertCell(3);
        var value_cell = row.insertCell(4);
        line_cell.textContent = parsedCode[i].Line;
        type_cell.textContent = parsedCode[i].Type;
        name_cell.textContent = parsedCode[i].Name;
        condition_cell.textContent = parsedCode[i].Condition;
        value_cell.textContent = parsedCode[i].Value;

    }
}
function emptyTable(table) {
    let table_length=table.rows.length;
    for (let i=table_length-1;i>0;i--)
    {
        table.deleteRow(i);
    }
}

function tableAss2(newTextArray){
    let table= document.getElementById('ans2_table');
    emptyTable(table);
    //let newTextArray=textAfterParse(codeToParse);
    for(let i=0;i<newTextArray.length;i++){
        var row = table.insertRow(i);
        row.textContent = newTextArray[i].text;
        //let line=newTextArray[i].line;
        if(newTextArray[i].bool==1){
            row.className='trueValues';
        }
        else if (newTextArray[i].bool==0){
            row.className='falseValue';
        }
    }
}



