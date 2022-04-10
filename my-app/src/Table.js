import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col, Table } from "react-bootstrap";
import "./Table.css";
import Header from "./Header";

export default function Items() {
  const [tableData, setTableData] = useState([]);
  const [Name, setName] = useState("");
  const [Des, setDes] = useState("");
  const [Category, setCategory] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");
  const [sum, setSum] = useState(0);
  const [sumQuantity, setSumQuantity] = useState(0);
  const [refreshTable, setRefreshTable] = useState(false);

  function addQuantity() {
    let totalQuantity = 0;
    tableData.map((item) => {
      totalQuantity = Number(item.Quantity) + totalQuantity;
      setSumQuantity(totalQuantity);
    });
  }

  function addPrice() {
    let totalPrice = 0;
    tableData.map((item) => {
      totalPrice = Number(item.Price) * Number(item.Quantity) + totalPrice;
      setSum(totalPrice.toFixed(2));
    });
  }

  useEffect(() => {
    if (tableData.length < 1) {
      setSumQuantity(0);
      setSum(0);
    }

    addQuantity();
    addPrice();
  }, [refreshTable]);

  function updateTableData(event) {
    event.preventDefault();
    setTableData([...tableData, { Name, Des, Category, Quantity, Price }]);
    setRefreshTable(!refreshTable);
  }

  function deleteItem(item, index) {
    let text = `Czy na pewno chcesz usunąć ${item.Name}?`;
    if (window.confirm(text) === true) {
      tableData.splice(index, 1);
      setRefreshTable(!refreshTable);
      text = "Usuwanie zakończone pomyślnie";
      alert(text);
    } else {
      text = "Usuwanie przerwane";
      alert(text);
    }
  }

  return (
    <Container>
      <Header />

      <Form className="mt-3" onSubmit={(event) => updateTableData(event)}>
        <Row className="mt-3 mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Nazwa pozycji"
              value={Name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Opis"
              value={Des}
              onChange={(event) => setDes(event.target.value)}
              required
            />
          </Col>
        </Row>
        <Row className="mt-3 mb-3">
          <Col>
            <Form.Select
              value={Category}
              onChange={(event) => setCategory(event.target.value)}
              required
            >
              <option value="" disabled>
                --Wybierz kategorię--
              </option>
              <option value="Podzespoły komputera">Podzespoły komputera</option>
              <option value="Urządzenia peryferyjne">
                Urządzenia peryferyjne
              </option>
              <option value="Oprogramowanie">Oprogramowanie</option>
              <option value="Inne">Inne</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              type="number"
              min="0"
              step="0.01"
              placeholder="Cena za szt."
              value={Price}
              onChange={(event) => setPrice(event.target.value)}
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="number"
              min="0"
              step="1"
              oninput="validity.valid||(value='');"
              placeholder="Ilość"
              value={Quantity}
              onChange={(event) => setQuantity(event.target.value)}
              required
            />
          </Col>
          <Col>
            <Button type="submit" className="mt-sm-0 mt-3">
              Zatwierdź
            </Button>
          </Col>
        </Row>
      </Form>

      <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nazwa</th>
            <th>Opis</th>
            <th>Kategoria</th>
            <th>Cena za szt. [zł]</th>
            <th>Ilość</th>
            <th>Cena łącznie [zł]</th>
            <th id="delete"></th>
          </tr>
        </thead>
        <tbody>
          {tableData
            ? tableData.map((item, index) => {
                return (
                  <tr>
                    <td id="number"></td>
                    <td>{item.Name}</td>
                    <td>{item.Des}</td>
                    <td>{item.Category}</td>
                    <td>{Number(item.Price).toFixed(2)}</td>
                    <td>{item.Quantity}</td>
                    <td>
                      {(Number(item.Quantity) * Number(item.Price)).toFixed(2)}
                    </td>
                    <td onClick={() => deleteItem(item, index)}>
                      <span className="material-icons-outlined" id="bin">
                        delete
                      </span>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
      <Table className="summary">
        <tbody>
          <td className="col-6">Podsumowanie</td>
          <td className="col-3">Łącznie {sumQuantity} szt.</td>
          <td className="col-3">{sum} zł</td>
        </tbody>
      </Table>
    </Container>
  );
}
