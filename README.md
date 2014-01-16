js-widget-example
=================
An example of how to create a 3rd party javascript widget that loads in a website using an iframe.
This is the bootstraping code for the Gumball Ambassador widget that was used in http://www.getgumball.com
A congruent approach is used by companies such as Rafflecopter, Punchtab, and various Ad networks.

Usage
=================
The script depends on two elements being present on a page.

1. The script itself
2. A div which can be used as a marker for where the widget should appear. (You could also just append after the script tag itself)

```
<div id='gumball_7ad33654-683e-4194-9ef8-a0d9bc021d5b'></div>
<script type='text/javascript' src='http://cdn.getgumball.com/widget.main.js?id=7ad33654-683e-4194-9ef8-a0d9bc021d5b'></script>
```

Considerations
=================
Here are some things to consider when developing a 3rd part widget

1. This file needs to be as small as possible. It should get obfuscated, minified, and served from a CDN.
2. It has to be interoperable with as many CMS platforms... Wordpress, Blogger, Tumblr, and beyond.
3. Because of this it cannot depend on any 3rd party javascript libraries or frameworks.
