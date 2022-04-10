import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar class="navbar justify-content-between">
      <Container>
        <h5 className="ms-3 mt-0 mb-0">Karolina Gniadzik</h5>
        <div className="left">
          <a
            href="https://github.com/vmisun"
            target="_blank"
            title="Odwiedź GitHub autora"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://github.com/vmisun/estimate-webapp"
            target="_blank"
            title="Sprawdź kod tutaj"
          >
            <i class="fa-solid fa-code"></i>
          </a>
          <a
            href="mailto:karolina.gniadzik@icloud.com"
            class="col-sm-6 mt-3"
            title="Napisz e-mail do autora"
          >
            <i class="fa-solid fa-at"></i>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
