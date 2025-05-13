import React from 'react';
import Profile from "@components/Profile";
import Form from "@components/Form";

const AboutMe = () => {

    return (
        <div className='w-full h-full'>
            <Profile
                title={'About Me'}
                description={'Hey, I’m Jasper Lane — a Visual Storyteller and Photographer with a passion for capturing stories that feel alive. My work is about more than just images. It’s about celebrating human connections, and turning fleeting moments into lasting memories.\n' +
                    '\n' +
                    'My journey began with a simple curiosity — a desire to see the world through a different lens. Over the years, I’ve honed my craft, working with diverse clients to create images that are rich in emotion and storytelling. Whether it’s the soft glow of golden light, the quiet elegance of a natural setting, or the raw, unfiltered moments between people, I strive to capture the essence of every scene.\n' +
                    '\n' +
                    'I believe that great photography is about connection. It’s about making people feel seen, capturing their authentic selves, and revealing beauty in the unexpected. Each project is a chance to tell a new story, to see the world with fresh eyes, and to create something timeless.\n' +
                    '\n' +
                    'Explore my portfolio, discover the stories I’ve captured, and let’s create something unforgettable together.'}
                className={'py-30'}
            />
            <Form
                id="contact-form"
            />
        </div>
    );
};

export default AboutMe;