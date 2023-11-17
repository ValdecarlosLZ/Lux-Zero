import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useRef, useState } from "react";
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/bootstrap4-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import { ListBox } from "primereact/listbox";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
// import Table from 'react-bootstrap/Table';
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
// import Collapse from "react-bootstrap/Collapse";
import Figure from "react-bootstrap/Figure";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";

function App() {
  // const [loading, setLoading] = useState(false);
  // const load = () => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // };

  // const [open, setOpen] = useState(false);

  const toast = useRef(null);

  const accept = () => {
    toast.current.show({
      severity: "info",
      summary: "Confirmado",
      detail: "Atualização concluida",
      life: 3000,
    });
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "Negado",
      detail: "Você não efetuou alterações",
      life: 3000,
    });
  };

  const confirm1 = () => {
    confirmDialog({
      message: "Confirmar este processo?",
      header: "Confirmação de atualização",
      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
    });
  };

  const confirm2 = () => {
    confirmDialog({
      message: "Você tem certeza que quer ocultar este item?",
      header: "Confirmação de oculção",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    });
  };

  const [selectedItens, setSelectedItens] = useState(null);
  const itens = [
    { name: "Produto", code: "prod" },
    { name: "Fornecedor", code: "forn" },
    { name: "Estabelecimento", code: "estabel" },
    { name: "Dados Pessoais", code: "dados" },
    { name: "Pagamento", code: "pagamento" },
    { name: "FAQ", code: "faq" },
  ];
  const itens2 = [
    {
      name: "SEDUC-MT",
      code: "03.507.415/0008-10",
      endereco:
        " Rua Engenheiro Edgar Prado Arze, Quadra 01, Lote 05, Setor A - Centro Político Administrativo, Cuiabá - MT, 78049-906",
      alter: true,
      cell: (row) => (
        <Button type="Button" class="btn btn-primary">
          <i class="far fa-eye"></i>
        </Button>
      ),
    },
    { name: "Fornecedor", code: "forn" },
    { name: "Estabelecimento", code: "estabel" },
    { name: "Dados Pessoais", code: "dados" },
    { name: "Pagamento", code: "pagamento" },
    { name: "FAQ", code: "faq" },
  ];
  return (
    <div className="full content">
      <div
        class="search"
        style={{ width: "300%", marginLeft: "100%", marginBottom: "5%" }}
      >
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              background: "none",
              padding: "2%",
              border: "none",
            }}
          >
            <Figure
              style={{
                marginBottom: "20%",
                alignSelf: "center",
                margin: "auto",
              }}
            >
              <Figure.Image
                width={24}
                height={26}
                alt="24x26"
                src="https://raw.githubusercontent.com/ValdecarlosLZ/Imagens/main/filtro.png"
                style={{ margin: "auto", marginRight: "1%" }}
              />
            </Figure>
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              position: "absolute",
              order: "10",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Dropdown.Item href="#/action-1">
              <Button></Button>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <Button></Button>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <Button></Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          type="text"
          id="search"
          aria-describedby="passwordHelpBlock"
          style={{
            marginLeft: "1%",
            margin: "auto !important",
            borderRadius: "5px",
            border: "1.5px solid #ced4da",
            padding: "7px",
            width: "100%",
            alignSelf: "center",
          }}
        />
        <Button
          className="p-button-help"
          as="input"
          type="button"
          label="Buscar"
          style={{
            padding: "auto !important",
            overflow: "visible !important",
            width: "17%",
            marginLeft: "1%",
          }}
        ></Button>
      </div>
      <div
        className="card flex justify-content-left"
        style={{ width: "100%", position: "absolute" }}
      >
        <ListBox
          value={selectedItens}
          onChange={(e) => setSelectedItens(e.value)}
          options={itens}
          optionLabel="name"
          className=" md:w-10rem"
          style={{ width: "100%", paddingRight: "0", borderRadius: "10px" }}
        />
        <DataTable
          value={itens2}
          tableStyle={{
            minWidth: "50rem",
            margin: "auto",
            marginTop: "-13.2%",
            marginLeft: "10%",
            width: "80%",
            position: "absolute",
            borderLeft: "1px solid #ced4da",
            borderBottom: "1px solid #ced4da",
            borderRight: "1px solid #ced4da",
            borderRadius: "0 0 10px 10px solid #ced4da",
          }}
        >
          <Column field="code" header="CNPJ" style={{ width: "20%" }}></Column>
          <Column field="name" header="Nome" style={{ width: "20%" }}></Column>
          <Column
            field="endereco"
            header="Endereço"
            style={{ width: "20%" }}
          ></Column>
          <Column
            field="gerente"
            header="Gerente"
            style={{ width: "20%" }}
          ></Column>
          <Column
          header="Alterar"
          body={(rowData) => (
            <Button
              label="Alterar"
              className="p-button-help"
              icon="pi pi-pencil"
              onClick={() => {
                // Lógica para alterar o item aqui
                console.log("Alterar item:", rowData);
              }}
            />
          )}
          style={{ width: "10%" }}
        ></Column>
          <Column
          header="Ocultar"
          body={(rowData) => (
            <Button
              label="Ocultar"
              className="p-button-danger"
              icon="pi pi-times"
              onClick={() => {
                // Lógica para ocultar o item aqui
                console.log("Ocultar item:", rowData);
              }}
            />
          )}
          style={{ width: "10%" }}
        ></Column>
        </DataTable>
        <>
          <Toast ref={toast} />
          <ConfirmDialog />
          <div
            className="card flex flex-wrap gap-2 justify-content-center"
            style={{ position: "relative", marginTop: "10%" }}
          >
            <Button
              onClick={confirm1}
              icon="pi pi-check"
              label="Confirmar"
              className="p-button-help"
              style={{
                textAlign: "center",
                float: "right",
                marginRight: "11%",
                marginTop: "10%",
              }}
            ></Button>
            <Button
              onClick={confirm2}
              icon="pi pi-times"
              label="Deletar"
              className="p-button-help"
              n
              style={{
                marginLeft: "2%",
                textAlign: "center",
                float: "right",
                marginRight: "1%",
                marginTop: "10%",
              }}
            ></Button>
          </div>
        </>
      </div>
    </div>
  );
}

export default App;
