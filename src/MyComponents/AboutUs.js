import React from 'react'
// import ProfilePic from "../../public/"
export default function AboutUs() {
    return (
        <div>
            <section className="h-100 gradient-custom-2">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card">
                                <div className="rounded-top text-white d-flex flex-row" style={{ background: "#000" }}>
                                    <div className="ms-4 mt-5 d-flex flex-column">
                                        <img alt="myalt" src={require("../Assets/image/Amit.jpg")} style={{ width: "150px" }} className="img-fluid img-thumbnail mt-4 mb-2"
                                        />
                                        <button type="button" className="btn btn-outline-dark" data-mdb-ripple-color="dark">
                                            Edit profile
                                        </button>
                                    </div>
                                    <div className="ms-3" >
                                        <h5>Andy Horwitz</h5>
                                        <p>New York</p>
                                    </div>
                                </div>
                                <div className="p-4 text-black" >
                                    <div className="d-flex justify-content-end text-center py-1">
                                        <div>
                                            <p className="mb-1 h5">253</p>
                                            <p className="small text-muted mb-0">Photos</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="mb-1 h5">1026</p>
                                            <p className="small text-muted mb-0">Followers</p>
                                        </div>
                                        <div>
                                            <p className="mb-1 h5">478</p>
                                            <p className="small text-muted mb-0">Following</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-4 text-black" >
                                    <div className="mb-5" >
                                        <p className="lead fw-normal mb-1">About</p>

                                        <p>
                                            I'm an experienced software engineer who constantly seeks out innovative solutions to
                                            everyday problems. In my seven years in this industry, I've honed my analytical thinking
                                            and collaboration skills, and I love working with a team. I've also had the opportunity
                                            to serve as the software engineer lead for three projects with First Technology
                                        </p>
                                        <div className="p-4" style={{ background: "#f8f9fa" }}>
                                            <p className="font-italic mb-1">Web Developer</p>
                                            <p className="font-italic mb-1">Lives in New York</p>
                                            <p className="font-italic mb-0">Photographer</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <p className="lead fw-normal mb-0">Recent photos</p>
                                        <p className="mb-0"></p>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col mb-2">
                                            <img alt="myalt" src={require("../Assets/image/1.webp")} className="w-100 rounded-3" />
                                        </div>
                                        <div className="col mb-2">
                                            <img alt="myalt" src={require("../Assets/image/2.webp")} className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                    <div className="row g-2">
                                        <div className="col">
                                            <img alt="myalt" src={require("../Assets/image/3.webp")} className="w-100 rounded-3" />
                                        </div>
                                        <div className="col">
                                            <img alt="myalt" src={require("../Assets/image/4.webp")} className="w-100 rounded-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}