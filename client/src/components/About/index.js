function About() {
    return (
        <div className='d-flex mt-5 justify-content-center'>
            <div className='col-8 d-flex mt-5'>
                <div>
                    <img 
                    src={require('../../assets/images/selfie.jpeg').default}
                    alt='me'
                    style={{height: 300}}
                    className='rounded me-5'
                ></img>
                </div>
                <div style={{fontSize: 20}} className='text-start ml-5'>
                    <h2 className='mb-4'>About Me</h2>
                    <p className='mb-4'>
                        Hello, I'm Spencer! I am a Full-Stack Developer who loves learning and challenging myself daily. I have most recently been developing my skills in the MERN stack.
                    </p>
                    <p>
                        When I'm not studying web development I am usually out somewhere being active. Whether it involves sports, hiking, or just going on walks around the beach I love getting up and moving!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;