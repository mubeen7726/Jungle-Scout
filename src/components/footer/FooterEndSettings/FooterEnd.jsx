import React from 'react';
import Link from 'next/link';
export default function FooterEnd() {
  return (
    <>
      <div className='container'>
        <div className=" container-fluid">
          <div className="row ">
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-3">
                <div>
                  <div className="dropdown ">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USA
                    </button>
                    <ul
                      className="dropdown-menu"
                      style={{
                        border: "1px solid black",
                        borderBottom: 'none',
                        borderRadius: "4px",
                        position: "absolute",
                        top: "-260px",
                        left: "13px",
                      }}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link className="dropdown-item" href="#!">France</Link>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#!">Deutschland</Link>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#!">Italia</Link>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#!">España</Link>
                        <p className='border border-1 border-dark'></p>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#!">中国</Link>
                        <p className='border border-1 border-dark'></p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-wrap  gap-3">
                  <div>
                    <Link href="/" className='text-decoration-none text-dark fs-6'>Privacy Center</Link>
                  </div>
                  <div>
                    <Link href="/" className='text-decoration-none text-dark fs-6'>Privacy Policy</Link>
                  </div>
                  <div>
                    <Link href="/" className='text-decoration-none text-dark fs-6'>Terms of Use</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='d-flex flex-wrap justify-content-end px-3 gap-3'>
                <div>
                  <img src="js-social-icons-facebook.svg" alt="Facebook" />
                </div>
                <div>
                  <img src="js-social-icons-x.svg" alt="X" />
                </div>
                <div>
                  <img src="js-social-icons-instagram.svg" alt="Instagram" />
                </div>
                <div>
                  <img src="js-social-icons-youtube.svg" alt="YouTube" />
                </div>
                <div>
                  <img src="js-social-icons-linkedIn.svg" alt="LinkedIn" />
                </div>
              </div>
              <div className='d-flex justify-content-end mt-3 px-3'>
                <small>Copyright 2024. All Rights Reserved</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
