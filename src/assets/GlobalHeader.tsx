import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Spacer,
  chakra,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiGithubFill, RiQuestionFill } from "react-icons/ri";
import { CommonHelp } from "../components/Dialogs/HelpDialog";
import { Logo } from "../components/Logo";
import { useAtom } from "jotai";
import { isHintOpen } from "../atoms";

type Props = {
  Hint: JSX.Element;
  children: JSX.Element;
};
export function GlobalHeader({ Hint, children }: Props) {
  const [showCommonHelp, setShowCommonHelp] = useState(false);
  const [_, setShowHint] = useAtom(isHintOpen);

  return (
    <>
      <Flex direction="column" height="100%">
        <Flex
          align="center"
          justify="space-between"
          shadow="md"
          backgroundColor="gray.50"
          px={3}
        >
          <Logo />
          <Box display={{ base: "none", lg: "block" }} fontSize="xl">
            はじめてのプログラミング
          </Box>
          <Spacer />
          <Button
            px={4}
            type="button"
            transition="color 0.2s"
            colorScheme="green"
            onClick={() => {
              window.location.href = "https://kf75.utcode.net";
            }}
          >
            駒場祭ホームページへ
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setShowCommonHelp(true)}
            px={3}
            py={2}
            m={3}
          >
            基本操作
          </Button>
          <Box display="flex" alignItems="stretch">
            <chakra.button
              px={4}
              type="button"
              transition="color 0.2s"
              _hover={{ color: "blue.300" }}
              onClick={() => {
                setShowHint(true);
              }}
            >
              ヘルプ
            </chakra.button>
            <chakra.button
              px={2}
              type="button"
              transition="color 0.2s"
              _hover={{ color: "blue.300" }}
              onClick={() => {
                alert("what is this");
              }}
            >
              <Icon w={6} h={6} as={RiQuestionFill} />
            </chakra.button>
            <Link
              display="flex"
              alignItems="center"
              transition="color 0.2s"
              _hover={{ color: "blue.300" }}
              px={2}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ut-code/first-programming"
            >
              <Icon w={6} h={6} as={RiGithubFill} />
            </Link>
          </Box>
        </Flex>
        <Box position="relative" flexGrow={1}>
          {children}
        </Box>
      </Flex>
      <CommonHelp
        onClose={() => {
          setShowCommonHelp(false);
        }}
        visible={showCommonHelp}
      />
      {Hint}
    </>
  );
}
