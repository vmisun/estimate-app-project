import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar class="navbar fixed-top justify-content-between">
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
            href="https://github.com/vmisun/estimate-app-project"
            target="_blank"
            title="Sprawdź kod tutaj"
            class="material-icons-outlined"
          >
            code
          </a>
          <a
            href="mailto:karolina.gniadzik@icloud.com"
            class="col-sm-6 mt-3"
            title="Send mail to Karolina Gniadzik"
          >
            <i class="fa-solid fa-at"></i>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}
