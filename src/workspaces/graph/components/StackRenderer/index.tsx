import { Box, Stack, VStack } from "@chakra-ui/react";
import { type Node } from "../common/types";

type StackRendererProps = {
  stack: Node[];
};

export function StackRenderer({ stack }: StackRendererProps) {
  return (
    <VStack spacing={4} alignItems="center">
      <Stack
        width="100px"
        maxW="100px"
        spacing="0"
        borderBottomRadius="lg"
        borderTopWidth="0"
        height="300px"
        display="flex"
        flexDirection="column-reverse"
        overflowY="auto"
        border="1px solid black"
      >
        {stack.map((Node) => (
          <Box
            height="40px"
            borderWidth="0px"
            borderTop="1px"
            borderColor="black"
            textAlign="center"
            py="1"
            bg="#f0f0f0f0"
          >
            {Node.value}
          </Box>
        ))}
      </Stack>
      <Box textAlign="center" fontWeight="500">
        Stack
      </Box>
    </VStack>
  );
}
