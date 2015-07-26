![amok](https://cloud.githubusercontent.com/assets/157787/8890583/aef95820-3338-11e5-92fe-311bdf0106c1.png)

Amok is a free open source, editor agnostic, cross-platform command line
tool for a hassle-free live development, testing and debugging workflow for web browsers.

It aims to make the development workflow feel like a native script runtime with a zero configuration development server that supports pre-processing, a read-eval-print-loop and console mirroring to standard output.

It has additional features to enable live editing, primarily hot patching which allows you to edit the source code of scripts that are currently active on the page, which will then be re-sourced while the application is running. There is also generic file watch events for handling hot swapping of resources in a domain specific manner, like reloading css, images, et cetera.

[Watch video](http://www.youtube.com/watch?v=gOC2yQFsnnE).

## INSTALLATION

Install through npm

```sh
$ npm install --global amok
```

Note that amok requires node.js **v0.12 or greater**

## USAGE

```sh
$ amok --hot --browser chrome index.js
```

## DOCUMENTATION

See the [getting started](getting_started.md) guide, [examples](example/readme.md) and [manuals](man/readme.md).

## SUPPORT

* If you need help, ask in the [chat](http://gitter.im/caspervonb/amok).
* If you found a bug, submit an [issue](https://github.com/caspervonb/amok/issues).
* If you have an idea, submit an [issue](https://github.com/caspervonb/amok/issues).
* If you’d like to ask a general question, submit an [issue](https://github.com/caspervonb/amok/issues).
* If you want to contribute, submit a [pull request](https://github.com/caspervonb/amok/pulls).

## RELEASES

[See the changelog](changelog.md).

## LICENSE

The project is licensed under the [MIT License](license.md).

## SPONSORS

The project is free and open source, and has been backed by a number of
[individuals and organizations](backers.md), a special thanks goes out to
[Webflow](http://webflow.com), [Apperson Labs](http://appersonlabs.com) and
[Daft Developers](http://daftdevelopers.com).

If you would like to support the on-going development of the project please consider contributing via [Patreon](https://www.patreon.com/caspervonb) or  [Paypal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=E6AAA7DLLQU36&lc=NO&item_name=amok%2ejs&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted),
**every penny helps**.

<table>
  <tr>
    <th><img src="https://cloud.githubusercontent.com/assets/157787/8017972/6413d068-0c39-11e5-9b14-bbc9057976d1.png"/></th>
    <th><img src="https://cloud.githubusercontent.com/assets/157787/8017971/64134d6e-0c39-11e5-8acf-ec2049345265.png"/></th>
    <th><img src="https://cloud.githubusercontent.com/assets/157787/8017975/7e9595ac-0c39-11e5-9d71-a6fd34e821f0.png"/></th>
  </tr>
</table>
