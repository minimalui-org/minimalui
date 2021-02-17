import {
  Button,
  Container,
  Modal,
  Paragraph,
  ScrollView,
  Title,
} from "@minimalui/core";
import React, { useState } from "react";

export const ModalScreen: React.FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ScrollView style={{ width: "100%" }}>
      <Container>
        <Button onPress={handleOpen}>Open</Button>
        <Modal onClose={handleClose} visible={open}>
          <Title>Hello</Title>
          <Paragraph>I am a modal</Paragraph>
        </Modal>
      </Container>
    </ScrollView>
  );
};

export default ModalScreen;
