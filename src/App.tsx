import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Text,
  Box,
  Flex,
  chakra,
  Icon,
  Link,
  Button,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Spacer,
} from "@chakra-ui/react";
import { RiQuestionFill, RiGithubFill } from "react-icons/ri";
import { Logo } from "./components/Logo";
import { HelpDialog } from "./components/HelpDialog";
import { TutorialDialog } from "./components/TutorialDialog";
import { routes } from "./routes";
import { TopPage } from "./components/TopPage";
import { ChakraLink } from "./components/Wrappers";

export { MazeWorkspace as App } from "./workspaces/maze/index";
