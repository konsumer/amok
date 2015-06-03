const web = require('browser_process');
const util = require('util');

const debug = util.debuglog('amok-browser');

function plugin(command, args) {
  if (typeof args === 'undefined') {
    args = [];
  }

  return function browser(inspector, runner, done) {
    args = args.slice(0);

    args.push.apply(args, web.options(command, {
      url: runner.get('url'),
      debug: runner.get('port'),
    }));

    debug('spawn %s %s', command, args.join(' '));
    web.spawn(command, args, function(error, browser) {
      if (error) {
        debug('bail %s', error.description);
        return done(error);
      }

      runner.once('close', function kill() {
        debug('kill');

        inspector.detatch();
        browser.kill('SIGTERM');
      });

      debug('find %s', runner.get('url'));
      process.nextTick(function find() {
        inspector.getTargets(runner.get('port'), 'localhost', function(error, targets) {
          if (error) {
            return process.nextTick(find);
          }

          var target = targets.filter(function(target) {
            return runner.get('url') === target.url;
          })[0];

          if (!target) {
            return process.nextTick(find);
          }

          debug('ready');
          done();
        });
      });
    });
  };
}

module.exports = plugin;