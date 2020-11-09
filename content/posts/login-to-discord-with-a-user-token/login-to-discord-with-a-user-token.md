---
title: How to login to discord with a user token
description: How to login to discord without a username or password.
date: 2020-04-19
author: zxffo
image: /assets/discord.png
category: Tutorial
---

This bug will most likely be patched soon, however please keep in mind that if the script doesn't work for you, it doesn't mean it won't work for someone else. So if you have any problems, scroll to the bottom of the page and click the mail icon to contact me with the issue.

Most people probably know of this script that you can use to inject a token into the local storage:

```javascript
setInterval(() => {
  document.body.appendChild(
    document.createElement`iframe`
  ).contentWindow.localStorage.token = `token goes here`;
}, 50);
setTimeout(() => {
  location.reload();
}, 2500);
```

However, as most of you have figured out, this method no longer works. When you run the script in the chrome develop console it will attempt to run but the page will just refresh. This means another method needs to be used in order to login. Luckily for you, there is a way to bypass it using a simple python script that you can download using:

```bash
git clone url goes here
```
