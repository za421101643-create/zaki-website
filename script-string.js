const data = [
    { الاسم: 'محمد علي', "رقم الهوية" : "00803616352", "اسم الموزع": 'محمد محمد', "رقم الموزع": '0599123456' },
        { الاسم: 'احمد خليل', "رقم الهوية" : "00803645352", "اسم الموزع": 'علي عمر', "رقم الموزع": '0599123555' },
    { الاسم: 'محمد باسم', "رقم الهوية" : "008036163055", "اسم الموزع": 'عوض عمر', "رقم الموزع": '0599123999' },
    { الاسم: 'عوض علي', "رقم الهوية" : "0080361652", "اسم الموزع": 'عوض عمر', "رقم الموزع": '0599125216' },
    { الاسم: 'خالد محمود', "رقم الهوية" : "0080361555", "اسم الموزع": 'محمد خالد', "رقم الموزع": '0599854456' },
    { الاسم: 'محمد عادل', "رقم الهوية" : "00803616545", "اسم الموزع": 'احمد مازن', "رقم الموزع": '0569123489' },

];

function createTableWithString(dataArray) {
    let tableHTML = '<table class="table table-striped">';

    // Add table headers
    tableHTML += '<thead><tr><th scope="col">#</th>';
    Object.keys(dataArray[0]).forEach(key => {
        tableHTML += `<th scope="col">${key}</th>`;
    });
    tableHTML += '</tr></thead><tbody>';

    let n = 1;
    // Add table rows and cells
    dataArray.forEach(item => {
        tableHTML += '<tr><td>'+ n++ +'</td>';
        Object.values(item).forEach(value => {
            tableHTML += `<td>${value}</td>`;
        });
        tableHTML += '</tr>';
    });

    tableHTML += '</tbody></table>';

    // Set the innerHTML of the container
    document.getElementById('table-container-string').innerHTML = tableHTML;
}

createTableWithString(data);
