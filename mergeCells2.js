function mergeCell(tableId, col) {
    var tr = document.getElementById(tableId);
    for (var i = 1; i < tr.rows.length; i++) { //表示数据内容的第二行
        if (tr.rows[i].cells[col].innerHTML === tr.rows[i - 1].cells[col].innerHTML) { //col代表列
            t = i - 1;
            while (tr.rows[i].cells[col].innerHTML === tr.rows[t].cells[col].innerHTML) {
                tr.rows[i].cells[col].style.display = "none";
                if (tr.rows[t].cells[col].rowSpan <= (i - t)) {
                    tr.rows[t].cells[col].rowSpan += 1; //设置前一行的rowspan+1
                }
                i++;
            }
        }
    }
}