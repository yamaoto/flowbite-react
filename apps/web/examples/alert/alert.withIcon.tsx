import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export function Component() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}
`;

const codeRSC = `
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export function Component() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}
`;

export function Component() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>
  );
}

export const withIcon: CodeData = {
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
  githubSlug: "alert/alert.withIcon.tsx",
  component: <Component />,
};
