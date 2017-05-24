---
layout: post
title: "Create To Maintain"
date: 2017-05-23 20:37:33 +0530
categories: misc personal project
---
[![XKCD - Donal Knuth](https://imgs.xkcd.com/comics/donald_knuth.png)](https://www.xkcd.com/163/)

Always code with maintenance in mind, even if it's for a small project that you'll only be touching once and then ignoring forever. You may never know when you'll suddenly need to use it again, and then regret not having made it a lot more simple to understand and change. The biggest benefit is to make it simple and elegant, and writing code in such a way that reading the code without any comments would still be enough to understand what it's doing. Avoid clever tricks that don't really provide a benefit, or else provide detailed information along with the clever bits of code so that people can understand what's going in with all that complicated mess.

[![XKCD - Good Code](https://imgs.xkcd.com/comics/good_code.png)](https://xkcd.com/844/)

Sadly, this is something not everyone always keeps in mind (including me). Sometimes writing the code as fast as possible without much care about readability is more important than making it maintainable, since you may just plan to just "code, compile, use and forget" whatever you're doing, or maybe even because time constraints for a project force you to decide to refactor the code at a later point. For some of these cases, it is mostly fine, and you may actually be better off writing it again rather than changing what's already there if you intend to use it more seriously. In other cases, it can lead to a lot of problems later on, and result in regrets.

[![XKCD - Automation](https://imgs.xkcd.com/comics/automation.png)](https://xkcd.com/1319/)

Writing code in preparation for maintaining it later on results in not only lesser hastle for you in the future, but also allows you to pass it on to others who can work on it too without much difficulty. Someone else could take it over and continue working on it without constant confusion on how stuff works. If you ever need to modify it and use it later on, you'll be thankful.

The biggest problem, however, is not actually writing code that's maintainable, it's getting into the mindset to always write maintainable code. We generally forgo maintainability for small projects because we feel there's no need to go through that effort. However, if we always push ourselves to do so, not only do we ensure that we'll have no problems later on if we have to go back to it. You can also do it as practice for real projects, figuring out the best ways to get great code quality. It all starts with you deciding to make it so.

Now, if only I followed what I preach.