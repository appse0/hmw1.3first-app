import React from 'react'

function HelloWorld() {
 return <>
 <h1 >Hello, World!</h1>
 <AboutMe/>
 </>

}

function AboutMe() {
    return <>
    <h2>About Me</h2>
    <p>This is a simple about me section.</p>
    <p>My name is Alina and I am 17 years old.</p>
    <p>I am currently studying in NUFYP. I want to pursue a computer science degree.</p>
    </>
}


export default HelloWorld


