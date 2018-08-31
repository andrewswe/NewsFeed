const Post = require('../models/post.model');

module.exports = {

  seedPosts: () => {

    const titles = [
      'Survey: How Do You Use the LiveSafe Mobile App?',
      'Public safety switches app from Rave to LiveSafe',
      'Duke to Test DukeALERT System On Wednesday',
      'SureView Monitoring Platform Integrated With LiveSafe Mobile ...',
      'LiveSafe Named as Finalist for Retail Industry Leaders Association ...',
      'South by Southwest Staff and Volunteers Will Use This Va.-Based ...',
      'UVA Holds Demo for LiveSafe App to Improve Students\' Safety',
      'How to Live Safe: The App',
      'Groundbreaking LiveSafe Anteo Private Security Community ...',
      'CES 2018 Taps LiveSafe for Real-Time Crowdsourced Safety ...'
    ];

    const dates = [
      'August 1, 2018 03:24:00',
      'July 23, 2018 03:24:00',
      'November 29, 2017 03:24:00',
      'April 23, 2018 03:24:00',
      'March 5, 2018 03:24:00',
      'July 17, 2018 03:24:00',
      'November 28, 2017 03:24:00',
      'January 20, 2018 03:24:00',
      'March 29, 2018 03:24:00',
      'January 8, 2018 03:24:00'
    ];

    const urls = [
      'https://today.duke.edu/2018/08/survey-how-do-you-use-livesafe-mobile-app',
      'https://ung.edu/news/articles/2018/07/Public-safety-switches-app-from-Rave-to-LiveSafe.php',
      'https://today.duke.edu/2018/07/duke-test-dukealert-system-wednesday',
      'https://www.securitysales.com/integration/sureview-integrated-with-livesafe-mobile-platform/',
      'https://globenewswire.com/news-release/2018/04/23/1485559/0/en/LiveSafe-Named-as-Finalist-for-Retail-Industry-Leaders-Association-RILA-2018-Innovation-Award.html',
      'https://www.americaninno.com/dc/inno-news-dc/south-by-southwest-staff-and-volunteers-will-use-this-va-based-mobile-safety-app/',
      'http://www.nbc29.com/story/36947427/uva-holds-demo-for-livesafe-app-to-improve-students-safety',
      'https://www.thecorsaironline.com/corsair/2018/3/29/how-to-live-safe-the-app',
      'https://globenewswire.com/news-release/2018/03/15/1437964/0/en/Groundbreaking-LiveSafe-Anteo-Private-Security-Community-Dramatically-Increases-Organizations-Ability-to-Prevent-Incidents.html',
      'https://globenewswire.com/news-release/2018/01/08/1285337/0/en/CES-2018-Taps-LiveSafe-for-Real-Time-Crowdsourced-Safety-Security-Intelligence-and-Incident-Prevention.html'
    ];

    const users = [
      'Andrew Swe',
      'Rob Kelley',
      'Ryan Kerrigan',
      'Josh Norman',
      'Josh Doctson',
      'Alex Smith',
      'Derrius Guice',
      'Trent Williams',
      'Zach Brown',
      'Jon Allen',
    ];


    for(let i = 0; i < titles.length; i++){
      let newPost = new Post({
        title: titles[i],
        user: users[i],
        time: dates[i],
        url: urls[i]
      });
      newPost.save();
    }

    console.log('Database Seeded');
  }
};
