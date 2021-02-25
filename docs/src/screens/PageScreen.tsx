import { Container, ScrollView, Spacer, View } from "@minimalui/core";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { capitalCase } from "change-case";
import { Markdown } from "components";
import * as React from "react";

export const pages = [
  ...["get_started", "demo", "theming", "hooks"].map((p) => ({
    path: p,
    title: capitalCase(p),
    files: [`${p}.md`],
  })),
  ...[
    "app_bar",
    "avatar",
    "button",
    "card",
    "fab",
    "icon_button",
    "input",
    "layout",
    "modal",
    "responsive_list",
    "switch",
    "text",
  ].map((p) => ({
    path: p,
    title: capitalCase(p),
    files: [
      `minimalui/variables/${p.replace("_", "")}.md`,
      `minimalui/types/${p.replace("_", "")}props.md`,
    ],
  })),
];

const MarkdownFile: React.FunctionComponent<{ file: string }> = ({ file }) => {
  const [content, setContent] = React.useState<string>();

  React.useEffect(() => {
    // eslint-disable-next-line
    fetch(require(`../pages/${file}`))
      .then((t) => t.text())
      .then((t) =>
        t
          .replace("# Variable:", "# ")
          .replace("# Type alias:", "# ")
          .replace(/• `Const` (.+)\n/, "")
          .replace(/Ƭ (.+)\n/, "")
      )
      .then(setContent);
  }, [file]);

  return content ? <Markdown>{content}</Markdown> : null;
};

export const PageScreen: React.FunctionComponent<
  DrawerScreenProps<{ Page: { path: string } }, "Page">
> = ({ route: { params = {} } }) => {
  const { path } = params;
  const page = pages.find((p) => p.path === path) || pages[0];

  return (
    <ScrollView>
      <Container md={8} sm={4} xs={2}>
        {page.files.map((p) => (
          <View key={p}>
            <MarkdownFile file={p} />
            <Spacer spacing={8} />
          </View>
        ))}
      </Container>
    </ScrollView>
  );
};

export default PageScreen;
