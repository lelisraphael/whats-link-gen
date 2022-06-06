import { useState } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
} from "reactstrap";
const Home = () => {
  const [telephone, setTelephone] = useState<String>();
  const [message, setMessage] = useState<String>();
  const [link, setLink] = useState<any>(null);

  const generateLink = () => {
    const resultLink =
      `https://api.whatsapp.com/send?phone=55${telephone}&text=${message}`.replace(
        " ",
        "%20"
      );
    setLink(resultLink);
  };

  return (
    <Container>
      <Row>
        <h1 className="mt-4 mb-3">Gerador de Link do WhatsApp</h1>
      </Row>
      <hr />
      <Row>
        <Col>
          <Row className="mt-5">
            <h2>Como Funciona?</h2>
            <ul className="mt-2">
              <p> 1. Insira seu telefone. </p>
              <p> 2. Insira uma mensagem.</p>
              <p> 3. Clique em "Gerar Link". </p>
              <p> 4. Pronto! Basta copiar o link e utilizar! </p>
            </ul>
          </Row>
        </Col>
        <Col>
          <Form className="mt-5">
            <FormGroup row>
              <Label for="telephone" sm={2}>
                Telefone
              </Label>
              <Col sm={10}>
                <Input
                  bsSize="lg"
                  id="telephone"
                  name="telephone"
                  placeholder="(DDD) xxxx-xxxx"
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="message" sm={2}>
                Mensagem
              </Label>
              <Col sm={10}>
                <Input
                  id="message"
                  name="message"
                  placeholder="Olá!"
                  bsSize="lg"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="link" sm={2}>
                Link
              </Label>
              <Col sm={10}>
                <textarea
                  id="link"
                  name="link"
                  value={link}
                  className="form-control"
                />
              </Col>
            </FormGroup>
          </Form>{" "}
          <Col>
            <Row>
              <Col>
                <Button color="primary" onClick={generateLink} size="lg">
                  Gerar Link
                </Button>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <hr className="mt-5" />
      <Row>Patrocinio</Row>
    </Container>
  );
};

export default Home;
