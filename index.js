App.controller('home', function (page) {
    // put stuff here
    $(page)
        .find('.app-button')
        .on('click', function () {
            console.log('button was clicked!');
        });

    $(page).on('appShow', function () {
        console.log('the user can see it!');
    });
});

App.controller('experience', function (page) {
    // put stuff here
});

App.controller('education', function (page) {
    // put stuff here
});

App.controller('project', function (page) {
    // put stuff here
});

App.controller('contact', function (page) {
    // put stuff here
});

App.controller('skill', function (page) {
    // put stuff here
});

App.controller('language', function (page) {
    // put stuff here
});

App.controller('media', function (page) {
    // put stuff here
});

App.setDefaultTransition('fade'); // global

// set per platform
App.setDefaultTransition({
    ios: 'fade', // iOS
    iosFallback: 'fade', // iOS <5
    android: 'fade', // Android
    androidFallback: 'fade', // Android < 4
    fallback: 'fade'   // non-iOS, non-Android
});

try {
    App.restore({ maxAge: 5*60*1000 });   //  the stack restores if the last session was only in the last 10 minutes.
} catch (err) {
    App.load('home');
}

//Welcome my app users

alert("Akinbode CV Mobile App");
