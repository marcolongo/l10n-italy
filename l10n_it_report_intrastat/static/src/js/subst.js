function subst(parameter) {

    var vars = {};
    var x = document.location.search.substring(1).split('&');
    for (var i in x) {
        var z = x[i].split('=', 2);
        vars[z[0]] = unescape(z[1]);
        }
    var x=['frompage', 'topage', 'page', 'webpage', 'section', 'subsection', 'subsubsection'];
    for (var i in x) {
        var y = document.getElementsByClassName(x[i]);
        for (var j=0; j<y.length; ++j)
            y[j].textContent = vars[x[i]];
        }

    var y = document.getElementsByClassName('page_with_offset');
    y[0].textContent = parseInt(y[0].textContent) + parseInt(vars['page']);

}