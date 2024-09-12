import {
  Box,
  Flex,
  chakra,
  Icon,
  Link,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { RiQuestionFill, RiGithubFill } from "react-icons/ri";
import { Logo } from "../components/Logo";
import { CommonHelp } from "../components/HelpDialog";
import { useState } from "react";

type Props = {
  hint: JSX.Element,
  children: JSX.Element,
}
export function GlobalHeader({
  hint, children
}: Props) {
  const [showCommonHelp, setShowCommonHelp] = useState(true);
  const [showHint, setShowHint] = useState(false);

  return <>
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
            ヒント
          </chakra.button>
          <chakra.button
            px={2}
            type="button"
            transition="color 0.2s"
            _hover={{ color: "blue.300" }}
            onClick={() => {
              console.log("what is this");
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
            href="https://github.com/ut-code/may-fes-93-algorithm"
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
    <hint
      onClose={() => {
        setShowCommonHelp(false);
      }}
      visible={showCommonHelp}
    />
  </>
}
