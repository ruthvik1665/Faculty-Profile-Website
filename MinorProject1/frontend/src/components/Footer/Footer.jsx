import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer class="bg-dark text-light py-5">
        <div class="container">
          <div class="row mb-4">
            <div class="col-md-3">
              <h5>Section</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Section</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Section</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <form>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email address"
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p class="text-center">
                &copy; 2022 Company, Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
