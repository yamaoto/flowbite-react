import { Kbd } from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Kbd } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>Shift</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Caps Lock</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Spacebar</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  );
}
`;

const codeRSC = `
import { Kbd } from "flowbite-react";

export function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>Shift</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Caps Lock</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Spacebar</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  );
}
`;

export function Component() {
  return (
    <div className="flex flex-wrap gap-1">
      <Kbd>Shift</Kbd>
      <Kbd>Ctrl</Kbd>
      <Kbd>Tab</Kbd>
      <Kbd>Caps Lock</Kbd>
      <Kbd>Esc</Kbd>
      <Kbd>Spacebar</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  );
}

export const root: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "kbd/kbd.root.tsx",
  component: <Component />,
};
