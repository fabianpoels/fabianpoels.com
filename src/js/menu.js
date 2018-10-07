function toggleMenu() {
    var nav = document.getElementById('navigation');
    var button = document.getElementById('button')
    var content = document.getElementById('content')
    if (nav.className === 'visible') {
        nav.className = ''
        button.className = ''
        content.className = ''
    } else {
        nav.className = 'visible';
        button.className = 'active'
        content.className = 'menu-active'
    }
}
