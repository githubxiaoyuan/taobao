displaySideNav();
// 触发网站导航
function displaySideNav() {
    var siteNavTrigger = document.getElementById('siteNavTrigger');
    var sideNavModule = document.getElementById('sideNavModule');
    siteNavTrigger.onmouseover = function() {
        sideNavModule.style.display = 'block';
        siteNavTrigger.style.backgroundColor = '#fff';
    };
    sideNavModule.onmouseover = function() {
        sideNavModule.style.display = 'block';
        siteNavTrigger.style.backgroundColor = '#fff';

    };
    siteNavTrigger.onmouseout = function() {
        sideNavModule.style.display = 'none';
        siteNavTrigger.style.backgroundColor = 'transparent';
    };
    sideNavModule.onmouseout = function() {
        sideNavModule.style.display = 'none';
        siteNavTrigger.style.backgroundColor = 'transparent';
    };
}