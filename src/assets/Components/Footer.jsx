import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto my-8 text-[#475467] font-semibold  px-3">
            <footer className="footer   text-base-content">
                <aside>
                    <img src="/image/logo.png" alt="" />
                    <p>Design amazing digital experiences <br />that create more happy in the world.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Product</h6>
                    <a className="link link-hover">Overview</a>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Solutions</a>
                    <a className="link link-hover">Tutorials</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Releases</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    
                    <Link to='/about'><a className="link link-hover">About us</a></Link>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                    <a className="link link-hover">News</a>
                    <a className="link link-hover">Media kit</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Newsletter</a>
                    <a className="link link-hover">Events</a>
                    <a className="link link-hover">Help centre</a>
                    <a className="link link-hover">Tutorials</a>
                    <a className="link link-hover">Support</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">LinkedIn</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">GitHub</a>
                    <a className="link link-hover">GitHub</a>
                    <a className="link link-hover">Dribbble</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms</a>
                    <a className="link link-hover">Privacy</a>
                    <a className="link link-hover">Cookie</a>
                    <a className="link link-hover">Licenses</a>
                    <a className="link link-hover">Settings</a>
                    <a className="link link-hover">Contact</a>
                </nav>
            </footer>
            <div className="md:flex justify-between my-5 p-3">
                <div className="py-3">
                    © 2024 Heritage- Nest . All rights reserved.
                </div>
                <div className="flex gap-6 justify-center py-3">
                    <img src="/image/Social icon.png" alt="" />
                    <img src="/image/Group(1).png" alt="" />
                    <img src="/image/Social icon(1).png" alt="" />
                    <img src="/image/Social icon(2).png" alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;