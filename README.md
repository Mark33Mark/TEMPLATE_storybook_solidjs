<a id="readme-top"></a>

[![watsonised][watsonised-logo]][watsonised-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![project_license][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/mark33mark/TEMPLATE_storybook_solidjs">
    <img src="readme_assets/generic_animated.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Storybook with SolidJS framework</h3>

  <p align="center">
    For use as a template for future component libraries and / or continuing as a component testing library  
    <br /><br />
    &middot;
    <a href="https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs"> view demo </a>
    &middot;
    <a href="https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/issues/new?labels=bug&template=bug-report---.md"> report bug/s </a>
    &middot;
    <a href="https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/issues/new?labels=enhancement&template=feature-request---.md"> request feature/s </a>
    &middot;
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Table of Contents</strong></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#layered-architecture">Layered Architecture</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#licence">Licence</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Netlify deployed page][product-screenshot]](https://storybk.netlify.app)

A Storybook component library using the React framework, a rework of [Storybook's introductory tutorial](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/), created as a raw javascript implementation.

### Built with:

<table>
<thead ></thead>
<tbody>
  <tr>
    <td><a href="https://tc39.es/"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000"/></a></td>
    <td><a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white"/></a></td>
    <td><a href="https://reactjs.org"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></a></td>
    <td><a href="https://redux.js.org"><img src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff"/></a></td>
    <td><a href="https://sass-lang.com"><img src="https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff" /></a></td>
    <td><a href="https://storybook.js.org/"><img src="https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=fff" /></a></td>
  </tr>
    <tr></tr>
  </tbody>
</table>

### Layered architecture:

```sh
.
├── LICENSE
├── README.md
├── index.html
├── netlify.toml
├── package.json
├── public
|   ├── images
├── src
|   ├── Main.jsx
|   ├── readme_assets
|   ├── components
|   ├── hooks
|   ├── store
|   └── styles
├── .storybook
|   ├── main.js
|   ├── manager.js
|   ├── preview.js
|   └── vitest.setup.js
└── vite.config.js

```

[<a href="#readme-top"> ⬆️ return to top </a>]

<!-- GETTING STARTED -->

## Getting Started

You will need node installed in your system and a package manager. This project has been set up for NPM, at the time using **Node v25.9.0** and **NPM v11.12.1**.

### Installation

1. clone the repo:
    ```sh
    git clone https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs.git
    ```
2. install NPM packages:
    ```sh
    npm i
    ```

<!-- USAGE EXAMPLES -->

## Usage

The code is deployed on [Netlify](https://storybk.netlify.app), which is why the codebase includes a netlify.toml file, refer to the [Layered Architecure](#layered-architecture) section above.

_For more examples, please refer to [Storybook's documentation](https://storybook.js.org/docs)_

<!-- ROADMAP -->

## Roadmap

- [ ] create a SolidJS storybook
- [ ] add more components to this Storybook

See the [open issues](https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/issues) for a full list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star!

1. fork the Project
2. create your feature-branch (`git checkout -b feature/AmazingFeature`)
3. commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. push to the branch (`git push origin feature/AmazingFeature`)
5. open a pull request

### Top contributors:

<a href="https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Mark33Mark/TEMPLATE_storybook_solidjs" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

## License

This software is subject to the MIT license, please have a read of the [MIT][the-mit-license] to understand the limits of our respective responsibilities to each other.

<!-- CONTACT -->

## Contact

mark@watsonised.me  
[get-watsonised](https://get.watsonised.me)

project: [https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs](https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Storybook](https://storybook.js.org/)

[<a href="#readme-top"> ⬆️ return to top </a>]

<!-- =============================================================================================== -->
<!-- README URL CONSTANTS -->

[git-repo-url]: https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs
[the-mit-license]: https://mit-license.org/
[watsonised-logo]: readme_assets/watsonised_animated.svg
[watsonised-url]: https://get.watsonised.me

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Mark33Mark/TEMPLATE_storybook_solidjs.svg?style=for-the-badge
[contributors-url]: https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Mark33Mark/TEMPLATE_storybook_solidjs.svg?style=for-the-badge
[forks-url]: https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/network/members
[stars-shield]: https://img.shields.io/github/stars/Mark33Mark/TEMPLATE_storybook_solidjs.svg?style=for-the-badge
[stars-url]: https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/stargazers
[issues-shield]: https://img.shields.io/github/issues/Mark33Mark/TEMPLATE_storybook_solidjs.svg?style=for-the-badge
[issues-url]: https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/issues
[license-shield]: https://img.shields.io/github/license/Mark33Mark/TEMPLATE_storybook_solidjs.svg?style=for-the-badge
[license-url]: https://github.com/Mark33Mark/TEMPLATE_storybook_solidjs/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/mark-watsonised/
[product-screenshot]: readme_assets/storybk_netlify_app_tutorial-tasksdashboard--docs.webp

<!-- Shields.io badges. A comprehensive list with many more badges is at: https://github.com/inttter/md-badges -->
<!-- API Development -->

[insomnia]: https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=white
[insomnia-url]: https://insomnia.rest
[swagger]: https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=173647
[swagger-url]: https://swagger.io

<!-- AI -->

[gemini]: https://img.shields.io/badge/Google%20Gemini-886FBF?logo=googlegemini&logoColor=fff
[gemini-url]: https://gemini.google.com
[no-ai]: https://custom-icon-badges.demolab.com/badge/No%20AI-2f2f2f?logo=non-ai&logoColor=white

<!-- Browsers -->

[chrome]: https://img.shields.io/badge/Google%20Chrome-4285F4?logo=GoogleChrome&logoColor=white
[chrome-url]: https://www.google.com
[firefox]: https://img.shields.io/badge/Firefox-FF7139?logo=firefoxbrowser&logoColor=white
[firefox-url]: https://www.firefox.com

<!-- Design -->

[storybook]: https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=fff
[storybook-url]: https://storybook.js.org/

<!-- Programming Language -->

[javaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000
[javaScript-url]: https://tc39.es/

<!-- Framework -->

[docker]: https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff
[docker-url]: https://www.docker.com
[nodejs]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org
[redux]: https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff
[redux-url]: https://redux.js.org
[sass]: https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff
[sass-url]: https://sass-lang.com
