import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-center mb-5 text-3xl'>Question and Answer</h2>
            <p className='px-8'>
                <b>Question-1:</b> The differences between uncontrolled and controlled components. <br />
                <b>Answer:</b> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. <br /><br />

                <b>Question-2:</b> How to validate React props using PropTypes <br />
                <b>Answer:</b> Props and PropTypes are important mechanisms     for passing read-only attributes between React components.
                We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app. <br /><br />

                <b>Question-3:</b>  The difference between nodejs and express js. <br />
                <b>Answer:</b> Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications". <br /><br />

                <b>Question-4:</b> What is a custom hook, and why will you create a custom hook? <br />
                <b>Answer:</b> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.
            </p>
        </div>
    );
};

export default Blog;