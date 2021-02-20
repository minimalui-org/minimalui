import { Container, ScrollView, Text } from "@minimalui/core";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { Markdown } from "components";
import * as React from "react";

export const PageScreen: React.FunctionComponent<
  DrawerScreenProps<{ Page: { title: string; file: string } }, "Page">
> = ({ route: { params = {} } }) => {
  const { file = "get_started" } = params;

  const [content, setContent] = React.useState<string>();

  React.useEffect(() => {
    // eslint-disable-next-line
    fetch(require(`../pages/${file}.md`))
      .then((t) => t.text())
      .then(setContent);
  }, [file]);

  return (
    <ScrollView>
      <Container md={8} sm={4} xs={2}>
        {content ? <Markdown>{content}</Markdown> : <Text>Loading...</Text>}
      </Container>
    </ScrollView>
  );
};

export default PageScreen;
