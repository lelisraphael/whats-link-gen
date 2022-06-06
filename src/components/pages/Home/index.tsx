import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";
import { Button, FormGroup, Label, Row, Col, Container } from "reactstrap";
import { Inputs } from "./types";

const Home = () => {
  const [link, setLink] = useState<string>();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const resultLink =
      `https://api.whatsapp.com/send?phone=55${data.telephone}&text=${data.message}`.replace(
        " ",
        "%20"
      );
    setLink(resultLink);
  };

  return (
    <Container>
      <Row>
        <Col className="bg-success text-white text-center rounded">
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
        <Col className="">
          <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <FormGroup row>
              <Label for="telephone" sm={2}>
                Telefone
              </Label>
              <Col sm={10}>
                <InputMask
                  {...register("telephone", { required: true })}
                  mask="99999999999"
                  className="form-control form-control-lg"
                  aria-label="Telefone"
                  id="telephone"
                  name="telephone"
                  placeholder="(DDD) xxxx-xxxx"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="message" sm={2}>
                Mensagem
              </Label>
              <Col sm={10}>
                <input
                  {...register("message", { required: true })}
                  className="form-control form-control-lg"
                  aria-label="Mensagem"
                  id="message"
                  name="message"
                  placeholder="Olá!"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="link" sm={2}>
                Link
              </Label>
              <Col sm={10}>
                <textarea
                  aria-label="Link gerado"
                  id="link"
                  name="link"
                  rows={4}
                  value={link}
                  className="form-control"
                />
              </Col>
            </FormGroup>
            <Row>
              <Col>
                <div className="d-flex flex-row-reverse">
                  <Button
                    type="submit"
                    aria-label="Gerador de link"
                    className="align-right"
                    color="success"
                    size="lg"
                  >
                    Gerar Link
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
