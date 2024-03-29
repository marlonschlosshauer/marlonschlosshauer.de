---
slug: "/blog/comparing-ui-frameworks"
type: 'blog'
date: "2021-10-31"
title: "A small comparison between Antd, Base-Web and Chakra-UI"
description: "I had great success using Antd for small personal projects but always wondered how it would stack up when compared to other UI frameworks, so I looked at some alternatives."
---

I had great success using Antd for small personal projects but always wondered how it would stack up when compared to other UI frameworks. I've previously used Material UI for Angular, Bootstrap for pure HTML and Antd for React. I like Antd. It looks great, has a rich feature-set and provides a simple API. So, what does the competition look like? I had no idea, so I decided to do a small comparison between Antd and other UI frameworks.

Besides the provided API and number of components available, the actual file size of the deployed site was something I was also curious about, too.

# Example site
To get a feel for the handling and features I build the same page three times. The site includes a navigation with a logo, some breadcrumbs, a headline, a table with an identicon avatar, a tag element showing colors and multiple buttons.

# Frameworks
While looking for opinions on customizing Antd I heard people mention that they're switching to [Base-Web](https://baseweb.design/) and [Chakra-UI](https://chakra-ui.com/). Both of which feature the minimalistic style I was actually looking to create within Antd.

I considered adding [Bootstrap](https://react-bootstrap.github.io/) into this comparison as I had prior experience with it, but I decided against it as I wanted to learn something new and grew tired of the look.

If I expand this comparison in the future I'd like to include [MaterialUI](https://mui.com/) (the React one, not the similiarly named  [Angular Material UI](https://material.angular.io/) as it offers a slick looking design. Another candidate would be [Carbon Design](https://www.carbondesignsystem.com/developing/react-tutorial/overview/) from IBM. It looks complicated to use but the design is too striking to pass up.
# Pages
## Antd

![antd](https://user-images.githubusercontent.com/24259317/211889542-b395ea87-3ab2-460c-8462-7be5af105366.png)

Link: [Antd](https://ant.design/)

Implementing the example in Antd was easy. Afterall, it is what I am most familiar with. Of the three it had the most concise syntax. As a result I built it the fastest. It also had all the components that I needed, though this could be the result of starting with an Antd design in my head and working it backwards to an example page.
Something that I noticed while building the site with the other two frameworks is that I rarely had to adjust spacing. This could be because of my inexperience in possible grid/layout systems with the other two frameworks though.
What I dislike about Antd, and what made me do this comparison, is that Antd's design is very flavorful. Sure, it is possible to change the highlight color, but UI elements come with a non-minimal style that makes your own components more likely to stand out.
This is also what drew me to the other frameworks, as they're both very minimalistic.

## Base-Web

![base](https://user-images.githubusercontent.com/24259317/211889547-45a25ea4-3815-4a7e-87ca-1c6fcb5054fd.png)

Link: [Base-Web](https://baseweb.design/)

I enjoyed using Base-Web. It's syntax differentiates from Antd in two ways. First, its docs uses ~Styletron~ to add CSS and to override styles. This however is entirely optional. Second, instead of overloading one component with all the possible features, Base-web rather offers multiple different versions of that component. I prefer the Antd way, as that leads to less code. Necessary lines of code is my only problem with Base-Web. Some features feel like they require a lot more code than you'd expect.
The designs of the components is something I prefer over Antd. It's my favorite of the three. The tall typography and square elements  look modern and clean. Lastly, the docs offer a component builder which allows to click together options and to copy the resulting code. I didn't use it because I didn't require the full feature-set of the framework, but it's a nice addition.

## Chakra-UI

![chakra](https://user-images.githubusercontent.com/24259317/211889549-735726fd-71ab-4710-909a-f6b12e91d431.png)

Link: [Chakra-UI](https://chakra-ui.com/)

Unsurprisingly, I needed the most lines of CSS with Chakra (Antd: 20, Base: 40, Chakra: 61), as it doesn't offer as many pre-built layouts. However this is far from a dealbreaker, as most layouts can be easily replicated with flexbox or grid. Chakra is mostly concise but doesn't have the huge feature list that the other two offer (at least in the standard version). For instance: I needed to build the table myself, instead of passing my column definition and data to a component.
Like Base-Web, Chakra is very minimalistic. The components are simpler to use, which makes it easier to change things.

# Sizes and load times
To get a ballpark number I deployed all three sites to github using [gh-pages](https://github.com/tschaub/gh-pages). It's an easy process that I often use to get something I can share quickly.
I did not tweak anything with the build.
Using the Firefox [Performance analysis tool](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor/Performance_analysis) in the Developer Tools I got the following numbers:

| Name             | JS     | Images | HTML | CSS    | Total Size |
|------------------|--------|--------|------|--------|------------|
| Antd             | 603.42 | 11.57  | 3.09 | 512.26 | 1133.35    |
| Base             | 326.38 | 11.57  | 3.02 | 3.02   | 341.76     |
| Chakra           | 330.85 | 11.57  | 3.04 | 1.01   | 346.47     |
| create-react-app | 129.17 | 11.57  | 3.09 | 0      | 143.83     |

 Transferred Size (in KB)

| Name             | JS     | Images | HTML | CSS  | Total Size |
|------------------|--------|--------|------|------|------------|
| Antd             | 191.18 | 67.76  | 12.4 | 2.21 | 273.56     |
| Base             | 89.19  | 12.4   | 2.2  | 1.18 | 104.97     |
| Chakra           | 103.96 | 12.4   | 2.2  | 1.26 | 119.82     |
| create-react-app | 43.15  | 10.64  | 1.85 | 0    | 55.64      |

Load times were also shown by Firefox but the numbers scattered a lot (e.g 0.23s - 0.66s) on all pages, making me think I am just comparing Githubs CDN. Bottom line is: All pages loaded fast, even with caching disabled.

To add further perspective I also deployed the "create-react-app" output. It's not a perfect comparison as it has none of the elements (table, identicons, etc.) but it took no time to do, so I added it.

Antd being at least twice as big as either one of the others was surprising. The fact that both Base-Web and Chakra-UI are so close to each other makes me think there is some optimization left on the table in the default build process for Antd.
Now I did use more components in Antd, as I not only used buttons and tags, but also the layout element in the app component. That's why I needed less CSS though. Does that justify an almost doubling in JS file size? I don't think so.

I am fine with Antd's bigger size, as it comes with everything you'd ever want. Although the difference is small, Base-Web being the smallest size is impressive as it also delivers a big list of features.

# Conclusion
While I didn't find a better API, with Base-Web I found a framework that is both easy to use and ships with a design that I prefer. As such I'm going to use it for my next project and see how it behaves in something that isn't just a table.
I'll continue to use Antd where I'm neither concerned with a minimal look nor the smallest possible file size. The API is still wonderful and the feature-set is great.

