"use strict";
// About box for the site homepage
//
// Copyright © 2013, 2014 OnlineGroups.net and Contributors.
// All Rights Reserved.
//
// This software is subject to the provisions of the Zope Public License,
// Version 2.1 (ZPL). http://groupserver.org/downloads/license/
jQuery.noConflict() 

function gs_site_home_about_init () {
    var about_home_id = '#gs-site-about-home', about_home_more_button = about_home_id + " .gs-content-js-more-buttons-more";
    GSMoreWidget(about_home_id);
    jQuery(about_home_more_button+":visible").click();
}

jQuery(window).load( function () {
    gsJsLoader.with_module('/++resource++gs-content-js-more-20140313.js', 
                           gs_site_home_about_init);
});
