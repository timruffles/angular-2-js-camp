/**
 * configures systemjs
 */
(function() {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
  };

  var packages = {
    'app': { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = {
      main: pkgName + '.umd.js',
      defaultExtension: 'js',
    };
  });

  System.config({
    paths: {
      "github:*":"https://github.jspm.io/*.js"
    },
    map: map,
    packages: packages
  });

})();
