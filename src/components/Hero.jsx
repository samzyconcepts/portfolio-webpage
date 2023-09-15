import profileImg from "../assets/work_image.jpg";
const Hero = () => {
    return (
        <div className="xl:max-w-5xl m-auto hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img
                    src={profileImg}
                    className="max-w-sm rounded-lg"
                    alt="profile"
                />
                <div>
                    <h1 className="font-bold text-5xl">Web Developer</h1>
                    <p className="py-6">
                        My name is Samson Oderinwale, I am a certified web
                        developer with over 4 years of experience in web
                        development. I am very vast in most web development
                        technology which includes HTML, CSS, Javascript and
                        frameworks like tailwindCSS and ReactJS in creating
                        amazinf and high converting website and web applications
                        for organizations and clients
                    </p>
                    <button className="btn btn-primary">Connect with me</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
