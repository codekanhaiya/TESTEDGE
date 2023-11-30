function PDRes(PdivId){
    var printContents = document.getElementById(PdivId).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}