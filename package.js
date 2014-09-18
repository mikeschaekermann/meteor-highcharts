Package.describe({
    name: 'mikeschaekermann:meteor-highcharts',
    version: '0.0.1',
    summary: 'Easily create charts with Highcharts.',
    git: "https://github.com/mikeschaekermann/meteor-highcharts"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.use('jquery', 'client');
  api.addFiles('lib/highcharts.js','client');
});
