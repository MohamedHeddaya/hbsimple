<p align="center">
  <img src="hbsimple.svg" alt="hbsimple_logo">
</p>
<br>

<p align="center" style="text-align:center">
<h1>Heddaya Blocks Simple JS UI/UX Library - Developed By Mohamed Abdelsalam Ahmed Khalil Heddaya.</h1>
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
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
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


## About The Project

This Library Targeting Simplified UI/UX Development With A Neat System And Friendly Functions and No Prerequirities Or Any Additional Libraries Needed For Library To Work!

## Getting Started

<span style="font-family: 'Times New Roman', Times, serif; font-size: 24px; color: red;">

First, You Need To Know Some Basic Variables Of The System:

- hbsmpls object: This Object Is Holding The UI Elements Whole Data.

- hbsmpl(\<name>,\<base>,\<render>) function: This Function Is The Responsible For Making New Elements In The hbsimple.js environment! (note: the environment of hbsimple.js is independent for the most ui actions taken from js side,
recommended to not use any additional libraries beside the hbsimple.js environment! ).
  - \<name> Parameter For The Name Of The Element.
  - \<base> Parameter For The Base Render Like Coordinates, Position Type And Non Precentile Scale, and the list below is the basic keys for the base object:
      - `hbpos: For Position Type Setting`.
      - `hbx: For X-axis Coordinate`.
      - `hby: For Y-axis Coordinate`.
      - `hbw: For Width Scale In Pixels`.
      - `hbh: For Height Scale In Pixels`.
      - `hbp: For Specifing The Parent Element Name in hbsimple.js Data (default: "hbroot")`.
      - `hblnbl: Its Boolean For Indicating The Element As Svg Element Or Not (default: false)`.
      - `hbtag: For Specifing The Tag Name Of The Element`.
      - `hbsrc: Its For The Source Informing Like Images URL`.
  - \<render> Parameter For The Advanced Styling Render, you can basically just type the normal "JS DOM" style object keys names or choose the available shortcuts for some of the style object keys names, and some of the shortcuts is:
      - `hbbc: instead of "backgroundColor" key, It For Specifing The Background Color Of The Element`.
      - `hbwp: Its hbsimple.js Exclusive, It used for Width Scale in Precentage out of the parent element`.
      - `hbhp: Its hbsimple.js Exclusive, It used for Height Scale in Precentage out of the parent element`.
      - `hbin: For Specifing The Inner HTML content Of The Element`.
      - `hbbdt: instead of "borderTop" key, It For Specifing The Top Border Thickness Of The Element`.
      - `hbbdr: instead of "borderRight" key, It For Specifing The Right Border Thickness Of The Element`.
      - `hbbdl: instead of "borderLeft" key, It For Specifing The Left Border Thickness Of The Element`.
      - `hbbdb: instead of "borderBottom" key, It For Specifing The Bottom Border Thickness Of The Element`.
      - `hbbdc: instead of "borderColor" key, It For Specifing The Borders Color Of The Element`.

</span>